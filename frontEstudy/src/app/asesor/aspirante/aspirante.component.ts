import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.scss'],
  animations: [slideToTop()]
})
export class AspiranteComponent implements OnInit {

  breadcum: [];
  title: string;    

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,   
    private _translate: TranslateService     
  ) { 
    this._translate.setDefaultLang('es');
    
    this.title = "Mis aspirantes";
    this._usuarioService.pushBreadcum(this.title,'/asesor/aspirante', 1);      
   }

  ngOnInit() {
  }


}
