export class GrupoUpdate {
    
    constructor(
        private nombre: string,
        private descripcion: string,
        private urlImagen: string
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

    set Nombre(value){
        this.nombre = value;
    }
    set Descripcion(value){
        this.descripcion = value;
    }
    set UrlImagen(value){
        this.urlImagen = value;
    }
}