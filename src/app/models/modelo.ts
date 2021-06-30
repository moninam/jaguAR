export class Modelo {
    idModelo?: number;
   

    constructor(
        private nombreModelo: string,
        private urlModelo: string,
        private nombreAnimacion: string,
        private hasRotation: boolean,
        private hasMovement: boolean,
        private hasResize: boolean,
        private texturaModelo: string
    ){}

    get NombreModelo(){
        return this.nombreModelo;
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
    get TexturaModelo(){
        return this.texturaModelo;
    }
    get IdModelo(){
        return this.idModelo;
    }
    set NombreModelo(value){
        this.nombreModelo = value;
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
    set TexturaModelo(value){
        this.texturaModelo = value;
    }
    set IdModelo(value){
        this.idModelo = value;
    }
}