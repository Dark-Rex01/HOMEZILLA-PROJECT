import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenPayload } from 'src/app/core/models/token';
import { JwtService } from 'src/app/core/utils/jwt.service';

 @Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  static dockBasicItems: MenuItem[] = [];
  customerItems: MenuItem[] = [];
  providerItems: MenuItem[] = [];

  constructor(
    private jwtService: JwtService
    ) { }

    isLoggedIn = false;
    isLoginFailed = false;
    tooltipLabel?: 'Profile';
    errorMessage = '';
    roles: string[] = [];
    Token: TokenPayload = new TokenPayload();

    get menu()
    {
        return SidebarComponent.dockBasicItems;
    }

    ngOnInit() {
      
    this.customerItems = [
        { 
            label: 'Profile', 
            tooltip:'Profile',
            icon: "assets/icons/profile.png",        
            routerLink:  '/customer/profile'
        },
        {
            label: 'Current Orders',
            tooltip:'Current Orders',
            icon: "assets/icons/order.png",
            routerLink:  '/customer/current-order'
        },
        {
            label: 'Orders History',
            tooltip:'Order History',
            icon: "assets/icons/orders-history.png",
            routerLink:  '/customer/order-history'
        },
        {
            label: 'Analytics',
            tooltip:'Analytics',
            icon: "assets/icons/data-analytics.png",
            routerLink:  '/customer/analytics'
        }
    ];
    this.providerItems = [
        { 
            label: 'Profile', 
            tooltip:'Profile',
            icon: "assets/icons/profile.png",        
            routerLink:  '/provider/profile/edit-profile'
        },
        {
            label: 'Current Orders',
            tooltip:'Current Orders',
            icon: "assets/icons/order.png",
            routerLink:  '/provider/current-orders'
        },
        {
            label: 'Orders History',
            tooltip:'Order History',
            icon: "assets/icons/orders-history.png",
            routerLink:  '/provider/order-history'
        },
        {
            label: 'Analytics',
            tooltip:'Analytics',
            icon: "assets/icons/data-analytics.png",
            routerLink:  '/provider/analytics'
        }
    ];
    this.checkRole();
  }
    checkRole(){

     this.Token = this.jwtService.getDecodedToken();
     console.log("token")
  
     if(this.Token.role=="Customer"){
  
        SidebarComponent.dockBasicItems = this.customerItems;
     }
     else if(this.Token.role=="Provider"){
        SidebarComponent.dockBasicItems = this.providerItems;
     }
    }
}