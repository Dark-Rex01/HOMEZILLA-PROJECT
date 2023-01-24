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
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';





@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    FeaturesModule,
    BrowserModule,
    ToastModule,
    InputsModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
