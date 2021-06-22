export class GrupoModelo {
    private idGrupo?: number;
    private idMuseo?: number;
    

    constructor(
        private nombreGrupo: string,
        private descripcionGrupo: string,
        private urlImagenGrupo: string,
        private fechaCreacionGrupo: string,
        private fechaActualizacionGrupo: string
    ){}

    get NombreGrupo(){
        return this.nombreGrupo;
    }
    get DescripcionGrupo(){
        return this.descripcionGrupo;
    }
    get UrlImagenGrupo(){
        return this.urlImagenGrupo;
    }
    get FechaCreacionGrupo(){
        return this.fechaCreacionGrupo;
    }
    get FechaActualizacionGrupo(){
        return this.fechaActualizacionGrupo;
    }
    get GrupoId(){
        return this.idGrupo;
    }
    get MuseoId(){
        return this.idMuseo;
    }

    set NombreGrupo(value){
        this.nombreGrupo = value;
    }
    set DescripcionGrupo(value){
        this.descripcionGrupo = value;
    }
    set UrlImagenGrupo(value){
        this.urlImagenGrupo = value;
    }
    set FechaCreacionGrupo(value){
        this.fechaCreacionGrupo = value;
    }
    set FechaActualizacionGrupo(value){
        this.fechaActualizacionGrupo = value;
    }
    set GrupoId(value){
        this.idGrupo = value;
    }
    set MuseoId(value){
        this.idMuseo = value;
    }
}