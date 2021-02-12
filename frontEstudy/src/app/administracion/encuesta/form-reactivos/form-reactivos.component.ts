import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { EncuestaService } from '../services/encuesta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify: any;

@Component({
  selector: 'app-form-reactivos',
  templateUrl: './form-reactivos.component.html',
  styleUrls: ['./form-reactivos.component.scss']
})
export class FormReactivosComponent implements OnInit, OnChanges {

  title: string = "Carga de reactivos";
  reactivosForm: FormGroup;
  reactivos: FormArray;
  seleccionados: Array<any> = [];
  tipoInput = [ {id: 1, label: 'Texto'}, {id: 2, label: 'Número'}, {id: 3, label: 'Radio'}, 
    {id: 4, label: 'Checkbox'}, {id: 5, label: 'Lista seleccionable'} ];
  preguntas: any;
  bandera: boolean = false;
  indices = [];
  tipoAdmin;
  @Input() idEncuesta: number;
  @Input() arregloPreguntas: any;
  @Output() success = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private _encuestaService: EncuestaService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
  }

  ngOnChanges() {    
    this._encuestaService.consultaPreguntas(this.idEncuesta).subscribe(response => {                  
      if (response && response['status']) {
        this.preguntas = response['pregunta'];        
        this.setDatos();
      }else{
        this.success.emit({completo: true});
      }
    }, error => {
      console.log(<any>error);
    });
  }

  setDatos() {
    this.preguntas.forEach(pregunta => {
      let indice = this.arregloPreguntas.findIndex(p => p.pregunta == pregunta.pregunta && p.tipo_campo == pregunta.tipo_campo_id);
      this.indices.push(indice);
    });    
    this.reactivosForm = this.formBuilder.group({
      items: new FormArray( this.preguntas.map(pregunta => this.createPreguntaReactivos(pregunta)) )
    });
    this.setSeleccionado();
    this.bandera = true;
  }

  createPreguntaReactivos(datos): FormGroup {
    // let tipo = this.tipoInput.find(i => i.id == datos.tipo_campo_id);
    let reactivos = [0];
    
    if (datos.tipo_campo_id == '3') {
      reactivos.push(1);
    }

    let nombre_tipo_campo = datos.nombre_tipo_campo.charAt(0).toUpperCase() + datos.nombre_tipo_campo.slice(1);
    return this.formBuilder.group({
      campo_encuesta_id: [datos.campo_encuesta_id],
      pregunta: [datos.pregunta],
      descripcion: [datos.descripcion],
      nombre_tipo_campo: [nombre_tipo_campo],
      tipo_campo_id: [datos.tipo_campo_id],
      reactivos: new FormArray( reactivos.map(reactivo => this.createReactivo()) )
    });
  }

  createReactivo(): FormGroup {
    return this.formBuilder.group({
      reactivo_desc: ['', Validators.required]
    });
  }

  addReactivo(index): void {    
    this.reactivos = this.reactivosForm.get('items')['controls'][index].get('reactivos') as FormArray;
    this.reactivos.push(this.createReactivo());
  }

  deleteReactivo(i, j): void {
    this.reactivos = this.reactivosForm.get('items')['controls'][i].get('reactivos');    
    this.reactivos.removeAt(j);
  }

  setSeleccionado(index = -1){
    if (this.seleccionados.length > 0) {
      for (let i = 0; i < this.seleccionados.length; i++) {
        this.seleccionados[i] = false;
      }
    }
    if (index == -1) this.seleccionados.push(true);
    else this.seleccionados[index] = true;    
  }

  guardaReactivos() {
    let form = this.reactivosForm.get('items').value;
    this._encuestaService.guardaReactivos(form, this.idEncuesta).subscribe(response => {
      if (response && response['status']) {
        this.success.emit({completo: true});
        alertify.success(response['msg']).dismissOthers();
      }
    }, error => {
      console.log(<any>error);
    });    
  }

}
