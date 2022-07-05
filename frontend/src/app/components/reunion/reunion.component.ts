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
  empleados: Array<Empleado> = [];
  empleadoAgregar: Array<Empleado> = [];
  empleado: Empleado;

  oficina: Oficina;
  oficinas: Array<Oficina> = [];

  recursosAgregar: Array<Recurso> = [];
  recurso: Recurso;
  recursos: Array<Recurso> = [];

  reunion: Reunion;
  reuniones: Array<Reunion> = [];
  reunionAux: Reunion;



  constructor(private reunionService: ReunionService, private empleadoService: EmpleadoService, private router: Router, private activatedRoute: ActivatedRoute
    , private oficinaService: OficinaService, private recursoService: RecursoService) {
    this.empleadoAgregar = new Array<Empleado>();
    this.empleados = new Array<Empleado>();
    this.empleado = new Empleado();

    this.reunion = new Reunion();
    this.reunionAux = new Reunion();
    this.oficinas = new Array<Oficina>();
    this.recursos = new Array<Recurso>();
    this.oficina = new Oficina();
    this.recurso = new Recurso();
    this.recursosAgregar = new Array<Recurso>();
    this.reuniones = new Array<Reunion>();

  }

  ngOnInit(): void {
    this.cargarOficinas()
    this.cargarPersonas()
    this.cargarRecursos()
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


  cargarOficinas() {
    this.oficinaService.getOficinas().subscribe(
      (data: any) => {
        data.forEach((oficinas: any) => {
          this.oficina = new Oficina();
          Object.assign(this.oficina, oficinas);
          this.oficinas.push(this.oficina);
          this.oficina = new Oficina();
        })
      }
    )
  }
  cargarPersonas() {
    this.empleadoService.getEmpleados().subscribe(
      (data: any) => {
        data.forEach((empleados: any) => {
          this.empleado = new Empleado();
          Object.assign(this.empleado, empleados);
          this.empleados.push(this.empleado);
          this.empleado = new Empleado();

        })
      }
    )
  }

  cargarRecursos() {
    this.recursoService.getRecuroso().subscribe(
      (data: any) => {
        data.forEach((recursos: any) => {
          this.recurso = new Recurso();
          Object.assign(this.recurso, recursos);
          this.recursos.push(this.recurso);
          this.recurso = new Recurso;
        })
      }
    )
  }

  agregarParticipantes(part: Empleado) {
    if (part._id != null) {
      this.empleadoAgregar.push(part);
      var index = -1;
      var c = 0;
      this.empleados.forEach((partic: Empleado) => {
        if (part._id == partic._id) {
          index = c;
        }
        c++;
      });
      this.empleados.splice(index, 1);
      
    }
  }
  eliminarParicipante(parti: Empleado) {

    this.empleadoAgregar.splice(this.empleadoAgregar.indexOf(parti), 1);
    this.empleados.push(parti);
  }
  agregarRecursos(recu: Recurso) {
    if (recu._id != null) {
      this.recursosAgregar.push(this.recurso);
      var index = -1;
      var c = 0
      this.recursos.forEach((recur: Recurso) => {
        if (recu._id == recur._id) {
          index = c;
        }
        c++;
      });
      this.recursos.splice(index, 1);
    }
  }
  eliminarRecurso(recu: Recurso) {
    this.recursosAgregar.splice(this.recursosAgregar.indexOf(recu), 1);
    this.recursos.push(recu);
  }

  //alta
  crearreunion() {
    this.reunion.participantes = this.empleadoAgregar;
    this.reunion.recursos = this.recursosAgregar;
    this.reunion.estado = "pendiente"
    this.reunionService.crearReunion(this.reunion).subscribe(
      (data: any) => {
        console.log(data);

      }
    )
  }

}
