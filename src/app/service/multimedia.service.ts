import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from '../interfaces/multimedia';
import { environment } from 'src/environments/environment';
import { MultimediaRequest } from '../models/multimedia-request';
import { MultimediaUpdate } from '../models/multimedia-update';
import { MensajeDelete } from '../interfaces/mensaje-delete';


@Injectable({
    providedIn: 'root'
})
export class MultimediaService {

    multimediaURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Multimedia[]>(`${this.multimediaURL}/multimedias/${id}`);
    }
    public save(multimedia: MultimediaRequest){
        return this.httpClient.post<Multimedia>(`${this.multimediaURL}/multimedia`, multimedia);
    }
    public update(id: number, multimedia: MultimediaUpdate): Observable<any> {
        return this.httpClient.put<Multimedia>(`${this.multimediaURL}/multimedia/${id}`, multimedia);
    }
    public delete(id: number, idMuseo:number){
        return this.httpClient.delete<MensajeDelete>(`${this.multimediaURL}/multimedia/${id}?id=${idMuseo}`);
    }
}
