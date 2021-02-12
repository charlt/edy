import { Component, OnInit } from '@angular/core';
import {universidad} from '../../services/universidad'
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  title;
  nombreInstitucion;

  constructor(
    private _usuarioService: UsuarioService
  ){
    this.title = "Biblioteca";
    this._usuarioService.pushBreadcum(this.title, "", 1);
   }

  ngOnInit() {
    this.nombreInstitucion = universidad.nombre;

  }

}
