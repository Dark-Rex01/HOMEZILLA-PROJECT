import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalyticsComponent } from "./Components/analytics/analytics.component";
import { DashboardComponent } from "./Components/Profile/profile.component";
import { CurrentOrdersComponent } from "./Components/current-orders/current-orders.component";
import { OrderHistoryComponent } from "./Components/OrderHistory/order-history.component";
import { CustomerComponent } from "./Components/customer/customer.component";

const routes: Routes = [
    {
      path:'customer',
      component: CustomerComponent,
      children: [
        {
          path:'analytics',
          component: AnalyticsComponent,
          title: 'Customer Analytics'
        },
        {
          path:'profile',
          component: DashboardComponent,
          title: 'Customer Profile'
        },
        {
          path:'current-order',
          component: CurrentOrdersComponent,
          title: 'Current Orders'
        },
        {
          path: 'order-history',
          component: OrderHistoryComponent,
          title: 'Order History'
        }
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }