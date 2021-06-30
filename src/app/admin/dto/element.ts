export class Elemento {
    constructor(private value:number, private name:string){}

    get Value(){
        return this.value;
    }
    set Value(value){
        this.value = value;
    }
    get Name(){
        return this.name;
    }
    set Name(value){
        this.name = value;
    }
}