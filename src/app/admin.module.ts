import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { GruposComponent } from './admin/entities/grupos/grupos.component';
import { ComponentesComponent } from './admin/entities/componentes/componentes.component';
import { ModelosComponent } from './admin/entities/modelos/modelos.component';
import { MarcadoresComponent } from './admin/entities/marcadores/marcadores.component';
import {MultimediaComponent} from './admin/entities/multimedia/multimedia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';

@NgModule({
    declarations: [
        AdminComponent,
        GruposComponent,
        ComponentesComponent,
        ModelosComponent,
        MarcadoresComponent,
        MultimediaComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule, 
        ToastrModule.forRoot(),
    ],
    providers: [ProdInterceptorService]
})
export class AdminModule { }
