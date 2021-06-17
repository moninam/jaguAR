import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';
import { Componente } from '../models/componente';
import { Modelo } from '../models/modelo';
import { Recinto } from '../models/recinto';

@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    visorURL = 'http://localhost:8080/api/v1/visor/';

    constructor(private httpClient: HttpClient) { }

    public getAllRecintos(): Observable<Recinto[]>{
        return this.httpClient.get<any>(this.visorURL + `museo`);
    }
    public locateRecinto(latitude: number, longitude: number): Observable<Recinto[]> {
        return this.httpClient.post<any>(this.visorURL + `location/museo`, [latitude, longitude]);
    }
    public getGruposByRecinto(id: number): Observable<Grupo[]> {
        return this.httpClient.get<Grupo[]>(this.visorURL + `grupo/${id}`);
    }
    public getComponentesByGrupo(id: number): Observable<Componente[]> {
        return this.httpClient.get<Componente[]>(this.visorURL + `grupo/${id}/componentes`);
    }
}
