export class Recinto {
    nombreRecinto: string;
    direccionRecinto: string;
    telefonoRecinto: string;
    latitud: number;
    longitud: number;

    constructor(
        nombreRecinto: string,
        direccionRecinto: string,
        telefonoRecinto: string,
        latitud: number,
        longitud: number
    ){
        this.nombreRecinto = nombreRecinto;
        this.direccionRecinto = direccionRecinto;
        this.telefonoRecinto = telefonoRecinto;
        this.latitud = latitud;
        this.longitud = longitud;
    }
}


