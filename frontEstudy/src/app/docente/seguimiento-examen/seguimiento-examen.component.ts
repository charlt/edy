import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SeguimientoExamenService } from './services/seguimiento-examen.service';
import { RetroalimentacionService } from 'src/app/docente/retroalimentacion/services/retroalimentacion.service';
import { AsignaturaGrupoService } from '../../administracion/grupo/service/asignatura-grupo.service';
import { AsignaturaService } from '../../administracion/asignatura/services/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from '../grupo/services/grupo.service';

declare var alertify;

@Component({
  selector: 'app-seguimiento-examen',
  templateUrl: './seguimiento-examen.component.html',
  styleUrls: ['./seguimiento-examen.component.scss']
})
export class SeguimientoExamenComponent implements OnInit {  
  seguimientos;
  grupos;
  idAsignaturaGrupo:any = '';
  asignaturaGrupo;
  idRol;

  constructor(
    private _usuarioService: UsuarioService,
    private _seguimientoExamenService: SeguimientoExamenService,
    private _retroalimentacionService: RetroalimentacionService,
    private _asignaturaService: AsignaturaService,
    private _grupoService: GrupoService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idRol = this._usuarioService.getIdentity().rol_id;
    if(this.idRol == '3'){
      this.idAsignaturaGrupo = this._route.snapshot.params['id'];
      this.consultaSeguimiento();
    }else if(this.idRol == '1'){

    }
    
    
    

  }

  getAsignatura(event){
    if(event.idOrdenAsignatura){
      let idOrdenAsignatura = event.idOrdenAsignatura;
      
      this._asignaturaService.consultaAsignaturaGrupo(idOrdenAsignatura).subscribe(
        response =>{
          
          if(response && response['status']){
            this.grupos = response['grupos']
       
          }else{
            this.grupos = null;
          }
        },error =>{
          console.log(error)
        }
      )
    }
    /*if (this.idOrdenAsignatura) {
      this.consultaSeguimiento();      
    }*/
  }

  consultaSeguimiento(){
    this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(
      response =>{
        if(response && response['grupo']){
          this.asignaturaGrupo =response['grupo'];
        }

      },error=>{
        console.log(error)
      }
    )
    this._seguimientoExamenService.seguimiento(this.idAsignaturaGrupo).subscribe(
      response =>{
          if(response && response['status']){
            this.seguimientos = response['seguimiento'];
            this.seguimientos.forEach(function(seguimiento){
              if(seguimiento.inicio_examen)
                seguimiento.inicio_examen = new Date(seguimiento.inicio_examen *1000);
            });
          }else{
            this.seguimientos= [];
          }
      },error =>{
        console.log(<any>error)
      });
  }

  deshabilita(materia_fecha_actividad_id, persona_id){
    alertify.confirm('', '¿Deseas deshabilitar el examen de este alumno?', function(){
      this._retroalimentacionService.invalidacionActividad(materia_fecha_actividad_id, persona_id, '', '', '').subscribe(
        response =>{
            if(response && response['status']){
              alertify.success(response['msg']);
              this.consultaSeguimiento();
            }else{
              alertify.error(response['msg'])
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
      function(){
          alertify.error('Cancelado');
      }).set('labels', {ok:'Sí', cancel:'No'}); 



  }


}
