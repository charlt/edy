import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { RazonesSocialesRoutingModule } from './razones-sociales-routing.module';
import { RazonesSocialesComponent } from './razones-sociales.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CreaRazonComponent } from './crea-razon/crea-razon.component';
import { EditaRazonComponent } from './edita-razon/edita-razon.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [RazonesSocialesComponent, ConsultaComponent, CreaRazonComponent, EditaRazonComponent],
  imports: [
    CommonModule,
    RazonesSocialesRoutingModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    NgMultiSelectDropDownModule.forRoot()

  ]
})
export class RazonesSocialesModule { }
