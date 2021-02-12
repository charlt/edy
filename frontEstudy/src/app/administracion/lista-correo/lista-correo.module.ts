import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListaCorreoRoutingModule } from './lista-correo-routing.module';
import { ListaCorreoComponent } from './lista-correo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';


@NgModule({
  declarations: [ListaCorreoComponent, ConsultaComponent, NuevoComponent],
  imports: [
    CommonModule,
    ListaCorreoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    DragDropModule  
  ]
})
export class ListaCorreoModule { }
