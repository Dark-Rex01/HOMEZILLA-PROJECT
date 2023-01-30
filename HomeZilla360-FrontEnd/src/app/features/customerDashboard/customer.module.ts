import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListModule} from 'primeng/orderlist';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule} from 'primeng/treetable';
import { ButtonModule} from 'primeng/button';
import { DockModule} from 'primeng/dock';
import { TableModule} from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BadgeModule} from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { PaginatorModule} from 'primeng/paginator';
import { AnalyticsComponent } from './Components/analytics/analytics.component';
import { HeadComponent } from './Components/analytics/head/head.component';
import { LineComponent } from './Components/analytics/line/line.component';
import { BarchartComponent } from './Components/analytics/barchart/barchart.component';
import { DoughnutComponent } from './Components/analytics/doughnut/doughnut.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './Components/Profile/profile.component';
import { CurrentOrdersComponent } from './Components/current-orders/current-orders.component';
import { OrderHistoryComponent } from './Components/OrderHistory/order-history.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentOrdersComponent,
    OrderHistoryComponent,
    AnalyticsComponent,
    HeadComponent,
    LineComponent,
    DoughnutComponent,
    BarchartComponent,
    CustomerComponent
  ],


  imports: [
    ReactiveFormsModule,
    FormsModule,
    OrderListModule,
    HttpClientModule,
    TreeTableModule,
    ButtonModule,
    DockModule,
    TableModule,
    ConfirmDialogModule,
    ChartModule,
    PaginatorModule,
    BadgeModule,
    CustomerRoutingModule,
    CardModule,
    PaginatorModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    ConfirmationService
    
  ]
})
export class CustomerModule { }
