import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { MateriaComponent } from './materia.component';
import { LayoutMateriaModule } from '../shared/modules/layout-materia/layout-materia.module';

// import { BasicLoginComponent} from '../components/basic-login/basic-login.component'

@NgModule({
  declarations: [MateriaComponent],

  imports: [
    CommonModule,
    MateriaRoutingModule,
    LayoutMateriaModule,
    
  ],exports:[
    MateriaComponent
  ]
})
export class MateriaModule { }

