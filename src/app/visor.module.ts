import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisorComponent } from './visor/visor.component';
import { MenuComponent } from './visor/menu/menu.component';
import { SelectorComponent } from './visor/selector/selector.component';

@NgModule({
    declarations: [
        VisorComponent,
        MenuComponent,
        SelectorComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: []
})
export class VisorModule { }
