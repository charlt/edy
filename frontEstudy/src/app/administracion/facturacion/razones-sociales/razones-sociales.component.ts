import { Component, OnInit } from '@angular/core';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'app-razones-sociales',
  templateUrl: './razones-sociales.component.html',
  styleUrls: ['./razones-sociales.component.scss'],
  animations: [slideToTop()]

})
export class RazonesSocialesComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {


    
  }

}
