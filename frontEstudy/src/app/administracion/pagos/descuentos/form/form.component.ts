import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from '../../services/pago.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title;
  tipo = 1;
  descuento;
  id_descuento;
  descuentoForm: FormGroup;


  constructor(
    private _usuarioService: UsuarioService,
    private _pagoService: PagoService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router : Router,

  ){
    if (this.id_descuento) {
      this.title = 'Editar descuento'
    }else{
      this.title='Nuevo';
    }
    this._usuarioService.pushBreadcum(this.title,'',2);
    this.id_descuento = this.route.snapshot.params['id']
   }

   get f() { return this.descuentoForm.controls; }

  ngOnInit(){
    if (this.id_descuento) {
      this.consultaDescuento();
    }

    this.descuentoForm = this.formBuilder.group({
      clave: ['', Validators.required],
      desc: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin:['', Validators.required],
      descuento:['', Validators.required],
      codigoProm:['']
 
     });

  }

  consultaDescuento(){
    this._pagoService.consultaEspDescuento(this.id_descuento).subscribe(
      response =>{
          if(response && response['status']){
            this.descuento = response['descuento'][0];
            this.descuentoForm.get('desc').setValue(this.descuento.descripcion);
            this.descuentoForm.get('fechaInicio').setValue(this.descuento.fecha_inicio);
            this.descuentoForm.get('fechaFin').setValue(this.descuento.fecha_fin);
            this.descuentoForm.get('descuento').setValue(this.descuento.descuento);
            this.descuentoForm.get('codigoProm').setValue(this.descuento.codigo_promocion);
            this.descuentoForm.get('clave').setValue(this.descuento.clave);
            this.tipo= parseInt(this.descuento.valor);
          }
      },error =>{
        console.log(<any>error)
      });
  }

  enviarInformacion(){
    if (this.descuentoForm.invalid) {
      Object.keys(this.descuentoForm.controls).forEach( controlKey => {
        this.descuentoForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._pagoService.modificaDescuento(this.descuentoForm, this.id_descuento, this.tipo).subscribe(
      response =>{
          if(response && response['status']){
            this.router.navigate(['admin/descuentos']);
            alertify.success(response['msg'])
          }else{
            alertify.error(response['msg'])
          }
      },error =>{
        console.log(<any>error)
      });
  }

  cambiaTipo(){
    if (this.tipo == 1) {
      this.tipo = 2;
    }else if(this.tipo == 2){
      this.tipo = 1;
    }
  }

}
