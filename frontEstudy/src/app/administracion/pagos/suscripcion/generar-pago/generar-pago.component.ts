import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var alertify;

@Component({
  selector: 'app-generar-pago',
  templateUrl: './generar-pago.component.html',
  styleUrls: ['./generar-pago.component.scss']
})
export class GenerarPagoComponent implements OnInit {

  id_suscripcion;
  suscripcion;
  descuentos = [];
  title;

  generarPagoForm:FormGroup;
  Pagos: any;
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  constructor(
    private _pagoService: PagoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.id_suscripcion  = this.route.snapshot.paramMap.get('id');
    this.title = "Generar pago";
  }

  ngOnInit() {
    this.consulta();
    this._pagoService.consultaSuscripcion(this.id_suscripcion).subscribe(
      response =>{
        if(response && response['status']){
          this.suscripcion = response['suscripcion'];
          this.title = this.title + ' para '+this.suscripcion.nombre_suscripcion;
          
        }else{
          
        }
          
      },error=>{
        console.log(error)
      }
    );

    this._pagoService.catDescuentos().subscribe(
      response =>{
        if(response && response['status']){
          this.descuentos = response['descuentos'];
        }else{
          this.descuentos = [];
        }
          
      },error=>{
        console.log(error)
      }
    );

    this.generarPagoForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       mes: ['', Validators.required],
       anio: ['2020', Validators.required],
       tipoPago: ['',Validators.required]
     });
  }

  get f() { return this.generarPagoForm.controls; }

  enviarInformacion(){
    // stop here if form is invalid
    if (this.generarPagoForm.invalid) {
      Object.keys(this.generarPagoForm.controls).forEach( controlKey => {
        this.generarPagoForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    var duplicados = this.Pagos.filter(function(suscripcion){
      console.log(suscripcion.anio,suscripcion.mes,suscripcion.tipo)
      return suscripcion.anio == this.generarPagoForm.get('anio').value && suscripcion.mes == this.generarPagoForm.get('mes').value && suscripcion.tipo == this.generarPagoForm.get('tipoPago').value
    }.bind(this))


    if(duplicados.length){
      alertify.error('Este registro ya existe')
    }else{
  
      alertify.confirm('', '¿Deseas generar el pago este mes?', 
      function(){
        this._pagoService.guardarSuscripcionPago(this.generarPagoForm , this.id_suscripcion  ).subscribe(
          response =>{
              if(response && response['status']){
                alertify.success(response['msg'])
                this.consulta();
              }else{
                alertify.error(response['msg'])
    
              }
    
          },error =>{
            console.log(<any>error)
          });
      }.bind(this),
      function(){
        alertify.error('Cancelado');
      });
    }
  }

  consulta() {
    this._pagoService.consultaPagosGenerados(this.id_suscripcion).subscribe(
      response =>{        
          if(response && response['status']){
            this.Pagos = response['pagos'];
            this.Pagos.forEach(pagos => {
              pagos.mesNombre = this.meses[parseInt(pagos.mes) - 1];
              
            });
            console.log(this.Pagos);
          }
      },error =>{
        console.log(<any>error)
      });
  }


    
  eliminar(id, index) {
    alertify.confirm('¿deseas eliminar el pago?',
      function () {
        this._pagoService.eliminaSuscripcionPago(id).subscribe(
          response => {
            if (response && response['status']) {
              this.Pagos.splice(index, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.success(response['msg']);
            }

          }, error => {
            console.log(<any>error)
          });
      }.bind(this),
      function () {
        alertify.error('Cancel');
      });
  }

}
