import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-catalogo-pagos',
  templateUrl: './catalogo-pagos.component.html',
  styleUrls: ['./catalogo-pagos.component.scss'],
  animations: [slideToTop()]
})
export class CatalogoPagosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
