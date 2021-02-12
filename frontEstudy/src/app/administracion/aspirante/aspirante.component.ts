import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.scss'],
  animations: [slideToTop()]

})
export class AspiranteComponent implements OnInit {
  title;


  constructor(
    private _usuarioService: UsuarioService,
    private _translate: TranslateService,

  ){
    this._translate.setDefaultLang('es');
    
    this.title = "Aspirantes"
    this._usuarioService.pushBreadcum(this.title,'/admin/aspirante',1);


   }

  ngOnInit() {
  }

}
