import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CalendarComponent } from './components/analytics/calendar/calendar.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProviderComponent } from './components/provider.component';
import { ProviderProfileComponent } from './components/profile/provider-profile/provider-profile.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { EditServicesComponent } from './components/profile/edit-services/edit-services.component';
import { TopWidgetsComponent } from './components/analytics/top-widgets/top-widgets.component';
import { BarChartComponent } from './components/analytics/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/analytics/doughnut-chart/doughnut-chart.component';
import { ProviderGuard } from 'src/app/core/guards/provider.guard';
const routes: Routes = [
  {
    path: 'provider',
    component: ProviderComponent,
    canActivate: [ProviderGuard],
    children: [
      {
        path: 'profile',
        component: ProviderProfileComponent,
        children: [
          {
            path: 'edit-profile',
            component: EditDetailsComponent,
          },
          {
            path: 'edit-service',
            component: EditServicesComponent,
          },
          {
            path: 'view-profile',
            component: ViewProfileComponent,
          },
        ],
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        children: [
          {
            path: 'widgets',
            component: TopWidgetsComponent,
          },
          {
            path: 'barchart',
            component: BarChartComponent,
          },
          {
            path: 'doughnutchart',
            component: DoughnutChartComponent,
          },
        ],
      },
      {
        path: 'current-orders',
        component: OrdersComponent,
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
