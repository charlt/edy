import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlumnoService } from "../administracion/alumno/services/alumno.service";
import { UsuarioService } from "../services/usuario.service";
import { randomColor } from 'randomcolor';
import { Router } from '@angular/router';
import { universidad } from 'src/app/services/universidad';
import * as myParticles from '../models/particles';
import { OtrosLoginService } from '../services/externos/otros-login.service';

declare var alertify: any;
declare var particlesJS;
@Component({
  selector: 'app-signup-alumno',
  templateUrl: './signup-alumno.component.html',
  styleUrls: ['./signup-alumno.component.scss']
})
export class SignupAlumnoComponent implements OnInit {

  flag: boolean = false;
  matriculaForm: FormGroup;
  signupForm: FormGroup;

  Data: Array<any> = [
    { label: 'Nombre', control: 'nombre', required: 'null', type: 'text', disabled: true },
    { label: 'Primer apellido', control: 'primer_apellido', required: 'null', type: 'text', disabled: true },
    { label: 'Segundo apellido', control: 'segundo_apellido', required: 'null', type: 'text', disabled: true },
    {
      label: 'Correo electrónico', control: 'email', required: 'required', type: 'email', disabled: false,
      pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      error: 'fmErrNumber'
    },
    {
      label: 'CURP', control: 'curp', required: 'required', type: 'text', disabled: false,
      pattern: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
      error: 'fmErrCURP'
    },
    { label: 'Teléfono', control: 'celular', required: 'required', type: 'number', disabled: false, error: 'fmErrNumber' },
  ];
  persona: Array<any>;
  idPersona: number;
  idRol: number;
  showAlert: boolean = false;
  paso: number = 1;
  datosAlumno: Array<any>;
  matricula: string;
  usuario: string;
  password: string;
  ipAddress;
  os;
  navegador;
  alumnoValidado;

  universidad;

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private _otrosLoginService: OtrosLoginService,

  ) {
    this.universidad = universidad;
  }

  ngOnInit() {
    this.matriculaForm = this.formBuilder.group({
      matricula: ['', Validators.required]
    });
    particlesJS("particles-js", myParticles.particles);
    this.getIpOs();
    this.navegador = this.browser();
  }

  get sF() { return this.signupForm.controls }

  enviarMatricula() {
    this.flag = false;
    this.matriculaForm.setErrors({ invalid: true });
    this.matricula = this.matriculaForm.get('matricula').value;
    this.signupForm = this.formBuilder.group({});
    this._usuarioService.consultaUsuarioPrimeraVez(this.matricula).subscribe(response => {
      if (response && response['status']) {
        this.showAlert = false;
        console.log(response)
        this.persona = response['persona'];
        this.idPersona = this.persona['persona_id'];
        this.idRol = response['persona'].rol_id;
        this.alumnoValidado = parseInt(response['usuarioActualizado']);
        if (this.alumnoValidado == 1) {
          this.paso = 1;
          // console.log('response!');
          // console.log(response)
          this.usuario = response['persona'].usuario;
          this.password = response['persona'].clave;
        }

        this.Data.forEach(item => {
          if (item.pattern) {
            this.signupForm.addControl(item['control'], new FormControl({ value: '', disabled: item['disabled'] },
              Validators.compose([Validators[item['required']], Validators.pattern(item['pattern'])])))
          } else {
            this.signupForm.addControl(item['control'], new FormControl({ value: '', disabled: item['disabled'] }, Validators[item['required']]))
          }
          this.signupForm.get(item['control']).setValue(this.persona[item['control']]);
          this.signupForm.get(item['control']).markAsTouched({ onlySelf: true });
        });
        this.flag = true;
      } else {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    }, error => {
      console.log(<any>error);
    });
  }

  enviarDatos() {
    let color = randomColor();

    this.signupForm.setErrors({ incorrect: true });
    this.usuario = this.signupForm.get('email').value;
    let Form = this.signupForm.value;
    for (let i = 0; i < 3; i++) {
      Form[this.Data[i]['control']] = this.persona[this.Data[i]['control']];
    }
    let data = { rfc: '', fecha_nacimiento: '', id_sexo: 0, id_persona: this.persona['persona_id'], matricula: this.matricula, color: color, id_rol: this.persona['rol_id'] };
    let formData = Object.entries(data);
    for (const [name, value] of formData) {
      Form[name] = value;
    }
    Form = Object.entries(Form);

    this._usuarioService.recuperaUsuario(Form).subscribe(response => {
      if (response && response['status']) {

        console.log(response);
        this.datosAlumno = Form;
        this.usuario = response['usuario'];
        this.password = response['password'];

        alertify.success(response['msg']).dismissOthers();
        this.paso = 2;
      }
    }, error => {
      console.log(<any>error);
    });
  }

  ingresoPlataforma() {
    // localStorage.setItem('openpage', Date.now().toString());
    if (this.os && this.navegador) {
      this._usuarioService.generateJWTid(this.idPersona, this.idRol).subscribe(response => {
        let jwt = response['jwt'];
        let identity = JSON.stringify(response['user']);
        if (response && response['status']){
          this._usuarioService.guardarAcceso(jwt, this.ipAddress, this.os, this.navegador).subscribe(
            response => {
              console.log(response);
              if (response && response['status']){
                localStorage.setItem('jwt', jwt);
                localStorage.setItem('identity', identity);
                this.router.navigate(['/learning/home']);
                console.log(response)
                // alertify.success(this.bienvenida)
              }
            }, error => {
              console.log(<any>error)
            });
          // } 

        }
      }, error => {
        console.log(<any>error);
      });
    }
  }


  getIpOs() {
    this._otrosLoginService.getIPAddress().subscribe((response: any) => {
      this.ipAddress = response['ip'];
      if (navigator.appVersion.indexOf("Win") != -1) this.os = "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) this.os = "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) this.os = "UNIX";
      if (navigator.appVersion.indexOf("Linux") != -1) this.os = "Linux";
      if (navigator.appVersion.indexOf("Android") != -1) this.os = "Android";
    });
  }

  browser() {
    var ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
  }

}
