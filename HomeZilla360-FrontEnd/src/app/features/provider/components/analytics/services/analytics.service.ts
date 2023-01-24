import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getTotalOrdersCount():Observable<number>{
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Provider-All-Orders-Count');
  }

  getAcceptedOrdersCount():Observable<number>{
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Provider-All-Accepted-Orders-Count');
  }
  getDeclinedOrdersCount():Observable<number>{
    return this.http.get<number>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Provider-All-Accepted-Orders-Count');
  }
  getDoughnutChartData():Observable<Array<number>>{
    var res = this.http.get<Array<number>>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Provider-Doughnut-Data');
    return res;
  }
  getBarChartData():Observable<Array<number>>{
    var res = this.http.get<Array<number>>('https://homezilla360-api.azurewebsites.net/api/Analytics/Get-Provider-BarChart-Data');
    return res;
  }
}
