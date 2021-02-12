import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BuscadorPersonaService } from './buscador-persona.service';
import { Observable } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

declare var alertify: any;

@Component({
  selector: 'app-buscador-persona',
  templateUrl: './buscador-persona.component.html',
  styleUrls: ['./buscador-persona.component.scss']
})
export class BuscadorPersonaComponent implements OnInit {

  jwt: string;
  public tipoForm;
  public contenido;
  tipo;
  quitar;
  _quitar;
  public persona;
  personaNombre;
  personaCurp;  

  searchChangeObserver;

  @Input() idRol;
  @Output() consultaExitosa = new EventEmitter<any>();  

  constructor(
    private _usuarioService: UsuarioService,
    private _buscadorPersonaService: BuscadorPersonaService
  ) { }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.tipoForm = 1;
  }  

  consultaPersona(){
    if (!this.searchChangeObserver) {
      Observable.create(observer => {
        this.searchChangeObserver = observer;
      }).pipe(debounceTime(500)).subscribe(respuesta => { 
        this._buscadorPersonaService.busqueda(this.contenido,this.tipoForm,this.idRol).subscribe(
          response =>{
            console.log(response);
            
            if(response && response['status']){
              if(this.idRol== 4){
                this.persona = response['aspirante'];
              }else{
                this.persona = response['usuario'];
              }
              
              this.quitar = 1;
              this._quitar = 0;
            }else{
              alertify.error(response['msg'])
              this.quitar = 0
            }
          },error =>{
            console.log(<any>error)
        });
      });
    }
    this.searchChangeObserver.next(this.tipoForm);
  }


  muestraPersona(tipo, i){    
    this._quitar = 1;
    if (tipo == 1){
          this.consultaExitosa.emit(
      {
        'status': 1, 'persona': this.persona[i]});
    }
    if(tipo == 2){
        this.consultaExitosa.emit(
        {
          'status': 1, 'persona':this.persona[i]});
    }
  }

}
