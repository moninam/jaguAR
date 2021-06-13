import {Component, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-visor-menu',
    templateUrl: './menu.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../visor.component.css']
})
export class MenuComponent {
    closeResult: string;
    constructor(private modalService: NgbModal) {}
    openMenuModal(content): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
}
