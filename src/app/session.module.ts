import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionComponent } from './session/session.component';
import { ProfileComponent } from './session/profile/profile.component';
import {LoginComponent} from './session/auth/login.component';
import {RegistroComponent} from './session/auth/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
    declarations: [
        SessionComponent,
        LoginComponent,
        RegistroComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, 
        ToastrModule.forRoot(),
    ],
    providers: []
})
export class SessionModule { }
