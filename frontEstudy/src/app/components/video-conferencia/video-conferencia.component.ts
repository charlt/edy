import { Component, OnInit } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriaService } from 'src/app/services/materia.service';
import { VideoConferenciaService } from 'src/app/docente/video-conferencia/services/video-conferencia.service';
import { GLOBAL } from 'src/app/services/global';

declare var $;

@Component({
  selector: 'app-video-conferencia',
  templateUrl: './video-conferencia.component.html',
  styleUrls: ['./video-conferencia.component.scss']
})
export class VideoConferenciaComponent implements OnInit {

  meetConfig: any;
  signature: any;
  materia: any;
  idMateria: number;
  jwt: string;
  docente: any;
  identity: any;
  datosDocente: any;
  idVideoconferencia: number;
  datosConferencia: any;
  url;

  constructor(
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService,
    private _conferenciaService: VideoConferenciaService
  ) {
    this.url = GLOBAL.urlAssets ;
   }

  ngOnInit() {
    // console.log(ZoomMtg.checkSystemRequirements())
    //ZoomMtg.setZoomJSLib('node_modules/@zoomus/websdk/dist/lib', '/av');
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.2/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.materia = this._materiaService.getSelectedMateria();
    this.idMateria = this.materia.materia_id;
    
   /* this._conferenciaService.videoconferenciaDisponible(this.jwt, this.idMateria).subscribe(response => {       
      if (response && response['status']) {
        // console.log(response);
        this.datosConferencia = response['videoconferencia']
        this.idVideoconferencia = this.datosConferencia['videoconferencia_id']
        this.docente = this.datosConferencia['docente'];
        this._conferenciaService.consulta(this.jwt, this.docente['persona_id']).subscribe(response => { 
          // console.log(response);
          if (response && response['status']) {
            this.datosDocente = response['usuario'];
            this.insertaAcceso();
          }      
        }, error => {
          console.log(<any>error);
        });
      }      
    }, error => {
      console.log(<any>error);
    });*/
  }

  insertaAcceso() {
    this._conferenciaService.insertaAcceso(this.jwt, this.idVideoconferencia, this.identity['persona_id']).subscribe(response => { 
      // console.log(response);
      if (response && response['status']) {
      }      
      this.setDatos();
    }, error => {
      console.log(<any>error);
    });
  }

  setDatos() {
    this.meetConfig = {
      apiKey: this.datosDocente['apikey'],
      apiSecret: this.datosDocente['apisecret'],
      meetingNumber: this.datosDocente['idmeeting'],
      userName: `${this.identity.primer_apellido} ${this.identity.segundo_apellido} ${this.identity.nombre}`,
      passWord: "",
      leaveUrl: this.url,
      role: 0
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: function(res){
        console.log(res);
      }
    });    
    this.iniciaZoom();
  }

  iniciaZoom() {
    ZoomMtg.init({
      leaveUrl: this.url,
      isSupportAV: true,
      success: (res) => {
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          signature: this.signature,
          apiKey: this.meetConfig.apiKey,
          userEmail: '',
          passWord: this.meetConfig.passWord,
          success: (res) => {
            console.log('join meeting success');
          },
          error: (res) => {
            console.log(res);
          }
        });
      },
      error: (res) => {
        console.log(res);
      }
    });
  }

}
