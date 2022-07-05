import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

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
import { TokenInterceptorService } from './services/token-interceptor.service';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,QRCodeModule

  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
