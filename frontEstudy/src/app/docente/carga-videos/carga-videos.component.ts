import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargaVideosService } from './carga-videos.service';

declare var alertify: any;

@Component({
  selector: 'app-carga-videos',
  templateUrl: './carga-videos.component.html',
  styleUrls: ['./carga-videos.component.scss']
})
export class CargaVideosComponent implements OnInit {

  @Input() datos;
  videoconferencia: any;
  videosForm: FormGroup;
  reemplazarVideo: boolean = false;
  urlDropbox: any;
  cargando: boolean = false;
  index: any;

  constructor(
    private _cargaVideosService: CargaVideosService
  ) { }

  ngOnInit() {            
    if (this.datos) {
      this.videoconferencia = this.datos.videoconferencia;      
      this.index = this.datos.index;
      if (this.videoconferencia.url_descarga != null && this.videoconferencia.url_descarga != '') {
        this.urlDropbox = this.videoconferencia.url_descarga;
      }else {
        this.setForm();
      }
    }
  }

  setForm() {
    this.urlDropbox = null;
    let idAsignaturaGrupo = sessionStorage.getItem('idAsignaturaGrupo');
    this.videosForm = new FormGroup({
      // nombre_archivo: new FormControl(this.videoconferencia.nombre, Validators.required),
      fecha: new FormControl('', Validators.required),
      asignatura_grupo: new FormControl(idAsignaturaGrupo),
      id_videoconferencia: new FormControl(this.videoconferencia.videoconferencia_id),
      archivo: new FormControl('', Validators.required)
    });  
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.videosForm.patchValue({
        archivo: file
      });
    }
  }

  enviaArchivo() {
    var self = this;
    this.reemplazarVideo = false;
    this.cargando = true;
    let form = this.videosForm.value;
    this._cargaVideosService.guardaDropbox(form, this.reemplazarVideo).subscribe(response => {
      if (response && response['status'] == 2) {
        alertify.confirm('Reemplazar video', response['msg'], function(){
          self.reemplazarVideo = true;
          this._cargaVideosService.guardaDropbox(form, self.reemplazarVideo).subscribe(
            response =>{
              if(response && response['status']){
                self.urlDropbox = response['url'];
                self.cargando = false;
                self._cargaVideosService.nuevaUrl.emit(
                  {
                    index: self.index,
                    id_videoconferencia: self.videoconferencia.videoconferencia_id,
                    url_descarga: self.urlDropbox
                  }
                );
                alertify.success(response['msg']).dismissOthers();
              }
            },error =>{
              console.log(<any>error)
          });
        }.bind(this),
          function(){            
            self.cargando = false;
            alertify.error('Cancelado');
        }).set('labels', {ok:'Sí', cancel:'No'});  
      }else if (response && response['status'] == 1) {
        this.urlDropbox = response['url'];
        this.cargando = false;
        self._cargaVideosService.nuevaUrl.emit(
          {
            index: self.index,
            id_videoconferencia: self.videoconferencia.videoconferencia_id,
            url_descarga: self.urlDropbox
          }
        );
        alertify.success(response['msg']).dismissOthers();
      }else if (response['status'] == 0){
        this.cargando = false;
        alertify.error('Se ha producido un error.').dismissOthers();
      }
    }, error => {
      console.log(<any>error);
    })
    
  }

}
