import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public isMenuCollapsed = true;
    constructor(private modalService: NgbModal) {}
    openMenuModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
}
