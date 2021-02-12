import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  animations: [slideToTop()]

})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
