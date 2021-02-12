import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/administracion/carga-actividades/services/actividad.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PreguntaService } from 'src/app/administracion/carga-actividades/services/pregunta.service';


declare var alertify;

@Component({
  selector: 'app-consulta-pregunta',
  templateUrl: './consulta-pregunta.component.html',
  styleUrls: ['./consulta-pregunta.component.scss']
})
export class ConsultaPreguntaComponent implements OnInit {

  jwt;
  idActividad;
  actividad;
  preguntas;
  
  constructor(
    private _usuarioService : UsuarioService,
    private _actividadService: ActividadService,
    private _preguntaService: PreguntaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {


    this.jwt = this._usuarioService.getJWT();
    
    this.idActividad = this.route.snapshot.parent.params['id'];


    this._actividadService.consultaActividad(this.idActividad,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.actividad = response['actividad'][0];
          this.consulta_preguntas(this.actividad.actividad_id)
        }
        console.log(response)
      },error=>{
        console.log(error)
      });
  }

  
  consulta_preguntas(id_actividad){  
    
      this._actividadService.consultaPreguntas(id_actividad,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.preguntas = response['preguntas'];
            }else{
              this.preguntas = [];
            }
        },error =>{
          console.log(<any>error)
        });
  }

  eliminaPregunta(id,k){
    
    alertify.confirm("¿Deseas eliminar la pregunta?",
    function(){
      this._preguntaService.elimina(id,this.idActividad).subscribe(
        response =>{
            if(response && response['status']){
              this.preguntas.splice(k,1);
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
      alertify.error('Cancel');
    });
        
    }      

    dropPregunta(event: CdkDragDrop<string[]>) {
      let idPregunta = this.preguntas[event.previousIndex].datos_pregunta_id;
      let nuevoOrden = event.currentIndex+1
  
      moveItemInArray(this.preguntas, event.previousIndex, event.currentIndex);
  
      this._preguntaService.orden(nuevoOrden,this.idActividad,idPregunta,this.jwt).subscribe(
        response =>{
          console.log(response)
            if(response && response['status']){
              alertify.success(response['msg']);
            }
            else{
              alertify.success(response['msg']);
            }
    
        },error =>{
          console.log(<any>error)
        });
    
  

}

     
  setPonderacion(ponderacion){
    localStorage.setItem('ponderacion', ponderacion.ponderacion);
    this._preguntaService.preguntaEliminada.emit(ponderacion); 
  }

}
