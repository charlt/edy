import { Component, OnInit } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AvisosDocenteService } from '../services/avisos-docente.service';
import { GrupoService } from '../../grupo/services/grupo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL} from 'src/app/services/global';
import { teacherEditor } from '../../../models/teacherEditor';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  avisosForm: FormGroup;
  jwt: string;
  title;
  model; // 
  identity;
  id_docente;
  idAsignaturaGrupo;
  id_aviso;
  archivo;
  tipoDoc;
  estadoArchivo;
  _aviso;
  archivoAdjunto;
  teacherEditor;
  prioridades;

  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _avisosDocenteService: AvisosDocenteService,
    private _grupoService: GrupoService,
    private router : Router,
    private route: ActivatedRoute


  ){
    this.id_aviso = this.route.snapshot.paramMap.get('id');
    this.teacherEditor = teacherEditor;
    if(this.id_aviso)
      this.title = 'Editar aviso';
    else
      this.title = 'Nuevo aviso';
    
    this._usuarioService.pushBreadcum(this.title,"",2); 
   }

   get f() { return this.avisosForm.controls; }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.id_docente = this.identity.persona_id
    let _id_asignatura_grupo = this._grupoService.getSelectedAsignaturaGrupo();
    this.idAsignaturaGrupo = _id_asignatura_grupo.asignatura_grupo_id

    this.avisosForm = this.formBuilder.group({
      tituloAviso: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      adjuntaArchivo: [''],
      mensaje: ['', Validators.required ],
      importancia: ['', Validators.required]
    });

    this.importanciaAviso();

    if(this.id_aviso != null){ 
      this._avisosDocenteService.consultaAviso( this.jwt , this.id_aviso).subscribe(
        response =>{
          if(response && response['status']){
            this._aviso = response['aviso'][0];
            this.archivoAdjunto = this._aviso.adjunto
            let _fechaInicio = this._aviso.fecha_inicio.split(" ")[0]
            let _fechaFin = this._aviso.fecha_fin.split(" ")[0]
            this.avisosForm.get('tituloAviso').setValue(this._aviso.titulo);
            this.avisosForm.get('fechaInicio').setValue(_fechaInicio);
            this.avisosForm.get('fechaFin').setValue(_fechaFin);
            this.avisosForm.get('mensaje').setValue(this._aviso.mensaje);
            this.avisosForm.get('importancia').setValue(this._aviso.importancia_aviso_id);
          }
        },error =>{
          console.log(<any>error)
        });
    }

  }

  importanciaAviso(){
    this._avisosDocenteService.consultaPrioridad(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.prioridades = response['prioridades'];
          }
      },error =>{
        console.log(<any>error)
      }); 
  }

  cargaAdjunto(evt:  any){
    this.archivo = evt.target.files[0];
    let ultimo = this.archivo.name.lastIndexOf('.');
    this.tipoDoc = this.archivo.name.substr(ultimo + 1);
    if (this.tipoDoc == 'docx' || this.tipoDoc == 'pdf' || this.tipoDoc == 'png' || this.tipoDoc == 'jpg') {
      this.estadoArchivo = true;
      alertify.success("Documento adjunto correcto");        
    }else{
      this.estadoArchivo = false
      alertify.error("Documento adjunto inválido");        
    }
  }

  enviarInformacion(){    
    if (this.avisosForm.invalid) {
      Object.keys(this.avisosForm.controls).forEach( controlKey => {
        this.avisosForm.controls[controlKey].markAsTouched();
      });
      return;
    }  
    this._avisosDocenteService.modificaAvisos(this.avisosForm, this.jwt, this.id_docente,this.idAsignaturaGrupo, this.id_aviso, this.archivo ).subscribe(
      response =>{
        console.log(this.avisosForm);
          if(response && response['status']){
            this.router.navigate(['docente/avisos/'+ this.idAsignaturaGrupo +'/consulta']);
            alertify.success(response['msg']);
          }
      },error =>{
        console.log(<any>error)
      });
  }

  comienza(event){
    let url = GLOBAL.url;
    let urlAssets = GLOBAL.urlAssets;

    let jwt = this.jwt;
    let id = ""+this.idAsignaturaGrupo+"";

    event.editor.on( 'fileUploadRequest', function( evt ) {
      var fileLoader = evt.data.fileLoader,
      formData = new FormData(),
      xhr = fileLoader.xhr;

      xhr.open('POST', url +'extras/archivo/carga_ckeditor.php', true);
      //xhr.setRequestHeader('Content-type', "multipart/form-data");
      formData.append('jwt', jwt);
      formData.append('nom_carpeta','avisos_profesor');
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
