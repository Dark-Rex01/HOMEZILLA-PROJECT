import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getTotalOrdersCount():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Provider-All-Orders-Count`);
  }

  getAcceptedOrdersCount():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Provider-All-Accepted-Orders-Count`);
  }
  getDeclinedOrdersCount():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Provider-All-Declined-Orders-Count`);
  }
  getTotalRevenue():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}api/Analytics/Get-Provider-Revenue`);
  }
  getDoughnutChartData():Observable<Array<number>>{
    var res = this.http.get<Array<number>>(`${this.baseUrl}api/Analytics/Get-Provider-Doughnut-Data`);
    return res;
  }
  getBarChartData():Observable<Array<number>>{
    var res = this.http.get<Array<number>>(`${this.baseUrl}api/Analytics/Get-Provider-BarChart-Data`);
    return res;
  }
}
