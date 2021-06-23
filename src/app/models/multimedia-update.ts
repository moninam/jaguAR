export class MultimediaUpdate {
    constructor(
        private nombre: string,
        private urlUbicacion: string,
        private tipo: string,
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
    set Nombre(value){
        this.nombre = value;
    }
    set UrlUbicacion(value){
        this.UrlUbicacion = value;
    }
    set Tipo(value){
        this.tipo = value;
    }
}