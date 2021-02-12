import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AsignaturaService } from 'src/app/administracion/asignatura/services/asignatura.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
jwt;
clave_grupo;
id_asignatura;
identity;
// asignatura_grupo_id;
asignaturas;
  constructor(
    private _usuarioService: UsuarioService,
    private _asignaturaService: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ){


   }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.id_asignatura = this.route.snapshot.paramMap.get('id_a');
    this.clave_grupo = this.route.snapshot.paramMap.get('cv_g');
    

    this.consultaAsignaturas();
  }

  consultaAsignaturas(){
    this._asignaturaService.consultaAsignaturas(this.identity.persona_id).subscribe(response =>{    
      if(response && response['status']){
        this.asignaturas = response['Asignaturas'];
        console.log(this.asignaturas);
        
        this.asignaturas.forEach(_asignatura => {
          if(this.clave_grupo == _asignatura.grupo && this.id_asignatura == _asignatura.asignatura_id){
            this.router.navigate(['/docente/grupo/'+_asignatura.asignatura_grupo_id]);
          }else{
            this.router.navigate(['/docente/home/']);
          }
        });
      }
    },error =>{
      console.log(<any>error)
    });
  }
}
