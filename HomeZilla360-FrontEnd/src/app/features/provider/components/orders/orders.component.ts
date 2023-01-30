import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OrderData } from '../../models/order-data';
import { OrderStatus } from '../../models/order-status';
import { Orders } from '../../models/orders';
import { User } from '../../models/user';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',

  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  submitted?: boolean;
  waitingOrders: Orders;
  detailsDialog: boolean;
  viewDetailData: any;
  id: OrderStatus = new OrderStatus();
  totalRecords: number = 0;
  pageNumber:number = 1;
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
    this.ordersService.getProviderCurrentOrders(this.pageNumber).subscribe((orders) => {
      this.waitingOrders = orders;
      this.totalRecords = orders.totalPages * 10;
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
  viewDetails(waitingOrders: any){
    this.viewDetailData = this.waitingOrders.data.find(x => x.id == waitingOrders)
    console.log(this.viewDetailData);
    this.detailsDialog = true;
  }

    paginate(event: any) {
    this.pageNumber = ++event.page ;
    console.log(this.pageNumber);
    this.getProviderCurrentOrders();
  }
}
