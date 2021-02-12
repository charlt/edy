import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

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

        if (this.jwt && /*!helper.isTokenExpired(this.jwt)*/ this.identity && this.rol) {
            //localStorage.setItem('expirationDate',JSON.stringify(helper.getTokenExpirationDate(this.jwt)));
            let id_rol = this.rol.rol_id;
            
            if(id_rol == 1 && platform == 'admin' )
                return true;
            else if(id_rol == 2 && (platform == 'learning' || platform == 'materia' ))
                return true;
            else if(id_rol == 3 && platform == 'docente')
                return true;
            else if(id_rol == 4 && platform == 'inscripcion')
                return true;
            else if(id_rol == 5 && platform == 'asesor')
                return true;
            else{
                // alert('invalid URL!')
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
