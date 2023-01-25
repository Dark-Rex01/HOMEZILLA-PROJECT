import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../models/appconfig';
import { AppConfigService } from '../../../services/app-config.service';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  data: any;
  basicOptions: any;
  config?: AppConfig;
  monthNames : string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  date=new Date().getMonth();

  constructor(private configService: AppConfigService,
              private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.getBarChartData();
  }
  getBarChartData(){
    this.analyticsService.getBarChartData().subscribe({
      next: (res)=>{
        this.data = {
          labels: [this.monthNames[(this.date).toString()],
           this.monthNames[(this.date+11).toString()] ,
           this.monthNames[(this.date+10).toString()],
           this.monthNames[(this.date+9).toString()],
           this.monthNames[(this.date+8).toString()], 
           this.monthNames[(this.date+7).toString()], 
           this.monthNames[(this.date+6).toString()]],
          datasets: [
            {
              label: 'Number of Orders',
              backgroundColor: '#42A5F5',
              data: res,
            },
          ],
        };
      }
    })
  }
}
