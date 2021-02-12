import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
  animations: [slideToTop()]

})
export class DocenteComponent implements OnInit {
  title;
  constructor(
    private _usuarioService: UsuarioService
  ){
    this.title= "Docentes";
    this._usuarioService.pushBreadcum(this.title,"admin/docente",1);
   }

  ngOnInit() {
  }

}
