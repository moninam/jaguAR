export class RestorePassword{
    constructor(private username:string,
                private oldPassword:string,
                private nuevaPassword:string,
                private confirmPassword:string){}
    get Username(){
        return this.username;
    }
    set Username(value){
        this.username = value;
    }
    get OldPassword(){
        return this.oldPassword;
    }
    set OldPassword(value){
        this.oldPassword = value;
    }
    get NuevaPassword(){
        return this.nuevaPassword;
    }
    set NuevaPassword(value){
        this.nuevaPassword = value;
    }
    get ConfirmPassword(){
        return this.confirmPassword;
    }
    set ConfirmPassword(value){
        this.confirmPassword = value;
    }
}