import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { RegistroUsuario } from '../../models/registro-usuario';
import {Recinto} from '../../models/recinto';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['../session.component.css']
})
export class RegistroComponent implements OnInit {

    // nuevoUsuario: RegistroUsuario = {};
    emailUsuario: string = '';
    aliasUsuario: string = '';
    password: string = '';
    nombreRecinto: string = '';
    direccionRecinto: string = '';
    telefonoRecinto: string = '';
    latitud: number = 0;
    longitud: number = 0;
    errMsj: string = '';
    isLogged = false;
    isLoading = false;

    constructor(
        private tokenService: TokenService,
        private authService: AuthService,
        private router: Router,
        private toastService: ToastrService
        // private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
    }

    onRegister(register:any): void {
        this.isLoading = true;
        console.log(register);
        let roles = ["admin"];
        let email = register.emailUsuario;
        let alias = register.aliasUsuario;
        let password = register.password;
        let direccion = register.direccionRecinto;
        let telefono = register.telefonoRecinto;
        let latitud = register.latitud;
        let longitud = register.longitud;
        let nombre = register.nombreRecinto;

        let registro = new RegistroUsuario(email,
                        alias,
                        password,
                        direccion,
                        telefono,
                        latitud,
                        longitud,
                        nombre,
                        roles);
        this.authService.nuevo(registro)
        .subscribe((data) => {
            this.isLoading = false;
            this.toastService.success('Su cuenta se ha registrado con éxito, recibirá un email a '+ data.email+' en la brevedad','OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.reload();
            },2000);
        },
        (error) => {
            console.log(error);
            this.errMsj = error.error.message;
            console.log(this.errMsj);
            this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
            });
        }
        )
    }

}