export class RegistroUsuario {
    emailUsuario: string;
    aliasUsuario: string;
    password: string;

    constructor(emailUsuario: string, aliasUsuario: string, password: string) {
        this.emailUsuario = emailUsuario;
        this.aliasUsuario = aliasUsuario;
        this.password = password;
    }
}