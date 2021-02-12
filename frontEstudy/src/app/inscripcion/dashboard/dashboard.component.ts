import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../services/solicitud.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { universidad} from 'src/app/services/universidad';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jwt;
  identity;
  pasoActual;
  paso1;
  paso2;
  paso3;
  paso4;
  porcentajePaso1;
  porcentajePaso2;
  porcentajePaso3;
  porcentajePaso4;
  colorPaso1 = "#ffcc00";
  colorPaso2 = "#ffcc00";
  colorPaso3 = "#ffcc00";
  colorPaso4 = "#ffcc00";
  title:string;
  idAspirante: number

  universidad = universidad;

  constructor(
    private _usuarioService: UsuarioService,
    private _solicitudService: SolicitudService,
    private modalService: NgbModal    
  ){ 
    this.title = "Página principal";
    this._usuarioService.pushBreadcum(this.title,'/inscripcion/home',1);
    this._usuarioService.removeBreadcum(2); 
  }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this.idAspirante = parseInt(this._usuarioService.getIdentity().persona_id);
    this.consultaPasos();
  }

  consultaPasos(){
    this._solicitudService.consultaAvance(this.jwt, this.idAspirante).subscribe(
      response =>{
          if(response && response['status']){            
            this.pasoActual = response['pasoActual'];
            
            
            this.paso1 = response['paso1'];
            this.paso2 = response['paso2'];
            this.paso3 = response['paso3'];
            this.paso4 = response['paso4'];
            
            let _porcentajePaso1 = (this.paso1.completados * 100) / this.paso1.totales;
            this.porcentajePaso1 = Math.floor(_porcentajePaso1);
            if (this.paso1.finalizado == 1 ) {
              this.colorPaso1 = "#009900"
            }
            let _porcentajePaso2 = (this.paso2.completados * 100) / this.paso2.totales;
            this.porcentajePaso2 = Math.floor(_porcentajePaso2);
            if (this.paso2.finalizado == 1) {
              this.colorPaso2 = "#009900"
            }            
            let _porcentajePaso3 = (this.paso3.completados * 100) / this.paso3.totales;
            this.porcentajePaso3 = Math.floor(_porcentajePaso3);
            if (this.paso3.finalizado == 1) {
              this.colorPaso3 = "#009900"
            }
            let _porcentajePaso4 = (this.paso4.completados * 100) / this.paso4.totales;
            this.porcentajePaso4 = Math.floor(_porcentajePaso4);
            if (this.paso4.finalizado == 1) {
              this.colorPaso4 = "#009900"
            }
          }
      },error =>{
        console.log(<any>error)
      });
    }

    open(content) {
      this.modalService.open(content, {size: 'lg', windowClass: 'modal-md'}).result.then((result) => {
          
      }, (reason) => {
          
      });
  }
}
