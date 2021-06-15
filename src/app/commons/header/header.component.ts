import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TokenService} from '../../service/token.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    public isMenuCollapsed = true;
    isLogged = false;

    constructor(private modalService: NgbModal, private tokenService: TokenService) {}
    openMenuModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    ngOnInit(): void {
        this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;

    }
    onLogOut(): void {
        this.tokenService.logOut();
        window.location.reload();
    }
}
