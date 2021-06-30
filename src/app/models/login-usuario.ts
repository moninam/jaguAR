export class LoginUsuario {
 
    constructor(private username: string, private password: string) {}

    get Username(){
        return this.username;
    }
    get Password(){
        return this.password;
    }
    set Username(value){
        this.username = value;
    }
    set Password(value){
        this.password = value;
    }
}