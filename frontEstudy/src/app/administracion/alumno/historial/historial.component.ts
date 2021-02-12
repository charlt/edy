import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HistorialService } from './historial.service';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';

declare var alertify: any;

@Component({
  selector: 'app-historial-alumno',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  title: string;
  idRol;
  idAlumno;
  Historial: Array<any>;
  url: string = GLOBAL.url;
  jwt; //sólo para reporte

  constructor(
    private _usuarioService: UsuarioService,
    private _historialService: HistorialService,
    private route: ActivatedRoute
  ) {
    this.title= "Historial";
    this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
    this._usuarioService.pushBreadcum(this.title,"",2);    
  }

  ngOnInit() {
    this.idRol = this._usuarioService.getRol().rol_id;
    if (this.idRol == 1 || this.idRol == 5) {
      this.idAlumno = this.route.snapshot.paramMap.get('id');
    }else if (this.idRol == 2) {
      this.idAlumno = this._usuarioService.getIdentity().persona_id;
    }
    this.jwt = this._usuarioService.getJWT();
    
    this._historialService.getHistorial(this.idAlumno).subscribe(response => {
      if (response && response['status']) {
        this.Historial = response['historial'];
      }else {
        this.Historial = null;
      }
    }, error => {
      console.log(<any>error);
    });
  }

  imprimeHistorial(){
    let params = '?alumno_id='+this.idAlumno;
    params= params+'&jwt='+this.jwt
    window.open(this.url+'reportes/grupos/listaMaterias.php'+params)
  }

  eliminar(index, id_historial) {
    alertify.confirm('¿Deseas eliminar el historial?', function(){
      this._historialService.eliminaHistorial(id_historial).subscribe(response => {
        if (response && response['status']) {
          this.Historial.splice(index,1);
          alertify.success(response['msg']);
          if (this.Historial.length == 0) {
            this.Historial = null
          }
        }
      }, error => {
        console.log(<any>error);
      });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  editar() {

  }
  creaHistorial() {

  }

}
