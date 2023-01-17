import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordEmailFormComponent } from "./components/forgot/forgot-password-email-form/forgot-password-email-form.component";
import { ForgotPasswordResetFormComponent } from "./components/forgot/forgot-password-reset-form/forgot-password-reset-form.component";
import { ForgotComponent } from "./components/forgot/forgot.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterFormComponent } from "./components/register/register-form/register-form.component";
import { RegisterComponent } from "./components/register/register.component";
import { VerificationComponent } from "./components/register/verification/verification.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        children: [
            {
                path: 'register-form',
                component: RegisterFormComponent,
                title: 'Register'
            },
            {
                path: 'verification-form',
                component: VerificationComponent,
                title: 'Verification'
            }
        ]
    },
    {
        path:'forgot-password',
        component: ForgotComponent,
        children:[
            {
                path: 'forgot-password-email-form',
                component: ForgotPasswordEmailFormComponent,
                title: 'Reset Password'
            },
            {
                path: 'forgot-password-reset-form',
                component: ForgotPasswordResetFormComponent,
                title: 'Reset Password'
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}