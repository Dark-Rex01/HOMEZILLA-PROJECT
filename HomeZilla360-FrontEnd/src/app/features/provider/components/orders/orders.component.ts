import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OrderData } from '../../models/order-data';
import { OrderStatus } from '../../models/order-status';
import { Orders } from '../../models/orders';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',

  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  submitted?: boolean;
  waitingOrders: Orders;
  id: OrderStatus = new OrderStatus();
  constructor(
    private ordersService: OrderDetailsService,
    private messageService: MessageService
  ) {
    this.waitingOrders = new Orders();
  }

  ngOnInit() {
    this.getProviderCurrentOrders();
  }

  getProviderCurrentOrders() {
    this.ordersService.getProviderCurrentOrders().subscribe((orders) => {
      this.waitingOrders = orders;
    });
  }
  acceptOrder(orderId: string) {
    var orderData = new OrderStatus();
    orderData.orderId = orderId;
    if (orderId) {
      this.ordersService.acceptOrder(orderData).subscribe((response) => {
        this.getProviderCurrentOrders();
        this.messageService.add({
          severity: 'success',
          summary: response.toString(),
          life: 3000,
        });
      });
    }
  }

  declineOrder(orderId: string) {
    var orderData = new OrderStatus();
    orderData.orderId = orderId;
    if (orderId) {
      this.ordersService.declineOrder(orderData).subscribe((response) => {
        this.getProviderCurrentOrders();
        this.messageService.add({
          severity: 'error',
          summary: response.toString(),
          life: 3000,
        });
      });
    }
  }
}
