import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { Usuario } from 'src/app/models/login';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { LoginService } from 'src/app/service/login.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleado:Empleado;
  usuario:Usuario
  propiedadesJSON!:JSON;

  constructor(private empledoService : EmpleadoService ,private loginService : LoginService ) { 
    this.empleado = new Empleado()
    this.usuario = new Usuario()
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

  crearUsuario(){
    this.loginService.crearUsuario(this.usuario).subscribe(
      (data:any)=>{
        console.log(data);
        
      }
    )
  }


//metodo imprimir pdf. 
print(){
  printJS({printable: this.propiedadesJSON, 
    properties: [
      //field: es el atributo de la LISTA - displayName: es el encabezado de la tabla reporte
      { field: 'fecha', displayName: 'FECHA'},
      { field: 'horaInicio', displayName: 'HORAINICIO'},
      { field: 'horaFIN', displayName: 'HORAFIN'},
      { field: 'oficina', displayName: 'OFICINA'},
      { field: 'estado', displayName: 'ESTADO'},
      { field: 'recursos', displayName: 'RECURSOS'},
      { field: 'participante', displayName: 'PARTICIPANTE'}
    ], type: 'json'
  })
}




}
