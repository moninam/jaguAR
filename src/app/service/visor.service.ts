import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente } from '../models/componente';
import { Modelo } from '../models/modelo';
import { Recinto } from '../models/recinto';
import { environment } from 'src/environments/environment';
import { Grupo } from '../interfaces/grupo';

@Injectable({
    providedIn: 'root'
})
export class VisorService {

    visorURL = `${environment.urlApi}/visor/grupo`;

    constructor(private httpClient: HttpClient) { }

    public getGruposByRecinto(id: number){
        return this.httpClient.get<Grupo[]>(`${this.visorURL}/${id}`);
    }
    public getComponentesByGrupo(id: number) {
        return this.httpClient.get<Componente[]>(`${this.visorURL}/${id}/componentes`);
    }
}
