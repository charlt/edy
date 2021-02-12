import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})

export class BlankPageComponent implements OnInit {

    titulo: string;
    contador = 10;

    verde;
    rojo;
    amarillo;

    incrementar() {
      this.contador++;
      //condicion de colores
    }
  
    decrementar() {
      this.contador--;
      //condicion de colores
    }

    constructor() {}

    ngOnInit() {
        /*this.titulo = "Componente plan de estudios"*/
    }

    getId(idPlan){
        console.log(idPlan)
    }
}
