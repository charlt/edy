import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss'],
  animations: [slideToTop()]
})
export class CarreraComponent implements OnInit {
  breadcum: [];
  title: string;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _translate: TranslateService
  ) {
    this._translate.setDefaultLang('es');


    this.title = "Campus y carreras";
    this._usuarioService.pushBreadcum(this.title,'/admin/carrera',1);
  }

  ngOnInit() {
    
  }



}
