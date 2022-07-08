import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recurso } from 'src/app/models/recurso';
import { RecursosService } from 'src/app/services/recursos.service';

@Component({
  selector: 'app-crear-recurso',
  templateUrl: './crear-recurso.component.html',
  styleUrls: ['./crear-recurso.component.css']
})
export class CrearRecursoComponent implements OnInit {
  recurso:Recurso

  constructor(private recursoService: RecursosService ,private router:Router) { 
    this.recurso = new Recurso()}

  
  ngOnInit(): void {
  }

  crearRecurso(){
    this.recursoService.crearRecursao(this.recurso).subscribe(
      (data:any)=>{
        console.log(this.recurso.nombre);
        console.log(this.recurso.tipoRecurso);

        console.log(data);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url])

      }
    )
  }
}
