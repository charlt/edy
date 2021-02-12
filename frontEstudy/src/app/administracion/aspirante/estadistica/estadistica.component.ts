import { Component, OnInit } from '@angular/core';
import { EstadisticaService } from 'src/app/services/estadisticaAspirante.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {
  public estadistica;
  public title: string;

  constructor(
    private _usuarioService:UsuarioService,
    private _estadisticaService: EstadisticaService
  ) { 
    this.title = "Estadistica Aspirantes";
    this._usuarioService.pushBreadcum(this.title,"",1);
  }

  ngOnInit() {
    this.consulta();
  }

  consulta() {
    this._estadisticaService.consulta().subscribe(
      response => {
        console.log(response)
        if (response && response['status']) {
          this.estadistica = response['aspirantes'];
        }

      }, error => {
        console.log(<any>error)
      });
  }
}
