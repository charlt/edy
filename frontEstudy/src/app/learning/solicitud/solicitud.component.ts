import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AspiranteService } from 'src/app/administracion/aspirante/services/aspirante.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  idPersona: number;
  jwt: string;
  idAspirante: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _aspiranteService: AspiranteService,
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idPersona = this._usuarioService.getIdentity().persona_id;  
    this.consultaAspirante();    
  }

  consultaAspirante(){    
    this._aspiranteService.registroAspirante(this.jwt, this.idPersona).subscribe(
      response =>{
        if(response && response['status']){  
          this.idAspirante = response['idAspirante'];            
        }
      },error =>{
        console.log(<any>error)
    });
  }

}
