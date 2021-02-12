import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../../asignatura/services/asignatura.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from 'src/app/docente/grupo/services/grupo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { privilegiosContenido } from 'src/app/models/admin/privilegiosContenido';


declare var alertify;

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.scss']
})
export class AsignaturaComponent implements OnInit {
  title;
  jwt;
  identity;

  idAsignatura;
  asignatura;
  opcionSeleccionada = false;
  privilegiosContenido;
  idOrdenAsignatura;

  //banderas de token
  asignaturaSeleccionada = false;

  //variables de componentes
  verMenu = true;


  

  constructor(
    private _asignaturaService: AsignaturaService,
    private _usuarioService: UsuarioService,
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router: Router,    
  ) {
    privilegiosContenido.splice(4,1);
    this.privilegiosContenido = privilegiosContenido;

    this.title="Carga de actividades";
   }

  ngOnInit() {
    this.idAsignatura = this.route.snapshot.params['id'];
    this.idOrdenAsignatura = this.route.snapshot.params['id2'];
    // console.log(this.idAsignatura, this.idOrdenAsignatura);
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.consultaAsignatura();

    
    
  }

  //PENDIENTE DE ACTUALIZAR
  consultaAsignaturaGrupo(){
    this._asignaturaService.consultaAsignaturaGrupo(this.idAsignatura).subscribe(response =>{
      if(response && response['status']){              
        let idAsignaturaGrupo = parseInt(response['asignaturaGrupo'][0].asignatura_grupo_id);
        this._grupoService.seleccionaMateriaDummy(idAsignaturaGrupo,this.jwt).then(    
          data =>{
            if(!this.privilegiosContenido.find(privilegio => privilegio.id == "5")){
              this.privilegiosContenido.push()
            }
          }
        )
      }else{
        this.verMenu = true;
      }
      
    },error =>{
      console.log(<any>error)
    });
  }

  vistaPrevia(){
    this._asignaturaService.consultaAsignaturasAdminDummy(this.idOrdenAsignatura).subscribe(response =>{
      if(response && response['status']){
        let idAsignaturaGrupo = parseInt(response['materia'].asignatura_grupo_id);
        this._grupoService.seleccionaMateriaDummy(idAsignaturaGrupo,this.jwt).then(    
          data =>{
            this._router.navigate(['/materia/']);
          }
        )
      }else{

      }
    },error =>{
      console.log(<any>error)
    });   
  }


  consultaAsignatura(){
    this._asignaturaService.consulta(this.jwt, this.idAsignatura).subscribe(
      response =>{
        if(response && response['status']){
          this.asignatura = response['Asignatura'][0];
          sessionStorage.setItem('idAsignaturaSelected', this.asignatura.asignatura_id)
        }
    },error=>{
      console.log(error)
    });
  }

  



}
