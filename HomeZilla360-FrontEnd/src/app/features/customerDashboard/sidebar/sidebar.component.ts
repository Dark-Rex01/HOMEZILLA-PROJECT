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
            routerLink: '/customeranalytics',
            icon: "assets/dash.png",
            command: () => {this.analytics()}
        },
        {
            label: 'Current Orders',
            icon: "assets/cart1.png",
            routerLink: '/currentorders'
        },
        {
            label: 'Orders History',
            icon: "assets/cart2.png",
            routerLink: '/ordershistory',
            command: ()=> {this.pastOrders();}
        },
        {
            label: 'Profile',
            routerLink: '/dashboard', 
            icon: "assets/pro.png",        
            command: () => {this.dashboard();
            }
        }
    ];
  }
    dashboard(){

      this.Token = this.jwtService.getDecodedToken();
  
      if(this.Token.role=="Customer"){
  
        this.router.navigate(['/dashboard']);
  
     }
  
     else if(this.Token.role=="Provider"){
  
       this.router.navigate(['/providers']);
  
     }
  
    }

    
  currentOrders(){



    this.Token = this.jwtService.getDecodedToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/current-order']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/p-current-order']);

   }

  }

  pastOrders(){

    this.Token = this.jwtService.getDecodedToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/past-order']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/p-past-order']);

   }

  }

  analytics(){

    this.Token = this.jwtService.getDecodedToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/analytics']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/p-analytics']);

   }

  }


    }
 