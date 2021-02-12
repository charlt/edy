import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rubricas',
  templateUrl: './rubricas.component.html',
  styleUrls: ['./rubricas.component.scss'],
  animations: [slideToTop()]
})
export class RubricasComponent implements OnInit {

  title: string;

  constructor(
    private _usuarioService: UsuarioService
  ) { 
    this.title = "Rúbricas"
    this._usuarioService.pushBreadcum(this.title, '/admin/rubricas', 1);
  }

  ngOnInit() {
  }

}
