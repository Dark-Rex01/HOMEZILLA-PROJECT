import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Account',
        routerLink: 'forgot-password-email-form'
      },
      {
        label: 'Reset Password',
        routerLink: 'forgot-password-reset-form',
      },
    ];
  }
}

