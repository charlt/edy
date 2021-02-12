import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { slideToTop } from 'src/app/router.animations';


@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.scss'],
  animations: [slideToTop()]

})
export class InstitucionComponent implements OnInit {

  title: string; 

  constructor(
    private _usuarioService: UsuarioService


  ) { 
    this.title = "Información de la institución"
    this._usuarioService.pushBreadcum(this.title,'/admin/institucion',1);
  }

  ngOnInit() {
  }

}
