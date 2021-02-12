import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { randomColor } from 'randomcolor';
import { UsuariosService } from 'src/app/administracion/usuario/services/usuarios.service';
import { Router } from '@angular/router';

declare var alertify;


@Component({
  selector: 'app-edita-rol-usuario',
  templateUrl: './edita-rol-usuario.component.html',
  styleUrls: ['./edita-rol-usuario.component.scss']
})
export class EditaRolUsuarioComponent implements OnInit {
  roles;
  color;
  areas;
  campus;
  usuario;
  errUser;
  loading;
  password;
  tipoAdmin;
  selectedRol;
  buttonDisabled;
  registroExitoso;
  usuarioForm: FormGroup;
  correo = 0; //prueba

  @Input() idRol;
  @Input() idUsuario;
  @Input() idPersona;

  constructor(
    private formBuilder: FormBuilder,
    private _catalogoService:CatalogoService,
    private _usuariosService:UsuariosService,
    private router: Router
  ){

   }
   get f() { return this.usuarioForm.controls; }

  ngOnInit(){
    this.consultaRol();
    this.usuarioForm = this.formBuilder.group({
      usuario: [''],
      passUsuario: [''],
      clave: [''],
      muestraClave: [false],
      campusUs: [false],
      catRoles: [{ "value" :this.selectedRol ? this.roles.find(r => r.rol == this.selectedRol).rol_id : '',disabled: true}, Validators.required],
      catArea: [''],
      tipoConsulta: [''],
      campus: [''],
      plan_orden_id: [''],
    });
    this.consultaArea();
    this.mostrarCampus();
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
      this.usuarioForm.controls.clave.updateValueAndValidity();

      this.usuarioForm.controls.catArea.setValidators(Validators["required"])
      this.usuarioForm.controls.catArea.updateValueAndValidity();

      this.usuarioForm.controls.tipoConsulta.setValidators(Validators["required"])
      this.usuarioForm.controls.tipoConsulta.updateValueAndValidity();
    } else if (rol == 3) {
      this.usuarioForm.controls.clave.setValidators(Validators["null"])
      this.usuarioForm.controls.clave.updateValueAndValidity();

    } else {
      this.usuarioForm.controls.clave.setValidators(Validators["null"])
      this.usuarioForm.controls.clave.updateValueAndValidity();
    }
  }

  consultaRol(){
    this._catalogoService.consultaRol('').subscribe(
      response => {
        if (response && response['status']) {
          if (this.idRol){
            this.usuarioForm.get('catRoles').setValue(this.idRol);
            this.consultaUserRol();
          }
          if (this.selectedRol)
            this.roles = [response['rol'].find(r => r.rol == this.selectedRol)];
          else
            this.roles = response['rol'];
        }
        // this.setForm();
      }, error => {
        console.log(<any>error)
      });
  }

  consultaUserRol(){
    let user;
    this._usuariosService.consultaUsuariosRol(this.idRol, this.idPersona).subscribe(
      response => {
        if (response && response['status']) {
          user = response['usuario'][0];
          if (this.idRol == 1){
            this.usuarioForm.get('catArea').setValue(user.area_id);
            if (user.vista == 1 && user.edicion == 0) {
              this.usuarioForm.get('tipoConsulta').setValue(1);
            }else{
              this.usuarioForm.get('tipoConsulta').setValue(2);
            }
          }else if(this.idRol == 2){
            this.usuarioForm.get('clave').setValue(user.clave_alumno);
            if(user.campus_id && this.campus){
              this.usuarioForm.get('campusUs').setValue(true);
              this.usuarioForm.get('campus').setValue(user.campus_id);
            }
          }else if(this.idRol == 3){
            this.usuarioForm.get('muestraClave').setValue(true);
            this.usuarioForm.get('clave').setValue(user.clave_profesor);
          }
        }
      }, error => {
        console.log(<any>error)
      });
  }


  redireccion(){

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
    this._usuariosService.editaUsuarioRol(this.usuarioForm, this.idPersona, this.idRol).subscribe(
      response => {
        // console.log(response)
        if (response && response['status']) {
          alertify.success(response['msg']);
        } else {
          alertify.error(response['msg']);
        }
        this.loading = false;
      }, error => {
        console.log(<any>error)
      });
  }

  mostrarCampus() {
    this._catalogoService.consultaCampus('').subscribe(
      response => {
        if (response && response['status']) {
          this.campus = response['campus'];
        }
      }, error => {
        console.log(<any>error)
      });
  }
}
