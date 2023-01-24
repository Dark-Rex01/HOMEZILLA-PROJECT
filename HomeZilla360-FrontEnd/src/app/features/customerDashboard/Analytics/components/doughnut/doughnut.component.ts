import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../service/analytics.service';
@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  data: any ;

  chartOptions: any;


  constructor(private analyticservice : AnalyticsService) { }

  ngOnInit(): void {
    this.getDoughnutChart();
   
  }
    getDoughnutChart(){
      this.analyticservice.getDoughnutChart().subscribe({
        next: (response) => {
          this.data = {
            labels: ['declinedOrders','acceptedOrders', 'canceledOrders', 'WaitingOrders', 'noResponse'],
            datasets: [
                {
                    data: response,
                    backgroundColor: [
                        "#FF6384",
                        "#FFCE56",
                        "#A75D5D",
                        "#F55050",
                        "#850E35"
                    ],
                    hoverBackgroundColor: [
                      "#FF6384",
                      "#FFCE56",
                      "#A75D5D",
                      "#F55050",
                      "#850E35"
                    ]
                }
            ]
        };
        }
      })
    }
  }

