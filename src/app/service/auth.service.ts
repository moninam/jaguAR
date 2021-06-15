import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroUsuario } from '../models/registro-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authURL = 'http://localhost:8080/api/v1/auth/';

    constructor(private httpClient: HttpClient) { }

    public nuevo(nuevoUsuario: RegistroUsuario): Observable<any> {
        return this.httpClient.post<any>(this.authURL + 'register', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
        return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
    }
}