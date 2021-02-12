import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from '../../alumno/services/alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.component.html',
  styleUrls: ['./accesos.component.scss']
})
export class AccesosComponent implements OnInit {
  title;
  id_persona;
  accesos;
  constructor(
    private _usuarioService: UsuarioService,
    private _alumnosService: AlumnoService,
    private route: ActivatedRoute
  ){
    this.title= "Consulta de accesos";
    this._usuarioService.pushBreadcum('Docente','/admin/docente',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit(){
    this.id_persona = this.route.snapshot.params['id'];
  }
}