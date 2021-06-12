import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { GruposComponent } from './admin/entities/grupos/grupos.component';
import { ComponentesComponent } from './admin/entities/componentes/componentes.component';
import { ModelosComponent } from './admin/entities/modelos/modelos.component';
import { MarcadoresComponent } from './admin/entities/marcadores/marcadores.component';
import { LandingComponent } from './landing/landing.component';
import { VisorComponent } from './visor/visor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingComponent,
    VisorComponent,
    HeaderComponent,
    FooterComponent,
    GruposComponent,
    ComponentesComponent,
    ModelosComponent,
    MarcadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
