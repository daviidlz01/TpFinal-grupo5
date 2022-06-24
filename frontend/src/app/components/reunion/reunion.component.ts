import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ReunionService } from 'src/app/services/reunion.service';
import { Router } from '@angular/router';
import { Oficina } from 'src/app/models/oficina';
import { Recurso } from 'src/app/models/recurso';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit {

  constructor(private reunionService: ReunionService, private empleadoService:EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

}
