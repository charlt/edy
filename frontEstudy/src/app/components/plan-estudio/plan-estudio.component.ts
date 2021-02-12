import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PlanEstudiosService } from '../../administracion/plan-estudios/services/plan-estudios.service';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.scss']
})
export class PlanEstudioComponent implements OnInit {

  @Input() title;
  @Input() idPlanEstudios;
  @Output() planEstudioId = new EventEmitter();
  
  jwt: string;
  carreras: any;
  planEstudios: any;
  ordenJerarquico: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _planEstudiosService: PlanEstudiosService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this._usuarioService.getBreadcum();
    this._usuarioService.pushBreadcum(this.title,"",1);
    this._planEstudiosService.consultaEspecifica( this.idPlanEstudios , this.jwt).subscribe(
      response =>{
        console.log(response)    
        if(response && response['status']){
          this.planEstudios = response['planEstudio'][0]
        }
      },error =>{
        console.log(<any>error)
      });
    this._planEstudiosService.consultaOrdenJerarquico( this.idPlanEstudios , this.jwt).subscribe(
      response =>{
        console.log(response)    
        if(response && response['status']){
          this.ordenJerarquico = response['ordenJerarquico'];
        }
      },error =>{
        console.log(<any>error)
      });
  }

  asignaturaId(idPlanEstudio){
    this.planEstudioId.emit(idPlanEstudio);
  }

}
