import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import Validation from 'src/app/core/utils/validation';
import { ResetPassword } from '../../../models/resetPassword';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password-reset-form',
  templateUrl: './forgot-password-reset-form.component.html',
  styleUrls: ['../forgot.component.css']
})
export class ForgotPasswordResetFormComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  public resetData: ResetPassword = new ResetPassword();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [Validation.match('newPassword', 'confirmPassword')]
    })

    this.authService.userEmailId.subscribe(response => {
      this.resetData.email = response; 
      })
  }

  get f() { return this.resetForm.controls; }

  onSubmit()
  {
    this.submitted = true;
    if(this.resetForm.invalid)
    {
      return;
    }
    else{
      this.resetData.confirmPassword = this.resetForm.value.confirmPassword;
      this.resetData.password = this.resetForm.value.newPassword;
      this.authService.resetPassword(this.resetData).subscribe({
        next: (res) => {
          this.messageService.add({severity:'success', summary: res.body.message, life: 3000});
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary: err.error.message, life: 3000});
        }
      })
    }
  }

  onOtpChange(otp: string) {
    this.resetData.otp = parseInt(otp);
    console.log(this.resetData);
  }

}
