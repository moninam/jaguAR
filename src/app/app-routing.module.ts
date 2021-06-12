import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { VisorComponent } from './visor/visor.component';
import {PageNotFoundComponent} from './404/pageNotFound.component';


const routes: Routes = [
    { path: 'inicio', component: LandingComponent },
    { path: 'visor', component: VisorComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'login', component: SessionComponent},
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
