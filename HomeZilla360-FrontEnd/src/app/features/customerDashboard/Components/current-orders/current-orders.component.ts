import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { OrderData } from '../../model/orderData';
import { Observable } from 'rxjs';
import { BookOrder } from '../../model/book-order';
import { OrderDetailsService } from '../../Services/order-details.service';
import { Orders } from '../../model/order';
import { OrderStatus } from 'src/app/features/provider/models/order-status';
import { orderStatus } from '../../model/order-status';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.scss']
})
export class CurrentOrdersComponent implements OnInit {

  order: Orders = new Orders;
  selectedOrder?: Orders[];
  pageNumber: number = 0;


  constructor(
    private ordersService: OrderDetailsService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router
    ) { this.order = new Orders();}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.pageNumber = params['PageNumber']});
    console.log("first");
    this.getCurrentOrders(); 
  }

  private getCurrentOrders() {
    this.ordersService.getCurrentOrders(this.pageNumber).subscribe((orders: Orders) => {
      this.order = orders;
      console.log(this.order);
    });
  }

  cancelOrder(orderData: OrderData){
    
    this.confirmationService.confirm({
          message: 'Are you sure you want to delete this order?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.ordersService.cancelOrder(orderData.id).subscribe(() => {
                console.log("cancel order",orderData);
                console.log("after change");
                this.getCurrentOrders();
              });
              this.messageService.add({severity:'success', summary: 'successful', detail: 'Order Canceled', life:3000});    
          }
          
        })
      // this.getCurrentOrders();
  }


  paginate(event: any) {
    this.pageNumber = event.page ;
   
}
  


}