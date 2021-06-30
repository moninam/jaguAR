import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { MuseoResponse } from "../admin/dto/museo-response";
import { Mensaje } from "../interfaces/mensaje";
import { ProfileI } from "../interfaces/profile";
import { ProfileGet } from "../interfaces/profile-get";
import { Profile } from "../models/profile";
import { RestorePassword } from "../models/restore-password";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{

    constructor(private httpClient: HttpClient) { }
    
    authURL = `${environment.urlApi}/account`;

    public update(alias:string,profile:Profile){
        return this.httpClient.put<ProfileI>(`${this.authURL}/profile?alias=${alias}`,profile);
    }
    public getAccountInfo(alias: string){
        return this.httpClient.get<ProfileGet>(`${this.authURL}/profile?alias=${alias}`);
    }
    public restorePassword(body:RestorePassword){
        return this.httpClient.post<Mensaje>(`${this.authURL}/restore`,body);
    }
}