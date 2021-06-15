import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../service/token.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../session.component.css']
})
export class LoginComponent implements OnInit {

    isLogged = false;
    isLoginFail = false;
    // loginUsuario: LoginUsuario = {};
    emailUsuario: string = '';
    password: string = '';
    roles: string[] = [];
    errMsj: string = '';

    constructor(
        private tokenService: TokenService,
        private authService: AuthService,
        private router: Router,
        // private toastr: ToastrService
    ) { }

    ngOnInit(): void{
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }

    onLogin(): void {
        const loginUsuario = new LoginUsuario(this.emailUsuario, this.password);
        this.authService.login(loginUsuario).subscribe(
            data => {
                this.isLogged = true;

                this.tokenService.setToken(data.token);
                this.tokenService.setUserName(data.emailUsuario);
                this.tokenService.setAuthorities(data.authorities);
                this.roles = data.authorities;
                /*this.toastr.success('Bienvenido ' + data.emailUsuario, 'OK', {
                    timeOut: 3000, positionClass: 'toast-top-center'
                });*/
                this.router.navigate(['/admin']);
            },
            err => {
                this.isLogged = false;
                this.errMsj = err.error.message;
                /*this.toastr.error(this.errMsj, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });*/
                // console.log(err.error.message);
            }
        );
    }

}