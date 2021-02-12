import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-carga-actividades',
  templateUrl: './carga-actividades.component.html',
  styleUrls: ['./carga-actividades.component.scss'],
  animations: [slideToTop()]
})

export class CargaActividadesComponent implements OnInit {
breadcum: [];
public title:string;
  
constructor(
    private _translate: TranslateService,
    private _usuarioService: UsuarioService    
  ) { 
    this._translate.setDefaultLang('es');

    this.title = "Carga de actividades";
    this._usuarioService.pushBreadcum(this.title,'/admin/carga/seleccion',1); 
  }

  ngOnInit() {

  // console.log('prueba');
  


  }

}
