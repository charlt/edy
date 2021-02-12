import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GLOBAL } from 'src/app/services/global';
import { EncabezadoPersonaService } from './encabezado-persona.service';




@Component({
  selector: 'app-encabezado-persona',
  templateUrl: './encabezado-persona.component.html',
  styleUrls: ['./encabezado-persona.component.scss']
})
export class EncabezadoPersonaComponent implements OnChanges {
  jwt: string;
  alumnos;
  url;
  urlImagen;
  color;
  urlPerfil;
  persona;
  

  @Input() idPersona;
  @Input() idRol;
  rol = ['Administrador','Alumno','Docente','Aspirante'];

  // idAlumno = 2;

  constructor(
    private _usuarioService: UsuarioService,
    private _encabezadoService: EncabezadoPersonaService,
  ){}

  
  
  
  ngOnChanges() {
    this.jwt = this._usuarioService.getJWT();
    this.url = GLOBAL.urlAssets;
    this.consultas();
  }

  consultas(){    
    this._encabezadoService.consultaPersona(this.idPersona, this.idRol).subscribe(response => {
      if(response && response['status']){
        this.persona = response['persona'];
        this.urlPerfil = this.url+this.persona.url_perfil;
      }
    },error=>{
      console.log(error);
    })
  }

}
