import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from '../service/grupo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GLOBAL }  from '../../../services/global';


declare var alertify;

@Component({
  selector: 'app-consulta-alumnos',
  templateUrl: './consulta-alumnos.component.html',
  styleUrls: ['./consulta-alumnos.component.scss']
})
export class ConsultaAlumnosComponent implements OnInit {

  jwt;
  title;
  tipoAdmin;
  idGrupo;
  grupo;
  alumnos = [];
  selectedAlumno;
  bloquear = false;
  url;

  constructor(
    private _usuarioService : UsuarioService,
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _modalService: NgbModal,
    private router: Router
  ) {
    this.idGrupo = this.route.snapshot.paramMap.get('id');

    this.title = 'Consulta de alumnos en grupo';
      
    this._usuarioService.pushBreadcum(this.title,"",2);   
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this._grupoService.consultaEspecifica( this.idGrupo , this.jwt).subscribe(
      response =>{
        
        if(response && response['status']){
          this.grupo = response['grupo'][0]; 
        }

      },error =>{
        console.log(<any>error)
    });

    this.consultaAlumnos();
  }

  cambiaPag(id_alumno){
    let id = id_alumno;
    localStorage.setItem('id_persona', id);
    this.router.navigate(['../admin/alumno']);
    this._modalService.dismissAll()
  }

  consultaAlumnos(){
    this._grupoService.consultaAlumnosGrupo(this.idGrupo, this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.alumnos = response['alumnos'];
          let _numAlumnos = this.alumnos.length;
          let cupo = parseInt(this.grupo.cupo)
          if (cupo <= _numAlumnos) {
            this.bloquear = true
          }else{
            this.bloquear = false
          }
        } 
      },error =>{
        console.log(<any>error)
      }
    )
  }

  
  open(content,tipo) {

    if(tipo == 'alumno'){
      this.selectedAlumno = null;
    }
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
      console.log(this.selectedAlumno);
      
    }
  }


  guardarAlumno(){
    if(!this.selectedAlumno)
      alertify.error('Debes seleccionar un alumno');
    else{

      let alumnoVinculado = 0;
      if(this.alumnos){
        this.alumnos.forEach(function(alumno){

          if(this.selectedAlumno.persona_id == alumno.alumno_id)
            alumnoVinculado = 1
        }.bind(this));
      }
      

      if(alumnoVinculado == 1 ){
        alertify.error('Este alumno ya está vinculado al grupo');
      }else{
        this._grupoService.agregaAlumnoGrupo(this.selectedAlumno.persona_id,this.idGrupo,this.jwt).subscribe(
          response =>{
            if(response && response['status']){
              alertify.success(response['msg'])
              this._modalService.dismissAll();
              // this.consultaAlumnos();
              this.ngOnInit();
            }else{
              alertify.error(response['msg'])
            }
          },error =>{
            console.log(<any>error);
          }
        );
      }
    }    
  }



  eliminaAlumnoGrupo(id,index){
    alertify.confirm('Eliminar','¿deseas eliminar este alumno del grupo?',
    function(){
      this._grupoService.eliminaAlumnoGrupo(id,this.idGrupo,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.alumnos.splice(index,1);
              alertify.success(response['msg']);
              this.consultaAlumnos();
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


  generaReporteAlumnosGrupo(){
    var params = '?grupo_id='+this.idGrupo;
    let urlReporte = this.url+'reportes/grupos/alumnosRegulares.php'+params;
    window.open(urlReporte, '_blank');
  }


}
