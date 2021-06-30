import { Modelo } from "./modelo";
import { Multimedia } from "./multimedia";
import { Target } from "./target";

export interface Componente{
    idComponente:number;
    nombre:string;
    urlImagen:string;
    descripcion:string;
    hasTarget:boolean;
    componentType:string;
    modelo?:Modelo;
    multimedia?:Multimedia;
    target?:Target;
    hasDescripcion:boolean;
}