import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ServiceData } from '../models/service-data';
import { ServiceId } from '../models/service-id';
import { ServiceList } from '../models/service-list';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
    baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
    getServiceData():Observable<ServiceData[]>{
        var res = this.http.get<ServiceData[]>(`${this.baseUrl}api/Providers/Get-Service`)
        return res;
    }
    addServiceData(service: ServiceData):Observable<ServiceData>{
        return this.http.post<ServiceData>(`${this.baseUrl}api/Providers/Add-Service`,service)
    }
    updateServiceData(service: ServiceData):Observable<ServiceData>{
        return this.http.put<ServiceData>(`${this.baseUrl}api/Providers/Update-Service`,service)
    }
    deleteServiceData(service: ServiceId):Observable<ServiceId>{
        return this.http.delete<ServiceId>(`${this.baseUrl}api/Providers/Delete-Service`,{
            body: service
        })
    }
    checkServiceData():Observable<ServiceList>{
        return this.http.get<ServiceList>(`${this.baseUrl}api/Providers/Check-Service`)
    }
}
