import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { PreguntaService } from 'src/app/administracion/carga-actividades/services/pregunta.service';
import { TrDatosPreguntas } from 'src/app/models/learning/trDatosPreguntas';

declare var alertify;

@Component({
  selector: 'form-datos-pregunta',
  templateUrl: './form-datos-pregunta.component.html',
  styleUrls: ['./form-datos-pregunta.component.scss']
})
export class FormDatosPreguntaComponent implements OnInit {

  @Input() datosPregunta : TrDatosPreguntas;
  @Input() indexPregunta: number;
  @Input() idModulo : number;
  @Input() idActividad : number;
  @Input() actividad: any;
  ponderacionTotal : number = 100;
  @Output() sucessEvent = new EventEmitter<any>();
  tipoPregunta;
  jwt;
  preguntaForm: FormGroup;
  dificultad;
  idDatosPregunta;
  disableTipoPregunta: boolean;
  ponderacion: number;
  ponderacionMax: number;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _preguntaService: PreguntaService
  ) { }

  get f() { return this.preguntaForm.controls; }

  ngOnInit() {        
    let tipoPregunta, orden; //es necesario declararla con un valor de lo contrario no manda información
    this.ponderacionMax=this.ponderacionTotal;
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;

    if (this.datosPregunta){ //si existe un valor de actividad tomo el id_actividad para su posterior uso      
      this.idDatosPregunta = this.datosPregunta.datos_pregunta_id;
      this.ponderacion= parseInt(this.datosPregunta.ponderacion);
      tipoPregunta = this.datosPregunta.tipo_pregunta_id;
      this.disableTipoPregunta = true;
    }else{ //si no sólo declaro actividad como un elemento vacio, es necesario para el funcionamiento del formulario
      this.datosPregunta = new TrDatosPreguntas();
      tipoPregunta =  "";
      this.ponderacion = 0;
      this.disableTipoPregunta = false;
    }
    
    this.jwt = this._usuarioService.getJWT();

    this.preguntaForm = this.formBuilder.group({
      tipoPregunta: [{value:tipoPregunta, disabled: this.disableTipoPregunta}, Validators.required],
      orden: [orden],
    });

    this._preguntaService.consultaTipoPregunta(this.jwt,'2').subscribe(response =>{
      if(response && response['status']){        
        this.tipoPregunta = response['preguntas'];
        if (this.datosPregunta.tipo_pregunta_id) {          
          this.generateItems(this.datosPregunta.tipo_pregunta_id);          
        }else{
          this.valueChanges();
        }
      }
    },error =>{
      console.log(<any>error)
    });

    this._preguntaService.consultaDificultad(this.jwt).subscribe(response =>{
      if(response && response['status']){
        this.dificultad = response['dificultad'];
      }
    },error =>{
      console.log(<any>error)
    });  

    //this._actividadService.consultaPreguntas().
    this._preguntaService.sumaPonderacion(this.idActividad,this.jwt).subscribe(response =>{
      if(response && response['status']){
        this.ponderacionMax = this.ponderacionTotal - parseInt(response['ponderacionTotal']);
        if(this.ponderacionMax < 0) this.ponderacionMax = 0; 
        this.ponderacionMax = (this.ponderacionMax) + (this.ponderacion);
      }
    },error =>{
      console.log(<any>error)
    });


    this._preguntaService.preguntaEliminada.subscribe(
      response=>{
        let ponderacion = parseInt(response['ponderacion']);
        this.ponderacionMax = this.ponderacionMax + ponderacion;
      })
  }

  valueChanges(){
    this.preguntaForm.get('tipoPregunta').valueChanges.subscribe(value => {
      this.deleteControls();
      this.generateItems(value);
    })
  }

  deleteControls(){
    let controls = ['dificultad', 'ponderacion', 'aleatorio', 'retroalimentacion'];
    controls.forEach(control => {
      if (this.preguntaForm.get(control)) {
        this.preguntaForm.removeControl(control);
      }
    });
  }

  generateItems(value){    
    let pregunta = this.tipoPregunta.find(r => r.tipo_pregunta_id == value);
    let dificultad = 1;
    let ponderacion = "0";
    let aleatorio = 1;
    let retroalimentacion = "";   
    let validador = 'required' ;
    if (this.datosPregunta.tipo_pregunta_id) {
      dificultad = this.datosPregunta.dificultad_id;
      ponderacion = this.datosPregunta.ponderacion;
      aleatorio = this.datosPregunta.shuffle;
      retroalimentacion = this.datosPregunta.retroalimentacion;
    } 
    if (this.actividad.tipo_calificacion != "1") {
      validador = 'null';
    }
    this.preguntaForm.addControl('ponderacion', new FormControl( {value: ponderacion, disabled: false }, Validators.compose([Validators.min(0), 
      (control: AbstractControl) => Validators.max(this.ponderacionMax)(control), Validators[validador]]) ));   
    if (pregunta && pregunta.reactivos == '1') {
      this.preguntaForm.addControl('dificultad', new FormControl( dificultad ));
      this.preguntaForm.addControl('aleatorio', new FormControl( aleatorio, Validators.required ));
      this.preguntaForm.addControl('retroalimentacion', new FormControl( retroalimentacion ));
    }
  }

  enviarInformacionPregunta(){
    
    if (this.preguntaForm.invalid) {
      Object.keys(this.preguntaForm.controls).forEach( controlKey => {
        this.preguntaForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    this._preguntaService.modificaPregunta(this.preguntaForm,this.idActividad,this.idDatosPregunta,this.jwt).subscribe(
      response =>{
        if(response && response['status']){          
          alertify.success(response['msg'])          
          let idTipoPregunta = this.preguntaForm.get('tipoPregunta').value;
          let tipoPregunta = this.tipoPregunta.find( p => p.tipo_pregunta_id == idTipoPregunta);

          
          this.sucessEvent.emit({
            'status': response['status'], 
            "idDatosPregunta": response['idDatosPregunta'],
            "idTipoPregunta": tipoPregunta.tipo_pregunta_id,
            "reactivos": tipoPregunta.reactivos,
            "datos": this.preguntaForm.value
          });
            //si se insertó correctamente se le agrega la asignatura a la asignatura
        }else{
          alertify.error(response['msg'])
        }
    },error =>{
      console.log(<any>error)
    });

  }
}
