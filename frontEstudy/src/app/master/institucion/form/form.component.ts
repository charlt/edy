import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { InstitucionService } from '../services/institucion.service';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  institucionForm: FormGroup;
  title: string;
  institucion;
  jwt: string;
  id_institucion;
  inst;



  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _catalogoService: CatalogoService,
    private _institucionService: InstitucionService,
    private route : ActivatedRoute,
    private router : Router,



  ){
    this.id_institucion = this.route.snapshot.paramMap.get('id');

    if(this.id_institucion)
      this.title = 'Editar elemento';
    else
      this.title = 'Nuevo elemento';
      
    this._usuarioService.pushBreadcum(this.title,"",2);
   }

   get f() { return this.institucionForm.controls; }

  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();

    this._catalogoService.consultaTipoInst(this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
              this.institucion = response['instituciones']; 
          }
      },error =>{
        console.log(<any>error)
      });

      this.institucionForm = this.formBuilder.group({
        cvInstitucion: ['', Validators.required],
        nombreInstitucion: ['', Validators.required],
        tipoInstitucion:  ['', Validators.required],
       });


      if(this.id_institucion != null){  
        this._institucionService.consulta( this.jwt , this.id_institucion).subscribe(
          response =>{
            console.log(response)
            if(response && response['status']){
              this.inst = response['institucion'][0]; 
  
              this.institucionForm = this.formBuilder.group({ 
                cvInstitucion: [this.inst.institucion_clave, Validators.required],
                nombreInstitucion: [this.inst.institucion, Validators.required],
                tipoInstitucion: [this.inst.tipo_institucion_id, Validators.required],
              });
  
            }
          },error =>{
            console.log(<any>error)
          });
      
      }

  }

  enviarInformacion(){
    // stop here if form is invalid
    if (this.institucionForm.invalid) {
      Object.keys(this.institucionForm.controls).forEach( controlKey => {
        this.institucionForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._institucionService.modificaInstitucion(this.institucionForm , this.jwt, this.id_institucion  ).subscribe(
     response =>{
       console.log(response)
         if(response && response['status']){
           this.router.navigate(['master/institucion/consulta']);
           alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])
         }
     },error =>{
       console.log(<any>error)
     });

    if (this.institucionForm.invalid) {
     return;
    }
  }



}
