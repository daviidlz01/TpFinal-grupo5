import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { Usuario } from 'src/app/models/login';
import { Recurso } from 'src/app/models/recurso';
import { Reunion } from 'src/app/models/reunion';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { RecursosService } from 'src/app/services/recursos.service';
import { ReunionService } from 'src/app/services/reunion.service';


@Component({
  selector: 'app-ctrl-reuniones',
  templateUrl: './ctrl-reuniones.component.html',
  styleUrls: ['./ctrl-reuniones.component.css']
})
export class CtrlReunionesComponent implements OnInit {


  reunion: Reunion
  participantes: Array<Empleado>=[];
  recursosAgregar: Array<Recurso>=[];
  participantesAgregar: Array<Empleado>=[];
  recursos: Array<Recurso>=[];
  participante: Empleado;
  recurso: Recurso;

  constructor(private empleadoService:EmpleadoService, private recursoService: RecursosService, private reunionService:ReunionService) { 
    this.reunion= new Reunion();
    this.participantes= new Array<Empleado>();
   
    this.participantesAgregar= new Array<Empleado>();
    this.recursosAgregar= new Array<Recurso>();
    this.participante= new Empleado();
    this.recursos= new Array<Recurso>();
    this.recurso= new Recurso();

  }

  altaReunion(){
    this.reunion.participantes = this.participantesAgregar;
    this.reunion.recursos = this.recursosAgregar;
    this.reunion.estado = "no realizada";
    console.log(this.reunion)
    this.reunionService.addReunion(this.reunion).subscribe(
      result=>{
        console.log(result);
      }
    )
  }
  getReuniones(){

  }

  getParticipantes(){
  
    var empleado: Empleado;
    this.empleadoService.getEmpleados().subscribe(
      result=>{
         this.participantes=new Array <Empleado>();
         result.forEach((element:Empleado)=>{
          empleado=new Empleado();
          Object.assign(empleado,element);
          this.participantes.push(empleado);
          empleado=new Empleado();
         })
         console.log(this.participantes)
      }
    )
  }

  getRecursos(){
    this.recursoService.getRecurso().subscribe(
      result=>{
        result.forEach((element:any)=>{
          this.recurso= new Recurso();
          Object.assign(this.recurso,element);
          this.recursos.push(this.recurso);
          this.recurso= new Recurso();
      
        });
      },
      error=>{
        console.log(error);
      }
    )
  }
  agregarParticipantes(part:Empleado){
    if(part._id!=null){
     this.participantesAgregar.push(part);
     var index=-1;
     var c=0;
     this.participantes.forEach((element:Empleado)=>{
       if(part._id==element._id){
         index=c;
       }
       c++;
     });
     this.participantes.splice(index,1);
   }
   }
  quitarParticipantes(){

  }
  agregarRecursos(recu:Recurso){
    if(recu._id!=null){
      this.recursosAgregar.push(this.recurso);
      var index=-1;
      var c=0
      this.recursos.forEach((element:Recurso)=>{  
        if(recu._id==element._id){
          index=c;
        }
        c++;
      });
      this.recursos.splice(index,1);
    }
    console.log(this.recursosAgregar)
  }
  quitarRecursos(){

  }

  ngOnInit(): void {
    this.getParticipantes()
    this.getRecursos()
  }

}
