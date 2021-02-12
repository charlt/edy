import { Component, Input, OnChanges } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadService } from '../services/actividad.service';
import  { TrActividad } from 'src/app/models/learning/trActividad'
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { MateriaService } from 'src/app/services/materia.service';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnChanges {

  @Input() actividad: TrActividad = new TrActividad();
  contenidoActividad;
  jwt;

  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {

    this.jwt = this._usuarioService.getJWT();    
    this.actividad.instruccion_html = this.htmlProperty(this.actividad.instruccion);

    this._actividadService.consultaContenidos( this.actividad.actividad_id,this.jwt).subscribe(
      response =>{
          if(response && response['status']){
              this.contenidoActividad = response['contenido'];
          }else{
            this.contenidoActividad = null;
          }
      },error =>{
        console.log(<any>error)
    });   
  }

  htmlProperty(html) : SafeHtml {
    
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
