import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { TokenPayload } from '../models/token';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderGuard implements CanActivate {

  user: TokenPayload
  constructor(
    private jwtService: JwtService,
    private router: Router,
    private messageService: MessageService
  )
  {

  }
  canActivate(): boolean {
    this.user = this.jwtService.getDecodedToken();
    if(this.user.role == 'Provider')
    {
      return true;
    }
    else{
      this.router.navigate(['/home']).then(() => {
         this.messageService.add({severity:'error', summary: "Not Authorized Route", life: 3000});
      })
      return false;
    }
  }
  
}
