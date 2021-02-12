import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VideoConferenciaService } from 'src/app/docente/video-conferencia/services/video-conferencia.service';
import { GLOBAL } from '../../../services/global';


declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string;
  tipo;
  videoconferencias;
  search;
  conferenciaSelected;
  joinurl;
  passwordZoom;
  urlLeave;
  bloqueoBoton = false;
  cargaConf;
  previousPage = 1;
  totalVid;

  itemsPerPage: number = 50;
  totalItems: any;
  page: number = 1;
  // previousPage: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _conferenciaService: VideoConferenciaService
  ) {
    this.title = "Consulta de videoconferencias";
    this._usuarioService.pushBreadcum('Videoconferencias', '/admin/videoconferencia', 1);
    this._usuarioService.pushBreadcum(this.title, "", 2);
    this.urlLeave = GLOBAL.urlAssets + '/estudy/';
  }

  ngOnInit() {
    this.consultaVideoconf(1);
  }

  consultaVideoconf(tipo) {
    this.videoconferencias = [];
    if (tipo != this.tipo) { this.totalItems = 0; this.page = 1 }
    this.tipo = tipo;
    this.cargaConf = true;
    let max = 50;
    let min = ((this.page * 50) - 50);
    this._conferenciaService.consultaV(tipo, max, min).subscribe(
      response => {
        if (response && response['status']) {
          this.videoconferencias = response['Videoconferencias'];
          this.totalItems = response['total'][0]['total'];
          this.videoconferencias.forEach(function (videoconferencia) {
            videoconferencia.fecha_inicio = new Date(videoconferencia.fecha_inicio * 1000);
            videoconferencia.fecha_fin = new Date(videoconferencia.fecha_fin * 1000);
          })
          this.cargaConf = false;
        } else {
          this.videoconferencias = [];
          this.cargaConf = false;
          this.totalItems = 0;
        }
      }, error => {
        console.log(<any>error)
      });
  }

  busquedaVideocnf(busqueda) {
    if(busqueda){
      this.videoconferencias = [];
      this.cargaConf = true;
      let max = 50;
      let min = ((this.page * 50) - 50);
      this._conferenciaService.busquedaVid(max, min, busqueda).subscribe(
        response => {
          if (response && response['status']) {
            this.videoconferencias = response['Videoconferencias'];
            this.totalItems = response['total'][0]['total'];
            this.videoconferencias.forEach(function (videoconferencia) {
              videoconferencia.fecha_inicio = new Date(videoconferencia.fecha_inicio * 1000);
              videoconferencia.fecha_fin = new Date(videoconferencia.fecha_fin * 1000);
            })
            this.cargaConf = false;
          } else {
            this.videoconferencias = [];
            this.cargaConf = false;
            this.totalItems = 0;
          }
        }, error => {
          console.log(<any>error)
        });
    }else{
      this.consultaVideoconf(this.tipo);
    }
  }

  videoConferencia() {
    localStorage.setItem('docente', JSON.stringify(this.conferenciaSelected));
    localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
    localStorage.setItem('passwordZoom', JSON.stringify(this.passwordZoom));

    var newTab = window.open('', '_blank');
    newTab.location.href = 'assets/zoom/';
  }

  consultaVideoConferencia(conferencia) {
    this.bloqueoBoton = true;
    this.conferenciaSelected = conferencia;
    if (this.conferenciaSelected['url_meet'] == '' || this.conferenciaSelected['url_meet'] == null
    || this.conferenciaSelected['url_meet'] == undefined) {
        this._conferenciaService.consultaMeet(this.conferenciaSelected.videoconferencia_id).subscribe(
          response => {
            this.joinurl = response['join_url'];
            if (response['password']) {
              this.passwordZoom = response['password'];
              this.bloqueoBoton = false;
            } else {
              this.passwordZoom = '';
              this.bloqueoBoton = false;
            }
            this.videoConferencia();
          }, error => {
            this.bloqueoBoton = false;
            alertify.error('No se puede acceder a la videoconferencia');
            console.log(error)
          }
        )
    }else{
      var newTab = window.open('', '_blank');
      newTab.location.href = this.conferenciaSelected['url_meet'] ;
    }
  }
}
