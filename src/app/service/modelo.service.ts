import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../interfaces/modelo';
import { environment } from 'src/environments/environment';
import { ModeloAdmin } from '../models/modelo-admin';
import { ModeloRequest } from '../models/modelo-request';
import { ModeloUpdate } from '../models/modelo-update';
import { MensajeDelete } from '../interfaces/mensaje-delete';


@Injectable({
    providedIn: 'root'
})
export class ModeloService {

   modeloURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number) {
        return this.httpClient.get<Modelo[]>(`${this.modeloURL}/modelos/${id}`);
    }
    public save(modelo: ModeloRequest){
        return this.httpClient.post<Modelo>(`${this.modeloURL}/modelo`, modelo);
    }
    public update(id: number, modelo: ModeloUpdate){
        return this.httpClient.put<Modelo>(`${this.modeloURL}/modelo/${id}`, modelo);
    }
    public delete(id: number, idMuseo:number){
        return this.httpClient.delete<MensajeDelete>(`${this.modeloURL}/modelo/${id}?id=${idMuseo}`);
    }
}
