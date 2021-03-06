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
import { interceptorProvider, ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { ProfileComponent } from './session/profile/profile.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AdminComponent,
        GruposComponent,
        ComponentesComponent,
        ModelosComponent,
        MarcadoresComponent,
        MultimediaComponent,
        ProfileComponent,
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
        MatIconModule,
        MatSliderModule
    ],
    providers: [interceptorProvider]
})
export class AdminModule { }
