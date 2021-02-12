import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RubricasService } from '../services/rubricas.service';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  title: string;
  jwt: string;
  search: string;
  Rubricas: Array<any>;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private _rubricasService: RubricasService
  ) {
    this.title = 'Consulta de rúbricas';
    this._usuarioService.pushBreadcum(this.title, '', 2);
   }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this.consulta();
  }

  consulta() {
    this._rubricasService.catalogo(this.jwt).subscribe(response => {
      if (response && response['status']) {
        this.Rubricas = response['rubricas'];
      }
    }, error => {
      console.log(<any>error);
    });
  }

  eliminarRubrica(id_rubrica, index) {
    alertify.confirm('Eliminar rúbrica', '¿Deseas eliminar la rúbrica?',
    function(){
      this._rubricasService.eliminaRubrica(id_rubrica, this.jwt).subscribe(
        response =>{
            if(response && response['estatus']){
              this.Rubricas.splice(index, 1);
              alertify.success(response['msg']).dismissOthers()
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

}
