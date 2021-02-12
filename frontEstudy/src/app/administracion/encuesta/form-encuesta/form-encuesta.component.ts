import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EncuestaService } from '../services/encuesta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify: any;

@Component({
  selector: 'app-form-encuesta',
  templateUrl: './form-encuesta.component.html',
  styleUrls: ['./form-encuesta.component.scss']
})
export class FormEncuestaComponent implements OnInit {

  title: string = 'Nueva encuesta';
  encuestaForm: FormGroup;
  idPersona: any;
  tipoAdmin;
  @Output() setIdEncuesta = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private _encuestaService: EncuestaService,
    private _usuarioService: UsuarioService
  ) {}

  get f() { return this.encuestaForm.controls }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.idPersona = this._usuarioService.getIdentity().persona_id;
    this.encuestaForm = this.formBuilder.group({
      titulo: [''],
      instruccion: ['', Validators.required],
      obligatorio: ['', Validators.required]
    });
  }

  creaEncuesta() {
    this.encuestaForm.setErrors({invalid:true});
    let form = Object.entries(this.encuestaForm.value);
    this._encuestaService.guardaEncuesta(this.idPersona, form).subscribe(response => {
      if (response && response['status']) {
        alertify.success(response['msg']).dimissOthers;
        this.setIdEncuesta.emit({id: response['id_encuesta'], titulo: this.encuestaForm.value.titulo});
      }
    }, error => {
      console.log(<any>error);
    });
  }

}
