import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../../asignatura/services/asignatura.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from 'src/app/docente/grupo/services/grupo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { privilegiosContenido } from 'src/app/models/admin/privilegiosContenido';

declare var alertify;

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  title;
  jwt;

  idAsignatura;
  idOrdenAsignatura;
  asignatura;
  privilegiosContenido;



  constructor(
    private _asignaturaService: AsignaturaService,
    private _usuarioService: UsuarioService,
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router: Router    
  ) {
    this.title="Carga de actividades";
    this.privilegiosContenido = privilegiosContenido;
   }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    console.log(this.privilegiosContenido)
  }

  

  obtieneAsignatura(event){  
    if (event.idAsignatura) {
      this.idAsignatura = event.idAsignatura;
      this.idOrdenAsignatura = event.idOrdenAsignatura;

      this._asignaturaService.consulta(this.jwt, this.idAsignatura).subscribe(
        response =>{          
          if(response && response['status']){
            this.asignatura = response['Asignatura'][0];
            console.log(this.asignatura)
          }
        },error =>{
          console.log(error);
        }
      )
    }else{
      this.idAsignatura = null;
    }
  }
  
  selecciona_opcion(id,url){
    if(id == 5){
      this._asignaturaService.consultaAsignaturaGrupo(this.idOrdenAsignatura).subscribe(response =>{
        if(response && response['status']){              
          let idAsignaturaGrupo = parseInt(response['grupos'][0].asignatura_grupo_id);
          this._grupoService.seleccionaMateriaDummy(idAsignaturaGrupo,this.jwt).then(      
            data =>{
              this._router.navigate(['/materia/']);
            }
          )
        }else{
          alertify.error('Debes asignar la materia a un grupo primero')
        }
      },error =>{
        console.log(<any>error)
      });
    }else{
      this._router.navigate(['/admin/carga/asignatura/'+this.idAsignatura+'/'+this.idOrdenAsignatura+'/'+url]);
    }

  }


  

}
