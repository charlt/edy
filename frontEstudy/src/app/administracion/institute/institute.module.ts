import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { InstituteComponent } from './institute.component';

@NgModule({
    imports: [CommonModule, InstituteRoutingModule],
    declarations: [InstituteComponent]
})
export class InstituteModule {}
