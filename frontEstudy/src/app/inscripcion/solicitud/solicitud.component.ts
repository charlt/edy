import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SolicitudService } from '../services/solicitud.service';
import { InscripcionService } from '../inscripcion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'inscripcion-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  title: string;
  id: number = 0; 
  jwt: string;
  Formularios: any;
  cargando = true;
  tipoForm: number = 0;
  indexForm: number;
  breadcum = [];
  id_persona;
  persona;
  paso;
  infoPersonalCompleta;
  infoCleaverCompleto;
  claveAspirante;
  solicitudCompleta = false;
  rolId: number;


  idCarrera;
  seleccionAsesor;

  selecciones = [false, false];
  bandera: boolean = false;
  infoAsesor: any;

  @Input() aspiranteId: number;
  @ViewChild('content') modal: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _inscripcionService: InscripcionService,
    private _solicitudService: SolicitudService,
    private _modalService: NgbModal,
    private route: ActivatedRoute

  ) {
    this.title = "Información de inscripción"
    this.rolId = parseInt(this._usuarioService.getRol().rol_id);   
    if (this.rolId == 4 || this.rolId == 2){
      this.aspiranteId = parseInt(this._usuarioService.getIdentity().persona_id);
      this._usuarioService.pushBreadcum(this.title,"/inscripcion/solicitud",1);
    }else if(this.rolId == 1 || this.rolId == 5){
      this.aspiranteId = parseInt(this.route.snapshot.paramMap.get('id'));
      this._usuarioService.pushBreadcum(this.title,"",2);
    }else {
      this._usuarioService.pushBreadcum(this.title,"",2);
    }
  }

  ngOnInit() {    
    // this.id_persona = this.route.snapshot.paramMap.get('id');    
    // if (this.rolId == 4 || this.rolId == 2){
    //   this.aspiranteId = parseInt(this._usuarioService.getIdentity().persona_id);
    //   this._usuarioService.pushBreadcum(this.title,"/learning/solicitud",1);
    // }else {
    //   this._usuarioService.pushBreadcum(this.title,"",2);
    // }
    this.jwt = this._usuarioService.getJWT();
    this.consulta();
  }

  registroPersona(){
    this._solicitudService.actualizaInfoPersonal(this.aspiranteId).subscribe(
      response =>{        
        if(response && response['status'] == 1){
          this.infoPersonalCompleta = '1';
        }
      },error=>{
        console.log(error);
    });
  }

  consulta(){    
    this._solicitudService.consultaFormularios(this.jwt, this.aspiranteId).subscribe(
      response =>{                        
      if (response && response['status']) {        
        this.Formularios = response['formulario'];  
        console.log(this.Formularios);
                   
      }else{
        this.Formularios = []
      }
      this.consultaAspirante();
    }, error => {
      console.log(<any>error);
    });
  }

  consultaAspirante(id = 0){
    this._inscripcionService.consultaAspirante( this.aspiranteId).subscribe(
      response =>{                        
      if (response && response['status']) {
        this.paso = response['aspirante'].paso;        
        this.infoPersonalCompleta = response['aspirante'].info_personal_completa;
        this.infoCleaverCompleto = response['aspirante'].cleaver_completo;
        this.claveAspirante = response['aspirante'].clave_aspirante;
        this.idCarrera = response['aspirante'].carrera_id;
        this.seleccionAsesor = response['aspirante'].seleccion_asesor;

        if(response['aspirante'].asesor_persona_id) {
          let r = response['aspirante'];          
          this.infoAsesor = {
            asesor_persona_id: r.asesor_persona_id,
            asesor_id: r.asesor_id,
            nombre: r.nombre_tutor,
            primer_apellido: r.primer_apellido_tutor,
            segundo_apellido: r.segundo_apellido_tutor,
            clave_asesor: r.clave_asesor
          }
        }
        
        if(parseInt(response['aspirante'].paso) >= 1){
          this.solicitudCompleta = true;
        }        
        if (id == 1 && parseInt(this.paso) == 1) {
          this.openModal();
        }
        if (!id) {          
          this.Formularios.map(form => {
            this.selecciones.push(false);
          });                     
          this.bandera = true;
        }
      }
    }, error => {
      console.log(<any>error);
    });
  }

  setDatos(formulario_id, tipo, index) {         
    if ((parseInt(formulario_id) != this.id) || 
      (tipo == 1 && this.indexForm != index) || (tipo == 2 && this.indexForm != index)
      || (tipo == 3 && this.indexForm != index)) {  
      this.id = 0;              
      for (let i = 0; i < this.selecciones.length; i++) {
        this.selecciones[i] = false;
      }
      this.indexForm = parseInt(index); 
      this.cargando = true;
      this.id = parseInt(formulario_id);    
      if (!tipo) {  
        this.tipoForm = 0;
        this.selecciones[index + 2] = true;
      } else {
        this.id = 0;
        this.tipoForm = tipo;
        this.selecciones[index] = true;
      }
    }    
  }

  formularioCargado(evt){
    this.cargando = false;
  }

  changeForm(evt, tipo = 0){           
    if (tipo == 0) {
      this.Formularios[this.indexForm].contestado = 1;
      if (this.indexForm < this.Formularios.length - 1) {
        let nuevoIndex = this.indexForm + 1;
        this.setDatos(this.Formularios[nuevoIndex].formulario_id, 0, nuevoIndex);          
      }else {
        this.setDatos(0, 2, this.Formularios.length + 1);
      }
    }else if (tipo == 1) {
      this.registroPersona();
      // this.setDatos(this.Formularios[0].formulario_id, 0, 0);
      if(this.seleccionAsesor){ //validamos si tiene disponible el formulario del asesor
        this.setDatos(0, 3, 1);
      }else{
        if(this.Formularios.length)
          this.setDatos(this.Formularios[0].formulario_id, 0, 0);
      }
    
    } else if (tipo == 2) {
      this.infoCleaverCompleto = '1';
      this.setDatos(0, 1, 0);
    } else if (tipo == 3) {
      this.setDatos(this.Formularios[0].formulario_id, 0, 0);
    }     
    this.consultaAspirante(1);    
  }

  openModal() {
    this._modalService.open(this.modal, {size: 'lg'});
  }

  closeModal(){
    this._modalService.dismissAll();
  }

}
