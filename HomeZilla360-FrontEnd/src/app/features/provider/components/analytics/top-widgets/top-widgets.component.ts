import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  constructor(
    private analyticsService : AnalyticsService
  ) { }

  ngAfterViewInit() {
    this.getTotalOrdersCount();
    this.getTotalAcceptedOrdersCount();
    this.getTotalExpiredOrdersCount();
  }

  getTotalOrdersCount(){
    this.analyticsService.getTotalOrdersCount().subscribe(count =>{
      this.totalOrders = count ;
    });
  }

  
  getTotalAcceptedOrdersCount(){
    this.analyticsService.getAcceptedOrdersCount().subscribe(count =>{
      this.acceptedOrders = count ;
    });
  }

  
  getTotalExpiredOrdersCount(){
    this.analyticsService.getExpiredOrdersCount().subscribe(count =>{
      this.declinedOrders = count ;
    });
  }

}
