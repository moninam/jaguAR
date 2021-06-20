export class Marcador {
    idMarcador?: number;

    constructor(
        private nombreMarcador: string,
        private urlMarcador: string,
    ){}

    get NombreMarcador(){
        return this.nombreMarcador;
    }
    get UrlMarcador(){
        return this.urlMarcador;
    }
    get IdMarcador(){
        return this.idMarcador;
    }
    set NombreMarcador(value){
        this.nombreMarcador = value;
    }
    set UrlMarcador(value){
        this.urlMarcador = value;
    }
    set IdMarcador(value){
        this.idMarcador = value;
    }
}