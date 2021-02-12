import { Component, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ArrastableService } from 'src/app/administracion/carga-actividades/services/arrastable.service';
import { Usuario } from 'src/app/models/usuario';
import { TrDdReactivos } from 'src/app/models/learning/trDdReactivos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var alertify: any;

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements  OnInit,OnChanges{

  Data: any;

  pregunta;
  idMateriaFechaActividad;
  
  edicion;
  intentosRestantes;

  jwt: string;
  identity : Usuario;
  reactivos: Array<TrDdReactivos>;
  respuestas;
  contestado=0;
  hayRespuesta: boolean = false;
  reactivosCorrectos;

  idPregunta;
  orientacion;

  @Output() sucessEvent = new EventEmitter<any>();
  @Output() actividadCargada = new EventEmitter();

  constructor(
    private _usuarioService: UsuarioService, 
    private _dragDropService: ArrastableService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { 
  }

  ngOnInit(){
    this.setData();
    this.jwt = this._usuarioService.getJWT();
    this.idPregunta = this.pregunta.pregunta_id;
    if(this.pregunta.contenido_pregunta){
      this.orientacion = this.pregunta.contenido_pregunta.orientacion;
    }
    
    this.getDatos();
    
  }
  ngOnChanges(){
    this.setData();
    this.jwt = this._usuarioService.getJWT();

    this.idPregunta = this.pregunta.pregunta_id;
    if(this.pregunta.contenido_pregunta){
      this.orientacion = this.pregunta.contenido_pregunta.orientacion;
    }
    this.getDatos();
  }

  setData() {
    this.pregunta = this.Data.pregunta;
    this.edicion = this.Data.edicion;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.intentosRestantes = this.Data.intentosRestantes;
  }

  getDatos(){

    let datosReactivos = this.pregunta.arreglo_reactivos;   
    if (datosReactivos.respuestas) {
      this.reactivos = datosReactivos.respuestas
    }     

    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    }, 1);

    // this._dragDropService.consultaDragDrop(this.idPregunta, this.jwt,this.idMateriaFechaActividad).subscribe(
    //   response =>{
    //     if(response && response['status']){
    //         this.reactivos = response['respuestas'];
    //     }else{
    //       // console.log(response['msg'])
    //     }
    //     this.actividadCargada.emit(this.pregunta.datos_pregunta_id);

    //   },error =>{
    //     console.log(<any>error)
    //   });   
  }

  drop(event: CdkDragDrop<string[]>) {
    
    let id_respuesta = this.reactivos[event.previousIndex].respuesta_id;

    let nuevoOrden = event.currentIndex+1
    
    this.reactivos[event.previousIndex].seleccionado=true;
    this.reactivos[event.currentIndex].seleccionado=true;

    moveItemInArray(this.reactivos, event.previousIndex, event.currentIndex);


    this._dragDropService.modificaOrden(id_respuesta,nuevoOrden,this.idPregunta,this.idMateriaFechaActividad,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
        }else{
          alertify.error('Error al guardar').dismissOthers(); 

        }
      },
      error =>{
        console.log(<any>error);
      }
    )

  }

  enviarRespuesta(){
 
    // this.reactivos.forEach(   function(element, index) {
    //   console.log(element.reactivo_id);
    //   });

    this._dragDropService.modificaRespuestas(this.reactivos,this.idPregunta,this.idMateriaFechaActividad,this.jwt).subscribe(
      response =>{
      if(response && response['status']){
                
                this.reactivos.forEach(function(reactivo){
                  reactivo.seleccionado=false;
                })
                this.contestado =1
        
          this.edicion = 1;
          
        alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
      }else{
        alertify.error('Error al guardar').dismissOthers(); 
      }

  },error =>{
    console.log(<any>error)
  });

  }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'});   
    this._dragDropService.consultaRespuestas(this.idPregunta, this.jwt,this.idMateriaFechaActividad).subscribe(
      response =>{
   
        if(response && response['status']){

            this.reactivosCorrectos=response['reactivos'];

            this.reactivosCorrectos.sort(function(a, b) {
              return parseFloat(a.orden) - parseFloat(b.orden);
          });            
            
        }else{
          console.log(response['msg'])
        }

      },error =>{
        console.log(<any>error)
      }); 
    
}

close(){
  this.modalService.dismissAll();
}
        

}
