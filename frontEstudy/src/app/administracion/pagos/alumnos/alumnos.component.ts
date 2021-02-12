import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  animations: [slideToTop()]

})
export class PagosAlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
