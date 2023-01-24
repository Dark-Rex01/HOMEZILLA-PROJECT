import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Orders } from '../../models/orders';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  badgeColor:string ="success";
orderHistory: Orders;
constructor(private ordersService: OrderDetailsService) {
  this.orderHistory= new Orders();
 }
  
  ngOnInit() {
    this.getProviderPastOrders();
  }

  getProviderPastOrders(){
    this.ordersService.getProvidersPastOrders().subscribe((orders: Orders) => {
      this.orderHistory = orders;

    });
  }

}
