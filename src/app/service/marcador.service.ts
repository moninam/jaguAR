import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marcador } from '../models/marcador';

@Injectable({
    providedIn: 'root'
})
export class MarcadorService {

    marcadorURL = 'http://localhost:8080/api/v1/target';

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number): Observable<Marcador[]> {
        return this.httpClient.get<Marcador[]>(this.marcadorURL + `s/${id}`);
    }
    public save(marcador: Marcador): Observable<any> {
        return this.httpClient.post<any>(this.marcadorURL, marcador);
    }
    public update(id: number, marcador: Marcador): Observable<any> {
        return this.httpClient.put<any>(this.marcadorURL + `/${id}`, marcador);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.marcadorURL + `/${id}`);
    }
}
