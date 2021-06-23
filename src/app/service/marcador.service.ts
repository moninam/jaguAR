import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Target } from '../interfaces/target';
import { Marcador } from '../models/marcador';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MarcadorService {

    marcadorURL = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getAllByRecinto(id: number){
        return this.httpClient.get<Target[]>(`${this.marcadorURL}/targets/${id}`);
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
