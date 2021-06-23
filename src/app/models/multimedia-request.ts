export class MultimediaRequest {
    constructor(
        private nombre: string,
        private urlUbicacion: string,
        private tipo: string,
        private idMuseo:number
    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlUbicacion(){
        return this.urlUbicacion;
    }
    get Tipo(){
        return this.tipo;
    }
    get IdMuseo(){
        return this.idMuseo;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlUbicacion(value){
        this.UrlUbicacion = value;
    }
    set Tipo(value){
        this.tipo = value;
    }
    set IdMuseo(value){
        this.idMuseo = value;
    }
}