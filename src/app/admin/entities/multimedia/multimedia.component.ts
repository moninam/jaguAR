import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MultimediaAdmin } from 'src/app/models/multimedia-admin';
import { MultimediaRequest } from 'src/app/models/multimedia-request';
import { MultimediaUpdate } from 'src/app/models/multimedia-update';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FileService } from 'src/app/service/file.service';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-multimedia',
    templateUrl: './multimedia.component.html',
    styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit{
    constructor(private modalService: NgbModal,
        private tokenService: TokenService,
        private cuentaService: CuentaService,
        private fileService:FileService,
        private toastService: ToastrService,
        private multimediaService: MultimediaService) {}

    fileName:string = '';
    fileMultimedia?:File;
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        tipo: new FormControl('',[Validators.required]),
        idMultimedia : new FormControl(''),
        urlImagen : new FormControl('')
    });
    componentType = [
        {value:"VIDEO",name:"Video"},
        {value:"IMAGEN",name:"Imagen"}
    ];
    multimedias:MultimediaAdmin[] = [];
    deleteMultimedia = 0;
    errMsj: string = '';
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    lengthOfCode = 5;
    isLoading = false;
    
    ngOnInit(): void {
        this.loadMuseo();
    }
    loadMultimedia(idMuseo:number){
        this.multimediaService.getAllByRecinto(idMuseo)
        .subscribe((mult) => {
            this.multimedias = [];
            mult.forEach(element => {
                var mt = new MultimediaAdmin(
                    element.nombre,
                    element.urlUbicacion,
                    element.multimediaType
                );
                mt.IdMultimedia = element.idMultimedia;
                this.multimedias.push(mt);
            });
        },(error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
    }
    loadMuseo(){
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()){
          this.cuentaService.getMuseo(this.tokenService.getUserName())
          .subscribe((museo) => {
            this.tokenService.setIdMuseo(+museo.idMuseo);
            this.loadMultimedia(+this.tokenService.getIdMuseo()!);
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
            this.loadMultimedia(+(this.tokenService.getIdMuseo()!));
        }
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    editModal(content:any,multimedia:MultimediaAdmin){
        this.editForm.get('nombre')?.setValue(multimedia.Nombre);
        this.editForm.get('tipo')?.setValue(multimedia.MultimediaType);
        this.editForm.get('idMultimedia')?.setValue(multimedia.IdMultimedia);
        this.editForm.get('urlImagen')?.setValue(multimedia.UrlUbicacion);
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    deleteModal(content:any,idMultimedia:number){
        this.deleteMultimedia = idMultimedia;
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    onRegister(value:any){
        let nombre = value.nombre;
        let tipo = value.componentTipe;
        this.isLoading = true;
        if (this.fileMultimedia){
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" +string + "_" +this.fileName;
            let finalName = "";
            let multiName = "";
            if (tipo === 'VIDEO'){
                finalName = environment.videosExternoFolder+nameFile;
                multiName = environment.videosFolder+nameFile;
            } else {
                finalName = environment.imagenesExternoFolder+nameFile;
                multiName = environment.imagenesFolder+nameFile;
            }
            this.fileService.upload(this.fileMultimedia,multiName)
            .subscribe((response) => {
                var mod = new MultimediaRequest(
                    nombre,
                    finalName,
                    tipo,
                    +this.tokenService.getIdMuseo()!
                );
                
                this.multimediaService.save(mod)
                .subscribe((multimedia) => {
                    this.isLoading = false;
                    this.toastService.success("El archivo se ha almacenado con éxito",'OK', {
                        timeOut:3000,positionClass : 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    },2000);
                },(error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el archivo", 'Fail', {
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
            this.fileMultimedia = archivo;
            this.fileName = archivo.name;
        }
    }
    onEdit(){
        this.isLoading = true;
        let nombre = this.nombre!.value;
        let tipo = this.tipo!.value
        let urlMultimedia = this.urlImagen!.value;
        let idMultimedia = this.idMultimedia!.value;
       
        var mod = new MultimediaUpdate(
            nombre,
            urlMultimedia,
            tipo
        );
        this.isLoading = true;
        this.multimediaService.update(idMultimedia,mod)
        .subscribe((modelo) => {
            this.isLoading = false;
            this.toastService.success("El archivo se ha actualizado con éxito",'OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            },2000);
        },(error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el archivo", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
        });
    }
    onDelete(){
        if(this.deleteMultimedia != 0){
            this.isLoading = true;
            this.multimediaService.delete(this.deleteMultimedia,+this.tokenService.getIdMuseo()!)
            .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message,'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                this.deleteMultimedia = 0;
                setTimeout(() => {
                    window.location.reload();
                },2000);
                
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteMultimedia = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                        timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });
        }
    }
    isValid(){
        return this.editForm.valid;
    }
    makeRandom(lengthOfCode: number, possible: string) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
          return text;
    }
    get nombre(){
        return this.editForm.get('nombre');
    }
    get tipo(){
        return this.editForm.get('tipo');
    }
    get idMultimedia(){
        return this.editForm.get('idMultimedia');
    }
    get urlImagen(){
        return this.editForm.get('urlImagen');
    }
}
