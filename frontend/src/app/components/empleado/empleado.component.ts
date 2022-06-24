import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Oficina } from 'src/app/models/oficina';
import { Recurso } from 'src/app/models/recurso';
import { Reunion } from 'src/app/models/reunion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  // creacion nuevo objeto y Array
  empleado!:Empleado
  reuniones:Array<Reunion> = []
  empleados:Array<Empleado> = []
  asistente!: string // deberia ser boolean ?
  
// inyectar
  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  // metodo mostrar todos los empleados (sin filtro de quienes participan)
  mostrarTodo(){
    this.empleadoService.getEmpleado().subscribe(
      (data: Array<Empleado> ) => {
        Object.assign(this.empleados, data)
        console.log(data)
      }
    )
  }
// filtrar por asistente a la reunion
  filtrar(){
    this.empleadoService.getEmpleado().subscribe(  // (this.asistente) me da error
      (data: Array<Empleado>) => {
        this.empleados = []
        Object.assign(this.empleados, data)
        console.log(data)
        
      }
    )
  }

}
