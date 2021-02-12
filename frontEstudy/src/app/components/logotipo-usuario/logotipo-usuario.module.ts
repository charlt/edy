import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotipoUsuarioComponent } from './logotipo-usuario.component';

@NgModule({
  declarations: [LogotipoUsuarioComponent],
  imports: [
    CommonModule
  ],
  exports:[LogotipoUsuarioComponent]
})
export class LogotipoUsuarioModule { }
