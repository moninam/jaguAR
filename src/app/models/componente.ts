export class Componente {
    idComponente?: number;
    nombreComponente: string;
    urlImagenComponente: string;
    descripcionComponente: string;
    hasTarget: boolean;
    tipoComponente: string;
    hasDescription: boolean;

    constructor(
        nombreComponente: string,
        urlImagenComponente: string,
        descripcionComponente: string,
        hasTarget: boolean,
        tipoComponente: string,
        hasDescription: boolean
    ){
        this.nombreComponente = nombreComponente;
        this.urlImagenComponente = urlImagenComponente;
        this.descripcionComponente = descripcionComponente;
        this.hasTarget = hasTarget;
        this.tipoComponente = tipoComponente;
        this.hasDescription = hasDescription;
    }
}


