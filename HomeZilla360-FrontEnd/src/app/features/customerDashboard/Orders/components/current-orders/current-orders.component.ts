import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { OrderData } from '../../models/orderData';
import { Observable } from 'rxjs';
import { BookOrder } from '../../models/book-order';
import { OrderDetailsService } from '../../../Services/order-details.service';
import { Orders } from '../../models/order';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {

  order: Orders = new Orders;
  selectedOrder?: Orders[];
  constructor(
    private ordersService: OrderDetailsService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {
    console.log("first");
    this.getCurrentOrders(); 
  }

  private getCurrentOrders() {
    this.ordersService.getCurrentOrders().subscribe((orders: Orders) => {
      this.order = orders;
      console.log("second");
    });
  }

  cancelOrder(orderData: OrderData){
    this.confirmationService.confirm({
          message: 'Are you sure you want to delete this order'+ orderData.serviceName + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.ordersService.cancelOrder(orderData.id).subscribe(() => {
                console.log(orderData);
                this.getCurrentOrders();
              });
              this.messageService.add({severity:'success', summary: 'successful', detail: 'Order Canceled', life:3000});    
          }
          
        })
      this.getCurrentOrders();
  }
  


}