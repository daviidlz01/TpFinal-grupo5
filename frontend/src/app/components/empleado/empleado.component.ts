import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Oficina } from 'src/app/models/oficina';
import { Recurso } from 'src/app/models/recurso';
import { Reunion } from 'src/app/models/reunion';
import { Router } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion.service';





@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public qrCodeText! : string;
  
  title = 'extraqrcode';
  elementType = 'NgxQrcodeElementTypes.URL';
  correctionLevel ='NgxQrcodeErrorCorrectionLevels.HIGH';
  value = 'http://localhost:4200/empleado'

  
 
  
  // creacion nuevo objeto y Array

  empleados:Array<Empleado> = []
  asistente!: string // deberia ser boolean ?
  empleadoid!:string |null;
  empleado!: Empleado;
  reuniones: Array<Reunion>
  usuariosPrint!:Array<any>
 

// inyectar
  constructor(private empleadoService: EmpleadoService, private reunionService:  ReunionService, private router: Router) {
    this.empleado = new Empleado();
    this.reuniones = new Array<Reunion>()
   }

  ngOnInit(): void {
    this.mostrarTodo();
    this.obtenerReuniones()
  }

  // metodo mostrar todos los empleados (sin filtro de quienes participan)
  mostrarTodo(){
    this.empleadoService.getEmpleados().subscribe(
      (data: Array<Empleado> ) => {
        Object.assign(this.empleados, data)
        console.log(data)
      }
    )
  }
 
// filtrar por asistente a la reunion
  filtrar(){
    this.empleadoService.getEmpleados().subscribe(  // (this.asistente) me da error
      (data: Array<Empleado>) => {
        this.empleados = []
        Object.assign(this.empleados, data)
        console.log(data)
      }
    )
    
  }

//---------------------------------------------------------------------------

obtenerReuniones(){
  this.empleadoid = sessionStorage.getItem('userid')
  this.empleadoService.getReuniones(this.empleadoid).subscribe(
    (data: Empleado ) => {
     
      Object.assign(this.empleado, data)
    }
  )
  this.reuniones = this.empleado.reuniones
  
  this.cargarReuniones(this.empleado);
}

cargarReuniones(empleado: Empleado){
  console.log(this.empleado)
  console.log(this.reuniones)
}

//-----------------------------------------------------------------


}
