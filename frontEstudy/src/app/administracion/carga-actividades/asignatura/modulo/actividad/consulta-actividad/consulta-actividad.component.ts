import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../../../../services/modulo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Location } from '@angular/common';
import { ActividadService } from '../../../../services/actividad.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocenteService } from 'src/app/services/docente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var alertify;

@Component({
  selector: 'app-consulta-actividad',
  templateUrl: './consulta-actividad.component.html',
  styleUrls: ['./consulta-actividad.component.scss']
})
export class ConsultaActividadComponent implements OnInit {

  jwt;
  idModulo;
  modulo;
  actividades;
  idActividadVistaPrevia;
  showDynamic;
  tipoAdmin;
  identity: any;
  catActividades: any;
  actividadForm: FormGroup;
  cargando: boolean = false;
  idRol: any;
  idAsignatura: any;

  constructor(
    private _actividadService: ActividadService,
    private _moduloService: ModuloService,
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _location: Location,
    private _modalService: NgbModal,
    private _docenteService: DocenteService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idModulo = params['id'];
      this.jwt = this._usuarioService.getJWT();
      this.consultaActividades();
      this.consultaModulo();
    });
    this.identity = this._usuarioService.getIdentity();
    if (this.identity.administrador)
      this.tipoAdmin = this.identity.administrador.edicion;
    else
      this.tipoAdmin = 1;

    this.idRol = this._usuarioService.getRol().rol_id;
    if (sessionStorage.getItem('idAsignaturaSelected') && this.idRol == 1)
      this.idAsignatura = sessionStorage.getItem('idAsignaturaSelected');
  }

  consultaModulo() {
    this._moduloService.consultaModulo(this.idModulo, this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          this.modulo = response['modulo'][0];
        }
      }, error => {
        console.log(error);
      }
    )
  }

  consultaActividades() {
    this._moduloService.consultaActividad(this.idModulo, 1,1).subscribe(
      response => {
        if (response && response['status']) {
          this.actividades = response['Actividades'];
          console.log(this.actividades);
        } else {
          this.actividades = [];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  vista_previa_actividad(content, idActividad) {
    this.idActividadVistaPrevia = idActividad;
    this.showDynamic = true;
  }


  dropActividad(event: CdkDragDrop<string[]>) {

    if(this.actividades[event.currentIndex].tipo_actividad_id == 5 ||this.actividades[event.previousIndex].tipo_actividad_id == 5) {
      alertify.error('No se puede ordenar el elemento de calificación')
    }else{
      let idActividad = this.actividades[event.previousIndex].actividad_id;
      let nuevoOrden = event.currentIndex + 1
  
      moveItemInArray(this.actividades, event.previousIndex, event.currentIndex);
  
      this._actividadService.orden(nuevoOrden, this.idModulo, idActividad, this.jwt).subscribe(
        response => {
          console.log(response)
          if (response && response['status']) {
            alertify.success(response['msg']);
          }
          else {
            alertify.success(response['msg']);
          }
  
        }, error => {
          console.log(<any>error)
        });
    }

    
  }

  eliminaActividad(id, j) {
    alertify.confirm("¿Deseas eliminar la actividad?",
      function () {
        this._actividadService.elimina(id, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.actividades.splice(j, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.success(response['msg']);
            }

          }, error => {
            console.log(<any>error)
          });
      }.bind(this),
      function () {
        alertify.error('Cancel');
      });
  }

  cambiaVisibleActividad(actividad_id, visto){
    let title;
    if(visto == 0){
      visto =1;
      title = '¿Deseas mostrar esta actividad a los alumnos?';
    }else if(visto ==1 ){
      visto =0;
      title = '¿Deseas ocultar esta actividad a los alumnos? Una vez oculta, los alumnos que la hayan contestado no podrán ver su calificación ni mensajes de esta actividad.'
    }
    alertify.confirm('', title, function(){
      this._actividadService.cambiaVisto(actividad_id, visto).subscribe(
        response => {
          if (response && response['status']){
            alertify.success(response['msg']).dismissOthers();
            this.consultaActividades();
          } else {
            alertify.error(response['msg']).dismissOthers();
          }
        }, error => {
          console.log(<any>error)
        });
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});  



  }

  reasignaCalificacion(actividad) {
    let id_actividad = actividad.actividad_id;
    let tipo_calificacion = actividad.tipo_calificacion;

    alertify.confirm('Reasignar calificación', '¿Deseas reasignar la calificación de la actividad?',
      function () {
        this._actividadService.reasignaCalificacionActividad(id_actividad, tipo_calificacion).subscribe(
          response => {
            if (response && response['status']) {
              alertify.success(response['msg']).dismissOthers();
            } else {
              alertify.error(response['msg']).dismissOthers();
            }
          }, error => {
            console.log(<any>error)
          });
      }.bind(this),
      function () {
        alertify.error('Cancelado');
      });
  }

  open(content) {
    this.catActividades = null;
    this.actividadForm = null;
    this.cargando = true;

    if (this.idRol == 1) {
      this._actividadService.consultaActividadesCompletas(this.idAsignatura).subscribe(
        response => {
          if (response && response['status']) {
            if (response['actividades'].length > 0) {
              this.actividadForm = this.formBuilder.group({
                id_actividad: ['', Validators.required]
              });
              this.catActividades = response['actividades'];
            }
            this.cargando = false;
          }
        }, error => {
          console.log(<any>error)
        });
    } else if (this.idRol == 3) {
      let idAsignatura = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura_id;
      this._docenteService.consultaActividades(this.identity.usuario, idAsignatura).subscribe(
        response => {
          if (response && response['status']) {
            if (response['actividades'].length > 0) {
              this.actividadForm = this.formBuilder.group({
                id_actividad: ['', Validators.required]
              });
              this.catActividades = response['actividades'];
            }
          }
          this.cargando = false;
        }, error => {
          console.log(<any>error);
        });
    }
    this._modalService.open(content, { backdrop: 'static', keyboard: false });

  }

  clonarActividad() {
    let id_actividad = this.actividadForm.get('id_actividad').value;
    this._docenteService.clonarActividad(id_actividad, this.idModulo).subscribe(
      response => {
        if (response && response['status']) {
          this.consultaActividades();
          this._modalService.dismissAll();
          alertify.success(response['msg']).dismissOthers();
        }
      }, error => {
        console.log(<any>error);
      });
  }

}