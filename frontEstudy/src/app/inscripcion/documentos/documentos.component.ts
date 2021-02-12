import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DocumentosService } from "../services/documentos.service";
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SolicitudService } from '../services/solicitud.service';
import { TicketsService } from 'src/app/administracion/tickets/servicios/tickets.service';

declare var alertify: any;

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  jwt: string;
  Documentos: any;
  estadoDocumento: any;
  title: string;
  breadcum = [];
  archivoForm: FormGroup;
  archivos: any;
  bandera: boolean = false;
  pasoActual;

  tipoTutorial = 0;
  idRol: number;
  disabled: boolean = false;
  disabledBtn = [];
  disabledBtn1 = []; 
  tipo = 0;
  urlRedirect: string = '/admin/alumno/ticket-expediente/';
  btnCorreo: boolean = false;

  Etiquetas: any;
  filtroEtiqueta: number = 0;
  idEtiqueta: number;

  @Input() aspiranteId: number;
  @Input() idRolUsuario: number;

  @ViewChild('contentDocumentos') modalDocumentos: any;

  constructor(
    private _documentosService: DocumentosService,
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _solicitudService: SolicitudService,
    private _ticketsService: TicketsService
  ) {
    this.title = "Documentos";
    this._usuarioService.pushBreadcum(this.title,"",1);
    this._usuarioService.removeBreadcum(2);
   }

  ngOnInit() {                    
    this.idRol = parseInt(this._usuarioService.getRol().rol_id);            
    if (this.idRol == 1) {
      this.disabled = true;
    } else if (this.idRol == 4 || this.idRol == 2 || this.idRol == 3) {
      this.aspiranteId = parseInt(this._usuarioService.getIdentity().persona_id);
    }            
    this.jwt = this._usuarioService.getJWT();
    if (this.idRolUsuario == 3){
      this.tipo = 1;
      this.urlRedirect = '/admin/docente/ticket-expediente/';
    }else if (this.idRolUsuario == 4) {
      this.tipo = 0;
      this.urlRedirect = '/admin/aspirante/ticket-expediente/';
    }
    this.consulta(0);
    this.getEtiquetas();
  }

  consulta(id = 0){
    this.Documentos = undefined;
    this.archivoForm = undefined;
    this._documentosService.consultaDocumentos(this.jwt, this.aspiranteId, this.tipo, this.filtroEtiqueta).subscribe( response => {              
      console.log(response);
      
      if (response && response['status']) {
        this.Documentos = response['documentos'];        
        if (this.idRol == 4) {
          let bandera = true;
          this.Documentos.forEach(documento => {
            if (documento.estado_documento_id == null && documento.expediente_id == null) bandera = false;
          });
          if (bandera) this.open(this.modalDocumentos);
        }
        
        if (!id) {
          this.archivoForm = this.formBuilder.group({
            archivos: this.formBuilder.array([])
          });
          if(!this.estadoDocumento) this.getCatalogoEstado();
          else this.addItem();
        }
      }else{
        this.Documentos = [];  
        this.archivoForm = this.formBuilder.group({
          archivos: this.formBuilder.array([])
        });
      }      
    }, error => {
      console.log(<any>error);
    });
  }

  getEtiquetas() {
    this._documentosService.consultaEtiquetas().subscribe( response => {
      if (response && response['status']) {
        this.Etiquetas = response['etiquetas'];        
        this.Etiquetas['activa'] = false;
      }
    }, error => {
      console.log(<any>error);
    }); 
  }

  setEtiqueta(id, index) {
    for (let i = 0; i < this.Etiquetas.length; i++) {
      if (this.Etiquetas[i].activa) this.Etiquetas[i].activa = false;
    }
    let i = this.Etiquetas.map(e => { return e.id_etiqueta; }).indexOf(id);    
    if(i > -1) this.Etiquetas[i]['activa'] = true;
    this.filtroEtiqueta = id;
    this.idEtiqueta = index;

    this.consulta(0);
  }

  getCatalogoEstado(){
    this._documentosService.catalogoEstadoDocumentos(this.jwt).subscribe( response => {
      if (response && response['status']) {
        this.estadoDocumento = response['estadoDocumento'];
        if (this.idRolUsuario != 3) {
          this.consultaPasos();
        }else {
          this.pasoActual = 2;
          this.addItem();
        }
      }
    }, error => {
      console.log(<any>error);
    });
  }

  consultaPasos(){
    this._solicitudService.consultaAvance(this.jwt, this.aspiranteId).subscribe(
      response =>{        
        if(response && response['status']){            
          this.pasoActual = response['pasoActual'];
          this.addItem();                    
        }
      },error =>{
        console.log(<any>error)
      });
  }

  createItem(estado = ''): FormGroup {
    return this.formBuilder.group({
      file: ['', [Validators.required]],
      estado: {value: estado, disabled: !this.disabled},
      touched: false
    }); 
  }

  addItem(): void {        
    this.Documentos.map((documento, i) => {
      this.archivos = this.archivoForm.get('archivos') as FormArray;
      var idEstadoDocumento = documento.estado_documento_id != null ? documento.estado_documento_id : '1';
      this.archivos.push(this.createItem(idEstadoDocumento));
      this.disabledBtn.push(false);
      this.disabledBtn1.push(false);
      if (this.idRol == 1) {
        this.archivoForm["controls"].archivos["controls"][i].controls['estado'].valueChanges.subscribe(value => {
          let id_expediente = this.Documentos[i]['expediente_id'];
          let id_documento = this.Documentos[i]['documento_id'];           

          if (value != '6') {     
            if (id_expediente) this.validarDocumento(value, id_expediente,id_documento,this.aspiranteId, i);
            if (this.archivoForm["controls"].archivos["controls"][i].controls['correccion']) {
              this.archivoForm["controls"].archivos["controls"][i].removeControl('correccion')
            }
          }else {            
            this.Documentos[i].estado_documento_id = value;
            this.addTextArea(value, i, documento.expediente_desc);
            this.disabledBtn[i] = false;
          }
        }); 
      }
      if (documento.estado_documento_id == '6') {
        this.addTextArea('6', i, documento.expediente_desc);
      }
    });   
    this.bandera = true;         
  }

  validarDocumento(value, id_expediente,id_documento,id_persona, index, descripcion = ''){    
    this.disabledBtn1[index] = true;
    this._documentosService.validarDocumento( value, id_expediente,id_documento,id_persona, descripcion, this.tipo).subscribe( response => {
      if (response && response['status']) {
        this.Documentos[index].estado_documento_id = value;
        alertify.success(response['msg']).dismissOthers();
        if (value == 6)  this.guardaTicketCorreccion(index, descripcion);
      }else {
        // alertify.error(response['msg']).dismissOthers();
      }
      this.disabledBtn1[index] = false;
    }, error => {
      console.log(<any>error);
    });
  }

  guardaTicketCorreccion(index, descripcion) {
    let Form = {
      asunto: this.Documentos[index]['nombre_documento'],
      mensaje: descripcion,
      tipoTicket: 3
    }
    this._ticketsService.guardaTicketCorreccion(Form, this.aspiranteId, this.idRol, this.idRolUsuario).subscribe(
      response => {
        if (response && response['status']){
          // alertify.success(response['msg']);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  addTextArea(id, index, value){
    if (id == '6') {
      this.archivoForm["controls"].archivos["controls"][index].addControl('correccion', 
        new FormControl( {value: value, disabled: !this.disabled}, Validators.required) ); 
    }
  }

  guardarCorreccion(index){
    let value = this.archivoForm.controls.archivos['controls'][index].value.estado;
    let text = this.archivoForm.controls.archivos['controls'][index].value.correccion;
    let id_expediente = this.Documentos[index].expediente_id; 
    let id_documento = this.Documentos[index].documento_id; 

    this.validarDocumento(value, id_expediente,id_documento,this.aspiranteId, index, text);
  }

  guardarArchivo(index){
    this.disabledBtn[index] = true;    
    let file = this.archivoForm.controls.archivos['controls'][index].value.file;
    let id = this.Documentos[index].documento_id;   
    let url = this.Documentos[index].url;
    let funcion = 'guardarDocumento';    

    if (url) {
      funcion = 'editarDocumento';
      id = {
        id_expediente: this.Documentos[index].expediente_id, 
        id_documento: this.Documentos[index].documento_id
      };
    }  
                  
    this._documentosService[funcion](this.jwt, file, id, this.aspiranteId, this.tipo).subscribe(response => {      
      if (response && response['status']) {
        this.consulta(0);
        // this.archivoForm.controls.archivos['controls'][index].controls.estado.setValue('2');
        this.disabledBtn[index] = false;    
        alertify.success(response['msg']).dismissOthers();
      }else{
        this.disabledBtn[index] = false;    
        alertify.error(response['msg'])
      }
    }, error => {
      console.log(<any>error);
    });
  }

  verificarDocumento(index){    
    let file = this.archivoForm.controls.archivos['controls'][index].value.file;    
    let valido: boolean = this.tipoArchivos(file);
    this.archivoForm.controls.archivos['controls'][index].controls.touched.setValue(true);
    if (valido) {
      this.archivoForm.controls.archivos['controls'][index].controls.file.setErrors(null)
    }else{
      this.archivoForm.controls.archivos['controls'][index].controls.file.setErrors({'incorrect': true})
    }        
  }

  tipoArchivos(file){
    let tipoArchivos =  ['png','jpg','jpeg','gif', 'doc','docx','pdf','odt']
    const index = file.name.lastIndexOf('.');
    const extension = file.name.substring(index + 1).toLowerCase();
    if (tipoArchivos.indexOf(extension) == -1) {
      return false;
    }  
    return true;
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-md'});
  }

  enviaCorreo() {
    this.btnCorreo = true;
    this._documentosService.enviaCorreoDocumentacion(this.jwt, this.aspiranteId).subscribe(response => {      
      if (response && response['status']) {
        alertify.success(response['msg']).dismissOthers();
      }else{
        alertify.error(response['msg']).dismissOthers();
      }
      this.btnCorreo = false;
    }, error => {
      console.log(<any>error);
    });
  }

  eliminaDocumento(index) {
    let documento = this.Documentos[index];
    alertify.confirm('Eliminar documento', `¿Deseas eliminar el documento?`, function(){
      this._documentosService.eliminaDocumento(documento.expediente_id, documento.url, this.tipo).subscribe(
        response =>{
            if(response && response['status']){
              this.consulta();
              alertify.success(response['msg']).dismissOthers();
            }else {
              alertify.error(response['msg']).dismissOthers();
            }
        },error =>{
          console.log(<any>error)
      });
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});
    console.log(this.Documentos[index]);
    
  }

}
