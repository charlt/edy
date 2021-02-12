import { Component, OnInit } from '@angular/core';
import { CalendarioService } from 'src/app/components/calendario/calendario.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  idCiclo: any;
  constructor(
    private _calendarioService: CalendarioService
  ) { }

  ngOnInit() {
    this._calendarioService.consultaCicloAlumno().subscribe(response => {                              
      if (response && response['status']) {
        this.idCiclo = response['ciclo']['ciclo_id'];
      }            
    }, error => {
      console.log(<any>error);
    });
  }

}
