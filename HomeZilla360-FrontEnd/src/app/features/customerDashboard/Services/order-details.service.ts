import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Orders } from '../model/order';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  status: string[] = [];
  serviceNames: string[] = [];
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
//to get customer current orders details
  getCurrentOrders(pageNumber: number): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    let params = this.getParams(pageNumber);
    return  this.http.get<Orders>(`${this.baseUrl}api/Customers/Current-Order`,{params: params}).pipe(
      map((response: Orders ) => {
        currentOrders = response;
        return  response;
      })
    );
  }
 
// to get customer past orders details
  getPastOrders(pageNumber: number): Observable<Orders> {
    var pastOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    let params = this.getParams(pageNumber);
    return  this.http.get<Orders>(`${this.baseUrl}api/Customers/Past-Order`,{params: params}).pipe(
      map((response: Orders ) => {
        pastOrders = response;
        return pastOrders;
        
      })
    );
  }
  getParams(PageNumber:number): HttpParams {
    let obj = {PageNumber};
    return Object.keys(obj).reduce((params, key) => 
            obj[key as keyof typeof obj] ? params.append(key, obj[key as keyof typeof obj]) : params, new HttpParams())
  }


  cancelOrder(orderId: string)
  {
    return this.http.put(`${this.baseUrl}CancelOrder`, { orderId: orderId },  {responseType: 'text'});
  }


}
