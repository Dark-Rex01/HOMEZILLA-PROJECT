import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dock-menu',
  templateUrl: './dock-menu.component.html',
  styleUrls: ['./dock-menu.component.scss']
})
export class DockMenuComponent implements OnInit {

  dockBasicItems: MenuItem[] = new Array();
  constructor() { }

  ngOnInit(): void {
    this.dockBasicItems = [
      {
          label: 'Profile',
          icon: 'profile-icon'
      },
      {
          label: 'Orders',
          icon: 'assets/showcase/images/dock/appstore.svg'
      },
      {
          label: 'History',
          icon: 'assets/showcase/images/dock/photos.svg'
      },
      {
          label: 'Analytics',
          icon: 'assets/showcase/images/dock/trash.png'
      }
  ];
  }

}
