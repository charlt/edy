import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.scss'],
  animations: [slideToTop()]
})
export class InstitucionComponent implements OnInit {
  title: string;

  constructor(
    private _translate: TranslateService,
    private _router:Router,
    private _usuarioService: UsuarioService
  ){
    this._translate.setDefaultLang('es');

    this.title = "Institución"
    this._usuarioService.pushBreadcum(this.title,'/master/institucion',1);
   }

  ngOnInit() {
  }

}
