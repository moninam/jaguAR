export class Restore{
    constructor(
        private username:string,
        private oldPassword:string,
        private nuevaPassword:string,
        private confirmPassword:string
    ){}

    get Username(){
        return this.username;
    }
    get OldPassword(){
        return this.oldPassword;
    }
    get NuevaPassword(){
        return this.nuevaPassword;
    }
    get ConfirmPassword(){
        return this.confirmPassword;
    }
    set Username(value){
        this.username = value;
    }
    set OldPassword(value){
        this.oldPassword = value;
    }
    set NuevaPassword(value){
        this.nuevaPassword = value;
    }
    set ConfirmPassword(value){
        this.confirmPassword = value;
    }
}