import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProviderRoutingModule } from './provider-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { ProviderComponent } from "./components/provider.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
//kendo imports
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { LabelModule} from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { EditorModule } from '@progress/kendo-angular-editor';
import { FileSelectModule } from '@progress/kendo-angular-upload';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { NotificationService } from '@progress/kendo-angular-notification';
import { OrdersComponent } from './components/orders/orders.component';
import { KnobModule } from 'primeng/knob';

//prime ng imports
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DoughnutChartComponent } from './components/analytics/doughnut-chart/doughnut-chart.component';
import { AppConfigService } from './services/app-config.service';
import { CardModule, } from 'primeng/card';
import { BarChartComponent } from './components/analytics/bar-chart/bar-chart.component';
import { CalendarComponent } from './components/analytics/calendar/calendar.component';
import { TopWidgetsComponent } from './components/analytics/top-widgets/top-widgets.component';
import { ReviewListComponent } from './components/analytics/review-list/review-list.component';
import { MainComponent } from './components/analytics/main/main.component';
import { ChipModule } from 'primeng/chip';
import {InplaceModule} from 'primeng/inplace';
import {BadgeModule} from 'primeng/badge';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { EditServicesComponent } from './components/profile/edit-services/edit-services.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { ProfileComponentComponent } from './components/profile/profile-component/profile-component.component';


@NgModule({
    declarations: [
     ProviderComponent,
     OrdersComponent,
     OrderHistoryComponent,
     AnalyticsComponent,
     DoughnutChartComponent,
     BarChartComponent,
     CalendarComponent,
     TopWidgetsComponent,
     ReviewListComponent,
     MainComponent,
     EditDetailsComponent,
     EditServicesComponent,
     ViewProfileComponent,
     ProfileComponentComponent
    ],
    imports: [
      BrowserModule,
      ProviderRoutingModule,
      InputTextModule,
        ReactiveFormsModule,
        GridModule,
        PDFModule,
        ExcelModule,
        LabelModule,
        LayoutModule,
        SchedulerModule,
        ButtonsModule,
        EditorModule,
        FileSelectModule,
        ChartsModule,
        IntlModule,
        DateInputsModule,
        InputsModule,
        DropDownsModule,
        NotificationModule,
        BrowserAnimationsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        HttpClientModule,
        FileUploadModule,
        ToolbarModule,
        RatingModule,
        FormsModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        ChartModule,
        CardModule,
        KnobModule,
        FullCalendarModule,
        ChipModule,
        InplaceModule,
        BadgeModule
        
    ],
    providers: [
      MessageService,
      ConfirmationService,
      AppConfigService,
    ],
    bootstrap: [ProviderComponent]
  })
  export class ProviderModule {

   }