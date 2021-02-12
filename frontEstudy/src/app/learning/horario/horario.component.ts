import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/horario.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {
  public horario;
  public title: string;

  constructor(
    private _usuarioService:UsuarioService,
    private _horarioService: HorarioService
  ) { 
    this.title = "Horario";
    this._usuarioService.pushBreadcum(this.title,"",1);

  }

  ngOnInit() {
    this.consulta()
  }

  consulta() {
    this._horarioService.consulta().subscribe(
      response => {
        console.log(response)
        if (response && response['status']) {
          this.horario = response['horario'];
        }

      }, error => {
        console.log(<any>error)
      });
  }
}
