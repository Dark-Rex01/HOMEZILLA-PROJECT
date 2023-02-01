import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalyticsComponent } from "./Components/analytics/analytics.component";
import { DashboardComponent } from "./Components/Profile/profile.component";
import { CurrentOrdersComponent } from "./Components/current-orders/current-orders.component";
import { OrderHistoryComponent } from "./Components/OrderHistory/order-history.component";
import { CustomerComponent } from "./Components/customer/customer.component";
import { CustomerGuard } from "src/app/core/guards/customer.guard";
import { NotFoundComponent } from "src/app/core/error/not-found/not-found.component";

const routes: Routes = [
    {
      path:'customer',
      component: CustomerComponent,
      canActivate: [CustomerGuard],
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
    {
      path: '**',
      component: NotFoundComponent,
      pathMatch: 'full',
      title: 'Not Found',
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }