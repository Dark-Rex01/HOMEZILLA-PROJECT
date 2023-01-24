import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { OrderData } from '../Orders/models/orderData';
import { Orders } from '../Orders/models/order';
import { Status } from '../Orders/models/status';
import { BookOrder } from '../Orders/models/book-order';
import { orderStatus } from '../Orders/models/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  status: string[] = [];
  serviceNames: string[] = [];


  constructor(private http: HttpClient) { }

  getCurrentOrders(): Observable<Orders> {
    // var currentOrders: Orders = {
    //   currentPage: 1,
    //   data: [],
    //   totalPages: 0
    // };
    return  this.http.get<Orders>('https://homezilla360-api.azurewebsites.net/api/Customers/Current-Order').pipe(
      map((response: Orders ) => {
       
        // currentOrders = response;
        console.log(response);
        console.log("okkkk");
        // console.log(currentOrders);
        console.log("okkkk");
        // return currentOrders;
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
        console.log("third");
        pastOrders = response;
        console.log(response);
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
        console.log(response);
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
        console.log("third");
        pastOrders = response;
        console.log(response);
        return pastOrders;
        
      })
    );
  }

}
