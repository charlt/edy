import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {


  jwt;
  
  idAsignatura;
  identity;
  asignatura;

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
    ){

    }
      

  ngOnInit() {
    this.idAsignatura = this.route.snapshot.parent.parent.params['id'];
    this.identity = this._usuarioService.getIdentity();

  }


        
  menu(){
    if(this.identity.rol_id == "1"){
      this.router.navigate([ '/admin/carga/asignatura/'+this.idAsignatura+'/modulos/']);
    }else{
      // idAsignatura es idAsignaturaGrupo

      
      if(this.route.snapshot.params['id']){
        this.idAsignatura = this.route.snapshot.params['id'];
        this.router.navigate([ '/docente/modulosAsignaturaGrupo/'+this.idAsignatura+'/']);
      }else{
        this.router.navigate([ '/docente/contenido-asignatura/'+this.idAsignatura+'/']);
      }


      
    }
    
  }
}
