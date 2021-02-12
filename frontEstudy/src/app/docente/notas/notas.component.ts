import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NotasService } from './services/notas.service';
import {  ActivatedRoute } from '@angular/router';
import { simpleEditor} from '../../../../../frontEstudy/src/app/models/simpleEditor';
import { ActividadService } from 'src/app/materia/actividad/services/actividad.service';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';
import { MateriaService } from 'src/app/services/materia.service';

declare var alertify;

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  title: string;
  jwt;
  idActividad;
  idMateria;
  idDocente;
  idNota=null;
  texto;
  nota;
  // idMateriaFechaActividad;
  fechaActividad;
  identity;
  alumno;
  actividad;



  simpleEditor = simpleEditor;


  constructor(
    private _usuarioService: UsuarioService,
    private _notasService: NotasService,
    private _actividadService: ActividadService,
    private _materiaService: MateriaService,
    private route: ActivatedRoute,
  ) {
    this.title = 'Mis notas';
    this._usuarioService.pushBreadcum(this.title,"",2);
    this.idMateria = this.route.snapshot.params['id'];
    this.idActividad = this.route.snapshot.params['id2'];
    
   }

  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();

    this.identity = this._usuarioService.getIdentity();
    this.idDocente = this.identity.persona_id;
        

        this._notasService.consultaNotas(this.idMateria,this.idDocente).subscribe(
          response =>{
              if(response && response['status']){
                
                this.nota = response['notas'];
              }
          },
          error =>{
            console.log(<any>error)
          }
        );
        this._materiaService.consultaAlumno(this.idMateria,this.jwt).subscribe(
          response => {
            if(response && response['status']){
              this.alumno = response['alumno'];
            }
          },error=>{
            console.log(<any>error)
          }
    )

  this._actividadService.consulta(this.idActividad,this.jwt).subscribe(
    response =>{
        if(response && response['status']){
          this.actividad = response['actividad'][0];
        }
});

}
  enviar(texto) {

    if(texto !=undefined ){
      if(texto != ''){

    this._notasService.enviar(this.idActividad,this.idMateria,this.idDocente,this.texto,this.idNota).subscribe(
      response =>{
        
        if(response && response['status']){

          this._notasService.consultaNotas(this.idMateria,this.idDocente).subscribe(
            response =>{
                if(response && response['status']){
                  this.nota = response['notas'];
          
          }
        })

          if(response['idNota']){
          this.idNota=response['idNota'];
          }
          alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
        }else{
          alertify.error('Error al enviar').dismissOthers(); 
        }
    },error =>{
      console.log(error)
    }
  );
      }}
}

eliminaNotas(id,index){
    
    this._notasService.elimina(id,this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.nota.splice(index,1);
            alertify.success(response['msg']);
          }
          else{
            alertify.success(response['msg']);
          }
  
      },error =>{
        console.log(<any>error)
      });
      
  }  

}
