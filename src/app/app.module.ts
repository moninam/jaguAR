import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './404/pageNotFound.component';
import { AppComponent } from './commons/app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AdminModule } from './admin.module';
import { VisorModule } from './visor.module';
import { SessionModule } from './session.module';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    VisorModule,
    SessionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [ 
    ProdInterceptorService,
    CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
