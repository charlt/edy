import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { slideToTop } from 'src/app/router.animations';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HorarioService } from './services/horario.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var alertify;

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
  animations: [slideToTop()]

})
export class HorarioComponent implements OnInit {
  title;
  horario;
  horarios;
  horario_id;
  idAsignaturaGrupo;
  horarioForm: FormGroup;
  dias = [{ 'id': 1, 'nombre': 'Lunes' },
  { 'id': 2, 'nombre': 'Martes' },
  { 'id': 3, 'nombre': 'Miércoles' },
  { 'id': 4, 'nombre': 'Jueves' },
  { 'id': 5, 'nombre': 'Viernes' },
  { 'id': 6, 'nombre': 'Sábado' },
  { 'id': 7, 'nombre': 'Domingo' }];

  @ViewChild('content') modal: NgbModalRef;



  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _horarioService: HorarioService,
    private formBuilder: FormBuilder,
    private _modalService: NgbModal

  ) {
    this.title = 'Horario de clases';
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
    this._usuarioService.pushBreadcum(this.title, '', 2);
  }

  get f() { return this.horarioForm.controls; }

  ngOnInit() {
    this.horarioForm = this.formBuilder.group({
      dia: ['', Validators.required],
      horaIni: ['', Validators.required],
      horaFin: ['', Validators.required],
    });
    this.consulta();
  }

  consulta() {
    this._horarioService.consultaHorario(this.idAsignaturaGrupo).subscribe(
      response => {
        if (response && response['status']) {
          this.horarios = response['horario'];
          this.horarios.forEach(horario => {
            this.dias.forEach(dia => {
              if (horario.dia == dia.id) {
                horario.dia = dia.nombre;
              }
            });
          });
        }
      }, error => {
        console.log(<any>error)
      });
  }

  enviarInformacion() {
    if (this.horarioForm.invalid) {
      Object.keys(this.horarioForm.controls).forEach(controlKey => {
        this.horarioForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._horarioService.guardaHorario(this.horarioForm, this.idAsignaturaGrupo, this.horario_id).subscribe(
      response => {
        if (response && response['status']){
          this.consulta();
          this.close();
          alertify.success(response['msg']);
        } else {
          alertify.error(response['msg']);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaEspecifica(){
    this._horarioService.consultaEsp(this.idAsignaturaGrupo, this.horario_id).subscribe(
      response => {
        if (response && response['status']){
          this.horario = response['horario'][0];
          this.horarioForm.get('dia').setValue(this.horario.dia);
          this.horarioForm.get('horaIni').setValue(this.horario.hora_inicio);
          this.horarioForm.get('horaFin').setValue(this.horario.hora_fin);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  elimina(horario_id,index){
    this._horarioService.elimina(horario_id).subscribe(
      response => {console.log(response);
        if (response && response['status']){
          this.horarios.splice(index, 1);
          alertify.success(response['msg']);
        }else{
          alertify.error(response['msg']);
        }
      }, error => {
        console.log(<any>error)
      });
  }


  openModal(content, horario_id){
    this.horario_id = horario_id
    if (this.horario_id) {
      this.consultaEspecifica();
    }
    this._modalService.open(content, { size: 'lg' });
  }

  close() {
    this._modalService.dismissAll();
    this.horarioForm.reset();
    this.horarioForm.get('dia').setValue("");
    this.horario_id=null;;
  }

}
