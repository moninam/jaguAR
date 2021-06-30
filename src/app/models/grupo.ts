export class GrupoModelo {
    private idGrupo?: number;
    private idMuseo?: number;
    

    constructor(
        private nombre: string,
        private descripcion: string,
        private urlImagen: string,
        private createdDate: string,
        private updatedDate: string
    ){}

    get Nombre(){
        return this.nombre;
    }
    get Descripcion(){
        return this.descripcion;
    }
    get UrlImagen(){
        return this.urlImagen;
    }
    get CreatedDate(){
        return this.createdDate;
    }
    get UpdatedDate(){
        return this.updatedDate;
    }
    get IdGrupo(){
        return this.idGrupo;
    }
    get MuseoId(){
        return this.idMuseo;
    }

    set Nombre(value){
        this.nombre = value;
    }
    set Descripcion(value){
        this.descripcion = value;
    }
    set UrlImagen(value){
        this.urlImagen = value;
    }
    set CreatedDate(value){
        this.createdDate = value;
    }
    set UpdatedDate(value){
        this.updatedDate = value;
    }
    set IdGrupo(value){
        this.idGrupo = value;
    }
    set MuseoId(value){
        this.idMuseo = value;
    }
}