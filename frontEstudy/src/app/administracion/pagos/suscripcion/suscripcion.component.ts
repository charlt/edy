import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss'],
  animations: [slideToTop()]

})
export class SuscripcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
