import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ignoreElements } from 'rxjs';
import { TokenPayload } from 'src/app/core/models/token';
import { JwtService } from 'src/app/core/utils/jwt.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    public jwtService: JwtService
  ) { }
  items!: MenuItem[];
  token: TokenPayload = new TokenPayload();

    ngOnInit() {
        this.items = [
            {
                label:'Dashboard',
                icon:'pi pi-fw pi-user'
            },
            {
                label:'Home',
                icon:'pi pi-fw pi-home',
                routerLink: '/home'
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
        return true;
      }
      else{
        return false;
      }
    } 

}
