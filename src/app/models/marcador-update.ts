export class MarcadorUpdate {

    constructor(
        private nombre: string,
        private urlTarget: string
    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlTarget(){
        return this.urlTarget;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlTarget(value){
        this.urlTarget = value;
    }
}