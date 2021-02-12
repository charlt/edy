import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RolService } from '../services/rol.service';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  areaForm;
  title;
  id_area;
  jwt: string;
  roles: any;
  rol1: any;
  tipoAdmin;
  area;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _rolService: RolService,
    private router : Router,

  ){
    this.id_area = this.route.snapshot.paramMap.get('id');

    if(this.id_area)
      this.title = 'Editar elemento';
    else
      this.title = 'Nuevo elemento';
      
    this._usuarioService.pushBreadcum(this.title,"",2);


   }

   get f() { return this.areaForm.controls; }

  ngOnInit(){
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;

    this.areaForm= this.formBuilder.group({
      area: ['', Validators.required],
      desc: ['', Validators.required]
    });

    if(this.id_area != null){

      this._rolService.consultaEsp(this.id_area).subscribe(
        response =>{
          if(response && response['status']){
            this.area = response['area'][0];
            console.log(this.area)
            this.areaForm.get("area").setValue(this.area.area_nombre);
            this.areaForm.get("desc").setValue(this.area.area_desc);

          }
        },error =>{
          console.log(<any>error)
        });
    
    }

  }

  enviarInformacion(){
    if (this.areaForm.invalid) {
      Object.keys(this.areaForm.controls).forEach( controlKey => {
        this.areaForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._rolService.modificaArea(this.areaForm, this.id_area).subscribe(
     response =>{
       console.log(response)
         if(response && response['status']){
          //  this.router.navigate(['admin/rol/consulta']);
           alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])

         }

     },error =>{
       console.log(<any>error)
     });

    if (this.areaForm.invalid) {
     return;
    }
  }

}
