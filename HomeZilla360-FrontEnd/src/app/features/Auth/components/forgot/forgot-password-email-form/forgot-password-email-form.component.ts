import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password-email-form',
  templateUrl: './forgot-password-email-form.component.html',
  styleUrls: ['../forgot.component.css']
})
export class ForgotPasswordEmailFormComponent implements OnInit {

  forgotForm!: FormGroup; 
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get f() { return this.forgotForm.controls; }

  onSubmit()
  {
    this.submitted = true;
    if(this.forgotForm.invalid)
    {
      return;
    }
    else{
      this.authService.forgotPassword(this.forgotForm.value.email).subscribe({
        next: (res) => {
          this.router.navigate(['/forgot-password/forgot-password-reset-form']).then(() => {
            this.messageService.add({severity:'success', summary: res.body.message, life: 3000});
          })
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary: err.error.message, life: 3000});
        }

      })
    }
  }

}
