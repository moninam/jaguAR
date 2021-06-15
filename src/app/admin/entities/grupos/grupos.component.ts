import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html'
})
export class GruposComponent implements OnInit{
    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
}
