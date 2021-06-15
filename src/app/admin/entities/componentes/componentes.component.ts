import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-componentes',
    templateUrl: './componentes.component.html'
})
export class ComponentesComponent implements OnInit{
    constructor(private modalService: NgbModal) {}
    ngOnInit(): void {
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
}

