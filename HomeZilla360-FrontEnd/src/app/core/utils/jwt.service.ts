import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { MessageService } from "primeng/api";
import { TokenPayload } from "../models/token";

@Injectable({
    providedIn: 'root',
  })

export class JwtService {
  token : TokenPayload = new TokenPayload();
  JwtToken: string = "";
  logged: Boolean = false;
  constructor(
    private router: Router,
    private messageService: MessageService,
    ) { }

  public getUser(): any {
    const user = window.localStorage.getItem("auth-token");
    if (user) {
      
      return user;
    }
    return null;
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  public logOut()
  {
    window.localStorage.removeItem("auth-token");
    // this.router.navigate(['/home']).then(() => {
    //   this.messageService.add({severity:'success', summary: "Logout Successfull", life: 3000});
    // })
  }
  
  public getDecodedToken(): TokenPayload{
    this.JwtToken = this.getUser();
    return jwtDecode(this.JwtToken);
  }
  public getDecodedAccessToken(){
    this.JwtToken = this.getUser();
    this.token = jwtDecode(this.JwtToken);
  }
  public isLogged(): boolean
  {
    if(this.getUser())
    {
      this.getDecodedAccessToken();
      if(this.tokenExpired(this.getUser()))
      {
        this.logged = false;
        return false;
      }
      else{
        this.logged = true;
        return true;
      }
    }
    else{
      this.logged = false;
      return false;
    }
  }
    
}