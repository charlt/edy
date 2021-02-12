import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  tipo;
  cargaConf;
  pagos = [];
  tipoPagos = [];
  title;

  idTipoPago;

  constructor(
    private _pagoService : PagoService

  ) {
    this.title = 'Catálogo de pagos';
   }

  ngOnInit() {


    this._pagoService.catTipoPagos().subscribe(
      response =>{
        if(response && response['status']){
          this.tipoPagos = response['tipoPagos']
          this.consultaPago(1);
        }else{
          this.pagos = [];
        }

        
        
      },error=>{
        console.log(error)
      }
    );

    
  }

  consultaPago(idTipoPago){
    this.idTipoPago = idTipoPago;

    this._pagoService.catPagos(idTipoPago).subscribe(
      response =>{
        if(response && response['status']){
          this.pagos = response['pagos']
          console.log(response);
        }else{
          this.pagos = [];
        }
        
      },error=>{
        console.log(error)
      }
    )
  }


}
