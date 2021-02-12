import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { CatalogoService } from '../../../services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from '../service/grupo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { OrdenJerarquicoService } from '../../plan-estudios/services/orden-jerarquico.service';


declare var alertify: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  idGrupo;
  grupoForm: FormGroup;
  title: string;
  jwt: string;
  grupos;
  ciclos;
  id_plan_orden;
  seleccionarAlumnos = false;
  asignaturas;
  alumnos;
  _mostrarCampus = false;
  itemsAlumno;
  itemsAsignatura;
  campus;
  public searchInput;
  cargando: boolean = false;
  tipoAdmin;
  public search: string;
  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _gruposService: GrupoService,
    private _ordenJerarquicoService: OrdenJerarquicoService,
    private _catalogoService: CatalogoService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.idGrupo = this.route.snapshot.paramMap.get('id');

    if (this.idGrupo)
      this.title = 'Editar grupo';
    else
      this.title = 'Nuevo grupo';

    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  get f() { return this.grupoForm.controls; }

  ngOnInit() {

    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;

    this.grupoForm = this.formBuilder.group({
      claveGrupo: ['', Validators.required],
      descripcion: [''],
      nombreGrupo: ['', Validators.required],
      completo: [0],
      cupo: ['', Validators.required],
      idCiclo: ['', Validators.required],
      seleccionaCampus: [''],
      campus: [''],
      alumnos: this.formBuilder.array([]),
      asignaturas: this.formBuilder.array([]),
      plan_orden_id: [''],
      search: ['']
    });

    this.grupoForm.get('search').valueChanges.subscribe(value => {


    });

    this.grupoForm.get('plan_orden_id').valueChanges.subscribe(x => {

      if (this.id_plan_orden && this.id_plan_orden != this.grupoForm.get('plan_orden_id').value) {
        this.grupoForm.get('completo').setValue(false);
        this.seleccionarAlumnos = false;
      }

    });

    this._catalogoService.consultaCiclo().subscribe(
      response => {
        console.log(response)
        if (response && response['status']) {
          this.ciclos = response['ciclo'];
        }
      }, error => {
        console.log(<any>error)
      });

    if (this.idGrupo != null) {

      this._gruposService.consultaEspecifica(this.idGrupo, this.jwt).subscribe(
        response => {
          console.log(response);
          if (response && response['status']) {
            this.grupos = response['grupo'][0];

            let idCampus = this.grupos.campus_id ? this.grupos.campus_id : '';
            let seleccionaCampus = this.grupos.campus_id ? '1':'';

            this.mostrarCampus();


            this.grupoForm = this.formBuilder.group({
              claveGrupo: [this.grupos.grupo, Validators.required],
              nombreGrupo: [this.grupos.nombre_grupo, Validators.required],
              descripcion: [this.grupos.descripcion, Validators.required],
              campus: [idCampus],
              seleccionaCampus: [seleccionaCampus],

              cupo: [this.grupos.cupo, Validators.required],
              completo: [''],
              plan_orden_id: [''],
              idCiclo: [this.grupos.ciclo_id, Validators.required]
            });
          }
        }, error => {
          console.log(<any>error)
        });
    }
  }

  mostrarCampus() {
    if (this._mostrarCampus == true) { this._mostrarCampus = false }
    else if (this._mostrarCampus == false) {
      this._mostrarCampus = true

      this._catalogoService.consultaCampus(this.jwt).subscribe(
        response => {
          console.log(response)
          if (response && response['status']) {
            this.campus = response['campus'];
          }
        }, error => {
          console.log(<any>error)
        });
    }
  }

  mostrarAlumnos(event) {
    this.id_plan_orden = this.grupoForm.get('plan_orden_id').value;

    this.limpiarTodosAsignatura();
    this.limpiarTodosAlumno();
    this.asignaturas = [];
    this.alumnos = [];



    if (this.grupoForm.get('completo').value) {


      this._ordenJerarquicoService.consultaAsignatura(this.id_plan_orden, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            this.asignaturas = response['asignatura'];
            this.asignaturas.forEach(function (asignatura, index) {
              this.agregarAsignatura(asignatura.orden_asignatura_id)
            }.bind(this));
            console.log(this.grupoForm.value);

          } else {
            this.asignaturas = []
          }
        }, error => {
          console.log(error);
        }
      );

      this._ordenJerarquicoService.consultaAlumnosSinGrupo(this.id_plan_orden, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            this.alumnos = response['alumnos'];
            //this.eliminarAlumno(0);
            this.alumnos.forEach(function (alumno) {
              this.agregarAlumno(alumno.alumno_id)
            }.bind(this));
          } else {
            this.alumnos = []
          }
          this.seleccionarAlumnos = true;
        }, error => {
          console.log(error);
        }
      );

    } else {
      this.seleccionarAlumnos = false;
    }
  }

  seleccionaOrden() {
  }

  get asignaturasArray(): FormArray {
    return this.grupoForm.get('asignaturas') as FormArray;
  }

  get alumnosArray(): FormArray {
    return this.grupoForm.get('alumnos') as FormArray;
  }

  agregarAlumno(idAlumno) {

    this.itemsAlumno = this.grupoForm.get('alumnos') as FormArray;
    this.itemsAlumno.push(this.crearAlumno(idAlumno));
  }

  agregarAsignatura(idOrdenAsignatura) {

    this.itemsAsignatura = this.grupoForm.get('asignaturas') as FormArray;
    this.itemsAsignatura.push(this.crearAsignatura(idOrdenAsignatura));
  }


  crearAlumno(idAlumno): FormGroup {
    return this.formBuilder.group({
      idAlumno: [idAlumno]
    });
  }

  crearAsignatura(idOrdenAsignatura): FormGroup {
    return this.formBuilder.group({
      idOrdenAsignatura: [idOrdenAsignatura]
    });
  }

  eliminarAsignatura(index) {
    this.itemsAsignatura.removeAt(index);
  }

  eliminarAlumno(index) {
    this.itemsAlumno.removeAt(index);
  }

  limpiarTodosAlumno() {
    this.grupoForm.removeControl('alumnos')
    this.grupoForm.addControl('alumnos', this.formBuilder.array([]));
  }

  limpiarTodosAsignatura() {

    this.grupoForm.removeControl('asignaturas')
    this.grupoForm.addControl('asignaturas', this.formBuilder.array([]));
  }



  enviarInformacion() {



    // stop here if form is invalid
    if (this.grupoForm.invalid) {
      Object.keys(this.grupoForm.controls).forEach(controlKey => {
        this.grupoForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this.cargando = true;
    this._gruposService.modificaGrupo(this.grupoForm, this.jwt, this.idGrupo).subscribe(
      response => {
        console.log(response)
        if (response && response['status']) {
          this.router.navigate(['admin/grupo/consulta']);
          alertify.success(response['msg']);
          this.cargando = false;
        } else {
          alertify.error(response['msg'])
        }

      }, error => {
        console.log(<any>error)
      });

  }

  setIdOrden(index, item) {
    setTimeout(() => {
      if (item.value.idOrdenAsignatura) {
        let id = this.asignaturas[index].orden_asignatura_id;
        this.asignaturasArray.controls[index]['controls']['idOrdenAsignatura'].setValue(id);
      }
    }, 10);
  }

  setIdAlumno(index, item) {
    setTimeout(() => {
      if (item.value.idAlumno) {
        let id = this.alumnos[index].alumno_id;
        this.alumnosArray.controls[index]['controls']['idAlumno'].setValue(id);
      }
    }, 10);
  }
}
