import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from '../../services/pago.service';
import {simpleEditor} from '../../../../models/simpleEditor';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  colegiaturaForm:FormGroup;

  id_suscripcion;
  title;
  tipoAdmin;

  simpleEditor = simpleEditor;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _pagoService: PagoService,
        private _usuarioService: UsuarioService
    ) { 
      this.id_suscripcion  = this.route.snapshot.paramMap.get('id');

      if(this.id_suscripcion )
        this.title = 'Editar plan de pagos';
      else
        this.title = 'Nuevo plan  de pagos';
      
    }

  ngOnInit() {

    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;
    

    this.colegiaturaForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       nombreSuscripcion: ['', Validators.required],
       descripcionSuscripcion: ['', Validators.required],
       claveSuscripcion: ['', Validators.required],
       montoReinscripcion: ['', Validators.required],
       diaPagoReinscripcion: ['', Validators.required],
       montoColegiatura: ['', Validators.required],
       diaPagoColegiatura: ['', Validators.required]
     });

    if(this.id_suscripcion){
      this._pagoService.consultaSuscripcion(this.id_suscripcion).subscribe(
        response =>{
          if(response && response['suscripcion']){
            var suscripcion = response['suscripcion'];
            this.colegiaturaForm.get('nombreSuscripcion').setValue(suscripcion.nombre_suscripcion);
            this.colegiaturaForm.get('descripcionSuscripcion').setValue(suscripcion.descripcion_suscripcion);
            this.colegiaturaForm.get('claveSuscripcion').setValue(suscripcion.clave_suscripcion);
            this.colegiaturaForm.get('montoColegiatura').setValue(suscripcion.monto_colegiatura);
            this.colegiaturaForm.get('diaPagoColegiatura').setValue(suscripcion.dia_pago_colegiatura);
            this.colegiaturaForm.get('diaPagoReinscripcion').setValue(suscripcion.dia_pago_reinscripcion);
            this.colegiaturaForm.get('montoReinscripcion').setValue(suscripcion.monto_reinscripcion);
          }
        },error =>{
          console.log(<any>error)
        });
    }
     
  }

  get f() { return this.colegiaturaForm.controls; }

  enviarInformacion(){

    const url = this.router.url;

    // stop here if form is invalid
    if (this.colegiaturaForm.invalid) {
      Object.keys(this.colegiaturaForm.controls).forEach( controlKey => {
        this.colegiaturaForm.controls[controlKey].markAsTouched();
      });
      return;
    }


    this._pagoService.modificaSuscripcion(this.colegiaturaForm , this.id_suscripcion  ).subscribe(
     response =>{
         if(response && response['status']){
          if(!this.id_suscripcion) this.id_suscripcion = response['idSuscripcion'];
          
           this.router.navigate(['admin/suscripcion/generar-pago/'+this.id_suscripcion])
           
            alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])
         }

     },error =>{
       console.log(<any>error)
     });


  }

}
