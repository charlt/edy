import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RetroalimentacionService } from './services/retroalimentacion.service';
import { ActividadService } from 'src/app/materia/actividad/services/actividad.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requiredFileType } from '../../components/file-upload/file.upload.validators';
import { GLOBAL } from '../../services/global';


declare var alertify;

@Component({
  selector: 'retroalimentacion',
  templateUrl: './retroalimentacion.component.html',
  styleUrls: ['./retroalimentacion.component.scss']
})
export class RetroalimentacionComponent implements OnInit {
  jwt;
  url;
  idRol;
  retro;
  texto;
  origen;
  idRetro;
  mensaje;
  cargando;
  actividad;
  idPersona;
  visto
  muestraCheckbox = true;
  cambioCheck = 0;

  title: string;
  fechaActividad;
  contForm: FormGroup;
  openFile: boolean = false;

  @Input() idMateria;
  @Input() idActividad;
  @Input() idMateriaFechaActividad;



  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _retroService: RetroalimentacionService,
    private _actividadService: ActividadService,
  ) { }

  get f() { return this.contForm.controls; }


  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();
    let identity = this._usuarioService.getIdentity();
    let rol = this._usuarioService.getRol()
    this.url = GLOBAL.urlAssets;
    this.idPersona = identity.persona_id;
    this.idRol = rol.rol_id;
    this.contForm = this.formBuilder.group({
      contenido: ['', requiredFileType(1)]
    });

    this.consultaMensajesRetro();

    /*this._actividadService.consulta(this.idActividad,this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.actividad = response['actividad'][0];
          }
    });*/

  }
  abreArchivo() {
    if (this.openFile == false) this.openFile = true
    else if (this.openFile == true) this.openFile = false
  }

  consultaMensajesRetro() {
    let mensajesTemp = [];
    this._retroService.consulta(this.idMateria, this.idActividad).subscribe(
      response => {
        if (response && response['status']) {
          this.mensaje = response['mensajes'];
          // mensajesEntrantes = this.mensaje
          this.mensaje.forEach(_mensaje => {
            _mensaje.fecha_creacion = new Date((_mensaje.fecha_creacion) * 1000);
            let cadena = String(_mensaje.url_imagen)
            let ext = cadena.split(".")
            if (ext[1] == 'mp3' || ext[1] == 'm4a' || ext[1] == 'mp4' || ext[1] == 'wav' || ext[1] == 'wma') _mensaje.fondo = false;
            else _mensaje.fondo = true;

            if(_mensaje.visto == 0 && _mensaje.origen != this.idRol){ //revisa cuantos no vistos hay 
              mensajesTemp.push(_mensaje)
            }
          });

          // mensajesEntrantes.forEach(_mensaje => {
          //   if(_mensaje.visto == 0 && _mensaje.origen != this.idRol){ //revisa cuantos no vistos hay 
          //     mensajesTemp.push(_mensaje)
          //   }
          // });
          if(mensajesTemp.length == 0){ 
            this.cambioCheck = 0;
          }else{
            this.cambioCheck = mensajesTemp.length;
          }
          
        }
        let tamMensajes = this.mensaje.length;
        if(this.mensaje[tamMensajes -1]['origen'] == this.idRol){
          this.muestraCheckbox = false;
        }else{
          if(this.mensaje[tamMensajes -1]['visto'] == 1){this.visto = 1}
          else{this.visto = 0}
        }
      });
  }

  enviar(texto) {
    this.cargando = true;
    let archivo = this.contForm.get('contenido').value;
    if (texto && texto != '' || archivo) {
      this._retroService.enviar(this.idMateriaFechaActividad, this.idPersona, this.texto, this.idRol, this.jwt, this.idRetro, this.contForm, this.idMateria, this.idActividad).subscribe(
        response => {
          if (response && response['status']) {
            this.texto = "";
            this.openFile = false;
            this.cargando = false;
            this.muestraCheckbox = false;
            this.cambioCheck = this.cambioCheck++;
            this.visto=0
            this.consultaMensajesRetro();
            this.contForm.get('contenido').setValue('')
            if (response['idRetro']) {
              this.idRetro = response['idRetro'];
            }
          } else {
            alertify.error('Error al enviar').dismissOthers();
          }
        }, error => {
          console.log(error)
        }
      );
    }
  }

  cambiaVistoMensaje(){
    if(this.visto)this.visto =1;
    else if(!this.visto)this.visto=0
    this._retroService.cambiaVisto(this.idRol,this.idMateria, this.idActividad, this.visto, this.cambioCheck).subscribe(
      response => { 
        if (response && response['status']){
          this.cambioCheck = this.cambioCheck++;
          alertify.success(response['msg']);
        }

        if(this.cambioCheck >=1){
          this.cambioCheck = 0;
        }else if(this.cambioCheck == 0){
          this.cambioCheck = 1
        }
        // this.consultaMensajesRetro();
      });
  }
}
