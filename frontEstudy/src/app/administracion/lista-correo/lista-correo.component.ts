import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss'],
  animations: [slideToTop()]
})
export class ListaCorreoComponent implements OnInit {
  breadcum: [];
  title: string;    

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _translate: TranslateService     
  ) {
    this._translate.setDefaultLang('es');

    this.title = "Administrador de correos";
    this._usuarioService.pushBreadcum(this.title,'/admin/lista-correo',1);     
   }
   
  ngOnInit() {
  }

}
