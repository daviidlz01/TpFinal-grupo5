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




  
}
