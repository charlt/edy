import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.scss']
})
export class CalificacionesComponent implements OnInit {

  title: string;

  constructor(private _usuarioService: UsuarioService) {
    this.title = 'Alumnos en grupo';
    let id = localStorage.getItem('idGrupo');
    this._usuarioService.pushBreadcum('Asignaturas en grupo', "/admin/grupo/consultaAsignaturas/" + id, 2);
    this._usuarioService.pushBreadcum(this.title,"",3);
  }

  ngOnInit() {
  }

}
