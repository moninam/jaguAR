import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../interfaces/grupo';
import { GrupoModelo } from '../models/grupo';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    grupoURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Grupo[]>(this.grupoURL + `s/${id}`);
    }
    public save(grupo: GrupoModelo): Observable<any> {
        return this.httpClient.post<any>(this.grupoURL, grupo);
    }
    public update(id: number, grupo: GrupoModelo | null): Observable<any> {
        return this.httpClient.put<any>(this.grupoURL + `/${id}`, grupo);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.grupoURL + `/${id}`);
    }
}
