export class RegistroUsuario {

    constructor(private email:string,
                private alias:string,
                private password:string,
                private direccion:string,
                private telefono:string,
                private latitud:number,
                private longitud:number,
                private nombre:string,
                private roles:string[]) 
    {}

    get Email(){
        return this.email;
    }
    get Alias(){
        return this.alias;
    }
    get Password(){
        return this.password;
    }
    get Direccion(){
        return this.direccion;
    }
    get Telefono(){
        return this.telefono;
    }
    get Latitud(){
        return this.latitud;
    }
    get Longitud(){
        return this.longitud;
    }
    get Nombre(){
        return this.nombre;
    }
    get Roles(){
        return this.roles;
    }
    set Password(value){
        this.password = value;
    }
    set Alias(value){
        this.alias = value;
    }
    set Direccion(value){
        this.direccion = value;
    }
    set Telefono(value){
        this.telefono = value;
    }
    set Latitud(value){
        this.latitud = value;
    }
    set Longitud(value){
        this.longitud = value;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set Roles(value){
        this.roles = value;
    }
    set Email(value){
        this.email = value;
    }

}