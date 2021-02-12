import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolRoutingModule } from './rol-routing.module';
import { RolComponent } from './rol.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PrivilegiosComponent } from './privilegios/privilegios.component';
import { EditaPrivilegiosComponent } from './edita-privilegios/edita-privilegios.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';



@NgModule({
  declarations: [RolComponent, ConsultaComponent, FormComponent, PrivilegiosComponent, EditaPrivilegiosComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    RolRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class RolModule { }
