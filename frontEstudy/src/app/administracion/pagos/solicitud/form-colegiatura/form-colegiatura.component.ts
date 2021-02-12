import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PagoService } from '../../services/pago.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';
import { EncabezadoPersonaService } from 'src/app/components/encabezado-persona/encabezado-persona.service';
import { Location } from '@angular/common';

declare var alertify;

@Component({
  selector: 'app-form-colegiatura',
  templateUrl: './form-colegiatura.component.html',
  styleUrls: ['./form-colegiatura.component.scss']
})
export class FormColegiaturaComponent implements OnInit {
  
  
  solicitudForm:FormGroup;
  title;
  tipo;
  idSolicitudPago;

  pagos = [];
  descuentos = [];
  formaPago = [];
  estatusSolicitudPago = [];
  
  beca = 0;
  descuento = 0;
  idAlumno = null;
  nombreAlumno = null;
  matricula = null;
  buscarAlumno = false;
  suscripcionPago = [];
  selectedSuscripcionPago = null;
  errorSuscripcion = 0;
  msgErrorSuscripcion = "";
  codigoErrorSuscripcion = 0;
  idErrorSuscripcion;
  idRol = 4;
  

  constructor(
        private formBuilder: FormBuilder,
        private _pagoService: PagoService,
        private _encabezadoPersonaService: EncabezadoPersonaService,
        private router: Router,
        private route : ActivatedRoute,
        private location: Location
    ) {

      if(this.router.url.indexOf('nueva-inscripcion') == -1){ //nueva colegiatura
        this.idRol = 2;
        this.title = 'Agregar Colegiatura/reinscripción';

      }else{ //nueva inscripcion
        this.idRol = 4;
        this.title = 'Agregar inscripción';

      }
     }

  ngOnInit() {
    
    this.solicitudForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       montoOriginal: [''],
       monto: new FormControl( {value: '', disabled: true}),
       montoTotal: ['',Validators.required],
       fechaPago: [''],
       idPago: ['',Validators.required],
       idFormaPago: [1, Validators.required],
       idEstatusSolicitudPago: ['', Validators.required],
       idDescuento: [''],
       observacion: [''],
       nombrePago: [''],
       beca: [''],
       recargo: ['0']
     });

    
     
      this.idAlumno  = this.route.snapshot.paramMap.get('id1');
      if(this.idAlumno)
        this.consultaPersona();

    
    this._pagoService.catPagos().subscribe(
      response=>{
        if(response && response['status']){
          this.pagos = response['pagos'];
        }else{
          this.pagos = [];
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
        console.log(error)
      }
    )
    this._pagoService.catEstatusSolicitudPago().subscribe(
      response=>{
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
    this.errorSuscripcion = 0;
    this.msgErrorSuscripcion = "";
    this.codigoErrorSuscripcion = 0;
    

    this._encabezadoPersonaService.consultaPersona(this.idAlumno,this.idRol).subscribe(
      response=>{
        if(response && response['status']){
          this.nombreAlumno = response['persona'].nombre+' '+response['persona'].primer_apellido+' '+ response['persona'].segundo_apellido
          this.matricula = response['persona'].clave_alumno;

          this._pagoService.consultaPersonaSuscripcionPago(this.idAlumno,this.idRol).subscribe(
            response =>{        
              if(response && response['status']){
                

                this.suscripcionPago = response['suscripcionPago'];
                
                
              }else{
                this.errorSuscripcion = 1
                this.msgErrorSuscripcion = response['msg'];                
                this.codigoErrorSuscripcion = response['codigoError'];
                this.idErrorSuscripcion = response['idSuscripcion'];
              }
            },error=>{
              console.log(error);
            });
              
        }else{
          console.log(response['msg'])
        }
      },error=>{
        console.log(error)
      }      
    )
  }

  get f() { return this.solicitudForm.controls; }

  
  aplicaDescuento(event){
    let indexDescuento = event.target.selectedIndex -1;
    let descuento = this.descuentos[indexDescuento];
    

    let monto = parseFloat(this.solicitudForm.get('monto').value); 

    if(descuento.valor == 1){
      this.descuento = descuento.descuento

    }else if(descuento.valor == 2){
      this.descuento =  (monto *descuento.descuento /100);
    }

    monto = monto - this.descuento;


    this.solicitudForm.get('montoTotal').setValue(monto); 
    this.solicitudForm.get('recargo').setValue(0); 


    return monto;
    
  }

  aplicaRecargo(){
    let monto = this.solicitudForm.get('monto').value; 


    monto = monto - this.descuento + parseFloat(this.solicitudForm.get('recargo').value);
    this.solicitudForm.get('montoTotal').setValue(monto); 


  }

  seleccionarPago(event){
    let i = event.target.selectedIndex -1;
    
    this.selectedSuscripcionPago = this.suscripcionPago[i]
    
    this.solicitudForm.get('montoOriginal').setValue(this.selectedSuscripcionPago.monto)
    this.solicitudForm.get('monto').setValue(this.selectedSuscripcionPago.descuento)
    this.solicitudForm.get('montoTotal').setValue(this.selectedSuscripcionPago.descuento);
    this.solicitudForm.get('nombrePago').setValue(this.selectedSuscripcionPago.nombre_pago);
    this.solicitudForm.get('beca').setValue(this.selectedSuscripcionPago.monto - this.selectedSuscripcionPago.descuento);



  }

  enviarInformacion(){
    // stop here if form is invalid
    if (this.solicitudForm.invalid) {
      Object.keys(this.solicitudForm.controls).forEach( controlKey => {
        this.solicitudForm.controls[controlKey].markAsTouched();
      });
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

    if(!this.idAlumno){
      alertify.error('Debes seleccionar un alumno');
      return;
    }

      this._pagoService.creaColegiaturaAlumno(this.solicitudForm  ,this.idAlumno ).subscribe(
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
      this.consultaPersona();
    }else{
      this.idAlumno = null;
    }
  }
}
