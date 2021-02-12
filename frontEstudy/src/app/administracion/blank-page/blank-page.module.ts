import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import { PlanEstudioModule } from "../../components/plan-estudio/plan-estudio.module";
import { FormGeneratorComponent } from "../../components/form-generator/form-generator.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, PlanEstudioModule, FormsModule,
        ReactiveFormsModule, NgbModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}





