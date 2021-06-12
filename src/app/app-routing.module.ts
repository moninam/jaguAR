import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { VisorComponent } from './visor/visor.component';


const routes: Routes = [
    { path: 'inicio', component: LandingComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'visor', component: VisorComponent},
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
