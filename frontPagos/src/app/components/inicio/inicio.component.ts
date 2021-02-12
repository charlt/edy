import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PagosService } from 'src/app/servicios/pagos.service';
import { ActivatedRoute } from '@angular/router';

declare var paypal;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  @ViewChild('paypal', { static: true } ) paypalElement: ElementRef;

  urlImg = 'assets/images/';

  datos = {
    price: '6500',
    description: 'Colegiatura',
    img: ''
  };

  matricula: string;
  paidFor: boolean = false;
  Data: any;
  flag: boolean = false;

  constructor(
    private _pagosService: PagosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.matricula = this.route.snapshot.paramMap.get('id');        
    this._pagosService.getMonto(this.matricula).subscribe(response => {
      if (response && response['status']) {
        this.Data = response['adeudo'][0];        
        this.datos.price = this.Data.saldo;        
      }
      this.setBtn();
      this.flag = true;
    }, error => {
      console.log(<any>error);
    });
  }

  setBtn() {
    paypal
    .Buttons({
      style: {
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
        tagline: 'false',
        size: 'responsive'
      },
      createOrder: (data, actions) => {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [
            {
              description: this.datos.description,
              amount: {
                currency_code: 'MXN',
                value: this.datos.price,
                breakdown: {
                  item_total: {
                    currency_code: 'MXN',
                    value: this.datos.price
                  }
                }
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        // const order = await actions.order.capture();
        // this.paidFor = true;
        // console.log(order);
        return actions.order.capture().then(function(details) {
          console.log(details);
          
        });
      },
      onError: err => {
        console.log('OnError', err);
      },

    })
    .render(this.paypalElement.nativeElement)
  }

}
