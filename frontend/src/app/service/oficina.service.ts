import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
