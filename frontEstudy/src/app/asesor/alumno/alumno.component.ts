import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  animations: [slideToTop()]
})
export class AlumnoComponent implements OnInit {

  breadcum: [];
  title: string;    

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,   
    private _translate: TranslateService     
  ) { 
    this._translate.setDefaultLang('es');
    
    this.title = "Mis alumnos";
    this._usuarioService.pushBreadcum(this.title,'/asesor/alumno', 1);      
   }

  ngOnInit() {
  }

}
