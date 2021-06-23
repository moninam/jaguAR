import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ComponenteAdmin } from 'src/app/models/componente-admin';
import { ComponenteRequest } from 'src/app/models/componente-request';
import { ComponenteUpdate } from 'src/app/models/componente-update';
import { GrupoModelo } from 'src/app/models/grupo';
import { MarcadorAdmin } from 'src/app/models/marcador-admin';
import { ModeloAdmin } from 'src/app/models/modelo-admin';
import { MultimediaAdmin } from 'src/app/models/multimedia-admin';
import { ComponenteService } from 'src/app/service/componente.service';
import { CuentaService } from 'src/app/service/cuenta.service';
import { FileService } from 'src/app/service/file.service';
import { GrupoService } from 'src/app/service/grupo.service';
import { MarcadorService } from 'src/app/service/marcador.service';
import { ModeloService } from 'src/app/service/modelo.service';
import { MultimediaService } from 'src/app/service/multimedia.service';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';
import { Elemento } from '../../dto/element';

@Component({
    selector: 'app-componentes',
    templateUrl: './componentes.component.html',
    styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit{
    isLoading = false;
    componentes:ComponenteAdmin[] = [];
    grupos:GrupoModelo[] = [];
    modelos:ModeloAdmin[] = [];
    multimedias:MultimediaAdmin[]=[];
    targets:MarcadorAdmin[] = [];
    elementos:Elemento[] = [];
    componentType = [
        {value:"MODELO",name:"Modelo"},
        {value:"VIDEO",name:"Video"},
        {value:"IMAGEN",name:"Imagen"}
    ];
    isAdmin = false;
    errMsj: string = '';
    fileName='';
    fileGrupo?:File;
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    lengthOfCode = 5;
    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        descripcion: new FormControl('',[Validators.required]),
        grupo : new FormControl(''),
        marcador : new FormControl(''),
        componentTipe : new FormControl('',[Validators.required]),
        archivo : new FormControl('',[Validators.required]),
        idComponente : new FormControl(''),
        urlImagen : new FormControl('')
    });
    deleteComponente = 0;

    constructor(private modalService: NgbModal,
        private componenteService:ComponenteService,
        private tokenService: TokenService,
        private cuentaService: CuentaService,
        private toastService: ToastrService,
        private grupoService:GrupoService,
        private modeloService:ModeloService,
        private multimediaService:MultimediaService,
        private marcadorService:MarcadorService,
        private fileService:FileService)
    {}
    ngOnInit(): void {
        this.loadMuseo();
    }
    openModal(content: any): void {
        this.loadGrupos(+this.tokenService.getIdMuseo()!)
        this.loadModelos(+this.tokenService.getIdMuseo()!);
        this.loadMultimedia(+this.tokenService.getIdMuseo()!);
        this.loadTargets(+this.tokenService.getIdMuseo()!);
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
    }
    editModal(content:any,component:ComponenteAdmin){
        this.isLoading = true;
        this.loadGrupos(+this.tokenService.getIdMuseo()!)
        this.loadModelos(+this.tokenService.getIdMuseo()!);
        this.loadMultimedia(+this.tokenService.getIdMuseo()!);
        this.loadTargets(+this.tokenService.getIdMuseo()!);
        var idGrupo = this.loadGrupoByComponent(component.IdComponente!);

        this.editForm.get('nombre')?.setValue(component.Nombre);
        this.editForm.get('descripcion')?.setValue(component.Descripcion);
        this.editForm.get('componentTipe')?.setValue(component.ComponentType);
        setTimeout(() => {
            this.fillSelect(component.ComponentType);
        },2000);
        if (component.ComponentType === 'MODELO'){
            if (component.Modelo != null){
                alert(component.Modelo.IdModelo);
                this.editForm.get('archivo')?.setValue(component.Modelo.IdModelo?.toString());
            }
        } else if (component.ComponentType === 'VIDEO' || component.ComponentType === 'IMAGEN'){
            if (component.Multimedia != null){
                this.editForm.get('archivo')?.setValue(component.Multimedia.IdMultimedia?.toString());
            }
        }
        if (component.Target != null) {
            alert("con marcador");
            this.editForm.get('marcador')?.setValue(component.Target.IdTarget!.toString());
        }
        this.editForm.get('idComponente')?.setValue(component.IdComponente);
        this.editForm.get('urlImagen')?.setValue(component.UrlImagen);
        setTimeout(() => {
            this.modalService.open(content, {backdropClass: 'color-backdrop'});
            this.isLoading = false;
        },2000);
    }
    deleteModal(content:any,idGrupo:number){
        this.modalService.open(content, {backdropClass: 'color-backdrop'});
        this.deleteComponente = idGrupo;
    }
    loadMuseo(){
        if (!this.tokenService.getIdMuseo() && this.tokenService.getToken()){
          this.cuentaService.getMuseo(this.tokenService.getUserName())
          .subscribe((museo) => {
            this.tokenService.setIdMuseo(+museo.idMuseo);
            this.loadComponentes(+(this.tokenService.getIdMuseo()!));
            this.loadGrupos(+this.tokenService.getIdMuseo()!)
            this.loadModelos(+this.tokenService.getIdMuseo()!);
            this.loadMultimedia(+this.tokenService.getIdMuseo()!);
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
            this.loadComponentes(+(this.tokenService.getIdMuseo()!));
        }
    }
    loadComponentes(id:number){
        this.componenteService.getAllByRecinto(+this.tokenService.getIdMuseo()!)
        .subscribe((comp) => {
            this.componentes = [];
            comp.forEach(element => {
                var c = new ComponenteAdmin(
                    element.nombre,
                    element.urlImagen,
                    element.descripcion,
                    element.componentType,
                    element.hasTarget,
                    element.hasDescripcion
                );
                if (element.modelo != null){
                    c.Modelo = new ModeloAdmin(
                        element.modelo!.nombre,
                        element.modelo!.urlModelo,
                        element.modelo!.nombreAnimacion,
                        element.modelo!.hasRotation,
                        element.modelo!.hasMovement,
                        element.modelo!.hasResize,
                        element.modelo!.texturaPath
                    );
                    c.Modelo.IdModelo = element.modelo!.idModelo;
                } else if(element.multimedia != null){
                    c.Multimedia = new MultimediaAdmin(
                        element.multimedia!.nombre,
                        element.multimedia!.urlUbicacion,
                        element.multimedia!.multimediaType
                    );
                    c.Multimedia.IdMultimedia = element.multimedia!.idMultimedia;
                }
                if (element.target != null){
                    c.Target = new MarcadorAdmin(
                        element.target!.nombre,
                        element.target!.urlTarget
                    );
                    c.Target.IdTarget = element.target!.idTarget;
                }
                c.IdComponente = element.idComponente;
                this.componentes.push(c);
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
        })
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
        });
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
    loadTargets(idMuseo:number){
        this.marcadorService.getAllByRecinto(idMuseo)
        .subscribe((marcadores) => {
            this.targets = [];
            marcadores.forEach(element => {
                var t = new MarcadorAdmin(
                    element.nombre,
                    element.urlTarget
                );
                t.IdTarget = element.idTarget;
                this.targets.push(t);
            });
        },(error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        })
    }
    loadGrupoByComponent(id:number){
        var idGrupo = -1;
        this.componenteService.getGruposByComponente(id)
        .subscribe((response) => {
            idGrupo = response.idGrupo;
             this.editForm.get('grupo')?.setValue(idGrupo.toString());
        },(error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
        });
        return idGrupo;
    }
    onFileSelected(event:any){
        let archivo :File = event.target.files[0];

        if (archivo){
            this.fileGrupo = archivo;
            this.fileName = archivo.name;
        }
    }
    fillSelect(value:any){
        alert(value);
        if (value == 'MODELO'){
            this.elementos = [];
            this.modelos.forEach(element => {
                var e = new Elemento(element.IdModelo!,element.Nombre);
                this.elementos.push(e);
            });
        } else if (value == 'IMAGEN' || value == 'VIDEO'){
            this.elementos = [];
            this.multimedias.forEach(element => {
                if (value == element.MultimediaType) {
                    var e = new Elemento(element.IdMultimedia!,element.Nombre);
                    this.elementos.push(e);
                }
            })
        }
        this.elementos.forEach(element => {
            console.log(element);
        });
    }
    onRegister(item:any){
        
        let nombre = item.nombreComponente;
        let hasTarget = false;
        let hasDescription = false;
        let grupo = -1;
        let marcador = -1;
        
        
        if (item.grupo != ""){
            grupo = +item.grupo;
        } 
        if (item.marcador != ""){
            marcador = +item.marcador;
        }
        if(marcador != -1){
            hasTarget = true;
        }
        let descripcion = item.descripcionComponente;
        
        if (descripcion == ""){
            hasDescription = false;
        } 
        let tipoComponente = item.componentTipe;
        let idElemento = +item.archivo;

        console.log(item);
        this.isLoading = true;
        if (this.fileGrupo){
            let string = this.makeRandom(this.lengthOfCode, this.possible);
            let nameFile = this.tokenService.getIdMuseo() + "_" +string + "_" +this.fileName;
            let finalName = environment.componenteExternoFolder+nameFile;
            this.fileService.upload(this.fileGrupo,environment.componentesFolder+nameFile)
            .subscribe((response) => {  
                var comp = new ComponenteRequest(
                    nombre,
                    grupo,
                    descripcion,
                    marcador,
                    tipoComponente,
                    idElemento,
                    finalName,
                    +this.tokenService.getIdMuseo()!,
                    hasTarget,
                    hasDescription
                );
                this.componenteService.save(comp)
                .subscribe((response) => {
                    this.isLoading = false;
                    this.toastService.success("El componente se ha almacenado con éxito",'OK', {
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
    onEdit(){
        this.isLoading = true;
        console.log(this.editForm.value);
        var grupoC = (this.grupo!.value == "") ? -1 : this.grupo!.value;
        var marcC = (this.marcador!.value == "") ? -1 : this.marcador!.value;
        var hasTarget = (marcC != -1) ;
        var hasDescripcion = (this.descripcion!.value != "");

        var c = new ComponenteUpdate(
            this.nombre!.value,
            grupoC,
            this.descripcion!.value,
            marcC,
            this.componentTipe!.value,
            +this.archivo!.value,
            this.urlImagen!.value,
            hasTarget,
            hasDescripcion
        );
        var idComponente = +this.idComponente!.value;
        this.componenteService.update(idComponente,c)
        .subscribe((elemento) => {
            this.isLoading = false;
            this.toastService.success("El componente se ha actualizado con éxito",'OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            },2000);
        },(error) => {
            this.isLoading = false;
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error("Ocurrió un error al actualizar el componente", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
        })
    }
    onDelete(){
        if(this.deleteComponente != 0){
            this.isLoading = true;
            this.componenteService.delete(this.deleteComponente,+this.tokenService.getIdMuseo()!)
            .subscribe((response) => {
                this.isLoading = false;
                this.toastService.success(response.message,'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                this.deleteComponente = 0;
                setTimeout(() => {
                    window.location.reload();
                },2000);
                
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.deleteComponente = 0;
                this.toastService.error(this.errMsj, 'Fail', {
                        timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });
        }
    }
    get nombre(){
        return this.editForm.get('nombre');
    }
    get descripcion(){
        return this.editForm.get('descripcion');
    }
    get grupo(){
        return this.editForm.get('grupo');
    }
    get marcador(){
        return this.editForm.get('marcador');
    }
    get componentTipe(){
        return this.editForm.get('componentTipe');
    }
    get archivo(){
        return this.editForm.get('archivo');
    }
    get urlImagen(){
        return this.editForm.get('urlImagen');
    }
    get idComponente(){
        return this.editForm.get('idComponente');
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
}

