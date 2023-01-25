import { Component, Inject, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { TokenPayload } from 'src/app/core/models/token';
import { JwtService } from 'src/app/core/utils/jwt.service';


 @Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  dockBasicItems: MenuItem[] = [];

  constructor(
    private router: Router  ,  
    private jwtService: JwtService
    
    ) { }

    isLoggedIn = false;

    isLoginFailed = false;
  
    errorMessage = '';
  
    roles: string[] = [];

    Token: TokenPayload = new TokenPayload();

    ngOnInit() {
      
      this.dockBasicItems = [
        {
            
            label: 'Analytics',
            icon: "assets/sidenav/d2.png",
            command: () => {this.analytics()}
        },
        {
            label: 'Current Orders',
            icon: "assets/sidenav/current.png",
            command: () => {this.currentOrders()}
        },
        {
            label: 'Orders History',
            icon: "assets/sidenav/order.png",
            command: ()=> {this.pastOrders();}
        },
        {
            label: 'Profile', 
            icon: "assets/sidenav/prof1.png",        
            command: () => {this.profile();
            }
        }
    ];
  }
    profile(){

      this.Token = this.jwtService.getDecodedToken();
  
      if(this.Token.role=="Customer"){
  
        this.router.navigate(['/customer/profile']);
  
     }
  
     else if(this.Token.role=="Provider"){
  
       this.router.navigate(['/provider/profile/edit-profile']);
  
     }
  
    }

    
  currentOrders(){



    this.Token = this.jwtService.getDecodedToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/customer/current-order']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/provider/current-orders']);

   }

  }

  pastOrders(){

    this.Token = this.jwtService.getDecodedToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/customer/order-history']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/provider/order-history']);

   }

  }

  analytics(){

    this.Token = this.jwtService.getDecodedToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/customer/analytics']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/provider/analytics']);

   }

  }


    }
 