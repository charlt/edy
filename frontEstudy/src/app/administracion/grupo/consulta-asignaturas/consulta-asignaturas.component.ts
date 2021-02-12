import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from '../service/grupo.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { AsignaturaGrupoService } from '../service/asignatura-grupo.service';

declare var alertify;

@Component({
  selector: 'app-consulta-asignaturas',
  templateUrl: './consulta-asignaturas.component.html',
  styleUrls: ['./consulta-asignaturas.component.scss']
})
export class ConsultaAsignaturasComponent implements OnInit {

  jwt;
  title; 

  @ViewChild('contentNuevaAsignatura') modalSesion: NgbModalRef;
  fechasForm: FormGroup;
  closeResult: string;
  editorDocente = 0;

  idGrupo;
  grupo;
  asignaturas = [];
  selectedDocente;
  docente;
  idOrdenAsignaturaSelected;
  idAsignaturaGrupoSelected;
  idAsignaturaSelected;
  fechaInicio;
  fechaFin;
  idAsignaturaFechas;
  tipoAdmin;
  tipoCalculo;
  
  guardando = false;

  constructor(
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _grupoService: GrupoService,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _asignaturaGrupoService: AsignaturaGrupoService,
    private router:Router
  ) {
    this.idGrupo = this.route.snapshot.paramMap.get('id');
    this.title = 'Consulta de asignaturas en grupo';
    this._usuarioService.pushBreadcum(this.title,"",2);     
   }

   get f() { return this.fechasForm.controls;}

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
    this.consultaAsignaturas();
    this.fechasForm = this.formBuilder.group({
      fechaInicio:   ['', Validators.required],
      fechaFin:['', Validators.required],
    });
  }

  cambiaPag(id_persona){
    console.log(id_persona);
    let id = id_persona;
    localStorage.setItem('id_persona', id);
    this.router.navigate(['../admin/docente']);
    this._modalService.dismissAll()
  }

  consultaAsignaturas(){
    this._grupoService.consultaAsignatura( this.idGrupo , this.jwt).subscribe(
      response =>{        
        if(response && response['status']){
          this.asignaturas = response['Asignaturas'];           
        }
      },error =>{
        console.log(<any>error)
    });
  }
  consultaAsignaturaDocente(){
    this._grupoService.consultaDocenteAsignatura( this.idAsignaturaGrupoSelected , this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.docente = response['docente'][0]; 
        }else{
          this.docente = null;
        }

      },error =>{
        console.log(<any>error)
    });
  }

  
  actualizaFechas(){
    this._asignaturaGrupoService.actualizaFechas(this.jwt, this.fechasForm, this.idAsignaturaFechas).subscribe(
      response =>{
        if(response && response['status']){
          this.consultaAsignaturas();
          alertify.success(response['msg']) 
        }else{
          alertify.error(response['msg'])
        }
      },error =>{
        console.log(<any>error)
    });
  }

  modalFechas(content, fechaInicio, fechaFin, idSelected){
    // console.log(fechaInicio, fechaFin)
    this.idAsignaturaFechas = idSelected;
    if( fechaInicio && fechaFin && fechaInicio !="0000-00-00 00:00:00" && fechaFin != "0000-00-00 00:00:00"){
      let _fechaInicio = fechaInicio.split(" ")[0]
      let _fechaFin = fechaFin.split(" ")[0]
      this.fechasForm.get('fechaInicio').setValue(_fechaInicio);
      this.fechasForm.get('fechaFin').setValue(_fechaFin);
      this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }else{
      this.fechasForm.get('fechaInicio').setValue(" ");
      this.fechasForm.get('fechaFin').setValue(" ");
      this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
  }

  menuModal(content,tipo,id = 0) {
    if(tipo == 'asignatura')
      this.idOrdenAsignaturaSelected = null;
    if(tipo == 'docente'){
      this.editorDocente = 0;
      this.idAsignaturaGrupoSelected = id;
      this.selectedDocente = 0;
      this.consultaAsignaturaDocente();
    }

    this.open(content);
      
  }



  open(content){
    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result == 'save'){

      }
    }, (reason) => {
    });
  }


  abrirEditorDocente(){
    this.editorDocente = 1;
  }

  docenteSeleccionado(event){
    if(event.status){
      this.selectedDocente = event.persona
      console.log(this.selectedDocente);
      
    }
  }



  getAsignatura(event){
    // console.log(event)
    this.idOrdenAsignaturaSelected = event.idOrdenAsignatura;
  }

  guardarAsignatura(){
    if(!this.idOrdenAsignaturaSelected)
      alertify.error('Debes seleccionar una asignatura');
    else{

      

      let asignaturaVinculada = 0;
      if(this.asignaturas){
        this.asignaturas.forEach(function(asignatura){

          if(this.idOrdenAsignaturaSelected == asignatura.orden_asignatura_id)
            asignaturaVinculada = 1
        }.bind(this));
      }
      

      if(asignaturaVinculada == 1 ){
        alertify.error('Esta asignatura ya está vinculada al grupo');
      }else{
        this.guardando = true;
        this._grupoService.agregaGrupoAsignatura(this.idOrdenAsignaturaSelected,this.idGrupo,this.jwt).subscribe(
          response =>{
            if(response && response['status']){
              alertify.success(response['msg'])
              this.consultaAsignaturas();
              this._modalService.dismissAll();

            }else{
              alertify.error(response['msg'])
            }
            this.guardando = false;
          },error =>{
            console.log(<any>error);
          }
        );
      }
    }    
  }

  guardarDocente(){

    if(!this.selectedDocente){
      alertify.success('No se seleccionó docente')
    }else{
      this._grupoService.agregaAsignaturaDocente(this.idAsignaturaGrupoSelected,this.selectedDocente.persona_id,this.jwt).subscribe(
        response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
            this.consultaAsignaturas();
            this._modalService.dismissAll();
  
          }else{
            alertify.error(response['msg'])
          }
        },error =>{
          console.log(<any>error);
        }
      );
    }

  
  }

  eliminaAsignatura(id,index){
    alertify.confirm('¿deseas eliminar esta asignatura del grupo?',
    function(){
      this._grupoService.eliminaGrupoAsignatura(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.asignaturas.splice(index,1);
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

}
