import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { randomColor } from 'randomcolor';
import { AlumnoService } from '../services/alumno.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

declare var alertify: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title: string;
  jwt: string;
  alumnoForm: FormGroup;
  Sizes = [
    'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    'col-xl-3 col-lg-3 col-md-4 col-sm-10 col-9',
    'col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3'
  ]
  FormData = {
    first: [
    {label: 'Nombre', control: 'nombre', error: '', type: 'text', class: 'form-control', size: 0, required: true},
    {label: 'Primer apellido', control: 'primer_apellido', error: '', type: 'text', class: 'form-control', size: 0, required: true},
    {label: 'Segundo apellido', control: 'segundo_apellido', error: '', type: 'text', class: 'form-control', size: 0, required: true},
    {label: 'CURP', control: 'curp', error: '', type: 'text', class: 'form-control', size: 0, required: true},
    {label: 'Correo electrónico', control: 'email', error: '', type: 'email', class: 'form-control', size: 0, required: true},
    {label: 'Celular', control: 'celular', error: '', type: 'number', class: 'form-control', size: 0, required: false},
    {label: 'RFC', control: 'rfc', error: '', type: 'text', class: 'form-control', size: 0, required: false},
    {label: 'Fecha de nacimiento', control: 'fecha_nacimiento', error: '', type: 'date', class: 'form-control', size: 0, required: false},
    {label: 'Matricula', control: 'matricula', error: '', type: 'text', class: 'form-control bg-white', size: 1, required: false},
    {label: 'Color', control: 'color', error: '', type: 'color', class: 'color', size: 2, required: false},
    {label: 'Situación del alumno', control: 'situacion', error: '', type: 'select', class: 'form-control', size: 0, required: true}
    ],
    last: [
    {label: 'Enviar correo con matrícula', control: 'envia_correo', error: '', type: 'checkbox', class: '', size: 0, required: true}
    ]
  };
  flag: boolean = false;
  matricula: any = '';
  Situacion: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _alumnoService: AlumnoService,
    private router: Router
  ) { 
    this.title= "Agregar nuevo alumno";
    this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this._alumnoService.getMatricula(this.jwt).subscribe(response => {
      if (response && response['status']) {
        this.matricula = response['matricula'];
        this.getCatSituacion();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  get c() { return this.alumnoForm.controls; }

  getCatSituacion(){
    this._alumnoService.getSituacion(this.jwt).subscribe(response => {
      if (response && response['status']) {
        this.Situacion = response['ciclo_estatus'];
        this.setData();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  setData(){
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      curp: ['', Validators.compose([Validators.required, 
        Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])],
      email: ['', Validators.compose([Validators.required, 
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      celular: '',
      rfc: ['', Validators.pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)],
      fecha_nacimiento: '',
      color: randomColor(),
      matricula: {value: this.matricula, disabled: true},
      situacion: ['', Validators.required],
      envia_correo: false,
    });
    this.flag = true;
  }

  sendInfo(){
    this.alumnoForm.setErrors({incorrect: true});
    let Form = Object.entries(this.alumnoForm.value);        
    this._alumnoService.creaAlumno(this.jwt, Form).subscribe(response => {
      if (response && response['status']) {
        alertify.success(response['msg']).dismissOthers();;
        this.router.navigate(['/admin/alumno/consulta']);
      }else{
        alertify.error(response['msg']).dismissOthers();
      }
    }, error => {
      console.log(<any>error);
    });
  }

}
