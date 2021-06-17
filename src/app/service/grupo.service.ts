import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';

@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    grupoURL = 'http://localhost:8080/api/v1/grupo';

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number): Observable<Grupo[]> {
        return this.httpClient.get<Grupo[]>(this.grupoURL + `s/${id}`);
    }
    public save(grupo: Grupo): Observable<any> {
        return this.httpClient.post<any>(this.grupoURL, grupo);
    }
    public update(id: number, grupo: Grupo | null): Observable<any> {
        return this.httpClient.put<any>(this.grupoURL + `/${id}`, grupo);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.grupoURL + `/${id}`);
    }
}
