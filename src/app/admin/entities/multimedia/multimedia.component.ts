import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-multimedia',
    templateUrl: './multimedia.component.html'
})
export class MultimediaComponent implements OnInit{
    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
}
