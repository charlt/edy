import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlataformaService } from 'src/app/services/plataforma.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss']
})
export class PendientesComponent implements OnInit {

  title: string = 'Pendientes de alumno';
  jwt: string;
  Alumnos: any;
  pestanias = [
    {key: 'alumnos_sin_plan', title: 'Alumnos sin carrera asignada', description:'Si un alumno no está vínculado a una carrera el cambio de ciclo se debera cambiar el grado manualmente al que sube el alumno'},
    //{key: 'alumnos_sin_grupo', title: 'Alumnos sin grupo asignado', description: 'Si un alumno no está asignado directamente a un grupo, en el cambio de ciclo se deberá asignar manualmente a sus asignaturas'},
    {key: 'alumnos_materias_incompletas', title: 'Alumnos con asignaturas faltantes',description: 'Alumnos que se encuentran en un grado especifico pero no estan cursando todas las asignaturas de su grado '},
    {key: 'alumnos_asignaturas_duplicadas', title: 'Alumnos con asignaturas duplicadas', description: 'Alumnos con asignatura en curso cargada más de una vez'},
  ]

  constructor(
    private _usuarioService: UsuarioService,
    private _alumnoService: AlumnoService,
    private _plataformaService: PlataformaService,
    private router: Router
  ) { 
    this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this._alumnoService.getPendientes().subscribe(response => {
      if (response && response['status']) {
        this.Alumnos = response['alumnos'];
        console.log(this.Alumnos);
        
      }
    }, error => {
      console.log(<any>error);
    });
  }

  verPlataforma(alumno) {
    this._plataformaService.consultaJWT(alumno.clave_alumno, 2).subscribe(response =>{      
      if(response && response['status']){
        sessionStorage.setItem('tmp_jwt', this.jwt);
        sessionStorage.setItem('tmp_identity', JSON.stringify(this._usuarioService.getIdentity()));
        sessionStorage.setItem('urlRedirect', '/admin/alumno/pendientes');
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');
        localStorage.setItem('jwt', response['jwt']);
        localStorage.setItem('identity',JSON.stringify(response['user']));

        this.router.navigate(['/learning/home']);
      }
    },error =>{
      console.log(<any>error)
    });
  }

}
