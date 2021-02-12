import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { TrPreguntaOpcionMultiple } from 'src/app/models/learning/trPreguntaOpcionMultiple';
import { FormGroup, FormBuilder , FormArray, Validators } from '@angular/forms';
import { MultipleService } from 'src/app/administracion/carga-actividades/services/multiple.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
declare var alertify;

@Component({
  selector: 'form-multiple-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {

  newPregunta:TrPreguntaOpcionMultiple = new TrPreguntaOpcionMultiple;
  preguntas: Array<TrPreguntaOpcionMultiple> = new Array<TrPreguntaOpcionMultiple>();
  

  preguntaMultipleForm: FormGroup;
  items: FormArray;
  progress;
  checkMultiple:boolean = false;
  tipoAdmin;
  urlImagen: string;

  @Input() reactivos;
  @Input() idPregunta;
  @Output() successEvent = new EventEmitter<any>();

  jwt;

  constructor(
    private formBuilder: FormBuilder,
    private _multipleService: MultipleService,
    private _usuarioService: UsuarioService
    ) { }

  get f() { return this.preguntaMultipleForm.controls; }
  get sf() { return this.preguntaMultipleForm.controls.items }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this.jwt = this._usuarioService.getJWT();

    this.preguntaMultipleForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.crearRespuesta() ])
    });
    
    this._multipleService.consultaMultiple(this.idPregunta,this.jwt,null).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.reactivos = response['reactivos'];
          if(response['url_imagen'])
            this.urlImagen = response['url_imagen'];

          this.reactivos.forEach(function(reactivo){
            let ponderacion = reactivo.ponderacion == '100'? true : false;
            let urlContenido = reactivo.contenido_reactivo != null ?  reactivo.contenido_reactivo : null;
            
            if (reactivo.contenido_reactivo != null){
              this.checkMultiple = true;
            } 
            console.log(this.checkMultiple);
            this.agregarRespuesta(reactivo.reactivo_id, ponderacion,reactivo.retroalimentacion,urlContenido);

          }.bind(this));
          this.eliminarRespuesta(0);
        }
    },error =>{
      console.log(<any>error)
    });
  }

  agregarRespuesta(idReactivo = 0, ponderacion = '' , retroalimentacion = '',url_imagen = ''){
    this.items = this.preguntaMultipleForm.get('items') as FormArray;
    this.items.push(this.crearRespuesta(idReactivo,ponderacion,retroalimentacion,url_imagen));
  }

  crearRespuesta(idReactivo = 0, ponderacion = '', retroalimentacion = '',url_imagen = ''): FormGroup {
    return this.formBuilder.group({
      idReactivo: [idReactivo],
      ponderacion: [ponderacion],
      retroalimentacion: [retroalimentacion],
      imagen: ['', Validators.compose([requiredFileType(0), Validators.required])],
      url_imagen: [url_imagen]
    });
  }

  eliminarRespuesta(index){
    this.items.removeAt(index);
  }

  confirmaRespuesta(id){

    alertify.confirm('Desea eliminar esta pregunta?',
    function(){
      const idReactivo = this.preguntaMultipleForm.get('items')['controls'][id].get('idReactivo').value;
      this._multipleService.elimina(idReactivo,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success(response['msg']);
              this.eliminarRespuesta(id);
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

  hasErrorP(error: string ) {
    const control = this.preguntaMultipleForm.get('imagen');
    return control.dirty && control.hasError(error);
  }
  hasError( index, field: string, error: string ) {
    const control = this.preguntaMultipleForm.get('items')['controls'][index].get(field);
    return control.dirty && control.hasError(error);
  }

  enviarInformacionPregunta(index){    
    let form =this.preguntaMultipleForm.get('items')['controls'][index];
    console.log(form)

    this._multipleService.modificaMultipleImagen(form,this.idPregunta,this.jwt).subscribe(
      response =>{
        console.log(response)
            if(response && response['status']){
              alertify.success(response['msg'])
              if(response['idReactivo']){
                this.preguntaMultipleForm.get('items')['controls'][index].get('idReactivo').setValue(response['idReactivo']);
              }
            }else{
              alertify.error(response['msg'])
            }

    },error =>{
      console.log(<any>error)
    });
  }

  finalizar() {
    this.successEvent.emit({ status: 1 });
  }
  
}
