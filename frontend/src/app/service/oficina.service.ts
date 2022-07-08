import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oficina } from '../models/oficina';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {
  private urlBase = "http://localhost:3000/api/oficina/";

  constructor(private _http: HttpClient) { }

  getOficinas(): Observable<any> {
    const options = {
      headers: new HttpHeaders({

      })

    }
    return this._http.get(this.urlBase + 'mostrar/', options)
  }
  crearOficina(oficina:Oficina):Observable<any>{
    const Options={
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),

    }
    const body = JSON.stringify(oficina)
return this._http.post(this.urlBase+'/crear/',body,Options)
  }
}