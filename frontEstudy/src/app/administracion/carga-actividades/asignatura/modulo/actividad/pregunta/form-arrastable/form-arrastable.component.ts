import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { TrPreguntaOpcionMultiple } from 'src/app/models/learning/trPreguntaOpcionMultiple';
import { ArrastableService } from 'src/app/administracion/carga-actividades/services/arrastable.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

declare var alertify;

@Component({
  selector: 'form-arrastable',
  templateUrl: './form-arrastable.component.html',
  styleUrls: ['./form-arrastable.component.scss']
})
export class FormArrastableComponent implements OnInit {

  newPregunta:TrPreguntaOpcionMultiple = new TrPreguntaOpcionMultiple;
  preguntas: Array<TrPreguntaOpcionMultiple> = new Array<TrPreguntaOpcionMultiple>();

  @Input() idPregunta;
  @Output() successEvent = new EventEmitter<any>();
  identity : Usuario;
  tipoAdmin
  jwt;

  preguntaArrastrableForm: FormGroup;
  items: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _preguntaArrastrableService : ArrastableService,
    ) { }

    
  get f() { return this.preguntaArrastrableForm.controls; }
  get sf() { return this.preguntaArrastrableForm.controls.items}
  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    let identity = this._usuarioService.getIdentity();

    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;

    if(this.idPregunta !== undefined){
      
      this._preguntaArrastrableService.consultaRespuestas(this.idPregunta,this.jwt,null).subscribe(
        response =>{
          let react=response['reactivos'];
            if(response && response['status']=='1'){
              react.forEach(function (reactivo) {
                this.agregarRespuesta(reactivo.reactivo_desc);
              }.bind(this));
              this.eliminarRespuesta(react.reactivo_desc=='1');
            }
        },error =>{
          console.log(<any>error)
        });
    }
    this.preguntaArrastrableForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.crearRespuesta() ])
    });
  }

  agregarRespuesta(reactivo_desc = ''){
    this.items = this.preguntaArrastrableForm.get('items') as FormArray;
    this.items.push(this.crearRespuesta(reactivo_desc));
  }

  crearRespuesta(reactivo_desc = ''): FormGroup {
    return this.formBuilder.group({
      reactivo_desc: [reactivo_desc, Validators.required],
    });
  }

  eliminarRespuesta(index){
    this.items.removeAt(index);
  }

  enviarInformacionPregunta(){
  // console.log(this.preguntaMultipleForm.get('reactivo_desc'));
  if (this.preguntaArrastrableForm.invalid) {
    Object.keys(this.preguntaArrastrableForm.controls).forEach( controlKey => {
      this.preguntaArrastrableForm.controls[controlKey].markAsTouched();
    });
    return;
   }

   this._preguntaArrastrableService.modificaDragDrop(this.preguntaArrastrableForm,this.idPregunta,this.jwt).subscribe(
    response =>{
        if(response && response['status']){
          alertify.success(response['msg'])
          this.successEvent.emit({ status: response['status'] })
        }else{
          alertify.error(response['msg'])
        }
    },error =>{
      console.log(<any>error)
    });
  }
}
