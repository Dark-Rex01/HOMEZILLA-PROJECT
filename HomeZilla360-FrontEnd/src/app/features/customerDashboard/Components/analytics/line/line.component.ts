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
              data: [11, 0, 0, 0, 0, 0, 0],
              fill: false,
              tension: .4,
              borderColor: '#42A5F5'
          },
          {
              label: 'Waiting Orders',
              data: [9, 0, 0, 0, 0, 0, 0],
              fill: false,
              borderDash: [5, 5],
              tension: .4,
              borderColor: '#66BB6A'
          },
          {
              label: 'Declined Orders',
              data: [2, 0, 0, 0, 0, 0, 0],
              fill: true,
              borderColor: '#FFA726',
              tension: .4,
              backgroundColor: 'rgba(255,167,38,0.2)'
          }
      ]
  };

  }
}