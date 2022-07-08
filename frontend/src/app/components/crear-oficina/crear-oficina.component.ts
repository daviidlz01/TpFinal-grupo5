import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oficina } from 'src/app/models/oficina';
import { OficinaService } from 'src/app/service/oficina.service';

@Component({
  selector: 'app-crear-oficina',
  templateUrl: './crear-oficina.component.html',
  styleUrls: ['./crear-oficina.component.css']
})
export class CrearOficinaComponent implements OnInit {

  oficina:Oficina
  constructor(private router : Router, private oficinaService: OficinaService) {
    this.oficina = new Oficina()
   }

  ngOnInit(): void {
  }

crearOficina(){
  this.oficinaService.crearOficina(this.oficina).subscribe(
    (data:any)=>{

      console.log(data);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url])

    }
  )
}

}
