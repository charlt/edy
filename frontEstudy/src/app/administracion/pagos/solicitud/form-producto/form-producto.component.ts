import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PagoService } from '../../services/pago.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';
import { EncabezadoPersonaService } from 'src/app/components/encabezado-persona/encabezado-persona.service';
import { Location } from '@angular/common';

declare var alertify;

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  
  
  solicitudForm:FormGroup;
  title;
  tipo;
  idSolicitudPago;

  productos = [];
  descuentos = [];
  formaPago = [];
  estatusSolicitudPago = [];
  montoPago;
  beca = 0;
  descuento;
  idAlumno = null;
  nombreAlumno = null;
  matricula = null;
  buscarAlumno = false;
  

  constructor(
        private formBuilder: FormBuilder,
        private _pagoService: PagoService,
        private _encabezadoPersonaService: EncabezadoPersonaService,
        private router: Router,
        private route : ActivatedRoute,
        private location: Location
    ) {

   

     }

  ngOnInit() {
    
    this.solicitudForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       monto: ['', Validators.required],
       catalogoPago:[1],
       nombrePago: ['', Validators.required],
       fechaPago: [''],
       idFormaPago: [1, Validators.required],
       idEstatusSolicitudPago: ['', Validators.required],
       idPago: ['', Validators.required],
       idDescuento: [''],
       beca: [''],
       observacion: [''],
     });


      this.idAlumno  = this.route.snapshot.paramMap.get('id1');
      this.consultaPersona();
      this.title = 'Nuevo pago de producto';



      this.solicitudForm.get('catalogoPago').valueChanges.subscribe(
        catalogoPago =>{
          if(catalogoPago == 1){
            this.solicitudForm.get('idPago').setValue(1);
          }
        } 
      )

      this.solicitudForm.get('idPago').valueChanges.subscribe(
        pago=>{
          this.productos.forEach(function(producto){
            if(producto.pago_id == pago ){
              this.solicitudForm.get('nombrePago').setValue(producto.nombre_producto);
              this.solicitudForm.get('monto').setValue(producto.monto);
            }
          }.bind(this)) 
        }
      )



 

    
    this._pagoService.catProducto().subscribe(
      response=>{
        if(response && response['status']){
          this.productos = response['productos'];
        }else{
          this.productos = [];
        }
      },error=>{
        console.log(error)
      }
    )

    this._pagoService.catDescuentos().subscribe(
      response=>{
        console.log(response);
        if(response && response['status']){
          this.descuentos = response['descuentos'];
        }else{
          this.descuentos = [];
        }
      },error=>{
        console.log(error);
      }
    );

    this._pagoService.catEstatusSolicitudPago().subscribe(
      response=>{
        console.log(response);
        if(response && response['status']){
          this.estatusSolicitudPago = response['estatusSolicitudPago'];
        }else{
          this.estatusSolicitudPago = [];
        }
      },error=>{
        console.log(error)
      }
    );

    this._pagoService.catFormaPago().subscribe(
      response=>{
    
        if(response && response['status']){
          this.formaPago = response['formaPago'];
        }else{
          this.formaPago = [];
        }
      },error=>{
        console.log(error)
      }
    )

  }

  consultaPersona(){
    this._encabezadoPersonaService.consultaPersona(this.idAlumno,2).subscribe(
      response=>{
        if(response && response['status']){
          this.nombreAlumno = response['persona'].nombre+' '+response['persona'].primer_apellido+' '+ response['persona'].segundo_apellido
          this.matricula = response['persona'].clave_alumno;
        }else{
          console.log(response['error'])
        }
      },error=>{
        console.log(error)
      }      
    )
  }

  get f() { return this.solicitudForm.controls; }


  
  aplicaBeca(event){
    this.beca = event.target.value;

    let montoPago = this.montoPago - this.beca;
    this.solicitudForm.get('monto').setValue(montoPago); 
    this.solicitudForm.get('idDescuento').setValue(""); 

  }
  aplicaDescuento(event){
    let indexDescuento = event.target.selectedIndex -1;
    let descuento = this.descuentos[indexDescuento];
    console.log(descuento)

    let montoPago = this.montoPago - this.beca;

    if(descuento.valor == 1){
      montoPago = montoPago - descuento.descuento;
    }else if(descuento.valor == 2){
      montoPago = montoPago - (montoPago *descuento.descuento /100);
    }

    this.solicitudForm.get('monto').setValue(montoPago); 
    
  }
  enviarInformacion(){
    // stop here if form is invalid
    if (this.solicitudForm.invalid) {
      Object.keys(this.solicitudForm.controls).forEach( controlKey => {
        this.solicitudForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    if(!this.idAlumno){
      alertify.error('Debes seleccionar un alumno');
      return;
    }

    if(this.solicitudForm.get('idEstatusSolicitudPago').value == '3' &&this.solicitudForm.get('fechaPago').value == '' ){
      alertify.error('Debes definir una fecha');
      return;  
    }

    if(this.solicitudForm.get('idEstatusSolicitudPago').value == '3' &&this.solicitudForm.get('idFormaPago').value == '1' ){
      alertify.error('Debes definir un pago');
      return;  
    }

      this._pagoService.creaProducto(this.solicitudForm ,this.idAlumno ).subscribe(
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
  alumnoSeleccionado(event){
    if(event.status){
      this.idAlumno = event.persona.persona_id
      this.nombreAlumno = this.nombreAlumno = event.persona.nombre+' '+event.persona.primer_apellido+' '+ event.persona.segundo_apellido
      this.buscarAlumno = false;
    }else{
      this.idAlumno = null;
    }
  }
}
