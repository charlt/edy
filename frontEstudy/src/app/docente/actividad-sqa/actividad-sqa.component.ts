import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadSqaService } from './services/actividad-sqa.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {metrica} from '../../services/metricaCalificacion'

declare var alertify;

@Component({
  selector: 'app-actividad-sqa',
  templateUrl: './actividad-sqa.component.html',
  styleUrls: ['./actividad-sqa.component.scss']
})
export class ActividadSQAComponent implements OnInit {

  finalForm: FormGroup;
  title: string;
  jwt;
  idMateria;
  idAlumno;
  idActividad;
  idMateriaFechaActividad;
  sqam1;
  sqam2;
  sqam3;
  alumnos;
  verRetro = false;
  verNota = false;
  valor;
  nota;
  idPersona;
  idRol;
  estatusActividad;
  calif;
  metricaCalif;

  constructor(
    private _usuarioService: UsuarioService,
    private _sqaService: ActividadSqaService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,

  ) {
    this.title = 'Consulta de actividad SQA';
    this.idMateria = this.route.snapshot.paramMap.get('id1');
    this.idAlumno = this.route.snapshot.paramMap.get('id2');
    this.idActividad = this.route.snapshot.paramMap.get('id3');
    this._usuarioService.pushBreadcum(this.title,"",2);
    
   }

   get f() { return this.finalForm.controls; }

  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();
    let identity = this._usuarioService.getIdentity();
    let rol = this._usuarioService.getRol()
    this.idPersona = identity.persona_id;
    this.idRol= rol.rol_id;
    this.metricaCalif = metrica;

    this._sqaService.consulta(this.idMateria,this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            console.log(response)
            this.sqam1 = response['actividadSQAm1'];
            this.sqam2 = response['actividadSQAm2'];
            this.sqam3 = response['actividadSQAm3'];

            let idMat=this.sqam3[0];
            this.idMateriaFechaActividad=idMat.materia_fecha_actividad_id;
            this.estatusActividad=idMat.estatus_actividad_id;
            this.calif=idMat.calificacion;
    }
   
  });

  this.finalForm = this.formBuilder.group({
    // nivelCiclo:  ['', Validators.required],  
     valor: ['', Validators.required],
     nota: ['', Validators.required],
      

   });
  }

  aDecimal(valor){
    valor =parseFloat(valor).toFixed(2);
    valor = valor * 10;

    return valor.toFixed(2);
  }

  openModalRetro(content) {
    this.verRetro = true;
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }

  openModalNotas(content) {
    this.verNota = true;
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }

  guardarCalificacion(){
    // stop here if form is invalid
    if (this.finalForm.invalid) {
      Object.keys(this.finalForm.controls).forEach( controlKey => {
        this.finalForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    this._sqaService.guardarCalificacion(this.finalForm , this.idMateriaFechaActividad, this.idPersona, this.idRol, this.jwt).subscribe(
     response =>{
       console.log(response)
         if(response && response['status']){
           alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])

         }

     },error =>{
       console.log(<any>error)
     });

    if (this.finalForm.invalid) {
     return;
    }
  }

}
