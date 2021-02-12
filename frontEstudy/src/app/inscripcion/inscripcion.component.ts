import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {

  collapedSideBar: boolean;
  breadcum;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router    ) { }

  ngOnInit() {
    this.breadcum = this._usuarioService.getBreadcum();
    this._router.events.subscribe( (event : Event) => {
        if (event instanceof NavigationEnd) {
            // console.log(event.url);
            this.breadcum = this._usuarioService.getBreadcum();
        }
    })
    // this.receiveCollapsed(true);
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }  

}
