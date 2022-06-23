import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { Empleado } from './models/empleado';
const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  
  
  //pruebas
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
