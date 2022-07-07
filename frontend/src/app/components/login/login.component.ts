import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userform: Usuario = new Usuario(); //usuario mapeado al formulario
  returnUrl!: string;
  msglogin!: string; // mensaje que indica si no paso el loguin
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  login() {
    this.loginService.login(this.userform.username, this.userform.password)
      .subscribe(
        (result) => {
          var user = result;
          if (user.status == 1) {
            //guardamos el user en cookies en el cliente
            console.log(user.admin)
            sessionStorage.setItem("user", user.empleado);
            sessionStorage.setItem("userid", user._id);
            sessionStorage.setItem("perfil", user.perfil);
            sessionStorage.setItem("admin", user.admin)
            console.log(sessionStorage.getItem("admin"))
            //redirigimos a home o a pagina que llamo
            this.router.navigateByUrl(this.returnUrl );
            console.log(user._id);
            
          } else {
            //usuario no encontrado muestro mensaje en la vista
            this.msglogin = "Credenciales incorrectas..";
          }
        }, error => {
          alert("Error de conexion");
          console.log("error en conexion");
          console.log(error);
        });
  }
}