import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { AdminComponent } from './admin/admin.component';
import { GruposComponent } from './admin/entities/grupos/grupos.component';
import { ComponentesComponent } from './admin/entities/componentes/componentes.component';
import { ModelosComponent } from './admin/entities/modelos/modelos.component';
import { MarcadoresComponent } from './admin/entities/marcadores/marcadores.component';
import { LandingComponent } from './landing/landing.component';
import { VisorComponent } from './visor/visor.component';
import { PageNotFoundComponent } from './404/pageNotFound.component';


const routes: Routes = [
    { path: 'inicio', component: LandingComponent },
    { path: 'visor', component: VisorComponent},
    { path: 'admin', component: AdminComponent,
      children: [
        {path: 'grupos', component: GruposComponent},
        {path: 'componentes', component: ComponentesComponent},
        {path: 'modelos', component: ModelosComponent},
        {path: 'marcadores', component: MarcadoresComponent}
      ]
    },
    { path: 'login', component: SessionComponent},
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
