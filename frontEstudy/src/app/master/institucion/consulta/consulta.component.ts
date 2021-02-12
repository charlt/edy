import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { InstitucionService } from '../services/institucion.service';


declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title:string;
  jwt: string;
  institucion;

  constructor(
    private _usuarioService: UsuarioService,
    private _translate: TranslateService,
    private _catalogoService: CatalogoService,
    private _institucionService: InstitucionService



  ){
    this.title = "Consulta de institución";
    this._usuarioService.pushBreadcum(this.title,"",2);
   }
  
  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();
    
    this._catalogoService.consultaInstitucion(this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
              this.institucion = response['instituciones'];
          }

      },error =>{
        console.log(<any>error)
      });
  }

  eliminar(id,index){
    alertify.confirm(this._translate.instant('¿Deseas eliminar la institución?'),
    function(){
      this._institucionService.elimina(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.institucion.splice(index,1);
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
