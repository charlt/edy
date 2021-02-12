import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';
import { CicloService } from '../services/ciclo.service';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  public ciclos;
  public title: string;
  private jwt: string;
  public search;
  tipoAdmin;

  constructor(
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService,
    private _translate: TranslateService,
    private _cicloService: CicloService

  ) {
    this.title = "Consulta de ciclos";
    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if (identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;;
    this.consulta();

  }

  consulta() {
    this._catalogoService.consultaCiclo().subscribe(
      response => {
        if (response && response['status']) {
          this.ciclos = response['ciclo'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  eliminar(id, index) {
    alertify.confirm("Eliminar", this._translate.instant('MsgEraseSyllabus'),
      function () {
        this._cicloService.elimina(id).subscribe(
          response => {
            if (response && response['status']) {
              this.ciclos.splice(index, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.success(response['msg']);
            }
          }, error => {
            console.log(<any>error)
          });
      }.bind(this),
      function () {
        alertify.error('Cancel');
      });
  }

  cerrarCiclo(ciclo_id) {
    alertify.confirm('', '¿Deseas cerrar este ciclo?', function () {
      this._cicloService.cierraC(ciclo_id).subscribe(
        response => {
          console.log(response);
          if (response && response['status']) {
            alertify.success(response['msg']);
            this.consulta();
          }
          else {
            alertify.alert('Error en el cierre del ciclo', response['msg']);
          }
        }, error => {
          console.log(<any>error)
        });
    }.bind(this),
      function () {
        alertify.error('Cancelado');
      }).set('labels', { ok: 'Sí', cancel: 'No' });
  }

}
