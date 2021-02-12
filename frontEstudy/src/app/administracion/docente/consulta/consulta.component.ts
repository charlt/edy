import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DocenteService } from 'src/app/services/docente.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PlataformaService } from 'src/app/services/plataforma.service';
import { Router } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  jwt: string;
  title: string;
  docentes;
  totalItems: number = 100;
  previousPage: any = 1;
  searchChangeObserver;
  page: number = 1;
  itemsPerPage : number = 50;
  loading = false;
  searchField: FormControl; 
  busqueda;
  chat: string = 'Activar chat';
  estatusChat: number;
  tipo;
  tipoForm;

  constructor(
    private _usuarioService: UsuarioService,
    private _docenteService: DocenteService,
    private _plataformaService: PlataformaService,
    private router: Router
  ){
    
    this.title = "Consulta de docentes"
    this._usuarioService.pushBreadcum(this.title,'',2);
   }

  ngOnInit(){  
    this.jwt = this._usuarioService.getJWT();
    this.searchField = new FormControl();
    let id_persona = localStorage.getItem('id_persona');
    localStorage.removeItem('id_persona')

    // busqueda de datos por input
    this.searchField.valueChanges.subscribe(busqueda => {
      if (this.totalItems == 1){
        this.consultaTotal();
        this.itemsPerPage = 50;
      }
      this.busquedaDocente(busqueda);      
      });

      if(id_persona){
        this.consultaEspDocente(id_persona);
      }else{
        this.consultaTotal();
      }
  }

  consultaTotal(){
    this._docenteService.consultaTotalDocentes(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.totalItems = response['total'];
            this.consultaChat();
            this.consultaDocente(null, 0);
            this.tipoForm = 1;
          }
      },error =>{
        console.log(<any>error)
      });
  }

  consultaEspDocente(id_persona){
    this.totalItems = 1
    this.docentes = [];
    this._docenteService.consultaDocente(id_persona, this.jwt).subscribe(
      response =>{ 
          if(response && response['status']){
            let _docente = response['docente'];
            this.docentes.push(_docente)
          }
          else this.docentes = null;
          this.loading = false;
      },error =>{
        console.log(<any>error)
    });
  }

  tipoContenido(estatus, id_persona){
    this._docenteService.guardaTipoC(estatus, id_persona).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
          }else{
            alertify.danger(response['msg'])
          }
      },error =>{
        console.log(<any>error)
      });
  }

  consultaChat(){
    this._docenteService.consultaChat(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.estatusChat = response['situacion'];
            if (this.estatusChat == 0) this.chat = 'Chat Desactivado';
            else if (this.estatusChat == 1) this.chat = 'Chat activado';
            else this.chat = 'Chat Mixto'
          }
      },error =>{
        console.log(<any>error)
      });
  }

  consultaDocente(busqueda, inicio){
    let numero;
    this._docenteService.consultaBusqueda(this.jwt, busqueda, inicio, this.itemsPerPage, this.tipoForm).subscribe(
      response =>{
          if(response && response['status']){
            this.docentes = response['usuario'];
            if (inicio == 1)numero = inicio-1;
            else numero = inicio;
            for (let index = 0; index < this.docentes.length; index++) {
              numero++;
              this.docentes[index].numero = numero;
            }
          }else{
            this.docentes = null;
          }
          this.loading = false;
      },error =>{
        console.log(<any>error)
      });
  }

  loadPage(page:number){
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.busquedaDocente('', 1);
    }
  }

  busquedaDocente(input, id = 0) {
    this.docentes = null;
    this.loading = true; 
    if (id == 0) {
      if (!this.searchChangeObserver) {
        Observable.create(observer => {        
          this.searchChangeObserver = observer;
        }).pipe(debounceTime(500)).subscribe(busqueda => {  
          let inicio = (this.page-1) * this.itemsPerPage;    
          if (busqueda === '' || busqueda == null) this.consultaDocente(busqueda, inicio);
          else this.consultaDocente(busqueda, 0);
        });
      }    
      this.searchChangeObserver.next(input);
    }else {
      let inicio = (this.page-1) * this.itemsPerPage;      
      this.consultaDocente('', inicio);
    }      
  } 

  cambiaChat() {
    // if (this.estatusChat != -1) {
      let estatus;
      if (this.estatusChat == 0) estatus = 1;
      else if (this.estatusChat == 1) estatus = 0;
      else estatus = 1;

      this._docenteService.cambiaChat(this.jwt, estatus).subscribe(response =>{
        if(response && response['status']){
          this.estatusChat = estatus;
          if (this.estatusChat == 0) this.chat = 'Chat Desactivado';
          else if (this.estatusChat == 1) this.chat = 'Chat Activado';
          else this.chat = 'Chat mixto';
          alertify.success(response['msg']).dismissOthers();
        }
      },error =>{
        console.log(<any>error)
      });
    // }else {
    // }
  }

  setSelectedRol() {
    if (sessionStorage.getItem('selectedRol')) sessionStorage.removeItem('selectedRol');
    sessionStorage.setItem('selectedRol', 'Docente');
  }

  verPlataforma(docente) {    
    this._plataformaService.consultaJWT(docente.clave_profesor, 3).subscribe(response =>{
      if(response && response['status']){
        sessionStorage.setItem('tmp_jwt', this.jwt);
        sessionStorage.setItem('tmp_identity', JSON.stringify(this._usuarioService.getIdentity()));
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');
        localStorage.setItem('jwt', response['jwt']);
        localStorage.setItem('identity',JSON.stringify(response['user']));
        this.router.navigate(['docente/home']);
      }
    },error =>{
      console.log(<any>error)
    });
  }
    
}
