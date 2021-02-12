import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.scss']
})
export class AsesorComponent implements OnInit {

  collapedSideBar: boolean;
  breadcum;
  
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router    
  ) { }

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
