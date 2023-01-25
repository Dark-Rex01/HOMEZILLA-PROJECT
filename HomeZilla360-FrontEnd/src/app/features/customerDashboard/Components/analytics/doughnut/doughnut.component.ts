import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../Services/analytics.service';
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
            labels: ['Declined Orders',' Accepted Orders', 'Cancelled Orders', 'Waiting Orders', 'Expired Orders'],
            datasets: [
                {
                    data: response,
                    backgroundColor: [
                      '#228B22',
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      ' #FF5733 ',
                    ],
                    hoverBackgroundColor: [
                      '#228B22',
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      ' #FF5733 ',
                    ]
                }
            ]
        };
        }
      })
    }
  }

