import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagosService } from 'src/app/servicios/pagos.service';
import { GLOBAL } from "src/app/servicios/global";

@Component({
  selector: 'app-open-pay-transfer',
  templateUrl: './open-pay-transfer.component.html',
  styleUrls: ['./open-pay-transfer.component.scss']
})
export class OpenPayTransferComponent implements OnInit {

  idSolicitudPago;
  monto;
  verRecibo = false;
  generarRecibo = false;
  imprimiendo = false;
  produccion = GLOBAL.productionMode;
  uriStorePay = GLOBAL.uriStorePay;
  idOpen = GLOBAL.idOpen;

  descripcion;
  idPersona;
  referencia;

  generandoRecibo = false;
  nombreCarrera;


  
  constructor(
    private _pagosService: PagosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {


    this.idSolicitudPago = this.route.snapshot.paramMap.get('id'); 

    this._pagosService.consultaSolicitud(this.idSolicitudPago).subscribe(
      response =>{
        if(response && response['status']){
          let solicitud = response['solicitud'];
          this.monto = solicitud.monto_final;
          this.descripcion = solicitud.nombre_pago;
          this.idPersona = solicitud.persona_id;


          if(solicitud.info_pago && solicitud.info_pago.referencia){
            this.referencia = solicitud.info_pago.referencia;
            this.verRecibo= true;
          }else{
            this.generarRecibo = true;
          }
        }else{

        }
        
      },error =>{
        console.log(error)
      }
    )
 
    
  }

  ver_recibo(){
  
    window.open(this.uriStorePay+'/paynet-pdf/'+this.idOpen+'/'+this.referencia,'_blank');
  }

  generar_recibo(){
    this.imprimiendo = true;
    this._pagosService.consultaInformacion(this.idSolicitudPago).subscribe(
      response =>{
        
        if (response && response['status']) {
          let persona = response['persona'];

          this._pagosService.crearCargoOpenPay(this.produccion,this.idSolicitudPago,persona.nombre,persona.primer_apellido,persona.segundo_apellido,persona.email,persona.celular,
            this.monto, this.descripcion).subscribe(response => {
            
            if (response && response['status']) {
             let datos = response['datos'];
             this.referencia = datos.pago.reference;
             this.verRecibo = true;
             this.generarRecibo= false;
             this.ver_recibo();
            }
          }, error => {
            console.log(<any>error);
          });
        }
      },error=>{
        console.log(error)
      }
      
    )

  }


 
 

}
