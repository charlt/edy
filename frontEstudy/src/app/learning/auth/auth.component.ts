import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  jwt: string;
  materias;
  selectedMateria;
  id_asignatura;
  idAlumno

  constructor(
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService,
    private router : Router,
    private route: ActivatedRoute

  ){
    this.id_asignatura = this.route.snapshot.paramMap.get('id');
    this.idAlumno = this._usuarioService.getIdentity().persona_id;
    
   }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.consultas();
    
  }

  consultas(){

    this._materiaService.seleccionaMaterias(this.idAlumno,3).then(
      data=>{
        this.materias = data;
        if(this.id_asignatura){
          this.materias.forEach(function(materia){
           if(materia.asignatura_id == this.id_asignatura){
             this.selectedMateria = materia;
           }
           
          }.bind(this));
         }else{
           this.selectedMateria = this.materias[0];         
         }

         this._materiaService.seleccionaMateria(this.selectedMateria.materia_id,this.jwt).then(
           data => {
             this.router.navigate(['/materia/']);
            });
      }
    );
  }

  
}
