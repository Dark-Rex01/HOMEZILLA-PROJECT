import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { ViewProfileComponent } from '../view-profile/view-profile.component';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css'],
})
export class ProviderProfileComponent implements OnInit {
  items: MenuItem[];

  scrollableItems: MenuItem[];

  activeItem: MenuItem;

  activeItem2: MenuItem;

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'View Profile',
        icon: 'pi pi-fw pi-home',
        routerLink: ['view-profile'],
      },
      {
        label: 'Update Profile',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['edit-profile'],
      },
      {
        label: 'Add Services',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['edit-service'],
      },
    ];

    this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({
      label: `Tab ${i + 1}`,
    }));

    this.activeItem = this.items[0];

    this.activeItem2 = this.scrollableItems[0];
  }
}
function onClickMenu(items: any, any: any) {
  throw new Error('Function not implemented.');
}
