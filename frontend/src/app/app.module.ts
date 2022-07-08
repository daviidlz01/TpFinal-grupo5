import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

import { NgxPrintModule } from 'ngx-print'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './service/login.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ReunionComponent } from './components/reunion/reunion.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtrlReunionesComponent } from './components/ctrl-reuniones/ctrl-reuniones.component';
import { CtrlRecursosComponent } from './components/ctrl-recursos/ctrl-recursos.component';
import { CrearRecursoComponent } from './components/crear-recurso/crear-recurso.component';
import { CrearOficinaComponent } from './components/crear-oficina/crear-oficina.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    CrearEmpleadoComponent,
    ReunionComponent,
    FooterComponent,
    CtrlReunionesComponent,
    CtrlRecursosComponent,
    CrearRecursoComponent,
    CrearOficinaComponent,
    BuscarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,QRCodeModule, NgxPrintModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
