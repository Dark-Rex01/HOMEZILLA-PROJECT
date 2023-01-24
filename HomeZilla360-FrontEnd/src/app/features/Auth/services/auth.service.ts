import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { SignUp } from "../models/signUp";
import { BehaviorSubject, Observable } from "rxjs";
import { Verification } from "../models/verification";
import { SignIn} from "../models/signIn";
import { ResetPassword } from "../models/resetPassword";

@Injectable({
    providedIn: 'root',
})

export class AuthService{
    baseUrl = environment.apiUrl;
    public userEmailId:BehaviorSubject<string> = new BehaviorSubject('');

    constructor(
        private http: HttpClient, 
        private router: Router
    )
    {

    }
    
    //register
    signUp(userData: SignUp): Observable<any>{
        this.userEmailId.next(userData.email);
        return this.http.post<any>(`${this.baseUrl}api/Auth/Register`, userData,  {
            observe: "response",
            responseType: 'text' as 'json'
        })
    }

    // verification
    verifyAccount(verifyData: Verification): Observable<any>{
        return this.http.post(`${this.baseUrl}api/Auth/Verify`,verifyData,  {
            observe: "response",
            responseType: 'text' as 'json'
    });
    }

    //Sign In
    signIn(login: SignIn): Observable<any>
    {
        return this.http.post<any>(`${this.baseUrl}api/Auth/Login`, login,{
            observe: "response"
          });
    } 

    // Forgot Password
    forgotPassword(email: string): Observable<any>
    {
        this.userEmailId.next(email);
        return this.http.post<any>(`${this.baseUrl}api/Auth/Forgot-Password`, {email},{
            observe: "response"
          });
    }

    // Reset Password
    resetPassword(resetData: ResetPassword): Observable<any>{
        return this.http.put<any>(`${this.baseUrl}api/Auth/Reset-Password`, resetData,{
            observe: "response"
          });
    }
}