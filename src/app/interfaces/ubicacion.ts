export class Ubicacion{
    latitud:number;
    longitud:number;

    constructor(private lat:number, private lon:number){
        this.latitud = lat;
        this.longitud = lon;
    }

    get Latitud(){
        return this.latitud;
    }
    get Longitud(){
        return this.longitud;
    }

    set Latitud(lat){
        this.latitud = lat;
    }

    set Longitud(lon){
        this.longitud = lon;
    }
}