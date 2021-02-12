import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from '../../../services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuariosService } from '../services/usuarios.service';
import { randomColor } from 'randomcolor';
import { Router } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  idUsuario;
  usuarioForm: FormGroup;
  title: string;
  jwt: string;
  usuarios;
  buttonDisabled: boolean = false;
  loading : boolean = false;
  errCURP: boolean = false;
  errCorreo: boolean = false;
  errUser: boolean = false;
  nuevo: boolean = true;
  roles;
  idPersona;
  idRol;
  color;
  msgUser = false;
  msgPassword = 0;
  searchChangeObserver;
  usuario;
  password;
  registroExitoso = false;
  areas;
  correo = 0;
  campus;
  tipoAdmin;
  selectedRol: string;
  coincidencias;
  carreras;


  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _usuariosService: UsuariosService,
    private _catalogoService: CatalogoService,
    public router: Router,
  ) {

    this.title = 'Nuevo usuario';

    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  get f() { return this.usuarioForm.controls; }

  ngOnInit() {
    if (sessionStorage.getItem('selectedRol'))
      this.selectedRol = sessionStorage.getItem('selectedRol');

    let identity = this._usuarioService.getIdentity();
    if (identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;
    this.color = randomColor();
    this.mostrarCampus();
    this._catalogoService.consultaRol(this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          if (this.selectedRol)
            this.roles = [response['rol'].find(r => r.rol == this.selectedRol)];
          else
            this.roles = response['rol'];
        }
        this.setForm();
      }, error => {
        console.log(<any>error)
      });
    this.consultaArea();
    this.consultaCarrera();
  }

  consultaCarrera(){
    this._catalogoService.consultaCarreraAspirantes().subscribe(
      response =>{
        if (response && response['status']) {
          this.carreras = response['carreras'];
          console.log(this.carreras);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  setForm() {
    this.usuarioForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      apPatUsuario: ['', Validators.required],
      apMatUsuario: [''],
      sexoUsuario: [''],
      fnUsuario: [''],
      celular: [''],
      forceUser: [false],
      muestraClave: [false],
      campusUs: [false],
      curpUsuario: ['', Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)],
      rfcUsuario: ['', Validators.pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)],
      correoUsuario: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      usuario: [''],
      passUsuario: [''],
      clave: [''],
      catRoles: [this.selectedRol ? this.roles.find(r => r.rol == this.selectedRol).rol_id : '', Validators.required],
      catArea: [''],
      tipoConsulta: [''],
      campus: [''],
      plan_orden_id: [''],
      carrera_id: [''],
      plan_estudio_id: [''],
      catCarreraAspirante: [''],
    });

    this.usuarioForm.get('curpUsuario').valueChanges.subscribe(value => {
      if (this.usuarioForm.get('curpUsuario').valid) {
        this.curp(value);
      } else {
        this.errCURP = false;
      }
    });

    this.usuarioForm.get('usuario').valueChanges.subscribe(value => {
      this.buscaUsuario(this.usuarioForm.get('usuario').value, 1);
    });

    this.usuarioForm.get('correoUsuario').valueChanges.subscribe(value => {
      this.buttonDisabled = false;
      this.errCorreo = false;
      if (this.usuarioForm.get('correoUsuario').valid) {
        this.buscaUsuario(this.usuarioForm.get('correoUsuario').value, 2);
      }
    });
  }

  buscaUsuario(busqueda, tipo) {
    this._usuariosService.busquedaCorreoUsuario(busqueda, tipo).subscribe(
      response => {
        if (response && response['status']) {
          this.coincidencias = response['coincidencia'];
          this.coincidencias.forEach(coincidencia => {
            if (coincidencia.email == busqueda && tipo == 2) {
              this.usuarioForm.controls['correoUsuario'].setErrors({ 'incorrect': true });
              this.errCorreo = true;
              this.buttonDisabled = true;
            } else if (coincidencia.usuario == busqueda && tipo == 1) {
              this.errUser = true;
              this.buttonDisabled = true;
              this.usuarioForm.controls['usuario'].setErrors({ 'incorrect': true });
            }
          });
        } else if (tipo == 1) {
          this.errUser = false
          this.buttonDisabled = false;
        }
        else if (tipo == 2) {
          this.errCorreo = false
          this.buttonDisabled = false;
        }
        if (this.errCorreo == true && this.usuarioForm.get('correoUsuario').value){
          alertify.error('Correo no disponible').dismissOthers();
        } else if (this.errUser == true && this.usuarioForm.get('usuario').value && this.usuarioForm.get('forceUser').value){
          alertify.error('Nombre de usuario no disponible').dismissOthers();
        }
      }, error => {
        console.log(<any>error)
      });
  }

  mostrarCampus() {
    this._catalogoService.consultaCampus(this.jwt).subscribe(
      response => {
        if (response && response['status']) {
          this.campus = response['campus'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaArea() {
    this._catalogoService.consultaArea().subscribe(
      response => {
        if (response && response['status']) {
          this.areas = response['areas'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  cambiaValidacion(rol) {
    if (rol == 1) {
      this.usuarioForm.controls.clave.setValidators(Validators["null"])
      this.usuarioForm.controls.clave.reset();
      this.usuarioForm.get('clave').setValue("");

      this.usuarioForm.controls.catCarreraAspirante.setValidators(Validators["null"])
      this.usuarioForm.controls.catCarreraAspirante.reset();
      this.usuarioForm.get('catCarreraAspirante').setValue("");

      this.usuarioForm.controls.carrera_id.setValidators(Validators["null"])
      this.usuarioForm.controls.carrera_id.reset();
      this.usuarioForm.get('carrera_id').setValue("");

      this.usuarioForm.controls.plan_estudio_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_estudio_id.reset();
      this.usuarioForm.get('plan_estudio_id').setValue("");

      this.usuarioForm.controls.plan_orden_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_orden_id.reset();
      this.usuarioForm.get('plan_orden_id').setValue("");

      this.usuarioForm.controls.catArea.setValidators(Validators["required"])
      this.usuarioForm.controls.catArea.reset();
      this.usuarioForm.get('catArea').setValue("");

      this.usuarioForm.controls.tipoConsulta.setValidators(Validators["required"])
      this.usuarioForm.controls.tipoConsulta.reset();
      this.usuarioForm.get('tipoConsulta').setValue("");

    }else if(rol == 2){
      //this.usuarioForm.controls.clave.setValidators(Validators["required"])
      //this.usuarioForm.controls.clave.reset();
      this.usuarioForm.get('clave').setValue("");

      this.usuarioForm.controls.carrera_id.setValidators(Validators["required"])
      this.usuarioForm.controls.carrera_id.reset();
      this.usuarioForm.get('carrera_id').setValue("");

      this.usuarioForm.controls.plan_estudio_id.setValidators(Validators["required"])
      this.usuarioForm.controls.plan_estudio_id.reset();
      this.usuarioForm.get('plan_estudio_id').setValue("");

      this.usuarioForm.controls.plan_orden_id.setValidators(Validators["required"])
      this.usuarioForm.controls.plan_orden_id.reset();
      this.usuarioForm.get('plan_orden_id').setValue("");

      this.usuarioForm.controls.catArea.setValidators(Validators["null"])
      this.usuarioForm.controls.catArea.reset();
      this.usuarioForm.get('catArea').setValue("");

      this.usuarioForm.controls.tipoConsulta.setValidators(Validators["null"])
      this.usuarioForm.controls.tipoConsulta.reset();
      this.usuarioForm.get('tipoConsulta').setValue("");

      this.usuarioForm.controls.catCarreraAspirante.setValidators(Validators["null"])
      this.usuarioForm.controls.catCarreraAspirante.reset();
      this.usuarioForm.get('catCarreraAspirante').setValue("");
    
    } else if (rol == 3) {
      this.usuarioForm.controls.clave.setValidators(Validators["null"])
      this.usuarioForm.controls.clave.reset();
      this.usuarioForm.get('clave').setValue("");

      this.usuarioForm.controls.catCarreraAspirante.setValidators(Validators["null"])
      this.usuarioForm.controls.catCarreraAspirante.reset();
      this.usuarioForm.get('catCarreraAspirante').setValue("");

      this.usuarioForm.controls.carrera_id.setValidators(Validators["null"])
      this.usuarioForm.controls.carrera_id.reset();
      this.usuarioForm.get('carrera_id').setValue("");

      this.usuarioForm.controls.plan_estudio_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_estudio_id.reset();
      this.usuarioForm.get('plan_estudio_id').setValue("");

      this.usuarioForm.controls.plan_orden_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_orden_id.reset();
      this.usuarioForm.get('plan_orden_id').setValue("");

      this.usuarioForm.controls.catArea.setValidators(Validators["null"])
      this.usuarioForm.controls.catArea.reset();
      this.usuarioForm.get('catArea').setValue("");

      this.usuarioForm.controls.tipoConsulta.setValidators(Validators["null"])
      this.usuarioForm.controls.tipoConsulta.reset();
      this.usuarioForm.get('tipoConsulta').setValue("");

    }else if(rol == 4){ 
      this.usuarioForm.controls.catCarreraAspirante.setValidators(Validators["required"])
      this.usuarioForm.controls.catCarreraAspirante.reset();
      this.usuarioForm.get('catCarreraAspirante').setValue("");

      this.usuarioForm.controls.carrera_id.setValidators(Validators["null"])
      this.usuarioForm.controls.carrera_id.reset();
      this.usuarioForm.get('carrera_id').setValue("");

      this.usuarioForm.controls.plan_estudio_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_estudio_id.reset();
      this.usuarioForm.get('plan_estudio_id').setValue("");

      this.usuarioForm.controls.plan_orden_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_orden_id.reset();
      this.usuarioForm.get('plan_orden_id').setValue("");

      this.usuarioForm.controls.catArea.setValidators(Validators["null"])
      this.usuarioForm.controls.catArea.reset();
      this.usuarioForm.get('catArea').setValue("");

      this.usuarioForm.controls.tipoConsulta.setValidators(Validators["null"])
      this.usuarioForm.controls.tipoConsulta.reset();
      this.usuarioForm.get('tipoConsulta').setValue("");

    }else if(rol == 5){ 
      this.usuarioForm.controls.catCarreraAspirante.setValidators(Validators["null"])
      this.usuarioForm.controls.catCarreraAspirante.reset();
      this.usuarioForm.get('catCarreraAspirante').setValue("");

      this.usuarioForm.controls.carrera_id.setValidators(Validators["null"])
      this.usuarioForm.controls.carrera_id.reset();
      this.usuarioForm.get('carrera_id').setValue("");

      this.usuarioForm.controls.plan_estudio_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_estudio_id.reset();
      this.usuarioForm.get('plan_estudio_id').setValue("");

      this.usuarioForm.controls.plan_orden_id.setValidators(Validators["null"])
      this.usuarioForm.controls.plan_orden_id.reset();
      this.usuarioForm.get('plan_orden_id').setValue("");

      this.usuarioForm.controls.catArea.setValidators(Validators["null"])
      this.usuarioForm.controls.catArea.reset();
      this.usuarioForm.get('catArea').setValue("");

      this.usuarioForm.controls.tipoConsulta.setValidators(Validators["null"])
      this.usuarioForm.controls.tipoConsulta.reset();
      this.usuarioForm.get('tipoConsulta').setValue("");

    } else {
      this.usuarioForm.controls.clave.setValidators(Validators["null"])
      this.usuarioForm.controls.clave.reset();
      this.usuarioForm.get('clave').setValue("");
    }
  }

  enviaCorreo() {
    if (this.correo == 0) {
      this.correo = 1;
    } else if (this.correo == 1) {
      this.correo = 0;
    }
  }

  enviarInformacion() {
    if (this.usuarioForm.invalid) {
      Object.keys(this.usuarioForm.controls).forEach(controlKey => {
        this.usuarioForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this.loading = true;
    this.color = randomColor();
    this._usuariosService.modificaUsuario(this.usuarioForm, this.idUsuario, this.idPersona, this.idRol, this.color, this.correo).subscribe(
      response => {
        // console.log(response)
        if (response && response['status']) {
          let usuario
          let rol
          this.idRol = this.usuarioForm.get('catRoles').value


          if (this.usuarioForm.get('usuario').value)
            usuario = this.usuarioForm.get('usuario').value;
          else
            usuario = this.usuarioForm.get('correoUsuario').value;


          if (!this.usuarioForm.get('passUsuario').value) {

            this.idPersona = response['id_persona'];

            switch (this.idRol) {
              case "1":
                rol = "Admin";
                break;
              case "2":
                rol = "Alumno";
                break;
              case "3":
                rol = "Docente";
                break;
              case "4":
                rol = "Aspirante"
                break;
              case "5":
                rol = "Asesor"
                break;
              default:
                break;
            }

            this.usuario = usuario;
            this.password = rol + "" + this.idPersona;
            this.registroExitoso = true;
            //
          } else {
            this.router.navigate(['admin/usuario/consulta']);
          }
          if (sessionStorage.getItem('selectedRol')) sessionStorage.removeItem('selectedRol');
          alertify.success(response['msg']);
        } else {
          alertify.error(response['msg']);
        }

        this.loading = false;
        // alertify.success(response['msg']);
        //  else {
        //   alertify.error(response['msg']);
        // }
      }, error => {
        this.loading = false;
        console.log(<any>error)
      });
    if (this.usuarioForm.invalid) {
      return;
    }
  }

  redireccion() {
    switch (this.idRol) {
      case "1":
        this.router.navigate(['admin/usuario/']);

        break;
      case "2":
        this.router.navigate(['admin/alumno/']);
        break;
      case "3":
        this.router.navigate(['admin/docente/']);
        break;
      case "4":
        this.router.navigate(['admin/aspirante/']);
        break;
      default:
        break;
    }
  }

  curp(curp) {
    this.buttonDisabled = false;
    if(curp != ''){
      if (!this.idUsuario ) {
        this._usuariosService.consultaCurp(curp, '').subscribe(
          response => {
            if (response && response['status']) {
              alertify.error("Esta curp ya existe en nuestros registros").dismissOthers();
              this.usuarioForm.controls['curpUsuario'].setErrors({ 'incorrect': true });
              this.buttonDisabled = true;
              this.errCURP = true;
            } else {
              this.buttonDisabled = false;
              this.errCURP = false;
            }
          }, error => {
            console.log(<any>error)
          });
      }
    }else{
      this.buttonDisabled = false;
      this.errCURP = false;
    }
  }

  ngOnDestroy() {
    if (sessionStorage.getItem('selectedRol')) sessionStorage.removeItem('selectedRol');
  }
}
