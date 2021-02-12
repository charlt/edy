import { Component, OnInit} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {

  collapedSideBar: boolean;
  jwt: string;
  show: boolean = true;

  constructor(
    private router: Router 
  ) { }

  ngOnInit() {
    let urlArray = this.router.url.split('/');
    if (urlArray[2] === 'video-conferencia') {
      this.show = false;
    }    
  }

  


  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  
}
