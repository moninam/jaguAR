import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionComponent } from './session/session.component';
import { ProfileComponent } from './session/profile/profile.component';

@NgModule({
    declarations: [
        SessionComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: []
})
export class SessionModule { }
