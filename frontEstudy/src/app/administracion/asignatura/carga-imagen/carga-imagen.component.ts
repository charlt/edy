import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { AsignaturaService } from '../services/asignatura.service';

declare var alertify;

@Component({
  selector: 'app-carga-imagen',
  templateUrl: './carga-imagen.component.html',
  styleUrls: ['./carga-imagen.component.scss']
})
export class CargaImagenComponent implements OnInit {
  jwt: string;
  message;
  estado;
  imgURL;
  imgFile;
  size;
  width;
  height;
  btnDisabled;
  tipoAdmin;
  @Input() urlImagen;
  @Input() idAsignaturaSelected;
  @Input() tipoImagen;


  constructor(
    private _usuarioService: UsuarioService,
    private _asignaturaService: AsignaturaService

  ){

   }

  ngOnInit() {
   this.jwt = this._usuarioService.getJWT();
   let identity = this._usuarioService.getIdentity();
   if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
  }

  //imagen
  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    // console.log(this.files[0].relativePath)
    // for (const droppedFile of this.files) {
       // Is it a file?
      if (this.files[0].fileEntry.isFile) {
        const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          this.preview(file, [3000,3000,10485760], 1);// tamaño imagen
 
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
    //console.log(evt)
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
      this.imgURL = '';
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


  guardarImagen(){
  console.log(this.tipoImagen);
if(this.tipoImagen == "imagen"){
  if (this.estado == 1){
    this._asignaturaService.imagen(this.idAsignaturaSelected,  this.imgFile, this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
            this.btnDisabled = true;
            this.urlImagen.forEach(function(imagen,index){
              // console.log(imagen.id)
             if(imagen.id == this.idAsignaturaSelected)
                 this.urlImagen[index] =  this.imgURL;
            }.bind(this));
          }else{
            alertify.error(response['msg'])
          }
      },error =>{
        console.log(<any>error)
    });
  }else{
    alertify.error("Inserta una imagen válida");
  }
}else if(this.tipoImagen == "previa"){
  if (this.estado == 1) {
    this._asignaturaService.imagenPrevia( this.idAsignaturaSelected,  this.imgFile, this.jwt).subscribe( 
      response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
            this.btnDisabled = true;      
            this.urlImagen.forEach(function(imagen,index){
              console.log(imagen.id)
             if(imagen.id == this.idAsignaturaSelected)
                 this.urlImagen[index] =  this.imgURL;
            }.bind(this));
            alertify.success(response['msg'])
          }else{
            alertify.error(response['msg'])
          }
      },error =>{
        console.log(<any>error)
    });
  }else{
    alertify.error("Inserta una imagen válida");
  }
}


   //this.estado = 0;
   this.imgFile = "";   
 }
}
