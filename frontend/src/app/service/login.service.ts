import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlBase = "http://localhost:3000/api/login/";

  constructor(private _http: HttpClient) { }


  public login(username: string, password: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({ usuario: username, password: password });
    console.log(body);
    return this._http.post(this.urlBase + 'login', body, httpOption);
  }
  public logout() {
    //borro el vble almacenado mediante el storage
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("perfil");
    sessionStorage.removeItem("userid");
  }
  public userLoggedIn() {
    var resultado = false;
    var usuario = sessionStorage.getItem("user");
    if (usuario != null) {
      resultado = true;
    }
    return resultado;
  }
  public userLogged() {
    var usuario = sessionStorage.getItem("user");
    return usuario;
  }
  public idLogged() {
    var id = sessionStorage.getItem("userid");
    return id;
  }

  crearUsuario(usuario:Usuario):Observable<any>{
    const Options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = {
      usuario: usuario.username,
      password: usuario.password,
      empleado: usuario.empleado._id
    }
    return this._http.post(this.urlBase + "/crear/" ,body, Options)

  }

}
