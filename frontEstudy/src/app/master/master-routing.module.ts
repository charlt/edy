import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';


const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: 'institucion', loadChildren: './institucion/institucion.module#InstitucionModule' },
        { path: 'privilegios',loadChildren: './privilegios/privilegios.module#PrivilegiosModule' },
        { path: 'usuario',loadChildren: '../administracion/usuario/usuario.module#UsuarioModule' },
        { path: 'rol', loadChildren: '../administracion/rol/rol.module#RolModule'},
    ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
