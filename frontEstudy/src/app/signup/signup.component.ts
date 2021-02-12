import { Component, OnInit,  } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InscripcionService } from '../inscripcion/inscripcion.service';
import { UsuarioService } from '../services/usuario.service';
import { CatalogoService } from '../services/catalogo.service';
import {Router, ActivatedRoute} from '@angular/router';
import { randomColor } from 'randomcolor';
import {universidad} from 'src/app/services/universidad';
import * as myParticles from '../models/particles';
import { ReCaptchaV3Service } from 'ng-recaptcha';



declare var alertify;
declare var particlesJS;

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    carreras;
    //aceptar = false;
    color;
    registroExitoso = false;
    enviarCorreo = null;
    universidad = universidad;
    idCarrera: any;
    plataforma: string;
    tipo = 0;
    usuario: any = {
        user:'Prueba',
        pass: 'Pass'
    };

    constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _inscripcionService: InscripcionService,
    private _catalogoService: CatalogoService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private router: Router
    ){}

    public executeImportantAction(): void {
        this.recaptchaV3Service.execute('importantAction')
          .subscribe((token) => this.enviarDatos(token));
    }


    get f() { return this.signupForm.controls; }

    ngOnInit(){
        this.plataforma = this.router.url.split('/')[1];        
        this.idCarrera = this.route.snapshot.paramMap.get('id');        
        if(!this.idCarrera) this.idCarrera = "";

        this.signupForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            primer_apellido: ['', Validators.required],
            segundo_apellido: ['', Validators.required],
            email: ['', Validators.required],
            email2: ['', Validators.required],
            numero: ['', Validators.required],
            curp: [''],
            //claveElector: ['', Validators.required],
            carrera: ['', Validators.required],
            codPromo:[''],
          });

          this.consultaCarreras();
          if(this.plataforma == 'inscribete') particlesJS("particles-js", myParticles.particles);
          else this.tipo = 1;
    }

    codPromo(){
    let codigo = this.signupForm.get('codPromo').value;
    if(codigo == ''){
        this.signupForm.get('codPromo').setErrors(null);
    }else{
        this._inscripcionService.validaCodigo(codigo).subscribe(
            response =>{
                if(response && response['status']){
                    alertify.success(response['msg'])
                }else{
                    alertify.error(response['msg']);
                    this.signupForm.get('codPromo').setErrors({invalid:true});
                }
            },error =>{
                console.log(<any>error)
            });
    }
    

    }

    onLoggedin(){
    this._catalogoService.consultaCarreraAspirantes().subscribe(
        response =>{
            if(response && response['status']){
                this.carreras = response['carreras'];
            }
        },error =>{
            console.log(<any>error)
        });
    }

    // prueba(token){
    //     console.log(token);
    //     this.enviarDatos();
    // }

    /*check(){
        if (!this.aceptar){
            this.aceptar = true;
        }
        else if(this.aceptar){
            this.aceptar = false
        }
    }*/

    consultaCarreras(){
        this._catalogoService.consultaCarreraAspirantes().subscribe(
            response =>{
                if(response && response['status']){
                    this.carreras = response['carreras'];
                    this.signupForm.get('carrera').setValue(this.idCarrera)                                                 
                }
            },error =>{
                console.log(<any>error)
            });
    }

    enviarDatos(token){
        // console.log(token);
        let color = randomColor();
        let _email1 = this.signupForm.get('email').value
        let _email2 = this.signupForm.get('email2').value
    if (this.signupForm.invalid){
        Object.keys(this.signupForm.controls).forEach( controlKey => {
        this.signupForm.controls[controlKey].markAsTouched();
        });
        return;
    }
    
    
    /*else if(!this.aceptar){
        alertify.error('Debes aceptar los términos para continuar');
        return;
    }else*/ 
    if(_email1 != _email2){
        alertify.error('Los correos no coinciden');
        return;
    }
    this.enviarCorreo = true;
    this._inscripcionService.insertaRegistro(this.signupForm, color, this.tipo).subscribe(
            response =>{
                if(response && response['status']){
                    this.enviarCorreo = false;
                    if (this.plataforma == 'inscribete') {
                        let idUsuario = response['id_usuario'];
                        this._usuarioService.generateJWTid(idUsuario,4).subscribe(
                            response => {
                            localStorage.setItem('jwt',response['jwt']);
                            localStorage.setItem('identity',JSON.stringify(response['user']));
                        });
                    }else if (this.plataforma == 'asesor') {
                        this.usuario = {
                            user: response['usuario'],
                            pass: response['password']
                        }
                    }
                    this.registroExitoso = true;
                    alertify.success(response['msg'])
                }else{
                    
                    alertify.error(response['msg'])
                }
                this.enviarCorreo = false;
            },error =>{
                console.log(<any>error)
                this.enviarCorreo = false;
            });
    }
}
