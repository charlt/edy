import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss'],
  animations: [slideToTop()]
})
export class DescuentosComponent implements OnInit {
  title;

  constructor(
    private _usuarioService: UsuarioService

  ){
    this.title = 'Descuentos';
    this._usuarioService.pushBreadcum(this.title, '../admin/descuentos', 1);
   }

  ngOnInit(){


  }

}
