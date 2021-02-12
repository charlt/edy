import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/docente/mensajeria/services/mensajeria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriaService } from 'src/app/services/materia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandeja-mensajes',
  templateUrl: './bandeja-mensajes.component.html',
  styleUrls: ['./bandeja-mensajes.component.scss']
})
export class BandejaMensajesComponent implements OnInit {
  title;
  ident = 0;
  mensajes;
  cargandoRedireccion;

  constructor(
    private _usuarioService: UsuarioService,
    private _mensajeService: MensajeriaService,
    private _materiaService: MateriaService,
    private _router: Router,

  ){
    this.title='Consulta mensajes';
   }

  ngOnInit(){
    this.consultaMensajes(0);
  }

  consultaMensajes(tipo){
    this.ident = tipo;
    this._mensajeService.consultaBandejaMensajesAlumno(tipo).subscribe(
      response =>{
          if(response && response['status']){
            this.mensajes = response['mensajes'];
            this.mensajes.forEach(mensaje => {
              let fecha = new Date(mensaje.ultimo_mensaje * 1000);
              mensaje.ultimo_mensaje = fecha;
            });
            console.log(this.mensajes);
            
          }else{
            this.mensajes = null;
          }
    });
  }

  seleccionaMateria(id_materia){
    this._materiaService.seleccionaMateria(id_materia,'').then(
      (data:any)=>{
        this._router.navigate(['/materia/mensajes/'+id_materia]);
      }
    );
  }

}
