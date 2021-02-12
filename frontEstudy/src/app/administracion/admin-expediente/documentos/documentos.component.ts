import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss'],
  animations: [slideToTop()]
})
export class DocumentosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
