import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AspiranteService } from 'src/app/administracion/aspirante/services/aspirante.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  redireccionIncorrecta = false;

  constructor(
    private _aspiranteService: AspiranteService,
    private _usuarioService: UsuarioService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this._aspiranteService.consultaAlumno().subscribe(
      response=>{
        if(response && response['status']){
          let idUsuario = response['idUsuario'];
          this._usuarioService.generateJWTid(idUsuario,2).subscribe(
              response => {
              localStorage.setItem('jwt',response['jwt']);
              localStorage.setItem('identity',JSON.stringify(response['user']));
              this.router.navigate(['/learning/home']);

          });
        }else{
          this.redireccionIncorrecta = true;
        }

      },error=>{
        console.log(error)
      }
    )
  }

}
