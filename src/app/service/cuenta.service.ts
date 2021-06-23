import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { MuseoResponse } from "../admin/dto/museo-response";

@Injectable({
    providedIn: 'root'
})
export class CuentaService{

    constructor(private httpClient: HttpClient) { }
    
    authURL = `${environment.urlApi}/account`;
    public getMuseo(alias: string){
        return this.httpClient.get<MuseoResponse>(`${this.authURL}/museo?name=${alias}`);
    }
}