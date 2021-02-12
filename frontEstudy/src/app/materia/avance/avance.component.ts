import { Component, OnInit } from '@angular/core';
import { AvanceService } from './avance.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriaService } from 'src/app/services/materia.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-avance',
  templateUrl: './avance.component.html',
  styleUrls: ['./avance.component.scss']
})
export class AvanceComponent implements OnInit {
  jwt;
  selectedMateria
  id_materia;
  meses;
  fechaActual;
  fechaPrimer;
  fechaUltim;
  materias;
  porcentaje;
  id_usuario;
  porcentajeMayor;
  porcentajeMenor;
  porcentajeMedio;
  porcentajeTotal;
  promedioTotal:boolean = false;
  identity;
  idPersona;
  idRol;
  plataforma;
  archivos;
  actInc;
  public search;

  constructor(
    private _avanceService: AvanceService,
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService,
    private router: Router,
    private route: ActivatedRoute
  ){

   }

  ngOnInit(){
    let array = this.router.url.split('/'); 
    this.plataforma = array[1]; 

    this.jwt = this._usuarioService.getJWT();
    // this.selectedMateria = this._materiaService.getSelectedMateria();
    this.selectedMateria = ''
    this.id_materia = this.selectedMateria.materia_id;
    this.identity = this._usuarioService.getIdentity();
    // this.id_usuario = this.identity.usuario_id;    
    this.idRol = this.identity.rol_id;
    this.idPersona = this.identity.persona_id;
    if (this.idRol == 1 || this.idRol == 5) {
      this.idPersona = this.route.snapshot.paramMap.get('id');
      this.idRol = 2;
    }    
    this.fechaActualD();
    this.consultaAvanceG();
    this.consultaArchivos();

    // this.consultaFechas();
    // this.consultaBitacora();
    // this.consultaRepMaterias();
  }

  imprimir(){
    window.print();
  }

  fechaActualD(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var fActual = new Date();
    if(fActual.getMinutes() <= 9){
      this.fechaActual = diasSemana[fActual.getDay()] + " " + fActual.getDate() + " de " + meses[fActual.getMonth()] + " de " + fActual.getFullYear() + ", " +
      fActual.getHours() + ":0" + fActual.getMinutes(); 
    }else{
    this.fechaActual = diasSemana[fActual.getDay()] + " " + fActual.getDate() + " de " + meses[fActual.getMonth()] + " de " + fActual.getFullYear() + ", " +
      fActual.getHours() + ":" + fActual.getMinutes(); 
    }
  }

  consultaArchivos(){
    this._avanceService.consultaArchivosAlumno(this.idPersona).subscribe(
      response =>{         
          if(response && response['status']){ 
            this.archivos = response['archivos'];
            this.archivos.forEach(archivo => {
              if (archivo.fecha_creacion) {
                archivo.fecha_creacion = new Date((archivo.fecha_creacion)*1000)
              }
            });
            console.log(this.archivos);
          }
      },error =>{
        console.log(<any>error)
    });
  }

  consultaAvanceG(){
    this._avanceService.consultaAvanceGeneral(this.jwt, this.idPersona).subscribe(
      response =>{         
          if(response && response['status']){ 
            this.porcentajeTotal = response['porcentaje'];
          }
          this.id_usuario = response['usuario']['usuario_id'];     
          this.consultaFechas(); 
          this.consultaBitacora();
          this.consultaRepMaterias();
      },error =>{
        console.log(<any>error)
    });
  }

  consultaFechas(){
    this._avanceService.consultaFechasSesion(this.jwt, this.id_usuario).subscribe(
      response =>{ 
          if(response && response['status']){ 
            this.fechaPrimer = response['primer_acceso']; 
            this.fechaUltim = response['ultimo_acceso'];
          }
      },error =>{
        console.log(<any>error)
    });
  }

  consultaBitacora(){
    this._avanceService.consultaBitacoraMes(this.id_usuario).subscribe(
      response =>{ 
        if(response && response['status']){  
          this.meses = response['Mes']
        }
      },error =>{
        console.log(<any>error)
    });
  }

  consultaRepMaterias(){
    this._avanceService.consultaReporteMaterias(this.id_usuario).subscribe(
      response =>{         
          if(response && response['status']){  
            this.materias = response['Materias'];
            this.materias.forEach(actividades =>{
              let _porcentaje = actividades.contestadas / actividades.total *100;
              actividades.porcentaje = Math.round(_porcentaje);
              actividades._promActividades = actividades.promedioActividades.toFixed(2)
              if (!actividades.porcentaje) {
                actividades.porcentaje = 0;
              }
            });
          }
      },error =>{
        console.log(<any>error)
    });
  }

  // consultaAvance(){  
  //   this._materiaService.consultaAvance(this.selectedMateria.materia_id,this.selectedMateria.asignatura_id, this.jwt).subscribe(
  //       response =>{
  //           if (response && response['status']) {
  //               this.porcentajeTotal = response['porcentaje']
  //           }
  //       },error =>{
  //         console.log(<any>error)
  //     });
  // }

}
