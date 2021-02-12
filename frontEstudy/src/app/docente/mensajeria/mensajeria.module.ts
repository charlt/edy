import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajeriaRoutingModule } from './mensajeria-routing.module';
import { MensajeriaComponent } from './mensajeria.component';
import { RetroalimentacionModule } from '../retroalimentacion/retroalimentacion.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AutosizeModule} from 'ngx-autosize';


@NgModule({
  declarations: [MensajeriaComponent],
  imports: [
    CommonModule,
    MensajeriaRoutingModule,
    RetroalimentacionModule,
    CKEditorModule,
    FormsModule,
    NgbModule,
    AutosizeModule
  ],
  exports: [MensajeriaComponent]

})
export class MensajeriaModule { }
