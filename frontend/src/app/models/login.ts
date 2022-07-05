import { Empleado } from "./empleado";

export class Usuario {
    _id!: string;
    username!: string;
    password!: string;
    admin!: boolean;
    empleado!:Empleado

    
    Usuario(id:string="", username:string="", password:string="", admin:boolean=false){
this._id = id;
this.username = username;
this.password = password;
this.admin = admin;
}
}
