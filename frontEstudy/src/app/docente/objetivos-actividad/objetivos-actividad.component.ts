import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ControlActividadService } from 'src/app/administracion/carga-actividades/services/control-actividad.service';
import { ActivatedRoute } from '@angular/router';
import  {randomColor} from 'randomcolor';

@Component({
  selector: 'app-objetivos-actividad',
  templateUrl: './objetivos-actividad.component.html',
  styleUrls: ['./objetivos-actividad.component.scss']
})

export class ObjetivosActividadComponent implements OnInit {
  title;
  objetivo;
  jwt: string;
  mostrarGrafica: boolean = false;
  ponderacion = [];
  colorTemp = [];
  color = [];
  colorPonderacion = [];
  etiquetas = [];
  _colorGeneral;
  rol; 
  
  @Input() id_asignatura;

  public barChartLegend = false;
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ControlActividadService,
    private route: ActivatedRoute

  ){
   this.id_asignatura = this.route.snapshot.paramMap.get('id');

    this.title = 'Objetivos en la asignatura';
    this._usuarioService.pushBreadcum(this.title,"",2); 
   }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.rol = this._usuarioService.getRol();
    console.log(this.id_asignatura)
    this.consultaObjetivos();

  }

  consultaObjetivos(){
    if (this.rol.rol_id == "3") {
      this._actividadService.consultaObjetivosActividad(this.jwt, this.id_asignatura).subscribe(
        response =>{
            if(response && response['status']){
                this.objetivo = response['objetivos'];
                
                this.objetivo.forEach(objetivos => {
                  this.ponderacion.push(Math.round(objetivos.ponderacion))
                  this.etiquetas.push(objetivos.actividad_nombre)
                });
                for (let index = 0; index < this.ponderacion.length; index++) {
                  let color = randomColor()
                  this.colorTemp.push(color)
                  this.color.push({"backgroundColor" : this.colorTemp})
                  this.colorPonderacion.push(this.colorTemp)
                } 
                this.colorPonderacion.forEach(colores => {
                  this._colorGeneral = colores
  
                });
                this.mostrarGrafica = true;
            }
        },error =>{
          console.log(<any>error)
        });
    }else{
      this._actividadService.consultaObjetivosActividad(this.jwt, this.id_asignatura).subscribe(
        response =>{
          console.log(response);
            if(response && response['status']){
                this.objetivo = response['objetivos'];
                console.log(this.objetivo)
                console.log('alumno')
                this.objetivo.forEach(objetivos => {
                  this.ponderacion.push(Math.round(objetivos.ponderacion))
                  this.etiquetas.push(objetivos.actividad_nombre)
                });
                for (let index = 0; index < this.ponderacion.length; index++) {
                  let color = randomColor()
                  this.colorTemp.push(color)
                  this.color.push({"backgroundColor" : this.colorTemp})
                  this.colorPonderacion.push(this.colorTemp)
                } 
                this.colorPonderacion.forEach(colores => {
                  this._colorGeneral = colores
  
                });
                this.mostrarGrafica = true;
            }
        },error =>{
          console.log(<any>error)
        });

    }

  }




}
