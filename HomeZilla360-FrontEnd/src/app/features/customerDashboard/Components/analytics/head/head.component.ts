import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../Services/analytics.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  totalOrders: number = 0;
  acceptedOders: number = 0;
  canceledOrders: number = 0;
  waitingOrders: number = 0;
  constructor( private analyticsService : AnalyticsService) { }

  ngOnInit(): void {
    this.totalOrder();
    this.acceptedOrder();
    this.canceledOrder();
    this.waitingOrder();
  }

  totalOrder(){
    this.analyticsService.getTotalOrder().subscribe((count)=> {
      this.totalOrders = count;
    })
  }

  canceledOrder() {
    this.analyticsService.getCanceledOrder().subscribe((count)=>{
      this.canceledOrders = count;
    })
  }

  acceptedOrder(){
    this.analyticsService.getAcceptedOrder().subscribe((count)=>{
      this.acceptedOders = count;
    })
  }

  waitingOrder(){
    this.analyticsService.getWaitingOrder().subscribe((count) => {
      this.waitingOrders = count;
    })
  }

}
