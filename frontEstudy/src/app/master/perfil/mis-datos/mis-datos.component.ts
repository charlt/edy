import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from '../services/perfil.service';
import { CatalogoService} from '../../../services/catalogo.service';
import { GLOBAL }  from '../../../services/global';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

declare var alertify: any;

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss']
})
export class MisDatosComponent implements OnInit {
  datosForm: FormGroup;
  perfilForm: FormGroup;
  passForm: FormGroup;
  curriculumForm: FormGroup
  title: string;
  jwt: string;  
  public imagePath;
  imgURL: any;
  public message: string;
  width: number;
  height: number; 
  size: any; 
  estado = 0;      
  imgFile: any;
  identity: any;
  roles;
  rolUser;
  public url: string;
  estadoPass: boolean;
  usuario;
  btnDisabled: boolean = true;
  color;
  curriculumFm = false;
  id_usuario;
  datosPersonalesDeshabilidados = false;

  @ViewChild('imagen') imgType:ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService,
    private _perfilService : PerfilService,
    private router : Router,
    private route: ActivatedRoute       
  ) { 

    this.title = 'Mi información personal'; 
    this.url = GLOBAL.urlAssets;
    this._usuarioService.pushBreadcum(this.title,"",2);
    this.identity = this._usuarioService.getIdentity();
    this.rolUser = this._usuarioService.getRol();
  }

  get f() { return this.perfilForm.controls; }
  get fd() { return this.datosForm.controls; }
  get pf() { return this.passForm.controls; }
  get cf() { return this.curriculumForm.controls; }

  ngOnInit() {

    this.jwt = this._usuarioService.getJWT();
    this.id_usuario = this.identity.usuario_id;
    if (this.rolUser.rol_id == 3) {
      this.curriculumFm = true;
    }

    if(this.rolUser.rol_id == 2){
      this.datosPersonalesDeshabilidados = true;
    }

    
    this.color = this.identity.color;
    this._usuarioService.miconsulta(this.jwt).subscribe(
      response =>{
            if(response && response['status']){
              this.usuario = response['usuario'];
              if(response['usuario'].url_perfil)
                this.imgURL = this.url + this.usuario.url_perfil;            
              this.datosForm.get("nombrePerfil").setValue(this.usuario.nombre);
              this.datosForm.get("apPatPerfil").setValue(this.usuario.primer_apellido);
              this.datosForm.get("apMatPerfil").setValue(this.usuario.segundo_apellido);
              this.datosForm.get("curpPerfil").setValue(this.usuario.curp);
              this.datosForm.get("email").setValue(this.usuario.email);
              this.datosForm.get("celular").setValue(this.usuario.celular);
          }
      },error =>{
        console.log(<any>error)
      });  

    this._catalogoService.consultaRol(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.roles = response['rol'];
          }
      },error =>{
        console.log(<any>error)
      });  

    this.datosForm = this.formBuilder.group({
      nombrePerfil: [{"value":'',disabled:this.datosPersonalesDeshabilidados}, Validators.required,],
      apPatPerfil: [{"value":'',disabled:this.datosPersonalesDeshabilidados}, Validators.required],
      apMatPerfil: [{"value":'',disabled:this.datosPersonalesDeshabilidados}, Validators.required],
      curpPerfil: [{"value":'',disabled:this.datosPersonalesDeshabilidados}, Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required],

      // rolPerfil: [{value: '', disabled: true}, Validators.required],
      // instPerfil: [{value: this.rolUser.institucion, disabled: true}, Validators.required]
    });     

    // this.perfilForm = this.formBuilder.group({
    //   imgPerfil: ['', Validators.required]
    // });

    this.passForm = this.formBuilder.group({
      passPerfil: ['', Validators.required],
      confirmpassPerfil: ['', Validators.required]
    });

    this.curriculumForm = this.formBuilder.group({
      curriculum: ['', requiredFileType(0)],
    }); 
  }



  enviarCurriculum(){
  this._usuarioService.guardaCurriculum(this.jwt, this.curriculumForm).subscribe(        
    response =>{
        if(response && response['status']){alertify.success(response['msg'])}else alertify.error(response['msg'])
    },error =>{
      console.log(<any>error)
    });
  }

  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    console.log(this.files[0].relativePath)
    // for (const droppedFile of this.files) {
       // Is it a file?
      if (this.files[0].fileEntry.isFile) {
        const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          this.preview(file, [800,600,10485760], 1);
 
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = this.files[0].fileEntry as FileSystemDirectoryEntry;
        console.log(this.files[0].relativePath, fileEntry);
      }
    // }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }  
 
  preview(evt: any, array, id) {
    console.log(evt)
    if (id == 0) {
      let file = evt.target.files;  
      if (file.length === 0)
      return;
      
    var mimeType = file[0].type;      
    }else if(id ==1){
    let file = evt;
    var mimeType = file.type;
    }

    if (mimeType.match(/image\/*/) == null) {
      this.message = "Sólo se admiten imágenes.";
      this.estado = 0;
      this.imgURL = this.url + 'assets/archivos_alumno/0/imagen_perfil/default.png';
      alertify.error(this.message);
      return;
    }
    var image:any;
    if (id == 0) {
      image = evt.target.files[0];      
    }else if(id == 1){
      image = evt;
    }
    this.imgFile = image;
    this.size = image.size;
    let reader = new FileReader;
    reader.onload = () => { // when file has loaded
      this.imgURL = reader.result;   
      var img = new Image();
 
      img.onload = () => {

        this.estado = 1;
        this.btnDisabled = false;              
        // alertify.success('Imagen')
      //     this.width = img.width;
      //     this.height = img.height;

      //     if (this.size <= array[2]) {            
      //       if (this.width < array[0] && this.height < array[1]){
      //         alertify.success("Tamaño de imagen correcto");
      //         this.estado = 1;
      //         this.btnDisabled = false;              
      //       }
      //       else{
      //         alertify.error("El tamaño de la imagen no debe de pasar  de "+array[0]+"x"+array[1]+"px");
      //         this.estado = 0;
      //         this.imgURL = this.url + 'assets/archivos_alumno/0/imagen_perfil/default.png';   
      //       }
      //     }else{
      //       alertify.error("El tamaño de la imagen es demasiado grande");
      //       this.estado = 0;
      //     }
      };
      img.src = reader.result.toString(); // This is the data URL
    };
 
   reader.readAsDataURL(image);
    // this.imgType.nativeElement.value = ""; 
   }    


  enviarImagen(){
    // stop here if form is invalid      
    // if (this.perfilForm.invalid) {
    //   Object.keys(this.perfilForm.controls).forEach( controlKey => {
      //     this.perfilForm.controls[controlKey].markAsTouched();
      //   });
      //   return;
      // }
      
      if (this.estado == 1) {
        this._perfilService.enviarImagen(this.identity.usuario_id, this.jwt, this.imgFile).subscribe(
          response =>{
            this.identity.url_perfil = response['url'];
            let _identity = JSON.stringify(this.identity); 
            localStorage.removeItem('identity');
            localStorage.setItem('identity',_identity);
            if(response && response['status']){
              this.btnDisabled = true;              
              alertify.success(response['msg'])
            }else{
              alertify.error(response['msg'])
            }
        },error =>{
          console.log(<any>error)
      });
    }
    else
      alertify.error("Inserta una imagen válida")
    // if (this.perfilForm.invalid) {
    //   return;
    // }   
    this.estado = 0;
    this.imgFile = "";
  }  

  enviarDatos(){
    if (this.datosForm.invalid){
      Object.keys(this.datosForm.controls).forEach( controlKey =>{
        this.datosForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._perfilService.editarDatos(this.datosForm, this.jwt, this.identity, this.rolUser, this.usuario).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
          }else{
            alertify.error(response['msg'])
          }

      },error =>{
        console.log(<any>error)
    });        
  }

  enviarPass(){
    if (this.passForm.invalid) {
      Object.keys(this.passForm.controls).forEach( controlKey => {
        this.passForm.controls[controlKey].markAsTouched();
      });
      return;
    }    
    
    let pass = this.passForm.get("passPerfil").value;
    let confirmPass = this.passForm.get("confirmpassPerfil").value;

    if (pass == confirmPass) {
      this._perfilService.editarPass(pass, this.jwt, this.identity.usuario_id).subscribe(
        response =>{
          console.log(response)
            if(response && response['status']){
              alertify.success(response['msg']);
              this.passForm = this.formBuilder.group({
                passPerfil: ['', Validators.required],
                confirmpassPerfil: ['', Validators.required]
              });               
            }else{
              alertify.error(response['msg'])
            }

        },error =>{
          console.log(<any>error)
      });      
    }
    else{
      alertify.error("Las contraseñas no coinciden")
    }
  }

  confirmPass(){
    let pass = this.passForm.get('passPerfil').value;
    let confirm = this.passForm.get('confirmpassPerfil').value;
    if (pass == confirm) {
      this.estadoPass = true;
    }
    else{
      this.estadoPass = false;
    }
  }
}