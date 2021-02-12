import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLearningComponent } from './home-learning.component';

const routes: Routes = [
  { path: '', 
    component: HomeLearningComponent
  }
];
@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLearningRoutingModule { }
