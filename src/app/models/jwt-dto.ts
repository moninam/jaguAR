export class JwtDTO {
    token: string;
    type: string;
    emailUsuario: string;
    authorities: string[];
    constructor(token: string, type: string, emailUsuario: string, authorities: string[]){
        this.token = token;
        this.type = type;
        this.emailUsuario = emailUsuario;
        this.authorities = authorities;
    }
}
