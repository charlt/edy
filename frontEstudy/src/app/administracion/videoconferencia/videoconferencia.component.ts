import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-videoconferencia',
  templateUrl: './videoconferencia.component.html',
  styleUrls: ['./videoconferencia.component.scss'],
  animations: [slideToTop()]

})
export class VideoconferenciaComponent implements OnInit {
  breadcum: [];
  title: string;    
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,   
    private _translate: TranslateService  
  ){
    this._translate.setDefaultLang('es');
    this.title = "Videoconferencias";
    this._usuarioService.pushBreadcum(this.title,'/admin/videoconferencias',1);   
   }

  ngOnInit() {
  }

}
