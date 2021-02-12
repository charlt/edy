import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router, NavigationEnd, Event  } from '@angular/router';


@Component({
    selector: 'app-administracion',
    templateUrl: './administracion.component.html',
    styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

    collapedSideBar: boolean;
    breadcum;

    constructor(
        private _usuarioService: UsuarioService,
        private _router: Router
        ) {}

    ngOnInit() {
        this.breadcum = this._usuarioService.getBreadcum();
        this._router.events.subscribe( (event : Event) => {
            if (event instanceof NavigationEnd) {
                // console.log(event.url);
                this.breadcum = this._usuarioService.getBreadcum();

            }
        })
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
 
  
}
