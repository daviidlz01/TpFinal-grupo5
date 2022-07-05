import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private urlBase="http://localhost:3000/api/recurso"
  constructor(private _http:HttpClient) { }

  getRecurso():Observable<any>{
    const Options ={
      method: "GET",
      headers: new HttpHeaders({}),
      params:new HttpParams({})
    }
    return this._http.get(this.urlBase + "/mostrar",Options)

  }
}
