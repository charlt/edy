import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ControlActividadService } from '../../services/control-actividad.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

declare var alertify;

@Component({
  selector: 'app-objetivos-ponderaciones',
  templateUrl: './objetivos-ponderaciones.component.html',
  styleUrls: ['./objetivos-ponderaciones.component.scss']
})
export class ObjetivosPonderacionesComponent implements OnInit {
  jwt: string;
  changeURL;

  idAsignatura;
  asignatura
  
  ponderacionTotal;
  _actividades;
  _identificador;
  identificador;
  objetivo;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ControlActividadService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
   }

  ngOnInit() {
    this.idAsignatura = this.route.snapshot.parent.parent.paramMap.get('id');
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
        this.consultaTabla(this.idAsignatura);

    this.changeURL = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd){                        
        if(val.url == val.urlAfterRedirects){
        this.idAsignatura = this.route.snapshot.paramMap.get('id');
        this.jwt = this._usuarioService.getJWT();
        
        this.consultaTabla(this.idAsignatura);
        }
        
      }
    });  
    

  }



  consultaObjetivos(){
    this._actividadService.consultaObjetivosActividad(this.jwt, this.idAsignatura ).subscribe(
      response =>{
          if(response && response['status']){

            this.objetivo = response['objetivos']
            this.objetivo.forEach(_objetivo => {
              if(!_objetivo.objetivo_alumno)
                _objetivo.objetivo_alumno = "";
              if (!_objetivo.objetivo_docente) 
                _objetivo.objetivo_docente = "";
            });
          }
      },error =>{
        console.log(<any>error)
      });
  }

  

  consultaTabla(idAsignatura){
    this._actividadService.consultaActividades(idAsignatura).subscribe(
      response =>{
        this.ponderacionTotal = 0
          if(response && response['status']){
            console.log(response)
            this.identificador = 1;
            this._actividades = response['Actividades']  
            this.consultaObjetivos();    
            
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

  guardarDatos(actividad, id_actividad, objetivos_actividad_id){
    if (!objetivos_actividad_id) {
      objetivos_actividad_id = 0
      console.log(objetivos_actividad_id)
    }
    this._actividadService.guardaObjetivosPonderacion(actividad, this.jwt, id_actividad, objetivos_actividad_id ).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
            this.consultaObjetivos();
          }
      },error =>{
        console.log(<any>error)
      });
  }
}
