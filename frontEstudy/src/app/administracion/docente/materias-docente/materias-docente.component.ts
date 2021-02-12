import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AsignaturaService } from '../../asignatura/services/asignatura.service';
import { FechaService } from 'src/app/services/fecha.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EncuestaService } from '../../encuesta/services/encuesta.service';
import { MateriasAlumnosService } from '../../alumno/materias-alumnos/materias-alumnos.service';

declare var alertify: any;

@Component({
  selector: 'app-materias-docente',
  templateUrl: './materias-docente.component.html',
  styleUrls: ['./materias-docente.component.scss']
})
export class MateriasDocenteComponent implements OnInit {

  title: string;
  idDocente;
  jwt;
  asignaturaGrupo;
  cargando: boolean = true;
  alert: boolean = false;
  Encuestas: any;
  idEncuesta;
  id_docente;
  idOrdenAsignatura: any;
  grupos: any;
  asignatura_grupo_id: any;

  @ViewChild('content') myModal: NgbModal;
  @ViewChild("modalEncuesta") modalEncuesta : ElementRef;

  constructor(
    private _usuarioService: UsuarioService,
    private _asignaturaService: AsignaturaService,
    private _encuestaService: EncuestaService,
    private modalService: NgbModal,
    private router: ActivatedRoute,
    private _fechaService: FechaService,
    private _materiasAlumnosService: MateriasAlumnosService
  ) {
    this.title = 'Mis grupos';
    this._usuarioService.pushBreadcum(this.title,"/docente/home",1);        
    this._usuarioService.removeBreadcum(2);
   }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.id_docente = this.router.snapshot.params['id'];
    this.consultaAsignaturas();
    this.consultaEncuesta();
  }

  consultaAsignaturas() {
    this._asignaturaService.consultaAsignaturas(this.id_docente).subscribe(
      response =>{
        if(response && response['status']){
          let asignaturas = response['Asignaturas']
            asignaturas.forEach(function(asignatura){
            let arreglo =this._fechaService.validaVigencia(asignatura.fecha_inicio, asignatura.fecha_fin,1);
            asignatura.fecha_inicio = new Date(asignatura.fecha_inicio*1000);
            asignatura.fecha_fin = new Date(asignatura.fecha_fin*1000);
            asignatura.activa = arreglo[0];
            asignatura.estado = arreglo[1];

          }.bind(this));
          this.asignaturaGrupo = asignaturas;
          this.cargando = false;
          this.alert = false;
        }else{
          this.cargando = false;
          this.alert = true;
        }
    },error =>{
      console.log(<any>error)
    });
  }

  consultaEncuesta() {
    this._encuestaService.consultaEncuestaAlumno().subscribe(response =>{
      if(response && response['status']){
        this.Encuestas = response['encuesta'];
        this.idEncuesta = this.Encuestas[0]['encuesta_id'];
        this.modalService.open(this.modalEncuesta, {backdrop: 'static', size: 'lg'});
      }
    },error =>{
      console.log(<any>error)
    });
  }

  setBreadcum(title, id_grupo){
    this.title = title;
    let url = "/docente/grupo/" + id_grupo;
    this._usuarioService.pushBreadcum(this.title, url, 1);    
  }

  agregarMateria(content){
    if (this.asignatura_grupo_id) this.asignatura_grupo_id = undefined;
    this.grupos = undefined;
    this.modalService.open(content, {backdrop : 'static',keyboard : false, size: 'lg'});
  }

  obtieneAsignatura(event){
    this.idOrdenAsignatura = event.idOrdenAsignatura;
    if (this.asignatura_grupo_id) this.asignatura_grupo_id = undefined;
    this.grupos = undefined;
    this.consultaGrupo();
  }

  consultaGrupo(){
    this._materiasAlumnosService.consultaGrupo(this.idOrdenAsignatura).subscribe(
      response =>{
          if(response && response['status']){
            this.grupos = response['grupos'];            
          }
      },error =>{
        console.log(<any>error)
      });
  }

  setGrupo(event) {
    this.asignatura_grupo_id = event.target.value;
  }

  guardarAsignatura(){
    this._materiasAlumnosService.agregaMateriaDocente(this.id_docente, this.asignatura_grupo_id).subscribe(
      response =>{
          if(response && response['status']){
            this.consultaAsignaturas();
            this.modalService.dismissAll();
            alertify.success(response['msg']).dismissOthers();
          }else alertify.error(response['msg']).dismissOthers(); 
      },error =>{
        console.log(<any>error)
      });
  }

  eliminar(asignatura, index){        
    alertify.confirm('Eliminar asignatura', `¿Deseas eliminar la asignatura ${asignatura.asignatura}?`, function(){
      this._materiasAlumnosService.eliminaAsignaturaDocente(this.id_docente, asignatura.asignatura_grupo_id).subscribe(
        response => {      
        if (response && response['status']) {           
          this.asignaturaGrupo.splice(index, 1);
          if (this.asignaturaGrupo.length == 0) 
            this.consultaAsignaturas();
          alertify.success(response['msg']).dismissOthers();
        }      
      }, error => {
        console.log(<any>error);
      }); 
      }.bind(this),
      function(){
          alertify.error('Cancelado');
      }).set('labels', {ok:'Sí', cancel:'No'});  
  }

}
