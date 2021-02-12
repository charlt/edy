import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { FormGeneratorService } from "./form-generator.service";
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify: any;

@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnChanges {

  Formulario: any;
  generatorForm: FormGroup;
  datos: FormArray;
  jwt: string;
  bandera: boolean = false;
  Items = ['item', 'item', 'item', 'item', 'item', 'item', 'item'];
  editar: boolean = false;

  @Input() idRol: number;
  @Input() idFormulario: number;
  @Input() contestado;
  @Input() idAspirante: number;
  @Input() idCarrera;
  @Output() cargado = new EventEmitter();
  @Output() setId = new EventEmitter();
  
  constructor(
    private formBuilder: FormBuilder,
    private _formGeneratorService: FormGeneratorService,
    private _usuarioService: UsuarioService
    ) { }

  ngOnChanges() {        
    this.jwt = this._usuarioService.getJWT();
    this.bandera = false;
    this.editar = false;
    this.consultaFormulario();
  }

  consultaFormulario(){    
    this._formGeneratorService.consultaFormulario(this.jwt, this.idFormulario, this.idAspirante).subscribe(response => {                        
      if (response && response['status']) {
        this.Formulario = response['formulario'];                              
        this.generatorForm = this.formBuilder.group({
          titulo: this.Formulario.titulo,
          instruccion: this.Formulario.instruccion,
          // preguntas: this.formBuilder.array([])
          preguntas: new FormArray(this.Formulario[0].map(item => new FormGroup( { } )))
        });
        this.addItem();                
      }else{
        this.bandera = false; 
      }
    }, error =>{
      console.log(<any>error);
    });
  }

  addItem(): void {
    this.Formulario[0].forEach(pregunta => {      
      if (pregunta.campo_formulario_padre_id == null && pregunta.condicional == null) {
        this.generateItem(pregunta);
      }
    });    
    this.setIndex();
      
    this.bandera = true;
    this.cargado.emit(true);    
  }

  generateItem(pregunta){                          
    let i = this.Formulario[0].map(e => { return e.campo_formulario_id}).indexOf(pregunta.campo_formulario_id);
    
    this.datos = this.generatorForm.get('preguntas') as FormArray;
    this.datos.removeAt(i);
    this.datos.insert(i, this.createItem(pregunta));    

    let tipoValidacion = "null";
    let Respuesta = "";
    let Deshabilitado = false;
    let Eliminar = true;    
    if (pregunta.obligatorio == "1") {
      tipoValidacion = "required";
    }   
    if (pregunta.respuesta.length > 0 && pregunta.tipo != 'checkbox') {
      Respuesta = pregunta.respuesta[0].respuesta;
      if (!this.editar) {
        Deshabilitado = true;
      }
    }else if (pregunta.respuesta.length > 0 && pregunta.tipo == 'checkbox') {
      Respuesta = pregunta.respuesta;
      if (!this.editar) {
        Deshabilitado = true;
      }
    }   
    // if (this.idRol == 1) {
    //   Deshabilitado = true;
    // }          
    if (pregunta.tipo != 'radio' && pregunta.tipo != 'checkbox') {     
      if (pregunta.tipo == 'text' && pregunta.regex) {
        let control = new FormControl( {value: Respuesta, disabled: Deshabilitado}, 
          Validators.compose([
          Validators.pattern(pregunta.regex), 
          Validators[tipoValidacion]]) );       
        this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', control);
      }else {        
        this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', 
        new FormControl( {value: Respuesta, disabled: Deshabilitado}, Validators[tipoValidacion]) );        
      }
      // if (pregunta.obligatorio) {
      //   this.generatorForm["controls"].preguntas["controls"][i].controls.respuesta.setValidators(Validators.required);
      //   this.generatorForm["controls"].preguntas["controls"][i].controls.respuesta.updateValueAndValidity();      
      // }
    }
    if (pregunta.reactivos) {   
      this.generatorForm["controls"].preguntas["controls"][i].addControl('reactivos', this.formBuilder.array([]), new FormControl('', Validators[tipoValidacion]));
      pregunta.reactivos.forEach(reactivo => {
        this.datos.controls[i]["controls"].reactivos.push(this.createReactive(reactivo, pregunta.campo_formulario_id));
      }); 
      if (pregunta.campo_formulario_padre_id != null && pregunta.condicional != null) {
        Eliminar = false;
      }
      if (pregunta.tipo == 'select') {  
        if (Respuesta == "" || this.editar) this.valueChanges(i, Eliminar);
        else if (Respuesta != "") this.setValues(Respuesta, i);
      }         
      if (pregunta.tipo == 'radio') {        
        let control = new FormControl({value: Respuesta, disabled: Deshabilitado}, Validators[tipoValidacion]);
        this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta',control);
        if (Respuesta == "" || this.editar) {          
          this.valueChanges(i, Eliminar);
        } else if (Respuesta != "") {
          this.setValues(Respuesta, i);          
        }
      }else if (pregunta.tipo == 'checkbox') {     
        this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', 
        this.createArrayCheckbox(pregunta.reactivos, tipoValidacion, pregunta.campo_formulario_id, Respuesta, Deshabilitado));
      }     
        // this.generatorForm["controls"].preguntas["controls"][i].addControl('respuestaCheckbox', this.formBuilder.group({
        //   valores: this.createArrayCheckbox()
        // }));
    }    
  }

  createItem( datos ): FormGroup {
    return this.formBuilder.group({
      campo_formulario_id : datos.campo_formulario_id,
      pregunta : datos.pregunta,
      descripcion : datos.descripcion,
      tipo : datos.tipo,
      obligatorio : datos.obligatorio,
      mensaje_error: datos.mensaje_error,
      campo_formulario_padre_id: datos.campo_formulario_padre_id,
      condicional: datos.condicional
    });    
  }

  createReactive(datos, campo_id) {    
    return this.formBuilder.group({
      id_reactivo : datos.id_reactivo,
      texto: datos.texto,
      campo_formulario_id: campo_id
    }); 
  }

  valueChanges(i, eliminar: boolean = true){
    this.generatorForm["controls"].preguntas["controls"][i].get('respuesta').valueChanges.subscribe(value => {                         
      this.setValues(value, i, eliminar);
      this.setIndex();
    }); 
    if (this.editar) {      
      let value = this.generatorForm["controls"].preguntas["controls"][i].get('respuesta').value;
      this.setValues(value, i, eliminar);      
    }
  }

  deleteItem(pregunta): void {  
    this.datos = this.generatorForm.get('preguntas') as FormArray;
    let i = this.Formulario[0].map(e => { return e.campo_formulario_id}).indexOf(pregunta.campo_formulario_id);
    this.datos.removeAt(i);
    this.datos.insert(i, new FormGroup( { } ));
  }

  setValues(respuesta, i, eliminar: boolean = false){            
    let reactivosValue = this.generatorForm["controls"].preguntas["controls"][i].get('reactivos').value.slice();
    if (respuesta.trim().toLowerCase() == 'otro' || respuesta.trim().toLowerCase() == 'otra') {
      this.generatorForm["controls"].preguntas["controls"][i]
      .addControl('otro', new FormControl('', Validators.required));
    }else {
      if (this.generatorForm["controls"].preguntas["controls"][i].get('otro')) {
        this.generatorForm["controls"].preguntas["controls"][i].removeControl('otro');
      }
    }   
    let selected = reactivosValue.find(res => res.texto == respuesta);             
    let reactiveChild = this.Formulario[0].filter(res =>
    res.campo_formulario_padre_id == selected.campo_formulario_id && res.condicional == selected.id_reactivo);    
    let toEliminate;    
    
    if (!eliminar) {
      toEliminate = this.generatorForm.get('preguntas').value.filter(res => 
        res.campo_formulario_padre_id == selected.campo_formulario_id && res.condicional != selected.id_reactivo);
    } else if (eliminar) {    
      toEliminate = this.generatorForm.get('preguntas').value.filter(res =>
        res.campo_formulario_padre_id != null && res.condicional != null && res.campo_formulario_padre_id == selected.campo_formulario_id);  
    }      

    if (toEliminate && toEliminate.length > 0) {
      toEliminate.forEach(reactivo => { 
        this.deleteItem(reactivo);
      });
    }
    if (reactiveChild && reactiveChild.length > 0) {      
      reactiveChild.forEach(reactivo => {         
        this.generateItem(reactivo);
      });
    }      
  }

  createArrayCheckbox(inputs, tipoValidacion, idPregunta, respuestas, disabled) {        
    let checkboxGroup = new FormArray(inputs.map(item => new FormGroup({
      id_reactivo: new FormControl(item.id_reactivo),
      texto: new FormControl(item.texto),
      checkbox: new FormControl({value: getSelected(item.texto), disabled: disabled})      
    })));
    
    function getSelected(item){
      let dato = respuestas.find(res => res.respuesta == item)
      if (dato) {
        return true;
      }
      return false;
    }
    
    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators[tipoValidacion]);
    checkboxGroup.valueChanges.subscribe((valor) => {
      hiddenControl.setValue(this.mapItems(valor, idPregunta));
    });

    return this.formBuilder.group({
      reactivos: checkboxGroup,
      seleccionados: hiddenControl
    });    
  }

  mapItems(items, idPregunta = 0) {    
    let selectedItems = items.filter((item) => item.checkbox).map((item) => 
    ({id_reactivo: item.id_reactivo, texto: item.texto, campo_formulario_id: idPregunta}));
    return selectedItems.length ? selectedItems : null;
  }

  guardarFormulario(){
    alertify.confirm('Mensaje de la plataforma', '¿Deseas guardar la información?', function(){   
      this.generatorForm.setErrors({ 'invalid': true });    
      let form = this.generatorForm.get('preguntas').value;
      let Formulario = [];
      form.forEach(val => {        
        if (val.campo_formulario_id) {
          if (val.otro) {
            val.respuesta = val.otro;
          }
          Formulario.push(val);
        }
      });           
      this._formGeneratorService.enviaFormulario(this.jwt, Formulario, this.idFormulario, this.editar, this.idAspirante).subscribe(response => {        
        if (response && response['status']) {
          this.setId.emit(this.idFormulario);
          alertify.success(response['msg']).dismissOthers();
        }
      }, error =>{
        console.log(<any>error);
      });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  editarInformacion(){
    this.editar = true;
    this.contestado = 0;
    this.addItem();   
  }

  setIndex() {
    let index = 1;
    this.generatorForm.get('preguntas')['controls'].forEach((pregunta, i) => {
      if (Object.entries(pregunta['controls']).length > 0) {
        this.generatorForm.get('preguntas')['controls'][i].removeControl('id');
        this.generatorForm.get('preguntas')['controls'][i].addControl('id', new FormControl(index));
        index++;
      }      
    });    
  }

    // getSelectedCheckbox() {
  //   let arreglo = [];
  //   for (const pregunta of this.generatorForm.controls.preguntas.value) {  
  //     if (pregunta.reactivos && pregunta.respuestaCheckbox) {
  //       var valores = pregunta.respuestaCheckbox.valores.map( (dato, i) => {
  //         var array = {};    
  //           array["campo_formulario_id"] = pregunta.campo_formulario_id;
  //           array["id_reactivo"] = pregunta.reactivos[i].id_reactivo;        
  //           array["texto"] = pregunta.reactivos[i].texto;        
  //           if (dato == true) {          
  //             arreglo.push(array);
  //           }
  //         }      
  //       );
  //     }
  //   }
  //   return arreglo;    
  // }

  // createCheckValues(inputs) {
  //   const arreglo = inputs.map(dato => {
  //     return new FormControl(false, Validators.required);
  //   });    
  //   return this.formBuilder.array(arreglo);
  // }
}