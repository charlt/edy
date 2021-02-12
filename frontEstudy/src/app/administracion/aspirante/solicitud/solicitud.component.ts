import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aspirante-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  title: string;
  jwt: string;
  idAspirante: number;

  constructor(
    private _usuarioService: UsuarioService,
    private router : Router,
    private route: ActivatedRoute
  ) { 
    this.idAspirante = parseInt(this.route.snapshot.paramMap.get('id'));
    this.title = "Información de inscripción"
    this._usuarioService.pushBreadcum(this.title,"",2);
  }

  ngOnInit() {
  }

}
