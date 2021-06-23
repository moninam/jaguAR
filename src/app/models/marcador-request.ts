export class MarcadorRequest {

    constructor(
        private nombre: string,
        private urlTarget: string,
        private idMuseo:number
    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlTarget(){
        return this.urlTarget;
    }
    get IdMuseo(){
        return this.idMuseo;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlTarget(value){
        this.urlTarget = value;
    }
    set IdMuseo(value){
        this.idMuseo = value;
    }
}