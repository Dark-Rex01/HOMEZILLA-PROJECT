import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Verification } from '../../../models/verification';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['../register.component.css']
})
export class VerificationComponent implements OnInit {

  public verifyData: Verification = new Verification;
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.authService.userEmailId.subscribe(response => {
    this.verifyData.email = response; 
    })
  }

  onOtpChange(otp: string) {
    this.verifyData.otp = parseInt(otp);
  }


  // verify otp
  onSubmit()
  {
    this.authService.verifyAccount(this.verifyData).subscribe({
      next: (res)=>{
        this.router.navigateByUrl('/login').then(() => {
          this.messageService.add({severity:'success', summary: "Verified Successfully", life: 3000});
        });
        
    },
    error: (err) => {
      this.messageService.add({severity:'error', summary: "Invalid OTP", life: 3000});
    },
    })
  }

}
