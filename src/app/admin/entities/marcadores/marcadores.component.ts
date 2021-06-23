import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MarcadorAdmin } from 'src/app/models/marcador-admin';
import { MarcadorRequest } from 'src/app/models/marcador-request';
import { MarcadorUpdate } from 'src/app/models/marcador-update';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FileService } from 'src/app/service/file.service';
import { MarcadorService } from 'src/app/service/marcador.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-marcadores',
    templateUrl: './marcadores.component.html',
    styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements OnInit{
    fileName:string = '';
    fileMarcador?:File;
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        idMarcador : new FormControl(''),
        urlImagen : new FormControl('')
    });
   
    marcadores:MarcadorAdmin[] = [];
    deleteMarcador = 0;
    errMsj: string = '';
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    lengthOfCode = 5;
    isLoading = false;

    constructor(private modalService: NgbModal,
        private tokenService: TokenService,
        private cuentaService: CuentaService,
        private fileService:FileService,
        private toastService: ToastrService,
        private marcadorService:MarcadorService) {}
    ngOnInit(): void {
        this.loadMuseo();
    }
    loadMuseo(){
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()){
          this.cuentaService.getMuseo(this.tokenService.getUserName())
          .subscribe((museo) => {
            this.tokenService.setIdMuseo(+museo.idMuseo);
            this.loadTargets(+this.tokenService.getIdMuseo()!);
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
            this.loadTargets(+(this.tokenService.getIdMuseo()!));
        }
    }
    loadTargets(idMuseo:number){
        this.marcadorService.getAllByRecinto(idMuseo)
        .subscribe((marc) => {
            this.marcadores = [];
            marc.forEach(element => {
                var t = new MarcadorAdmin(
                    element.nombre,
                    element.urlTarget
                );
                t.IdTarget = element.idTarget;
                this.marcadores.push(t);
            });
        },(error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        })
    }
    openModal(content: any): void {
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }

    editModal(content:any,marcador:MarcadorAdmin){
        this.editForm.get('nombre')?.setValue(marcador.Nombre);
        this.editForm.get('idMarcador')?.setValue(marcador.IdTarget);
        this.editForm.get('urlImagen')?.setValue(marcador.UrlTarget);
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    deleteModal(content:any,idMarcador:number){
        this.deleteMarcador = idMarcador;
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    onRegister(value:any){
        let nombre = value.nombre;
        this.isLoading = true;
        if (this.fileMarcador){
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" +string + "_" +this.fileName;
            let finalName = environment.marcadoresExternosFolder+nameFile;
            let multiName = environment.marcadoresFolder+nameFile;
            this.fileService.upload(this.fileMarcador,multiName)
            .subscribe((response) => {
                var mod = new MarcadorRequest(
                    nombre,
                    finalName,
                    +this.tokenService.getIdMuseo()!
                );
                
                this.marcadorService.save(mod)
                .subscribe((multimedia) => {
                    this.isLoading = false;
                    this.toastService.success("El marcador se ha almacenado con éxito",'OK', {
                        timeOut:3000,positionClass : 'toast-top-center'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    },2000);
                },(error) => {
                    this.isLoading = false;
                    this.errMsj = error.error.message;
                    console.log(this.errMsj);
                    this.toastService.error("Ocurrió un error al registrar el marcador", 'Fail', {
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
            this.fileMarcador = archivo;
            this.fileName = archivo.name;
        }
    }
    onEdit(){
        this.isLoading = true;
        let nombre = this.nombre!.value;
        let urlTarget = this.urlImagen!.value;
        let idMarcador = this.idMarcador!.value;
       
        var mod = new MarcadorUpdate(
            nombre,
            urlTarget
        );
        this.isLoading = true;
        this.marcadorService.update(idMarcador,mod)
        .subscribe((modelo) => {
            this.isLoading = false;
            this.toastService.success("El marcador se ha actualizado con éxito",'OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            },2000);
        },(error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el marcador", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
        });
    }
    onDelete(){
        if(this.deleteMarcador != 0){
            this.isLoading = true;
            this.marcadorService.delete(this.deleteMarcador,+this.tokenService.getIdMuseo()!)
            .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message,'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                this.deleteMarcador = 0;
                setTimeout(() => {
                    window.location.reload();
                },2000);
                
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteMarcador = 0;
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
    get idMarcador(){
        return this.editForm.get('idMarcador');
    }
    get urlImagen(){
        return this.editForm.get('urlImagen');
    }
}