import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reunion } from '../models/reunion';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private urlBase = "http://localhost:3000/api/reunion/";

  constructor(private _http: HttpClient) { }

  getReunion(): Observable<any> {
    const options = {
      headers: new HttpHeaders({

      })

    }
    return this._http.get(this.urlBase + 'mostrar/', options)
  }

  crearReunion(reunion : Reunion): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    const body = JSON.stringify(reunion)
    return this._http.post(this.urlBase+"crear/",body,options)
  }
}
