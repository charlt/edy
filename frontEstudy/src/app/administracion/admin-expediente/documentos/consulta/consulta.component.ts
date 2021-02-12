import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AdminExpedienteService } from '../../admin-expediente.service';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  title: string;
  Documentos: any;
  catEtiquetas: any;
  Etiquetas: any = [];
  idDocumento: any;
  catCarreras: any;
  Carreras: any = [];
  documentoForm: FormGroup;
  tipo: string;
  boton: string;
  loading;

  constructor(
    private _usuarioService: UsuarioService,
    private _adminExpedienteService: AdminExpedienteService,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder
    ) {
    this.title = " Catálogo de documentos"
    this._usuarioService.pushBreadcum(this.title, '', 1);
  }

  ngOnInit() {
    this.consultaDocumentos();
  }

  consultaDocumentos() {
    this._adminExpedienteService.catalogos().subscribe(
      response =>{
        console.log(response);
        if(response && response['status']){
          this.Documentos = response['documento'];
        }
      },error=>{
        console.log(error)
    });
  }

  etiquetasDocumento(modal, id_documento) {
    this.Etiquetas = [];
    this.idDocumento = id_documento;
    this._adminExpedienteService.consultaDocumentoEtiquetas(id_documento).subscribe(
      response =>{      
        if(response && response['status']){
          this.catEtiquetas = response['etiquetas'];
          this.catEtiquetas.forEach(e => {
              this.Etiquetas.push({
                id_etiqueta_tr: e.id_etiqueta_tr,
                seleccionado: e.id_etiqueta_documento? true: false
              });
          });          
        }
      },error=>{
        console.log(error)
    });
    this._modalService.open(modal, {size: 'lg'});
  }

  seleccionaDato(index, tipo) {
    let variable = 'Etiquetas';
    if (tipo == 1) variable = 'Carreras';
    this[variable][index]['seleccionado'] = !this[variable][index]['seleccionado'];
  }

  carrerasDocumento(modal, id_documento) {
    this.Carreras = [];
    this.idDocumento = id_documento;
    this._adminExpedienteService.consultaDocumentoCarreras(id_documento).subscribe(
      response =>{      
        if(response && response['status']){
          this.catCarreras = response['carreras'];
          this.catCarreras.forEach(c => {
              this.Carreras.push({
                id_carrera: c.carrera_id,
                seleccionado: c.documento_carrera_id? true: false
              });
          });          
        }
      },error=>{
        console.log(error)
    });
    this._modalService.open(modal, {size: 'lg'});
  }

  guardarDatos(tipo) {
    let bandera = false;
    let form = [];
    let datos = {var: 'Etiquetas', key: 'id_etiqueta', value: 'id_etiqueta_tr', 
      service: 'guardarEtiquetasDocumento', msg: 'etiqueta'};
    if (tipo == 1) datos = {var: 'Carreras', key: 'id_carrera', value: 'id_carrera',
      service: 'guardarCarrerasDocumento', msg: 'carrera'};
    
    this[datos.var].forEach(d => {
      if(d.seleccionado) {
        bandera = true;
        let obj = {};
        obj[datos.key] = d[datos.value];
        form.push(obj);
      }
    });

    if (!bandera) {
      alertify.error(`Selecciona al menos una ${datos.msg}`).dismissOthers();
      return;
    }

    this._adminExpedienteService[datos.service](form, this.idDocumento).subscribe(
      response =>{      
        if(response && response['status']){   
          this._modalService.dismissAll();
          alertify.success(response['msg']).dismissOthers();      
        }else {
          alertify.error(response['msg']).dismissOthers();      
        }
      },error=>{
        console.log(error)
    });
    
  }

  abrirModal(modal, documento = null) {    
    if (!documento) {
      this.idDocumento = null;
      this.tipo = 'Agregar'; 
      this.boton = 'Guardar';
    }else {
      this.tipo = 'Editar';
      this.boton = 'Editar';
      this.idDocumento = documento.documento_id;
    }
    this.documentoForm = this.formBuilder.group({
      nombre_documento: [documento? documento.nombre_documento : '', Validators.required],
      documento_desc: [documento? documento.documento_desc : ''],
      obligatorio: [documento? documento.obligatorio : ''],
    });
    this._modalService.open(modal);
  }

  modificaDocumento() {
    this._adminExpedienteService.modificaDocumento(this.documentoForm.value, this.idDocumento).subscribe(
      response =>{                        
        if(response && response['status']){
          this.consultaDocumentos();
          alertify.success(response['msg']).dismissOthers();
          this._modalService.dismissAll();          
        }
        console.log(this.Documentos);
      },error=>{
        console.log(error)
    }); 
  }

  eliminar(id_documento, index){
    alertify.confirm('Eliminar documento', '¿Deseas eliminar el documento?',
    function(){
      this._adminExpedienteService.eliminarDocumento(id_documento).subscribe(
        response =>{
            if(response && response['status']){
              this.Documentos.splice(index, 1);
              alertify.success(response['msg']).dismissOthers();
            }else{
              alertify.success(response['msg']).dismissOthers();
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  } 

}
