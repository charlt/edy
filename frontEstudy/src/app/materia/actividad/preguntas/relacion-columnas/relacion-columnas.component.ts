import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {TrRelacionColumnasReactivos} from '../../../../models/learning/TrRelacionColumnasReactivos'
import { RelacionService } from 'src/app/administracion/carga-actividades/services/relacion.service';
import  {randomColor} from 'randomcolor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare var alertify;
declare var $: any;

@Component({
  selector: 'relacion-columnas',
  templateUrl: './relacion-columnas.component.html',
  styleUrls: ['./relacion-columnas.component.scss']
})
export class RelacionColumnasComponent implements OnInit, OnChanges{

  @Input() successCharge: EventEmitter<boolean>;
  
  Data: any;
  jwt;
  idAlumno;

  pregunta;
  edicion;
  idMateriaFechaActividad;
  intentosRestantes;
  @Output() actividadCargada = new EventEmitter();
  
  preguntas: Array<TrRelacionColumnasReactivos>;
  columnaIzq: number = -1;
  columnaDer: number = -1;
  color;
  columnaselected:number = 0;
  respuestas = [];
  correctas = [];

  idPregunta;

  constructor(
    private _usuarioService: UsuarioService,
    private _relacionService:  RelacionService,
    private modalService: NgbModal,
    private _sanitizer: DomSanitizer
  ) {
   }

   ngOnInit(){                  
    this.pregunta = this.Data.pregunta;
    this.edicion = this.Data.edicion;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.intentosRestantes = this.Data.intentosRestantes;
     
    this.getDatos();
  }

  ngOnChanges(){
    // this.getDatos();
  }

  getDatos(){
    let datosReactivos = this.pregunta.arreglo_reactivos;            

    this.jwt = this._usuarioService.getJWT();
    this.idPregunta = this.pregunta.pregunta_id;

    window.scrollTo(0,0);
    if (datosReactivos.reactivos) {
      this.preguntas = datosReactivos.reactivos;         
      if (this.preguntas.length > 0 && this.successCharge) 
        this.successCharge.subscribe(() => { this.getRespuestas(); });
        // this.getRespuestas();
    }

    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    }, 1);

    // this._relacionService.consultaRelacionAleatoria(this.idPregunta, this.jwt, this.idMateriaFechaActividad).subscribe(
    //   response =>{      
    //     window.scrollTo(0,0);
    //     if(response && response['status']){
    //       this.preguntas = response['reactivos'];
    //     }
    //     this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    // },error =>{
    //   console.log(<any>error)
    // }); 
  }
  
  getRespuestas(){
    this.respuestas = [];
    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.preguntas[i].respuesta) {
        if (this.edicion == 1) {
          let pos = this.preguntas.findIndex(pregunta => 
            pregunta.columna_b_id == this.preguntas[i].respuesta.columna_b_id);
          setTimeout(() => {
            this.inicio(1, i, 1);
            this.inicio(1, pos, 2);
          }, 15);
        }else if (this.edicion == 0) {
          let pregunta = this.preguntas[i];
          let respuesta = this.preguntas.find(res => 
            res.columna_b_id == this.preguntas[i].respuesta.columna_b_id);
          let icono, resultado;
          if (pregunta.columna_a_id == respuesta.columna_b_id) {
            icono = true;
            resultado = {'color': 'green'};
          }else{
            icono = false;
            resultado = {'color': '#704214'};
          }
          this.respuestas.push({pregunta: this.htmlProperty(pregunta.columna_a_desc), respuesta: this.htmlProperty(respuesta.columna_b_desc),
          class: icono, style: resultado});
        }
      }
    }
  }

  drawLine(columnaIzq, columnaDer) {  
      
    let leftEl ="#pointer-"+this.idPregunta+"-l-"+columnaIzq;
    let rightEl  ="#pointer-"+this.idPregunta+"-r-"+columnaDer;

    var width = $(rightEl).offset().left - $(leftEl).offset().left;
    var height = $(leftEl).offset().top - $(rightEl).offset().top;

    if (height == 0) {
      height = 4;
    }
    var line = $("<div style='position: absolute; width: "+Math.abs(width-9)+"px; height: "+Math.abs(height)+"px;'><svg style='width: 100%; height: 100%;'><line x1='"+(height > 0 ? '0' : '100%')+"' y1='100%'  x2='"+(height > 0 ? '100%' : '0')+"' y2='0' style='stroke:"+this.color+";stroke-width:4'/></svg></div>");

    $(rightEl).children().remove();
    $(leftEl).children().remove();

    $(rightEl).append(line);
    $(leftEl).append(line);

    let leftTop = $(leftEl).offset().top;
    let rightTop = $(rightEl).offset().top;
        
    if (leftTop < rightTop) {
      line.offset({ top: $(leftEl).offset().top + 5, left: $(leftEl).offset().left + 9 })               
    }else if (rightTop < leftTop) {
      line.offset({ top: $(rightEl).offset().top + 5, left: $(leftEl).offset().left + 9 })               
    }else if(leftTop == rightTop) {
      line.offset({ top: $(leftEl).offset().top - 11, left: $(leftEl).offset().left + 9 })              
    }     
  }

  inicio(id,index,posicion){
     //posicion 1: izquierda, 2: derecha
    if(this.columnaIzq == -1 && this.columnaDer == -1){
      // this.color = 'hsla('+ Math.random() * 360 +', 100%, 50%, 1)';
      this.color = randomColor();
    }   

    if(posicion == 1 && posicion != this.columnaselected && !this.preguntas[index].color_a){            
      this.preguntas[index].color_a = this.color;
      this.columnaIzq = index;
      this.columnaselected =posicion;
    }else if(posicion == 2 && posicion != this.columnaselected && !this.preguntas[index].color_b){    
      this.preguntas[index].color_b = this.color;
      this.columnaDer = index;        
      this.columnaselected =posicion;
    }
    
    if(this.columnaIzq != -1 && this.columnaDer != -1){        
      this.drawLine(this.columnaIzq, this.columnaDer); 
      if (id == 0) {
        let leftElement = this.preguntas[this.columnaIzq].columna_a_id;
        let rightElement = this.preguntas[this.columnaDer].columna_b_id;
        let id_rectivo = this.preguntas[this.columnaIzq].reactivo_id;
        let respuesta = [];
        respuesta.push({id_a_columna: leftElement, id_b_columna: rightElement, id_rectivo: id_rectivo});
        this.guardarSeleccion(respuesta); 
      }
      this.columnaIzq = -1;
      this.columnaDer = -1;
      this.columnaselected = 0;
    }
  }

   borrarSeleccion(){
    this.columnaIzq = -1;
    this.columnaDer = -1;
    this.columnaselected = 0;
    this.preguntas.forEach(function(pregunta){
      pregunta.color_a = '';
      pregunta.color_b = '';
    });
    $('.round-right-'+this.idPregunta).each(function( index ) {
      $(this).children().remove();
    })
    this._relacionService.eliminaRespuestas(this.idPregunta, this.idMateriaFechaActividad,this.jwt).subscribe(
      response => { 
        if (response && response['status']) {
          alertify.success(response['msg']).dismissOthers();
        }
      }, error => { 
        console.log(<any>error);
    });
   }

  guardarSeleccion(respuesta){
    this._relacionService.guardarRelacionColumnas(respuesta[0], this.idMateriaFechaActividad,this.jwt).subscribe(
      response => {
        if(response && response['status']){
          alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
        }else{
          alertify.error('Error al guardar').dismissOthers(); 
        }
      }, error => {
        console.log(<any>error)
    });
    // alertify.confirm('¿deseas guardar tus respuestas?',
    // function(){
    //   alertify.success('Respuestas guardadas');
    // }.bind(this),
    // function(){
    //   alertify.error('Cancel');
    // });
        
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'});   
    this.getCorrectas();
  }

  close(){
    this.modalService.dismissAll();
  }

  htmlProperty(html) : SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  getCorrectas(){
    this.correctas = [];
    for (let i = 0; i < this.preguntas.length; i++) {
      for (let j = 0; j < this.preguntas.length; j++) {
        if (this.preguntas[i].columna_a_id == this.preguntas[j].columna_b_id) {
          this.correctas.push(
            {pregunta: this.htmlProperty(this.preguntas[i].columna_a_desc), respuesta: this.htmlProperty(this.preguntas[j].columna_b_desc)
              , id: this.preguntas[i].reactivo_id})
        }
      }
      

    }
    // this.correctas = this.preguntas.slice();
    // // this.correctas = JSON.parse(JSON.stringify(this.preguntas));
  }
}
