import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RetroalimentacionService } from '../retroalimentacion/services/retroalimentacion.service';


declare var alertify;

@Component({
  selector: 'app-correccion',
  templateUrl: './correccion.component.html',
  styleUrls: ['./correccion.component.scss']
})
export class CorreccionComponent implements OnInit {

  title: string;
  jwt;
  idPersona;
  idRol;
  origen;
  texto;
  bloquea: boolean;
  @Input() idMateriaFechaActividad;
  @Input() tipo;
  fechaActividad;
  @Output() correccionSuccess = new EventEmitter<any>();
  @Output() invalidacionSuccess = new EventEmitter<any>();


  constructor(
    private _usuarioService: UsuarioService,
    private _retroService: RetroalimentacionService,

  ) { }

  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();

    let identity = this._usuarioService.getIdentity();
    let rol = this._usuarioService.getRol()
    this.idPersona = identity.persona_id;
    this.idRol= rol.rol_id;

  }

  enviar(texto) {
    this.bloquea = true;
    if(texto !=undefined ){
      if(texto != ''){
    this._retroService.correccionActividad(this.idMateriaFechaActividad,this.idPersona,this.texto,this.idRol,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.bloquea = false;
          this.texto="";
          alertify.success(response['msg']);
          this.correccionSuccess.emit({'estatus': 1})
        }else{
          this.bloquea = false;
          alertify.error('Error al enviar').dismissOthers(); 
        }
    },error =>{
      console.log(error)
    }
  );
  
}
  }
}

enviarIn(texto) {

  if(texto !=undefined ){
    if(texto != ''){

  this._retroService.invalidacionActividad(this.idMateriaFechaActividad,this.idPersona,this.texto,this.idRol,this.jwt).subscribe(
    response =>{
              
      if(response && response['status']){

        this.texto="";

        alertify.success(response['msg']);

        this.invalidacionSuccess.emit({'estatus': 1})

      }else{
        alertify.error('Error al enviar').dismissOthers(); 
      }
  },error =>{
    console.log(error)
  }
);

}
}
}

}
