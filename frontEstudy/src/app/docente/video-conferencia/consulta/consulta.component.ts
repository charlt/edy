import { Component, OnInit } from '@angular/core';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FechaService } from 'src/app/services/fecha.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CargaVideosService } from '../../carga-videos/carga-videos.service';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  jwt: string;
  idPersona: number;
  Videoconferencias: any;
  idAsignaturaGrupo;
  seleccionada: any;

  constructor(
    private _conferenciaService: VideoConferenciaService,
    private _usuarioService: UsuarioService,
    private _fechaService: FechaService,
    private _modalService: NgbModal,
    private _cargaVideosService: CargaVideosService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idPersona = this._usuarioService.getIdentity().persona_id;
    this._cargaVideosService.nuevaUrl.subscribe(response => {
      if (this.Videoconferencias) {
        this.Videoconferencias[response['index']]['url_descarga'] = response['url_descarga'];
      }      
    });

    this._conferenciaService.salaCerrada.subscribe(response => {
      let videoconferencias = this.Videoconferencias.map(v => { return v.videoconferencia_id });
      let index = videoconferencias.indexOf(response.videoconferencia_id);
      this.Videoconferencias[index]['estatus_registro'] = 2;
      this.Videoconferencias[index]['activo'] = false;      
    });
    // console.log(localStorage.getItem('selectedAsignaturaGrupo'))
    this.idAsignaturaGrupo = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura_grupo_id;          
    this.consulta();
      
  }

  consulta(){
    this._conferenciaService.consultaVideoconferencias(this.jwt, this.idAsignaturaGrupo).subscribe(response => {      
      if (response && response['status']) {            
        this.Videoconferencias = response['videoconferencias'];
        // console.log(this.Videoconferencias);
        this.Videoconferencias.forEach(function(videoconferencia){
          let arregloFecha = this._fechaService.validaVigencia(videoconferencia.fecha_inicio,videoconferencia.fecha_fin,2)

          videoconferencia.fecha_inicio = new Date(videoconferencia.fecha_inicio * 1000);
          videoconferencia.fecha_fin = new Date(videoconferencia.fecha_fin * 1000);
          
        
          videoconferencia.activo = arregloFecha[0];
          videoconferencia.estatus = arregloFecha[1];
          if (videoconferencia.estatus_registro == 2) videoconferencia.activo = false;          

        }.bind(this))
      }      
    }, error => {
      console.log(<any>error);
    }); 
  }
  
  eliminar(id_videoconferencia,index){    
    alertify.confirm('', '¿Deseas eliminar la videoconferencia?', function(){
      this._conferenciaService.elimina(this.jwt,id_videoconferencia, this.idAsignaturaGrupo).subscribe(
        response => {      
        if (response && response['estatus']) { 
          // console.log(response);
          this.Videoconferencias.splice(index,1);
          alertify.success(response['msg']).dismissOthers();
          // console.log(this.Videoconferencias);          
        }      
      }, error => {
        console.log(<any>error);
      }); 
      }.bind(this),
      function(){
          alertify.error('Cancelado').dismissOthers();
      }).set('labels', {ok:'Sí', cancel:'No'});  
    
  }
  
  consultarConferencia(id_videoconferencia){
    this._conferenciaService.mostrarUsuarioConferencia.emit();
  }

  open(content, videoconferencia, i) {
    this.seleccionada = {videoconferencia: videoconferencia, index: i};  
    this._modalService.open(content);
  }
}
