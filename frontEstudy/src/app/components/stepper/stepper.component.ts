import {Component, OnInit, Input} from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

/** @title A custom CDK stepper without a form */
@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: CdkStepper}]
})
export class StepperComponent extends CdkStepper implements OnInit{

  @Input() datos;
  buttons: any;

  ngOnInit(){
    this.setSteps();
  }

  setSteps(){
    this.buttons = Array(this.datos.steps).fill(false);
    if (this.datos.id == 'preguntas') {
      if (this.selectedIndex == 0) {
        this.buttons[1] = true;
      }else if (this.selectedIndex == 1) {
        this.buttons[0] = true;
      }
    }else if (this.datos.id == 'certificacion') {
      this.selectedIndex = 0;
    }
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }

}


   