import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { RolService } from '../services/rol.service';
import { TranslateService } from '@ngx-translate/core';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string;
  jwt: string;
  tipoAdmin;
  areas;
  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private _rolService: RolService,
    private _translate: TranslateService
    
  ) { 
    this.title= "Consulta de área";
    this._usuarioService.pushBreadcum(this.title,"",2);
  }

  ngOnInit()
  {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;
    this.consultaArea();
  }

  consultaArea(){
  this._catalogoService.consultaArea().subscribe(
    response =>{
        if(response && response['status']){
            this.areas = response['areas']
            console.log(this.areas)
          }
    },error =>{
      console.log(<any>error)
    });
}


  eliminar(id,index){
    alertify.confirm(this._translate.instant('MsgEraseSyllabus'),
    function(){
      this._rolService.elimina(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.areas.splice(index,1);
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


