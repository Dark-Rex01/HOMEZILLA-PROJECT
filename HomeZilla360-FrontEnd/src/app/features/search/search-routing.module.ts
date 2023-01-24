import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResultComponent } from "./components/result/result.component";
import { ViewDetailsComponent } from "./components/view-details/view-details.component";

const routes: Routes = [
    {
        path: 'search-result',
        component: ResultComponent,
        title: 'Result'
            
    },
    {
        path: 'view-detials',
        component: ViewDetailsComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule {}