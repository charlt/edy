import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../../../services/actividad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {
  jwt;
  idActividad;
  actividad;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.idActividad = this.route.snapshot.parent.params['id'];
    this._actividadService.consultaActividad(this.idActividad,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.actividad = response['actividad'][0];
        }
        console.log(response)
      },error=>{
        console.log(error)
      });
  }


  redireccion(url){
    this.router.navigate([url+ '/'+this.idActividad],{ relativeTo: this.route.parent.parent });
  }
  

  

}
