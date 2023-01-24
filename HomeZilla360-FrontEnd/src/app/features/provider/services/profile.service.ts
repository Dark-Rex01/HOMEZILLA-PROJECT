import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  getProviderProfileDetails():Observable<User>{
    return this.http.get<User>('https://homezilla360-api.azurewebsites.net/api/Providers/Get-User-Data' );
  }

  updateProviderProfile(user: User): Observable<User>{
    
    return this.http.put<User>('https://homezilla360-api.azurewebsites.net/api/Providers/Update-User-Data' , user);
  }

  updateProviderProfilePicture(picture:any): Observable<any>{
    const formData = new FormData();
    formData.append("file", picture, picture.name);
    return this.http.put('https://homezilla360-api.azurewebsites.net/api/Providers/Update-Profile',formData);
  }


  getLocationData():Observable<Array<string>>{
    var res = this.http.get<Array<string>>('https://homezilla360-api.azurewebsites.net/api/Providers/Get-Location')
    return res;
}

}