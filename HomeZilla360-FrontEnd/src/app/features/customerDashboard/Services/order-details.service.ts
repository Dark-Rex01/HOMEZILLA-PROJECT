import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { OrderData } from '../model/orderData';
import { Orders } from '../model/order';

import { BookOrder } from '../model/book-order';
import { orderStatus } from '../model/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  status: string[] = [];
  serviceNames: string[] = [];


  constructor(private http: HttpClient) { }

  getCurrentOrders(pageNumber: number): Observable<Orders> {
    let params = this.getParams(pageNumber);
    return  this.http.get<Orders>('https://homezilla360-api.azurewebsites.net/api/Customers/Current-Order', {params: params}).pipe(
      map((response: Orders ) => {
        return  response;
      })
    );
  }

  getPastOrders(): Observable<Orders> {
    var pastOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://homezilla360-api.azurewebsites.net/api/Customers/Past-Order').pipe(
      map((response: Orders ) => {
        pastOrders = response;
        return pastOrders;
        
      })
    );
  }

  bookOrder(orderData: BookOrder)
  {
    var res =  this.http.post<any>('https://homezilla360-api.azurewebsites.net/BookOrder',orderData, {
      responseType: 'text' as 'json'
    });
    return res;
  }

  cancelOrder(orderId: string | undefined)
  {
    return this.http.put('https://homezilla360-api.azurewebsites.net/CancelOrder', { orderId: orderId });
  }

  acceptOrder(orderId: orderStatus) {
    return this.http.put<string>(`https://homezilla360-api.azurewebsites.net/AcceptOrder`, orderId);
  }

  declineOrder(orderId: string) {
    return this.http.delete<any>(`https://homezilla360-api.azurewebsites.net/DeclineOrder`);
  }

  getProviderCurrentOrders(): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://homezilla360-api.azurewebsites.net/api/Providers/Current-Order').pipe(
      map((response: Orders ) => {
        currentOrders = response;
        return currentOrders;
        
      })
    );
  }
  getProvidersPastOrders(): Observable<Orders> {
    var pastOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://homezilla360-api.azurewebsites.net/api/Providers/Past-Order').pipe(
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

}
