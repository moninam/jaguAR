import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../interfaces/modelo';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ModeloService {

   modeloURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number) {
        return this.httpClient.get<Modelo[]>(`${this.modeloURL}/modelos/${id}`);
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
