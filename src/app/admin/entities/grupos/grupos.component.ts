import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Grupo} from '../../../models/grupo';
import {GrupoService} from '../../../service/grupo.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html'
})
export class GruposComponent implements OnInit{
    grupos: Grupo[] = [];
    roles: string[] = [];
    isAdmin = false;

    /*a eliminar por lo que te puse abajo del tutorial*/
    grupo: Grupo | null = null;
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
        this.loadGrupos();
        this.roles = this.tokenService.getAuthorities();
        this.roles.forEach(rol => {
            if (rol === 'ROLE_ADMIN') {
                this.isAdmin = true;
            }
        });
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }

    loadGrupos(): void {
        const id = 1; // temporal, falta pasar como parametro el id del usuario
        this.grupoService.getAllByRecinto(id).subscribe(
            data => {
                this.grupos = data;
            },
            err => {
                console.log(err);
            }
        );
    }

    onCreate(): void {
        const grupo = new Grupo(this.x, this.y, this.x, this.y, this.x);
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

    onUpdate(): void {
        const id = this.activatedRoute.snapshot.params.id;
        /* ejemplo - el tutorial tiene en su constructor un grupo = Grupo;
         porque es otra página de detalle del elemento, falta que desde la vista al llamar onUpdate se le pase el id del grupo,
         a traves del array de grupos de este ts, algo similar pasa con el create, también tiene su vista aparte en el tutorial
         entonces tiene los parámetros en el constructor*/
        this.grupoService.update(id, this.grupo).subscribe(
            data => {
                /*this.toastr.success('Producto Actualizado', 'OK', {
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

    deleteGroup(id: number): void{ // temporal, puede devolver mensaje
        this.grupoService.delete(id).subscribe(
            data => {
                /*this.toastr.success('Producto Eliminado', 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });*/
                this.loadGrupos();
            },
            err => {
                /*this.toastr.error(err.error.mensaje, 'Fail', {
                    timeOut: 3000, positionClass: 'toast-top-center',
                });*/
            }
        );
    }


}
