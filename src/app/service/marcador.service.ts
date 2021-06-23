import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Target } from '../interfaces/target';
import { Marcador } from '../models/marcador';
import { environment } from 'src/environments/environment';
import { MarcadorRequest } from '../models/marcador-request';
import { MarcadorUpdate } from '../models/marcador-update';
import { MensajeDelete } from '../interfaces/mensaje-delete';


@Injectable({
    providedIn: 'root'
})
export class MarcadorService {

    marcadorURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Target[]>(`${this.marcadorURL}/targets/${id}`);
    }
    public save(marcador: MarcadorRequest){
        return this.httpClient.post<Target>(`${this.marcadorURL}/target`, marcador);
    }
    public update(id: number, marcador: MarcadorUpdate){
        return this.httpClient.put<Target>(`${this.marcadorURL}/target/${id}`, marcador);
    }
    public delete(id: number, idMuseo:number){
        return this.httpClient.delete<MensajeDelete>(`${this.marcadorURL}/target/${id}?id=${idMuseo}`);
    }
}
