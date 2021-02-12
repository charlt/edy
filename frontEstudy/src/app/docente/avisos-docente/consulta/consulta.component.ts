import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AvisosDocenteService } from '../services/avisos-docente.service';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from '../../grupo/services/grupo.service';

declare var alertify

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title;
  jwt;
  aviso;
  idAsignaturaGrupo;
  id_docente;
  identity;
  asignaturaNombre;
  identificador;

  constructor(
    private _usuarioService: UsuarioService,
    private _avisosDocenteService: AvisosDocenteService,
    private route: ActivatedRoute,
    private _grupoService: GrupoService 

  ) {
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');

    this.title = 'Consulta';
    this._usuarioService.pushBreadcum(this.title,"",2); 
   }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.id_docente = this.identity.persona_id;
    let _id_asignatura_grupo = this._grupoService.getSelectedAsignaturaGrupo();
    this.idAsignaturaGrupo = _id_asignatura_grupo.asignatura_grupo_id
    this.asignaturaNombre = _id_asignatura_grupo.asignatura

    this._avisosDocenteService.consulta(this.jwt, this.idAsignaturaGrupo, this.id_docente).subscribe(
      response =>{
          if(response && response['status']){
              this.aviso = response['avisos'];
              
          }
      },error =>{
        console.log(<any>error)
      });
  }

  eliminar(idAviso, index){
    this._avisosDocenteService.eliminaAviso(this.jwt, idAviso).subscribe(
      response =>{
          if(response && response['status']){
            this.aviso.splice(index,1);
            alertify.success(response['msg']);
          }
      },error =>{
        console.log(<any>error)
      });
  }

}
