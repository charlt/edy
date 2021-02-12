import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EncuestasService } from './encuestas.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { EncuestaService } from 'src/app/administracion/encuesta/services/encuesta.service';
import { PlataformaService } from 'src/app/services/plataforma.service';

declare var alertify: any;

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {

  Formulario: any;
  encuestasForm: FormGroup;
  datos: FormArray;
  jwt: string;
  bandera: boolean = false;
  Items = ['item', 'item', 'item', 'item', 'item', 'item', 'item'];
  editar: boolean = false;
  switch_encuesta_id;
  idEncuesta: number;
  idPersona: any;
  idRol: number;
  contestado: number = 0;
  encuesta;
  asignaturaEncuesta;
  docenteEncuesta
  // @Output() success = new EventEmitter<any>();
  
  constructor(
    private _encuestasService: EncuestasService,
    private formBuilder: FormBuilder,
    private _usuarioServe: UsuarioService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: NgbModal,
    private _encuestaService: EncuestaService,
    private _plataformaService: PlataformaService,
    private router: Router
  ) { }

  ngOnInit() {   
    this.idEncuesta = parseInt(this.route.snapshot.paramMap.get('id'));
    this.switch_encuesta_id = parseInt(this.route.snapshot.paramMap.get('id2'));        
    this.idPersona = this._usuarioServe.getIdentity().persona_id;
    this.idRol = parseInt(this._usuarioServe.getRol().rol_id);    
    this.bandera = false;
    this.editar = false;
    this.consultaFormulario();
    this.consultaEspecifica();
  }

  consultaEspecifica(){
    this._encuestaService.consultaSwitchEncuesta(this.idEncuesta, this.switch_encuesta_id).subscribe(response => {
      if (response && response['status']){
        this.encuesta = response['encuesta'];
        let asignatura = this.encuesta[0].asignatura
        if (asignatura) {
          this.asignaturaEncuesta = asignatura
        }else{
         this.asignaturaEncuesta = this.encuesta;   
        }

        let nombreDocente = this.encuesta[0].nombre;
        let primerApDocente = this.encuesta[0].primer_apellido;
        let segundoApDocente = this.encuesta[0].segundo_apellido;
        if (nombreDocente) {
          this.docenteEncuesta = nombreDocente + ' ' +primerApDocente + ' ' +segundoApDocente
        }
        // console.log(this.encuesta);
      }
    });
  }

  consultaFormulario(){
    this._encuestasService.consultaFormulario(this.idEncuesta, this.switch_encuesta_id,this.idPersona).subscribe(response => {
      if (response && response['status']) {
        this.Formulario = response['encuesta'];                                
        this.encuestasForm = this.formBuilder.group({
          titulo: this.Formulario.titulo,
          instruccion: this.Formulario.instruccion,
          // preguntas: this.formBuilder.array([])
          preguntas: new FormArray(this.Formulario[0].map(item => new FormGroup( { } )))
        });
        this.consultaContestado();
      }else{
        this.bandera = false; 
      }
    }, error =>{
      console.log(<any>error);
    });
  }

  consultaContestado() {
    this._encuestasService.getContestado(this.idPersona,this.idEncuesta,this.switch_encuesta_id).subscribe(response => {
      if (response && response['status']) {
        this.contestado = 1;
      }else{
        this.contestado = 0; 
      }
      this.addItem();                
    }, error =>{
      console.log(<any>error);
    });
  }

  addItem(): void {    
    this.Formulario[0].forEach(pregunta => {      
      if (pregunta.campo_encuesta_padre_id == null && pregunta.condicional == null) {        
        this.generateItem(pregunta);
      }
    });      

    this.setIndex();

    this.bandera = true;
    // this.cargado.emit(true);    
  }

  generateItem(pregunta){                          
    let i = this.Formulario[0].map(e => { return e.campo_encuesta_id}).indexOf(pregunta.campo_encuesta_id);
    
    this.datos = this.encuestasForm.get('preguntas') as FormArray;
    this.datos.removeAt(i);
    this.datos.insert(i, this.createItem(pregunta));    

    let tipoValidacion = "null";
    let Respuesta: any = pregunta.tipo == 'checkbox'? []: '';
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
        this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', control);
      }else {        
        this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', 
        new FormControl( {value: Respuesta, disabled: Deshabilitado}, Validators[tipoValidacion]) );        
      }
      // if (pregunta.obligatorio) {
      //   this.encuestasForm["controls"].preguntas["controls"][i].controls.respuesta.setValidators(Validators.required);
      //   this.encuestasForm["controls"].preguntas["controls"][i].controls.respuesta.updateValueAndValidity();      
      // }
    }
    if (pregunta.reactivos) {   
      this.encuestasForm["controls"].preguntas["controls"][i].addControl('reactivos', this.formBuilder.array([]), new FormControl('', Validators[tipoValidacion]));
      pregunta.reactivos.forEach(reactivo => {
        this.datos.controls[i]["controls"].reactivos.push(this.createReactive(reactivo, pregunta.campo_encuesta_id));
      }); 
      if (pregunta.campo_encuesta_padre_id != null && pregunta.condicional != null) {
        Eliminar = false;
      }
      if (pregunta.tipo == 'select') {  
        if (Respuesta == "" || this.editar) this.valueChanges(i, Eliminar);
        else if (Respuesta != "") this.setValues(Respuesta, i);
      }         
      if (pregunta.tipo == 'radio') {        
        let control = new FormControl({value: Respuesta, disabled: Deshabilitado}, Validators[tipoValidacion]);
        this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta',control);
        if (Respuesta == "" || this.editar) {          
          this.valueChanges(i, Eliminar);
        } else if (Respuesta != "") {
          this.setValues(Respuesta, i);          
        }
      }else if (pregunta.tipo == 'checkbox') {     
        this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', 
        this.createArrayCheckbox(pregunta.reactivos, tipoValidacion, pregunta.campo_encuesta_id, Respuesta, Deshabilitado));
      }     
        // this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuestaCheckbox', this.formBuilder.group({
        //   valores: this.createArrayCheckbox()
        // }));
    }    
  }

  createItem( datos ): FormGroup {    
    return this.formBuilder.group({
      campo_encuesta_id : datos.campo_encuesta_id,
      pregunta : datos.pregunta,
      descripcion : datos.descripcion,
      tipo : datos.tipo,
      obligatorio : datos.obligatorio,
      mensaje_error: datos.mensaje_error,
      campo_encuesta_padre_id: datos.campo_encuesta_padre_id,
      condicional: datos.condicional
    });    
  }

  createReactive(datos, campo_id) {    
    return this.formBuilder.group({
      id_reactivo : datos.id_reactivo,
      texto: datos.texto,
      campo_encuesta_id: campo_id
    }); 
  }

  valueChanges(i, eliminar: boolean = true){
    this.encuestasForm["controls"].preguntas["controls"][i].get('respuesta').valueChanges.subscribe(value => {                               
      this.setValues(value, i, eliminar);
      this.setIndex();
    }); 
    if (this.editar) {      
      let value = this.encuestasForm["controls"].preguntas["controls"][i].get('respuesta').value;
      this.setValues(value, i, eliminar);      
    }
  }

  deleteItem(pregunta): void {    
    this.datos = this.encuestasForm.get('preguntas') as FormArray;
    let i = this.Formulario[0].map(e => { return e.campo_encuesta_id}).indexOf(pregunta.campo_encuesta_id);
    this.datos.removeAt(i);
    this.datos.insert(i, new FormGroup( { } ));
  }

  setValues(respuesta, i, eliminar: boolean = false){            
    let reactivosValue = this.encuestasForm["controls"].preguntas["controls"][i].get('reactivos').value.slice();
    if (respuesta.trim().toLowerCase() == 'otro' || respuesta.trim().toLowerCase() == 'otra') {
      this.encuestasForm["controls"].preguntas["controls"][i]
      .addControl('otro', new FormControl('', Validators.required));
    }else {
      if (this.encuestasForm["controls"].preguntas["controls"][i].get('otro')) {
        this.encuestasForm["controls"].preguntas["controls"][i].removeControl('otro');
      }
    }    
    
    let selected = reactivosValue.find(res => res.texto == respuesta)          
    let reactiveChild = this.Formulario[0].filter(res =>
    res.campo_encuesta_padre_id == selected.campo_encuesta_id && res.condicional == selected.id_reactivo);
    let toEliminate;
    
    if (!eliminar) {
      toEliminate = this.encuestasForm.get('preguntas').value.filter(res => 
        res.campo_encuesta_padre_id == selected.campo_encuesta_id && res.condicional != selected.id_reactivo);
    } else if (eliminar) {    
      toEliminate = this.encuestasForm.get('preguntas').value.filter(res =>
        res.campo_encuesta_padre_id != null && res.condicional != null && res.campo_encuesta_padre_id == selected.campo_formulario_id);  
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
    ({id_reactivo: item.id_reactivo, texto: item.texto, campo_encuesta_id: idPregunta}));
    return selectedItems.length ? selectedItems : null;
  }

  guardarEncuesta(){
    alertify.confirm('Mensaje de la plataforma', '¿Deseas guardar la información?', function(){   
      this.encuestasForm.setErrors({ 'invalid': true });    
      let form = this.encuestasForm.get('preguntas').value;
      let Formulario = [];
      form.forEach(val => {
        if (val.campo_encuesta_id) {
          if (val.otro) {
            val.respuesta = val.otro;
          }
          Formulario.push(val);
        }
      }); 
                 
      this._encuestasService.enviaEncuesta(Formulario, this.idEncuesta,this.switch_encuesta_id, this.editar).subscribe(response => {                
        if (response && response['status']) {
          // this.success.emit(true);
          this._plataformaService.cambiaAvisoEncuestaEstatus(this.idEncuesta);
          alertify.success(response['msg']).dismissOthers();
          this.router.navigate(['learning/home']);
          this.modalService.dismissAll();
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
    this.encuestasForm.get('preguntas')['controls'].forEach((pregunta, i) => {
      if (Object.entries(pregunta['controls']).length > 0) {
        this.encuestasForm.get('preguntas')['controls'][i].removeControl('id');
        this.encuestasForm.get('preguntas')['controls'][i].addControl('id', new FormControl(index));
        index++;
      }      
    });    
  }

}
