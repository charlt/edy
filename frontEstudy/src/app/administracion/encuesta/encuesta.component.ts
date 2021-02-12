import { Component, OnInit } from '@angular/core';
import { EncuestaService } from './services/encuesta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

  Encuestas: any;
  tipoAdmin;
  title: string = 'Encuestas';
  plataforma: string;
  idRol: any;
  idAsignaturaGrupo: any;

  constructor(
    private _encuestaService: EncuestaService,
    private _usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.idRol = this._usuarioService.getRol().rol_id;
    this.plataforma = this.router.url.split('/')[1];    
    let redireccion;
    if (this.plataforma == 'admin') {
      redireccion = `/${this.plataforma}/encuesta`;
    }else if (this.plataforma == 'docente') {
      this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id_ag');
      redireccion = `/${this.plataforma}/encuesta-docente/${this.idAsignaturaGrupo}`;
    }    
    this._usuarioService.pushBreadcum(this.title, redireccion, 1);
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;;
        
    this._encuestaService.consultaListaEncuestas(this.idRol, this.idAsignaturaGrupo).subscribe(response => {      
      if (response && response['status']) {
        this.Encuestas = response['encuesta'];        
      }
    }, error => {
      console.log(<any>error);
    });
  }

  elimina(id_encuesta,index){
    alertify.confirm('Eliminar encuesta', '¿Deseas eliminar la encuesta?', function(){
      this._encuestaService.eliminaEncuesta(id_encuesta).subscribe(
        response =>{          
            if(response && response['status']){
              this.Encuestas.splice(index,1);
              alertify.success(response['msg']);
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
      
    }

}
