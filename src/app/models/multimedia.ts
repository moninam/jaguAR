export class Multimedia {
    private idMultimedia?: number;
    
    constructor(
        private nombreMultimedia: string,
        private urlMultimedia: string,
        private tipoMultimedia: string,
    ){}

    get NombreMultimedia(){
        return this.nombreMultimedia;
    }
    get UrlMultimedia(){
        return this.urlMultimedia;
    }
    get TipoMultimedia(){
        return this.tipoMultimedia;
    }
    get IdMultimedia(){
        return this.idMultimedia;
    }
    set NombreMultimedia(value){
        this.nombreMultimedia = value;
    }
    set UrlMultimedia(value){
        this.urlMultimedia = value;
    }
    set TipoMultimedia(value){
        this.tipoMultimedia = value;
    }
    set IdMultimedia(value){
        this.idMultimedia = value;
    }
}