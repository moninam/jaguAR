import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { GruposComponent } from './admin/entities/grupos/grupos.component';
import { ComponentesComponent } from './admin/entities/componentes/componentes.component';
import { ModelosComponent } from './admin/entities/modelos/modelos.component';
import { MarcadoresComponent } from './admin/entities/marcadores/marcadores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AdminComponent,
        GruposComponent,
        ComponentesComponent,
        ModelosComponent,
        MarcadoresComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: []
})
export class AdminModule { }
