import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModeloAdmin } from 'src/app/models/modelo-admin';
import { ModeloRequest } from 'src/app/models/modelo-request';
import { ModeloUpdate } from 'src/app/models/modelo-update';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FileService } from 'src/app/service/file.service';
import { ModeloService } from 'src/app/service/modelo.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-modelos',
    templateUrl: './modelos.component.html',
    styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit{
    isLoading = false;
    fileName:string = '';
    fileModelo?:File;
    modelos:ModeloAdmin[] = [];
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        animacion: new FormControl('',[Validators.required]),
        rotation: new FormControl('',[Validators.required]),
        resize: new FormControl('',[Validators.required]),
        idModelo : new FormControl(''),
        urlImagen : new FormControl('')
    });
    deleteModel = 0;
    errMsj: string = '';
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    lengthOfCode = 5;

    constructor(private modalService: NgbModal,
        private tokenService: TokenService,
        private cuentaService: CuentaService,
        private toastService: ToastrService,
        private modeloService:ModeloService,
        private fileService:FileService) {}
    ngOnInit(): void {
        this.loadMuseo();
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    editModal(content:any,modelo:ModeloAdmin){
        this.editForm.get('nombre')?.setValue(modelo.Nombre);
        this.editForm.get('animacion')?.setValue(modelo.NombreAnimacion);
        this.editForm.get('rotation')?.setValue(modelo.HasRotation);
        this.editForm.get('resize')?.setValue(modelo.HasResize);
        this.editForm.get('idModelo')?.setValue(modelo.IdModelo);
        this.editForm.get('urlImagen')?.setValue(modelo.UrlModelo);
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    deleteModal(content:any,idModelo:number){
        this.deleteModel = idModelo;
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    loadMuseo(){
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()){
          this.cuentaService.getMuseo(this.tokenService.getUserName())
          .subscribe((museo) => {
            this.tokenService.setIdMuseo(+museo.idMuseo);
            this.loadModelos(+this.tokenService.getIdMuseo()!);
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
            this.loadModelos(+(this.tokenService.getIdMuseo()!));
        }
    }
    loadModelos(idMuseo: number){
        this.modeloService.getAllByRecinto(idMuseo)
        .subscribe((models) => {
            this.modelos = [];
            models.forEach(element => {
                var m = new ModeloAdmin(
                    element.nombre,
                    element.urlModelo,
                    element.nombreAnimacion,
                    element.hasRotation,
                    element.hasMovement,
                    element.hasResize,
                    element.texturaPath
                );
                m.IdModelo = element.idModelo;
                this.modelos.push(m);
            });
        },(error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
        });
        });
    }
    onRegister(value:any){
        let nombre = value.nombre;
        let animacion = value.animacion;
        let resize = (value.resize == "")? false: value.resize;
        let rotation = (value.rotation == "")? false : value.rotation;
        let movement = false;
        let path = "N/A";
        this.isLoading = true;
        if (this.fileModelo){
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" +string + "_" +this.fileName;
            let finalName = environment.modelosExternoFolder+nameFile;
            this.fileService.upload(this.fileModelo,environment.modelosFolder+nameFile)
            .subscribe((response) => {
                var mod = new ModeloRequest(
                    nombre,
                    finalName,
                    animacion,
                    rotation,
                    movement,
                    resize,
                    path,
                    +this.tokenService.getIdMuseo()!
                );
                
                this.modeloService.save(mod)
                .subscribe((modelo) => {
                    this.isLoading = false;
                    this.toastService.success("El modelo se ha almacenado con éxito",'OK', {
                        timeOut:3000,positionClass : 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    },2000);
                },(error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el componente", 'Fail', {
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
            this.fileModelo = archivo;
            this.fileName = archivo.name;
        }
    }
    onEdit(){
        this.isLoading = true;
        let nombre = this.nombre!.value;
        let animacion = this.animacion!.value
        let resize = (this.resize!.value == "")? false: this.resize!.value;
        let rotation = (this.rotation!.value == "")? false : this.rotation!.value;
        let urlModelo = this.urlImagen!.value;
        let idModelo = this.idModelo!.value;
        let movement = false;
        let path = "N/A";
        var mod = new ModeloUpdate(
            nombre,
            urlModelo,
            animacion,
            rotation,
            movement,
            resize,
            path
        );
        this.isLoading = true;
        this.modeloService.update(idModelo,mod)
        .subscribe((modelo) => {
            this.isLoading = false;
            this.toastService.success("El modelo se ha almacenado con éxito",'OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            },2000);
        },(error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el modelo", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
    });
    }
    onDelete(){
        if(this.deleteModel != 0){
            this.isLoading = true;
            this.modeloService.delete(this.deleteModel,+this.tokenService.getIdMuseo()!)
            .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message,'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                this.deleteModel = 0;
                setTimeout(() => {
                    window.location.reload();
                },2000);
                
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteModel = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                        timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });
        }
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
    get nombre(){
        return this.editForm.get('nombre');
    }
    get animacion(){
        return this.editForm.get('animacion');
    }
    get rotation(){
        return this.editForm.get('rotation');
    }
    get resize(){
        return this.editForm.get('resize');
    }
    get idModelo(){
        return this.editForm.get('idModelo');
    }
    get urlImagen(){
        return this.editForm.get('urlImagen');
    }
}
