export class EmailRequest{
    constructor(private email:string){}

    get Email(){
        return this.email;
    }
    set Email(value){
        this.email = value;
    }
}