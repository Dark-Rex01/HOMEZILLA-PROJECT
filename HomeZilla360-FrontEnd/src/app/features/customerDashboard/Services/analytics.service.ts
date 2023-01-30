import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from "src/environments/environment.prod";
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTotalOrder(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Customer-All-Orders-Count`);
  }

  getCanceledOrder(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Customer-Canceled-Orders-Count`);
  }

  getAcceptedOrder(): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/api/Analytics/Get-Customer-Accepted-Orders-Count`);
  }

  getWaitingOrder(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Customer-Waiting-Orders-Count`);
  }

  getDoughnutChart(): Observable<Array<number>>{
    var response = this.http.get<Array<number>>(`${this.baseUrl}/api/Analytics/Get-Customer-Doughnut-Data`);
    return response;
  }
 
  getLineChart(): Observable<Array<number>>{
    var response = this.http.get<Array<number>>(`${this.baseUrl}/api/Analytics/Get-Customer-LineChart-Data`);
    return response;
  }
}
