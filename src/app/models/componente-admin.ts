import { Marcador } from "./marcador";
import { MarcadorAdmin } from "./marcador-admin";
import { ModeloAdmin } from "./modelo-admin";
import { Multimedia } from "./multimedia";
import { MultimediaAdmin } from "./multimedia-admin";

export class ComponenteAdmin {
    private idComponente?: number;
    private modelo?:ModeloAdmin;
    private multimedia?:MultimediaAdmin;
    private target?:MarcadorAdmin;

    constructor(
        private nombre: string,
        private urlImagen: string,
        private descripcion: string,
        private componentType: string,
        private hasTarget:boolean,
        private hasDescripcion:boolean

    ){}

    get Nombre(){
        return this.nombre;
    }
    get UrlImagen(){
        return this.urlImagen;
    }
    get Descripcion(){
        return this.descripcion;
    }
    get HasTarget(){
        return this.hasTarget;
    }
    get ComponentType(){
        return this.componentType;
    }
    get HasDescripcion(){
        return this.hasDescripcion;
    }
    get IdComponente(){
        return this.idComponente;
    }
    get Modelo(){
        return this.modelo;
    }
    get Multimedia(){
        return this.multimedia;
    }
    get Target(){
        return this.target;
    }
    set Nombre(value){
        this.nombre = value;
    }
    set UrlImagen(value){
        this.urlImagen = value;
    }
    set Descripcion(value){
        this.descripcion = value;
    }
    set HasTarget(value){
        this.hasTarget = value;
    }
    set ComponentType(value){
        this.componentType = value;
    }
    set HasDescripcion(value){
        this.hasDescripcion = value;
    }
    set IdComponente(value){
        this.idComponente = value;
    }
    set Modelo(value){
        this.modelo = value;
    }
    set Multimedia(value){
        this.multimedia = value;
    }
    set Target(value){
        this.target = value;
    }
}


