import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService} from '../../../services/usuario.service';
import { PlanEstudiosService} from '../services/plan-estudios.service';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify:any;
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string
  public search;
  tipoAdmin;
  jwt:string;
  planEstudios;



  constructor(
    private translate: TranslateService,
    private _planEstudiosService: PlanEstudiosService,
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService ) {

      this.title = 'Consulta de plan de estudios';
      this._usuarioService.pushBreadcum(this.title,"",2);
     }

  ngOnInit() {

    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this._catalogoService.consultaPlanEstudios(this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
              this.planEstudios = response['planEstudio'];
          }

      },error =>{
        console.log(<any>error)
      });

  }

  eliminar(id,index){
    
  alertify.confirm("Eliminar",this.translate.instant('MsgEraseSyllabus'),
  function(){
    this._planEstudiosService.elimina(id,this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.planEstudios.splice(index,1);
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
