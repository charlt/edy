import { Component, OnInit } from '@angular/core';
import { EnlaceService } from 'src/app/services/externos/enlace.service';
import {  Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Rol } from 'src/app/models/rol';
@Component({
  selector: 'app-seleccion-materia',
  templateUrl: './seleccion-materia.component.html',
  styleUrls: ['./seleccion-materia.component.scss']
})
export class SeleccionMateriaComponent implements OnInit {
  materias;
  jwt;
  identity : Usuario = new Usuario();
  selectedRol : Rol = new Rol();
  constructor(
    private _enlaceService : EnlaceService,
    private _materiaService : MateriaService,
    private _usuarioService :  UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();

    this._enlaceService.consultaAlumno('1911106526').subscribe(
      response =>{
        console.log(response);
      if(response && response['status']){
        
          this.identity.usuario_id = 1;  
          this.identity.nombre = response['alumno'][0].nombre;
          this.identity.primer_apellido = response['alumno'][0].ap_pat;
          this.identity.segundo_apellido = response['alumno'][0].ap_mat;
          this.selectedRol.institucion_id = 2 
          this.selectedRol.institucion = "Instituto de enlaces educativos"
          this.selectedRol.rol_id= 2;
          this.selectedRol.rol = "Alumno"

          localStorage.setItem('identity',JSON.stringify(this.identity));
          localStorage.setItem('selectedRol',JSON.stringify(this.selectedRol));

          this._enlaceService.getJWT('1911106526').subscribe(
            response =>{
              console.log(response);
              if(response && response['status']){
                localStorage.setItem('jwt',response['jwt']);
              }
            },
            error =>{
              console.log(error);
            }
          )

      }else{
        console.log(response['msg'])
      }
    },error => {
      console.log(error);
    });
    
    this._enlaceService.consultaMateria('1911106526',null).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.materias = response['materias'];
          localStorage.setItem('asignaturas',JSON.stringify(response['materias']));
        }else{
          console.log(response['msg'])
        }
      },error => {
        console.log(error);
      });

  }
  seleccionaMateria(idMateria){
    this._enlaceService.consultaMateria('1911106526',idMateria).subscribe(
      response =>{
        
        if(response && response['status']){

          this._materiaService.consulta(this.jwt, '1').subscribe(
            response => {
              console.log(response)
              if(response && response['status']){
                localStorage.setItem('selectedMateria',JSON.stringify(response['Asignatura'][0]));
                this.router.navigate(['/materia/']);
              }

            },
            error => {
              console.log(error)
            }
          )
          


        }else{
          console.log(response['msg'])
        }
      },error => {
        console.log(error);
      });
  }

}
