import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manejador-correo',
  templateUrl: './manejador-correo.component.html',
  styleUrls: ['./manejador-correo.component.scss'],
  animations: [slideToTop()]
})
export class ManejadorCorreoComponent implements OnInit {
  breadcum: [];
  title: string;    

  constructor(
    private _usuarioService: UsuarioService,
    private _translate: TranslateService,
  ) {
    this._translate.setDefaultLang('es');

    this.title = "Administrador de correos";
    this._usuarioService.pushBreadcum(this.title,'/admin/manejador-correo',1);     
   }

  ngOnInit() {
  }

}
