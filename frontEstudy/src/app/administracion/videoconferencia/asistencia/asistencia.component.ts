import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoConferenciaService } from 'src/app/docente/video-conferencia/services/video-conferencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {
  title;
  personas;
  id_videoconferencia;

  constructor(
    private _usuarioService: UsuarioService,
    private _videoconferenciaService: VideoConferenciaService,
    private router : Router,
    private route: ActivatedRoute

  ) { 
    this.id_videoconferencia = this.route.snapshot.paramMap.get('id');
    this.title= "Consulta de asistencia";
    this._usuarioService.pushBreadcum('Videoconferencias','/admin/videoconferencia',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.consultaAsistencia();
  }

  consultaAsistencia(){
    this._videoconferenciaService.consultaAsist(this.id_videoconferencia).subscribe(
      response =>{
          if(response && response['status']){
            this.personas= response['personas'];
            console.log(this.personas);
          }
      },error =>{
        console.log(<any>error)
      });
  }

}
