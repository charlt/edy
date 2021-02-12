import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { slideToTop } from 'src/app/router.animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
  animations: [slideToTop()]
})
export class RolComponent implements OnInit {
  title: string;
  

  constructor(
    private _usuarioService: UsuarioService,
    private _translate: TranslateService
    
  ){ 
    this._translate.setDefaultLang('es');

    this.title = "Área"
    this._usuarioService.pushBreadcum(this.title,'/admin/rol',1);
    
  }

  ngOnInit() {
  }

}
