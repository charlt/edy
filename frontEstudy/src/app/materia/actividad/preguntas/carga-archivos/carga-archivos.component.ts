import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { TrPregunta } from '../../../../models/learning/trPregunta';
import { AdjuntableService } from 'src/app/administracion/carga-actividades/services/adjuntable.service';
import { Archivo } from 'src/app/services/archivos';
import { HttpClient } from '@angular/common/http';


declare var alertify;

@Component({
  selector: 'carga-archivos',
  templateUrl: './carga-archivos.component.html',
  styleUrls: ['./carga-archivos.component.scss']
})
export class CargaArchivosComponent implements OnInit {

  Data: any;
  cargaArchivosForm: FormGroup;

  jwt: string;

  contenidoPregunta: Array<TrPregunta> = new Array<TrPregunta>();

  pregunta;
  idMateriaFechaActividad;
  edicion;

  @Output() actividadCargada = new EventEmitter();
  @Output() cargandoArchivo = new EventEmitter();

  archivo = Archivo;
  tipoArchivo;
  num_archivos;
  cat_formato_id;
  contador = 0;
  inicio = false;
  cargando = false;
  bandera: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _adjuntableService: AdjuntableService,
    private _httpClient: HttpClient
  ) { }

  get f() { return this.cargaArchivosForm.controls; }

  hasError(error: string) {
    const control = this.cargaArchivosForm.get('contenido');
    return control.dirty && control.hasError(error);
  }

  ngOnInit() {
    this.pregunta = this.Data.pregunta;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.edicion = this.Data.edicion;

    this.jwt = this._usuarioService.getJWT();    

    if (this.pregunta.contenido_pregunta) {
      this.num_archivos = this.pregunta.contenido_pregunta.num_archivos;
      this.cat_formato_id = this.pregunta.contenido_pregunta.cat_formato_id;
    }
    
    
    if (isNaN(this.cat_formato_id)) {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    }else {      
      let idCatFormato;
      if (this.cat_formato_id == "100") {//todos
        idCatFormato = this.archivo.length - 1;
      } else {
        idCatFormato = parseInt(this.cat_formato_id) - 1;
      }            
      this.cargaArchivosForm = this.formBuilder.group({
        contenido: ['', isNaN(idCatFormato)? '' : requiredFileType(idCatFormato)],
        link: [''],
        check: [],
      });
      
      this.tipoArchivo = this.archivo[idCatFormato]
      this.consultaContenido();
    }
    
  }

  consultaContenido() {
    let datosRespuesta = this.pregunta.arreglo_reactivos;
    if (datosRespuesta.contenido) {
      this.contenidoPregunta = datosRespuesta['contenido'];
      this.setContenido(datosRespuesta);
    }

    setTimeout(() => {
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);   
    }, 1);
  }

  getContenido() {
    this._adjuntableService.consultaContenido(this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(
      response => {
        if (response && response['status']) {          
          this.contenidoPregunta = response['contenido'];
          this.setContenido(response);
        }
        this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
      }, error => {
        console.log(error);
    });
  }

  setContenido(response) {
    this.contenidoPregunta.forEach(contenido => {
      let url = contenido.url_archivo;
      if(url){
        let res = url.split('/');
        if (res[0] == 'http:' || res[0] == 'https:') {
          contenido.urlExt = true;
        } else {
          contenido.urlExt = false;
        }
      }
    });
    // console.log(this.contenidoPregunta);
    response['contenido'].forEach(function (archivos) {
      if (archivos.materia_fecha_actividad_id == this.idMateriaFechaActividad && archivos.pregunta_id == this.pregunta.pregunta_id) {
        this.contador++;
      }
    }.bind(this))
  }

  link(){
    let userlink = this.cargaArchivosForm.get('link').value;
    userlink = userlink.trim();
    this.cargaArchivosForm.get('link').setValue(userlink);
    this.cargaArchivosForm.controls.link.setValidators(Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/))
    this.cargaArchivosForm.controls.link.updateValueAndValidity();
    if (this.cargaArchivosForm.get('link').value && this.cargaArchivosForm.get('link').valid){
      this.cargaArchivosForm.controls.link.setValidators(Validators["required"])
      this.cargaArchivosForm.controls.link.updateValueAndValidity();
      this._adjuntableService.guardaUrl(this.idMateriaFechaActividad, this.pregunta.pregunta_id, userlink).subscribe(
        response => {
          if (response && response['status']) {
            this.getContenido();
            this.cargaArchivosForm.get('link').reset();
            this.cargaArchivosForm.get('check').setValue(false)
            alertify.success(response['msg'])
          }
        }, error => {
          console.log(error)
        });
    }else{
      alertify.error('Ingresa una url válida')
    }
  }

  guardarBorrador() {
    this.cargando = true;
    this.cargandoArchivo.emit(true);
    this._adjuntableService.guardaContenido(this.cargaArchivosForm, this.cat_formato_id, this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(
      response => {        
        if (response && response['status']) {
          this.cargaArchivosForm.get('contenido').disable();
          // alertify.success(response['msg'])
          this._adjuntableService.consultaContenido(this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(
            response => {              
              if (response && response['status']) {
                this.contenidoPregunta = response['contenido'];
                this.contador++;
                this.cargaArchivosForm.get('contenido').enable();
                alertify.success('Archivo cargado correctamente')
              }
            }, error => {
              console.log(error)
            });
        }else {
          alertify.error(response['msg'])
        }
        this.cargando = false;
        this.cargandoArchivo.emit(false);
      }, error => {
        console.log(<any>error)
    });
  }

  eliminaContenido(id, index,externo) {

    alertify.confirm('¿Deseas eliminar el contenido?',
      function () {

        if(!externo){
        this._adjuntableService.eliminaContenido(id, this.idMateriaFechaActividad, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.contenidoPregunta.splice(index, 1);
              this.contador--;              
            }
            else {
              alertify.success(response['msg']);
            }
          }, error => {
            console.log(<any>error)
          });
        }else{
          this._adjuntableService.eliminaUrl(id).subscribe(
            response => {
              if (response && response['status']){
                this.contenidoPregunta.splice(index,1)
                alertify.success(response['msg'])
              }
            }, error => {
              console.log(error)
            });
        }

          
      }.bind(this),
      function () {
        alertify.error('Cancel');
      });
  }
  // enviarInformacionPregunta(){

  //   this._preguntaService.enviaContenidoPregunta(this.idDatosPregunta,this.idPregunta,this.jwt).subscribe(
  //     response =>{
  //       console.log(response)
  //           if(response && response['status']){
  //             alertify.success(response['msg'])
  //             this.sucessEvent.emit(
  //               {
  //                 'status': response['status'],
  //                 'idPregunta' : response['idPregunta']
  //               });//si se insertó correctamente se le agrega la asignatura a la asignatura
  //           }else{
  //             alertify.error(response['msg'])

  //           }

  //   },error =>{
  //     console.log(<any>error)
  //   });

  // }

}
