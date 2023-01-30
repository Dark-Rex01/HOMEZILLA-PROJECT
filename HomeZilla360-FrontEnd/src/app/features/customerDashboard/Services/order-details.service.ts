import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Orders } from '../model/order';
import { BookOrder } from '../model/book-order';
import { orderStatus } from '../model/order-status';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  status: string[] = [];
  serviceNames: string[] = [];
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCurrentOrders(pageNumber: number): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
  
    return  this.http.get<Orders>(`${this.baseUrl}/api/Customers/Current-Order`).pipe(
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
    return  this.http.get<Orders>(`${this.baseUrl}/api/Customers/Past-Order`).pipe(
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
    var res =  this.http.post<any>(`${this.baseUrl}/api/BookOrder`,orderData, {
      responseType: 'text' as 'json'
    });
    return res;
  }

  cancelOrder(orderId: string | undefined)
  {
    return this.http.put(`${this.baseUrl}/api/CancelOrder`, { orderId: orderId },  {responseType: 'text'});
  }

  acceptOrder(orderId: orderStatus) {
    return this.http.put<string>(`${this.baseUrl}/api/AcceptOrder`, orderId);
  }

  declineOrder(orderId: string) {
    return this.http.delete<any>(`${this.baseUrl}/api/DeclineOrder`);
  }

  getProviderCurrentOrders(): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('${this.baseUrl}/api/Providers/Current-Order').pipe(
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
    return  this.http.get<Orders>(`${this.baseUrl}/api/Providers/Past-Order`).pipe(
      map((response: Orders ) => {
        console.log("third");
        pastOrders = response;
        console.log(response);
        return pastOrders;
        
      })
    );
  }

}
