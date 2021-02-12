import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-calculadora-promedios',
  templateUrl: './calculadora-promedios.component.html',
  styleUrls: ['./calculadora-promedios.component.scss']
})
export class CalculadoraPromediosComponent implements OnInit {

  @Input() idMateria;
  jwt;
  actividadesCalculadora;
  calificacionTotalAsignatura;


  constructor(
    private _usuarioService : UsuarioService,
    private _materiaService : MateriaService
  ) { }

  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();

    this._materiaService.calculadoraPromedios(this.idMateria,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.actividadesCalculadora = response['actividades'];

          this.calculaPromedio();
        }
      },error=>{
        console.log(<any>error);
      }
    )
  }

  calculaPromedio(i =null ,calificacion = null){

    if(i != null){
      this.actividadesCalculadora[i].valor = parseFloat(calificacion) * parseFloat(this.actividadesCalculadora[i].ponderacion) /100;
    }
      

    let calificacionTmp = 0;
    this.actividadesCalculadora.forEach(function(actividad){
      calificacionTmp += parseFloat(actividad.valor);
    }.bind(this))
    
    this.calificacionTotalAsignatura = calificacionTmp.toFixed(2);    
  }

}
