import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CleaverService } from '../services/cleaver.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

declare var alertify: any;

@Component({
  selector: 'cleaver',
  templateUrl: './cleaver.component.html',
  styleUrls: ['./cleaver.component.scss']
})
export class CleaverComponent implements OnInit {

  jwt: string;
  Reactivos: any;
  reactivosSeccion: any;
  seccion: number = 0;
  bandera: boolean = false;
  reactivosForm: FormGroup;
  reactivos: any;
  error: boolean = true;
  botonName: string = "Siguiente";
  cargando: boolean = false;
  disabled: boolean = false;

  @Output() finalizado = new EventEmitter();
  @Input() cleaverCompleto;
  @Input() idRol: number;
  @Input() idAspirante: number;

  constructor(
    private _usuarioService: UsuarioService,
    private _cleaverService: CleaverService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    if (this.idRol == 1) {
      this.disabled = true;
    }
    this.jwt = this._usuarioService.getJWT();
    this.consulta();    
  }

  consulta(){
    this._cleaverService.consulta(this.jwt).subscribe(response => {
      if (response && response['status']) {        
        this.Reactivos = response['reactivos'];        
        this.consultaContestadas();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  consultaContestadas(){    
    this._cleaverService.preguntasContestadas(this.jwt, this.idAspirante).subscribe(response => {      
      if (response) { 
        this.seccion = parseInt(response['sector']); 
        console.log(this.seccion);
               
        if (this.seccion == 23) {
          this.botonName = "Finalizar";
        }
        if (this.seccion < 24) {
          let numSecciones = this.Reactivos.length / 4;
          this.reactivosSeccion = new Array(numSecciones);        
          let index = 0;       
          for (let i = 0; i < this.reactivosSeccion.length; i++) {
            this.reactivosSeccion[i] = new Array();
          }
          for (let i = 0; i < this.reactivosSeccion.length; i++) {
            for (let j = 0; j < 4; j++) {
              this.reactivosSeccion[i].push(this.Reactivos[index]);
              index++;
            }
          }    
          this.reactivosForm = this.formBuilder.group({
            reactivos: this.formBuilder.array([])
          });
          this.addReactivos();     
        }   
      }
    }, error =>{
      console.log(<any>error);
    });
  }

  addReactivos(){
    this.reactivosSeccion[this.seccion].map((reactivo) => {      
      this.reactivos = this.reactivosForm.get('reactivos') as FormArray;
      this.reactivos.push(this.createReactivo(reactivo));
    });
    this.bandera = true;    
  }

  createReactivo(datos){
    return this.formBuilder.group({
      respuesta: [{value: '', disabled: this.disabled}, [Validators.required]],
      nombre_reactivo: datos.nombre_reactivo,
      cleaver_base_id: datos.cleaver_base_id
    }); 
  }

  seleccionaRespuesta(valor, index){
    let id_cleaver = this.reactivosSeccion[this.seccion][index].cleaver_base_id; 
    let leftFlag = false;
    let rightFlag = false;

    setTimeout(() => {
    this.reactivosForm.controls.reactivos['controls'].forEach(reactivo => {  
      if (reactivo.controls.cleaver_base_id.value != id_cleaver && reactivo.controls.respuesta.value == "2" && valor == 2) {
        reactivo.controls.respuesta.setValue('');        
      }else if (reactivo.controls.cleaver_base_id.value != id_cleaver && reactivo.controls.respuesta.value == "1" && valor == 1) {
        reactivo.controls.respuesta.setValue('');
      }
      if (reactivo.controls.respuesta.value == "2") leftFlag = true;
      if (reactivo.controls.respuesta.value == "1") rightFlag = true;
    });

    if (leftFlag && rightFlag) this.error = false;
    else this.error = true;

    }, 1);    
  }
  
  changeSeccion(index, tipo = 1){  
    if (tipo == 1) {
      this.error = true;
      this.cargando = true;   
      let datos = this.reactivosForm.controls.reactivos.value.filter(res => res.respuesta == "2" || res.respuesta == "1");
      this._cleaverService.guardaRespuesta(this.jwt, datos).subscribe(response => {        
        if (response && response['status']) {        
          if (index < this.reactivosSeccion.length) {
            this.setSection(index);
          }else{
            this._cleaverService.finalizarFormulario(this.jwt).subscribe(response => {
              if (response && response['status']) {
                this.finalizado.emit("terminado");
                this.cargando = false;
                alertify.success(response['msg']).dismissOthers();
              }
            }, error => {
              console.log(<any>error);
            });
          }
        }
      }, error => {
        console.log(<any>error);
      });
    } else if (tipo == 0) {
      alertify.confirm('Reiniciar prueba de Cleaver', '¿Deseas realizar un nuevo intento?', function(){
        this._cleaverService.borraFormulario(this.jwt).subscribe(response => {          
          if (response && response['status']) {
            this.setSection(0);
            alertify.success(response['msg']).dismissOthers();
          }
        }, error => {
          console.log(<any>error);
        });
      }.bind(this),
      function(){
        alertify.error('Cancelado');
      });
  
    }
  }

  setSection(index){
    this.bandera = false;
    
    this.seccion = index;
    
    if (this.seccion == 23) {
      this.botonName = "Finalizar";
    }else {
      this.botonName = "Siguiente";
    }
    let idx = 0;
    this.reactivosForm.controls.reactivos['controls'].forEach(reactivo => {
      reactivo.controls.respuesta.setValue('');
      reactivo.controls.nombre_reactivo.setValue(this.reactivosSeccion[this.seccion][idx]['nombre_reactivo']);
      reactivo.controls.cleaver_base_id.setValue(this.reactivosSeccion[this.seccion][idx]['cleaver_base_id']);
      idx++;
    });

    setTimeout(() => {
      this.bandera = true;
      this.cargando = false;
    }, 1);
    
  }

}
