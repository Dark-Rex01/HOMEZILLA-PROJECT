import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Orders } from '../models/orders';
import { OrderStatus } from '../models/order-status';
import { OrderData } from '../models/order-data';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http: HttpClient) { }


  acceptOrder(orderId: OrderStatus){
    var res =  this.http.put(`https://homezilla360-api.azurewebsites.net/AcceptOrder`, orderId, {
      responseType: 'text' as 'json'
    });
    return res;
  }

  declineOrder(orderId:OrderStatus) {
    var res = this.http.put(`https://homezilla360-api.azurewebsites.net/DeclineOrder`,orderId,{
      responseType: 'text' as 'json'
    });
    return res;
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
        console.log(response);
        return response;
        
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
        console.log("third");
        pastOrders = response;
        console.log(response);
        return pastOrders;
        
      })
    );
  }
}
