import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../Services/analytics.service';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  Data: any;

  basicOptions: any;
  monthNames : string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  date=new Date().getMonth();

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
   this.LineChart();
  }

  LineChart(){
    this.analyticsService.getLineChart().subscribe({
      next: (response)=>{
        this.Data = {
          labels: [this.monthNames[(this.date).toString()],
           this.monthNames[(this.date-1).toString()] ,
           this.monthNames[(this.date+10).toString()],
           this.monthNames[(this.date+9).toString()],
           this.monthNames[(this.date+8).toString()], 
           this.monthNames[(this.date+7).toString()], 
           this.monthNames[(this.date+6).toString()]],
          datasets: [
            {
              label: 'Number of Orders',
              backgroundColor: '#42A5F5',
              data: response,
              fill: true,
            },
          ],
        };
      }
    })
  }
}

  
