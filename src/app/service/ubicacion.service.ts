import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ubicacion } from "../interfaces/ubicacion";
import { environment } from "src/environments/environment";
import { Museo } from "../interfaces/museo";

@Injectable({
    providedIn: 'root'
})
export class UbicacionService{
    private urlVisor = `${environment.urlApi}/visor`;

    constructor(private http: HttpClient){}

    getMuseo(location:Ubicacion){
        const path = `${this.urlVisor}/location/museo`;
        return this.http.post<Museo>(path,location);
    }
}