import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ServiceData } from '../models/service-data';
import { ServiceId } from '../models/service-id';
import { ServiceList } from '../models/service-list';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }
    getServiceData():Observable<ServiceData[]>{
        var res = this.http.get<ServiceData[]>('https://homezilla360-api.azurewebsites.net/api/Providers/Get-Service')
        return res;
    }
    addServiceData(service: ServiceData):Observable<ServiceData>{
        return this.http.post<ServiceData>('https://homezilla360-api.azurewebsites.net/api/Providers/Add-Service',service)
    }
    updateServiceData(service: ServiceData):Observable<ServiceData>{
        return this.http.put<ServiceData>('https://homezilla360-api.azurewebsites.net/api/Providers/Update-Service',service)
    }
    deleteServiceData(service: ServiceId):Observable<ServiceId>{
        return this.http.delete<ServiceId>('https://homezilla360-api.azurewebsites.net/api/Providers/Delete-Service',{
            body: service
        })
    }
    checkServiceData():Observable<ServiceList>{
        return this.http.get<ServiceList>('https://homezilla360-api.azurewebsites.net/api/Providers/Check-Service')
    }
}
