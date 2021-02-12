import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UmoService } from '../../services/externos/umo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {

  title: string;
  jwt: string;
  fecha: string;
  idGrupo;
  idMateria;
  alumnos;
  redirect;
  fechaForm: FormGroup;
  idProfesor;
  identity;
  public search;

  @ViewChild('content') myModal: NgbModal;
  
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _umoService: UmoService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) { 
    this.title = 'Asistencia de alumnos';
    this._usuarioService.pushBreadcum(this.title,"",1);        
    this._usuarioService.removeBreadcum(2);


  }


  ngOnInit() {  

    this.fecha = this.getDate();
    this.fechaForm = this.formBuilder.group({
      fechaAsistencia: [this.fecha, Validators.required]
    });     


    this.route.queryParams.subscribe(params => {
      this.jwt = params['jwt'];
      this.idMateria = params['m'];
      this.idGrupo = params['g'];
      this.redirect = params['url'];
    });

    this._usuarioService.checkJWT(this.jwt).subscribe(
      response =>{
        console.log(response);
        if(response && response['status']){
          this.identity = response['jwt']
          this.idProfesor = this.identity.id;
        }else{
          window.location.href = './';
        }
      },error =>{
        console.log(error);
        window.location.href = './';

      }
    );
  }

  getDate(){
    let date = new Date()
    let getDay = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day;

    if(getDay < 10){
      day = '0' + getDay;
    }else{
      day = getDay;
    }

    if(month < 10){
      return(`${year}-0${month}-${day}`)
    }else{
      return (`${day}-${month}-${year}`)
    }
  }

  verGrupo(id){
    this.fecha = this.fechaForm.get('fechaAsistencia').value;
    this._umoService.consultaDia(this.idGrupo, this.idMateria, this.idProfesor, this.fecha, this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.alumnos = response['alumnos'];
            if (id == 1) {
              alertify.success("Lista creada correctamente");              
            }
          }else{
            if (id == 0) {
              this.open();
            }
          }
      },error =>{
        console.log(<any>error)
    });
  }

  creaGrupo(){
    this.fecha = this.fechaForm.get('fechaAsistencia').value;
    this._umoService.creaGrupo(this.idGrupo, this.idMateria, this.idProfesor, this.fecha, this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.close();
            this.verGrupo(1);
          }
      },error =>{
        console.log(<any>error)
    });      
  }

  enviaAsistencia(tipoAsistencia, asistencia, idAsistencia,i){
    this._umoService.cambiaAsistencia(tipoAsistencia, asistencia, idAsistencia, this.jwt).subscribe(
      response =>{
        if(tipoAsistencia == 'a')
          this.alumnos[i].asistencia_a = asistencia;
        else
        if(tipoAsistencia == 'b')
          this.alumnos[i].asistencia_b = asistencia;
        console.log(response)
      },error =>{
        console.log(<any>error)
    });      
  }

  guardarAsistencia(){
    alertify.confirm(this.translate.instant('¿Está seguro de que deseas guardar la asistencia del día ' + this.formatoFecha() + '?'),
    function(){
      this._umoService.confirmaGrupo(this.idGrupo, this.idMateria, this.fecha, this.jwt).subscribe(
        response =>{
          console.log(response)
          alertify.success(response['msg'])
        },error =>{
          console.log(<any>error)
      }); 
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  open() {
    this.modalService.open(this.myModal, { size: 'sm' });
  } 

  close() {
    this.modalService.dismissAll();
  }   

  formatoFecha(){
    let date = new Date();
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
                "Octubre", "Noviembre", "Diciembre"];
    let dia = date.getDate();
    let anio = date.getFullYear();    
    let fecha = dia + " de " + meses[date.getMonth()] + " del año " + anio;
    return fecha;
  }
}
