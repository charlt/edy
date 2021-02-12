import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { ReportesService } from './services/reportes.service';
import { GLOBAL} from 'src/app/services/global';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { GrupoService } from '../grupo/service/grupo.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  jwt;
  title;
  url;
  tipo = 0;
  idReporte;
  reporte;
  objetos;
  selectedObjeto;
  vistas;
  selectedVista;
  nivel = 0;
  urlReporte;
  ciclos;
  grupos

  constructor(
    private _usuarioService: UsuarioService,
    private _reporteService: ReportesService,
    private _catalogoService: CatalogoService,
    private _gruposService: GrupoService,
    private route: ActivatedRoute
  ){
    this.url = GLOBAL.url;
    this.title = "Consulta de concentrado"
    this._usuarioService.pushBreadcum(this.title,"",1);
   }

  ngOnInit() {
    this.idReporte = this.route.snapshot.params['id'];
    this._reporteService.consultaObjeto(this.idReporte).subscribe(
      response =>{
        if(response && response['status']){
          this.objetos = response['objetos'];
          
        }else{
          this.objetos = null;
        }
      },
      error =>{
        console.log(error)
      }
    );
  }

  consultaVista(objeto){
    this.selectedObjeto = objeto;
    this.tipo = 1;
    this._reporteService.consultaVistas(this.selectedObjeto.objeto_id).subscribe(
      response =>{
        if(response && response['status']){
          this.vistas = response['vistas'];
        }else{
          this.vistas = null
        }
      },
      error =>{
        console.log(error)
      }
    );
  }

  seleccionaVista(vista){
    this.selectedVista = vista
    this.tipo =2;
    this.nivel = parseInt(this.selectedVista.nivel);
    if(this.nivel == 5 || this.nivel == 6){
      this.consultaVista
      this._catalogoService.consultaCiclo().subscribe(
        response => {
          if (response && response['status']) {
            this.ciclos = response['ciclo'];
          }
        }, error => {
          console.log(<any>error)
        });

    }
  }

  consultaGrupos(idCiclo){
    this._gruposService.consultaGrupoFiltro(2,idCiclo).subscribe(
      response => {
        if (response && response['status']) {
          this.grupos = response['grupos'];
          console.log(this.grupos);
          
        } else {
          this.grupos = null;
        }
      }, error => {
        console.log(<any>error)
      });
  }

  obtieneURL(event){
    let url = this.url+this.selectedVista.url_api;
    let nivel = this.selectedVista.nivel;
    let params;
    if(nivel == 2){
      let idPlanEstudio = event.idPlanEstudio
      params = '?id_plan_estudios='+idPlanEstudio;
    }if(nivel == 4){
      let idAsignatura = event.idAsignatura
      console.log(idAsignatura);
      params = '?id_asignatura='+idAsignatura;
    }if(nivel==5){
      let idGrupo = event; //en este caso no se obtiene del filtro de asignaturas
      params = '?id_grupo='+idGrupo;
    }if(nivel==6){
      let idCiclo = event; //en este caso no se obtiene del filtro de asignaturas
      params = '?id_ciclo='+idCiclo;
    }
  
    this.urlReporte = url+params;
  }

  obtieneReportes(){
    if(this.selectedVista.nivel == 0) this.urlReporte = this.url+this.selectedVista.url_api;
    window.open(this.urlReporte, '_blank');
  }
}
