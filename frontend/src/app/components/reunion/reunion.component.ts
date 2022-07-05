import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
//import { ReunionService } from 'src/app/services/reunion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Oficina } from 'src/app/models/oficina';
import { Recurso } from 'src/app/models/recurso';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { jsPDF } from 'jspdf';
import * as printJS from 'print-js';
import { Reunion } from 'src/app/models/reunion';
import { ReunionService } from 'src/app/service/reunion.service';
import { OficinaService } from 'src/app/service/oficina.service';
import { RecursoService } from 'src/app/service/recurso.service';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit {
  reunion: Reunion;
 participantes: Array<Empleado>=[];
 participantesAgregar: Array<Empleado>=[];
 recursosAgregar: Array<Recurso>=[];
 participante: Empleado;
 oficina: Oficina;
 recurso: Recurso;
 oficinas: Array<Oficina>=[];
 recursos: Array<Recurso>=[];
 reuniones: Array<Reunion>=[];
 reunionAux:Reunion;



  constructor(private reunionService: ReunionService, private empleadoService: EmpleadoService, private router: Router,private activatedRoute:ActivatedRoute
  , private oficinaService: OficinaService,private recursoService: RecursoService) { 
    this.participantesAgregar= new Array<Empleado>();
    this.participantes= new Array<Empleado>();
    this.reunion= new Reunion();
    this.reunionAux= new Reunion();
    this.oficinas= new Array<Oficina>();
    this.recursos= new Array<Recurso>();
    this.participante= new Empleado();
    this.oficina= new Oficina();
    this.recurso= new Recurso();
    this.recursosAgregar= new Array<Recurso>();
    this.reuniones= new Array<Reunion>();

  }

  ngOnInit(): void {
    
  }
  imprimir() {
    let reunionesPrint: Array<any> = this.procesarListado(this.reuniones);
    printJS({
      printable: this.reuniones, properties: ['fecha', 'horaInicio', 'horaFin', 'estado', 'tipoReunion',
        'calendario', 'oficina', 'recursos'], type:
        'json'
    })
  }
  procesarListado(reuniones: Array<Reunion>): Array<any> {
    let reunionesProcess: Array<any> = new Array<any>();
    reuniones.forEach(reu => {
      let reuTemp = {
        fecha: reu.fecha,
        horaInicio: reu.horaInicio,
        horaFin: reu.horaFin,
        estado: reu.estado,
        tipoReunion: reu.tipoReunion,
        calendario: reu.calendario,
        oficina: reu.oficina,
        recursos: reu.recursos
      }
      reunionesProcess.push(reuTemp);
    });
    return reunionesProcess;
  }

 /*pruebas*/
  
}