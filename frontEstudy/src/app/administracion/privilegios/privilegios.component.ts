import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-privilegios',
  templateUrl: './privilegios.component.html',
  styleUrls: ['./privilegios.component.scss'],
  animations: [slideToTop()]
})
export class PrivilegiosComponent implements OnInit {
  title: string;

  constructor(
    private _usuarioService: UsuarioService

  ){

    this.title = "Privilegios"
    this._usuarioService.pushBreadcum(this.title,'/admin/privilegio',1);

   }

  ngOnInit() {
  }

}
