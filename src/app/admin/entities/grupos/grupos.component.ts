import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GrupoModelo} from '../../../models/grupo';
import {GrupoService} from '../../../service/grupo.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html'
})
export class GruposComponent implements OnInit{
    //grupos: Grupo[] = [];
    roles: string[] = [];
    isAdmin = false;

    /*a eliminar por lo que te puse abajo del tutorial*/
    //grupo: Grupo | null = null;
    x = '';
    y = '';

    constructor(
        private modalService: NgbModal,
        private grupoService: GrupoService,
        // private toastr: ToastrService,
        private tokenService: TokenService,
        private activatedRoute: ActivatedRoute,
        /* puede que activated route no se use en el update, porque en el
        tutorial original lo usan por estar en otra página de detalle del producto
        https://github.com/cavanosa/tutorial_jwt_FRONT/blob/master/src/app/producto/editar-producto.component.ts*/
        private router: Router
    ) {}

    ngOnInit(): void {
        
        /*
        this.roles = this.tokenService.get;
        this.roles.forEach(rol => {
            if (rol === 'ROLE_ADMIN') {
                this.isAdmin = true;
            }
        });*/
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }

  

    onCreate(): void {
        const grupo = new GrupoModelo(this.x, this.y, this.x, this.y, this.x);
        this.grupoService.save(grupo).subscribe(
            data => {
                /*this.toastr.success('Producto Creado', 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });*/
                this.router.navigate(['/admin/grupos']);
            },
            err => {
                /*this.toastr.error(err.error.mensaje, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });*/
                // this.router.navigate(['/admin/grupos']);
            }
        );
    }


}
