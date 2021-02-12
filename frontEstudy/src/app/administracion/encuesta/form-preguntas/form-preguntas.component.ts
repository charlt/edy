import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EncuestaService } from '../services/encuesta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify: any;

@Component({
  selector: 'app-form-preguntas',
  templateUrl: './form-preguntas.component.html',
  styleUrls: ['./form-preguntas.component.scss']
})
export class FormPreguntasComponent implements OnInit, OnChanges {

  title: string = 'Carga de preguntas';
  @Input() idEncuesta: number;
  preguntasForm: FormGroup;
  suscripciones: Subscription[] = [];
  seleccionados: Array<any> = [];
  items: FormArray;
  tipoInput = [ {id: 1, label: 'Texto'}, {id: 2, label: 'Número'}, {id: 3, label: 'Radio'}, 
    {id: 4, label: 'Checkbox'}, {id: 5, label: 'Lista seleccionable'} ];
  bandera: boolean = false;
  @Output() success = new EventEmitter<any>();
  tipoAdmin;

  constructor(
    private formBuilder: FormBuilder,
    private _encuestaService: EncuestaService,
    private _usuarioService:UsuarioService
  ) { }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
  }

  ngOnChanges() {    
    this.preguntasForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createItem() ])
    });  
    this.valueChanges(0);
    this.setSeleccionado();    
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      pregunta: ['', Validators.required],
      descripcion: [''],
      tipo_campo: ['', Validators.required],
      obligatorio: ['', Validators.required],
      error: ['']
    });
  }

  get arrayItems() { return this.preguntasForm.get('items') as FormArray }
  
  valueChanges(index) {    
    this.suscripciones.push(
      this.preguntasForm.get('items')['controls'][index].get('tipo_campo').valueChanges.subscribe(value => {          
          if (value == 1) this.preguntasForm.get('items')['controls'][index].addControl('regex', new FormControl('')); 
          else this.preguntasForm.get('items')['controls'][index].removeControl('regex');
        }
      )
    );    
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

  addItem(): void {
    this.items = this.preguntasForm.get('items') as FormArray;
    this.items.push(this.createItem());
    this.setSeleccionado();
    this.valueChanges(this.items.length - 1);
  }

  deleteItem(index): void {
    this.items = this.preguntasForm.get('items') as FormArray;
    this.items.removeAt(index);
    this.suscripciones.forEach((sub) => { sub.unsubscribe(); });
    this.seleccionados = [];
    this.suscripciones = [];    
    this.items.value.forEach((item, i) => {
      this.valueChanges(i);
      this.setSeleccionado();
    });    
  }  

  guardaPreguntas() {
    let form = this.preguntasForm.get('items').value; 
    this._encuestaService.guardaPreguntas(form, this.idEncuesta).subscribe(response => {
      console.log(response);
      if (response && response['status']) {
        alertify.success(response['msg']).dismissOthers();
        this.success.emit(form);
      }
    }, error => {
      console.log(<any>error);
    });
  }

}
