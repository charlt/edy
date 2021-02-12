import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class HomeGuard implements CanActivate {

    jwt:string;
    identity;
    rol;
    constructor(
        private router: Router,
        private _usuarioService: UsuarioService) {
        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var dir = state.url.split('/');
        var platform = dir[1];//'candidates'

        const helper = new JwtHelperService();
   
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();

        if (this.jwt && this.identity && this.rol) {
            let id_rol = this.rol.rol_id;
            
            if(id_rol == 1 ){
                this.router.navigate(['/admin']);
                return true;
            }
            else if(id_rol == 2 ){
                this.router.navigate(['/materia']);
                return true;
            }
            else if(id_rol == 3 ){
                this.router.navigate(['/docente']);
                return true;   
            }
            else{
                this.router.navigate(['/login']);
                return false;
            }
        }

        // if(helper.isTokenExpired(this.jwt))
        //     alert('Token expired!');
        // else{
        //     alert('invalid identity');
        // }
        this.router.navigate(['/login']);
        return false;
    }
}
