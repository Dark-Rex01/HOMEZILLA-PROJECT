import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from '../../../models/signUp';
import { AuthService } from '../../../services/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../register.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  userData!: SignUp;

  isText:boolean = false;
  eyeIcon: string = "bi-eye-slash-fill";
  type:string = "password";

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userRole: ['', [Validators.required]]
    })
  }

  get f() { return this.registerForm.controls; }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bi-eye-fill" : this.eyeIcon = "bi-eye-slash-fill";
    this.isText ? this.type = "text" : this.type = "password";
  }

  // register user
  onSubmit()
  {
    this.submitted = true;
    if(this.registerForm.invalid)
    {
      return;
    }
    else{
      this.userData = this.registerForm.value;
      this.authService.signUp(this.userData).subscribe({
        next: (res) => {
          this.router.navigate(['/register/verification-form']).then(() => {
            this.messageService.add({severity:'success', summary: "Registration Successful", life: 3000});
          })
        },
        error: (err => {
          this.messageService.add({severity:'error', summary: "Email Exists Already", life: 3000});
        })
      });
    }
    
  }
}
