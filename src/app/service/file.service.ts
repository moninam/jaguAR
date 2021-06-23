import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Mensaje } from "../interfaces/mensaje";

@Injectable({
    providedIn: 'root'
})
export class FileService{
    
    fileURL = `${environment.urlApi}/file/upload?ruta=`;

    constructor(private http: HttpClient) { }

    upload(file: File, path:string){
        
        const formData: FormData = new FormData();

        formData.append('file', file);
    
        return this.http.post<Mensaje>(`${this.fileURL+path}`, formData); 
    
      }
}