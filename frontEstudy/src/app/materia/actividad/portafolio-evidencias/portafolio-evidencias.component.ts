import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PortafolioEvidenciasService } from 'src/app/materia/actividad/services/portafolio-evidencias.service'
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { ActividadService } from 'src/app/materia/actividad/services/actividad.service';
import { MateriaService } from 'src/app/services/materia.service';

declare var alertify: any;

@Component({
  selector: 'portafolio-evidencias',
  templateUrl: './portafolio-evidencias.component.html',
  styleUrls: ['./portafolio-evidencias.component.scss']
})
export class PortafolioEvidenciasComponent implements OnInit {
 
  jwt: string;
  idRol: any;
  preguntas = [];
  zonas = [];
  principal = ["zona_preguntas"]
  connectedTo = [];

  textoPrueba = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  cargaArchivo: FormGroup;

  bandera: boolean = false;
  completo: boolean = false;

  actividades = [];
  idAsignatura;
  respuestas = [];
  idPortafolio;
  portafolio: any;

  respuestasAlumno = [];

  @Output() RespuestasAlumno = new EventEmitter<any>();
  @Input() edicion;
  @Input() idMateriaFechaActividad;
  @Input() idActividad;
  @Input() estatusActividad;
  @Input() fechaActividad;

  paso = 0;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService,
    private _portafolioService: PortafolioEvidenciasService,
    private _materiaService: MateriaService
  ) { }


  ngOnInit() {      
    this.jwt = this._usuarioService.getJWT();
    this.idRol = parseInt(this._usuarioService.getRol().rol_id);
    
    this.cargaArchivo = this.formBuilder.group({
      archivo: ['', [requiredFileType(2), Validators.required]],
      respuesta: ['', Validators.required]
    });
    this.getPreguntas(0);        
  }


  getPreguntas(id){
    this.preguntas = [];
    this._portafolioService.consultaActividades(this.idMateriaFechaActividad, this.jwt).subscribe(
      response => {
        console.log(response);
        
        if (response && response['status']) {
          this.preguntas = response['Actividades'];  
          // for (let i = 0; i < this.preguntas.length; i++) {
          //    this.preguntas[i].id = i + 1;
          //    this.preguntas[i].texto = this.textoPrueba;
          // }
          if (!id) {
            this.zonas = [{id:'zona_1', data: ['']}, {id:'zona_2', data: ['']}, {id:'zona_3', data: ['']}];
            this.connectedTo = ['zona_1', 'zona_2', 'zona_3'];
            // for (let i = 0; i < this.preguntas.length; i++) { 
            //   this.zonas.push({id:'zona_' + (i+1), data: ['']})
            // }
            // for (let _zona of this.zonas) {
            //   this.connectedTo.push(_zona.id)
            // };
          } 
          this.getRespuestas();     
        }
      }, error =>{
        console.log(<any>error);
    });
  }

  getRespuestas(){
    this._portafolioService.consultaRespuestas(this.idActividad, this.idMateriaFechaActividad, this.jwt).subscribe(response =>{
      if (response && response['status']) {
        
        this.portafolio = response['respuestas'];
        this.idPortafolio = response['respuestas'].portafolio_id;
        this.paso = response['respuestas'].paso;
        this.respuestasAlumno = response['respuestas'].respuesta_ponderacion;  
        let pregunta;
        this.respuestasAlumno.forEach(respuesta => {
          let preguntas = this.preguntas.slice();
          pregunta = preguntas.find(res => res.actividad_id === respuesta.actividad_id);          
          let calificacion;
          if (pregunta) {
            calificacion = pregunta.calificacion;
            respuesta.calificacion = calificacion;
          }          
        });

        this.zonas.forEach(zona => {
            zona.data[0] = this.respuestasAlumno[0].respuesta;
        });
                
        this.RespuestasAlumno.emit(this.respuestasAlumno); 
        if (this.fechaActividad.estatus_actividad_id == 7 && this.idRol != 3) {          
          for (let i = 0; i < this.respuestasAlumno.length; i++) {
            if (this.respuestasAlumno[i].data[0].validado == '0') {
              this.respuestasAlumno.splice(i,1)
            }
          } 
        }  
        
      }
      this._materiaService.actividadesCargadas.emit({cargado: true, componente: 'portafolio'})            
    }, error => {
      console.log(<any>error)
    });
  }

  get f() { return this.cargaArchivo.controls; }

  hasError( error: string ) {
    const control = this.cargaArchivo.get('archivo');
    return control.dirty && control.hasError(error);
  }

  drop(event: CdkDragDrop<string[]>, zone = "zona_preguntas") {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else {
      let contenedor;
      contenedor = this.zonas.find(zona => zona.id == zone);
        if (contenedor.data[0] == '') {
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            0);
        }
    }
  }
  
  borrarSeleccion(){
    this.getPreguntas(1);
    this.zonas.forEach(zona => {
      zona.data = [""];
    });
  }

  enviarPortafolio(){
    alertify.confirm('Enviar portafolio', '¿Deseas enviar el portafolio de evidencias?', function(){
    this.actividades = [];
    this.respuestas = [];
    this.completo = true;
    for (let i = 0; i < this.zonas.length; i++) {
      let id = 'texto_'+i+'_'+this.idMateriaFechaActividad;
      let texto = (<HTMLInputElement> document.getElementById(id)).value;
      if (texto.length == 0) {
        this.completo = false;
      }
    }
    for (const zona of this.zonas) {
      if (zona.data[0] === '') {
        this.completo = false;
      }
    }
    // if (this.completo && !this.idPortafolio) {
    if (this.completo) {
      this._portafolioService.crearPortafolio(this.idActividad, this.idMateriaFechaActividad, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            this.idPortafolio = response['idPortafolio'];
            for (let i = 0; i < this.zonas.length; i++) {
              let id = 'texto_'+i+'_'+this.idMateriaFechaActividad;
              let texto = (<HTMLInputElement> document.getElementById(id)).value;
              this.actividades.push(this.zonas[i].data[0].actividad_id);
              this.respuestas.push(texto);  
              
            }
            this.guardarPortafolio();
          }        
        }, error =>{
          console.log(<any>error);
      });
    }
    // else if (this.completo && this.idPortafolio) {
    //   console.log("Editar")
    // }
    else{
      alertify.error("Responde todas las preguntas").dismissOthers();
    }
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  guardarPortafolio(){
    this._portafolioService.guardarPortafolio(this.idMateriaFechaActividad, this.actividades, this.idPortafolio, this.respuestas, this.jwt)
    .subscribe(response => {
      if (response && response['status']) {
        alertify.success(response['msg']).dismissOthers();
        this._actividadService.actividadCompletada.emit();
        this.paso = 1;
        this.getRespuestas();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  enviaArchivo(){
    alertify.confirm('Enviar archivo', '¿Estás seguro que deseas enviar el archivo?', function(){
    this._portafolioService.guardarInformacion(this.idPortafolio, this.cargaArchivo, this.jwt).subscribe(
      response =>{
        if (response && response['status']) {
          // alertify.success(response['msg']).dismissOthers();
          this._portafolioService.finalizarPortafolio(this.idMateriaFechaActividad, this.jwt).subscribe(
            response =>{
              if (response && response['status']) {
                alertify.success("Portafolio finalizado correctamente").dismissOthers();
                this.getRespuestas();
              }
            }, error => {
              console.log(<any>error);
          });
        }
      }, error => {
        console.log(<any>error);
    });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });

  }

  validarRespuesta(id){
    let buscaValidado = this.respuestasAlumno[id].validado;
    let actividadId = this.respuestasAlumno[id].actividad_id;
    let portafolioId = this.respuestasAlumno[id].portafolio_id;
    let validado;
    if (buscaValidado == '0') {
      validado = '1';
      this.respuestasAlumno[id].validado = '1';
    }else if (buscaValidado == '1') {
      validado = '0';
      this.respuestasAlumno[id].validado = '0';
    }
    this.RespuestasAlumno.emit(this.respuestasAlumno); 
    this._portafolioService.validaRespuesta(actividadId, portafolioId, validado, this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          //alertify.success("Respuesta validada").dismissOthers();
        }
      }, error => {
        console.log(<any>error);
    });
  }

}
