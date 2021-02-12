import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from '../services/alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  title;
  notas;
  id_alumno;
  constructor(
    private _usuarioService: UsuarioService,
    private _alumnoService: AlumnoService,
    private router: ActivatedRoute
  ) {
    this.title = "Notas del alumno"
    this._usuarioService.pushBreadcum(this.title, '', 2)
  }

  ngOnInit(){
    this.id_alumno = this.router.snapshot.params['id'];
    this.consultaNotas();
  }

  consultaNotas(){
    this._alumnoService.consultaEspNotas(this.id_alumno).subscribe(
      response =>{ 
          if(response && response['status']) {
          this.notas = response['notas'];
          this.notas.forEach(nota => {
            nota.fecha_creacion = new Date((nota.fecha_creacion)*1000);
          }); 
        }
      },error =>{
        console.log(<any>error)
    });
  }


}
