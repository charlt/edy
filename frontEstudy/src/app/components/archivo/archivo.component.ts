import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GLOBAL }  from '../../services/global';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Archivo } from 'src/app/services/archivos';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.scss']
})
export class ArchivoComponent implements OnInit,OnChanges{

  @Input() urlBase;
  @Input() nombre;
  @Input() tipoVista; // 1 se muestra en modal y 2 se muestra completo

  tipoArchivo = Archivo;
  existe;
  archivo;
  icono: string;
  ext: string;
  tipo: string;
  descripcion: string;
  urlArchivo;
  public url: string; 
  closeResult: string;
  
 
  constructor(
    private modalService: NgbModal,
    private sanitizer: DomSanitizer
  ) {
    this.url = GLOBAL.urlAssets;
   }

  ngOnInit() {
    if(!this.tipoVista)this.tipoVista = 1;
  }
  
  ngOnChanges(){
    // console.log('entro!')
    // console.log(this.urlBase)
    this.existe = this.urlBase ? true: false;

    this.ext = this.getExtension(this.urlBase);
    switch (this.ext) {
      case 'docx':
      case 'doc':
      case 'odt':
        this.icono = 'fa-file-word-o';
        this.descripcion = 'Descargar documento Word';
        break;
      case 'pdf':
        this.icono = 'fa-file-pdf-o';
        this.descripcion = 'Descargar documento PDF';
        break;    
      case 'xls':
      case 'xlsx':
      case 'xlsm':
      case 'csv':
      case 'ods':
        this.icono = 'fa-file-excel-o';
        this.descripcion = 'Descargar hoja de calculo';
        break;
      case 'pptx':
      case 'ppSx':
      case 'pptm':
      case 'ppt':
      case 'pps':
      case 'potx':
      case 'ppam':
        this.icono = 'fa-file-powerpoint-o';
        this.descripcion = 'Descargar presentación';
        break;
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'jfif':
        this.icono = 'fa-file-image-o';
        this.descripcion = 'Ver imagen';
        break;   
      case 'mp3':
      case 'm4a':
      case 'wav':
      case 'wma':
        this.icono = 'fa-file-audio-o';
        this.descripcion = 'Escuchar audio';
        break;
      case 'avi':
      case 'mp4':
      case 'm4v':
      case 'mov':
      case 'mpg':
      case 'mpeg':
      case 'swf':
        this.icono = 'fa-file-video-o';
        this.descripcion = 'Ver video';
      break;
      case 'zip':
      case 'rar':
          this.icono = 'fa-file-archive-o';
          this.descripcion = 'Descargar archivo comprimido';
          break;

      case 'dwg':
      case 'dwf':
      case 'dxf':
      this.icono = 'fa-file-archive-o';
        this.descripcion = 'Descargar archivo AutoCad';
        break;

      default: 
        this.icono = 'fa-file-archive-o';
        this.descripcion = 'Descarga archivo';
        break;
    }
    this.transform()
  }

  transform() {
    if(this.icono == 'fa-file-pdf-o' && this.tipoVista == 2){      
      this.archivo = {url: this.urlArchivo, tipo: this.descripcion, icono: this.icono};
      this.urlArchivo = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.urlBase)
    }else{
      this.urlArchivo = this.url + this.urlBase;
      this.archivo = {url: this.urlArchivo, tipo: this.descripcion, icono: this.icono};
    }
  }

  pantallaCompleta(){
    window.open(this.urlArchivo,"_blank");
    //  var imagen = document.getElementById("imagenModal");
    //  var altura = screen.height;
    //  var ancho = screen.width;

  }

  getExtension(url){
    let arrayImagen = url.split('.');
    let ext = arrayImagen[arrayImagen.length-1];
    // console.log('extension'+ ext)
    return ext;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }

}
