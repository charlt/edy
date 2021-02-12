import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PlanEstudiosService } from '../services/plan-estudios.service';
import { CarreraService } from '../../carrera/services/carrera.service';
import { CatCarreras } from '../../../models/datosGenerales/catCarreras';
import { CatPlanEstudios } from '../../../models/datosGenerales/catPlanEstudios';
import { CatOrdenJerarquico } from '../../../models/datosGenerales/catOrdenJerarquico';
import { GrupoService } from 'src/app/docente/grupo/services/grupo.service';


import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from '../../asignatura/services/asignatura.service';
import { OrdenJerarquicoService } from '../services/orden-jerarquico.service';
import { FormGroup } from '@angular/forms';
import { GLOBAL }  from '../../../services/global';

declare var alertify;

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.scss']
})
export class VistaGeneralComponent implements OnInit{
 
  

  ordenJerarquico: Array<CatOrdenJerarquico> = new Array<CatOrdenJerarquico>();
  carrera: CatCarreras = new CatCarreras();
  planEstudios: CatPlanEstudios = new CatPlanEstudios();
  closeResult: string;

  idPlanOrdenSelected;
  idPlanEstudios;
  idCarrera;
  urlImagen = [];
  urlImagenPrevia = [];
  idAsignaturaSelected;
  imgURLPrevia;
  idAsignatura;
  idOrdenAsignatura;
  asignatura;

  modalReference: NgbModalRef;
  
  asignaturasTronco;
  idAsignaturaTronco = "";
  idAsignaturaExistente: number;


  jwt: string;
  imgFile: any;
  estado = 0;
  public title: string;
  public message: string;
  imgURL: any;  
  public url: string;
  size: any;
  width: number;
  height: number; 
  btnDisabled: boolean = true;
  imgForm: FormGroup;
  public urlG: string;

  tipoCopia = 0;
  cargandoAsignatura = false;
  tipoAdmin;
  file;


  constructor(
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _grupoService: GrupoService,
    private _planEstudiosService : PlanEstudiosService,
    private _asignaturaService : AsignaturaService,
    private _carreraService: CarreraService,
    private _ordenJerarquicoService : OrdenJerarquicoService,
    private modalService: NgbModal,
    private _router: Router        
    
  ) {
    
    this.title = 'Vista de plan de estudios';          
    this._usuarioService.pushBreadcum(this.title,"",2);

    this.urlG = GLOBAL.urlAssets;

   }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.idPlanEstudios = this.route.snapshot.paramMap.get('id');
    this.idCarrera = this.route.snapshot.paramMap.get('id2');

    this._carreraService.consulta( this.idCarrera , this.jwt).subscribe(
      response =>{
        // console.log(response)    
        if(response && response['status']){
          this.carrera = response['carreras'][0]
        }
      },error =>{
        console.log(<any>error)
      });
      this._planEstudiosService.consultaEspecifica( this.idPlanEstudios , this.jwt).subscribe(
        response =>{
          // console.log(response)    
          if(response && response['status']){
            this.planEstudios = response['planEstudio'][0]
          }
        },error =>{
          console.log(<any>error)
        });
      this._planEstudiosService.consultaOrdenJerarquico( this.idPlanEstudios , this.jwt).subscribe(
        response =>{
          if(response && response['status']){
            this.ordenJerarquico = response['ordenJerarquico']; //url            
            this.ordenJerarquico.forEach( _asignaturas => {
              _asignaturas.asignaturas.forEach( asignaturas2 => {
                this.urlImagen.push({ id: asignaturas2.asignatura_id, url: asignaturas2.url_imagen});
                this.urlImagenPrevia.push({ id: asignaturas2.asignatura_id, url:asignaturas2.url_imagen_previa});
              });
            });
          }
        },error =>{
          console.log(<any>error)
        });
      
  }

  

  open(content,idPlanOrden,idAsignatura){
    this.idPlanOrdenSelected = idPlanOrden;
    this.tipoCopia = 1;
    this.idAsignaturaSelected = idAsignatura;
    this.modalReference = this.modalService.open(content,{windowClass:"xlModal"});
    /*let resImagen = this.urlImagen.filter(resultado => resultado.id == idAsignatura);
    if(resImagen[0].url  !== null){
      this.imgURL = this.urlG + resImagen[0].url
    }else {
      this.imgURL = "";
    }
    let imgPreviaUrl = this.urlImagenPrevia.filter(res => res.id == idAsignatura);
    if(imgPreviaUrl[0].url  !== null){
      this.imgURLPrevia = this.urlG + imgPreviaUrl[0].url
    }else {
      this.imgURLPrevia = "";
    }*/
    
  }
  open3(content,idPlanOrden){
    this.idPlanOrdenSelected = idPlanOrden;
    this.tipoCopia = 0;
    this.modalReference = this.modalService.open(content,{windowClass:"sm"});
    /*this._asignaturaService.consultaAsignaturasTroncoComun(this.jwt).subscribe(response =>{
      console.log(response);
      if(response && response['status']){
        this.asignaturasTronco = response['asignaturas'];
        
      }
    },error =>{
      console.log(error)
    });*/
  }

  // guardarAsignaturaTronco(){
    
  //   if(this.idAsignaturaTronco != ""){
  //     this._asignaturaService.insertaPlanOrdenAsignatura( this.idPlanOrdenSelected, this.idAsignaturaTronco, this.jwt).subscribe(
  //       response =>{
          
  //         if(response && response['status']){
  //           alertify.success(response['msg'])
  //           this.refreshPlanEstudio(this.idPlanEstudios)
            
  //         }else{
  //           alertify.error(response['msg'])
  //         }
  //       },error =>{
  //         console.log(<any>error)
  //       });

  //   }else{
  //     alertify.error('Debes seleccionar una asignatura')
  //   }
  // }

  refreshPlanEstudio(idPlanEstudios){
    this._planEstudiosService.consultaOrdenJerarquico( idPlanEstudios , this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.ordenJerarquico = response['ordenJerarquico'];
        }
      },error =>{
        console.log(<any>error)
      });
  }

  getInsertAsignatura($event){
    let idAsignatura = $event;
    // if(idAsignatura){//al entrar a  la función damos por entendido que existe 
      // this._asignaturaService.insertaPlanOrdenAsignatura( this.idPlanOrdenSelected, idAsignatura, this.tipoCopia).subscribe(
      //   response =>{
      //     if(response && response['status']){
      //       alertify.success(response['msg'])
            this.refreshPlanEstudio(this.idPlanEstudios)
            
      //     }else{
      //       alertify.error(response['msg'])
      //     }
      //   },error =>{
      //     console.log(<any>error)
      //   });
    // }else{
    //   this.refreshPlanEstudio(this.idPlanEstudios)
    // }
    this.modalReference.close();
  }

  consultaAsignatura(asignatura_id, orden_asignatura_id){
    console.log(asignatura_id, orden_asignatura_id);
    this._router.navigate(['/admin/carga/asignatura/'+asignatura_id+'/'+orden_asignatura_id+'/modulos/consulta']);
  }
    
  editaAsignatura(){
    console.log('vamo a editar')
  }
  
  eliminaAsignatura(idOrdenAsignatura){
    alertify.confirm('', '¿Deseas eliminar la asignatura del plan de estudios?', function(){
      this._ordenJerarquicoService.eliminaAsignatura(idOrdenAsignatura).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success(response['msg']);
              this.refreshPlanEstudio(this.idPlanEstudios);
            }
            else{
              alertify.success(response['msg']);
            }
        },error =>{
          console.log(<any>error)
        });
      }.bind(this),
      function(){
          alertify.error('Cancelado');
      }).set('labels', {ok:'Sí', cancel:'No'});      
  }

  nuevoOrden(){
  alertify.confirm('', '¿Deseas agregar un nuevo grado?', function(){
        this._ordenJerarquicoService.agregaOrdenJerarquico(this.idPlanEstudios,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          alertify.success(response['msg']);
          this.refreshPlanEstudio(this.idPlanEstudios);
        }
        else{
          alertify.success(response['msg']);
        }
      },error =>{
      console.log(<any>error)
      });
  }.bind(this),
  function(){
    alertify.error('Cancelado');
  }).set('labels', {ok:'Sí', cancel:'No'});
  }

  eliminaOrdenJerarquico(idPlanOrden){
    alertify.confirm('', '¿Deseas eliminar el contenido?', function(){
      this._ordenJerarquicoService.elimina(idPlanOrden).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success(response['msg']);
              this.refreshPlanEstudio(this.idPlanEstudios);
            }
            else{
              alertify.success(response['msg']);
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});
      
  }

  showFormAsignatura(){
    alert('')
  }

  getDatos(evt: any) {
    if (evt.change) this.idAsignaturaExistente = undefined;
    else if (evt.idAsignatura) {
      this.idAsignaturaExistente = evt.idAsignatura
    }
    // console.log(evt);
  }

  guardarAsignaturaExistente(){
    if(this.idAsignaturaExistente){
      this.cargandoAsignatura = true;
      this._asignaturaService.insertaPlanOrdenAsignatura( this.idPlanOrdenSelected, this.idAsignaturaExistente,'', this.tipoCopia).subscribe(
        response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
            this.refreshPlanEstudio(this.idPlanEstudios)
            this.modalService.dismissAll();
          }else{
            alertify.error(response['msg'])
          }
          this.cargandoAsignatura = false;
        },error =>{
          console.log(<any>error)
        });

    }else{
      alertify.error('Debes seleccionar una asignatura')
    }
  }
}