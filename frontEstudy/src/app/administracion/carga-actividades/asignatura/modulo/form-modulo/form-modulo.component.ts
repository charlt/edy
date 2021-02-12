import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModuloService } from 'src/app/administracion/carga-actividades/services/modulo.service';

declare var alertify:any;

@Component({
  selector: 'form-modulo',
  templateUrl: './form-modulo.component.html',
  styleUrls: ['./form-modulo.component.scss']
})
export class FormModuloComponent implements OnInit {

  
  moduloForm: FormGroup;
  @Input() idAsignatura;
  @Input() indexModulo: number;
  @Input() modulo;
  @Input() porcentaje;
  @Input() tipoConsulta;

  idModulo;
  @Output() sucessEvent = new EventEmitter<any>();
  tipoAdmin;
  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _moduloService:ModuloService
    ) {  }

  get f() { return this.moduloForm.controls; }

  ngOnInit() {

    console.log(this.modulo);
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    let numeroModulo;
    let nombre;
    let numero;
    let porcentaje

    numeroModulo = this.indexModulo;
    if(this.modulo){

       this.idModulo=this.modulo.modulo_id;
       nombre=this.modulo.modulo_nombre;
       numero=this.modulo.modulo_numero;
       porcentaje = this.modulo.porcentaje;
    }else{
      this.idModulo=null;
       nombre="";
       numero=numeroModulo;
       porcentaje = 0;
       
    }

    this.moduloForm = this.formBuilder.group({
       nombreModulo: [nombre, Validators.required],
       numeroModulo: [{"value":numero,disabled:true}],
       promedio_modulo: [true],
       porcentaje: [porcentaje]
     });

  }

  enviarInfoModulo(){
    // stop here if form is invalid
    if (this.moduloForm.invalid) {
      Object.keys(this.moduloForm.controls).forEach( controlKey => {
        this.moduloForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    this._moduloService.modificaModulo(this.moduloForm, this.idModulo , this.idAsignatura, this.tipoConsulta ).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
            this.sucessEvent.emit(
              {
                'status': response['status'], "idAsignatura": this.idAsignatura});
          }else{
            alertify.error(response['msg'])
          }

      },error =>{
        console.log(<any>error)
      });
     
  
  }

}
