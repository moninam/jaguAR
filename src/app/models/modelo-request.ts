export class ModeloRequest {
   
    constructor(
        private nombre: string,
        private urlModelo: string,
        private nombreAnimacion: string,
        private hasRotation: boolean,
        private hasMovement: boolean,
        private hasResize: boolean,
        private texturaPath: string,
        private idMuseo:number
    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlModelo(){
        return this.urlModelo;
    }
    get NombreAnimacion(){
        return this.nombreAnimacion;
    }
    get HasRotation(){
        return this.hasRotation;
    }
    get HasMovement(){
        return this.hasMovement;
    }
    get HasResize(){
        return this.hasResize;
    }
    get TexturaPath(){
        return this.texturaPath;
    }
    get IdMuseo(){
        return this.idMuseo;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlModelo(value){
        this.urlModelo = value;
    }
    set NombreAnimacion(value){
        this.nombreAnimacion = value;
    }
    set HasRotation(value){
        this.hasRotation = value;
    }
    set HasMovement(value){
        this.hasMovement = value;
    }
    set HasResize(value){
        this.hasResize = value;
    }
    set TexturaPath(value){
        this.texturaPath = value;
    }
    set IdMuseo(value){
        this.idMuseo = value;
    }
}