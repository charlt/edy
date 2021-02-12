import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService} from '../../services/usuario.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-plan-estudios',
  templateUrl: './plan-estudios.component.html',
  styleUrls: ['./plan-estudios.component.scss'],
  animations: [slideToTop()]

})
export class PlanEstudiosComponent implements OnInit {
  breadcum: [];
  title:string;
  


  constructor(
    private _usuarioService: UsuarioService,
    private translate: TranslateService,
    ) {
      this.translate.setDefaultLang('es');


      this.title = "Planes de estudios";
      this._usuarioService.pushBreadcum(this.title,'/admin/plan-estudios',1);
     }

  ngOnInit() {
    
  }



}
