import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from './services/docente.service';

@Component({
  selector: 'app-expediente-docente',
  templateUrl: './expediente-docente.component.html',
  styleUrls: ['./expediente-docente.component.scss']
})
export class ExpedienteDocenteComponent implements OnInit {

  jwt: string;
  idRol: number;
  idDocente: number;

  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _docenteService: DocenteService
  ) {     
    this.idRol = this._usuarioService.getRol().rol_id;
    if (this.idRol != 1) {
      this.idDocente = this._usuarioService.getIdentity().persona_id;  
    }else{
      this.idDocente = parseInt(this.route.snapshot.paramMap.get('id'));
    }
    this.idRol = 3;
  }

  ngOnInit() {
  }
  
}
