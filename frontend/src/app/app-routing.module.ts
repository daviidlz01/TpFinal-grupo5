import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReunionComponent } from './components/reunion/reunion.component';
import { Empleado } from './models/empleado';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'empC',component:CrearEmpleadoComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'reunion', component: ReunionComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
