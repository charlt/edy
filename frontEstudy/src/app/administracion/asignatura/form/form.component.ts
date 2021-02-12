import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsignaturaService } from '../services/asignatura.service';
import { CarreraService } from '../../carrera/services/carrera.service';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormAsignaturaComponent implements OnInit {
  @Input() idAsignatura;
  @Input() tipoForm; //1  select y 0 s/select
  @Input() idPlanOrdenSelected;

  asignaturaForm: FormGroup;
  carreraAsignatura;
  jwt: string;
  carreras;
  title: string;
  asignaturas;
  planesEstudio;
  Asignaturas;
  asignaturasPlan;
  estatusPlan: boolean = false;
  idPlanEstudios;
  tipoAdmin;
  asignaturasGeneral;
  repetida = false;
  idCarrera;
  grados;
  @Output() sucessEvent = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private _asignaturaService: AsignaturaService,
    private _carreraService: CarreraService
  ) {
    if (this.idAsignatura)
      this.title = 'Editar elemento';
    else
      this.title = 'Nuevo elemento';

    this._usuarioService.pushBreadcum(this.title, "", 2);


  }

  get f() { return this.asignaturaForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    this.consultaPlan();


    if (identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;;

    if (this.idAsignatura === undefined) this.idAsignatura = null;
    if (this.tipoForm == 1) {
      this.idPlanEstudios = this.route.snapshot.paramMap.get('id');
      this.idCarrera = this.route.snapshot.paramMap.get('id2');

      this.consultamateriasPlan();
    }
    this._catalogoService.consultatipoAsignatura('').subscribe(
      response => {
        if (response && response['status']) {
          this.asignaturas = response['asignaturas'];

        }

      }, error => {
        console.log(<any>error)
      });

    this._catalogoService.consultaCarrera('').subscribe(
      response => {
        if (response && response['status']) {
          this.carreras = response['carreras'];
        }

      }, error => {
        console.log(<any>error)
      });




    this.asignaturaForm = this.formBuilder.group({
      //catCarreras:   ['', Validators.required],
      //catPlanEstudio:   ['', Validators.required],
      claveAsignatura: ['', Validators.required],
      nombreAsignatura: ['', Validators.required],
      califMin: [''],
      califMax: [''],
      creditosAsignatura: ['', Validators.required],
      tipoAsignatura: ['', Validators.required],
      asignaturaPlan: [''],
      gradoAsignatura: [''],
      planEstudio: ['']
    });

    if (this.idAsignatura) {
      this.asignaturaForm.controls.gradoAsignatura.setValidators(Validators["required"])
      this.asignaturaForm.controls.gradoAsignatura.reset();
      this.asignaturaForm.get('gradoAsignatura').setValue("");

      this.asignaturaForm.controls.planEstudio.setValidators(Validators["required"])
      this.asignaturaForm.controls.planEstudio.reset();
      this.asignaturaForm.get('planEstudio').setValue("");
    } else {
      this.asignaturaForm.controls.gradoAsignatura.setValidators(Validators["null"])
      this.asignaturaForm.controls.gradoAsignatura.reset();
      this.asignaturaForm.get('gradoAsignatura').setValue("");

      this.asignaturaForm.controls.planEstudio.setValidators(Validators["null"])
      this.asignaturaForm.controls.planEstudio.reset();
      this.asignaturaForm.get('planEstudio').setValue("");
    }


    this.asignaturaForm.get('claveAsignatura').valueChanges.subscribe(value => {
      if (this.asignaturaForm.get('claveAsignatura').value) {
        this.consultaAsignatura();
      } else {
        this.asignaturaForm.get('claveAsignatura').setErrors({ invalid: true });
        this.repetida = false;
      }
    });

    //this.asignaturaForm.get('carreraAsignatura').disable();



    if (this.idAsignatura != null) {
      this._asignaturaService.consulta('', this.idAsignatura).subscribe(
        response => {
          if (response && response['status']) {
            this.Asignaturas = response['Asignatura'][0];
            this.asignaturaForm.get('claveAsignatura').setValue(this.Asignaturas.asignatura_clave);
            this.asignaturaForm.get('nombreAsignatura').setValue(this.Asignaturas.asignatura);
            this.asignaturaForm.get('creditosAsignatura').setValue(this.Asignaturas.creditos);
            this.asignaturaForm.get('tipoAsignatura').setValue(this.Asignaturas.tipo_asignatura_id);
            this.asignaturaForm.get('califMin').setValue(this.Asignaturas.calif_min);
            this.asignaturaForm.get('califMax').setValue(this.Asignaturas.calif_max);
            this.asignaturaForm.get('planEstudio').setValue(this.Asignaturas.plan_estudio_id);
            if (this.tipoForm == 1) this.asignaturaForm.get('asignaturaPlan').setValue(this.Asignaturas.asignatura_padre_id);
            if (this.Asignaturas.plan_estudio_id) {
              this._asignaturaService.consultaOrden(this.Asignaturas.plan_estudio_id).subscribe(
                response => {
                  if (response && response['status']) {
                    this.grados = response['ordenJerarquico'];
                    this.asignaturaForm.get('gradoAsignatura').setValue(this.Asignaturas.orden_jerarquico_id);
                  }
                }, error => {
                  console.log(<any>error)
                });
            }
          }
        }, error => {
          console.log(<any>error)
        });

    }
  }

  consultaAsignatura() {
    this._catalogoService.consultaAsignaturaTabla('').subscribe(
      response => {
        if (response && response['status']) {
          this.asignaturasGeneral = response['Asignaturas'];
          for (let index = 0; index < this.asignaturasGeneral.length; index++) {
            if (this.asignaturasGeneral[index]['asignatura_id'] == this.idAsignatura) {
              this.asignaturasGeneral.splice(index, 1)
            }
          }
          this.materiaRepetida();
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaOrdenJerarquico() {
    this.grados = [];
    if (this.asignaturaForm.get('planEstudio').value) {
      let plan_estudios_id = this.asignaturaForm.get('planEstudio').value;
      this.asignaturaForm.get('gradoAsignatura').setValue("");
      this._asignaturaService.consultaOrden(plan_estudios_id).subscribe(
        response => {
          if (response && response['status']) {
            this.grados = response['ordenJerarquico'];
          }
        }, error => {
          console.log(<any>error)
        });
    } else {
      this.grados = [];
      alertify.error('Debes seleccionar primero un plan de estudios')
    }
  }

  materiaRepetida() {
    let clave = this.asignaturaForm.get('claveAsignatura').value
    this.asignaturasGeneral.forEach(asignatura => {
      if (clave == asignatura.asignatura_clave) {
        console.log(asignatura);

        this.repetida = true;
        this.asignaturaForm.get('claveAsignatura').setErrors({ invalid: true });
      }
    });
  }

  consultamateriasPlan() {
    this._asignaturaService.consultaMateriasPlan(this.idPlanEstudios).subscribe(
      response => {
        if (response && response['status']) {
          this.asignaturasPlan = response['asignaturas'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaPlan() {
    this._catalogoService.consultaPlanEstudios('').subscribe(
      response => {
        if (response && response['status']) {
          this.planesEstudio = response['planEstudio'];
        } else {
          this.planesEstudio = [];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  enviarInformacion() {
    if (this.asignaturaForm.invalid) {
      Object.keys(this.asignaturaForm.controls).forEach(controlKey => {
        this.asignaturaForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._asignaturaService.modificaAsignatura(this.asignaturaForm, '', this.idAsignatura).subscribe(
      response => {
        if (response && response['status']) {
          //this.router.navigate(['admin/asignatura/consulta']);
          this.sucessEvent.emit(response['idAsignatura']);//si se insertó correctamente se le agrega la asignatura a la asignatura
          alertify.success(response['msg']);
          if(!this.idAsignatura){
            this.insertaAsignatura(response['idAsignatura']);
          }
        } else {
          this.sucessEvent.emit(response['idAsignatura']); //si no se devuelve un id igual a 0
          alertify.error(response['msg'])
        }

      }, error => {
        console.log(<any>error)
      });

    if (this.asignaturaForm.invalid) {
      return;
    }
  }

  insertaAsignatura(idAsignatura) { //ins inter_orden_asignatura
    this._asignaturaService.insertaPlanOrdenAsignatura(this.idPlanOrdenSelected, idAsignatura, this.asignaturaForm,1).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg'])
        } else {
          alertify.error(response['msg'])
        }
      }, error => {
        console.log(<any>error)
      });
  }
}



