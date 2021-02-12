import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-admin-expediente',
  templateUrl: './admin-expediente.component.html',
  styleUrls: ['./admin-expediente.component.scss'],
  animations: [slideToTop()]
})
export class AdminExpedienteComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}