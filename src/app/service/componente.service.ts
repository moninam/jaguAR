import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente } from '../models/componente';
import { Grupo } from '../models/grupo';

@Injectable({
    providedIn: 'root'
})
export class ComponenteService {

    componenteURL = 'http://localhost:8080/api/v1/componente';

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number): Observable<Componente[]> {
        return this.httpClient.get<Componente[]>(this.componenteURL + `s/${id}`);
    }
    public save(componente: Componente): Observable<any> {
        return this.httpClient.post<any>(this.componenteURL, componente);
    }
    public update(id: number, componente: Componente): Observable<any> {
        return this.httpClient.put<any>(this.componenteURL + `/${id}`, componente);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.componenteURL + `/${id}`);
    }
    public getGruposByComponente(id: number): Observable<Grupo[]> {
        return this.httpClient.get<Grupo[]>(this.componenteURL + `componente/${id}/grupo`);
    }
}
