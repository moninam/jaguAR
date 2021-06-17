export class Multimedia {
    idMultimedia?: number;
    nombreMultimedia: string;
    urlMultimedia: string;
    tipoMultimedia: string;

    constructor(
        nombreMultimedia: string,
        urlMultimedia: string,
        tipoMultimedia: string,
    ){
        this.nombreMultimedia = nombreMultimedia;
        this.urlMultimedia = urlMultimedia;
        this.tipoMultimedia = tipoMultimedia;
    }
}