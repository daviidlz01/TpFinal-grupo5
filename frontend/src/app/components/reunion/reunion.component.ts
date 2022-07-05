import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ReunionService } from 'src/app/services/reunion.service';
import { Router } from '@angular/router';
import { Oficina } from 'src/app/models/oficina';
import { Recurso } from 'src/app/models/recurso';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { jsPDF } from 'jspdf';
import * as printJS from 'print-js';
import { Reunion } from 'src/app/models/reunion';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit {
  reuniones!: Array<Reunion>
  reunionesPrint:Array<Reunion> = []

  constructor(private reunionService: ReunionService, private empleadoService:EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }
  imprimir(){
    let reunionesPrint:Array<any> = this.procesarListado(this.reuniones);
    printJS({printable: this.reuniones, properties: ['fecha', 'horaInicio', 'horaFin', 'estado', 'tipoReunion',
  'calendario', 'oficina', 'recursos'], type:
    'json'})
    }
    procesarListado(reuniones: Array<Reunion>):Array<any>{
    let reunionesProcess:Array<any> = new Array<any>();
    reuniones.forEach(reu => {
    let reuTemp = {
   fecha: reu.fecha,
   horaInicio: reu.horaInicio,
   horaFin: reu.horaFin,
   estado: reu.estado,
  //  tipoReunion: reu.tipoReunion,
  //  calendario: reu.calendario,

   recursos: reu.recursos
    }
    reunionesProcess.push(reuTemp);
    });
    return reunionesProcess;
  }    
  

}
