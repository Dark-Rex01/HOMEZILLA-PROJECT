import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  getProfileDetails():Observable<User>{
    return this.http.get<User>('https://homezilla360-api.azurewebsites.net/api/Customers/Get-User-Data' );
  }

  updateProfile(user: User): Observable<User>{
    return this.http.put<User>('https://homezilla360-api.azurewebsites.net/api/Customers/Update-User-Data' , user);
  }

  updateProfilePicture(picture:any): Observable<any>{
    const formData = new FormData();
    formData.append("file", picture, picture?.name);
    return this.http.put('https://homezilla360-api.azurewebsites.net/api/Customers/Update-Profile',formData);
  }

  // getProviderProfileDetails():Observable<User>{
  //   return this.http.get<User>('https://homezilla360-api.azurewebsites.net/api/Providers/Get-User-Data' );
  // }

  // updateProviderProfile(user: User): Observable<User>{
    
  //   return this.http.put<User>('https://homezilla360-api.azurewebsites.net/api/Providers/Update-User-Data' , user);
  // }

  // updateProviderProfilePicture(picture): Observable<any>{
  //   const formData = new FormData();
  //   formData.append("file", picture, picture.name);
  //   return this.http.put('https://homezilla360-api.azurewebsites.net/api/Providers/Update-Profile',formData);
  // }



}
