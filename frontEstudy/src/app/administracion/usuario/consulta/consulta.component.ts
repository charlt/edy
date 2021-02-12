import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { TranslateService } from '@ngx-translate/core';
import { UsuariosService } from '../services/usuarios.service';
import { Observable } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

declare var alertify:any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string;
  jwt: string;
  usuarios;
  searchChangeObserver;
  search;
  id_usuario; 
  usuario;
  id_persona;
  rol;
  datosUsuario;

  @ViewChild('contentUser') contentUser: NgbModalRef;


  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private translate: TranslateService,  
    private _usuariosService: UsuariosService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    public router: Router,

  ) {
    this.title = 'Consulta de usuarios';
    this._usuarioService.pushBreadcum(this.title,"",2);
    
   }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    let _datosUsuario = localStorage.getItem('usuario');
    if (_datosUsuario) {
      this.datosUsuario = JSON.parse(_datosUsuario);
      localStorage.removeItem('usuario');
      // console.log(this.datosUsuario)
      this.openUserModal(this.contentUser, this.datosUsuario[0].usuario, this.datosUsuario[0].id,this.datosUsuario[0].rol);
    }
    this.consultaUsuario();
    
  }

  consultaUsuario(){
    this._catalogoService.consultaUsuario(this.jwt, '50').subscribe(
      response =>{
          if(response && response['status']){
            this.usuarios = response['usuario'];
            this.usuarios.forEach(usuario => {
              usuario['editar'] = false;
            });            
          }
      },error =>{
        console.log(<any>error)
      }); 
  }

  linkNuevoUser(){
    this.router.navigate(['admin/usuario/nuevo']);
  }

  openPassModal(contentContraseña, idUsuario) {
    this.id_usuario = idUsuario;    
    this.modalService.open(contentContraseña, { size: 'lg' });
  }

  openUserModal(contentUser, usuario, persona_id, rol) {
    this.usuario = usuario;
    this.id_persona = persona_id;
    this.rol = rol;    
    this.modalService.open(contentUser, { size: 'sm' });
  }

  consulta_usuario(input) {

    if (!this.searchChangeObserver) {
      Observable.create(observer => {
        this.searchChangeObserver = observer;
      }).pipe(debounceTime(500)).subscribe(respuesta => { 
      let resultado = respuesta;
        this._usuariosService.consultaUsuario(resultado,this.jwt).subscribe(
          response =>{
            console.log(response)
              if(response && response['status']){
                  this.usuarios = response['usuario'];
                  alertify.success(response['msg']);
              }
          },error =>{
            console.log(<any>error)
        });        

      });
    }

    this.searchChangeObserver.next(input);
    
  }  

  eliminar(id,index){
    
    alertify.confirm(this.translate.instant('MsgEraseUser'),
    function(){
      this._usuariosService.elimina(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.usuarios.splice(index,1);
              alertify.success(response['msg']);
            }
            else{
              alertify.success(response['msg']);
            }
  
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancel');
    });
      console.log("Borrar")
  }   

  editaUsuario(evt, i) {
    let nuevo_usuario = evt.target.value;    
    if (this.usuarios[i]['usuario'] != nuevo_usuario) {

    this._usuariosService.busquedaCorreoUsuario(nuevo_usuario, 1).subscribe(
      response =>{        
        if(response && response['status']){
          alertify.error('El usuario ya existe');
        }else {
          this._usuariosService.editaNombreUsuario(nuevo_usuario, this.usuarios[i]['usuario_id']).subscribe(
            response =>{
              if(response && response['status']){
                this.usuarios[i]['usuario'] = nuevo_usuario;
                alertify.success(response['msg']);
              }
              else{
                alertify.success(response['msg']);
              }
            },error =>{
              console.log(<any>error)
          });
        }
      },error =>{
        console.log(<any>error)
      });
    }
  }
}
