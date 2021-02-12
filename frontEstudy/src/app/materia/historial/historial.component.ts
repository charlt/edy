import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { AvanceService } from '../avance/avance.service';
import { MateriaService } from 'src/app/services/materia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit, OnChanges {
  jwt;
  // url
  identity;
  materias;
  alumno_id;
  historial;
  id_materia = "";
  selectedMateria;
  plataforma;

  constructor(
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService,
    private _avanceService: AvanceService,
    private router: Router,
    private route: ActivatedRoute,

    // @Inject(DOCUMENT) document: any

  ){
    let array = this.router.url.split('/'); 
    this.plataforma = array[1];    

    // let url = document.location.href.split('/');    
    // if(url[4]) this.url = url[4];
  }

  ngOnInit(){
    
    if(this.plataforma == 'learning'){
      this.alumno_id = this._usuarioService.getIdentity()['alumno'].alumno_id;
      this.consultaMaterias();
    }else if (this.plataforma == 'admin' || this.plataforma == 'asesor')  {
      this.alumno_id = this.route.snapshot.paramMap.get('id');
      this.consultaMaterias();
    }else{
      this.selectedMateria = this._materiaService.getSelectedMateria();
      this.id_materia = this.selectedMateria.materia_id;
      this.consultaHist();
    }    
  }

  ngOnChanges(){
    this.consultaHist();
  }

  consultaMaterias(){
    this._materiaService.consultaAlumnoMaterias(this.alumno_id, 3).subscribe(
      response =>{ 
          if(response && response['status']){
            this.materias = response['materias'];
          }
      },error =>{
        console.log(<any>error)
    });
  }

  consultaHist(filtro = 1){
    this._avanceService.consultaHistorial('', this.id_materia, filtro).subscribe(
      response =>{ 
        console.log(response);
        
          if(response && response['status']){
            this.historial = response['historial'];
          }else{
            this.historial = null
          }
      },error =>{
        console.log(<any>error)
    });
  }

}
