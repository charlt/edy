import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CarreraService } from '../services/carrera.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var alertify;

@Component({
  selector: 'app-campus-carrera',
  templateUrl: './campus-carrera.component.html',
  styleUrls: ['./campus-carrera.component.scss']
})
  export class CampusCarreraComponent implements OnInit {
  public title: string;
  public carreras;
  public campus;
  public campusCarreraForm : FormGroup;
  tipoAdmin;
  private jwt: string;
  
  
  
  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _carreraService: CarreraService,
    private _catalogosService: CatalogoService,
    private router: Router) {
      this.title = 'Vinculación de carrera y campus';
      this._usuarioService.pushBreadcum(this.title,"",2);
     }

  get f() { return this.campusCarreraForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this._catalogosService.consultaCarrera(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
              this.carreras = response['carreras'];
          }

      },error =>{
        console.log(<any>error)
      });

      
      this._catalogosService.consultaCampus(this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              console.log(response)
                this.campus = response['campus'];
            }
  
        },error =>{
          console.log(<any>error)
        });

        this.campusCarreraForm = this.formBuilder.group({
          campus: ['', Validators.required],
          carrera: ['', Validators.required]  
        });
    

  }

  enviarInformacion(){
    if (this.campusCarreraForm.invalid) {
      return;
  }
    this._carreraService.vinculaCarreraCampus(this.campusCarreraForm , this.jwt   ).subscribe(
     response =>{
       console.log(response)
         if(response && response['status']){
           this.router.navigate(['admin/carrera/consulta']);
           alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])

         }

     },error =>{
       console.log(<any>error)
     });


}

}
