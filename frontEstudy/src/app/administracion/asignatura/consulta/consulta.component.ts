import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { TranslateService } from '@ngx-translate/core';
import { AsignaturaService } from '../services/asignatura.service';


declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string;
  usuarioService: UsuarioService;
  jwt: string;
  Asignatura;
  tipoAdmin;
  public search;
  

  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private _translate: TranslateService,
    private _asignaturaService: AsignaturaService

  ) {
    
    this.title= "Consulta de asignaturas";
    this._usuarioService.pushBreadcum(this.title,"",2);
   }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this._catalogoService.consultaAsignaturaTabla(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
              this.Asignatura = response['Asignaturas'];
          }

      },error =>{
        console.log(<any>error)
      });


  }

  eliminar(id,index){
    alertify.confirm(this._translate.instant('MsgEraseSyllabus'),
    function(){
      this._asignaturaService.elimina(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.Asignatura.splice(index,1);
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

