import { Empleado } from "./empleado";

export class Usuario {
    _id!: string;
    username!: string;
    password!: string;
    empleado!:Empleado

    
    Usuario(id:string="", username:string="", password:string=""){
this._id = id;
this.username = username;
this.password = password;

}
}
