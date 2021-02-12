import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-avisos-admin',
  templateUrl: './avisos-admin.component.html',
  styleUrls: ['./avisos-admin.component.scss'],
  animations: [slideToTop()]

})
export class AvisosAdminComponent implements OnInit {
  title;

  constructor(
    private _usuarioService:UsuarioService,
    private _translate: TranslateService
  ){
    this._translate.setDefaultLang('es');    
    this.title = "Avisos"
    this._usuarioService.pushBreadcum(this.title,'/admin/avisos',1);
   }

  ngOnInit() {
  }

}
