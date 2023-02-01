import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/error/not-found/not-found.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptors';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { FeaturesModule } from './features/features.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent, NotFoundComponent],
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
    TopNavComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
