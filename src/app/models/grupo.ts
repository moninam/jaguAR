export class Grupo {
    idGrupo?: number;
    idMuseo?: number;
    nombreGrupo: string;
    descripcionGrupo: string;
    urlImagenGrupo: string;
    fechaCreacionGrupo: string;
    fechaActualizacionGrupo: string;

    constructor(
        nombreGrupo: string,
        descripcionGrupo: string,
        urlImagenGrupo: string,
        fechaCreacionGrupo: string,
        fechaActualizacionGrupo: string
){
        this.nombreGrupo = nombreGrupo;
        this.descripcionGrupo = descripcionGrupo;
        this.urlImagenGrupo = urlImagenGrupo;
        this.fechaCreacionGrupo = fechaCreacionGrupo;
        this.fechaActualizacionGrupo = fechaActualizacionGrupo;
    }
}