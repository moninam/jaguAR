export class RegistroUsuario {
    emailUsuario: string;
    aliasUsuario: string;
    password: string;
    nombreRecinto: string;
    direccionRecinto: string;
    telefonoRecinto: string;
    latitud: number;
    longitud: number;

    constructor(
        emailUsuario: string, aliasUsuario: string, password: string,
        nombreRecinto: string, direccionRecinto: string, telefonoRecinto: string, latitud: number, longitud: number
    ) {
        this.emailUsuario = emailUsuario;
        this.aliasUsuario = aliasUsuario;
        this.password = password;
        this.nombreRecinto = nombreRecinto;
        this.direccionRecinto = direccionRecinto;
        this.telefonoRecinto = telefonoRecinto;
        this.latitud = latitud;
        this.longitud = longitud;

    }
}