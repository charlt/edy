import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from '../services/encuesta.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FechaService } from 'src/app/services/fecha.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { AvisosAdminService } from '../../avisos-admin/avisos-admin.service';

declare var alertify: any;

@Component({
  selector: 'app-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.scss']
})
export class FormSwitchComponent implements OnInit {

  @Input() idEncuesta: number;
  @Output() success = new EventEmitter<any>();
  @Input() tipoForm; // 0 -> encuesta / 1 -> avisos
  @Input() idAviso;
  @Input() idAsignaturaGrupo;

  formSwitch: FormGroup;
  today = this.calendar.getToday();
  tipoAdmin;
  id_encuesta;
  switch_encuesta_id;
  encuesta;
  direcciones;
  disabled: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private _encuestaService: EncuestaService,
    private calendar: NgbCalendar,
    private _fechaService: FechaService,
    private _usuarioService: UsuarioService,
    private route:  ActivatedRoute,
    private _avisosService: AvisosAdminService
  ) { }

  get sF() { return this.formSwitch.controls }
  get fS() { return this.formSwitch.controls }

  ngOnInit() {    
    let identity = this._usuarioService.getIdentity();
    this.id_encuesta = this.route.snapshot.params['id'];
    this.switch_encuesta_id = this.route.snapshot.params['id2'];

    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;

    this.formSwitch = this.formBuilder.group({
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]
    });

    if(this.tipoForm == 1){
      this.formSwitch.controls.fecha_inicio.setValidators(Validators["null"])
      this.formSwitch.controls.fecha_inicio.updateValueAndValidity();
      this.formSwitch.controls.fecha_fin.setValidators(Validators["null"])
      this.formSwitch.controls.fecha_fin.updateValueAndValidity();
    }

    if (this.id_encuesta && this.switch_encuesta_id) {
      this.consultaEspecifica();
    }
    this.direccion();
  }

  consultaEspecifica(){
    this._encuestaService.consultaSwitchEncuesta(this.idEncuesta, this.switch_encuesta_id).subscribe(response => {
      if (response && response['status']){
        this.encuesta = response['encuesta'];
        let asignatura = this.encuesta[0].asignatura
        if (asignatura) {
          this.encuesta = asignatura
        }
        // console.log(this.encuesta);
      }
    });
  }
  
  eliminaSwitch(switch_aviso_id, index){
    alertify.confirm('', '¿Deseas eliminar el aviso para este destino?', function(){
      this._avisosService.eliminaSwitchAviso(switch_aviso_id).subscribe(response => {
        if (response && response['status']){
          this.direcciones.splice(index, 1);
          alertify.success(response['msg']);
        }
      });      
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});  
  }

  direccion(){
    this._avisosService.consultaDireccion(this.idAviso).subscribe(response => {
      if (response && response['status']){
        this.direcciones = response['avisos'];
        this.direcciones.forEach(direccion => {
          if(direccion.fecha_creacion)direccion.fecha_creacion = new Date((direccion.fecha_creacion)*1000);
        });
        console.log(this.direcciones);
      }
    });
  }

  enviarDatos() {
    let id_rol = this.formSwitch.get('rol').value;
    let id, variable;
    let fecha_inicio = this._fechaService.formatoFecha(this.formSwitch.get('fecha_inicio').value, '', 1) + ' 00:00:00';
    let fecha_fin = this._fechaService.formatoFecha(this.formSwitch.get('fecha_fin').value, '', 1) + ' 23:59:59';

    if (!this.idAsignaturaGrupo) {
      let nivel = this.formSwitch.get('nivel').value;

      switch (nivel) {
        case 2:
          id = this.formSwitch.get('plan_estudio_id').value;
          variable = 'id_plan_estudio';
          break;
        case 3:
          id = this.formSwitch.get('plan_orden_id').value;
          variable = 'id_plan_orden';
          break;
        case 4:
          id = this.formSwitch.get('orden_asignatura_id').value;
          variable = 'id_orden_asignatura';
          break;
        case 5:
          id = this.formSwitch.get('grupo').value;
          variable = 'id_grupo';
          break;
        case 6:
          id = this.formSwitch.get('grupo_asignatura').value;
          variable = 'id_asignatura_grupo';
          break;
        case 7:
          id = undefined;
          variable = undefined;
          break;
        default:
          id = '';
          break;
      }
    }else{
      id = this.idAsignaturaGrupo;
      variable = 'id_asignatura_grupo';
    }

    this._encuestaService.guardaInformacion(variable, id, this.idEncuesta, id_rol, fecha_inicio, fecha_fin, this.tipoForm, this.idAviso).subscribe(response => {
      if (response && response['status']) {
        this.direccion();
        this.success.emit({ completo: true });
        alertify.success(response['msg']).dismissOthers();
      }
    });
  }

  setData(id, data){
    if (id == 1) {
      this.formSwitch.get('fecha_inicio').setValue(data);
    } else {
      this.formSwitch.get('fecha_fin').setValue(data);
    }
  }

  disableForm(evt: any) {
    this.disabled = !evt;
  }

}
