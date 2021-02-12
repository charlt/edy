import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from '../grupo/services/grupo.service';
import { ActivatedRoute } from '@angular/router';
import { AsistenciaAlumnoService } from './services/asistencia-alumno.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { concat } from 'rxjs';

declare var alertify;

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.component.html',
  styleUrls: ['./asistencia-alumno.component.scss']
})
export class AsistenciaAlumnoComponent implements OnInit {
  dia;
  mes
  title;
  clase;
  clases;
  alumnos;
  id_clase;
  fechaActual;
  pagina = 1;
  totalAlumnos;
  paginacion = 50;
  idAsignaturaGrupo;
  alumnoAsistencia = [];

  claseForm: FormGroup;

  @ViewChild('content') modal: NgbModalRef;


  constructor(
    private _usuarioService: UsuarioService,
    private _asistenciaAlumnoService: AsistenciaAlumnoService,
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.title = 'Asistencia';
    this._usuarioService.pushBreadcum(this.title, '', 1)
  }

  get f() { return this.claseForm.controls; }


  ngOnInit() {
    this.fechaActual = new Date();
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
    this.consultaAlumnos()
    let d = this.fechaActual.getDate();
    if(d <= 9){
      this.dia = '0'+d.toString();
    } else{
      this.dia = d.toString();
    }
    let m = this.fechaActual.getMonth()+1;
    if(m <= 9){
      this.mes = '0'+m.toString();
    }else{
      this.mes = m.toString();
    }
    let año = this.fechaActual.getFullYear().toString();
    let fecha = año+'-'+this.mes+'-'+this.dia;
    this.fechaActual = fecha;
    this.claseForm = this.formBuilder.group({
       nombreClase: ['', Validators.required],
       descClase:[''],
       fechaClase: [this.fechaActual, Validators.required]
     });
  }

  modificaAsistencia(persona_id, clase_id) { // i = alumnos j = clases
    this._asistenciaAlumnoService.creaInasistencia(persona_id, clase_id).subscribe(
      response =>{
        if(response && response['status']){
          alertify.success(response['msg']).dismissAll();
        }else{
          alertify.error(response['msg']).dismissAll();
        }

      }, error => {
        console.log(<any>error)
      });
  }

  consultaClase() {
    this._asistenciaAlumnoService.consultaClases(this.idAsignaturaGrupo).subscribe(
      response => {
        if (response && response['status']) {
          this.clases = response['clases'];
          this.clases.forEach((clase, i) => {
            if (!this.alumnoAsistencia[i]) this.alumnoAsistencia[i] = [];
            clase.fecha_clase = new Date((clase.fecha_clase) * 1000);
            this.alumnos.forEach((alumno, j) => {
              if (!this.alumnoAsistencia[i][j]) this.alumnoAsistencia[i][j] = true;
              clase.inasistencia.forEach((inasistencia, k) => {
                if (inasistencia.persona_id == alumno.persona_id) {
                  this.alumnoAsistencia[i][j] = false;
                }
              });
            });
          });

        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaEsp(clase_id) {
    this.id_clase = clase_id;
    this._asistenciaAlumnoService.consultaEspecifica(this.id_clase).subscribe(
      response => {
        if (response && response['status']) {
          this.clase = response['clase'];
          this.clase.fecha_clase = new Date((this.clase.fecha_clase)*1000);
          this.claseForm.get('nombreClase').setValue(this.clase.nombre_clase);
          if(this.clase.desc_clase != 'null'){
            this.claseForm.get('descClase').setValue(this.clase.desc_clase);
          }else{
            this.claseForm.get('descClase').setValue('');
          }
          this.clase.fecha_clase = new Date(this.clase.fecha_clase);
          let d = this.clase.fecha_clase.getDate();
          let dia;
          if(dia <= 9){
            dia = '0'+d.toString();
          }else{
            dia = d.toString();
          }
          let m = this.clase.fecha_clase.getMonth()+1;
          let mes;
          if(m <= 9){
            mes = '0'+m.toString();
          }else{
            mes = m.toString();
          }
          let año = this.clase.fecha_clase.getFullYear().toString();
          let fecha = año+'-'+mes+'-'+dia;
          this.claseForm.get('fechaClase').setValue(fecha);
          this.openModal(this.modal, 0);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaAlumnos() {
    // this.cargandoGrupo = true;
    let ini = (this.pagina - 1) * this.paginacion;
    let fin = this.pagina * this.paginacion;
    let tipoConsulta = 4
    let idAsignatura = '';
    this._grupoService.consultaAlumnos(this.idAsignaturaGrupo, idAsignatura, tipoConsulta, ini, fin).subscribe(
      response => {
        if (response && response['status']) {
          this.alumnos = response['Alumnos'];
          this.consultaClase();
        } else {
          this.alumnos = null;
        }
        // this.cargandoGrupo = false;
      },
      error => {
        console.log(error)
      }
    );
  }

  enviarInformacion(tipo) {
    let guarda = true;
    if (this.claseForm.invalid) {
      Object.keys(this.claseForm.controls).forEach(controlKey => {
        this.claseForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    let _fecha = new Date(this.claseForm.get('fechaClase').value);

    let _dia = _fecha.getDate() + 1;
    let _mes = _fecha.getMonth();
    let _año = _fecha.getFullYear();

    if (!this.id_clase) {
      if (this.clases) {
        this.clases.forEach(clase => {
          let diaClase = clase.fecha_clase.getDate();
          let mesClase = clase.fecha_clase.getMonth();
          let añoClase = clase.fecha_clase.getFullYear();

          if (_dia == diaClase && _mes == mesClase && _año == añoClase) {
            this.claseForm.get('fechaClase').setErrors({ invalid: true });
            guarda = false;
          }
        });
      }
    } else {
      this.clases.forEach(clase => {
        let diaClase = clase.fecha_clase.getDate();
        let mesClase = clase.fecha_clase.getMonth();
        let añoClase = clase.fecha_clase.getFullYear();

        let diaClaseOld = this.clase.fecha_clase.getDate();
        let mesClaseOld = this.clase.fecha_clase.getMonth();
        let añoClaseOld = this.clase.fecha_clase.getFullYear();

        if (_dia == diaClaseOld && _mes == mesClaseOld && _año == añoClaseOld) {
          guarda = true;
        }else if (_dia == diaClase && _mes == mesClase && _año == añoClase) {
          this.claseForm.get('fechaClase').setErrors({ invalid: true });
          guarda = false;
        }
      });
    }

    if (guarda == true) {
      this._asistenciaAlumnoService.creaClase(this.claseForm, this.idAsignaturaGrupo, this.id_clase).subscribe(
        response => {
          if (response && response['status']) {
            this.consultaClase();
            this.close();
            alertify.success(response['msg'])
          } else {
            alertify.error(response['msg'])
          }
        }, error => {
          console.log(<any>error)
        });
    } else {
      alertify.error('Fecha ya asignada a otra clase')
    }
  }

  openModal(content, tipo) {
    if (tipo == 1) {
      this.claseForm.get('nombreClase').setValue('Clase ' + this.dia + '/' + this.mes);
      this.claseForm.get('fechaClase').setValue(this.fechaActual);
      this._modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
    } else {
      this._modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false  });
    }
  }

  close() {
    this._modalService.dismissAll();
    this.claseForm.get('nombreClase').setValue('')
    // this.claseForm.get('fechaClase').setValue('')
    this.claseForm.reset()
    this.id_clase = null;
  }

}
