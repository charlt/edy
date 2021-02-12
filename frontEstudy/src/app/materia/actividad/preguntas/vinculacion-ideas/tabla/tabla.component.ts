import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VinculacionIdeasService } from '../../../services/vinculacion-ideas.service';
import { TranslateService } from '@ngx-translate/core';
import { GLOBAL} from 'src/app/services/global';
import html2canvas from 'html2canvas';

declare var alertify: any;

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  jwt: string;
  elementos: any;
  categorias: any;
  idRespuesta;

  respuestas = [];
  respuestaFiltrada;
  conclusion: any;
  size;
  sizeR;

  rol: any;
  url: string;
  imgURL: string;
  
  @Input() respuesta;
  @Input() idMateriaFechaActividad;
  @Input() edicion;
  @Output() stepCC = new EventEmitter();

  constructor(
    private _vinculacionIdeasService: VinculacionIdeasService,
    private _usuarioService: UsuarioService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();

    this.idRespuesta = this.respuesta.respuesta_id;
    this.conclusion = this.respuesta.conclusion;

    this.url = GLOBAL.urlAssets;
    this.jwt = this._usuarioService.getJWT();
    this.rol = this._usuarioService.getRol();
    if (this.rol.url_logo_institucion) {
      this.imgURL = this.url + this.rol.url_logo_institucion;
    }else{
      this.imgURL = this.url + '/assets/institucion/0/imagen_perfil/default.png';
    }
    // this.consulta(); 
    if (this.respuesta) {
      if (this.respuesta.elementos) this.elementos = this.respuesta.elementos;
      if (this.respuesta.categorias) this.categorias = this.respuesta.categorias;
      if (this.respuesta.respuestas) this.respuestas = this.respuesta.respuestas;
      if (!this.respuesta.elementos || !this.respuesta.categorias) this.consulta();
    }

    setTimeout(() => {
      if (this.edicion == 1) {
        this.ajustar();
      }
    }, 1000); 
       
  }

  consulta(){
    this._vinculacionIdeasService.consultaElemento(1, this.idRespuesta, this.jwt).subscribe(
      response =>{        
        if (response && response['status']) {
          this.elementos = response['elementos'];
          this._vinculacionIdeasService.consultaCategoria(1, this.idRespuesta, this.jwt).subscribe(
            response =>{              
              if (response && response['status']) {
                this.categorias = response['categorias']; 
                // this.consultaDatos();
                setTimeout(() => {
                  if (this.edicion == 1) {
                    this.ajustar();
                  }
                }, 1000); 
              }
            },error =>{
              console.log(<any>error)
            });    
        }
      },error =>{
        console.log(<any>error)
    }); 
  }

  consultaDatos(){
    this._vinculacionIdeasService.consultaRespuestas(1,this.idRespuesta,this.idMateriaFechaActividad, this.jwt).subscribe(
      response =>{        
        if (response && response['status']) {
          this.respuestas = response['respuesta'];    
        }
      },error =>{
        console.log(<any>error)
      }); 
  }

  ajustar(): void {
    let td = document.getElementById("tdConclusiones_" + this.idRespuesta).offsetHeight;    
    if (td == 0) {
      setTimeout(() => {
        this.ajustar();
      }, 1000);
    }else {
      let height = td - 25;
      let textArea = document.getElementById('textArea_' + this.idRespuesta);
      textArea.style.height = height + "px";
    }
  }
  
  enviarRespuestas( id_cat, id_elem, evt: any){
    let respuesta = evt.target.value;
    let dbRespuesta, bandera = 0;
    let texto = this.getTexto(id_cat, id_elem)
    if (texto) {
      dbRespuesta = texto.respuesta;
      if (respuesta === dbRespuesta) {
        bandera = 0;
      }else{
        bandera = 1;
      }
    }else{
      bandera = 1;
    }
  
    if (respuesta.length > 0 && bandera == 1) {
      let datos;
      let elementoRespuesta;
      let idRespuestaFinal = null;

        datos = [{id_pregunta: this.idRespuesta, id_elemento: id_elem, id_categoria: id_cat, 
                respuesta: respuesta}];
        elementoRespuesta = this.getTexto(id_cat, id_elem);
        if(elementoRespuesta){
          idRespuestaFinal = elementoRespuesta.respuesta_final_id;
        }
      
      this._vinculacionIdeasService.enviarRespuesta(1, datos, this.jwt, idRespuestaFinal).subscribe(
        response => {          
          if (response && response['status']) {
            this.consultaDatos();
            alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
          }
        },error => {
          console.log(<any>error)
        });
    }
  }

  enviarConclusion(evt: any){
    let respuesta = evt.target.value;
    let dbRespuesta, bandera = 0;
    
    if (respuesta.length > 0 && respuesta != this.conclusion) {
      this._vinculacionIdeasService.editaConclusion( respuesta, this.idMateriaFechaActividad, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            this.conclusion = respuesta;
            alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
          }
        },error => {
          console.log(<any>error)
        });
    }    
  }

  getTexto(id_cat, id_elem){
    this.respuestaFiltrada = this.respuestas.filter(res => 
      res.categoria_id == id_cat && res.elemento_id == id_elem);

    if (this.respuestaFiltrada[0]){
      return this.respuestaFiltrada[0];  
    }else{
      return false;
    }
  }

  eliminarRespuesta(){
    alertify.confirm('Borrar cuadro comparativo', this.translate.instant('¿Desea eliminar el cuadro comparativo?'),
    function(){
      this._vinculacionIdeasService.borrar(1,this.idRespuesta, this.idMateriaFechaActividad ,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success('Cuadro comparativo eliminado correctamente').dismissOthers();
              this.stepCC.emit(0);
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  descargaImagen(){
    var data = document.getElementById('tablaCC_' + this.idRespuesta); 
    var idImage = 'urlCC_' + this.idRespuesta;
    window.scrollTo(0,0);
    html2canvas(data, {
      allowTaint: true,
      "logging": true,
      useCORS: true,
      onclone: function (clonedDoc) {
        clonedDoc.getElementById(idImage).style.display = 'block';
      },
      width: data.offsetWidth,
      height: data.offsetHeight + 80
    }).then(canvas => {  
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "cuadro_comparativo.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }
  
}
