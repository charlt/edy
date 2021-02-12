import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PagoService } from '../../services/pago.service';
import { Location } from '@angular/common';
 
declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  alumnoForm:FormGroup;

  idPago;
  pago;
  title;
  tipoPagos = [];
  estatusPago = [];
  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private _pagoService: PagoService,
        private location: Location
    ) { 

      this.idPago = this.route.snapshot.paramMap.get('id');

      if(this.idPago)
        this.title = 'Editar pago';
      else
        this.title = 'Nuevo pago';
      
    }

  ngOnInit() {

    this.alumnoForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       nombrePago: ['', Validators.required],
       descripcionPago: ['', Validators.required],
       monto: ['', Validators.required],
       idTipoPago: ['', Validators.required],
       idEstatusPago: ['', Validators.required]
     });


     if(this.idPago){
      this._pagoService.consultaPago(this.idPago).subscribe(
        response=>{
         if(response && response['status']){
           this.pago = response['pago'];

           this.alumnoForm.get('nombrePago').setValue(this.pago.nombre_pago);
           this.alumnoForm.get('idTipoPago').setValue(this.pago.tipo_pago_id);
           this.alumnoForm.get('idEstatusPago').setValue(this.pago.estatus_pago_id);
           this.alumnoForm.get('monto').setValue(this.pago.monto);

         }else{
           this.pago = [];
         }
        },error=>{
          console.log(error)
        }
      )
     }
     


     
    this._pagoService.catTipoPagos().subscribe(
      response=>{
    
        if(response && response['status']){
          this.tipoPagos = response['tipoPagos'];
        }else{
          this.tipoPagos = [];
        }
      },error=>{
        console.log(error)
      }
    )

    this._pagoService.catEstatusPago().subscribe(
      response=>{
    
        if(response && response['status']){
          this.estatusPago = response['estatusPago'];
        }else{
          this.estatusPago = [];
        }
      },error=>{
        console.log(error)
      }
    )

  }

  get f() { return this.alumnoForm.controls; }

  enviarInformacion(){
    // stop here if form is invalid
    if (this.alumnoForm.invalid) {
      Object.keys(this.alumnoForm.controls).forEach( controlKey => {
        this.alumnoForm.controls[controlKey].markAsTouched();
      });
      return;
    }

  

      this._pagoService.modificaPago(this.alumnoForm  ,this.idPago ).subscribe(
        response =>{
            if(response && response['status']){
              this.location.back()
              alertify.success(response['msg'])
            }else{
              alertify.error(response['msg'])
   
            }
   
        },error =>{
          console.log(<any>error)
        });
    

  }


}
