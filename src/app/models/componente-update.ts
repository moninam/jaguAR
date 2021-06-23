export class ComponenteUpdate {
    constructor(
        private nombre: string,
        private idGrupo: number,
        private descripcion: string,
        private idMarcador:number,
        private tipoComponente: string,
        private idElemento:number,
        private urlImagen: string,
        private hasTarget:boolean,
        private hasDescription:boolean

    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlImagen(){
        return this.urlImagen;
    }
    get Descripcion(){
        return this.descripcion;
    }
    get HasTarget(){
        return this.hasTarget;
    }
    get TipoComponente(){
        return this.tipoComponente;
    }
    get HasDescription(){
        return this.hasDescription;
    }
    get IdElemento(){
        return this.idElemento;
    }
    get IdMarcador(){
        return this.idMarcador;
    }
    get IdGrupo(){
        return this.idGrupo;
    }

    set Nombre(value){
        this.nombre = value;
    }
    set UrlImagen(value){
        this.urlImagen = value;
    }
    set Descripcion(value){
        this.descripcion = value;
    }
    set HasTarget(value){
        this.hasTarget = value;
    }
    set TipoComponente(value){
        this.tipoComponente = value;
    }
    set HasDescription(value){
        this.hasDescription = value;
    }
    set IdElemento(value){
        this.idElemento = value;
    }
    set IdMarcador(value){
        this.idMarcador = value;
    }
    set IdGrupo(value){
        this.idGrupo = value;
    }
    
}