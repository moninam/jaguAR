export class MultimediaAdmin {
    private idMultimedia?: number;
    
    constructor(
        private nombre: string,
        private urlUbicacion: string,
        private multimediaType: string,
    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlUbicacion(){
        return this.urlUbicacion;
    }
    get MultimediaType(){
        return this.multimediaType;
    }
    get IdMultimedia(){
        return this.idMultimedia;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlUbicacion(value){
        this.UrlUbicacion = value;
    }
    set MultimediaType(value){
        this.multimediaType = value;
    }
    set IdMultimedia(value){
        this.idMultimedia = value;
    }
}