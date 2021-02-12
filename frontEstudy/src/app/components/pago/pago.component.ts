import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { PagoService} from 'src/app/administracion/pagos/services/pago.service'
import { GLOBAL} from 'src/app/services/global'
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  tipoPago = 0;
  monto;
  idSolicitudPago;
  solicitudPago = null;
  //metodosPago = 0;
  url = GLOBAL.urlAssets;
  descripcion: string;
  fecha_limite;
  ingresarCodigo = false;
  codigo_promocion;
  idDescuento;

  consultaDescuento = false;
  estatusDescuento = null;
  urlFrontPago: string = GLOBAL.urlFrontPago;
  plataforma: string;

  constructor(
    private route: ActivatedRoute,
    private _pagoService: PagoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.plataforma = this.router.url.split('/')[1];    
    
    this.idSolicitudPago = this.route.snapshot.paramMap.get('id');
    this._pagoService.consultaSolicitud(this.idSolicitudPago).subscribe(
      response =>{        
        if(response && response['status']){          
          this.solicitudPago = response['solicitud'];          
          this.monto = this.solicitudPago.monto_final;
          this.descripcion = this.solicitudPago.nombre_pago;
          if(this.solicitudPago.descuento_id){
            this.codigo_promocion = this.solicitudPago.clave_descuento;
            this.ingresarCodigo = true;
            this.estatusDescuento = 1;
          }
          
          this.fecha_limite = new Date(response['solicitud']['fecha_pago'] * 1000);
          /*this.metodosPago = parseInt(this.solicitudPago.tarjeta) + parseInt(this.solicitudPago.transferencia) +parseInt(this.solicitudPago.fisico);

          if(this.metodosPago == 1){
            if(this.solicitudPago.tarjeta == 1){
              this.elegirPago(1);
            }
            if(this.solicitudPago.transferencia == 1){
              this.elegirPago(2);
            }
            if(this.solicitudPago.fisico == 1){
              
              this.elegirPago(3);
            }
          }else{
            console.log(this.solicitudPago)
            if(this.solicitudPago.estatus_solicitud_pago_id == '2' && this.solicitudPago.forma_pago_id == '3'){
              this.elegirPago(2);
            }
          }*/
        
        }else{

        }
      },error=>{
        console.log(error);
      }
    )
  }

  elegirPago(tipoPago){
    this.tipoPago = tipoPago;
  }

  validar_codigo(){
    this._pagoService.codigoPromocion(this.idSolicitudPago,this.codigo_promocion).subscribe(
      response=>{        
        if(response && response['status']){
          this.estatusDescuento = 1;
          this.solicitudPago.descuento_id = response['idDescuento']
          this.solicitudPago.descripcion_descuento = response['nombreDescuento']
          this.solicitudPago.monto_final = response['montoFinal']
          this.solicitudPago.descuento = response['montoDescuento']
          this.solicitudPago.valor_descuento = response['valorDescuento']
        }else{
          this.estatusDescuento = 0;
        }
      },error=>{
        console.log(error)
      }
    )

  }

}
