import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from './persona.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TranslateService } from '@ngx-translate/core';
import { SolicitudService } from 'src/app/inscripcion/services/solicitud.service';

declare var alertify;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  

})
export class PersonaComponent implements OnInit, OnChanges {

  personaForm: FormGroup;
  jwt: string;
  
  personaConsulta;
  id_sexo;
  disabled: boolean = false;
  año;
  mes;
  dia;
  fecha = " ";
  nuevo;
  usuarioRolId;

  @Input() tipoForm; // 0 sin curp y rfc / 0 con curp y rfc 
  @Input() _persona;
  @Input() idPersona;
  @Input() idRol: number;
  @Output() registroExitoso = new EventEmitter<any>();


  constructor(
    private formBuilder: FormBuilder,
    private _personaService: PersonaService,
    private _solicitudService: SolicitudService,
    private router : Router,
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,  
    private _translate: TranslateService

  ){
    this._translate.setDefaultLang('es');
    this.idPersona = this.route.snapshot.paramMap.get('id');
   }
   get f() { return this.personaForm.controls; }
   
  ngOnInit(){
    if (this.idRol == 2) {
      this.disabled = true;
    }
    this.jwt = this._usuarioService.getJWT();
    this.usuarioRolId = this._usuarioService.getIdentity().rol_id;
    if(this.usuarioRolId == 1){
      this.personaForm = this.formBuilder.group({
        nombreUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        apPatUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        apMatUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        fnUsuario: [{value: '', disabled: this.disabled}],
        correoUsuario: [{value: '', disabled:false}, Validators.required],
        celUsuario:[{value: '', disabled: false}, Validators.required],
        rfcUsuario: [{value: '', disabled: this.disabled}],
        curpUsuario: [{value: '', disabled: this.disabled}],
      });
      if(this.tipoForm == 0){
        this.personaForm.controls.rfcUsuario.setValidators(Validators["null"])
        this.personaForm.controls.rfcUsuario.reset();
        this.personaForm.get('rfcUsuario').setValue("");

        this.personaForm.controls.curpUsuario.setValidators(Validators["null"])
        this.personaForm.controls.curpUsuario.reset();
        this.personaForm.get('curpUsuario').setValue("");
      }
    }else{
      this.personaForm = this.formBuilder.group({
        nombreUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        apPatUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        apMatUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        fnUsuario: [{value: '', disabled: this.disabled}],
        correoUsuario: [{value: '', disabled:false}, Validators.required],
        celUsuario:[{value: '', disabled: false}, Validators.required],
        curpUsuario: [{value: '', disabled: this.disabled}, Validators.required],
        rfcUsuario: [{value: '', disabled: this.disabled}, Validators.required],
      });
      if(this.tipoForm == 0){
        this.personaForm.controls.rfcUsuario.setValidators(Validators["null"])
        this.personaForm.controls.rfcUsuario.reset();
        this.personaForm.get('rfcUsuario').setValue("");

        this.personaForm.controls.curpUsuario.setValidators(Validators["null"])
        this.personaForm.controls.curpUsuario.reset();
        this.personaForm.get('curpUsuario').setValue("");
      }
    }

    this.consultaPersona();
  
  }

  ngOnChanges(){
    if(this._persona){
      this.personaForm.get("nombreUsuario").setValue(this._persona.nombre);
      this.personaForm.get("apPatUsuario").setValue(this._persona.primer_apellido);
      this.personaForm.get("apMatUsuario").setValue(this._persona.segundo_apellido);
      // this.personaForm.get("sexoUsuario").setValue(this._persona.sexo_id);
      this.personaForm.get("rfcUsuario").setValue(this._persona.rfc);
      this.personaForm.get("correoUsuario").setValue(this._persona.email);
      this.personaForm.get("curpUsuario").setValue(this._persona.curp);
      this.personaForm.get("fnUsuario").setValue(this._persona.fecha_nacimiento);
      this.personaForm.get("celUsuario").setValue(this._persona.celular);
      //this.personaForm.get("claveElector").setValue(this._persona.clave_elector);
      
    } 

  }

  consultaPersona(){
    this._solicitudService.consultaPersona(this.idPersona).subscribe(
      response =>{
      if (response && response['status']){
        this.personaConsulta = response['persona'];      
        if(this.personaConsulta){
          this.personaForm.get("nombreUsuario").setValue(this.personaConsulta.nombre);
          this.personaForm.get("apPatUsuario").setValue(this.personaConsulta.primer_apellido);
          this.personaForm.get("apMatUsuario").setValue(this.personaConsulta.segundo_apellido);
          // this.personaForm.get("sexoUsuario").setValue(this.personaConsulta.sexo_id);
          this.personaForm.get("rfcUsuario").setValue(this.personaConsulta.rfc);
          this.personaForm.get("correoUsuario").setValue(this.personaConsulta.email);
          this.personaForm.get("curpUsuario").setValue(this.personaConsulta.curp);
          this.personaForm.get("fnUsuario").setValue(this.personaConsulta.fecha_nacimiento);
          this.personaForm.get("celUsuario").setValue(this.personaConsulta.celular);
          //this.personaForm.get("claveElector").setValue(this.personaConsulta.clave_elector);

        }

        // if(this.personaConsulta.curp != null && this.personaConsulta.fecha_nacimiento == "0000-00-00" || !this.personaConsulta.fecha_nacimiento ){
        if(this.personaConsulta){
          this.obtieneFechaN(0);
        }  
        // }
      }
    }, error => {
      console.log(<any>error);
    });
  }

  obtieneFechaN(tipo){
    let dia;
    let mes;
    let _año;
    let año;
    let _curp = this.personaForm.get('curpUsuario').value;

    if(_curp){
      _año = _curp[4]+_curp[5];
      if(_año <= 20)
        this.año = 20 + _año;
      else
        this.año = 19 + _año;
      
      this.mes = _curp[6]+_curp[7];
      this.dia = _curp[8]+_curp[9];
    }
    
if(tipo == 0){
    if(this.personaConsulta.fecha_nacimiento == null || this.personaConsulta.fecha_nacimiento == "0000-00-00" ){
      this.fecha = this.año + "-" + this.mes + "-" + this.dia;
      this.personaForm.get("fnUsuario").setValue(this.fecha); 
    }else{
      this.fecha = null;
    }
  }else if(tipo == 1){
    this.fecha = null
  }
  }

  
  enviarInformacion(){  
    if (this.personaForm.invalid){
      Object.keys(this.personaForm.controls).forEach( controlKey => {
        this.personaForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    if(this.personaForm.get('curpUsuario').value){
      let sexo;
      let _curp = this.personaForm.get('curpUsuario').value;
      sexo = _curp[10];
      if(sexo == "M"){
        this.id_sexo = 2;
      }else if( sexo == "H"){
        this.id_sexo = 1;
      }
    }else if(this.tipoForm == 0){
      this.id_sexo = 0;
    }
    else this.id_sexo = null;

    if(this.personaForm.get("fnUsuario").value == ""){
      this.fecha = this.año + "-" + this.mes + "-" + this.dia;
      this.personaForm.get("fnUsuario").setValue(this.fecha);
    }


    alertify.confirm('', '¿Deseas guardar y terminar?', function(){      
        this._personaService.modificaPersona(this.personaForm, this.idPersona, this.id_sexo, this.fecha,this.jwt).subscribe( //nuevo usuario
          response =>{
              if(response && response['status']){
                alertify.success(response['msg']) 
                 if (this.idRol == 1) {
                    this.router.navigate(['admin/usuario/consulta']);
                 }else{
                   let usuarioRolId = this._usuarioService.getIdentity();
                   usuarioRolId.nombre = this.personaForm.get('nombreUsuario').value;
                   usuarioRolId.primer_apellido = this.personaForm.get('apPatUsuario').value;
                   usuarioRolId.segundo_apellido = this.personaForm.get('apMatUsuario').value;
                   localStorage.setItem('usuarioRolId',JSON.stringify(usuarioRolId));
                 }

                this.registroExitoso.emit(
                {
                  'status': 1, 'idPersona': this.idPersona }); // se pondrá nuevo id del response 
              }else{
                alertify.error(response['msg'])
              }
   
           },error =>{
            console.log(<any>error)
          });

       if (this.personaForm.invalid) {
        return;
       } 
      }.bind(this),
      function(){
          alertify.error('Cancelado');
      }).set('labels', {ok:'Sí', cancel:'No'});
  }

  limpiarForm(){
    this.personaForm.reset();


  }

}
