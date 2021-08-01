// angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule,  } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// primeng dependencies
import { MessagesModule } from 'primeng/messages'
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

// import angular envirotment variables
import { Configuration, ApiModule } from '@app/shared/backend';
import { environment } from '@environments/environment';

// app dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor, ErrorInterceptor } from '@app/shared/auth';

// app component views
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/index';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule,
    MessagesModule,    
    ButtonModule,
    InputTextModule,
    PanelModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: Configuration,
      useFactory: () =>
          new Configuration({ basePath: environment.basePath})
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
