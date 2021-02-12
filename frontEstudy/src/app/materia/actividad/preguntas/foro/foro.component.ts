import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForoService } from './foro.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TrFrRespuesta } from 'src/app/models/learning/trFrRespuesta';
import { simpleEditor } from '../../../../models/simpleEditor';
import { requiredFileType } from '../../../../components/file-upload/file.upload.validators';


declare var alertify;

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
 
  Data: any;
  simpleEditor = simpleEditor;

  foroForm: FormGroup;
  jwt: string;
  respuesta;
  respuestaInicial;
  respuestas: Array<TrFrRespuesta> = new Array<TrFrRespuesta>();
  numRespuestas = 0;
  respuesta_padre_id;
  persona_id;
  id_respuesta;
  fecha;
  identity;
  date;
  _actual;
  usuario;
  tipoResp = 0;
  buttonName1: boolean = true;
  buttonName2: boolean = true;
  buttonName3: boolean = true;
  buttonName4: boolean = true;
  ultimaRespuesta;
  parametro;
  identRol;
  color;
  ancho;
  alto;
  selectAlumno = [];
  muestraCK = true;
  show: boolean = false;

  tiempo = new Date();

  pregunta;
  idMateriaFechaActividad;
  idEstatusActividad;
  rol;
  idPregunta;
  idAlumno;
  @Output() actividadCargada = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private _foroService: ForoService,
    private _usuarioService: UsuarioService
  ) { }

  get f() { return this.foroForm.controls; }

  ngOnInit() {
    this.pregunta = this.Data.pregunta;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.idEstatusActividad = this.Data.idEstatusActividad;
    this.idAlumno = this.Data.idAlumno;

    this.rol = this._usuarioService.getRol();
    this.ancho = 25
    this.alto = 25
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.persona_id = this.identity.persona_id;
    this.idPregunta = this.pregunta.pregunta_id;
    this.foroForm = this.formBuilder.group({
      contenido: ['', requiredFileType(0)],
      solicitaRevision: [ this.idEstatusActividad == '1' && this.rol.rol_id == '2' ? true : false]
    });

    if(this.rol.rol_id == 3){
      this.editorCargado(0)  
      this.cambiaResp(1);
    }else{
      this.setRespuestas();
    }
    
  }

  setRespuestas() {
    let datosForo = this.pregunta.arreglo_reactivos;
    if (datosForo.respuesta) {
      if (this.tipoResp == 0) {
        this.respuestas = datosForo['respuesta'];
      } else if (this.tipoResp == 1) {
        this.respuestas = [];
        let _respuestas = datosForo['respuesta'];
        _respuestas.forEach(_respuesta => {
          if (_respuesta.persona_id == this.idAlumno || _respuesta.persona_id == this.persona_id) {
            this.respuestas.push(_respuesta);
            this.numRespuestas++;
          }
        });
      } 
    }
  }

  toggle(check) {
    if (check == 0) {
      this.buttonName1 = !this.buttonName1
    }
    if (check == 1) {
      this.buttonName2 = !this.buttonName2
    }
    if (check == 2) {
      this.buttonName3 = !this.buttonName3
    }
    if (check == 3) {
      this.buttonName4 = !this.buttonName4
    }
  }

  btnDesplegar(index) {
    let id;
    if (!this.respuestas[index].statusTextArea) {
      this.respuestas[index].statusTextArea = 1;
      this.respuestas[index].statusTextEdita = 0;
      this.respuesta = ""
      this.respuesta_padre_id = this.respuestas[index].respuesta_id
      this.id_respuesta = null;
      // conversion
      id = this.respuestas[index].respuesta_id.toString();
      document.getElementById(id).scrollIntoView();
    } else {
      this.respuestas[index].statusTextArea = 0;
    }
  }

  btnEditar(index) {
    if (!this.respuestas[index].statusTextEdita) {
      this.respuestas[index].statusTextEdita = 1;
      this.respuestas[index].statusTextArea = 0;
      this.id_respuesta = this.respuestas[index].respuesta_id
      this.respuesta = this.respuestas[index].respuesta
      this.respuesta_padre_id = null
    } else {
      this.respuestas[index].statusTextEdita = 0;
    }
  }

  btnEditarSub(indexi, indexj) {
    if (!this.respuestas[indexi].sub_respuesta[indexj].statusTextEdita) {

      this.respuestas[indexi].sub_respuesta[indexj].statusTextEdita = 1;
      this.id_respuesta = this.respuestas[indexi].sub_respuesta[indexj].respuesta_id
      //this.persona_id = this.respuestas[indexi].sub_respuesta[indexj].persona_id
      this.respuesta = this.respuestas[indexi].sub_respuesta[indexj].respuesta
      this.respuesta_padre_id = this.respuestas[indexi].pregunta_id

    } else {
      this.respuestas[indexi].sub_respuesta[indexj].statusTextEdita = 0;
    }
  }

  enviarInformacion(diff) {
    if (diff == 0) {
      if (this.respuestaInicial != "") {
        this.respuesta_padre_id = null;
        this._foroService.insertaRespuesta(this.foroForm, this.idPregunta, this.respuestaInicial, this.respuesta_padre_id, this.id_respuesta, this.idMateriaFechaActividad, this.rol.rol_id).subscribe(
          response => {
            if (response && response['status']) {
              alertify.success(response['msg'])
              this.consulta();
              this.respuestaInicial = ""
              scrollTo(0, 99999);
              this.foroForm.get('contenido').setValue('')
            } else {
              alertify.error(response['msg'])
            }
          }, error => {
            console.log(<any>error)
          });
      } else {
        alertify.error('Ingresa una respuesta');
      }
    }
    if (diff == 1) {
      if (this.respuesta != "") {
        this._foroService.insertaRespuesta(this.foroForm, this.idPregunta, this.respuesta, this.respuesta_padre_id, this.id_respuesta, this.idMateriaFechaActividad, this.rol.rol_id).subscribe(
          response => {
            if (response && response['status']) {
              alertify.success(response['msg'])
              this.consulta();
              this.foroForm.get('contenido').setValue('')
            } else {
              alertify.error(response['msg'])
            } this.foroForm.reset('contenido')
          }, error => {
            console.log(<any>error)
          });
      } else {
        alertify.error('Ingresa una respuesta');
      }
    }
  }

  cambiaResp(_tipoResp) {
    this.tipoResp = _tipoResp;
    // this.consulta();
    this.setRespuestas();
  }


  consulta() {
    let contador = 0;
    this._foroService.consultaRespuesta(this.idPregunta, this.idMateriaFechaActividad).subscribe(
      response => {
        if (response && response['status']) {
          // response['respuesta'].forEach(_resp => {
          //   contador = contador + 1; 
          //   _resp.idCK = contador.toString() 
          // });
          
          if (this.tipoResp == 0) {
            this.respuestas = response['respuesta'];
          } else if (this.tipoResp == 1) {
            this.respuestas = [];
            let _respuestas = response['respuesta'];
            _respuestas.forEach(_respuesta => {
              if (_respuesta.persona_id == this.idAlumno || _respuesta.persona_id == this.persona_id) {
                this.respuestas.push(_respuesta);
                this.numRespuestas++;
              }
            });

          }
          // console.log(this.respuestas)
          // this.ultimaRespuesta = this.respuestas[this.respuestas.length-1].respuesta_id
          // this.respuestas.forEach(_respuestas =>{
          //   let subRespuestaId = _respuestas.sub_respuesta[_respuestas.sub_respuesta.length-1].respuesta_id
          //   if(this.ultimaRespuesta < subRespuestaId){
          //     this.ultimaRespuesta = subRespuestaId
          //   }
          // });    
        }
      }, error => {
        console.log(<any>error)
      });

    this.fecha = new Date();
  }

  horaPregunta(fecha_creacion) {
    let horarioPregunta
    this.date = new Date(fecha_creacion)

    this._actual = new Date(); // var actual = new Date(_actual);

    var diffMs = (this._actual.getTime() - this.date.getTime());
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    var diffSg = Math.floor((((diffMs % 86400000) % 3600000) / 60000) / 60);
    if (diffDays > 0) {
      horarioPregunta = 'Hace ' + diffDays + ' días'
    } else if (diffDays == 0 && diffHrs > 0) {
      horarioPregunta = 'Hace ' + diffHrs + ' horas'
    } else if (diffDays == 0 && diffHrs == 0 && diffMins > 0) {
      horarioPregunta = 'Hace ' + diffMins + ' minutos'
    }
    else if (diffDays == 0 && diffHrs == 0 && diffMins == 0) {
      horarioPregunta = 'Ahora'
    }
    return horarioPregunta
  }

  editorCargado(evt: any) {
    if (this.rol.rol_id !=3) {
      this.show = true;
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
      this.show = true;
    }else{
      this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
      this.show = true;
    }
  }

}
