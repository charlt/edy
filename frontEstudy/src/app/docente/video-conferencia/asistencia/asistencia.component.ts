import { Component, OnInit } from '@angular/core';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {

  jwt: string;
  idVideoconferencia: number;
  Personas: any;
  title: string;
  videoconferencia: string;

  constructor(
    private _conferenciaService: VideoConferenciaService,
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { 
    this.title = 'Asistencia a videoconferencia';
    this._usuarioService.pushBreadcum(this.title,"",2);       
  }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idVideoconferencia = parseInt(this.route.snapshot.paramMap.get('id'));
    this._conferenciaService.consultaConferencia(this.jwt, this.idVideoconferencia).subscribe(response => {  
      if (response && response['status']) {  
        this.videoconferencia = response['videoconferencia']['nombre'];  
        this._conferenciaService.consultaAsistencia(this.jwt, this.idVideoconferencia).subscribe(response => {  
          if (response && response['status']) {    
            this.Personas = response['personas'];
          }      
        }, error => {
          console.log(<any>error);
        });
      }      
    }, error => {
      console.log(<any>error);
    });
  }

}
