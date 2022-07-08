import { Reunion } from "./reunion";

export class Empleado {
    _id!:string
    nombre!:string;
    apellido!:string;
    email!:string;
    dependencia!:string;
    legajo!:string;
    reuniones!:Array<Reunion>;
}
