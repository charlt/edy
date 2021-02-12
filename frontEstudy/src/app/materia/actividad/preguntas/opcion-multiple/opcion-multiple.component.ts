import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GLOBAL }  from '../../../../services/global';
import { TrOmReactivos} from '../../../../models/learning/trOmReactivos';
import { MultipleService } from 'src/app/administracion/carga-actividades/services/multiple.service';
import { Usuario } from 'src/app/models/usuario'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

declare var alertify;

@Component({
  selector: 'respuesta-opcion-multiple',
  templateUrl: './opcion-multiple.component.html',
  styleUrls: ['./opcion-multiple.component.scss']
})
export class OpcionMultipleComponent implements  OnInit, OnChanges {

  Data: any;
  jwt:string;
  identity : Usuario;
  pregunta;
  idMateriaFechaActividad;
  edicion;
  intentosRestantes;
  reactivos: Array<TrOmReactivos> = new Array<TrOmReactivos>();
  url: string;
  urlImagen : string;
  opcionesSeleccionadas:number = 0;
  resAlumno: any;
  resCorrecta: any;
  respuestas = [];
  correcta: boolean;

  @Output() actividadCargada = new EventEmitter();

  constructor(
    private _usuarioService: UsuarioService,
    private _opcionMultipleService: MultipleService,
    private _sanitizer: DomSanitizer
  ) { 
    this.url = GLOBAL.urlAssets;
  }

  ngOnInit(){
    this.pregunta = this.Data.pregunta;
    this.edicion = this.Data.edicion;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.intentosRestantes = this.Data.intentosRestantes;
    
    this.jwt = this._usuarioService.getJWT();
    this.getDatos();
    
  }

  ngOnChanges(){        
    // this.jwt = this._usuarioService.getJWT();
    // this.getDatos();
  }

  getDatos(){
    
    let datosReactivos = this.pregunta.arreglo_reactivos;    
    this.reactivos = [];
    this.respuestas = [];

    if (datosReactivos.reactivos) {      
      this.reactivos = datosReactivos.reactivos;
      if(datosReactivos.seleccionMultiple == 1){
        this.opcionesSeleccionadas = 1;
      }else{
        this.opcionesSeleccionadas = 0;
      }

      if (this.reactivos.length > 0) {
          for (let i = 0; i < this.reactivos.length; i++) {
          this.reactivos[i].html_reactivo = this.htmlProperty(this.reactivos[i].reactivo);

          if(this.reactivos[i].respuesta){                
            if(this.reactivos[i].respuesta.ponderacion == '100'){
              this.reactivos[i].correcta = true;
            }else{
              this.reactivos[i].correcta = false;
            }    
            this.respuestas.push(this.reactivos[i]);
            this.reactivos[i].checked = true;
          }
        }
      }

      if (this.intentosRestantes == 0) {
        let correcta = this.respuestas.find(r => r.correcta == false)
        if (correcta && correcta.correcta == false) {              
          this.resCorrecta = this.reactivos.filter(r => r.ponderacion == '100')
        }  
      }
    }

    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id); 
    }, 1);
    
    // this._opcionMultipleService.consultaRespuestas(this.pregunta.pregunta_id,this.idMateriaFechaActividad, this.intentosRestantes,this.pregunta.pregunta_shuffle).subscribe(
    //   response =>{    
        
    //     this.reactivos = [];
    //     this.respuestas = [];
    //       if(response && response['status']){
    //         this.reactivos = response['reactivos'];            
    //         if(response['seleccionMultiple'] == 1){
    //           this.opcionesSeleccionadas =1;
    //         }else{
    //           this.opcionesSeleccionadas =0;
    //         }

    //         this.urlImagen = response['url_imagen'];
    //         this.resCorrecta = [];            
    //         for (let i = 0; i < this.reactivos.length; i++) {
    //           this.reactivos[i].html_reactivo = this.htmlProperty(this.reactivos[i].reactivo);

    //           if(this.reactivos[i].respuesta){
    //             if(this.reactivos[i].respuesta.ponderacion == '100'){
    //               this.reactivos[i].correcta = true;
    //             }else{
    //               this.reactivos[i].correcta = false;
    //             }    
    //             this.respuestas.push(this.reactivos[i]);
    //             this.reactivos[i].checked = true;
    //           }
    //         }
    //         if (this.intentosRestantes == 0) {
    //           let correcta = this.respuestas.find(r => r.correcta == false)
    //           if (correcta && correcta.correcta == false) {              
    //             this.resCorrecta = this.reactivos.filter(r => r.ponderacion == '100')
    //           }  
    //         }
    //       }
    //       this.actividadCargada.emit(this.pregunta.datos_pregunta_id); 
             
    //   },error =>{
    //     console.log(<any>error)
    //   });    
  }

  seleccionaElemento(index){
    if(this.edicion){

      if(this.opcionesSeleccionadas == 1){

        this.reactivos.forEach(function(reactivo){
          reactivo.checked = false;
        });

        this._opcionMultipleService.eliminaMultiple(this.pregunta.pregunta_id,this.idMateriaFechaActividad, this.jwt).subscribe(
          response => {
            if(response && response['status']){
              this._opcionMultipleService.guardaRespuesta(this.reactivos[index].reactivo_id,this.pregunta.pregunta_id,this.idMateriaFechaActividad,this.jwt).subscribe(
                response =>{
                  if(response && response['status']){
                    alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
                    this.reactivos[index].checked =  true;
                  }else{
                    alertify.error('Error al guardar').dismissOthers(); 
                  }
              },error=>{
                console.log(error)
              });
            }else{
            }
          },error=>{
            console.log(error);
          }
        );
        this.reactivos[index].checked = true;
      }else{

        if(this.reactivos[index].checked){
          this._opcionMultipleService.eliminaRespuesta(this.reactivos[index].reactivo_id,this.idMateriaFechaActividad,this.jwt).subscribe(
            response => {
              if(response && response['status']){
                alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
                this.reactivos[index].checked =  false;
              }else{
                alertify.error('Error al guardar').dismissOthers(); 
              }
            },error=>{
              console.log(error)
            });
        }else{
          this._opcionMultipleService.guardaRespuesta(this.reactivos[index].reactivo_id,this.pregunta.pregunta_id,this.idMateriaFechaActividad,this.jwt).subscribe(
              response =>{
                if(response && response['status']){
                  alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 

                  this.reactivos[index].checked =  true;
                }else{
                  alertify.error('Error al guardar').dismissOthers(); 
                }
            },error=>{
              console.log(error)
            });
          }
      
        }
    }
  }

  htmlProperty(html) : SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
