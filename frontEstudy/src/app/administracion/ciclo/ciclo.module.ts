import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CicloComponent } from './ciclo.component';

import { CicloRoutingModule } from './ciclo-routing.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedPipesModule } from '../../shared';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { TransferirCicloComponent } from './transferir-ciclo/transferir-ciclo.component';



@NgModule({
  declarations: [CicloComponent, NuevoComponent, ConsultaComponent, TransferirCicloComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    CicloRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule

  ]
})
export class CicloModule { }
