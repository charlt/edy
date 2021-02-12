import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupAlumnoComponent } from './signup-alumno.component';

const routes: Routes = [
  { path: '', component: SignupAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupAlumnoRoutingModule { }
