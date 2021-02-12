import { Component, OnInit, Input } from '@angular/core';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';

@Component({
  selector: 'app-accesos-persona',
  templateUrl: './accesos-persona.component.html',
  styleUrls: ['./accesos-persona.component.scss']
})
export class AccesosPersonaComponent implements OnInit {

  @Input() id_persona;
  @Input() id_rol;
  accesos;
  constructor(
    private _alumnoService:AlumnoService
  ) { }

  ngOnInit() {
    this.consultaAccesos();
  }

    consultaAccesos(){
    this._alumnoService.consultaAccesos(this.id_persona).subscribe(
      response =>{
          if(response && response['status']){
            this.accesos = response['registros'];
            this.accesos.forEach(_acceso => {
              let fechaFin = new Date(_acceso.fecha_fin * 1000).toString();
              if (fechaFin == "Invalid Date"){_acceso.fecha_fin = null;}else{_acceso.fecha_fin = new Date(_acceso.fecha_fin * 1000);}
              _acceso.fecha_inicio = new Date(_acceso.fecha_inicio * 1000);
            });
          }
          else{
            console.log(response['msg']);
          }
      },error =>{
        console.log(<any>error)
      });
  }

}
