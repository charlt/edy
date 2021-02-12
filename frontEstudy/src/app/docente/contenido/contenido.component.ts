import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupo/services/grupo.service';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  asignaturaGrupo; 
  nombreAsignatura;

  constructor(
    private _grupoService: GrupoService,
  ) { }

  ngOnInit() {
    this.asignaturaGrupo = this._grupoService.getSelectedAsignaturaGrupo();
    console.log('asignatura del docente')
    this.nombreAsignatura = this.asignaturaGrupo.asignatura;


  }

}
