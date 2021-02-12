import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AsignaturaService } from 'src/app/administracion/asignatura/services/asignatura.service';
import { Router } from '@angular/router';
import { FechaService } from 'src/app/services/fecha.service';
import { EncuestaService } from 'src/app/administracion/encuesta/services/encuesta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string;
  id_docente;
  jwt;
  asignaturaGrupo;
  cargando: boolean = true;
  alert: boolean = false;
  Encuestas: any;
  idEncuesta;
  identity;
  idSwitchEncuesta: any;

  @ViewChild('content') myModal: NgbModal;
  @ViewChild("modalEncuesta") modalEncuesta : ElementRef;

  constructor(
    private _usuarioService: UsuarioService,
    private _asignaturaService: AsignaturaService,
    private _fechaService: FechaService,
    private route: Router,
    private _encuestaService: EncuestaService,
    private modalService: NgbModal
  ) {
    this.title = 'Mis grupos';
    this._usuarioService.pushBreadcum(this.title,"/docente/home",1);        
    this._usuarioService.removeBreadcum(2);
   }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.identity = localStorage.getItem('identity');
    this.identity = JSON.parse(this.identity);
    this.id_docente = this.identity.docente.docente_id;
    this._asignaturaService.consultaAsignaturas(this.id_docente).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          let asignaturas = response['Asignaturas']
          asignaturas.forEach(function(asignatura){
            
            let arreglo =this._fechaService.validaVigencia(asignatura.fecha_inicio, asignatura.fecha_fin,1);
  
            asignatura.fecha_inicio = new Date(asignatura.fecha_inicio*1000);
            asignatura.fecha_fin = new Date(asignatura.fecha_fin*1000);

            asignatura.activa = arreglo[0];
            asignatura.estado = arreglo[1];

          }.bind(this));
          this.asignaturaGrupo = asignaturas;
          this.cargando = false;
        }else{
          this.cargando = false;
          this.alert = true;
        }
    },error =>{
      console.log(<any>error)
    });
    this.consultaEncuesta();
  }

  consultaEncuesta() {
    this._encuestaService.consultaEncuestaAlumno().subscribe(response =>{      
      if(response && response['status']){
        this.Encuestas = response['encuesta'];                
        this.idEncuesta = this.Encuestas[0]['encuesta_id'];
        this.idSwitchEncuesta = this.Encuestas[0]['switch_encuesta_id'];
        this.modalService.open(this.modalEncuesta, {backdrop: 'static', keyboard: false, size: 'lg'});
      }
    },error =>{
      console.log(<any>error)
    });
  }

  seleccionaGrupo(asignaturaGrupo){
      localStorage.setItem('selectedAsignaturaGrupo',JSON.stringify(asignaturaGrupo));
      this.setBreadcum(asignaturaGrupo.nombre_grupo, asignaturaGrupo.asignatura_grupo_id)    
    
  }

  setBreadcum(title, id_grupo){
    this.title = title;
    
    let url = "/docente/grupo/" + id_grupo+'/4';
    this._usuarioService.pushBreadcum(this.title, url, 1);    
  }

}
