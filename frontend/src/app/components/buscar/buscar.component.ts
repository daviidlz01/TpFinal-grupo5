import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Oficina } from 'src/app/models/oficina';
import { Reunion } from 'src/app/models/reunion';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { OficinaService } from 'src/app/service/oficina.service';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

opcion=""
fecha!:string
  oficina:Oficina
  oficinas: Array<Oficina> = [];
  participantes: Array<Empleado>=[];
  participante: Empleado;
  reunion: Reunion
  reuniones: Array<Reunion>


  constructor(private reunionesService : ReunionService,private empleadoService : EmpleadoService, private ofcinasService:OficinaService,private router : Router) {
    this.oficina = new Oficina();
    this.oficinas = new Array<Oficina>();
    this.participantes= new Array<Empleado>();
    this.participante= new Empleado();
    this.reunion= new Reunion();
    this.reuniones = new Array<Reunion>()


   }

  ngOnInit(): void {
    this.cargarOficinas()
    this.agregarParticipantes()
  }

  buscarfecha(){
this.reunionesService.buscarFecha(this.fecha).subscribe(
  (data:any)=>{
    console.log(data);
    console.log(this.fecha);
    
  }
)
  }
  buscarOficina(){
    this.reunionesService.buscarOficina(this.oficina._id).subscribe(
      (data:any)=>{
        console.log(data);
        this.reuniones = data

      }
    )

  }
  buscarEmpleado(){
    this.reunionesService.buscarEmpleado(this.participante._id).subscribe(
      (data:any)=>{
        console.log(data);
          Object.assign(this.reuniones,data)
      }
    )
    
  }
  actualizar(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url])
  }
  cargarOficinas(){
    this.ofcinasService.getOficinas().subscribe(
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
  agregarParticipantes(){
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
      }
    )
   }
}
