import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { JwtService } from 'src/app/core/utils/jwt.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted =  false;

  isText:boolean = false;
  eyeIcon: string = "bi-eye-slash-fill";
  type:string = "password";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private storageService: StorageService,
    private jwtService: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  }

  get f() { return this.loginForm.controls; }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bi-eye-fill" : this.eyeIcon = "bi-eye-slash-fill";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    else{
      this.authService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.storageService.saveToken(res['headers'].get('authorization'));
          var token = this.jwtService.getDecodedToken();
          if(token.role === "Customer")
          {
            this.router.navigate(['/customer/analytics']).then(() => {
              this.messageService.add({severity:'success', summary: res.body.message, life: 3000});
            })
          }
          else{
            this.router.navigate(['/provider/analytics']).then(() => {
              this.messageService.add({severity:'success', summary: res.body.message, life: 3000});
            })
          }
          
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary: err.error.message, life: 3000});
        }
      })
    }
  }
}
