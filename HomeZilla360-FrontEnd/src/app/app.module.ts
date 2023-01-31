import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import {ToastModule} from 'primeng/toast';
import { JwtInterceptor } from './core/interceptors/jwt.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    FeaturesModule,
    BrowserModule,
    ToastModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    TopNavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
