import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const ID_MUSEO = 'IdMuseo';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    roles: Array<string> = [];

    constructor(private router:Router) { }

    public setToken(token: string): void {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    public setIdMuseo(idMuseo:number){
        window.localStorage.removeItem(ID_MUSEO);
        window.localStorage.setItem(ID_MUSEO,idMuseo.toString());
    }
    public getIdMuseo(){
        return localStorage.getItem(ID_MUSEO);
    }
    
    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY)!;
    }

    public isLogged():boolean{
        if (this.getToken()){
            return true;
        }
        return false;
    }

    public getUserName(){
        if (!this.isLogged()){
            return null;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const username = values.sub;
        return username;
    }

    public isAdmin(){
        if (!this.isLogged()){
            return false;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const roles = values.roles;
 
        if (roles.indexOf('ROL_ADMIN') < 0){
            return false;
        }
        return true;
    }

    public logOut(): void {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    }
}