import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { CarreraService } from 'src/app/administracion/carrera/services/carrera.service';
import { PlanEstudiosService } from 'src/app/administracion/plan-estudios/services/plan-estudios.service';
import { ConsultaAsignaturaService } from './consulta-asignatura.service';
import { ConsultaAsignaturaModule } from './consulta-asignatura.module';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OrdenJerarquicoService } from 'src/app/administracion/plan-estudios/services/orden-jerarquico.service';


declare var alertify

@Component({
  selector: 'app-consulta-asignatura',
  templateUrl: './consulta-asignatura.component.html',
  styleUrls: ['./consulta-asignatura.component.scss']
})
export class ConsultaAsignaturaComponent implements OnInit, OnChanges {
  breadcum: [];
  public title: string;
  public fecha_inicio; //servicio
  public fecha_fin; //servicio
  public ponderacion; //servicio
  jwt: string;
  carreras: any;
  asignaturas;
  identificador;
  planEstudio;
  idOrdenAsignatura;
  ponderacionTotal = 0;
  _asignaturas;
  _actividades;
  actividad_padre_id;
  _identificador;
  response;
  ordJerarquicos;
  style: string;
  Data: Array<any>;
  Selects: Array<any> = [];
  @Output() sucessEvent = new EventEmitter<any>();
  @Input() tipo;
  @Input() nivel: number;
  @Input() parentForm: FormGroup;

  bandera: boolean = false;
  @Output() ready = new EventEmitter<any>();

  @Input() arrayData: any;
  @Output() completado = new EventEmitter<any>();


  constructor(
    private _translate: TranslateService,
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _catalogoService: CatalogoService,
    private _carreraService: CarreraService,
    private _ordenJerarquicoService: OrdenJerarquicoService,
  ) {
    this._translate.setDefaultLang('es');

  }

  ngOnInit() {
    this.nivel = this.nivel ? this.nivel : 4;
    this.jwt = '';
  }

  ngOnChanges() {
    setTimeout(() => {
      if (this.nivel > 4 && this.nivel < 7) {
        this.nivel = 3;
      }
      if (this.carreras) {
        this.bandera = false;
        this.deleteDatos();
      }
      if (this.nivel < 7 && !this.carreras) {
        this.consultaCarreras();
      }
      if (this.nivel == 7) {
        this.carreras = undefined;
        this.bandera = false;
        this.deleteDatos();
      }

    }, 1);
  }

  consultaCarreras() {
    this._catalogoService.consultaCarrera(this.jwt).subscribe(response => {
      if (response && response['status']) {
        this.carreras = response['carreras'];
        this.setDatos();
      }
    }, error => {
      console.log(<any>error)
    });
  }

  deleteDatos() {
    this.Selects = [];
    this.planEstudio = undefined;
    this.ordJerarquicos = undefined;
    this._asignaturas = undefined;
    this.parentForm.removeControl('carrera_id');
    this.parentForm.removeControl('plan_estudio_id');
    this.parentForm.removeControl('plan_orden_id');
    this.parentForm.removeControl('orden_asignatura_id');
    if (this.nivel < 7) {
      this.setDatos();
    }
  }

  setDatos() {
    this.Data = [
      { label: 'SelectCareer', function: 'planEstudio_', iterator: this.carreras, value: 'carrera_id', key: 'carrera' },
      { label: 'selectPlanEstudio', function: 'grado', iterator: this.planEstudio, value: 'plan_estudio_id', key: 'plan_estudio' },
      { label: 'Selecciona un grado', function: '_asignatura', iterator: this.ordJerarquicos, value: 'plan_orden_id', key: 'orden_jerarquico_descripcion' },
      { label: 'selectAsignatura', function: 'sendAsignatura', iterator: this._asignaturas, value: 'orden_asignatura_id', key: 'asignatura' },
    ];
    for (let i = 0; i < this.nivel; i++) {
      this.Selects.push(this.Data[i]);
      if (this.parentForm) {
        this.parentForm.addControl(this.Data[i]['value'], new FormControl('', Validators.required));
      }
    }
    switch (this.tipo) {
      case 'small':
        this.style = 'col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12';
        break;
      case 'medium':
        this.style = 'col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12';
        break;
      case 'large':
        this.style = 'col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12';
        break;
      default:
        this.style = 'col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12';
        break;
    }
    if (this.arrayData && this.arrayData['carrera_id']) {
      this.callFunction('planEstudio_', 'carrera_id');
    } else {
      this.ready.emit(true);
      this.bandera = true;
    }

  }

  planEstudio_(event, id = 0) {
    let idCarrera;
    if (id == 0) idCarrera = event.target.value;
    else if (id == 1) idCarrera = event;
    if (this.nivel > 1) {
      this.setErrors(1);
      this._carreraService.consultaPlanEstudios(idCarrera, this.jwt).subscribe(
        response => {
          this.idOrdenAsignatura = 0;
          if (response && response['status']) {
            this.planEstudio = response['plan'];
            this.Selects[1].iterator = this.planEstudio;
            if (id == 1) this.callFunction('grado', 'plan_estudio_id');
          } else {
            this.planEstudio = null;
            this.Selects[1].iterator = null;
          }
        }, error => {
          console.log(<any>error)
        });
    } else {
      this.sendOutput({ idCarrera: idCarrera });
    }
  }

  grado(event, id = 0) {
    let idPlanEstudio;
    if (id == 0) idPlanEstudio = event.target.value;
    else if (id == 1) idPlanEstudio = event;
    if (this.nivel > 2) {
      this.setErrors(2);
      this._catalogoService.consultaGrado(idPlanEstudio).subscribe(
        response => {          
          if (response && response['status']) {
            this.ordJerarquicos = response['ordenJerarquico'];
            this.Selects[2].iterator = this.ordJerarquicos;
            if (id == 1) this.callFunction('_asignatura', 'plan_orden_id');
          } else {
            this.ordJerarquicos = null;
            this.Selects[2].iterator = null;
          }
        }, error => {
          console.log(<any>error)
        });
    } else {
      console.log(idPlanEstudio);
      this.sendOutput({ idPlanEstudio: idPlanEstudio });
    }
  }

  _asignatura(event, id = 0) {
    let idOrdenJerarquico;
    if (id == 0) idOrdenJerarquico = event.target.value;
    else if (id == 1) idOrdenJerarquico = event;
    this.sendOutput({ idOrdenJerarquico: idOrdenJerarquico });
    if (this.nivel > 3) {
      this.setErrors(3);
      this._ordenJerarquicoService.consultaAsignatura(idOrdenJerarquico, this.jwt).subscribe(response => {
        this.idOrdenAsignatura = response['orden_asignatura_id'];        
        if (response && response['status']) {
          this._asignaturas = response['asignatura'];
          this.Selects[3].iterator = this._asignaturas;
          if (id == 1) this.callFunction('', 'orden_asignatura_id');
        } else {
          this._asignaturas = null;
          this.Selects[3].iterator = null;
        }
      }, error => {
        console.log(<any>error)
      });
    } else {
      this.sendOutput({ idOrdenJerarquico: idOrdenJerarquico, });
    }
  }

  sendAsignatura(event: any) {
    this.idOrdenAsignatura = event.target.value;
    let idAsignatura = 0;
    this._asignaturas.forEach(function (asignatura) {
      if (this.idOrdenAsignatura == asignatura.orden_asignatura_id) {
        idAsignatura = asignatura.asignatura_id;
      }
    }.bind(this));

    this.sendOutput({
      "idOrdenAsignatura": this.idOrdenAsignatura,
      "idAsignatura": idAsignatura
    });
  }

  sendOutput(object) {
    
     if (!this.parentForm) {
       this.sucessEvent.emit(object); 
     }else {
      if (this.parentForm.get('nivel')) {
        let nivel = this.parentForm.get('nivel').value;
        if (nivel != 5 && nivel != 6) this.completado.emit(true);
      }
    }
    this.sucessEvent.emit(object);
  }

  setErrors(level) {
    this.completado.emit(false);
    for (let i = level; i < this.nivel; i++) {
      if (this.parentForm) {
        this.parentForm.get(this.Selects[i]['value']).setValue('');
        this.Selects[i].iterator = null;
      } else {
        this.Selects[i].iterator = null;
      }
    }
    if (!this.parentForm && this.nivel == 4 && this.idOrdenAsignatura) {
      this.sendOutput({ change: true });
    }
  }

  callFunction(call, control) {
    if (call != '') this[call](this.arrayData[control], 1);
    if (this.parentForm) {
      this.parentForm.get(control).setValue(this.arrayData[control]);
    }
    if (control == 'orden_asignatura_id') {
      this.ready.emit(true);
      this.bandera = true
    }
  }

}
