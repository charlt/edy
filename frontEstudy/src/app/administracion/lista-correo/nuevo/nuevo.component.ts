import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { ListaCorreoService } from '../services/lista-correo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  breadcrum = [];
  title: string;
  jwt;
  usuarios;
  usuarioForm: FormGroup;  
  searchChangeObserver;
  search;
  lista = [];
  users = [];
  estado: boolean = false;
  buttonDisabled: boolean = false;
  idLista;
  mensaje;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService, 
    private _catalogoService: CatalogoService,
    private _listaCorreoService: ListaCorreoService,
    private router : Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.idLista = this.route.snapshot.paramMap.get('id');

    if(this.idLista)
      this.title = 'Editar lista de correos';
    else
      this.title = 'Nueva lista de correos';

    this._usuarioService.pushBreadcum(this.title,"",2);   
  }

  get f() { return this.usuarioForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this._catalogoService.consultaUsuario(this.jwt, '50').subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.usuarios = response['usuario'];
          }
      },error =>{
        console.log(<any>error)
      });    

      this.usuarioForm = this.formBuilder.group({
        nombreLista: ['', Validators.required],
      });     

      if(this.idLista != null){    
        this._listaCorreoService.consultaEspecifica( this.idLista , this.jwt).subscribe(
          response =>{
            console.log(response)
            if(response && response['status']){
              this.estado = true;
              this.users = response['alumnos']; 
            }
          },error =>{
            console.log(<any>error)
          });
      }                
  }

  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);  
      for (let i = 1; i < this.users.length; i++) {
        if (this.users[i].usuario_id == this.users[0].usuario_id) {
          alertify.error("El usuario ya se encuentra en la lista");
          transferArrayItem(event.container.data, event.previousContainer.data, 0, event.previousIndex); 
        }
      }
      if (this.users.length != 0) {
        this.estado = true;
      }else{
        alertify.error("Debes agregar usuarios a la lista");
      }
    }
    // else{
    //   // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    // }
  }

  consulta_usuario(input) {
    if (!this.searchChangeObserver) {
      Observable.create(observer => {
        this.searchChangeObserver = observer;
      }).pipe(debounceTime(500)).subscribe(respuesta => { 
      let resultado = respuesta;
        this._listaCorreoService.consultaUsuario(resultado, this.jwt).subscribe(
          response =>{
            console.log(response)
              if(response && response['status']){
                  this.usuarios = response['usuario'];
                  alertify.success(response['msg']);
              }
              else{
                this.usuarios = response['usuario'];
                alertify.error(response['msg']);
              }
          },error =>{
            console.log(<any>error)
        });        
      });
    }
    this.searchChangeObserver.next(input);    
  }  

  enviarInformacion(){
    // stop here if form is invalid
    if (this.usuarioForm.invalid) {
      Object.keys(this.usuarioForm.controls).forEach( controlKey => {
        this.usuarioForm.controls[controlKey].markAsTouched();
      });
      return;
    }    
    if (this.estado) {
      this.estado = false;
      this.buttonDisabled = true;
      this.users.forEach(usuario => {
        this.lista.push(parseInt(usuario.usuario_id));
      });
      this._listaCorreoService.insertaGrupo(this.usuarioForm , this.jwt, this.idLista).subscribe(
        response =>{
          console.log(response)
            if(response && response['status']){
              this.mensaje = response['msg'];
              if (response['id_correo_grupo']) {
                this.idLista = response['id_correo_grupo'];
                this.insertaUsuario();       
              }else{
                this._listaCorreoService.eliminarUsuarios(this.idLista , this.jwt).subscribe(
                  respuesta =>{
                    console.log(respuesta)
                      if(respuesta && respuesta['status']){
                        this.insertaUsuario();
                      }else{
                        alertify.error(respuesta['msg'])
                      }
                  },error =>{
                    console.log(<any>error)
                  });                  
              }
            }else{
              alertify.error(response['msg'])
            }
        },error =>{
          console.log(<any>error)
        });        
 
    } 
    else{
      alertify.error("Agrega usuarios al grupo");
    }
    if (this.usuarioForm.invalid) {
     return;
    }
  }  
  
  insertaUsuario(){
    this._listaCorreoService.insertaUsuario(this.idLista , this.jwt , this.lista).subscribe(
      respuesta =>{
        console.log(respuesta)
          if(respuesta && respuesta['status']){
            this.router.navigate(['admin/lista-correo/consulta']);
            alertify.success(this.mensaje)
          }else{
            alertify.error(respuesta['msg'])
          }
      },error =>{
        console.log(<any>error)
      });  
  }
}
