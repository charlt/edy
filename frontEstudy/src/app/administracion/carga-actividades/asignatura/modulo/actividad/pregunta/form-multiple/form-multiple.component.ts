import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MultipleService } from 'src/app/administracion/carga-actividades/services/multiple.service';

@Component({
  selector: 'form-multiple',
  templateUrl: './form-multiple.component.html',
  styleUrls: ['./form-multiple.component.scss']
})
export class FormMultipleComponent implements OnInit {

  @Input() idPregunta;
  @Input() idActividad;
  reactivos;
  tipo;
  jwt;
  numRespuestas: number;
  bandera: boolean = false;

  @Output() successEvent = new EventEmitter<any>();

  constructor(
    private _multipleService: MultipleService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this._multipleService.consultaMultiple(this.idPregunta,this.jwt,null).subscribe(
      response =>{
        if(response && response['status']){
          this.reactivos = response['reactivos'];
        }
        this.tipo = response['tipo'];
        this._multipleService.consultaMateria(this.jwt, this.idPregunta).subscribe(response =>{
          if(response && response['status']){
            this.numRespuestas = response['numero_respuestas'];
          }
          this.bandera = true;
        },error =>{
          console.log(<any>error)
        });
    },error =>{
      console.log(<any>error)
    });
  }

  enviaDatos(evt) {    
    this.successEvent.emit(evt);
  }


}
