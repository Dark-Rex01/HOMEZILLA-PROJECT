import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgOtpInputModule } from "ng-otp-input";
import {StepsModule} from 'primeng/steps';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeRoutingModule } from "./home-routing.module";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations:[
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgOtpInputModule,
        StepsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
    ]
})
export class HomeModule {}