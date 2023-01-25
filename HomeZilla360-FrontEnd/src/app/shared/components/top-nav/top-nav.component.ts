import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ignoreElements } from 'rxjs';
import { TokenPayload } from 'src/app/core/models/token';
import { JwtService } from 'src/app/core/utils/jwt.service';
import { DashboardComponent } from 'src/app/features/customerDashboard/Components/Profile/profile.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    public jwtService: JwtService,
    private messageService: MessageService,
    private router: Router
  ) { }
  customerMenu!: MenuItem[];
  providerMenu!: MenuItem[];
  items!: MenuItem[];
  token: TokenPayload = new TokenPayload();

    ngOnInit() {
        this.customerMenu = [
            {
                label:'Dashboard',
                icon:'pi pi-fw pi-user',
                routerLink: '/customer/analytics'
            },
            {
                label:'Home',
                icon:'pi pi-fw pi-home',
                routerLink: '/home'
            },
            {
                label:'search',
                icon:'pi pi-fw pi-search',
                routerLink: '/search-result'
            },
            {
                label:'Logout',
                icon:'pi pi-fw pi-power-off',
                command: () => this.jwtService.logOut()
            }
        ];
        this.providerMenu = [
          {
              label:'Dashboard',
              icon:'pi pi-fw pi-user',
              routerLink: '/provider/analytics'
          },
          {
              label:'Logout',
              icon:'pi pi-fw pi-power-off',
              command: () => this.jwtService.logOut()
          }
      ];
    } 
    isLogged (): Boolean{
      var isLoggedIn = this.jwtService.isLogged();
      if(isLoggedIn)
      {
        this.token = this.jwtService.getDecodedToken();
        if(this.token.role == "Customer")
        {
          this.items = this.customerMenu;
        }
        else{
          this.items = this.providerMenu;
        }
        return true;
      }
      else{
        return false;
      }
    } 

    dashBoard()
    {
      var token  = this.jwtService.getDecodedToken();
      if(token.role === "Customer")
          {
            this.router.navigate(['/customer/analytics'])
          }
          else{
            this.router.navigate(['/provider/analytics'])
          }
    }

}
