import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipesModule } from '../../shared';

//import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './asistencia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AsistenciaComponent
  ],
  imports: [
    CommonModule,
    //AsistenciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedPipesModule
  ]
})
export class AsistenciaModule { }
