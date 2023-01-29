import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from '../../../models/appconfig';
import { AppConfigService } from '../../../services/app-config.service';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit, OnDestroy {
  data: any;

  chartOptions: any;

  subscription?: Subscription;

  config?: AppConfig;

  constructor(
    private configService: AppConfigService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.getDoughchartData();

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
      this.config = config;
      this.updateChartOptions();
    });
  }

  getDoughchartData() {
    this.analyticsService.getDoughnutChartData().subscribe({
      next: (res) => {
        this.data = {
          labels: [
            'Waiting',
            'Accepted',
            'Declined',
            'Expired',
            'Cancelled',
          ],
          datasets: [
            {
              data: res,
              backgroundColor: [
                '#FFCE56',
                '#228B22 ',
                '#FF5733',
                '#6366F1',
                ' #FF6384 ',
              ],
              hoverBackgroundColor: [
                '#FFCE56',
                '#228B22 ',
                '#FF5733',
                '#6366F1',
                ' #FF6384 ',
              ],
            },
          ],
        };
      },
    });
  }

  updateChartOptions() {
    this.chartOptions =
      this.config && this.config.dark
        ? this.getDarkTheme()
        : this.getLightTheme();
  }

  getLightTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
    };
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
