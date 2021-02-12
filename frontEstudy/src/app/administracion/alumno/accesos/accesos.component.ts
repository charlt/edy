import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from '../services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.component.html',
  styleUrls: ['./accesos.component.scss']
})
export class AccesosComponent implements OnInit {
  title;
  id_alumno;
  accesos;
  url;

  constructor(
    private _usuarioService: UsuarioService,
    private _alumnosService: AlumnoService,
    private route: ActivatedRoute
  ) {
    this.title = "Consulta de accesos";
    this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
    this._usuarioService.pushBreadcum(this.title, "", 2);
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.id_alumno = this.route.snapshot.params['id'];
  }

  generaReporte() {
    let params = '?id_persona=' + this.id_alumno;
    let urlReporte = this.url + 'reportes/alumnos/accesos.php' + params;
    window.open(urlReporte, '_blank');
  }
}