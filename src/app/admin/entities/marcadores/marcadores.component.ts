import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-marcadores',
    templateUrl: './marcadores.component.html'
})
export class MarcadoresComponent implements OnInit{
    constructor(private modalService: NgbModal) {}
    ngOnInit(): void {
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
}