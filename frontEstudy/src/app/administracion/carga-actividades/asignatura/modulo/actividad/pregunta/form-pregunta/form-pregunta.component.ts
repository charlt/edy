import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { PreguntaService } from 'src/app/administracion/carga-actividades/services/pregunta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TrPregunta } from 'src/app/models/learning/trPregunta';
import { GLOBAL} from 'src/app/services/global';
import {simpleEditor} from 'src/app/models/simpleEditor';

declare var alertify;

@Component({
  selector: 'form-pregunta',
  templateUrl: './form-pregunta.component.html',
  styleUrls: ['./form-pregunta.component.scss']
})
export class FormPreguntaComponent implements OnInit {

  jwt;
  preguntaForm: FormGroup;
  @Input() datosPregunta;
  idDatosPregunta;
  idTipoPregunta;
  cargando;
  

  @Output() sucessEvent = new EventEmitter<any>();

  contenidoPregunta:TrPregunta = new TrPregunta();

  idPregunta;
  formato;
  tipoAdmin;
  simpleEditor = simpleEditor;

  constructor(
    private formBuilder: FormBuilder,
    private _preguntaService: PreguntaService,
    private _usuarioService: UsuarioService,
  ) { }

  get f() { return this.preguntaForm.controls; }

  
  hasError(  error: string ) {
    const control = this.preguntaForm.get('contenido');
    return control.dirty && control.hasError(error);
  }

  ngOnInit() {
    this.idDatosPregunta = this.datosPregunta.datos_pregunta_id;
    this.idTipoPregunta = this.datosPregunta.tipo_pregunta_id;
    
    this.jwt = this._usuarioService.getJWT();
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    let elements = {
      instruccion: ['', Validators.required],
      contenido: ['',requiredFileType(0)]
    };

    if(this.idTipoPregunta == '2'){      
      elements['tipo'] = ['1',Validators.required];
     }

    if(this.idTipoPregunta == '5'){      
      elements['orientacion'] = ['',Validators.required];
     }

     if(this.idTipoPregunta == '6'){      
      elements['pregunta1'] = ['',Validators.required];
      elements['pregunta2'] = ['',Validators.required];
      elements['pregunta3'] = ['',Validators.required];
     }

    /*if(this.idTipoPregunta == '7'){
      
      
       elements['momento'] = ['',Validators.required];
       
    }*/

    if(this.idTipoPregunta == '11'){    


      elements['numArchivos'] = ['',Validators.required];
      elements['idFormato'] = [this.formato,Validators.required];
   }

    
   this._preguntaService.consultaFormatos(this.jwt).subscribe(
    response =>{
        if(response && response['status']){
          this.formato = response['formatos'];
        }
    })        
    this.preguntaForm = this.formBuilder.group(elements);
    
    this.consultaPregunta();
  }

  consultaPregunta(){
    this._preguntaService.consultaContenidoPregunta(this.idDatosPregunta,this.idTipoPregunta,this.jwt).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.contenidoPregunta = response['pregunta'][0]; 
          this.idPregunta  = this.contenidoPregunta.pregunta_id;   
          this.preguntaForm.get('instruccion').setValue(this.contenidoPregunta.pregunta);
          if(this.idTipoPregunta == '2'){       
            this.preguntaForm.get('tipo').setValue("1");
         }
      /*    if(this.idTipoPregunta == '7'){    
            
            this.preguntaForm.get('momento').setValue(this.contenidoPregunta.momento);
         }*/
          if(this.idTipoPregunta == '11'){    
            this.preguntaForm.get('numArchivos').setValue(this.contenidoPregunta.num_archivos);
            this.preguntaForm.get('idFormato').setValue(this.contenidoPregunta.cat_formato_id);
         }
         if(this.idTipoPregunta == '5'){       
          this.preguntaForm.get('orientacion').setValue(this.contenidoPregunta.orientacion);
       }
       if(this.idTipoPregunta == '6'){    
        this.preguntaForm.get('pregunta1').setValue(this.contenidoPregunta.pregunta1);
        this.preguntaForm.get('pregunta2').setValue(this.contenidoPregunta.pregunta2);
        this.preguntaForm.get('pregunta3').setValue(this.contenidoPregunta.pregunta3);  
     }
        }  
      },
      error =>{
        console.log(error)
      });
  }

  eliminaContenido(){
    this._preguntaService.eliminaArchivo(this.jwt, this.idPregunta,this.idTipoPregunta).subscribe(
      response =>{
        console.log(response);
            if(response && response['status']){
              console.log(response);
              this.consultaPregunta();
              alertify.success(response['msg'])

            }else{alertify.error(response['msg'])}
    },error =>{
      console.log(<any>error)
    });
  }


  
  enviarInformacionPregunta(){
    this.cargando = true;
    if (this.preguntaForm.invalid) {
      this.cargando = false;  
      Object.keys(this.preguntaForm.controls).forEach( controlKey => {
        this.preguntaForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    this._preguntaService.modificaContenidoPregunta(this.preguntaForm,this.idDatosPregunta,this.idPregunta,this.idTipoPregunta,this.jwt).subscribe(
      response =>{
            if(response && response['status']){
              this.cargando = false;  
              alertify.success(response['msg'])
              this.sucessEvent.emit(
                {
                  'status': response['status'],
                  'idPregunta' : response['idPregunta']

                });//si se insertó correctamente se le agrega la asignatura a la asignatura
            }else{
              alertify.error(response['msg'])

            }

    },error =>{
      console.log(<any>error)
    });
   
  }

  comienza(event){

    let self = this;
    let url = GLOBAL.url;
    let urlAssets = GLOBAL.urlAssets;

    let jwt = this.jwt;
    let idDatosPregunta = this.idDatosPregunta

    event.editor.on( 'fileUploadRequest', function( evt ) {
      var fileLoader = evt.data.fileLoader,
      formData = new FormData(),
      xhr = fileLoader.xhr;

      xhr.open('POST',url +'extras/archivo/carga_ckeditor.php', true);
      //xhr.setRequestHeader('Content-type', "multipart/form-data");
      formData.append('jwt', jwt);
      formData.append('id', idDatosPregunta);
      formData.append('nom_carpeta', 'pregunta');
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
        
        
      if ( response[1] ) {
        // An error occurred during upload.          
        data.message = response[1];
        evt.cancel();
      }else {
        var msg = JSON.parse(response[0]);

        setTimeout(() => {
          self.getData(event);
          console.log(self.preguntaForm.value);
          
        }, 10);
        data.url = urlAssets + msg.url;
      }
    });
  }

  getData(event: any) {
    this.preguntaForm.controls['instruccion'].setValue(event.editor.getData());    
  }

}
