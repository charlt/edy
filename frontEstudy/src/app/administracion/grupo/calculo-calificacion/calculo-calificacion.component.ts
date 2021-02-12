import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaGrupoService } from '../service/asignatura-grupo.service';
import { GrupoService } from 'src/app/docente/grupo/services/grupo.service';
import { ControlActividadService } from '../../carga-actividades/services/control-actividad.service';
import { ActividadService } from '../../carga-actividades/services/actividad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

declare var alertify;

@Component({
  selector: 'app-calculo-calificacion',
  templateUrl: './calculo-calificacion.component.html',
  styleUrls: ['./calculo-calificacion.component.scss']
})
export class CalculoCalificacionComponent implements OnInit {

  title;
  idRol;
  tipoCalculo;
  tipo;
  idAsignaturaGrupo;
  asignaturaGrupo;

  idGrupo;
  grupo;
  idAsignatura;
  procesando = false;
  tipoAdmin;
  ponderacionTotal = 0;
  paso = 0; 
  actividades;

  constructor(  
      private route: ActivatedRoute,
      private _asignaturaGrupoService : AsignaturaGrupoService,
      private _grupoService: GrupoService,
      private _controlActividadService: ControlActividadService,
      private _actividadService: ActividadService,
      private _usuarioService: UsuarioService,
      private location: Location
    ) {
      this.tipo = this.route.snapshot.paramMap.get('id2');
     }

  ngOnInit() {

    this.idRol = this._usuarioService.getIdentity().rol_id;
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    
    if(this.tipo ==1){
      
      this.idGrupo = this.route.snapshot.paramMap.get('id1');
      this._grupoService.consulta(this.idGrupo).subscribe(
        response =>{
          if(response && response['status']){
            this.grupo = response['grupo'][0];
            this.paso = 2;
            this.title = 'Cálculo de calificaciones y cambio de estatus en el grupo '+this.grupo.grupo;

          }
        },error =>{
          console.log(error)
        }
      )
      
    }else if(this.tipo ==2){
      this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id1');

      this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(
        response =>{
          if(response && response['status']){
            this.asignaturaGrupo = response['grupo'];
            this.title = 'Cálculo de calificaciones y cambio de estatus en la asignatura '+this.asignaturaGrupo.asignatura;

            if(this.asignaturaGrupo.situacion_asignatura_grupo_id == "4")
              this.paso = 3;
            else
              this.consulta_ponderacion();

          }
        },error =>{
          console.log(error)
        }
      )
    }
      
  }

  consulta_ponderacion(){
          this._asignaturaGrupoService.consultaActividades(this.idAsignaturaGrupo).subscribe(
        response =>{
          
          if(response['status']){          
            this.ponderacionTotal = parseInt(response['ponderacionTotal']);  
              this.paso = 1;
              this.actividades = response['actividades'];
              this.suma();
          
            
          } else{
            this.paso = 1;
            this.actividades = null;
          }
      },error =>{
        
        console.log(<any>error)
      });
  }



  suma(){
    this.ponderacionTotal = 0

    this.actividades.forEach(function(actividad){
      if(Number(actividad.ponderacion)){
        this.ponderacionTotal += parseFloat(actividad.ponderacion)
      }
     
    }.bind(this));


    
  }

  guardarPonderaciones(){

    this._controlActividadService.guardaPonderaciones(this.asignaturaGrupo.asignatura_id,this.actividades,this.idRol).subscribe(
      response=>{
        console.log(response)
        if(response && response['status']){
          this.paso = 2;
        }
      },error=>{
        console.log(error)
      }
    )

  }

  
  realizarCalculo(){
    if(!this.tipoCalculo){
      alertify.error('Debes seleccionar un tipo de cálculo');
    }else{      
      alertify.confirm('Confirmar acción', '¿Estás seguro de hacer el cálculo?', function () {
        this.procesando = true;

        if(this.tipo == 1){
          this.cerrarGrupo();
        }else if(this.tipo == 2){
          this.cerrarAsignaturaGrupo();
        }

        }.bind(this),function(){
          console.log('cancelar')
        });
        
    } 
  
  }

  cerrarAsignaturaGrupo(){
    this._asignaturaGrupoService.cerrarMaterias(this.idAsignaturaGrupo,this.tipoCalculo).subscribe(
      response=>{
        if(response && response['status']){
          alertify.success(response['msg']) 
          this.location.back();
        }else{
          alertify.error(response['msg'])
        }
        this.procesando = false;
      },error=>{
        console.log(error)
      }
    )
  }

  cerrarGrupo(){
    this._grupoService.cerrarMaterias(this.idGrupo,this.tipoCalculo).subscribe(
      response =>{
        this.procesando = false;
        if(response && response['status']){
          alertify.success(response['msg']);
          this.location.back();
        }else{
          alertify.error(response['msg'])
        }
      },error =>{
        console.log(error)
      }
    )
  }

}
