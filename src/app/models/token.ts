export class Token{
    constructor(private token:string){}

    get Token(){
        return this.token;
    }
    set Token(value){
        this.token = value;
    }
}