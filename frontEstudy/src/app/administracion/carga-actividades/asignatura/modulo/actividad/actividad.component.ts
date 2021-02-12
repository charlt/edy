import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModuloService } from '../../../services/modulo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  jwt;
  idModulo;
  modulo;

  constructor(
    private _usuarioService : UsuarioService,
    private _moduloService : ModuloService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
   
      console.log(params)
      this.idModulo = params['id'];          
      this.jwt = this._usuarioService.getJWT();
      this.consultaModulo();
    
    });
  }

  consultaModulo(){
    this._moduloService.consultaModulo(this.idModulo,this.jwt).subscribe(
      response =>{
        console.log(response);
        if(response && response['status']){
          this.modulo = response['modulo'][0];
        }
      },error=>{
        console.log(error);
      }
    )
  }

  menu(){
    let idRol = this._usuarioService.getIdentity().rol_id;
    
    this._router.navigate([ './actividades/'+this.idModulo],{ relativeTo: this.route.parent.parent });
    
  }
  

}

