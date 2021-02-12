import { Component, OnInit } from '@angular/core';
import { MateriasAlumnosService } from 'src/app/administracion/alumno/materias-alumnos/materias-alumnos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VideosVideoconferenciaService } from './services/videos-videoconferencia.service';

@Component({
  selector: 'app-videos-videoconferencia',
  templateUrl: './videos-videoconferencia.component.html',
  styleUrls: ['./videos-videoconferencia.component.scss']
})
export class VideosVideoconferenciaComponent implements OnInit {
  title;
  materias;
  idAlumno;
  index = "";
  videoconferencias;

  constructor(
    private _usuarioService: UsuarioService,
    private _videoVideoconferenciaService: VideosVideoconferenciaService,
    private _materiasAlumnosService: MateriasAlumnosService
  ) {
    this.title = 'Consulta videos videoconferencia';
    this._usuarioService.pushBreadcum(this.title,'',1);
   }

  ngOnInit() {
    this.idAlumno = this._usuarioService.getIdentity()['alumno'].alumno_id;
    this.consultaMaterias();
  }

  consulta(){
    this.videoconferencias = [];
    let asignatura_grupo_id;
    if(this.index){
      asignatura_grupo_id = this.materias[this.index].asignatura_grupo_id;
    }else{
      asignatura_grupo_id = null;
    }
    this._videoVideoconferenciaService.consultaVideoconferencias(asignatura_grupo_id).subscribe(
      response => {
        if (response && response['status']) {
          this.videoconferencias = response['videoconferencias'];
          this.videoconferencias.forEach(_videoconferencia => {
            if(_videoconferencia.fecha_inicio) _videoconferencia.fecha_inicio = new Date((_videoconferencia.fecha_inicio)*1000);
            if(_videoconferencia.fecha_fin) _videoconferencia.fecha_fin = new Date((_videoconferencia.fecha_fin)*1000);
          });
          console.log(this.videoconferencias)
        }else{
          this.videoconferencias = null;
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaMaterias(){
    if(this.materias) this.materias = null
    this._materiasAlumnosService.consultaMaterias(this.idAlumno, 1).subscribe(
      response =>{
          if(response && response['status']){
              this.materias = response['materias'];
              this.consulta();
          } 
      },error =>{
        console.log(<any>error)
      });
  }

}
