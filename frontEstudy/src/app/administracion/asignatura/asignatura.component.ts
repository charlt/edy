import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.scss'],
  animations: [slideToTop()]

})
export class AsignaturaComponent implements OnInit {
  breadcum: [];
  title:string;

  constructor(
    private _usuarioService: UsuarioService) {

      this.title = "Asignaturas";
      this._usuarioService.pushBreadcum(this.title,'/admin/asignatura',1);
      
     }

  ngOnInit() {
  }

}
