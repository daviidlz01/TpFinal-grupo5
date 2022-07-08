import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { Usuario } from 'src/app/models/login';
import { Notificacion } from 'src/app/models/notificaciones';
import { Recurso } from 'src/app/models/recurso';
import { Reunion } from 'src/app/models/reunion';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { RecursosService } from 'src/app/services/recursos.service';
import { ReunionService } from 'src/app/services/reunion.service';
import {Email} from 'src/app/models/email';
import { OficinaService } from 'src/app/service/oficina.service';
import { Oficina } from 'src/app/models/oficina';
import * as printJS from 'print-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctrl-reuniones',
  templateUrl: './ctrl-reuniones.component.html',
  styleUrls: ['./ctrl-reuniones.component.css']
})
export class CtrlReunionesComponent implements OnInit {

  idReunionCreada="";
  reunion: Reunion
  participantes: Array<Empleado>=[];
  recursosAgregar: Array<Recurso>=[];
  participantesAgregar: Array<Empleado>=[];
  recursos: Array<Recurso>=[];
  participante: Empleado;
  recurso: Recurso;
  notificacion:Notificacion;

  reuniones: Array<Reunion>=[];
  reunionAux:Reunion;

  oficina:Oficina
  oficinas: Array<Oficina> = [];

  reunionesPrint:Array<Reunion> = [];
  reunionesPrint2!:Reunion



  constructor(private router:Router,private oficinaService : OficinaService,private notificacionService:NotificacionesService,private empleadoService:EmpleadoService, private recursoService: RecursosService, private reunionService:ReunionService) { 
    this.reunion= new Reunion();
    this.participantes= new Array<Empleado>();
    this.notificacion = new Notificacion();
    this.participantesAgregar= new Array<Empleado>();
    this.recursosAgregar= new Array<Recurso>();
    this.participante= new Empleado();
    this.recursos= new Array<Recurso>();
    this.recurso= new Recurso();
    this.oficina = new Oficina();
    this.reuniones= new Array<Reunion>();
    this.reunionAux= new Reunion();
    this.oficinas = new Array<Oficina>();

  }
  agregarNotificacion(mensaje:string, titulo:string){
    console.log(this.reunion._id)
    var email:Email;

    this.notificacion.mensaje = mensaje;
    this.notificacion.usuario = this.participantesAgregar
    this.notificacionService.crearNotificaciones(this.notificacion).subscribe(
      result =>{
        console.log(result._id)
      }
    )
    for (let part of this.participantesAgregar){
      email = new Email();
      email.email = part.email;
      email.asunto = titulo;
      email.mensaje = mensaje;
      this.notificacionService.postEmail(email).subscribe(
        result =>{
          console.log(result)
       }
      )
      this.empleadoService.agregarReunion(part._id ,this.idReunionCreada).subscribe(
         result =>{
         console.log(result)
        }
     )
    }
  }
  altaReunion(){
   var mensaje = `Reunion de caracter: ${this.reunion.caracter}, para la fecha: ${this.reunion.fecha}, desde las: ${this.reunion.horaInicio}, hasta las: ${this.reunion.horaFin}`
    this.reunion.participantes = this.participantesAgregar;
    this.reunion.recursos = this.recursosAgregar;
    this.reunion.estado = "Pendiente";

    if(this.comprobarParticipante()==false) {
      console.log("colicion Participante");
      
    }else if(this.comprobarOficinas()==false) {
      console.log('colicion Oficina')
    }else{
      this.reunionService.addReunion(this.reunion).subscribe(
        (data:any)=>{
          console.log(data);
          console.log(this.comprobarParticipante());
                  this.reunion._id = data._id
                          for (let part of this.participantesAgregar){
          this.empleadoService.agregarReunion(part._id ,data._id).subscribe(
             result =>{
              console.log(result)
            }
          )
        }
        console.log(data._id)
      }
    )
      this.agregarNotificacion(mensaje,this.reunion.titulo);
      document.getElementById("btnResultado")?.click();

    }
  }
    

  
  getReuniones(){
    this.reunionService.getReuniones().subscribe(
      (data:any)=>{
        data.forEach((element:any)=>{
          this.reunionAux=new Reunion();
          Object.assign(this.reunionAux,element);
          this.reuniones.push(this.reunionAux);
          this.reunionAux=new Reunion;
        })
      }
    )
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
         //console.log(this.participantes)
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
  getOficinas(){
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
  
  quitarParticipante(part:Empleado){
   
    this.participantesAgregar.splice(this.participantesAgregar.indexOf(part),1);
    this.participantes.push(part);
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
  quitarRecursos(recu:Recurso){
    this.recursosAgregar.splice(this.recursosAgregar.indexOf(recu),1);
    this.recursos.push(recu);
  }

  ngOnInit(): void {
    this.getParticipantes()
    this.getRecursos()
    console.log(sessionStorage.getItem("admin"))
    this.getReuniones()
    this.getOficinas()
  }

  comprobarParticipante():Boolean{
    var retornar=true;
    this.reuniones.forEach((reun:Reunion)=>{
      
      
      reun.participantes.forEach((em:Empleado)=>{
        
     //   console.log('empleados....');
        var emp :string|Empleado
        emp= em
        //console.log(emp);
        
        
        this.reunion.participantes.forEach((empl:Empleado)=>{                 
          if(reun._id!=this.reunion._id){
         //   console.log('distintas reuniones.....');
            
          if(emp==empl._id ){
          //  console.log('mismos empleados..');
           // console.log(reun.fecha);       
           // console.log(this.reunion.fecha);
            
            if(reun.fecha==this.reunion.fecha){
            //  console.log('comprobando....');
              
              if((this.convertirHora(this.reunion.horaInicio).getHours() > this.convertirHora(reun.horaInicio).getHours()   ||
               (this.convertirHora(this.reunion.horaInicio).getHours() == this.convertirHora(reun.horaInicio).getHours() &&
                this.convertirHora(this.reunion.horaInicio).getMinutes() >= this.convertirHora(reun.horaInicio).getMinutes()))  &&
                (this.convertirHora(this.reunion.horaInicio).getHours() < this.convertirHora(reun.horaFin).getHours() ||
                  (this.convertirHora(this.reunion.horaInicio).getHours() == this.convertirHora(reun.horaFin).getHours() && 
                  this.convertirHora(this.reunion.horaInicio).getMinutes() <= this.convertirHora(reun.horaFin).getMinutes()))){
                retornar=false;
              }else if((this.convertirHora(this.reunion.horaFin).getHours() < this.convertirHora(reun.horaFin).getHours()   ||
               (this.convertirHora(this.reunion.horaFin).getHours() == this.convertirHora(reun.horaFin).getHours() &&
                this.convertirHora(this.reunion.horaFin).getMinutes() <= this.convertirHora(reun.horaFin).getMinutes()))  &&
                 (this.convertirHora(this.reunion.horaFin).getHours() > this.convertirHora(reun.horaInicio).getHours() ||
                   (this.convertirHora(this.reunion.horaFin).getHours() == this.convertirHora(reun.horaInicio).getHours() &&
                    this.convertirHora(this.reunion.horaFin).getMinutes() >= this.convertirHora(reun.horaInicio).getMinutes()))){
                retornar=false;
              }
            } 
          }
        }
        });
      });
    });
    return retornar;
  }
  comprobarOficinas():Boolean{
    var retornar=true;
    this.reuniones.forEach((reun:Reunion)=>{
      //console.log(reun);
      
      if(reun._id!=this.reunion._id){
        //console.log(reun.oficina);
        //console.log(this.reunion.oficina._id);
        var re :string|Oficina
        re=reun.oficina._id
        //console.log(re);
        
      if(re==this.reunion.oficina._id){
        if(reun.fecha==this.reunion.fecha){
          if((this.convertirHora(this.reunion.horaInicio).getHours() > this.convertirHora(reun.horaInicio).getHours()   ||
           (this.convertirHora(this.reunion.horaInicio).getHours() == this.convertirHora(reun.horaInicio).getHours() &&
            this.convertirHora(this.reunion.horaInicio).getMinutes() >= this.convertirHora(reun.horaInicio).getMinutes())) &&
             (this.convertirHora(this.reunion.horaInicio).getHours() < this.convertirHora(reun.horaFin).getHours() ||
               (this.convertirHora(this.reunion.horaInicio).getHours() == this.convertirHora(reun.horaFin).getHours() &&
                this.convertirHora(this.reunion.horaInicio).getMinutes() <= this.convertirHora(reun.horaFin).getMinutes()))){
            retornar=false;
          }else if((this.convertirHora(this.reunion.horaFin).getHours() < this.convertirHora(reun.horaFin).getHours()   ||
           (this.convertirHora(this.reunion.horaFin).getHours() == this.convertirHora(reun.horaFin).getHours() && 
           this.convertirHora(this.reunion.horaFin).getMinutes() <= this.convertirHora(reun.horaFin).getMinutes()))  &&
            (this.convertirHora(this.reunion.horaFin).getHours() > this.convertirHora(reun.horaInicio).getHours() ||
              (this.convertirHora(this.reunion.horaFin).getHours() == this.convertirHora(reun.horaInicio).getHours() &&
               this.convertirHora(this.reunion.horaFin).getMinutes() >= this.convertirHora(reun.horaInicio).getMinutes()))){
            retornar=false;
          }
        }
      }
    }
    });
    return retornar;
  }

  convertirHora(hora:string):Date{
    const [hour,minute]= hora.split(':');
    var tm = new Date();
    tm.setHours(+hour);
    tm.setMinutes(+minute);
    return tm;
  }

  cambiarEstado(id:string,estado:string){
    this.reunionService.cambiarEstado(id, estado).subscribe(
      result =>{
        console.log(result)
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url])
      }
    )
  }
  //
  imprimir(){
    let  reunionesPrint:Array<any> = this.procesarListado(this.reuniones);
    printJS({printable: this.reuniones, properties: ['titulo','fecha', 'horaInicio', 'horaFin', 'estado',
   'oficina'], type:
    'json'})
    }
    procesarListado(reuniones: Array<Reunion>):Array<any>{
    let reunionesProcess:Array<any> = new Array<any>();
    reuniones.forEach(reu => {
    let reuTemp = {
      titulo: reu.titulo,
   fecha: reu.fecha,
   horaInicio: reu.horaInicio,
   horaFin: reu.horaFin,
   estado: reu.estado,
   oficina: reu.oficina,
 
    }
    reunionesProcess.push(reuTemp);
    });
    return reunionesProcess;
  } 
  
  
}
