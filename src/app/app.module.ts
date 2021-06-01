import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { VisorComponent } from './visor/visor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
