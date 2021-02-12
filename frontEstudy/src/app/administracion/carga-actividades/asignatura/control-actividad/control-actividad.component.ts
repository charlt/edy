import { Component, OnInit, Input } from '@angular/core';
import { slideToTop } from '../../../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ControlActividadService } from '../../services/control-actividad.service';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// import { parse } from 'path';


declare var alertify

@Component({
  selector: 'app-control-actividad',
  templateUrl: './control-actividad.component.html',
  styleUrls: ['./control-actividad.component.scss'],
  animations: [slideToTop()]
  
})
export class ControlActividadComponent implements OnInit {
  breadcum: [];
  public title: string;
  public fecha_inicio; //servicio
  public fecha_fin; //servicio
  public ponderacion; //servicio
  jwt: string;
  changeURL;
  carreras;
  asignaturas;
  identificador;

  asignatura;

  idAsignatura;
  ponderacionTotal = 0;
  _asignaturas;
  _actividades;
  actividad_padre_id;
  _identificador;
  tipoAdmin;

  constructor(
    private _translate: TranslateService,
    private _usuarioService: UsuarioService,
    private _actividadService: ControlActividadService,
    private route: ActivatedRoute,
    private router: Router
    ){
      this.idAsignatura = this.route.snapshot.parent.paramMap.get('id'); 
      this._translate.setDefaultLang('es');
    
    this.title = "Control de actividades"
    this._usuarioService.pushBreadcum(this.title,'/admin/actividad',1);

  }

  ngOnInit() {
    this.idAsignatura = this.route.snapshot.parent.parent.paramMap.get('id');
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.consultaTabla(this.idAsignatura);
    
  }



  reasignarCalificacionActividad(id_actividad,tipo_calificacion){
    alertify.confirm('', '¿Deseas volver a calcular todas las calificaciones de los alumno que han sido respondidas en esta actividad?', function(){
      this._actividadService.reasignarCalificacion(this.jwt, id_actividad,tipo_calificacion).subscribe(
    response =>{
      console.log(response);
      if(response && response['status']){
        alertify.success(response['msg']);
      }
      else{
        alertify.success(response['msg']);
      }
    },error =>{
    console.log(<any>error)
    });
}.bind(this),
function(){
  alertify.error('Cancelado');
}).set('labels', {ok:'Sí', cancel:'No'});
  }


  obtieneAsignatura(event){
    this.idAsignatura = event.idAsignatura
    this.consultaTabla(this.idAsignatura);
  }


    consultaTabla(idAsignatura){
      this._actividadService.consultaActividades(this.idAsignatura).subscribe(
        response =>{
          this.ponderacionTotal = 0
            if(response && response['status']){
              this._actividades = response['Actividades']
              this._actividades.forEach(actividad => {
                if (!actividad.actividad_padre_id) {
                  actividad.actividad_padre_id = ""
                  
                }

                actividad.fecha_inicio = actividad.fecha_inicio ?  actividad.fecha_inicio.split(" ")[0] : null; 
                actividad.fecha_fin = actividad.fecha_fin ?  actividad.fecha_fin.split(" ")[0] : null; 
                let suma
                suma = parseFloat(actividad.ponderacion)
                this.ponderacionTotal += suma   
                if (this.ponderacionTotal > 100) {
                  this._identificador = 1
                }else{
                  this._identificador = 0
                }              
              
              });       
              this.identificador = 1;
            }else{
              this.identificador = 0;
            }
        },error =>{
          console.log(<any>error)
        });
    }

    catalogoPadre(_actividad, id){
      let actividadTmp = _actividad.filter(actividad=>actividad.actividad_id != id);
      return actividadTmp;
    }

    guardarDatos(actividad){
      this._actividadService.modificaActividad(actividad).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success('Actividad actualizada correctamente')
              this._actividadService.consultaActividades(this.idAsignatura).subscribe(
                response =>{
                  this.ponderacionTotal = 0
                    if(response && response['status']){
                      this._actividades = response['Actividades']
                      this._actividades.forEach(actividad => {
                        if (!actividad.actividad_padre_id) {
                          actividad.actividad_padre_id = ""
                        }

                        actividad.fecha_inicio = actividad.fecha_inicio ?  actividad.fecha_inicio.split(" ")[0] : null; 
                        actividad.fecha_fin = actividad.fecha_fin ?  actividad.fecha_fin.split(" ")[0] : null; 

                        let suma
                        suma = parseFloat(actividad.ponderacion)
                        this.ponderacionTotal += suma   
                        if (this.ponderacionTotal > 100) {
                          this._identificador = 1
                        }else{
                          this._identificador = 0
                        }              
                      });       
                    }
                },error =>{
                  console.log(<any>error)
                });
            }
        },error =>{
          console.log(<any>error)
        });
    }


    

}
