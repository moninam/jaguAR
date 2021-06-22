import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Grupo } from 'src/app/models/grupo';
import {TokenService} from '../../service/token.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    public isMenuCollapsed = true;
    public isLogged = false;

    @Input()grupos:Grupo[]=[];

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
    getGrupo(){}
}
