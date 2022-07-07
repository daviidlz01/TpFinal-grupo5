import { Empleado } from "./empleado";
import { Recurso } from "./recurso";

export class Reunion {
    _id!: string;
    titulo!:string;
    caracter!:string;
    fecha!:Date;
    horaInicio!:string;
    horaFin!:string;
    estado!:string;
    recursos!: Array<Recurso>;
    participantes!:Array<Empleado>;
    
}
