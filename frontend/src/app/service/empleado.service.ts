import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlBase ="http://localhost:3000/api/empleado/";

  constructor(private _http:HttpClient) { }

  
  getEmpleados ():Observable<any>{
    const options= {
      headers: new HttpHeaders({
        
      })
    }
    return this._http.get(this.urlBase+'mostrar/',options)

  }
  crearEmpleado ( empleado : Empleado){
    const Options={
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = JSON.stringify(empleado)
    return this._http.post(this.urlBase+"crear/",body,Options)
  }
  agregarReunion( idEmpleado:string, idReunion:string){
    const Options={
      method: "PUT",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    return this._http.put(`http://localhost:3000/api/empleado/${idEmpleado}/reunion/${idReunion}`,Options)
  }


}
