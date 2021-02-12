import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

declare var alertify:any;
@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss'],
  animations: [slideToTop()]

})
export class CicloComponent implements OnInit {
  breadcum: [];
  public title: string;


  constructor(
    private _translate: TranslateService,
    private _usuarioService: UsuarioService,
    private _router: Router
    
  ) {
    this._translate.setDefaultLang('es');
    
    this.title = "Ciclos"
    this._usuarioService.pushBreadcum(this.title,'/admin/ciclo',1);


  }

  ngOnInit() {

    
  }


  
}