import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PagoService } from '../../services/pago.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';
import { EncabezadoPersonaService } from 'src/app/components/encabezado-persona/encabezado-persona.service';
import { Location } from '@angular/common';

declare var alertify;

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.scss']
})
export class FormSolicitudComponent implements OnInit {
  
  
  solicitudForm:FormGroup;
  title;
  tipo;
  idSolicitudPago;

  pagos = [];
  descuentos = [];
  formaPago = [];
  estatusSolicitudPago = [];
  montoPago;
  beca = 0;
  montoDescuento = 0;
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
    ) {}

  ngOnInit() {
    
    this.solicitudForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       monto: new FormControl( {value: '', disabled: true}),
       montoTotal: ['', Validators.required],
       fechaPago: [''],
       idFormaPago: [1, Validators.required],
       idEstatusSolicitudPago: ['', Validators.required],
       nombrePago: ['', Validators.required],
       idDescuento: [''],
       beca: [''],
       recargo: [''],
       observacion: ['']
     });


      this.idSolicitudPago  = this.route.snapshot.paramMap.get('id1');

      this._pagoService.consultaSolicitud(this.idSolicitudPago).subscribe(
        response=>{
          if(response && response['status']){
            let solicitud = response['solicitud'];
            this.idAlumno = solicitud.persona_id;
            this.montoPago = solicitud.monto_final;
            this.solicitudForm.get('monto').setValue(solicitud.monto);
            this.solicitudForm.get('montoTotal').setValue(solicitud.monto_final);

            let fecha_pago;
            let fecha_pago2
            if(solicitud.estatus_solicitud_pago_id == '3'){
              fecha_pago = new Date(solicitud.fecha_pago *1000);
              fecha_pago2 = fecha_pago.toISOString().substring(0, 10);
            }else{
              fecha_pago2 = null;
              fecha_pago = null;
            }
            


            this.solicitudForm.get('fechaPago').setValue(fecha_pago2);
            this.solicitudForm.get('idFormaPago').setValue(solicitud.forma_pago_id);
            this.solicitudForm.get('idEstatusSolicitudPago').setValue(solicitud.estatus_solicitud_pago_id);
            this.solicitudForm.get('nombrePago').setValue(solicitud.nombre_pago);

            if(!solicitud.descuento_id) solicitud.descuento_id = "";

            this.solicitudForm.get('idDescuento').setValue(solicitud.descuento_id);
            this.solicitudForm.get('beca').setValue(solicitud.beca);
            this.solicitudForm.get('recargo').setValue(solicitud.recargo);
            this.solicitudForm.get('observacion').setValue(solicitud.observacion);

            this.consultaPersona();
          }
        },error=>{
          console.log(error)
        }  
        );
        this.title = 'Editar información de pago';




 

    
  
    this._pagoService.catDescuentos().subscribe(
      response=>{
        console.log(response);
        if(response && response['status']){
          this.descuentos = response['descuentos'];
        }else{
          this.descuentos = [];
        }
      },error=>{
        console.log(error)
      }
    )
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
    )

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


  actualizaMonto(event){
    let indexPago = event.target.selectedIndex -1;
    this.montoPago =this.pagos[indexPago].monto;

    this.solicitudForm.get('montoTotal').setValue(this.montoPago); 
    this.solicitudForm.get('beca').setValue(""); 
    this.solicitudForm.get('idDescuento').setValue(""); 
    this.solicitudForm.get('recargo').setValue(""); 
  }
  aplicaBeca(event){
    this.beca = event.target.value;

    let montoPago = this.montoPago - this.beca;
    this.solicitudForm.get('montoTotal').setValue(montoPago); 
    this.solicitudForm.get('idDescuento').setValue(""); 
    this.solicitudForm.get('recargo').setValue(""); 

  }
  aplicaDescuento(event){
    let indexDescuento = event.target.selectedIndex -1;
    let descuento = this.descuentos[indexDescuento];

    let montoPago = this.montoPago - this.beca;

    if(descuento.valor == 1){
      this.descuento = descuento.descuento;
      
    }else if(descuento.valor == 2){
      this.descuento =(montoPago *descuento.descuento /100)
    }

    montoPago = montoPago - this.descuento;

    this.solicitudForm.get('montoTotal').setValue(montoPago); 
    
  }

  aplicaRecargo(event){
    let recargo = event.target.value;


    let montoPago = this.montoPago - this.beca - this.descuento + recargo;

    this.solicitudForm.get('montoTotal').setValue(montoPago); 
    
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

      this._pagoService.editaSolicitud(this.solicitudForm , this.idSolicitudPago ,this.idAlumno ).subscribe(
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
