export class Profile{
    constructor(private direccion:string,
                private telefono:string,
                private latitud:number,
                private longitud:number,
                private nombre:string){}


    get Direccion(){
        return this.direccion;
    }
    set Direccion(value){
        this.direccion = value;
    }
    get Telefono(){
        return this.telefono;
    }
    set Telefono(value){
        this.telefono = value;
    }
    get Latitud(){
        return this.latitud;
    }
    set Latitud(value){
        this.latitud = value;
    }
    get Longitud(){
        return this.longitud;
    }
    set Longitud(value){
        this.longitud = value;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(value){
        this.nombre = value;
    }
}