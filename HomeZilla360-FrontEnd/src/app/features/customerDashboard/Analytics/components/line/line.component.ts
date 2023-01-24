import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  lineStylesData: any;

  basicOptions: any;

  constructor() { }

  ngOnInit(): void {
   this.LineChart();
  }

  LineChart(){
    this.lineStylesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Accepted Orders',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              tension: .4,
              borderColor: '#42A5F5'
          },
          {
              label: 'Waiting Orders',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderDash: [5, 5],
              tension: .4,
              borderColor: '#66BB6A'
          },
          {
              label: 'Declined Orders',
              data: [12, 51, 62, 33, 21, 62, 45],
              fill: true,
              borderColor: '#FFA726',
              tension: .4,
              backgroundColor: 'rgba(255,167,38,0.2)'
          }
      ]
  };

  }
}