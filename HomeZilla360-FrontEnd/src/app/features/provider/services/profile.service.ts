import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Location } from '../models/location';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  
  getProviderProfileDetails():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}api/Providers/Get-User-Data` );
  }

  updateProviderProfile(user: User): Observable<User>{
    
    return this.http.put<User>(`${this.baseUrl}api/Providers/Update-User-Data` , user);
  }

  updateProviderProfilePicture(picture:any): Observable<any>{
    const formData = new FormData();
    formData.append("file", picture, picture.name);
    return this.http.put(`${this.baseUrl}api/Providers/Update-Profile`,formData);
  }


  getLocationData():Observable<Array<string>>{
    var res = this.http.get<Array<string>>(`${this.baseUrl}api/Providers/Get-Location`)
    return res;
}

}