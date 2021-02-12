import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from './password.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify;

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  jwt;
  passForm: FormGroup;
  estadoPass: boolean;

  @Input() id_usuario;
  @Output() closeModal = new EventEmitter<any>();


  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _passwordService: PasswordService,
  ) { }

  get pf() { return this.passForm.controls; }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.passForm = this.formBuilder.group({
      passPerfil: ['', Validators.required],
      confirmpassPerfil: ['', Validators.required]
    });
  }

  enviarPass(){
    if (this.passForm.invalid) {
      Object.keys(this.passForm.controls).forEach( controlKey => {
        this.passForm.controls[controlKey].markAsTouched();
      });
      return;
    } 
    let pass1 = this.passForm.get('passPerfil').value;
    let passConfirm = this.passForm.get('confirmpassPerfil').value;
    if(pass1 == passConfirm){
      this._passwordService.editaPass(this.jwt, this.id_usuario, pass1).subscribe(
        response =>{
          console.log(response);
            if(response && response['status']){
              this.closeModal.emit({'status': 1});
              alertify.success(response['msg']);              
            }else{
              alertify.error(response['msg'])
            }
        },error =>{
          console.log(<any>error)
      });
    }else{
      alertify.error('Las contraseñas no coinciden');
    }
  }

  confirmPass(){
    let pass = this.passForm.get('passPerfil').value;
    let confirm = this.passForm.get('confirmpassPerfil').value;
    if (pass == confirm) {
      this.estadoPass = true;
    }
    else{
      this.estadoPass = false;
    }
  }

}
