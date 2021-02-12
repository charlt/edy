import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaComponent } from './materia.component';

const routes: Routes = [
  {
      path: '',
      component: MateriaComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: 'seleccion',loadChildren: './seleccion-materia/seleccion-materia.module#SeleccionMateriaModule' },
        { path: 'home',loadChildren: './home-materia/home-materia.module#HomeMateriaModule' },
        { path: 'actividad/:id',loadChildren: './actividad/main/main.module#MainActividadModule' },
        { path: 'portafolio',loadChildren: './actividad/portafolio-evidencias/portafolio-evidencias.module#PortafolioEvidenciasModule' },
        { path: 'avance',loadChildren: './avance/avance.module#AvanceModule' },
        { path: 'perfil',loadChildren: '../master/perfil/perfil.module#PerfilModule'},
        { path: 'mensajes/:id',loadChildren: '../docente/mensajeria/mensajeria.module#MensajeriaModule'},
        { path: 'avisos/:id',loadChildren: '../components/avisos/avisos.module#AvisosModule'}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaRoutingModule { }
