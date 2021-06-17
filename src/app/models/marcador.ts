export class Marcador {
    idMarcador?: number;
    nombreMarcador: string;
    urlMarcador: string;

    constructor(
        nombreMarcador: string,
        urlMarcador: string,
    ){
        this.nombreMarcador = nombreMarcador;
        this.urlMarcador = urlMarcador;
    }
}