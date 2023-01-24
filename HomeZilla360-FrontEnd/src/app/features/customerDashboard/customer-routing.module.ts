import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalyticsComponent } from "./Analytics/components/analytics/analytics.component";
import { BarchartComponent } from "./Analytics/components/barchart/barchart.component";
import { DoughnutComponent } from "./Analytics/components/doughnut/doughnut.component";
import { HeadComponent } from "./Analytics/components/head/head.component";
import { DashboardComponent } from "./Dashboard/components/dashboard-main/dashboard.component";
import { CurrentOrdersComponent } from "./Orders/components/current-orders/current-orders.component";
import { OrderHistoryComponent } from "./Orders/components/order-history/order-history.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'currentorders', component:CurrentOrdersComponent},
    {path:'ordershistory', component:OrderHistoryComponent},
    {path:'sidebar', component:SidebarComponent},
    {path:'analytics', component:AnalyticsComponent},
  
    {path: 'doughnut', component:DoughnutComponent},
    {path: 'barchart', component:BarchartComponent},
    {path: 'head', component:HeadComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }