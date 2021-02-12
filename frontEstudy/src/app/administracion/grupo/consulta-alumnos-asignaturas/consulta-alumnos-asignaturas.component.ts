import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaGrupoService } from '../service/asignatura-grupo.service';
import { HistorialService } from '../../alumno/historial/historial.service';
// import { GrupoService } from '../service/grupo.service';

declare var alertify;
@Component({
  selector: 'app-consulta-alumnos-asignaturas',
  templateUrl: './consulta-alumnos-asignaturas.component.html',
  styleUrls: ['./consulta-alumnos-asignaturas.component.scss']
})
export class ConsultaAlumnosAsignaturasComponent implements OnInit {
  jwt: string;
  title: string;
  idAsignaturaGrupo;
  selectedAlumno;
  _alumnos;
  grupo;
  tipoMateria;
  idTipoMateria = "";
  reprobados;
  cargandoReprobados = false;
  marcados = false;
  tipoAdmin;

  constructor(
    private _usuarioService: UsuarioService,
    private _modalService: NgbModal,
    private route: ActivatedRoute,
    private _asignaturaGrupoService: AsignaturaGrupoService,
    private _historialService: HistorialService,
    private router: Router
    // private _grupoService: GrupoService




  ){
    this.title = 'Recursamientos y alumnos especiales en la asignatura';
      
    this._usuarioService.pushBreadcum(this.title,"",2);   

   }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
    this.consultaAlumnos();
  }

  cambiaPag(id_alumno){
    let id = id_alumno;
    localStorage.setItem('id_persona', id);
    this.router.navigate(['../admin/alumno']);
    this._modalService.dismissAll()
  }


  consultaReprobados(content){
    this.cargandoReprobados = true;

    this._asignaturaGrupoService.consulta(this.idAsignaturaGrupo).subscribe(
      response =>{
        if(response && response['status']){
          this.grupo = response['grupo'];
          this._historialService.consultaNoAprobados(this.grupo.asignatura_id).subscribe(
            response=>{
              this.cargandoReprobados = false;
              if(response && response['status']){
                this.reprobados = response['reprobados']
                this.marcartodos();
              }
            },error=>{
              console.log(error)
            }
          )
        }
      },error =>{
        console.log(error)
      }
    );

    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      console.log(result)
      if(result == 'save'){
      }
    }, (reason) => {
    });
  }

  guardarRecursamientos(){
    console.log(this.reprobados)

    alertify.confirm('Agregar a recursamiento','Deseas agregar los alumnos a recursamiento',
    function(){
      this._asignaturaGrupoService.guardarReprobados(this.reprobados,this.idAsignaturaGrupo).subscribe(
        response =>{
          if(response && response['status']){            
            this._modalService.dismissAll();
            this.consultaAlumnos();
            alertify.success(response['msg'])
          }else{
            
          }
          
        },error=>{
          console.log(error);
        }
      );
    }.bind(this),function(){
      alertify.error('Cancelado')
    });

  }

  marcartodos(){
    if(!this.marcados){
      this.reprobados.forEach(function(reprobado){
        reprobado.selected = true;
      }.bind(this));
      this.marcados = true;
    }else{
      this.reprobados.forEach(function(reprobado){
        reprobado.selected = false;
      }.bind(this));
      this.marcados = false;
    }

  }


  consultaAlumnos(){
    this._asignaturaGrupoService.consultaAlumnos(this.jwt, this.idAsignaturaGrupo).subscribe(
      response =>{
          if(response && response['status'])
            this._alumnos = response['alumnos']
      },error =>{
        console.log(<any>error)
      });
  }



  open(content,tipo) {

    if(tipo == 'alumno')
      this.selectedAlumno = null;
    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result)
      if(result == 'save'){
      }
    }, (reason) => {
    });
  }

  alumnoSeleccionado(event){
    if(event.status){
      this.selectedAlumno = event.persona
      this._asignaturaGrupoService.consultaTipoMaterias().subscribe(
        response =>{
          if(response && response['status']){
            this.tipoMateria = response['tipoMateria']
          }
          
        },error =>{
          console.log(error);
        }
      )
    }
  }

  eliminaAlumno(id_persona, index){
    this._asignaturaGrupoService.eliminaAlumno(this.jwt, id_persona , this.idAsignaturaGrupo).subscribe(
      response =>{
          if(response && response['status']){
            this._alumnos.splice(index,1);
            alertify.success(response['msg'])
          }
          else
            alertify.error(response['msg'])   
      },error =>{
        console.log(<any>error)
      });
  }

  guardarAlumno(){
    if(this.idTipoMateria==''){
      alertify.error('Debes seleccionar un tipo de recursamiento')
    }else{
      if(!this.selectedAlumno){
        alertify.error('Debes seleccionar un alumno')
      }else{
        let alumnoVinculado = 0;
        if(this._alumnos){
          this._alumnos.forEach(function(alumno){

            if(this.selectedAlumno.persona_id == alumno.alumno_id)
              alumnoVinculado = 1
          }.bind(this));
        }
        if(alumnoVinculado == 1 ){
          alertify.error('Este alumno ya está vinculado al grupo');
        }else{
          this._asignaturaGrupoService.insertaAlumno(this.selectedAlumno, this.idAsignaturaGrupo,this.idTipoMateria).subscribe(
            response =>{
                if(response && response['status']){
                  this.consultaAlumnos();
                  this._modalService.dismissAll();
                  alertify.success(response['msg'])
                }
                else{
                  alertify.error(response['msg'])
                }
      
            },error =>{
              console.log(<any>error)
            });
        }
      }
    }
  }


}
