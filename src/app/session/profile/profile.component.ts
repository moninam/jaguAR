import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Profile } from 'src/app/models/profile';
import { RestorePassword } from 'src/app/models/restore-password';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['../session.component.css']
})
export class ProfileComponent implements OnInit {

    telefonoPattern = "^[0-9]+$";
    latitudLonPattern = "^-?[0-9]\\d*(\\.\\d+)?$";
    isLoading = false;
    errMsj: string = '';
    profile?:Profile;

    editForm:FormGroup = new FormGroup({
        nombre: new FormControl('',[Validators.required]),
        direccion: new FormControl('',[Validators.required]),
        telefono : new FormControl('',[Validators.required,
                                        Validators.pattern(this.telefonoPattern),
                                        Validators.maxLength(10),
                                        Validators.minLength(10)]),
        latitud : new FormControl('',[Validators.required,
                                    Validators.pattern(this.latitudLonPattern)]),
        longitud : new FormControl('',[Validators.required,
                                    Validators.pattern(this.latitudLonPattern)])
    });
    
    constructor(private profileService:ProfileService,
        private tokenService: TokenService,
        private toastService: ToastrService){
    }
    ngOnInit(): void {
        this.loadInfo();

    }
    loadInfo(){
        if (this.tokenService.getToken()){
            this.profileService.getAccountInfo(this.tokenService.getUserName()!)
            .subscribe((profi) => {
                this.profile = new Profile(
                    profi.direccion,
                    profi.telefono,
                    profi.latitud,
                    profi.longitud,
                    profi.nombre
                    );
                this.nombre?.setValue(this.profile!.Nombre);
                this.direccion?.setValue(this.profile!.Direccion);
                this.telefono?.setValue(this.profile!.Telefono);
                this.latitud?.setValue(this.profile!.Latitud);
                this.longitud?.setValue(this.profile!.Longitud);
            },(error) => {
                this.toastService.error("Error al obtener la cuenta", 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });
                setTimeout(() => {
                    window.location.href = '/admin';
                },2000);
            });
        }
    }
    onEdit(){
        this.isLoading = true;
        let nombre = this.nombre!.value;
        let direccion = this.direccion!.value;
        let telefono = this.telefono!.value;
        let latitud = this.latitud!.value;
        let longitud = this.longitud!.value;
        
       
        var mod = new Profile(
            direccion,
            telefono,
            latitud,
            longitud,
            nombre
        );
        if (this.tokenService.getToken()){
            this.isLoading = true;
            this.profileService.update(this.tokenService.getUserName(),mod)
            .subscribe((modelo) => {
                this.isLoading = false;
                this.toastService.success("Se ha actualizado la información con éxito",'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                setTimeout(() => {
                    window.location.reload();
                },2000);
            },(error) => {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al actualizar la información", 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });
        } else {
            this.toastService.error("Error al obtener la cuenta", 'Fail', {
                timeOut: 3000,  positionClass: 'toast-top-center',
            });
            setTimeout(() => {
                window.location.href = '/admin';
            },2000);
             
        }
    }
    isValid(){
        return this.editForm.valid;
    }
    onRegister(value:any){
        let oldPassword = value.oldPassword;
        let password = value.password;
        let confirmPassword = value.confirmPass;
        if(this.tokenService.getToken()){
            this.isLoading = true;
            var p = new RestorePassword(this.tokenService.getUserName(),
                            oldPassword,
                            password,
                            confirmPassword
                            );
            this.profileService.restorePassword(p)
            .subscribe((password) => {
                this.isLoading = false;
                this.toastService.success(password.mensaje,'OK', {
                    timeOut:3000,positionClass : 'toast-top-center'
                });
                setTimeout(() => {
                    window.location.reload();
                },2000);
            },(error)=> {
                this.isLoading = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error("Ocurrió un error al actualizar la información", 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });
            });

        }
    }
    get nombre(){
        return this.editForm.get('nombre');
    }
    get direccion(){
        return this.editForm.get('direccion');
    }
    get telefono(){
        return this.editForm.get('telefono');
    }
    get latitud(){
        return this.editForm.get('latitud');
    }
    get longitud(){
        return this.editForm.get('longitud');
    }
}
