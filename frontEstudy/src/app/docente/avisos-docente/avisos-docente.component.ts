import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { slideToTop } from 'src/app/router.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avisos-docente',
  templateUrl: './avisos-docente.component.html',
  styleUrls: ['./avisos-docente.component.scss'],
  animations: [slideToTop()]

})
export class AvisosDocenteComponent implements OnInit {
  title;
  idAsignaturaGrupo;

  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute
  ){
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');

    this.title = 'Avisos en la materia';
    this._usuarioService.pushBreadcum(this.title,"",2); 
   }

  ngOnInit() {
  }
}
