import { Component, ViewChild, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GLOBAL } from 'src/app/services/global';
import { ZonaImagenesService } from 'src/app/administracion/carga-actividades/services/zona-imagenes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var alertify: any;

@Component({
  selector: 'respuesta-zona-imagenes',
  templateUrl: './zona-imagenes.component.html',
  styleUrls: ['./zona-imagenes.component.scss']
})
export class ZonaImagenesComponent implements OnInit,OnChanges {

  Data: any;
  title: string;
  jwt: string;
  width: number;
  height: number; 
  public url: string;
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  hideImage: boolean = true;
  arrayRespuestas = [];
  reactivos: any;
  contenidoPregunta: any;
  indexReactivos: number = 0;
  bandera: boolean = false;
  tipo: string;
  hayRespuesta: boolean = false;
  resultado;

  idPregunta;

  @ViewChild("myImage") myImage;
  @ViewChild('myResult') myResult;

  pregunta;
  idMateriaFechaActividad;
  edicion;
  intentosRestantes;
  @Output() actividadCargada = new EventEmitter();

  constructor(
    private _usuarioService: UsuarioService,
    private _zonaImagenesService: ZonaImagenesService,
    private modalService: NgbModal
    ) { 
  	this.title="Ejercicio 2. Zonas de imágenes";
    this._usuarioService.pushBreadcum(this.title,'',2); 
    this.url = GLOBAL.urlAssets;
  }

  ngOnInit(){
    this.pregunta = this.Data.pregunta;
    this.edicion = this.Data.edicion;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.intentosRestantes = this.Data.intentosRestantes;

    this.indexReactivos = 0;
    this.jwt = this._usuarioService.getJWT();
    this.idPregunta = this.pregunta.pregunta_id;
    this.getDatos();
  }

  ngOnChanges(){
    this.indexReactivos = 0;
    this.getDatos();
  }
  
  getDatos(){
    let datosReactivos = this.pregunta.arreglo_reactivos;        

    if (this.edicion == 1) {
      this.tipo = 'canvas';
    }else if (this.edicion == 0) {
      this.tipo = 'resultadoCanvas';
    }
    this.canvas = this.myImage.nativeElement;

    if (datosReactivos.reactivos) { 
      window.scrollTo(0,0);
      this.reactivos = datosReactivos.reactivos;
      this.contenidoPregunta = datosReactivos.contenidoPregunta; 
      this.showImage(0);
      this.reactivos.forEach(reactivo => {
        if (reactivo.respuesta) {
          this.drawCircle(1, reactivo.respuesta);
          this.hayRespuesta = true;
        }
      });
    }

    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    }, 1);

    // this._zonaImagenesService.consultaZonaImagenes(this.idPregunta, this.jwt,this.idMateriaFechaActividad).subscribe(
    //   response =>{
    //     window.scrollTo(0,0)
    //     if(response && response['status']){
    //       this.reactivos = response['reactivos'];
    //       this.contenidoPregunta = response['contenidoPregunta'];  
    //       this.showImage(0);
    //       this.reactivos.forEach(reactivo => {
    //         if (reactivo.respuesta) {
    //           this.drawCircle(1, reactivo.respuesta);
    //           this.hayRespuesta = true;
    //         }
    //       });
    //     }
    //     this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    //   },error =>{
    //     console.log(<any>error)
    //   }); 
  }

  showImage(id) {  
    let imgCanvas, ctx;
    if (id == 0) {
      imgCanvas = this.myImage.nativeElement;
      this.hideImage = false;
    }else if (id == 1) {
      imgCanvas = <HTMLCanvasElement> document.getElementById("resultado");
    }
    //SE USA PARA PINTAR LOS RECTÁNGULOS QUE FUERON SELECCIONADOS.
    // let ClientRect = this.myImage.nativeElement.getBoundingClientRect();

    // for (let i = 0; i < this.reactivos.length; i++) {
    //   this.x = Math.round(ClientRect.left) + parseInt(this.reactivos[i].posicion_x);
    //   this.y = Math.round(ClientRect.left) + parseInt(this.reactivos[i].posicion_y);     
    //   this.width = parseInt(this.reactivos[i].ancho);
    //   this.height = parseInt(this.reactivos[i].alto); 
    //   // ctx.restore(); 
    //   ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    //   ctx.rect(this.x, this.y, this.width, this.height);
    //   ctx.stroke();
    //   // ctx.save();   
    //   // ctx.clip();  
    // } 
    ctx = imgCanvas.getContext('2d'); 
    ctx.clearRect(0 , 0, ctx.width, ctx.height);  
    imgCanvas.width = this.contenidoPregunta.imagen_ancho;
    imgCanvas.height = this.contenidoPregunta.imagen_alto;
    imgCanvas.style.background = "url("+this.url + this.contenidoPregunta.imagen+")";      
   }       

  cleanCanvas(){
    let context = this.canvas.getContext('2d');
    context.clearRect(0 , 0, this.canvas.width, this.canvas.height);  
    this.indexReactivos = 0; 
    this.eliminaSeleccion();
  }

  drawCircle(id, evt: any){
    let x,y,color;
    var ClientRect, ctx;
    if (id == 0 || id == 1) {
      ClientRect = this.canvas.getBoundingClientRect();
      ctx = this.canvas.getContext('2d');
    }else if (id == 2) {
      ClientRect = document.getElementById("resultado").getBoundingClientRect();
      let canvas = <HTMLCanvasElement> document.getElementById('resultado');
      ctx = canvas.getContext('2d');
    }
    if (this.indexReactivos < this.reactivos.length) {    
      if (id == 0 && this.edicion == 1) {
        x = Math.round(evt.clientX - ClientRect.left);
        y = Math.round(evt.clientY - ClientRect.top);
        let respuesta = [];
        let reactivo = this.reactivos[this.indexReactivos];
        respuesta.push({id_reactivo: reactivo.reactivo_id, posicion_x: x, posicion_y: y});
        this.guardarSeleccion(respuesta);
      }else if (id == 1) {
        x = evt.posicion_x;
        y = evt.posicion_y;
      }else if (id == 2) {
        x = parseInt(evt.posicion_x) + (parseInt(evt.ancho) / 2)
        y = parseInt(evt.posicion_y) + (parseInt(evt.alto) / 2)
      }
      this.bandera = true;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      if (id == 0 || id == 1 && this.edicion == 1) {
        ctx.fillStyle = this.reactivos[this.indexReactivos].color;
        color = 'black';
      }else if (id == 1 && this.edicion == 0) {
        color = 'white';
        let reactivo = this.reactivos.find(respuesta => respuesta.reactivo_id == evt.reactivo_id);
        let xInicio = parseInt(reactivo.posicion_x);
        let xFinal = parseInt(reactivo.posicion_x) + parseInt(reactivo.ancho);
        let yInicio = parseInt(reactivo.posicion_y);
        let yFinal = parseInt(reactivo.posicion_y) + parseInt(reactivo.alto);
        if (
            (
              (xInicio < xFinal && x > xInicio && x < xFinal) ||
              (xInicio > xFinal && x < xInicio && x > xFinal)
            ) &&
            (
              (yInicio < yFinal && y > yInicio && y <yFinal) ||
              (yInicio > yFinal && y < yInicio && y > yFinal)
            )
          ){
            ctx.fillStyle = 'mediumseagreen';
          }else{
            // ctx.fillStyle = 'crimson';
            ctx.fillStyle = 'lightgray';
          }
      }else if (id == 2) {
        ctx.fillStyle = this.reactivos[this.indexReactivos].color;
        color = 'black';
      }
      ctx.fill();
      ctx.stroke();  

      let texto = (this.indexReactivos + 1).toString();
      let yTexto = parseInt(y) + 10;
      ctx.textAlign="center";
      ctx.font="22pt Arial";
      ctx.fillStyle = color;
      ctx.fillText(texto, x, yTexto); 
      this.indexReactivos++;          

      // if (!this.bandera) {
      //   alertify.error("Selecciona una zona válida.")
      // }
    }else{
      if (id == 0 && this.edicion == 1) {
        alertify.error("Límite de respuestas alcanzado").dismissOthers();
      }
    }
  }

  guardarSeleccion(respuesta){
    this._zonaImagenesService.guardaRespuestas(respuesta[0],this.idMateriaFechaActividad, this.jwt).subscribe(
      response => {
        if(response && response['status']){
          alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
        }else{
          alertify.error('Error al guardar').dismissOthers(); 
        }
      }, error => {
        console.log(<any>error);
    });
    // if (this.indexReactivos == this.reactivos.length) {
    //   alertify.confirm('¿Deseas guardar tus respuestas?',
    //   function(){
    //     alertify.success('Respuestas guardadas correctamente');
    //   }.bind(this),
    //   function(){
    //     alertify.error('Cancelado');
    //   });
    // }else{
    //   alertify.error("Selecciona todas las respuestas")
    // }
   }

  eliminaSeleccion(){
    this._zonaImagenesService.eliminaRespuestas(this.idPregunta, this.idMateriaFechaActividad, this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg']).dismissOthers();
        }
      }, error => {
        console.log(<any>error);
    }); 
  }
  
  open(content) {
      this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'});   
      this.showImage(1); 
      this.indexReactivos = 0;
      this.reactivos.forEach(reactivo => {
        this.drawCircle(2, reactivo);
      });
  }

  close(){
    this.modalService.dismissAll();
  }

}
