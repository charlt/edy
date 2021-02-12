import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MateriaService } from 'src/app/services/materia.service';

@Injectable({
  providedIn: 'root'
})

export class MateriaGuard implements CanActivate {

  jwt:string;
  selectedMateria: string;
  materias: string;

  constructor(
    private router: Router,
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService
  ) {
  }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.jwt = this._usuarioService.getJWT();
    this.selectedMateria = this._materiaService.getSelectedMateria();
    this.materias = this._materiaService.getMaterias();
    const helper = new JwtHelperService();

    if (this.jwt && this.materias && this.selectedMateria) {
      return true;
    }
    this.router.navigate(['../login']);
    return false;
  }
}
