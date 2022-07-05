import { Empleado } from "./empleado";
import { Oficina } from "./oficina";
import { Recurso } from "./recurso";

export class Reunion {
    _id!:string
    fecha!:Date;
    horaInicio!:string;
    horaFin!:string;
    estado!:string;
    tipoReunion!:string;
    calendario!:Date;
    oficina!:Oficina;
    recursos!:Array<Recurso>;
    participantes!:Array<Empleado>;

}
