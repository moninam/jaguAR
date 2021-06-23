import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../interfaces/grupo';
import { GrupoModelo } from '../models/grupo';
import { environment } from 'src/environments/environment';
import { GrupoRequest } from '../models/grupo-request';
import { GrupoUpdate } from '../models/grupo-update';
import { MensajeDelete } from '../interfaces/mensaje-delete';


@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    grupoURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Grupo[]>(`${this.grupoURL}/grupos/${id}`);
    }
    public save(grupo: GrupoRequest){
        return this.httpClient.post<Grupo>(`${this.grupoURL}/grupo`, grupo);
    }
    public update(id: number, grupo: GrupoUpdate) {
        return this.httpClient.put<Grupo>(`${this.grupoURL}/grupo/${id}`, grupo);
    }
    public delete(id: number){
        return this.httpClient.delete<MensajeDelete>(`${this.grupoURL}/grupo/${id}`);
    }
}
