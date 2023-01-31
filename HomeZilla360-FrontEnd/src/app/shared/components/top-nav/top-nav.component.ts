import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MenuItem, MessageService} from 'primeng/api';
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
    private router: Router,
    private messageService: MessageService
  ) 
  {

  }
  customerMenu!: MenuItem[];
  providerMenu!: MenuItem[];
  static profilePic: string;
  static userName: string;
  static items: MenuItem[];
  token: TokenPayload = new TokenPayload();
  static logged: Boolean = false;
  get log() {
    return  TopNavComponent.logged;
  }
  get item()
  {
    return TopNavComponent.items;
  }
  get profile()
  {
    return TopNavComponent.profilePic;
  }
  get user()
  {
    return TopNavComponent.userName;
  }
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
                command: () => this.LogOut()
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
      TopNavComponent.logged = this.isLogged();
    } 
    LogOut(): void{
      this.jwtService.logOut();
      TopNavComponent.logged = this.isLogged();
      this.router.navigate(['/home']).then(() => {
        this.messageService.add({severity:'success', summary: "Logout Successfull", life: 3000});
      })
      
    }
    isLogged (): boolean{
      var isLoggedIn = this.jwtService.isLogged();
      if(isLoggedIn)
      {
        this.token = this.jwtService.getDecodedToken();
        TopNavComponent.logged
        if(this.token.role == "Customer")
        {
          TopNavComponent.items = this.customerMenu;
          this.customerServcie.getProfileDetails().subscribe(res => {
            TopNavComponent.profilePic = res.profilePicture;
            TopNavComponent.userName = res.userName;
          })
        }
        else{
          TopNavComponent.items = this.providerMenu;
          this.providerService.getProviderProfileDetails().subscribe(res => {
            TopNavComponent.profilePic = res.profilePicture;
            TopNavComponent.userName = res.userName;
          })
        }
        return  true;
      }
      else{
        return false;
      }
    } 

}
