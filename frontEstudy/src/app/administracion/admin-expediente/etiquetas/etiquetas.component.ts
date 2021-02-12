import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss'],
  animations: [slideToTop()]
})
export class EtiquetasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
