export class MarcadorAdmin {
    idTarget?: number;

    constructor(
        private nombre: string,
        private urlTarget: string,
    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlTarget(){
        return this.urlTarget;
    }
    get IdTarget(){
        return this.idTarget;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlTarget(value){
        this.urlTarget = value;
    }
    set IdTarget(value){
        this.idTarget = value;
    }
}