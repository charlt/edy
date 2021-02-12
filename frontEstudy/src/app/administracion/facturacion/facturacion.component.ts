import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss'],
  animations:  [slideToTop()]
})
export class FacturacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
