import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit {

  idEncuesta: number; 
  paso: number = 0;
  preguntas: any;
  plataforma: string;
  idAsignaturaGrupo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.plataforma = this.router.url.split('/')[1];
    if (this.plataforma == 'docente') {
      this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id_ag');      
    } 

    let idEncuesta = this.route.snapshot.paramMap.get('id');
    if (idEncuesta) {
      this.idEncuesta = parseInt(idEncuesta);
      this.paso = 3;
    }     
    
  }

  setPreguntas(evt) {    
    this.idEncuesta = evt.id;
    this.paso = 1;
  }

  setReactivos(evt) {
    this.preguntas = evt;
    this.paso = 2;
  }

  setNivelEncuesta(evt) {
    this.paso = 3
  }

  finalizado(evt) {
    if (this.plataforma == 'admin') {
      this.router.navigate(['/admin/encuesta']);
    }else if (this.plataforma == 'docente') {
      this.router.navigate(['/docente/encuesta-docente/' + this.idAsignaturaGrupo]);
    }
  }

}
