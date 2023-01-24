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
import {BadgeModule} from 'primeng/badge';

import { ChartModule } from 'primeng/chart';
import {PaginatorModule} from 'primeng/paginator';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnalyticsComponent } from './Analytics/components/analytics/analytics.component';
import { HeadComponent } from './Analytics/components/head/head.component';
import { LineComponent } from './Analytics/components/line/line.component';
import { BarchartComponent } from './Analytics/components/barchart/barchart.component';
import { DoughnutComponent } from './Analytics/components/doughnut/doughnut.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './Dashboard/components/dashboard-main/dashboard.component';
import { CurrentOrdersComponent } from './Orders/components/current-orders/current-orders.component';
import { OrderHistoryComponent } from './Orders/components/order-history/order-history.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CurrentOrdersComponent,
    OrderHistoryComponent,
    SidebarComponent,
    AnalyticsComponent,
    HeadComponent,
    LineComponent,
    DoughnutComponent,
    BarchartComponent
  ],


  imports: [
    ReactiveFormsModule,
    FormsModule,
    OrderListModule,
    HttpClientModule,
    TreeTableModule,
    ButtonModule,
    DockModule,
    // MenuModule,
    // MenubarModule,
    TableModule,
    ConfirmDialogModule,
    ChartModule,
    PaginatorModule,
    BadgeModule,
    CustomerRoutingModule
  ],
  providers: [
    ConfirmationService
    
  ]
})
export class CustomerModule { }
