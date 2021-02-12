import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AsignaturaService } from '../services/asignatura.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify;

@Component({
  selector: 'app-subir-excel',
  templateUrl: './subir-excel.component.html',
  styleUrls: ['./subir-excel.component.scss']
})
export class SubirExcelComponent implements OnInit {
  excelForm: FormGroup;
  title: string;
  jwt: string
  file;
  tipoAdmin;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private route: ActivatedRoute,
    private _asignaturaService: AsignaturaService,
    private _usuarioService: UsuarioService
  ){

   }
   
   get f() { return this.excelForm.controls; }

  ngOnInit(

  ) {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.excelForm = this.formBuilder.group({
      excel: ['', Validators.required]
    });
    
  }
  enviarExcel(){

    // stop here if form is invalid      
  this._asignaturaService.excel(this.excelForm , this.jwt).subscribe(
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
    }
}