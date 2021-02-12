import { Component, OnInit } from '@angular/core';
import { RetroalimentacionService } from 'src/app/docente/retroalimentacion/services/retroalimentacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriaService } from 'src/app/services/materia.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandeja-retroalimentaciones',
  templateUrl: './bandeja-retroalimentaciones.component.html',
  styleUrls: ['./bandeja-retroalimentaciones.component.scss']
})
export class BandejaRetroalimentacionesComponent implements OnInit {
  ident;
  title;
  id_materia;
  retroalimentaciones;
  id_asignatura_grupo;
  jwt;
  cargandoRedireccion = false;
  constructor(
    private _usuarioService: UsuarioService,
    private _retroalimentacionService: RetroalimentacionService,
    private _materiaService: MateriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.title = 'Consulta retroalimentaciones';
    this._usuarioService.pushBreadcum(this.title, '', 1);
  }

  ngOnInit() {
    this.id_materia = this.route.snapshot.params['id'];
    this.consultaRetros(0);
  }

  nuevoLink(actividad_id, materia_id) {
    this.cargandoRedireccion = true;
    this._materiaService.seleccionaMateria(materia_id, this.jwt).then(
      (data: any) => {
        localStorage.setItem('identModal', '1');
        this.router.navigate(['materia/actividad/' + actividad_id]);
      }
    );

  }

  consultaRetros(tipo) {
    this.ident = tipo;
    this._retroalimentacionService.consultaRetrosAlumno(tipo, this.id_materia, this.id_asignatura_grupo).subscribe(
      response => {
        if (response && response['status']) {
          this.retroalimentaciones = response['mensajes'];
          this.retroalimentaciones.forEach(retros => {
            let fecha = new Date(retros.ultimo_mensaje * 1000);
            retros.ultimo_mensaje = fecha;
          });
        } else {
          this.retroalimentaciones = null;
        }
      });
  }

}
