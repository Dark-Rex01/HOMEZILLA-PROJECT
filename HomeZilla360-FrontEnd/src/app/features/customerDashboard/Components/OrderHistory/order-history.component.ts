import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../Services/order-details.service';
import { Orders } from '../../model/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  order: Orders = new Orders;
  pageNumber: number = 0;
  totalRecords: number = 0;

  constructor(private ordersService: OrderDetailsService) { }

  ngOnInit(): void{
    this.getPastOrders();
  }

  getPastOrders(){
    this.ordersService.getPastOrders(this.pageNumber).subscribe((orders: Orders) => {
      this.order = orders;
      this.totalRecords = orders.totalPages * 10;
    });
  }
  paginate(event: any) {
    this.pageNumber = ++event.page ;
    this.getPastOrders();
}

}


