import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { AdminComponent } from './admin/admin.component';
import { GruposComponent } from './admin/entities/grupos/grupos.component';
import { ComponentesComponent } from './admin/entities/componentes/componentes.component';
import { ModelosComponent } from './admin/entities/modelos/modelos.component';
import { MarcadoresComponent } from './admin/entities/marcadores/marcadores.component';
import {MultimediaComponent} from './admin/entities/multimedia/multimedia.component';
import { LandingComponent } from './landing/landing.component';
import { VisorComponent } from './visor/visor.component';
import { PageNotFoundComponent } from './404/pageNotFound.component';
import { ProfileComponent } from './session/profile/profile.component';
import { ProdGuardService } from './guards/prod-guards.service';


const routes: Routes = [
    { path: 'inicio', component: LandingComponent },
    { path: 'visor', component: VisorComponent },
    { path: 'admin', component: AdminComponent,
        children: [
        {path: 'grupos', component: GruposComponent,canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
        {path: 'componentes', component: ComponentesComponent,canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
        {path: 'modelos', component: ModelosComponent,canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
        {path: 'marcadores', component: MarcadoresComponent,canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
        {path: 'multimedia', component: MultimediaComponent,canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }}
      ]
    },
    { path: 'login', component: SessionComponent },
    { path: 'perfil', component: ProfileComponent,canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
