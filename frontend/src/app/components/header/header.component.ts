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


}
