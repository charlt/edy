import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-video-conferencia',
  templateUrl: './video-conferencia.component.html',
  styleUrls: ['./video-conferencia.component.scss']
})
export class VideoConferenciaComponent implements OnInit {

  title: string;

  constructor(
    private _usuarioService: UsuarioService,
  ) {

    this.title = 'Conferencia en vivo';
    this._usuarioService.pushBreadcum(this.title,"",2);        
    
    
   }

  ngOnInit() {
  }

}
