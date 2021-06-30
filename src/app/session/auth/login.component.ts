import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../service/token.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
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
        private toastService: ToastrService,
        private cookieService: CookieService
    ) { }

    ngOnInit(): void{
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
        }
    }

    onLogin(login:any): void {
        console.log(login.emailUsuario);
        var loginUsuario = new LoginUsuario(login.emailUsuario,login.password);
        this.authService.login(loginUsuario).
        subscribe((data) => {
            this.isLogged = true;
            this.tokenService.setToken(data.token);
            this.toastService.success('Bienvenido ' + this.tokenService.getUserName(),'OK', {
                timeOut:3000,positionClass : 'toast-top-center'
            });
            setTimeout(() => {
                window.location.href = '/admin';
            },2000);
            //this.router.navigate(['/admin']);
        },
        (error) => {
            this.isLogged = false;
                this.errMsj = error.error.message;
                console.log(this.errMsj);
                this.toastService.error(this.errMsj, 'Fail', {
                    timeOut: 3000,  positionClass: 'toast-top-center',
                });
                // console.log(err.error.message);
        }
        );
    }

}