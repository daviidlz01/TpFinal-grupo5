import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Oficina } from '../models/oficina';
import { Recurso } from '../models/recurso';
import { Reunion } from '../models/reunion';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

//urls para conectarse a la base de datos

  private urlBase ="http://localhost:3000/api/reunion";
  private urlBase1 ="http://localhost:3000/api/empleado";
  private urlBase2 ="http://localhost:3000/api/recursos";

  constructor(private _http:HttpClient) { }
//traer todas las reuniones

  getReunion():Observable<any>{
    const Options ={
      method: "GET",
      headers: new HttpHeaders({}),
      params:new HttpParams({})
    }
    return this._http.get(this.urlBase + "/mostrar",Options)
  }
// traer todos los recursos

  getRecurso():Observable<any>{
    const Options ={
      method: "GET",
      headers: new HttpHeaders({}),
      params:new HttpParams({})
    }
    return this._http.get(this.urlBase2 + "/mostrar",Options)
  }
  //traer todos los participantes

  getEmpleado():Observable<any>{
    const Options ={
      method: "GET",
      headers: new HttpHeaders({}),
      params:new HttpParams({})
    }
    return this._http.get(this.urlBase1 + "/mostrar",Options)
  }

}
