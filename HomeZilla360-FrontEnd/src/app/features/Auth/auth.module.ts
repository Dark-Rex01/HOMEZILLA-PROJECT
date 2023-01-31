import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgOtpInputModule } from "ng-otp-input";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { RegisterFormComponent } from "./components/register/register-form/register-form.component";
import { RegisterComponent } from "./components/register/register.component";
import { VerificationComponent } from "./components/register/verification/verification.component";
import { ForgotPasswordResetFormComponent } from './components/forgot/forgot-password-reset-form/forgot-password-reset-form.component';
import { ForgotPasswordEmailFormComponent } from './components/forgot/forgot-password-email-form/forgot-password-email-form.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import {StepsModule} from 'primeng/steps';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { TopNavComponent } from "src/app/shared/components/top-nav/top-nav.component";


@NgModule({
    declarations:[
        LoginComponent,
        RegisterFormComponent,
        RegisterComponent,
        VerificationComponent,
        ForgotPasswordResetFormComponent,
        ForgotPasswordEmailFormComponent,
        ForgotComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        NgOtpInputModule,
        StepsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}