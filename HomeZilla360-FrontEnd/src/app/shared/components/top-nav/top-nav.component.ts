import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MenuItem} from 'primeng/api';
import { TokenPayload } from 'src/app/core/models/token';
import { JwtService } from 'src/app/core/utils/jwt.service';
import { ProfilesService } from 'src/app/features/customerDashboard/Services/profiles.service';
import { ProfileService } from 'src/app/features/provider/services/profile.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    public jwtService: JwtService,
    private providerService: ProfileService,
    private customerServcie: ProfilesService,
    private router: Router
  ) 
  {
    if (event instanceof NavigationStart) {
      console.log("change");
    }
  }
  customerMenu!: MenuItem[];
  providerMenu!: MenuItem[];
  profilePic: string;
  items!: MenuItem[];
  token: TokenPayload = new TokenPayload();
  logged: Boolean = false;

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
              command: () => {
                this.LogOut();
              }

          }
      ];
      this.isLogged();
    } 
    LogOut(): void{
      this.jwtService.logOut();
      this.logged = false;
    }
    isLogged (): boolean{
      var isLoggedIn = this.jwtService.isLogged();
      if(isLoggedIn)
      {
        this.token = this.jwtService.getDecodedToken();
        if(this.token.role == "Customer")
        {
          this.items = this.customerMenu;
          // this.customerServcie.getProfileDetails().subscribe(res => {
          //   this.profilePic = res.profilePicture;
          // })
        }
        else{
          this.items = this.providerMenu;
          // this.providerService.getProviderProfileDetails().subscribe(res => {
          //   this.profilePic = res.profilePicture;
          // })
        }
        return  true;
      }
      else{
        return false;
      }
    } 

}
