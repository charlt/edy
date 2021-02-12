import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivilegiosService } from '../services/privilegios.service';
import { TranslateService } from '@ngx-translate/core';

 declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  public search;
  title: string;
  jwt: string;
  privilegio;
  closeResult: string;
  id_privilegio;
  id_seleccionado;
  public idPadre;
  id_nuevo;
  modal;
  muestraEstatus;
  
  
  


  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private _privilegiosServices: PrivilegiosService,
    private router : Router,
    private _translate: TranslateService,


  ) { 

    this.id_privilegio = this.route.snapshot.paramMap.get('id');

    this.title = "Consulta de privilegios";
    this._usuarioService.pushBreadcum(this.title,"",2);
  }

  open(content, id_privilegio, privilegio_padre_id ){
    this.id_seleccionado = id_privilegio;
    this.idPadre = privilegio_padre_id

    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

private getDismissReason(reason: any): string {
   
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
    
}

  ngOnInit() {
    
    this.jwt = this._usuarioService.getJWT();

      this._catalogoService.consultaPrivilegios( this.jwt, this.muestraEstatus ).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.privilegio = response['privilegios'];
        }
      },error =>{
        console.log(<any>error)
      });
  }


  privilegioPadre(id_nuevo){
    console.log(this.id_seleccionado)
    this.idPadre = id_nuevo
    this._privilegiosServices.privilegioPadre(this.idPadre, this.id_seleccionado, this.jwt).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          alertify.success(response['msg'])
          setTimeout(()=> {
          this.quitarPrivilegio();
          }, 100)
        }else{
          alertify.error(response['msg'])
        }
      },error =>{
        console.log(<any>error)
      });
  }

  quitarPrivilegio(){
    this._catalogoService.consultaPrivilegios(this.jwt, this.muestraEstatus).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.privilegio = response['privilegios'];
        }
      },error =>{
        console.log(<any>error)
      });
  }

  eliminar(id,index){
    alertify.confirm(this._translate.instant('¿Deseas eliminar el privilegio?'),
    function(){
      this._privilegiosServices.elimina(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.privilegio[index].estatus = 0;
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
      
    }
 
}
