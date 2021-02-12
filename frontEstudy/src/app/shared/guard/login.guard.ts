import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  jwt: string;
  identity: any;
  rol: any;

  constructor(
    private router: Router,
    private _usuarioService: UsuarioService
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var dir = state.url.split('/');
    var platform = dir[1];

    const helper = new JwtHelperService();
   
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.rol = this._usuarioService.getRol();
        
    if (this.jwt && this.identity && this.rol) {
      let id_rol = this.rol.rol_id;

      if (platform == 'login') {
        if(id_rol == 1){
          this.router.navigate(['/admin']);
          return true;
        }else if (id_rol == 2) {
          this.router.navigate(['/learning']);
          return true;
        }else if (id_rol == 3) {
          this.router.navigate(['/docente']);
          return true;   
        }else if (id_rol == 5) {
          this.router.navigate(['/asesor']);
          return true;   
        }
      }
    }
    return true;
  }
}
