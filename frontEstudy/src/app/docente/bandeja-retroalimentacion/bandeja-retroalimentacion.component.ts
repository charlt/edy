import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RetroalimentacionService } from '../retroalimentacion/services/retroalimentacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandeja-retroalimentacion',
  templateUrl: './bandeja-retroalimentacion.component.html',
  styleUrls: ['./bandeja-retroalimentacion.component.scss']
})
export class BandejaRetroalimentacionComponent implements OnInit {
  jwt;
  title;
  retroalimentaciones;
  ident;
  id_asignatura_grupo;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _retroalimentacionService: RetroalimentacionService
  ){
    this.title = "Consulta retroalimentaciones";
    this.title = this._usuarioService.pushBreadcum(this.title,"",2)

    this.id_asignatura_grupo = this.route.snapshot.paramMap.get('id');

   }

   ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.consultaRetros(0);
  }

  nuevoLink(actividad_id, materia_id){
    this.router.navigate(['docente/actividad/'+actividad_id+'/'+materia_id]);
    localStorage.setItem('identModal', '1');
  }

  consultaRetros(tipo){
    this.ident = tipo;
    this._retroalimentacionService.consultaRetrosDocente(this.jwt, tipo, this.id_asignatura_grupo).subscribe(
      response =>{
          if(response && response['status']){
            this.retroalimentaciones = response['mensajes'];
            this.retroalimentaciones.forEach(retros => {
              let fecha = new Date(retros.ultimo_mensaje * 1000);
              retros.ultimo_mensaje = fecha;
            });
          }else{
            this.retroalimentaciones = null;
          }
    });
  }

}
