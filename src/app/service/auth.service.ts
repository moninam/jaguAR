import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroUsuario } from '../models/registro-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { environment } from 'src/environments/environment';
import { Register } from '../admin/dto/register';
import { Login } from '../admin/dto/login';
import { Token } from '../models/token';
import { Mensaje } from '../interfaces/mensaje';
import { Restore } from '../models/restore';
import { EmailRequest } from '../models/email-request';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authURL = `${environment.urlApi}/auth/`;

    constructor(private httpClient: HttpClient) { }

    public nuevo(nuevoUsuario: RegistroUsuario){
        return this.httpClient.post<Register>(this.authURL + 'register', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario) {
        return this.httpClient.post<Login>(this.authURL + 'login', loginUsuario);
    }

    public refresh(token: Token){
        return this.httpClient.post<Login>(this.authURL + 'refresh', token);
    }

    public recover(id: number){
        return this.httpClient.get<Mensaje>(this.authURL + `recover/${id}`);
    }

    public restore(restore:Restore){
        return this.httpClient.post<Mensaje>(this.authURL + 'restore', restore);
    }

    public restoreAccount(userEmail: EmailRequest){
        return this.httpClient.post<Mensaje>(this.authURL + 'restore/account', userEmail);
    }
}
