import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ComponenteAdmin } from '../models/componente-admin';
import { environment } from 'src/environments/environment';
import { Componente } from '../interfaces/componente';
import { ComponenteRequest } from '../models/componente-request';
import { Grupo } from '../interfaces/grupo';
import { ComponenteUpdate } from '../models/componente-update';
import { Mensaje } from '../interfaces/mensaje';
import { MensajeDelete } from '../interfaces/mensaje-delete';


@Injectable({
    providedIn: 'root'
})
export class ComponenteService {

    componenteURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Componente[]>(`${this.componenteURL}/componentes/${id}`);
    }
    public save(componente: ComponenteRequest) {
        return this.httpClient.post<Componente>(`${this.componenteURL}/componente`, componente);
    }
    public update(id: number, componente: ComponenteUpdate){
        return this.httpClient.put<Componente>(`${this.componenteURL}/componente/${id}`, componente);
    }
    public delete(id: number,idMuseo:number){
        return this.httpClient.delete<MensajeDelete>(`${this.componenteURL}/componente/${id}?id=${idMuseo}`);
    }
    public getGruposByComponente(id: number){
        return this.httpClient.get<Grupo>(`${this.componenteURL}/componente/${id}/grupo`);
    }
}
