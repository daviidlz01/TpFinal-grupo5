import { Empleado } from "./empleado";
import { Recurso } from "./recurso";

export class Reunion {
    titulo!:string;
    fecha!:Date;
    horaInicio!:string;
    horaFin!:string;
    oficina!:string;
    estado!:string;
    recursos!: Array<Recurso>;
    participantes!:Array<Empleado>;
    
}
