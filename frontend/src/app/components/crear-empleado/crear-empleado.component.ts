import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Usuario } from 'src/app/models/login';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleado:Empleado;
  usuario:Usuario
  
  constructor(private router : Router,private empledoService : EmpleadoService ,private loginService : LoginService ) { 
    this.empleado = new Empleado()
    this.usuario = new Usuario()
    this.usuario.admin = false
  }

  ngOnInit(): void {
  }


  obtener(){
    this.empledoService.getEmpleados().subscribe(
      (data:any)=> {
        console.log(data);
        
      }
    )
  }
  crear(){
    this.empledoService.crearEmpleado(this.empleado).subscribe(
      (data:any)=> {
        console.log(data);
        this.empleado._id = data._id
        console.log(this.empleado._id);
        
      }
    )
  }
  actualizar(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([this.router.url])
  }
  crearUsuario(){
    this.loginService.crearUsuario(this.usuario).subscribe(
      (data:any)=>{
        console.log(data);
        
      }
    )
  }

}
