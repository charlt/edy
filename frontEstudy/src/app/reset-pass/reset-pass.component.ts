import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../master/perfil/services/perfil.service';

@Component({
  selector: 'reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  jwt: string;
  correoForm: FormGroup;
  passForm: FormGroup;
  tokenForm: FormGroup;
  passType: string = 'password';
  Data: Array<any> = [];
  FormData: Array<any> = [];
  bandera: boolean = false;
  cargando: boolean = false;
  enviado: boolean = false;
  invalido: boolean = false;
  idUsuario: number;
  nombreUsuario: string;
  token: number;

  @Input() step: number = 1;

  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _perfilService: PerfilService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.setData();
  }

  setData(){
    this.FormData = [];
    this.Data = [];
    this.cargando = false;
    this.enviado = false;
    if (!this.step) {
      this.correoForm = this.formBuilder.group({
        email: ['', Validators.compose( [Validators.email, Validators.required] )],
        // password: ['', Validators.required]
      }); 
      this.FormData.push({title: 'Cambiar contraseña', form: this.correoForm, function: 'enviarCorreo', button: 'Enviar enlace', loading: 'Enviando',
        message: 'Se ha enviado un correo electrónico a '});
      this.Data.push([
        { label: 'Correo electrónico', control: 'email', icon: 'fa-envelope-o', 
          placeholder: 'Correo electrónico', type: 'text' } ]
        // { label: 'Contraseña', control: 'password', icon: 'fa-eye', placeholder: '********', type: 'password', showPass: 'showPass' }
      );
      // this.valueChanges('correoForm', 'email');
    }else if (this.step == 1) {
      this.tokenForm = this.formBuilder.group({
        token: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
      });
      this.FormData.push({title: 'Confirmar código', form: this.tokenForm, function: 'validateToken', button: 'Confirmar', loading: 'Confirmando código',
      error: 'El código de seguridad introducido es incorrecto' })
      this.Data.push([
        { label: 'Ingresa tu código de seguridad', control: 'token', icon: 'fa-key', placeholder: '', type: 'number'},
      ]);
    }else if (this.step == 2) {
      this.passForm = this.formBuilder.group({
        pass: ['', Validators.required],
        confirm: ['', Validators.required]
      });
      this.passForm.get('pass').valueChanges.subscribe(value => {      
        if (value !== this.passForm.get('confirm').value) {
          this.passForm.controls['confirm'].setErrors({'incorrect': true});
        } else {
          this.passForm.controls['confirm'].setErrors(null);
        }    
      });
      this.passForm.get('confirm').valueChanges.subscribe(value => {      
        if (value !== this.passForm.get('pass').value) {
          this.passForm.controls['confirm'].setErrors({'incorrect': true});
        } else {
          this.passForm.controls['confirm'].setErrors(null);
        }
      });
      this.FormData.push({title: 'Cambio de contraseña', form: this.passForm, function: 'changePass', button: 'Cambiar contraseña',
        loading: 'Confirmando cambio'})
      this.Data.push([
        { label: 'Nueva contraseña', control: 'pass', icon: 'fa-key', placeholder: '********', type: 'password' },
        { label: 'Confirma tu nueva contraseña', control: 'confirm', icon: 'fa-key', placeholder: '********', type: 'password',
          error: 'Las contraseñas no coinciden' }
      ]);
      // this.valueChanges('passForm', 'pass');   
      // this.valueChanges('passForm', 'confirm'); 
    }else if (this.step == 3) {
      this.FormData.push({ message: 'Se ha reestablecido la contraseña correctamente' });
    }
    this.bandera = true;   

  }

  showPass(){    
    if (this.passType == 'password') {
      this.passType = 'text';
    }else{
      this.passType = 'password';
    }
    this.Data[0][1].type = this.passType;
  }

  enviarCorreo() {     
    this.cargando = true;
    let email = this.FormData[0].form.value.email;
    let array = email.split("@");
    let index = array[1].lastIndexOf('.');  
    let first = array[0].substring(0,2);
    let second = array[1].substring(0, 1);
    let extension = array[1].substring(index+1);
    let end = '';        
    let hiddenOne = first.padEnd(array[0].length, '*');
    let hiddenTwo = second.padEnd(index, '*');
    let hiddenThree = end.padEnd(extension.length, '*');
    let hiddenEmail = hiddenOne + '@' + hiddenTwo + '.' + hiddenThree;
    this.FormData[0].message += hiddenEmail + 
    '. Haz clic en el enlace del correo para reestablecer tu contraseña.';      
    this._perfilService.tokenPass(email).subscribe(response => {
      if (response && response['status']) {
        this.cargando = false;
        this.enviado = true;
      }
    }, error => {
      console.log(<any>error);
    });
  }

  validateToken(){
    this.invalido = false;
    this.cargando = true;
    this.token = this.tokenForm.get('token').value;
    this._perfilService.confirmToken(this.token).subscribe(response => {
      if (response && response['status']) {
        this.idUsuario = parseInt(response['usuario_id']);
        this.nombreUsuario = response['nombre'];
        this.step = 2;
        this.setData();
      }else{
        this.cargando = false;
        this.invalido = true;
        setTimeout(() => {
          this.invalido = false;
        }, 2000);
      }
    }, error => {
      console.log(<any>error);
    });
  }

  // valueChanges(form, control){
  //   this[form].get(control).valueChanges.subscribe(value => {      
  //     this.setMargin(control, value)
  //   })
  // }
  
  changePass(){
    this.cargando = true;
    let pass = this.passForm.get('confirm').value;        
    this._perfilService.resetPass(this.token, pass, this.idUsuario).subscribe(response => {
      if (response && response['status']) {
        this.step = 3;
        this.enviado = true;
        this.setData();
      }else{
        this.invalido = true;
      }
    }, error => {
      console.log(<any>error);
    });
  }

  // setMargin(control, value = ""){
  //   let index = this.Controls[this.step].map(e => {return e.control}).indexOf(control)    
  //   if (index > 0) {
  //     if (value != "") {
  //       let element = (<HTMLElement>document.getElementById('group_' + index));
  //       element.classList.add("mt-5"); 
  //     }else{
  //       let element = (<HTMLElement>document.getElementById('group_' + index));
  //       element.classList.remove("mt-5"); 
  //     }
  //   }
  // }
}
