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

  constructor(public loginService: LoginService, private empleadoService: EmpleadoService , private notificacionService : NotificacionesService) {
    this.empleado = new Empleado()
    this.usuario = new Usuario()
    this.notificacion = new Notificacion()
  }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.logout();
  }




//usuario rapido (para pruebas)
  crearUsuario() {
    this.empleado.nombre = "empleado1"
    this.empleado.apellido = "apellido1"
    this.empleado.legajo = "legajo1"
    this.empleado.email = "email1"
    this.empleado.dependencia = "dep1"
    this.empleado.participante = "par1"
    this.empleado.leido = true
    this.empleadoService.crearEmpleado(this.empleado).subscribe(
      (data: any) => {
        console.log(data);
        this.empleado._id = data._id
        console.log(this.empleado._id)

        this.usuario.username = "usuario1"
        this.usuario.password = "daviidlz"
        this.usuario.empleado = this.empleado


        this.loginService.crearUsuario(this.usuario).subscribe(
          (data: any) => {
            console.log(data);

          }
        )
        this.notificacion.mensaje = "mensaje1"
        this.notificacion.usuario = "usuario1"
        this.notificacionService.crearNotificaciones(this.notificacion).subscribe(
          (data:any)=>{
            console.log(data);
    
          }
        )
        this.notificacion.mensaje = "mensaje2"
        this.notificacion.usuario = "usuario1"
        this.notificacionService.crearNotificaciones(this.notificacion).subscribe(
          (data:any)=>{
            console.log(data);
    
          }
        )
        this.notificacion.mensaje = "mensaje3"
        this.notificacion.usuario = "usuario1"
        this.notificacionService.crearNotificaciones(this.notificacion).subscribe(
          (data:any)=>{
            console.log(data);
    
          }
        )
        this.notificacion.mensaje = "mensaje4"
        this.notificacion.usuario = "usuario2"
        this.notificacionService.crearNotificaciones(this.notificacion).subscribe(
          (data:any)=>{
            console.log(data);
    
          }
        )
        this.notificacion.mensaje = "mensaje5"
        this.notificacion.usuario = "usuario2"
        this.notificacionService.crearNotificaciones(this.notificacion).subscribe(
          (data:any)=>{
            console.log(data);
    
          }
        )
      },

    )

  }



}
