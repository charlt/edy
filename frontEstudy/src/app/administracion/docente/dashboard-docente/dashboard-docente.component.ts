import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard-docente',
  templateUrl: './dashboard-docente.component.html',
  styleUrls: ['./dashboard-docente.component.scss']
})
export class DashboardDocenteComponent implements OnInit {
  id_persona;
  title;
  constructor(
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService
  ) { 
    this.title= "";
    this._usuarioService.pushBreadcum('Docente','/admin/docente',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.id_persona = this.route.snapshot.params['id'];
  }

}
