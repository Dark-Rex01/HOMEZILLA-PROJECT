import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getTotalOrder(): Observable<number>{
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Customer-All-Orders-Count');
  }

  getCanceledOrder(): Observable<number>{
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Customer-Canceled-Orders-Count');
  }

  getAcceptedOrder(): Observable<number>{
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Customer-Accepted-Orders-Count');
  }

  getWaitingOrder(): Observable<number> {
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Customer-Waiting-Orders-Count');
  }

  getDoughnutChart(): Observable<Array<number>>{
    var response = this.http.get<Array<number>>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Customer-Doughnut-Data',);
    return response;
  }
 
}
