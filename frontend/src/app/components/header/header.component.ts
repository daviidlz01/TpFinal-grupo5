import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { Usuario } from 'src/app/models/login';
import { Notificacion } from 'src/app/models/notificaciones';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { LoginService } from 'src/app/service/login.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  empleado!: Empleado
  usuario!: Usuario

  notificacion!:Notificacion
  idEmpeado!:string | null;
  user!:string|null;

  notificaciones!:Array<Notificacion>

  constructor(public loginService: LoginService, private empleadoService: EmpleadoService , private notificacionService : NotificacionesService) {
    this.empleado = new Empleado()
    this.usuario = new Usuario()
    this.notificacion = new Notificacion()
    this.notificaciones = new Array<Notificacion>()
    
  }
  admin(){
  
   var admin = sessionStorage.getItem('admin')
    if (admin === "true"){
      return true
    }
    else{
      return false
    }
  }
  ngOnInit(): void {
    this.getnotificaciones()
  }
  logout() {
    this.loginService.logout();
  }
getnotificaciones(){
  this.idEmpeado = sessionStorage.getItem('userid');
    this.user = sessionStorage.getItem('user');

    console.log(this.idEmpeado);
    console.log(this.user);


    this.agregarNotificaiones();

      }

      agregarNotificaiones(){
        this.notificacionService.getNotificaciones(this.idEmpeado).subscribe(
          (data: any) => {
            data.forEach((notificaciones: any) => {
              this.notificacion = new Notificacion();
              Object.assign(this.notificacion, notificaciones);
              this.notificaciones.push(this.notificacion);
              this.notificacion = new Notificacion();
              
            })
          }
        )
      }
    
}



