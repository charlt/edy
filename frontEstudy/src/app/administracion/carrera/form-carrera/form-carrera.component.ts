import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { CarreraService } from '../services/carrera.service';

declare var alertify;

@Component({
  selector: 'app-form-carrera',
  templateUrl: './form-carrera.component.html',
  styleUrls: ['./form-carrera.component.scss']
})
export class FormComponent implements OnInit {
  carreras;
  tipoAdmin;
  private jwt;
  private carrera;
  repetida = false;
  id_nivel_estudios;
  public nivelEstudios;
  public title: string;
  private idCarrera: string;
  public carreraForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private _carreraService: CarreraService
  ) {
    this.idCarrera = this.route.snapshot.paramMap.get('id');

    if (this.idCarrera)
      this.title = 'Editar carrera';
    else
      this.title = 'Nueva Carrera';

    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  get f() { return this.carreraForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    this.consultaCarreras()
    if (identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;;
    this._catalogoService.consultaNivelEstudios(this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          this.nivelEstudios = response['nivelEstudios'];
        }
      }, error => {
        console.log(<any>error)
      });

    this.carreraForm = this.formBuilder.group({
      claveCarrera: ['', Validators.required],
      nombreCarrera: ['', Validators.required],
      nivelEstudios: ['', Validators.required]
    });


    if (this.idCarrera != null) {
      this._carreraService.consulta(this.idCarrera, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            this.carrera = response['carreras'][0];
            this.carreraForm.get("claveCarrera").setValue(this.carrera.carrera_clave);
            this.carreraForm.get("nombreCarrera").setValue(this.carrera.carrera);
            this.carreraForm.get("nivelEstudios").setValue(this.carrera.nivel_estudios_id);
          }
        }, error => {
          console.log(<any>error)
        });
    }

    this.carreraForm.get('claveCarrera').valueChanges.subscribe(value => {
      if (this.carreraForm.get('claveCarrera').value) {
        this.carreraRepetida();
      } else {
        this.carreraForm.get('claveCarrera').setErrors({ invalid: true });
        this.repetida = false;
      }
    });
  }

  carreraRepetida() {
    let clave = this.carreraForm.get('claveCarrera').value
    this.carreras.forEach(carrera => {
      if (clave == carrera.carrera_clave) {
        this.repetida = true;
        this.carreraForm.get('claveCarrera').setErrors({ invalid: true });
      }
    });
  }

  consultaCarreras() {
    this._catalogoService.consultaCarrera(this.jwt).subscribe(
      response => {
        console.log(response);
        if (response && response['status']) {
          this.carreras = response['carreras'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  enviarInformacion() {
    // stop here if form is invalid

    this._carreraService.modificaCarrera(this.carreraForm, this.jwt, this.idCarrera, this.id_nivel_estudios).subscribe(
      response => {
        console.log(response)
        if (response && response['status']) {
          this.router.navigate(['admin/carrera/consulta']);
          alertify.success(response['msg'])
        } else {
          alertify.error(response['msg'])

        }

      }, error => {
        console.log(<any>error)
      });

    if (this.carreraForm.invalid) {
      return;
    }
  }
}