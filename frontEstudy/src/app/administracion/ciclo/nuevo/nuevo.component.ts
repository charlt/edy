import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { CicloService } from '../services/ciclo.service';
declare var alertify;


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent implements OnInit {
  cicloForm: FormGroup;
  jwt: string;
  nivelEstudios;
  cicloEstatus;
  id_ciclo;
  planEstudios;
  ciclos;
  title;
  tipoAdmin;
  constructor(
    private formBuilder: FormBuilder,
    private _catalogoService: CatalogoService,
    private _cicloService: CicloService,
    private _usuarioService:  UsuarioService,
    private router : Router,
    private route: ActivatedRoute
  ) { 
    this.id_ciclo = this.route.snapshot.paramMap.get('id');

    if(this.id_ciclo)
      this.title = 'Editar ciclo';
    else
      this.title = 'Nuevo elemento';
      
    this._usuarioService.pushBreadcum(this.title,"",2);
  }

  
  get f() { return this.cicloForm.controls; }
  
  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this._catalogoService.consultaNivelEstudios(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.nivelEstudios = response['nivelEstudios'];
          }

      },error =>{
        console.log(<any>error)
      });
      this._catalogoService.consultaEstatusCiclo(this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.cicloEstatus = response['ciclo_estatus'];
            }
  
        },error =>{
          console.log(<any>error)
        });
    this.cicloForm = this.formBuilder.group({
     // nivelCiclo:  ['', Validators.required],  
      nombreCiclo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaCierre: ['', Validators.required],
      cicloEstatus:['', Validators.required]

    });

    if(this.id_ciclo != null){  
      this._cicloService.consulta( this.jwt , this.id_ciclo).subscribe(
        response =>{
          
          if(response && response['status']){
            this.ciclos = response['ciclo'][0];
            if(this.id_ciclo)
            this.title = 'Editar ciclo: ' + this.ciclos.ciclo_desc;
          else
            this.title = 'Nuevo elemento';
            
          this._usuarioService.pushBreadcum(this.title,"",2);

            this.cicloForm = this.formBuilder.group({
             //nivelCiclo:   [ , Validators.required], 
              nombreCiclo: [this.ciclos.ciclo_desc, Validators.required],
              fechaInicio: [this.ciclos.fecha_inicio, Validators.required],
              fechaCierre: [this.ciclos.fecha_fin, Validators.required],
              cicloEstatus:[this.ciclos.ciclo_estatus_id, Validators.required]

            });

          }
        },error =>{
          console.log(<any>error)
        });
    
    }
 
    
  }
  enviarInformacion(){
    // stop here if form is invalid
    if (this.cicloForm.invalid) {
      Object.keys(this.cicloForm.controls).forEach( controlKey => {
        this.cicloForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    this._cicloService.modificaCiclos(this.cicloForm , this.jwt , this.id_ciclo  ).subscribe(
     response =>{
       console.log(response)
         if(response && response['status']){
           this.router.navigate(['admin/ciclo/consulta']);
           alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])

         }

     },error =>{
       console.log(<any>error)
     });

    if (this.cicloForm.invalid) {
     return;
    }
  }
}