import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AvisosAdminService } from '../avisos-admin.service';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title;
  identity;
  id_persona;
  avisos;
  tipoAdmin;
  tipo = 1;

  constructor(
    private _usuarioService:  UsuarioService,
    private _avisosAdminService: AvisosAdminService,
  ){
    this.title= "Consulta de aviso";
    this._usuarioService.pushBreadcum(this.title,"",2);
   }

  ngOnInit() {
    this.identity = this._usuarioService.getIdentity();
    this.tipoAdmin = this.identity.administrador.edicion;
    this.id_persona = this.identity.persona_id;
    this.consultaAvisos(this.tipo);
  }

  consultaAvisos(tipo){
    this.tipo = tipo;
    this._avisosAdminService.consulta(tipo).subscribe(
      response =>{
          if(response && response['status']){
            this.avisos = response['avisos'];
            this.avisos.forEach(_aviso => {
              if (_aviso.fecha_inicio){_aviso.fecha_inicio = new Date((_aviso.fecha_inicio)*1000);}
              if(_aviso.fecha_fin)_aviso.fecha_fin = new Date((_aviso.fecha_fin)*1000)
            });
          }else{
            this.avisos = null;
          }
      },error =>{
        console.log(<any>error)
      });
  }


  eliminar(idAviso, index){
    this._avisosAdminService.eliminaAviso(idAviso).subscribe(
      response =>{
          if(response && response['status']){
            this.avisos.splice(index,1);
            alertify.success(response['msg']);
          }
      },error =>{
        console.log(<any>error)
      });
  }
}
