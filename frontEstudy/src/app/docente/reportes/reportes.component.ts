import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ReportesDocenteService } from './services/reportes-docente.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GLOBAL} from 'src/app/services/global';

declare var alertify;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  jwt;
  url;
  title;
  actividades;
  idAsignaturaGrupo;
  reporteForm: FormGroup;
  muestraForm;
  tipo;

  constructor(
    private _usuarioService: UsuarioService,
    private _reportesDocenteService: ReportesDocenteService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.title = 'Acta de calificaciones';
    this._usuarioService.pushBreadcum(this.title, '', 2);
    this.url = GLOBAL.url;
  }

  get f() { return this.reporteForm.controls; }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
    this.reporteForm = this.formBuilder.group({
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      _actividades: ['', Validators.required],
    });
    this.consultaCatActividades();
  }

  consultaCatActividades() {
    this._reportesDocenteService.consultaActividades(this.idAsignaturaGrupo).subscribe(
      response => {
        if (response && response['status']) {
          this.actividades = response['actividades'];
        }
      });
  }

  enviarInformacion(){
    console.log(this.url);
    
    if (this.reporteForm.invalid) {
      Object.keys(this.reporteForm.controls).forEach( controlKey => {
        this.reporteForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    var params = '?id_asignatura_grupo='+this.idAsignaturaGrupo ;
    params += '&jwt='+this.jwt;
    params += '&id_actividad='+this.reporteForm.get('_actividades').value;
    params += '&fecha_inicio='+this.reporteForm.get('fecha_inicio').value;
    params += '&fecha_fin='+this.reporteForm.get('fecha_fin').value;
    if(this.tipo == 0){
      window.open(this.url+'/reportes/grupos/actaCalificaciones.php'+params, '_blank');
    }else if(this.tipo == 1){
      window.open(this.url+'/reportes/grupos/actaCalificacionesIrregulares.php'+params, '_blank');
    }
  }
  

  generaReporteAsistencia(){
    var params = '?id_asignatura_grupo='+this.idAsignaturaGrupo ;
    let urlReporte = this.url+'reportes/grupos/listaAsistencia.php'+params;
    window.open(urlReporte, '_blank');
  }

  generaReporteEvaluacion(){
    var params = '?id_asignatura_grupo='+this.idAsignaturaGrupo ;
    let urlReporte = this.url+'reportes/grupos/listaEvaluacion.php'+params;
    window.open(urlReporte, '_blank');
  }

  generaReporteCalificaciones(){
    var params = '?id_asignatura_grupo='+this.idAsignaturaGrupo ;
    let urlReporte = this.url+'reportes/grupos/alumnosCompletos.php'+params;
    window.open(urlReporte, '_blank');
  }

  formulario(tipo){
    this.tipo = tipo;
    if(this.muestraForm)this.muestraForm = false;
    else if(!this.muestraForm)this.muestraForm = true;
    console.log(this.muestraForm);
    }   
    

}
