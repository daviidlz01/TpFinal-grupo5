import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reunion } from '../models/reunion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  urlBase = "http://localhost:3000/api/reunion/";
  constructor(private _http: HttpClient) { }

  public addReunion(reunion:Reunion):Observable<any>{
    const Options={
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = JSON.stringify(reunion)
    return this._http.post(this.urlBase+"crear/",body,Options)
  }
  cambiarEstado(id:string, estado:string):Observable<any>{
    const Options={
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    return this._http.put(this.urlBase+`${id}/estado/${estado}`,Options)
  }
  getReuniones():Observable<any>{
    const Options={
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    return this._http.get(this.urlBase+"mostrar/",Options)

  }
  buscarFecha(fecha:string):Observable<any>{
    const Options={
      headers: new HttpHeaders({
      }),

  }
  return this._http.get(this.urlBase+"buscarFecha/?fecha="+fecha,Options)

}
buscarOficina(oficina:string):Observable<any>{
  const Options={
    headers: new HttpHeaders({
    }),

}
return this._http.get(this.urlBase+"buscarOficina/?oficina="+oficina,Options)

}
buscarEmpleado(emplead:string):Observable<any>{
  const Options={
    headers: new HttpHeaders({
    }),

}
return this._http.get(this.urlBase+"buscarEmpleado/?participantes="+emplead,Options)

}
}