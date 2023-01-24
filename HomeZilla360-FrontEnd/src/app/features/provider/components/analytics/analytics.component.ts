import { Component, OnInit } from '@angular/core';
import {RatingModule} from 'primeng/rating';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  val: number = 3;
}
