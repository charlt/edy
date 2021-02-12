import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';
import { CarreraService } from '../services/carrera.service';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string;
  jwt: string;
  carreras;
  campus;
  carreraCampus;
  tipoAdmin;

  constructor(
    private translate: TranslateService,
    private _carreraService: CarreraService,
    private _usuarioService: UsuarioService,
    private _catalogosService: CatalogoService,
  ) {
    this.title = 'Consulta de carreras y campus';
    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if (identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;
    this._catalogosService.consultaCarrera(this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          this.carreras = response['carreras'];
        }
      }, error => {
        console.log(<any>error)
      });

    this._carreraService.consultaCarreraCampus(this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          this.carreraCampus = response['inter'];
        }
      }, error => {
        console.log(<any>error)
      });
    this._catalogosService.consultaCampus(this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          this.campus = response['campus'];
        }

      }, error => {
        console.log(<any>error)
      });
  }

  eliminarCampus(id_campus, index) {
    console.log(id_campus)
    alertify.confirm(this.translate.instant('MsgEraseCampus'),
      function () {
        this._carreraService.eliminaCampus(id_campus, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.campus.splice(index, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.error(response['msg']);
            }

          }, error => {
            console.log(<any>error)
          });
      }.bind(this));
  }
  eliminarCarrera(id_carrera, index) {
    alertify.confirm(this.translate.instant('MsgEraseCareer'),
      function () {
        this._carreraService.eliminaCarrera(id_carrera, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.carreras.splice(index, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.error(response['msg']);
            }

          }, error => {
            console.log(<any>error)
          });
      }.bind(this));
  }

  desvincularCampusCarrera(id_carrera, id_campus, index) {
    alertify.confirm(this.translate.instant('MsgUnLinkCareerCampus'),
      function () {
        this._carreraService.desvinculaCarreraCampus(id_carrera, id_campus, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.carreraCampus.splice(index, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.error(response['msg']);
            }

          }, error => {
            console.log(<any>error)
          });
      }.bind(this));
  }
}