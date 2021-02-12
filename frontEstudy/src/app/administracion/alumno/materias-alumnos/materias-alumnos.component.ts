import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriasAlumnosService } from './materias-alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { AsignaturaGrupoService } from '../../grupo/service/asignatura-grupo.service';

declare var alertify;

@Component({
  selector: 'app-materias-alumnos',
  templateUrl: './materias-alumnos.component.html',
  styleUrls: ['./materias-alumnos.component.scss']
})
export class MateriasAlumnosComponent implements OnInit {
  jwt;
  title;
  id_rol;
  grupos;
  _estatus;
  materias;
  idAlumno;
  tipoEstatus = 'so';
  selectedAlumno;
  idOrdenAsignatura;
  aviso = 'Sin fechas asignadas';
  asignatura_grupo_id = "";
  asignaturaSelected;
  guarda=false;
  tipoConsulta = 3;
  tiposMaterias;

  constructor(
    private _usuarioService: UsuarioService,
    private _materiasAlumnosService: MateriasAlumnosService,
    private route: ActivatedRoute,
    private _modalService: NgbModal,
    private _catalogoService: CatalogoService,
    private _asignaturaGrupoService: AsignaturaGrupoService
  ){
    this.title = "Consulta de asignaturas";
    this._usuarioService.pushBreadcum(this.title,"materiasAlumno",1);
   }

  ngOnInit() {
    this.idAlumno = this.route.snapshot.params['id'];
    this.consultaEstatus();
    this.consultaMaterias();
    this.consultaTipoMateria();
  }

  consultaTipoMateria(){
    this._asignaturaGrupoService.consultaTipoMaterias().subscribe(
      response =>{
        if(response && response['status']){
          this.tiposMaterias = response['tipoMateria'];
          } 
      },error =>{
        console.log(<any>error)
      });
  }

  cambiaTipoMateria(tipo_materia_id, materia_id){
    this._asignaturaGrupoService.cambiaTipoMateria(tipo_materia_id, materia_id).subscribe(
      response =>{
        if(response && response['status']){
          alertify.success(response['msg']);
        }else{
          alertify.error(response['msg']);
        }
      },error =>{
        console.log(<any>error)
      });
  }

  consultaEstatus(){
    this._catalogoService.consultaEstatusMateria().subscribe(
      response =>{
        if(response && response['status']){
          this._estatus = response['estatus']
          } 
      },error =>{
        console.log(<any>error)
      });
  }

  cambiaEstatus(id_materia, id_estatus){
    this._materiasAlumnosService.cambiaEstatusMaterias(id_materia, id_estatus).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg']);
          }else alertify.error(response['msg']);
      },error =>{
        console.log(<any>error)
      });
  }

  consultaMaterias(){
    this.materias='';
    if(this.materias) this.materias = null
    this._materiasAlumnosService.consultaMaterias(this.idAlumno, this.tipoConsulta).subscribe(
      response =>{
          if(response && response['status']){
              this.materias = response['materias'];
              this.materias.forEach(_materia => {
                if(_materia.fecha_inicio && _materia.fecha_fin){
                  _materia.fecha_inicio = new Date(_materia.fecha_inicio*1000);
                  _materia.fecha_fin = new Date(_materia.fecha_fin*1000);
                }else{
                  _materia.fecha_fin = null;
                  _materia.fecha_inicio = null;
                }
                if(!_materia.calificacion)_materia.calificacion = "S/C"
              });              
          } 
      },error =>{
        console.log(<any>error)
      });
  }

  reiniciarMateria(materia_id){
  alertify.confirm('', '¿Deseas reiniciar la materia?', function(){
    this._materiasAlumnosService.reiniciarMateria(materia_id).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg']);
          }else{
            alertify.error(response['msg']);
          } 
      },error =>{
        console.log(<any>error)
      });
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'}); 
  }

  eliminar(materia_id){
    alertify.confirm('', '¿Deseas eliminar la materia?', function(){
      this._materiasAlumnosService.eliminaMateria(materia_id).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success(response['msg']);
              this.consultaMaterias(this.idAlumno);
            }else{
              alertify.error(response['msg']);
            } 
        },error =>{
          console.log(<any>error)
        });
      }.bind(this),
      function(){
          alertify.error('Cancelado');
      }).set('labels', {ok:'Sí', cancel:'No'}); 
    }

    consutaGrupo(){
      this._materiasAlumnosService.consultaGrupo(this.idOrdenAsignatura).subscribe(
        response =>{
            if(response && response['status']){
              this.grupos = response['grupos'];
            } 
        },error =>{
          console.log(<any>error)
        });
    }

    agregarMateria(content){
      this._modalService.open(content, {backdrop : 'static',keyboard : false, size: 'lg'});
    }

    _tipoConsulta(tipo){
      this.tipoConsulta = tipo
      this.consultaMaterias();
    }

    close(){
      this._modalService.dismissAll();
      this.grupos="";
      this.asignatura_grupo_id = "";
    }

    obtieneAsignatura(event){
      this.idOrdenAsignatura = event.idOrdenAsignatura;
      this.asignaturaSelected = event.idAsignatura;
      if (this.asignaturaSelected){
        if(this.materias && this.materias.length){
          this.materias.forEach(materia => {
            if (this.asignaturaSelected == materia.asignatura_id) {
              this.guarda = false;
              alertify.error('Materia ya asignada a este alumno');
            }else{
              this.guarda= true;
            }
          });
        }else{
          this.guarda= true;
        }
        
      }
      this.grupos = [];
      this.consutaGrupo();
    }

    guardarAsignatura(){
      this._materiasAlumnosService.agregaMateria(this.idAlumno, this.asignatura_grupo_id).subscribe(
        response =>{
            if(response && response['status']){
              this.consultaMaterias();
              this._modalService.dismissAll();
              alertify.success(response['msg'])
            }else alertify.error(response['msg']) 
        },error =>{
          console.log(<any>error)
        });
    }
}