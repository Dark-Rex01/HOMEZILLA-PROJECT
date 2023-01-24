import { TokenType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { TokenPayload } from "../models/token";

@Injectable({
    providedIn: 'root',
  })

export class JwtService {
  token : TokenPayload = new TokenPayload();
  JwtToken: string = "";

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
        return false;
      }
      else{
        return true;
      }
    }
    else{
      return false;
    }
  }
    
}