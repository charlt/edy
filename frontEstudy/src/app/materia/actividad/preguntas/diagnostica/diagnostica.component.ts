import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {simpleEditor} from 'src/app/models/simpleEditor';
import {documentEditor} from 'src/app/models/documentEditor';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DiagnosticaService } from 'src/app/administracion/carga-actividades/services/diagnostica.service';
import { GLOBAL } from 'src/app/services/global';
import html2canvas from 'html2canvas';
import { MateriaService } from 'src/app/services/materia.service';



declare var alertify;

@Component({
  selector: 'respuesta-diagnostica',
  templateUrl: './diagnostica.component.html',
  styleUrls: ['./diagnostica.component.scss']
})
export class DiagnosticaComponent implements OnInit {

  jwt;
  identity;
  rol;
  imgURL;
  url = GLOBAL.urlAssets;
  @Input() pregunta;
  @Input() idMateriaFechaActividad;
  @Input() edicion;
  @Output() actividadCargada = new EventEmitter();

  idRespuesta = null;
  idPregunta;
  momento;
  visualizaFlag;

  simpleEditor = simpleEditor;
  documentEditor = documentEditor;
  otrasRespuestas;
  respuesta;
  momentoCompletado;

  respuestasM1=[];
  respuestasM2=[];
  size;
  
  model;

  constructor(
    private _usuarioService : UsuarioService,
    private _materiaService : MateriaService,
    private _diagnosticaService : DiagnosticaService
  ) {  }

  ngOnInit() {

    this.model = {
        editorData: '<p>Hello, world!</p>'
    };


    this.rol = this._usuarioService.getRol();
    if (this.rol.url_logo_institucion) {
      this.imgURL = this.url + this.rol.url_logo_institucion;
    }else{
      this.imgURL = this.url + '/assets/institucion/0/imagen_perfil/default.png';
    }
  
    this.momento = this.pregunta.contenido_pregunta.momento;
    this.visualizaFlag = this._materiaService.getSelectedMateria().materia_id;
    this.idPregunta = this.pregunta.pregunta_id;
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.getDatos();
  }

  getDatos(){
    this._diagnosticaService.consultaRespuesta(this.idPregunta,this.jwt,this.momento,this.visualizaFlag,this.idMateriaFechaActividad).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
            this.respuesta = response['diagnostica'];
            this.idRespuesta = this.respuesta.respuesta_id
            this.model = this.respuesta.respuesta;
        }

        if(response['momentoCompletado']){
          this.momentoCompletado = response['momentoCompletado'];
        }
        if(response['otrasRespuestas'] && response['otrasRespuestas'].length){
          this.otrasRespuestas = response['otrasRespuestas'];
        }else{
          this.otrasRespuestas = null;
        }
        
        if(this.momentoCompletado >= 2){
          this.otrasRespuestas.forEach(function(respuesta){
            if(respuesta.momento == '1')
              this.respuestasM1.push(respuesta)
            if(respuesta.momento == '2')
              this.respuestasM2.push(respuesta)
          }.bind(this));
          if(this.respuestasM1.length > this.respuestasM2.length){
              this.size = this.respuestasM1.length;
          }else{
            this.size = this.respuestasM2.length;
          }
        }
        if ((!this.edicion) || (this.edicion && this.momentoCompletado < 1) || 
            (this.edicion && this.momentoCompletado < 2)) {
          this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        }
      },error =>{
        console.log(error)
      }
    )
  }
  public generateRowIndexes(count: number): Array<number> {
    let indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  guardarBorrador( event ) {
    let dbRespuesta, bandera = 1;
    if (this.respuesta) {
      dbRespuesta = this.respuesta.respuesta;
      if (this.model === dbRespuesta) {
        bandera = 0;
      }
    }
    if (this.model.length > 0 && bandera == 1) {
      this._diagnosticaService.guardaRespuesta(this.idPregunta,this.model ,this.idMateriaFechaActividad,this.visualizaFlag,this.jwt,this.idRespuesta).subscribe(
        response =>{
          if(response && response['status']){
            alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
            if(response['idRespuesta'])
              this.idRespuesta = response['idRespuesta'];
          }else{
            alertify.error('Error al guardar').dismissOthers(); 
          }
      },error =>{
        console.log(error)
      });
    }
  }

  descargaImagen(){
    window.scrollTo(0,0);
    var data = document.getElementById('tablaDia_' + this.idPregunta);  
    var idImage = 'urlDia_' + this.idPregunta;
    html2canvas(data, {
      allowTaint: true,
      "logging": true,
      useCORS: true,
      onclone: function (clonedDoc) {
        clonedDoc.getElementById(idImage).style.display = 'block';
      }
    }).then(canvas => {  
      var link = document.createElement("a");
      link.download = "mapa_cognitivo.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }

  editorCargado(evt: any){
    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    }, 100);
  }

}
