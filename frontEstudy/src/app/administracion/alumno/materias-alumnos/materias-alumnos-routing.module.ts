import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriasAlumnosComponent } from './materias-alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: MateriasAlumnosComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasAlumnosRoutingModule { }
