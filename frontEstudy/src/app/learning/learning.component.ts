import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router, NavigationEnd, Event  } from '@angular/router';
import { AlumnoService } from '../services/alumno.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit,OnDestroy {

  collapedSideBar: boolean;
  breadcum;
  public breadcumDesactivado = false;
  identity;
  idSituacionAlumno = null;
  idSituacionPago;
  notificacion;
  mostrarHeader = true;
  pagosPendientes;
  bloqueo;
  diaCierre;
  materiasDeshabilitadas;
  suscripcion;
  ticket = null;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _alumnoService: AlumnoService
  ) { }

  ngOnInit() {

    this.identity = this._usuarioService.getIdentity();

 
    this.breadcum = this._usuarioService.getBreadcum();
   

        this.suscripcion= this._alumnoService.consultaPlataforma().subscribe(response =>{                        
          if(response && response['status']){
              let privilegios = response['privilegios'];
              this.ticket = response['ticket']

              this.idSituacionAlumno = response['idSituacionAlumno'];
              this.idSituacionPago= response['idSituacionPago'];

              let pago = response['pago']

              if(pago && pago['status']){
                let diaPago = pago['diaPago'];
                this.pagosPendientes = pago['pagosPendientes'];
                this.bloqueo = pago['bloqueo'];
                if(this.bloqueo == 1){
                  this.idSituacionPago = 2;
                }
                this.diaCierre = Math.min.apply(Math, diaPago);
              }else{
                if(this.idSituacionPago != 2)
                  this.pagosPendientes = 0;
                else
                  this.pagosPendientes = null;
              }


              localStorage.setItem('privilegiosAlumno',JSON.stringify(privilegios));
              localStorage.setItem('situacionAlumno',this.idSituacionAlumno);
              localStorage.setItem('situacionPago',this.idSituacionPago);

              this._alumnoService.infoPlataformaCargada.emit({
                'privilegios': privilegios,
                'idSituacionAlumno' : this.idSituacionAlumno,
                'idSituacionPago' : this.idSituacionPago,

              });
          }else{
          }
        },error =>{
          console.log(<any>error)
      });
  }

  





  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

  onActivate(e) {
  this.breadcum = this._usuarioService.getBreadcum();
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

}
