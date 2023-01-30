import { AfterViewInit, Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements AfterViewInit {
totalOrders: number = 0 ;
acceptedOrders: number = 0;
declinedOrders: number = 0;
totalRevenue: number = 0;
  constructor(
    private analyticsService : AnalyticsService
  ) { }

  ngAfterViewInit() {
    this.getTotalOrdersCount();
    this.getTotalAcceptedOrdersCount();
    this.getTotalDeclinedOrdersCount();
    this.getTotalRevenue();
  }

  getTotalOrdersCount(){
    this.analyticsService.getTotalOrdersCount().subscribe(res =>{
      this.totalOrders = res ;
    });
  }

  
  getTotalAcceptedOrdersCount(){
    this.analyticsService.getAcceptedOrdersCount().subscribe(res =>{
      this.acceptedOrders = res ;
    });
  }

  
  getTotalDeclinedOrdersCount(){
    this.analyticsService.getDeclinedOrdersCount().subscribe(res =>{
      this.declinedOrders = res ;
    });
  }

  getTotalRevenue(){
    this.analyticsService.getTotalRevenue().subscribe(res =>{
      this.totalRevenue = res;
    });
  }
}
