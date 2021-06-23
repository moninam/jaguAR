import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from '../interfaces/multimedia';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MultimediaService {

    multimediaURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Multimedia[]>(`${this.multimediaURL}/multimedias/${id}`);
    }
    public save(multimedia: Multimedia): Observable<any> {
        return this.httpClient.post<any>(this.multimediaURL, multimedia);
    }
    public update(id: number, multimedia: Multimedia): Observable<any> {
        return this.httpClient.put<any>(this.multimediaURL + `/${id}`, multimedia);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.multimediaURL + `/${id}`);
    }
}
