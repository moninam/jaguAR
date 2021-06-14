import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './404/pageNotFound.component';
import { AppComponent } from './commons/app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AdminModule } from './admin.module';
import { VisorModule } from './visor.module';
import { SessionModule } from './session.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    SessionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
