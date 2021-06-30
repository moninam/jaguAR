import {Component, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-visor-menu',
    templateUrl: './menu.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../visor.component.css']
})
export class MenuComponent {
    constructor(private modalService: NgbModal) {}
    openMenuModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    refreshPage(): void{
        window.location.reload();
    }
    loadHomePage(): void{
        window.location.replace('/inicio');
    }
}
