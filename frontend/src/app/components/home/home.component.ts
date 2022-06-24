import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/models/notificaciones';
import { NotificacionesService } from 'src/app/service/notificaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idEmpeado!:string | null;
  user!:string|null;
  notificacion!:Notificacion;

  notificaciones!:Array<Notificacion>


  constructor(private notificacionService : NotificacionesService) {
    this.notificaciones = new Array<Notificacion>()
    
   }

  ngOnInit(): void {
    this.prueba();
  }

  prueba(){
    this.idEmpeado = sessionStorage.getItem('userid');
    this.user = sessionStorage.getItem('user');

    console.log(this.idEmpeado);
    console.log(this.user);
    
    
    this.notificacionService.getNotificaciones(this.user).subscribe(
      (data:any)=>{
        console.log(data);
         this.agregarNotificaciones(data)
        console.log(this.notificaciones)
        
      }
    )
    
  }


  agregarNotificaciones(notificaciones:Array<any>){
    
    for (let i=0;i<=notificaciones.length;i++){
          this.notificacion = new Notificacion()
    
          this.notificacion.mensaje = notificaciones[i].mensaje
          this.notificaciones.push(this.notificacion)
    
        } 
  }
}
