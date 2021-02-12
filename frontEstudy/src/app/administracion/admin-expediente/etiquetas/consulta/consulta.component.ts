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

  title: string = "Consulta de etiquetas";
  Etiquetas: any;
  cargando: boolean = false;
  etiquetaForm: FormGroup;
  tipo: string;
  boton: string;
  idEtiqueta;
  loading;

  constructor(
    private _usuarioService: UsuarioService,
    private _adminExpedienteService: AdminExpedienteService,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder
    ) {
    this._usuarioService.pushBreadcum(this.title, '', 1);
  }

  ngOnInit() {
    this.cargando = true;
    this._adminExpedienteService.catalogoEtiquetas().subscribe(
      response =>{
        if(response && response['status']){
          this.Etiquetas = response['etiquetas'];
        }
        this.cargando = false
      },error=>{
        console.log(error)
    });
  }

  abrirModal(modal, etiqueta = null) {
    if (!etiqueta){ 
      this.idEtiqueta = null;
      this.tipo = 'Agregar'; 
      this.boton = 'Guardar';
    }else {
      this.tipo = 'Editar';
      this.boton = 'Editar';
      this.idEtiqueta = etiqueta.id_etiqueta;
    }
    this.etiquetaForm = this.formBuilder.group({
      clave: [etiqueta? etiqueta.clave : ''],
      nombre: [etiqueta? etiqueta.nombre : '', Validators.required],
      descripcion: [etiqueta? etiqueta.descripcion : '']
    });
    this._modalService.open(modal);
  }

  modificaEtiqueta() {
    this._adminExpedienteService.modificaEtiqueta(this.etiquetaForm.value, this.idEtiqueta).subscribe(
      response =>{                        
        if(response && response['status']){
          let object = this.etiquetaForm.value;
          if (!this.idEtiqueta) {
            object['id_etiqueta'] = response['id_etiqueta'].toString();
            this.Etiquetas.push(object);
          }else {
            object['id_etiqueta'] = this.idEtiqueta;            
            let index = this.Etiquetas.map(e => { return e.id_etiqueta}).indexOf(this.idEtiqueta);            
            this.Etiquetas[index] = object;
          }
          alertify.success(response['msg']).dismissOthers();
          this._modalService.dismissAll();          
        }
      },error=>{
        console.log(error)
    }); 
  }

  eliminar(etiqueta, index){
    alertify.confirm('Eliminar etiqueta', `¿Deseas eliminar la etiqueta con el nombre ${etiqueta.nombre}?`,
    function(){
      this._adminExpedienteService.eliminarEtiqueta(etiqueta.id_etiqueta).subscribe(
        response =>{
            if(response && response['status']){
              this.Etiquetas.splice(index, 1);
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
