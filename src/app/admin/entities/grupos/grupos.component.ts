import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GrupoModelo} from '../../../models/grupo';
import {GrupoService} from '../../../service/grupo.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html'
})
export class GruposComponent implements OnInit{
    //grupos: Grupo[] = [];
    roles: string[] = [];
    isAdmin = false;
    errMsj: string = '';
    grupos: GrupoModelo[] = [];

    /*a eliminar por lo que te puse abajo del tutorial*/
    //grupo: Grupo | null = null;
    x = '';
    y = '';

    constructor(
        private modalService: NgbModal,
        private grupoService: GrupoService,
        private toastService: ToastrService,
        private tokenService: TokenService,
        private cuentaService: CuentaService,
        /* puede que activated route no se use en el update, porque en el
        tutorial original lo usan por estar en otra página de detalle del producto
        https://github.com/cavanosa/tutorial_jwt_FRONT/blob/master/src/app/producto/editar-producto.component.ts*/
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loadMuseo();
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
    loadMuseo(){
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()){
          this.cuentaService.getMuseo(this.tokenService.getUserName())
          .subscribe((museo) => {
            this.tokenService.setIdMuseo(+museo.idMuseo);
            this.loadGrupos(+(this.tokenService.getIdMuseo()!));
            alert(this.tokenService.getIdMuseo());
          },(error) => {
            this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                        timeOut: 3000,  positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                  window.location.href = '/admin';
                },2000);
          })
        } else if (!this.tokenService.getToken()){
            window.location.href = '/admin';
        } else if (this.tokenService.getIdMuseo()){
            this.loadGrupos(+(this.tokenService.getIdMuseo()!));
        }
    }
    loadGrupos(idMuseo: number){
        this.grupoService.getAllByRecinto(idMuseo)
        .subscribe((groupes) => {
            this.grupos = [];
            groupes.forEach(element => {
                var n = new GrupoModelo(
                                    element.nombre,
                                    element.descripcion,
                                    element.urlImagen,
                                    element.createdDate,
                                    element.updatedDate);
                n.IdGrupo = element.idGrupo;
                this.grupos.push(n);
            });
        },(error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
            });
        })
    }


}
