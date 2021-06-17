export class Modelo {
    idModelo?: number;
    nombreModelo: string;
    urlModelo: string;
    nombreAnimacion: string;
    hasRotation: boolean;
    hasMovement: boolean;
    hasResize: boolean;
    texturaModelo: string;

    constructor(
        nombreModelo: string,
        urlModelo: string,
        nombreAnimacion: string,
        hasRotation: boolean,
        hasMovement: boolean,
        hasResize: boolean,
        texturaModelo: string
    ){
        this.nombreModelo = nombreModelo;
        this.urlModelo = urlModelo;
        this.nombreAnimacion = nombreAnimacion;
        this.hasRotation = hasRotation;
        this.hasMovement = hasMovement;
        this.hasResize = hasResize;
        this.texturaModelo = texturaModelo;
    }
}