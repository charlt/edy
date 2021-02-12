import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privilegios',
  templateUrl: './privilegios.component.html',
  styleUrls: ['./privilegios.component.scss'],
  animations: [slideToTop()]
})
export class PrivilegiosComponent implements OnInit {
  title: string;

  constructor(
    private _usuarioService: UsuarioService,
    private _translate: TranslateService,
    private _router:Router,


  ) {
    this._translate.setDefaultLang('es');

    this.title = "Privilegios"
    this._usuarioService.pushBreadcum(this.title,'/master/privilegios',1);
   }

  ngOnInit() {
  }

}
