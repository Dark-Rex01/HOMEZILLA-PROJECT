import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SearchRoutingModule } from "./search-routing.module";
import {DataViewModule} from 'primeng/dataview';
import { ButtonModule } from "primeng/button";
import { ResultComponent } from "./components/result/result.component";
import { DropdownModule } from "primeng/dropdown";
import {RatingModule} from 'primeng/rating';
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from "src/app/shared/shared.module";
import {PaginatorModule} from 'primeng/paginator';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {TableModule} from 'primeng/table';
import { BadgeModule } from "primeng/badge";
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    declarations:[
        ResultComponent,
        ViewDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SearchRoutingModule,
        DataViewModule,
        ButtonModule,
        DropdownModule,
        RatingModule,
        PanelModule,
        DialogModule,
        InputTextModule,
        RippleModule,
        SharedModule,
        PaginatorModule,
        DynamicDialogModule,
        TableModule,
        BadgeModule,
        CalendarModule,
        BrowserAnimationsModule
    ],
    providers: [
    ]
})
export class SearchModule {}