import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { TrPreguntaOpcionMultiple } from 'src/app/models/learning/trPreguntaOpcionMultiple';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RelacionService } from 'src/app/administracion/carga-actividades/services/relacion.service';
declare var alertify;
import { reactiveEditor } from "src/app/models/reactiveEditor";
import { GLOBAL } from "src/app/services/global";

@Component({
  selector: 'form-relacion',
  templateUrl: './form-relacion.component.html',
  styleUrls: ['./form-relacion.component.scss']
})
export class FormRelacionComponent implements OnInit {

  newPregunta:TrPreguntaOpcionMultiple = new TrPreguntaOpcionMultiple;
  preguntas: Array<TrPreguntaOpcionMultiple> = new Array<TrPreguntaOpcionMultiple>();

  @Input() idPregunta;
  @Output() successEvent = new EventEmitter<any>();

  jwt;
  tipoAdmin;
  preguntaMultipleForm: FormGroup;
  items: FormArray;
  reactiveEditor;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _relacionService : RelacionService,

    ) {
      this.reactiveEditor = reactiveEditor;
     }

  get f() { return this.preguntaMultipleForm.controls; }
  get sf() { return this.preguntaMultipleForm.controls.items}
 
  ngOnInit() {

    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    if(this.idPregunta !== undefined){
      this._relacionService.consultaRelacion(this.idPregunta,this.jwt).subscribe(
        response =>{
          let react=response['reactivos'];
            if(response && response['status']=='1'){
              react.forEach(function (reactivo) {
                this.agregarRespuesta(reactivo.columna_a_desc,reactivo.columna_b_desc);
              }.bind(this));
              this.eliminarRespuesta(react.columna_a_respuesta=='1');
            }
        },error =>{
          console.log(<any>error)
        });
    }

    this.preguntaMultipleForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.crearRespuesta() ])
    });
  }

  
  agregarRespuesta(columna_a = '', columna_b = ''){
    this.items = this.preguntaMultipleForm.get('items') as FormArray;
    this.items.push(this.crearRespuesta(columna_a,columna_b));
  }

  crearRespuesta(columna_a = '', columna_b = ''): FormGroup {
    return this.formBuilder.group({
      columna_a: [columna_a, Validators.required],
      columna_b: [columna_b, Validators.required]
    });
  }

  eliminarRespuesta(index){
    this.items.removeAt(index);
  }

  enviarInformacionPregunta(){
  // console.log(this.preguntaMultipleForm.get('items'));
  if (this.preguntaMultipleForm.invalid) {
    Object.keys(this.preguntaMultipleForm.controls).forEach( controlKey => {
      this.preguntaMultipleForm.controls[controlKey].markAsTouched();
    });
    return;
   }

   this._relacionService.modificaRelacion(this.preguntaMultipleForm,this.idPregunta,this.jwt).subscribe(
    response =>{
        if(response && response['status']){
          alertify.success(response['msg'])
          this.successEvent.emit(
            { 'status': response['status'], "idPregunta": this.idPregunta });//si se insertó correctamente se le agrega la asignatura a la asignatura
        }else{
          alertify.error(response['msg'])
        }
},error =>{
  console.log(<any>error)
});
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
