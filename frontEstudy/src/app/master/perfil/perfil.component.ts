import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: [slideToTop()]
})
export class PerfilComponent implements OnInit {
  breadcum: [];
  title: string;  

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _translate: TranslateService      
  ) { 
    this._translate.setDefaultLang('es');

    this.title = "Perfil";
    this._usuarioService.pushBreadcum(this.title,'/admin/perfil',1);     
  }

  ngOnInit() {
  }

  onActivate(e) {
    this.breadcum = this._usuarioService.getBreadcum();
  }    

}
