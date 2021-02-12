import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InstitucionService } from '../services/institucion.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import  {GLOBAL} from '../../../services/global';


declare var alertify: any;

@Component({
  selector: 'app-form-institucion',
  templateUrl: './form-institucion.component.html',
  styleUrls: ['./form-institucion.component.scss']
})
export class FormInstitucionComponent implements OnInit {

  public title: string;
  jwt: string;
  public message: string;
  estado = 0;
  imgURL: any;  
  imgFile: any;
  public url: string;
  size: any;
  width: number;
  height: number; 
  btnDisabled: boolean = true;
  imgForm: FormGroup;
  color;
  global;
  crea;

  plataformaInstitucion;
  tipoAdmin;
  file;

  constructor(
    private _usuarioService: UsuarioService,
    private _institucionService: InstitucionService,
    private router : Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

  ){ 
    this._usuarioService.pushBreadcum(this.title,"",2);
    this.global = GLOBAL.urlAssets;
  }

  get f() { return this.imgForm.controls; }



  ngOnInit(){
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this._institucionService.cambioHeader(this.jwt).subscribe(
      response=>{
        console.log(response);
        this.plataformaInstitucion = response['estilos'][0];
        this.imgForm.get('color').setValue(this.plataformaInstitucion.color);
        this.imgURL = this.global + this.plataformaInstitucion.url_perfil;
      },
      error=>{
        console.log(error);
      });

    this.imgForm = this.formBuilder.group({
      imagen:['', requiredFileType(0)],
      color: ['']
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
          this.preview(file, [1024,243,10485760]);// tamaño imagen
 
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
 
  preview(field, array) {

    if(!this.hasError(field,'requiredFileType')){
      const image = this.imgForm.get(field).value;

  
      this.imgFile = image;
      this.size = image.size;
      let reader = new FileReader;
      reader.onload = () => { // when file has loaded
        this.imgURL = reader.result;   
        var img = new Image();
   
        img.onload = () => {
            this.width = img.width;
            this.height = img.height;
  
            if (this.size <= array[2]) {            
              if (this.width < array[0] && this.height < array[1]){
                alertify.success("Tamaño de imagen correcto");
                this.estado = 1;
                this.btnDisabled = false;              
              }
              else{
                alertify.error("El tamaño de la imagen no debe de pasar  de "+array[0]+"x"+array[1]+"px");
                this.estado = 0;
                this.imgURL = '';   
              }
            }
            else{
              alertify.error("El tamaño de la imagen es demasiado grande");
              this.estado = 0;
            }
        };
        img.src = reader.result.toString(); // This is the data URL
      };
   
     reader.readAsDataURL(image);
      // this.imgType.nativeElement.value = ""; 
    }
    //console.log(evt)
  
   }

   hasError( field: string, error: string ) {
    const control = this.imgForm.get(field);
    return control.dirty && control.hasError(error);
  }

   enviarImagen(){
    
    if(this.plataformaInstitucion)
      this.crea = 0;
    else
      this.crea = 1;

    if (this.imgForm.invalid) {
      Object.keys(this.imgForm.controls).forEach( controlKey => {
        this.imgForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    
    if (this.estado == 1) {
      this._institucionService.imagen(this.imgForm, this.crea, this.jwt).subscribe( 
        response =>{
          console.log(response)
            if(response && response['status']){
              this.btnDisabled = true;      
              //esto es, para poder agregar la opción de edita
              this.plataformaInstitucion = 1;        
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
     
    //this.estado = 0;
    this.imgFile = "";
    
  }  

}
