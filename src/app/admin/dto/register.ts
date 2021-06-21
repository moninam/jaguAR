import { Rol } from "./rol";

export interface Register{
    idCuenta:number;
    email:string;
    alias:string;
    isBanned:boolean;
    registerDate:string;
    lastUpdate:string;
    roles:Rol[];
}