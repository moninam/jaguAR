import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from '../models/multimedia';

@Injectable({
    providedIn: 'root'
})
export class MultimediaService {

    multimediaURL = 'http://localhost:8080/api/v1/multimedia';

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number): Observable<Multimedia[]> {
        return this.httpClient.get<Multimedia[]>(this.multimediaURL + `s/${id}`);
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
