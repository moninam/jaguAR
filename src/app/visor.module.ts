import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisorComponent } from './visor/visor.component';
import { MenuComponent } from './visor/menu/menu.component';
import { SelectorComponent } from './visor/selector/selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [
        VisorComponent,
        MenuComponent,
        SelectorComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [CookieService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisorModule { }
