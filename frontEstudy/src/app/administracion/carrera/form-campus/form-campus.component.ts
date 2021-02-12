import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { CarreraService } from '../services/carrera.service';

declare var alertify;

@Component({
  selector: 'app-form-campus',
  templateUrl: './form-campus.component.html',
  styleUrls: ['./form-campus.component.scss']
})
export class FormCampusComponent implements OnInit {
  
  public nivelEstudios;
  public title: string;
  public campusForm : FormGroup;
  
  private idCampus : string;
  private campus;
  private jwt;
  tipoAdmin;
  catTipoCampus: any;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private _carreraService: CarreraService
  ) {
    this.idCampus = this.route.snapshot.paramMap.get('id');

    if(this.idCampus)
      this.title = 'Editar campus';
    else
      this.title = 'Nuevo campus';
      
    this._usuarioService.pushBreadcum(this.title,"",2);
   }

   get f() { return this.campusForm.controls; }

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
            console.log(this.nivelEstudios);
          }

      },error =>{
        console.log(<any>error)
      });
    
    

    if(this.idCampus != null){
      
      this._carreraService.consultaCampus( this.idCampus , this.jwt).subscribe(
        response =>{
          if(response && response['status']){
            this.campus = response['campus'][0]; 
            this.setFormulario();
            this.consultaTipoCampus();
          }  
        },error =>{
          console.log(<any>error)
      });
    }else {
      this.setFormulario();
      this.consultaTipoCampus();
    }
  }
  // this.campusForm = this.formBuilder.group({
  //   claveCampus: [this.campus.campus_clave, Validators.required],
  //   nombreCampus: [this.campus.campus, Validators.required],
  // });

  setFormulario() {
    let c = this.campus;
    let online;
    if (c) c.online == 1? online = true : false;
    this.campusForm = this.formBuilder.group({
      claveCampus: [c? c.campus_clave: '', Validators.required],
      nombreCampus: [c? c.campus: '', Validators.required],
      online: [online],
      tipoCampus: [c? c.tipo_campus_id: '', Validators.required]
    });
  }

  consultaTipoCampus() {
    this._carreraService.consultaTipoCampus().subscribe(
      response =>{
         if(response && response['status']){
           this.catTipoCampus = response['campus'];
         }
      },error =>{
        console.log(<any>error)
     });
  }

  enviarInformacion(){
    // stop here if form is invalid

    this._carreraService.modificaCampus(this.campusForm, this.jwt, this.idCampus).subscribe(
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

    // if (this.campusForm.invalid) {
    //  return;
    // }
}
}