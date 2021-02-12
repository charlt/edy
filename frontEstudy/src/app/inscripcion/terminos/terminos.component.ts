import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TerminosService } from '../services/terminos.service';
import { Router } from '@angular/router';
import { SolicitudService } from '../services/solicitud.service';
import { GLOBAL }  from 'src/app/services/global';
import { InscripcionService } from '../inscripcion.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent implements OnInit {

  carreras;
  carreraSeleccionada;
  idCarrera; //el id de la carrera seleccionada


  idPlanEstudios = null;
  jwt;
  identity;
  title;
  momento = 2;
  instruccion = ["","Selecciona la oferta educativa en la que deseas inscribirte","Lee con atención el documento y al concluir acepta los términos y condiciones"]
  pasoActual;
  
  url = GLOBAL.url;
  urlAssets = GLOBAL.urlAssets;
  idAspirante: number;

  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoServices: CatalogoService,
    private _terminosServices: TerminosService,
    private _inscripcionService: InscripcionService,
    private router: Router
    
  ) {
    this.title = "Aceptación de términos"
   this._usuarioService.pushBreadcum(this.title,"",1);
   this._usuarioService.removeBreadcum(2);
   }

  ngOnInit() {
   this.jwt = this._usuarioService.getJWT();
   this.identity = this._usuarioService.getIdentity();
   this.idAspirante = parseInt(this._usuarioService.getIdentity().persona_id);
   this._catalogoServices.consultaCarrera(this.jwt).subscribe(
     response => {
      console.log(response);
      this.carreras = response['carreras'];
      //this.carreras = response

     },
     error =>{
      console.log(<any>error)
     }
   )

   this.consultaPasos();
  }

  consultaPasos(){
    
      this._inscripcionService.consultaAspirante(this.idAspirante).subscribe(
        response =>{                        
        if (response && response['status']) {
          this.pasoActual = response['aspirante'].paso;        
          this.idCarrera = response['aspirante'].carrera_id

        }
      }, error => {
        console.log(<any>error);
      });
    }

  seleccionaOferta(i){

    this.carreraSeleccionada = this.carreras[i];
    this._terminosServices.consultaPlanVigente(this.carreraSeleccionada.carrera_id,this.jwt).subscribe(
      response =>{
        console.log(response)
        this.idPlanEstudios = response['plan'].plan_estudio_id;
      },error =>{
        console.log(<any>error)
      }
    );
  }
  confirmaOferta(){
    this.momento = 2;
  }
  cambiarOferta(){
    
    this.momento = 1;
    this.carreraSeleccionada = null;
    this.idPlanEstudios = null;
    
  }
  guardarOferta(){
    //this._terminosServices.actualizaTerminos(this.carreraSeleccionada.carrera_id,this.jwt).subscribe(
      this._terminosServices.actualizaTerminos(this.idCarrera,this.jwt).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.pasoActual = 2;
        }else{
          console.log(response['msg'])
        }
      },error =>{
        console.log(error);
      }
    );
  }

}
