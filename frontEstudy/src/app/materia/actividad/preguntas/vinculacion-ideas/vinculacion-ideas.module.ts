import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinculacionIdeasComponent } from './vinculacion-ideas.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { DiagramaComponent } from './diagrama/diagrama.component';

@NgModule({
  declarations: [VinculacionIdeasModule.rootComponent, TablaComponent, DiagramaComponent],
  imports: [
    CommonModule,
    CdkStepperModule,
    StepperModule,
    ReactiveFormsModule
  ],
  entryComponents: [  
    VinculacionIdeasModule.rootComponent
  ]
})
export class VinculacionIdeasModule { 
  static rootComponent = VinculacionIdeasComponent;
}
