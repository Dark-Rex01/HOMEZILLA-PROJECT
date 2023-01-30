import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Orders } from '../models/orders';
import { OrderStatus } from '../models/order-status';
import { OrderData } from '../models/order-data';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  acceptOrder(orderId: OrderStatus){
    var res =  this.http.put(`${this.baseUrl}AcceptOrder`, orderId, {
      responseType: 'text' as 'json'
    });
    return res;
  }

  declineOrder(orderId:OrderStatus) {
    var res = this.http.put(`${this.baseUrl}DeclineOrder`,orderId,{
      responseType: 'text' as 'json'
    });
    return res;
  }

  getProviderCurrentOrders(pageNumber: number): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    let params = this.getParams(pageNumber);
    return  this.http.get<Orders>(`${this.baseUrl}api/Providers/Current-Order`,{params: params}).pipe(
      map((response: Orders ) => {
        currentOrders = response;
        return response;
        
      })
    );
  }
  getProvidersPastOrders(pageNumber: number): Observable<Orders> {
    var pastOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    let params = this.getParams(pageNumber);
    return  this.http.get<Orders>(`${this.baseUrl}api/Providers/Past-Order`,{params: params}).pipe(
      map((response: Orders ) => {
        console.log("third");
        pastOrders = response;
        console.log(response);
        return pastOrders;
        
      })
    );
  }
  getParams(PageNumber:number): HttpParams {
    let obj = {PageNumber};
    return Object.keys(obj).reduce((params, key) => 
            obj[key as keyof typeof obj] ? params.append(key, obj[key as keyof typeof obj]) : params, new HttpParams())
  }
}
