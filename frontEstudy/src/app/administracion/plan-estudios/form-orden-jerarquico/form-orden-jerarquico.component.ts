import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenJerarquicoService } from '../services/orden-jerarquico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify;

@Component({
  selector: 'app-form-orden-jerarquico',
  templateUrl: './form-orden-jerarquico.component.html',
  styleUrls: ['./form-orden-jerarquico.component.scss']
})
export class FormOrdenJerarquicoComponent implements OnInit {

  ordenJerarquicoForm: FormGroup;
  ordenJerarquico;
  jwt;
  tipoAdmin;
  @Output() sucessEvent = new EventEmitter<string>();
  @Input() idOrdenJerarquico;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _ordenJerarquicoService: OrdenJerarquicoService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  get f() { return this.ordenJerarquicoForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    if(this.idOrdenJerarquico === undefined ) this.idOrdenJerarquico = null;

    
    this.jwt = this._usuarioService.getJWT();
      
    this.ordenJerarquicoForm= this.formBuilder.group({
      ordenJerarquico:['',Validators.required],
      ordenJerarquicoDescripcion:['',Validators.required]
    });

    this._ordenJerarquicoService.consultaCatOrdenJerarquico( this.jwt ).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            //this.ordenJerarquico;
          }

      },error =>{
        console.log(<any>error)
      });

    if(this.idOrdenJerarquico){
      this._ordenJerarquicoService.consultaOrdenJerarquico(this.idOrdenJerarquico, this.jwt ).subscribe(
        response =>{
          console.log(response)
            if(response && response['status']){
              this.ordenJerarquico = response['orden'][0]; 

              this.ordenJerarquicoForm.get('ordenJerarquico').setValue(this.ordenJerarquico.orden_jerarquico);
              this.ordenJerarquicoForm.get('ordenJerarquicoDescripcion').setValue(this.ordenJerarquico.orden_jerarquico_descripcion);
            }
  
        },error =>{
          console.log(<any>error)
        });
    }
  }

  enviarInformacion(){
    // stop here if form is invalid
    if (this.ordenJerarquicoForm.invalid) {
      Object.keys(this.ordenJerarquicoForm.controls).forEach( controlKey => {
        this.ordenJerarquicoForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    // this._ordenJerarquicoService.modificaOrdenJerarquico(this.ordenJerarquicoForm ,this.idOrdenJerarquico, this.jwt ).subscribe(
    //  response =>{
    //    console.log(response)
    //      if(response && response['status']){
    //        this.sucessEvent.emit(response['idOrdenJerarquico']);//si se insertó correctamente se le agrega la asignatura a la asignatura
    //        alertify.success(response['msg'])
    //      }else{
    //       this.sucessEvent.emit(response['idOrdenJerarquico']); //si no se devuelve un id igual a 0
    //        alertify.error(response['msg'])

    //      }

    //  },error =>{
    //    console.log(<any>error)
    //  });

  }

}
