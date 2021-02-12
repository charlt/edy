import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideToTop()]
})
export class DashboardComponent implements OnInit {

  public title: string;

  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.title = "Página de inicio";
    this._usuarioService.pushBreadcum(this.title, '/asesor/', 1);
    this._usuarioService.removeBreadcum(2);
  }

}
