import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { VinculacionIdeasService } from '../../services/vinculacion-ideas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify: any;

@Component({
  selector: 'vinculacion-ideas',
  templateUrl: './vinculacion-ideas.component.html',
  styleUrls: ['./vinculacion-ideas.component.scss'],
})

export class VinculacionIdeasComponent implements OnInit, OnChanges {

  Data: any;
  jwt: string;
  titulo: string;
  comparacion: string;
  vinculacionForm: FormGroup;
  itemsElemento: FormArray;
  itemsCategoria: FormArray;
  
  mensaje: string;
  categorias;
  elementos;
  longitud: any;
  step: any;
  show: boolean = false;

  
  idRespuesta;
  respuesta;
  idPregunta;
  idTipoPregunta: number;


  tipo;
  pregunta;
  idMateriaFechaActividad;
  edicion;
  @Output() actividadCargada = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private _vinculacionIdeasService: VinculacionIdeasService,
    private _usuarioService: UsuarioService
  ) { }

  get f() { return this.vinculacionForm.controls; }
  get iEf() { return this.vinculacionForm.controls.itemsElemento}
  get iCf() { return this.vinculacionForm.controls.itemsCategoria}

  ngOnInit() {        
    this.pregunta = this.Data.pregunta;    
    this.edicion = this.Data.edicion;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    if (this.pregunta.tipo_pregunta_id == 8) this.tipo = 1;
    else if (this.pregunta.tipo_pregunta_id == 9) this.tipo = 2;

    this.jwt = this._usuarioService.getJWT();

    this.idPregunta = this.pregunta.pregunta_id;

    this.setForm();
    // this.consultaPregunta();
    this.step = {id: 'preguntas', steps: 2, pestania: 0, titulo: ['','']};

    let datosPregunta = this.pregunta.arreglo_reactivos;    
    if (datosPregunta.respuesta) {
      this.respuesta = datosPregunta.respuesta;
      this.step['pestania'] = 1;
    }

    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
      this.show = true;
    }, 10);

    this.getArreglos();
  }

  ngOnChanges() {

    // this.setForm();
    // this.consultaPregunta();
    // this.getArreglos();
  }

  setForm(){
    this.vinculacionForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      itemsElemento: this.formBuilder.array([ this.createItem(0), this.createItem(0) ]),
      itemsCategoria: this.formBuilder.array([ this.createItem(1), this.createItem(1) ])
    });
  }

  createItem(id): FormGroup {
    if (id == 0) {
      return this.formBuilder.group({
        elemento: ["", Validators.required]
      }); 
    }else if (id == 1) {
      return this.formBuilder.group({
        categoria: ["", Validators.required]
      }); 
    }
  } 

  consultaPregunta(){
    this._vinculacionIdeasService.consulta(this.tipo,this.idPregunta,this.idMateriaFechaActividad,this.jwt).subscribe(
      response =>{                
        if(response && response['status']){
          this.respuesta = response['respuesta'];
          this.step = {id: 'preguntas', steps: 2, pestania: 1, titulo: ['','']};
        }else{
          this.step = {id: 'preguntas', steps: 2, pestania: 0, titulo: ['','']};
        }
        this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        this.show = true;

      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  addItem(id): void {
    if (id == 0) {
      this.itemsElemento = this.vinculacionForm.get('itemsElemento') as FormArray;
      this.itemsElemento.push(this.createItem(0));
    } else if (id == 1) {
      this.itemsCategoria = this.vinculacionForm.get('itemsCategoria') as FormArray;
      this.itemsCategoria.push(this.createItem(1));
    }
  }

  deleteItem(id): void {
    if (id == 0) {
      this.itemsElemento = this.vinculacionForm.get('itemsElemento') as FormArray;
      this.itemsElemento.removeAt(this.itemsElemento.length-1);
    } else if (id == 1) {
      this.itemsCategoria = this.vinculacionForm.get('itemsCategoria') as FormArray;
      this.itemsCategoria.removeAt(this.itemsCategoria.length-1);
    }
  }

  numElementos(evt: any, id, tipo_item){
    let num = parseInt(evt.target.value);
    var longitud;
    let item = this.getProp(this.vinculacionForm, "value." + tipo_item + ".length")
    if (num < item) {
      longitud = item - num;
      for (let i = 0; i < longitud; i++) {
        this.deleteItem(id);
      }
    } else if (num > item) {
      longitud = num - item;
      for (let i = 0; i < longitud; i++) {
        this.addItem(id);
      }
    }
  }

  getProp(object, key){
    return key.split('.').reduce( (obj, idx) =>
           (typeof obj == "undefined" || obj === null) ? obj : obj[idx], object);
  }

  getArreglos(){
    if (this.tipo == 1) {
      this.titulo = "Cuadro comparativo";
      this.comparacion = "¿Cuántos elementos deseas comparar?";
      this.elementos = [2, 3];
      this.categorias = [2, 3, 4,5];
      this.idTipoPregunta = 8;
    }else if (this.tipo == 2) {
      this.titulo = "Mapa cognitivo";
      this.comparacion = "Elementos a comparar";
      this.elementos = [2];
      this.categorias = [2, 3, 4]
      this.idTipoPregunta = 9;
    }
  }
  enviarRespuestas(){
    // if (this.idCuadroComparativo == 1) {
      this._vinculacionIdeasService.creaRespuesta(this.tipo, this.idPregunta, this.vinculacionForm,this.idMateriaFechaActividad, this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.mensaje = response['msg'];
            this.idRespuesta = response['id_respuesta'];
                this._vinculacionIdeasService.creaElemento(this.tipo, this.idRespuesta, this.vinculacionForm, this.jwt).subscribe(
                  response =>{
                      if(response && response['status']){
                        this._vinculacionIdeasService.creaCategoria(this.tipo, this.idRespuesta, this.vinculacionForm, this.jwt).subscribe(
                          response =>{
                              if(response && response['status']){
                                alertify.success(this.mensaje);
                                this.show = false;
                                this.consultaPregunta();
                              }  
                          },error =>{
                            console.log(<any>error)
                        });                       
                      }                
              },error =>{
                console.log(<any>error)
              }
            )
            
          }  
      },error =>{
        console.log(<any>error)
    });
    // }else if(this.idCuadroComparativo == 2){
    //   console.log("Cuadro 2")
    // }
  }

  // obtenerPropiedad(objeto, cadena){
  //   let prop = cadena.split(".").reduce(function(ant, act){
  //     if (typeof ant == "undefined" || ant === null) {
  //       return ant;
  //     }else{
  //       return ant[act];
  //     }}, objeto)

  //     return prop;
  // }
  
  showStep(evt: any){
    if (evt == 0) {
      this.show = false;
      this.setForm();
      this.consultaPregunta();   
      this.getArreglos();
      this.show = true;
    }
  }

}
