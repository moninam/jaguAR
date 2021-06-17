import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../models/modelo';

@Injectable({
    providedIn: 'root'
})
export class ModeloService {

   modeloURL = 'http://localhost:8080/api/v1/modelo';

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number): Observable<Modelo[]> {
        return this.httpClient.get<Modelo[]>(this.modeloURL + `s/${id}`);
    }
    public save(modelo: Modelo): Observable<any> {
        return this.httpClient.post<any>(this.modeloURL, modelo);
    }
    public update(id: number, modelo: Modelo): Observable<any> {
        return this.httpClient.put<any>(this.modeloURL + `/${id}`, modelo);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.modeloURL + `/${id}`);
    }
}
