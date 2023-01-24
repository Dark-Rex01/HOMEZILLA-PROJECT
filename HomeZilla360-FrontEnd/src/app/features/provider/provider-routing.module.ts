import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CalendarComponent } from './components/analytics/calendar/calendar.component';
import { DoughnutChartComponent } from './components/analytics/doughnut-chart/doughnut-chart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponentComponent } from './components/profile/profile-component/profile-component.component';
import { ProviderComponent } from './components/provider.component';
const routes: Routes = [
{path: 'provider',component:ProviderComponent},
{path: 'orders',component:OrdersComponent},
{path: 'order-history',component:OrderHistoryComponent},
{path: 'chart',component:DoughnutChartComponent},
{path: 'analytics',component:AnalyticsComponent},
{path: 'calendar',component:CalendarComponent},
{path: 'test',component:ProfileComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }