import { Marcador } from "./marcador";
import { Modelo } from "./modelo";
import { Multimedia } from "./multimedia";

export class Componente {
    private idComponente?: number;
    private modelo?:Modelo;
    private multimedia?:Multimedia;
    private target?:Marcador;

    constructor(
        private nombreComponente: string,
        private urlImagenComponente: string,
        private descripcionComponente: string,
        private tipoComponente: string,
        private hasTarget:boolean,
        private hasDescription:boolean

    ){}

    get NombreComponente(){
        return this.nombreComponente;
    }
    get UrlImagenComponente(){
        return this.urlImagenComponente;
    }
    get DescripcionComponente(){
        return this.descripcionComponente;
    }
    get HasTarget(){
        return this.hasTarget;
    }
    get TipoComponente(){
        return this.tipoComponente;
    }
    get HasDescription(){
        return this.hasDescription;
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
    set NombreComponente(value){
        this.nombreComponente = value;
    }
    set UrlImagenComponente(value){
        this.urlImagenComponente = value;
    }
    set DescripcionComponente(value){
        this.descripcionComponente = value;
    }
    set HasTarget(value){
        this.hasTarget = value;
    }
    set TipoComponente(value){
        this.tipoComponente = value;
    }
    set HasDescription(value){
        this.hasDescription = value;
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


