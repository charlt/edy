import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CatalogoService } from "src/app/services/catalogo.service";
import { UsuarioService } from 'src/app/services/usuario.service';
import { EncuestaService } from '../../administracion/encuesta/services/encuesta.service';

@Component({
  selector: 'form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.scss']
})
export class FormSwitchComponent implements OnInit {

  /*Niveles: 
   2: Plan estudios
   3: Grado
   4: Asignatura
   5: Grupo
   6: Asignatura en grupo
   7: Todos
  */

  @Input() switchForm: FormGroup;
  @Input() idEncuesta: number;
  @Input() tipoForm; // 0 -> encuesta / 1 -> avisos
  @Input() idAsignaturaGrupo; // 0 -> encuesta / 1 -> avisos
  @Output() completado = new EventEmitter<any>();

  jwt: string;
  Roles: any;
  nivel: number = 0;
  Radios: Array<any> = [
    { texto: 'Todos', valor: 7 },
    { texto: 'Plan de estudios', valor: 2 },
    { texto: 'Grado', valor: 3 },
    { texto: 'Asignatura', valor: 4 },
    { texto: 'Grupo', valor: 5 },
    { texto: 'Asignatura en grupo', valor: 6 }
  ];
  tipo: string;
  Grupos: any;
  Asignaturas: any;

  constructor(
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService,
    private _encuestaService: EncuestaService
  ) { }

  get sF() { return this.switchForm.controls }

  ngOnInit() {            
    this.jwt = this._usuarioService.getJWT();
    this._catalogoService.consultaRol(this.jwt).subscribe(response => {
      if (response && response['status']) {
        this.Roles = response['rol'];             
        if (this.idAsignaturaGrupo) {
          this.Roles = this.Roles.filter(r => r.rol_id == 2);          
        }   
      }      
    }, error => {
      console.log(<any>error);
    });

    this.switchForm.addControl('rol', new FormControl (this.idAsignaturaGrupo? 2: '', Validators.required));    

    if (!this.idAsignaturaGrupo) {
      this.switchForm.get('rol').valueChanges.subscribe(value => {
        if (!this.switchForm.get('nivel')) {
          this.switchForm.addControl('nivel', new FormControl('', Validators.required));
          this.subscribeNivel();        
        }
      });
    }
    
  }

  subscribeNivel(){
    this.switchForm.get('nivel').valueChanges.subscribe(value => {
      this.nivel = parseInt(value);
      this.completado.emit(false);      
      if (this.switchForm.get('grupo')) this.switchForm.removeControl('grupo');
      if (this.switchForm.get('grupo_asignatura')) this.switchForm.removeControl('grupo_asignatura');
      if (this.nivel > 4) {        
        this.tipo = 'large';
        if(this.nivel == 7) this.completado.emit(true);
      }else if(this.nivel <= 4){
        if (this.switchForm.get('grupo')) {
          this.switchForm.removeControl('grupo');
        }
        if(this.nivel == 2) this.tipo = 'medium';
        else if(this.nivel == 3) this.tipo = 'large';
        else if(this.nivel == 4) this.tipo = '';
      }    
    });
  }

  getReady(event) {      
    if (event) {
      if (this.nivel > 4) {
        this.subscribeGrado();
      }
    }
  }

  subscribeGrado() {    
    if (this.switchForm.get('plan_orden_id')) {              
      this.switchForm.get('plan_orden_id').valueChanges.subscribe(value => {
        if (value != '') {
          this.seleccionado(false, 'grado');
          this._encuestaService.consultaGrupo(value).subscribe(response => {            
            if (response && response['status']) {
              this.Grupos = response['grupos'];
              this.subscribeGrupo();
            }else {
              if (this.switchForm.get('grupo')) {
                this.switchForm.removeControl('grupo');
              }
              this.seleccionado(false);
            }
          }, error => {
            console.log(<any>error);
          });
        }
      });
    }
  }

  subscribeGrupo() {
    if (!this.switchForm.get('grupo')) {
      this.switchForm.addControl('grupo', new FormControl('', Validators.required));
      this.switchForm.get('grupo').valueChanges.subscribe(value => {        
        if (this.nivel == 6) {
          this.seleccionado(false, 'grupo');
          this._encuestaService.consultaAsignatura(value).subscribe(response => {
            if (response && response['status']) {
              this.Asignaturas = response['Asignaturas'];
              this.subscribeGrupoAsignatura();
            }else {
              if (this.switchForm.get('grupo_asignatura')) {
                this.switchForm.removeControl('grupo_asignatura');
              }
              this.completado.emit(false);
            }
          }, error => {
            console.log(<any>error);
          });
        }else {
          this.completado.emit(true);
        }
      });
    }
  }

  subscribeGrupoAsignatura() {    
    if (!this.switchForm.get('grupo_asignatura')) {
      this.switchForm.addControl('grupo_asignatura', new FormControl('', Validators.required));
      this.switchForm.get('grupo_asignatura').valueChanges.subscribe(value => {
        this.completado.emit(true);
      });
    }
  }

  seleccionado(evt: any, select = null) {
    if (evt == false) {
      if (this.switchForm.get('grupo') && select == 'grado') {
        this.switchForm.get('grupo').setValue('');
        if (this.switchForm.get('grupo_asignatura')) this.switchForm.removeControl('grupo_asignatura');
      }else if (this.switchForm.get('grupo_asignatura') && select == 'grupo') {        
        this.switchForm.get('grupo_asignatura').setValue('');
      }
    }    
    this.completado.emit(evt);
  }
}
