import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { slideToTop } from 'src/app/router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute, ActivationStart } from '@angular/router';
import { TrMateria } from 'src/app/models/learning/trMateria';
import { MateriaService } from 'src/app/services/materia.service';
import { FechaService } from 'src/app/services/fecha.service';
import { EncuestaService } from 'src/app/administracion/encuesta/services/encuesta.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlumnoService } from 'src/app/services/alumno.service';



declare var alertify;


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss'],
  animations: [slideToTop()]

})
export class MateriaComponent implements OnInit {
  jwt: String;
  alumno;

  url;
  materias: Array<TrMateria>;
  modulos;
  urlImg=[];
  idAlumno: number;
  tipoConsulta = 1;
  idSituacionAlumno;
  idSituacionPago;
  
  @ViewChild("modalEncuesta") modalEncuesta : ElementRef;
  @ViewChild("modalTickets") modalTickets : ElementRef;

  Encuestas: any;
  idEncuesta: any;

  private title: string;

  constructor(
    private _usuarioService: UsuarioService,
    private _materiaService: MateriaService,
    private _router: Router,
    private _encuestaService: EncuestaService,
    private _alumnoService: AlumnoService,
    private modalService: NgbModal,
    private route: ActivatedRoute
    ) { 
      this.title = "";
      this._usuarioService.pushBreadcum(this.title,'/learning/materias',1);
      this._usuarioService.removeBreadcum(2);
      this.idAlumno = this._usuarioService.getIdentity().persona_id;
      this.url = GLOBAL.urlAssets;

    
  }

  consultaEncuesta() {    
    this._encuestaService.consultaEncuestaAlumno().subscribe(response =>{      
      if(response && response['status']){
        this.Encuestas = response['encuesta'];
        this.idEncuesta = this.Encuestas[0]['encuesta_id'];
        this.modalService.dismissAll();
        this.modalService.open(this.modalEncuesta, {backdrop: 'static', keyboard: false, size: 'lg'});
      }
    },error =>{
      console.log(<any>error)
    });
  }

  ngOnInit() {    
    this.jwt = this._usuarioService.getJWT();
    
    this.alumno = this._usuarioService.getAlumno();
    
    
    this.idSituacionAlumno = this._alumnoService.getSituacionAlumno();
    this.idSituacionPago = this._alumnoService.getSituacionPago();


    this._alumnoService.infoPlataformaCargada.subscribe(
      (response) => {
          this.idSituacionAlumno = response['idSituacionAlumno'];
          this.idSituacionPago = response['idSituacionPago'];

      }

    );


    this.consultaMaterias(this.tipoConsulta);
    
    }

    consultaMaterias(tipo){

      this.tipoConsulta= tipo;
      
      this._materiaService.seleccionaMaterias(this.idAlumno,this.tipoConsulta).then(
        (materias:any)=>{
          this.materias =materias;              
        }      
      );
    }

      seleccionaMateria(id,index){
        if(this.idSituacionAlumno != 1 || this.idSituacionPago == 2){
          alertify.error('Por el momento no puedes acceder a tus materias')
        }else if(!this.materias[index].activa && this.materias[index].estado == 2){
          alertify.error('Esta materia aún no abre')
        }else{
          this._materiaService.seleccionaMateria(id,this.jwt).then(
            (data:any)=>{
              this._router.navigate(['/materia/']);
            }
          );
        }
        
  
      }
  


  closeModal() {
    this.modalService.dismissAll();
    this._router.navigate(['/learning/materia/']);
  }

}
