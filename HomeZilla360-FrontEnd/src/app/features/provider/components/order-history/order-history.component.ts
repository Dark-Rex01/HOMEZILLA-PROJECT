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
  detailsDialog: boolean;
  viewDetailData: any;
  totalRecords: number = 0;
  pageNumber:number = 1;
constructor(private ordersService: OrderDetailsService) {
  this.orderHistory= new Orders();
 }
  
  ngOnInit() {
    this.getProviderPastOrders();
  }

  getProviderPastOrders(){
    this.ordersService.getProvidersPastOrders(this.pageNumber).subscribe((orders: Orders) => {
      this.orderHistory = orders;
      this.totalRecords = orders.totalPages * 10;
    });
  }
  viewDetails(orderHistory: any){
    this.viewDetailData = this.orderHistory.data.find(x => x.id == orderHistory)
    this.detailsDialog = true;
  }
  paginate(event: any) {
    this.pageNumber = ++event.page ;
    this.getProviderPastOrders();
  }

}
