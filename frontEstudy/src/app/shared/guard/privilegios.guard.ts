import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegiosGuard implements CanActivate {

  jwt: string;
  privilegios: any;
  idRol: any;

  constructor(
    private router: Router,
    private _usuarioService: UsuarioService
  ){
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    this.jwt = this._usuarioService.getJWT();
    this.privilegios = this._usuarioService.getPrivilege();
    this.idRol = this._usuarioService.getRol().rol_id;    
    let dir = state.url.split("/");
    let url = dir[1] + "/" + dir[2] + "/";
    let bandera = false;
    
    if (this.idRol == 1 && this.privilegios) {
      for (const privilegio of this.privilegios) {
        if (privilegio.url === url) {        
          bandera = true;
          break;
        }        
        if (privilegio.sub_privilegios && privilegio.sub_privilegios.length > 0) {
          for (const subprivilegio of privilegio.sub_privilegios) {            
            if (subprivilegio.url === url) {              
              bandera = true;
              break;
            }
          }

          var privilegioUsuario = this.privilegios.find(p => p.privilegio_id == 5);          
          if (privilegioUsuario) {
            privilegioUsuario = this.privilegios.find(p => p.privilegio_id == 5).sub_privilegios;
            var consultaAlumno = privilegioUsuario.find(p => p.privilegio_id == 8 || p.url == 'admin/alumno/');
            var consultaDocente = privilegioUsuario.find(p => p.privilegio_id == 9 || p.url == 'admin/docente/');
          }
          
          if ((consultaAlumno || consultaDocente) && url === "admin/usuario/") {
            bandera = true;
          }          
        }
      } 
    }
              
    if (bandera || url === "admin/home/" || url === "learning/home/" || url === "admin/perfil/mis-datos" || 
    url === "admin/charts") {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
