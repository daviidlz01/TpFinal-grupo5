import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ReunionComponent } from './components/reunion/reunion.component';
import { Empleado } from './models/empleado';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'reunion', component: ReunionComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
  
  
  //pruebas
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
