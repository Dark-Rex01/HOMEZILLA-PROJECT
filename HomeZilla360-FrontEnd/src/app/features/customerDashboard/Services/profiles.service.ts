import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  //to get customer profile details
  getProfileDetails():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}api/Customers/Get-User-Data` );
  }
// to update customer details
  updateProfile(user: User): Observable<User>{
    return this.http.put<User>(`${this.baseUrl}api/Customers/Update-User-Data`, user);
  }

  updateProfilePicture(picture:any): Observable<any>{
    const formData = new FormData();
    formData.append("file", picture, picture?.name);
    return this.http.put(`${this.baseUrl}api/Customers/Update-Profile`,formData);
  }

}
