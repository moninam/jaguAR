import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { RegistroUsuario } from '../../models/registro-usuario';
import {Recinto} from '../../models/recinto';
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

    constructor(
        private tokenService: TokenService,
        private authService: AuthService,
        private router: Router,
        // private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        }
    }

    onRegister(): void {
        const nuevoUsuario = new RegistroUsuario(this.emailUsuario, this.aliasUsuario, this.password);
        this.authService.nuevo(nuevoUsuario).subscribe(
            data => {
                /*this.toastr.success('Cuenta Creada', 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });*/

                this.router.navigate(['/login']);
            },
            err => {
                this.errMsj = err.error.mensaje;
                /*this.toastr.error(this.errMsj, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });*/
                // console.log(err.error.message);
            }
        );
    }

}