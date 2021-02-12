import { Component, OnInit, Input, OnChanges } from '@angular/core';
import  {randomColor} from 'randomcolor';

@Component({
  selector: 'app-logotipo-usuario',
  templateUrl: './logotipo-usuario.component.html',
  styleUrls: ['./logotipo-usuario.component.scss']
})
export class LogotipoUsuarioComponent implements OnChanges {
  // color;
  letrasLogo;
  radio;
  altoLogo;
  anchoLogo;
  tamanoLetra;

  @Input() iniciales;
  @Input() ancho;
  @Input() alto;
  @Input() tamLetra;
  @Input() color;


  constructor() { }

  ngOnChanges() {
    if(!this.color){
    this.color = randomColor();
  }
    this.logo();
     this.radio = 100 + "%"

    this.altoLogo= this.alto + "px";
    this.anchoLogo= this.ancho + "px";
    this.tamanoLetra = this.tamLetra + "px";
    

  }



  logo(){
     this.letrasLogo = this.iniciales.substr(0,2)
   }

}
