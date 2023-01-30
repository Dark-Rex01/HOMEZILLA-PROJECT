import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../Services/order-details.service';
import { Orders } from '../../model/order';
//import { Status } from 'src/app/customerDashboard/model/status';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  order: Orders = new Orders;

  constructor(private ordersService: OrderDetailsService) { }

  ngOnInit(): void{
    this.ordersService.getPastOrders().subscribe((orders: Orders) => {
      this.order = orders;
    });
  }



}


