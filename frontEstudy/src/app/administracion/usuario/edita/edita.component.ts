import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.scss']
})
export class EditaComponent implements OnInit {

  idPersona;
  constructor(
    
    private route: ActivatedRoute
  ) {
    this.idPersona = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    
  }

}
