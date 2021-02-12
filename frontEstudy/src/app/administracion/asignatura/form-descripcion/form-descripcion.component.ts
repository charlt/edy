import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsignaturaService } from '../services/asignatura.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GLOBAL } from 'src/app/services/global'
declare var alertify;

@Component({
  selector: 'form-descripcion',
  templateUrl: './form-descripcion.component.html',
  styleUrls: ['./form-descripcion.component.scss']
})
export class FormDescripcionComponent implements OnInit, OnChanges {
  data;
  button: boolean = false;
  formEditor: FormGroup;
  jwt;
  tex;
  tipoAdmin;
  @Input() columna;
  @Input() idAsignatura

  constructor(
    private formBuilder: FormBuilder,
    private _asignaturaService: AsignaturaService,
    private _usuarioService: UsuarioService

  ) { }

  get f() { return this.formEditor.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.formEditor = this.formBuilder.group({
      tex: ['', Validators.required]
    });
  }

  ngOnChanges() {
    this.jwt = this._usuarioService.getJWT();
    this._asignaturaService.consulta(this.jwt, this.idAsignatura).subscribe(
      response => {
        if (this.columna == 1) {
          this.formEditor.get('tex').setValue(response['Asignatura'][0].bienvenida_desc);
        } if (this.columna == 2) {
          this.formEditor.get('tex').setValue(response['Asignatura'][0].objetivos_desc);
        } if (this.columna == 3) {
          this.formEditor.get('tex').setValue(response['Asignatura'][0].evaluacion_desc);
        } if (this.columna == 4) {
          this.formEditor.get('tex').setValue(response['Asignatura'][0].bibliografia_desc);
        }
      });
  }
  enviarInformacion() {
  //  if (this.formEditor.invalid) {
//      alertify.error('Ingresa algún texto');
    //} else {
      this._asignaturaService.insertaEditor(this.idAsignatura, this.columna, this.formEditor.get('tex').value, this.jwt).subscribe(
        response => {
          console.log(response)
          alertify.success('Guardado correctamente');
        });
    //}
  }

  comienza(event) {
    let url = GLOBAL.url;
    let urlAssets = GLOBAL.urlAssets;

    let jwt = this.jwt;
    let idAsignatura = this.idAsignatura;

    event.editor.on('fileUploadRequest', function (evt) {
      var fileLoader = evt.data.fileLoader,
        formData = new FormData(),
        xhr = fileLoader.xhr;

      xhr.open('POST', url + 'extras/archivo/carga_ckeditor.php', true);
      //xhr.setRequestHeader('Content-type', "multipart/form-data");
      formData.append('jwt', jwt);
      formData.append('nom_carpeta', 'asignatura');
      formData.append('id', idAsignatura);
      formData.append('file', fileLoader.file, fileLoader.fileName);
      fileLoader.xhr.send(formData);
      evt.stop();
      // Prevented the default behavior.
    }, null, null, 4);

    event.editor.on('fileUploadResponse', function (evt) {
      // Prevent the default response handler.
      evt.stop();

      // Get XHR and response.
      var data = evt.data,
        xhr = data.fileLoader.xhr,
        response = xhr.responseText.split('|');
      console.log(response)

      if (response[1]) {
        // An error occurred during upload.          
        data.message = response[1];
        evt.cancel();
      } else {
        var msg = JSON.parse(response[0]);
        console.log(response[0])
        console.log(msg);
        data.url = urlAssets + msg.url;
      }
    });
  }

}
