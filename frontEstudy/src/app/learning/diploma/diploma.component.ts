import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriaService } from 'src/app/services/materia.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {
  jwt;
  url;
  urlApi;
  title;
  id_usuario;
  materias;
  urlImg=[];

  constructor(
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService
  ){ 
    this.title = "Mis Diplomas"
    this._usuarioService.pushBreadcum(this.title,"",1);
    this.url = GLOBAL.urlAssets;
    this.urlApi = GLOBAL.url;
  }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    

    this.consultaMaterias();
  }

  abreDiploma(id_asignatura){

    window.open(this.urlApi+'/learning/diploma/asignatura.php?id='+id_asignatura+'&jwt='+this.jwt, '_blank');
  }

  consultaMaterias(){
    this._materiaService.consultaMateriasCompletas(this.jwt).subscribe(
      response =>{
        console.log(response);
        if(response && response['status']){
            this.materias = response['materias'];
            this.materias.forEach(_materia => {

              if (_materia.url_imagen_previa) {
                this.urlImg.push(this.url + _materia.url_imagen_previa);
              }else{
                this.urlImg.push(this.url + "/assets/asignaturas/carga_imagen_previa/0/img_asignatura_previa.jpg");
              }
            });
          }       
      },error => {
        console.log(error);
      });
  }

  seleccionaMateria(){

  }

}
