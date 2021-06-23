import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GrupoModelo} from '../../../models/grupo';
import {GrupoService} from '../../../service/grupo.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FileService } from 'src/app/service/file.service';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GrupoRequest } from 'src/app/models/grupo-request';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GrupoUpdate } from 'src/app/models/grupo-update';


@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html',
    styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit{
    //grupos: Grupo[] = [];
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        descripcion: new FormControl('',[Validators.required]),
        idGrupo : new FormControl(''),
        urlImagen : new FormControl('')
    });
    roles: string[] = [];
    isAdmin = false;
    errMsj: string = '';
    grupos: GrupoModelo[] = [];
    fileName = '';
    fileGrupo?:File;
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    lengthOfCode = 5;
    isLoading = false;
    deleteGrupo = 0;

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
        private fileService: FileService,
        /* puede que activated route no se use en el update, porque en el
        tutorial original lo usan por estar en otra página de detalle del producto
        https://github.com/cavanosa/tutorial_jwt_FRONT/blob/master/src/app/producto/editar-producto.component.ts*/
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loadMuseo();
    }
    ngAfterViewInit(){

    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    deleteModal(content:any,idGrupo:number){
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
        this.deleteGrupo = idGrupo;
    }
    editModal(content:any,grupo:GrupoModelo){
        this.editForm.get('nombre')?.setValue(grupo.Nombre);
        this.editForm.get('descripcion')?.setValue(grupo.Descripcion);
        this.editForm.get('idGrupo')?.setValue(grupo.IdGrupo);
        this.editForm.get('urlImagen')?.setValue(grupo.UrlImagen);
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    onDelete(){
        if(this.deleteGrupo != 0){
            this.isLoading = true;
            this.grupoService.delete(this.deleteGrupo)
            .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message,'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                setTimeout(() => {
                    window.location.reload();
                },2000);
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                        timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });
        }
    }
    onEdit(){
        console.log(this.editForm.value);
        this.isLoading = true;
        let idGrupo = this.editForm.get('idGrupo')!.value;
        let nombre = this.editForm.get('nombre')!.value;
        let descripcion = this.editForm.get('descripcion')!.value;
        let imagen = this.editForm.get('urlImagen')!.value;
        let grupo = new GrupoUpdate(nombre,descripcion,imagen);
        this.grupoService.update(idGrupo,grupo)
        .subscribe((response) => {
            this.isLoading = false;
            this.toastService.success("El grupo se ha actualizado con éxito",'OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            },2000);
        },(error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el grupo", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
        });
    }

    onRegister(item:any){
        console.log(item);
        this.isLoading = true;
        if (this.fileGrupo){
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" +string + "_" +this.fileName;
            let finalName = environment.grupoExternoFolder+nameFile;
            this.fileService.upload(this.fileGrupo,environment.grupoFolder+nameFile)
            .subscribe((response) => {  
                let nombreGrupo = item.nombreGrupo;
                let descripcionG = item.descripcionGrupo;
                let museo = +this.tokenService.getIdMuseo()!;
                let group = new GrupoRequest(museo,
                nombreGrupo,descripcionG,finalName);
                this.grupoService.save(group)
                .subscribe((response) => {
                    this.isLoading = false;
                    this.toastService.success("El grupo se ha almacenado con éxito",'OK', {
                        timeOut:3000,positionClass : 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    },2000);
                },(error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el grupo", 'Fail', {
                        timeOut: 3000,  positionClass: 'toast-top-center',
                    });
                });
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });  
        } else {
            this.toastService.error("No se ha seleccionado un archivo para subir", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
        }
    }
    onFileSelected(event:any){
        let archivo :File = event.target.files[0];

        if (archivo){
            this.fileGrupo = archivo;
            this.fileName = archivo.name;
        }
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

    makeRandom(lengthOfCode: number, possible: string) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
          return text;
    }
    isValid(){
        return this.editForm.valid;
    }
}
