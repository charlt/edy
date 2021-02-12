import { Component, OnInit, Input, Output } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  animations: [slideToTop()]
})
export class UsuarioComponent implements OnInit {
  breadcum: [];
  title: string;
  @Input() persona;
      

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,         
    private _translate: TranslateService,
  ){
    this._translate.setDefaultLang('es');

    this.title = "Usuario";
    this._usuarioService.pushBreadcum(this.title,'/admin/usuario',1);         
  }

  ngOnInit() {
  
  }

  
  
  onActivate(e) {
    this.breadcum = this._usuarioService.getBreadcum();
  }


  

}
