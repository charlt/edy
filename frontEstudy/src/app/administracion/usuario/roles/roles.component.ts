import { Component, OnInit } from '@angular/core';
import { RolService } from "../../../services/rol.service";
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var alertify: any;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  jwt: string;
  idPersona: number;
  idUsuario: number;
  Roles: any;
  catRoles;
  rolForm: FormGroup
  id_rol;

  constructor(
    private _rolesService: RolService, 
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _modalService: NgbModal,
    private _catalogoService: CatalogoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idUsuario = parseInt(this.route.snapshot.paramMap.get('u'));
    this.idPersona = parseInt(this.route.snapshot.paramMap.get('p'));
    this.getRoles();
    this.consultaRoles() 
  }

  getRoles() {
    this._rolesService.consultaRol(this.jwt, this.idPersona).subscribe(response => {
      if (response && response['status']) {
        this.Roles = response['roles'];
        console.log(this.Roles);
      }
    }, error => {
      console.log(<any>error);
    });
  }

  openModalEdita(content, id_rol){
    this.id_rol = id_rol;
    this._modalService.open(content, {
      backdrop : 'static',
      keyboard : false,
      size: 'lg'
    });
  }

  openModalAgregar(content){ 
    this.rolForm = this.formBuilder.group({
      rol: ['', Validators.required],
      clave_usuario: ['', Validators.required]
    });

    if (!this.catRoles) {
      this.consultaRoles();
    }
    this._modalService.open(content, {
      backdrop : 'static',
      keyboard : false,
      size: 'lg'
    });
  }

  consultaRoles() {
    this._catalogoService.consultaRol(this.jwt).subscribe(response => {
      if (response && response['status']){
        this.catRoles = response['rol'];
          console.log(this.catRoles);
      }
    }, error => {
      console.log(<any>error);
    });  
  }

  elimina(id_rol) {    
    alertify.confirm('Eliminar rol', '¿Desea eliminar el rol?', function(){
      this.enviaDatos(id_rol,null, 0);
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  agrega() {
    let id_rol = this.rolForm.get('rol').value;
    let clave_usuario = this.rolForm.get('clave_usuario').value;
    this.enviaDatos(id_rol,clave_usuario, 1);
  }

  enviaDatos(id_rol, clave_usuario, tipo){
    this._rolesService.setDatos(this.jwt, this.idPersona, this.idUsuario, id_rol,clave_usuario, tipo).subscribe(response => {
      if (response && response['status']) {
        this.getRoles();
        this._modalService.dismissAll();
        alertify.success(response['msg']).dismissOthers();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  close(){
    this.getRoles();
    this._modalService.dismissAll();
  }

}
