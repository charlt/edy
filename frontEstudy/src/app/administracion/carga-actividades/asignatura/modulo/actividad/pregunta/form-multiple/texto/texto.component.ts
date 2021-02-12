import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { TrPreguntaOpcionMultiple } from 'src/app/models/learning/trPreguntaOpcionMultiple';
import { FormGroup, FormBuilder , FormArray, Validators } from '@angular/forms';
import { MultipleService } from 'src/app/administracion/carga-actividades/services/multiple.service';
import { UsuarioService } from 'src/app/services/usuario.service';
// import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { reactiveEditor } from "src/app/models/reactiveEditor";
import { GLOBAL} from 'src/app/services/global';


declare var alertify;

@Component({
  selector: 'form-multiple-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss']
})
export class MultipleTextoComponent implements OnInit {

  newPregunta:TrPreguntaOpcionMultiple = new TrPreguntaOpcionMultiple;
  preguntas: Array<TrPreguntaOpcionMultiple> = new Array<TrPreguntaOpcionMultiple>();

  preguntaMultipleForm: FormGroup;
  items: FormArray;
  progress;
  tipo;

  urlImagen: string;
  noSelectCheckbox: boolean = false;
  reactiveEditor;

  @Input() reactivos;
  @Input() idPregunta;
  @Input() numRespuestas;
  @Input() idActividad;
  @Output() successEvent = new EventEmitter<any>();
  tipoAdmin;
  jwt;

  constructor(
    private formBuilder: FormBuilder,
    private _multipleService: MultipleService,
    private _usuarioService: UsuarioService
  ) {
    this.reactiveEditor = reactiveEditor;
  }

  get f() { return this.preguntaMultipleForm.controls; }
  get sf() { return this.preguntaMultipleForm.controls.items; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.preguntaMultipleForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.crearRespuesta() ])
    });
    
    if (this.reactivos) {
      this.reactivos.forEach(function(reactivo){
        let ponderacion = reactivo.ponderacion == '100'? true : false;
        this.agregarRespuesta(reactivo.reactivo_id, ponderacion,reactivo.reactivo,reactivo.retroalimentacion);
      }.bind(this));
      this.eliminarRespuesta(0);
    }
    console.log(this.preguntaMultipleForm);
    
  }

  agregarRespuesta(idReactivo = 0, ponderacion = '', respuesta= '', retroalimentacion = ''){
    this.items = this.preguntaMultipleForm.get('items') as FormArray;
    this.items.push(this.crearRespuesta(idReactivo,ponderacion,respuesta,retroalimentacion));
  }

  crearRespuesta(idReactivo = 0, ponderacion = '', respuesta= '', retroalimentacion = ''): FormGroup {
    let checkRetro;
    if(retroalimentacion ==''){
      checkRetro = 0;
    }else{
      checkRetro = 1;
    }

    return this.formBuilder.group({
      idReactivo: [idReactivo],
      ponderacion: [ponderacion],
      respuesta: [respuesta, Validators.required],
      checkretro: [checkRetro],
      retroalimentacion: [retroalimentacion],
    });
  }

  eliminarRespuesta(index){
    this.items.removeAt(index);
  }

  confirmaEliminaRespuesta(id){
    alertify.confirm('Desea eliminar esta pregunta?',
    function(){
      this.eliminarRespuesta(id);
    }.bind(this), function(){
      alertify.error('Cancelado');
    });
  }

  hasErrorP(error: string ) {
    const control = this.preguntaMultipleForm.get('imagen');
    return control.dirty && control.hasError(error);
  }

  hasError( index, field: string, error: string ) {
    const control = this.preguntaMultipleForm.get('items')['controls'][index].get(field);
    return control.dirty && control.hasError(error);
  }

  enviarInformacionPregunta(){
    let form = this.preguntaMultipleForm;
    let checkbox = 0;

    form.value.items.forEach(item => {
      if (item.ponderacion) {
        checkbox++
      }
    });
    
    if (checkbox > 0) {  
      this._multipleService.modificaMultiple(form,this.idPregunta,this.jwt).subscribe(
        response =>{
          console.log(response)
              if(response && response['status']){
                alertify.success(response['msg']).dismissOthers();
                this.noSelectCheckbox = false;
                this.successEvent.emit({ status: response['status'] })
              }else{
                alertify.error(response['msg'])
              }
      },error =>{
        console.log(<any>error)
      });
    }else {
      this.noSelectCheckbox = true;
    }
  }

  editaReactivo(index){
    alertify.confirm('Editar reactivo','¿Deseas editar la información de este reactivo?',
    function(){
      let reactivo = this.preguntaMultipleForm.value.items[index];
      this._multipleService.editaReactivoTexto(this.jwt, reactivo).subscribe(response =>{
        console.log(response)
        if(response && response['status']){
          alertify.success(response['msg']).dismissOthers();
        }
      },error =>{
        console.log(<any>error)
      });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });    
  }

  reasignarCalificacion(){
    alertify.confirm('Recalcular calificaciones','Estás a punto de recalcular las calificaciones de esta actividad con las ponderaciones actuales ¿Deseas continuar?',
    function(){
      this._multipleService.reasignaCalificacionPreguntaOM(this.idPregunta,this.idActividad).subscribe(
        response=>{
          if(response && response['status']){
            alertify.success(response['msg']).dismissOthers();
          }else{
            alertify.error(response['msg']).dismissOthers();
          }
        },error=>{
          console.log(error)
        }
      )
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });  
  }

  
  getData(event: any,index) {
    this.preguntaMultipleForm.get('items')['controls'][index].controls['respuesta'].setValue(event.editor.getData());    
  }

  comienza(event){
    let url = GLOBAL.url;
    let urlAssets = GLOBAL.urlAssets;

    let jwt = this._usuarioService.getJWT();
    let id = ""+this.idPregunta+"";

    event.editor.on( 'fileUploadRequest', function( evt ) {
      var fileLoader = evt.data.fileLoader,
      formData = new FormData(),
      xhr = fileLoader.xhr;

      xhr.open('POST', url +'extras/archivo/carga_ckeditor.php', true);
      //xhr.setRequestHeader('Content-type', "multipart/form-data");
      formData.append('jwt', jwt);
      formData.append('nom_carpeta','reactivos_pregunta');
      formData.append('id', id );
      formData.append('file', fileLoader.file, fileLoader.fileName);
      fileLoader.xhr.send( formData );
      evt.stop();
      // Prevented the default behavior.
    }, null, null, 4 );

    event.editor.on( 'fileUploadResponse', function( evt ) {
      // Prevent the default response handler.
      evt.stop();
  
      // Get XHR and response.
      var data = evt.data,
        xhr = data.fileLoader.xhr,
        response = xhr.responseText.split( '|' );
        console.log(response)
        
      if ( response[1] ) {
        // An error occurred during upload.          
        data.message = response[1];
        evt.cancel();
      }else {
        var msg = JSON.parse(response[0]);
        console.log(response[0])
        console.log(msg);
        data.url = urlAssets + msg.url;
      }
    });
  }
  
}
