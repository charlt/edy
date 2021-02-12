import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VinculacionIdeasService } from '../../../services/vinculacion-ideas.service';
import { TranslateService } from '@ngx-translate/core';
import { GLOBAL} from 'src/app/services/global';

import html2canvas from 'html2canvas';

declare var alertify: any;

@Component({
  selector: 'diagrama',
  templateUrl: './diagrama.component.html',
  styleUrls: ['./diagrama.component.scss']
})
export class DiagramaComponent implements OnInit {

  jwt: string;
  bluePositions;
  greenPositions;
  redPositions;
  numCategorias;
  rows;
  cols;
  divSize;
  text;
  elementos;
  categorias;
  nuevo: boolean = false;
  respuestas: any;
  respuestaFiltrada: any;
  aspectoComun: any;

  rol: any;
  url: string;
  imgURL: string;

  idRespuesta;

  @Input() respuesta;
  @Input() idMateriaFechaActividad;
  @Input() edicion;
  @Output() stepMC = new EventEmitter();

  
  constructor(
    private _usuarioService: UsuarioService,
    private _vinculacionIdeasService: VinculacionIdeasService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {        
    this.idRespuesta = this.respuesta.respuesta_id;
    this.aspectoComun = this.respuesta.aspecto_comun;
    this.url = GLOBAL.urlAssets;
    this.jwt = this._usuarioService.getJWT();
    this.rol = this._usuarioService.getRol();
    if (this.rol.url_logo_institucion) {
      this.imgURL = this.url + this.rol.url_logo_institucion;
    }else{
      this.imgURL = this.url + '/assets/institucion/0/imagen_perfil/default.png';
    }
    if (this.respuesta) {
      if (this.respuesta.elementos) this.elementos = this.respuesta.elementos;
      if (this.respuesta.categorias) {
        this.categorias = this.respuesta.categorias;
        this.numCategorias = this.categorias.length;
        this.getPositions();
      }
      if (this.respuesta.respuestas) this.respuestas = this.respuesta.respuestas;
      if (!this.respuesta.elementos || !this.respuesta.categorias) this.consulta();
    }
  }

  consulta() {
    this._vinculacionIdeasService.consultaElemento(2, this.idRespuesta, this.jwt).subscribe(
      response =>{
        if (response && response['status']) {
          this.elementos = response['elementos'];
          this._vinculacionIdeasService.consultaCategoria(2, this.idRespuesta, this.jwt).subscribe(
            response =>{
              if (response && response['status']) {
                this.categorias = response['categorias'];
                this.numCategorias = this.categorias.length;
                this.getPositions();   
              }
              // this.consultaDatos();                
            },error =>{
              console.log(<any>error)
          });
        }
      },error =>{
        console.log(<any>error)
    }); 
  }

  consultaDatos(){
    this._vinculacionIdeasService.consultaRespuestas(2,this.idRespuesta,this.idMateriaFechaActividad, this.jwt).subscribe(
      response =>{        
        if (response && response['status']) {
          this.respuestas = response['respuesta'];          
        }
      },error =>{
        console.log(<any>error)
    }); 
  }

  getPositions(){
    switch (this.numCategorias) {
      case 2:
        // this.bluePositions = [['70px', '180px'], ['220px', '50px']];
        // this.greenPositions = [['70px', '235px'], ['220px', '365px']];
        // this.redPositions = [['250px', '55px'], ['250px', '360px']];
        this.bluePositions = [['100px', '50px'], ['255px', '50px']];
        this.greenPositions = [['100px', '175px'], ['255px', '175px']];
        this.cols = [47, 47];
        this.rows = 9;         
        this.divSize = [['270px', '140px'], ['270px', '140px']];
        this.text = [460, 460, 460];
        break;
      case 3:
        // this.bluePositions = [['40px', '200px'], ['130px', '60px'], ['290px', '60px']];
        // this.greenPositions = [['40px', '215px'], ['130px', '355px'], ['290px', '350px']];
        // this.redPositions = [['280px', '60px'], ['370px', '205px'], ['280px', '355px']];
        this.bluePositions = [['47px', '100px'], ['185px', '12px'], ['323px', '100px']];
        this.greenPositions = [['47px', '165px'], ['185px', '178px'], ['323px', '165px']];
        this.cols = [40, 54, 40];
        this.rows = 8;
        this.divSize = [['233px', '125px'], ['308px', '125px'], ['233px', '125px']];
        this.text = [350, 460, 350];
        break;
      case 4:
        // this.bluePositions = [['30px', '220px'], ['80px', '105px'], ['195px', '30px'], ['310px', '70px']];
        // this.greenPositions = [['30px', '190px'], ['80px', '305px'], ['195px', '380px'], ['310px', '340px']];
        // this.redPositions = [['240px', '50px'], ['350px', '150px'], ['350px', '265px'], ['240px', '365px']];
        this.bluePositions = [['40px', '120px'], ['147px', '23px'], ['254px', '23px'], ['360px', '120px']];
        this.greenPositions = [['40px', '150px'], ['147px', '177px'], ['254px', '177px'], ['360px', '148px']];
        this.cols = [39, 52, 52, 39];
        this.rows = 6;
        this.divSize = [['227px', '96px'], ['297px', '96px'], ['297px', '96px'], ['227px', '96px']];
        this.text = [250, 340, 340, 250];
        break;
       case 5:
         //this.bluePositions = [['30px', '250px'], ['40px', '150px'], ['115px', '50px'], ['220px', '30px'], ['325px', '80px']];
         //this.greenPositions = [['30px', '165px'], ['40px', '265px'], ['115px', '360px'], ['220px', '390px'], ['325px', '330px']];
         //this.redPositions = [['230px', '30px'], ['340px', '100px'], ['390px', '205px'], ['340px', '310px'], ['230px', '380px']];

         this.bluePositions = [['30px', '195px'], ['185px', '195px'], ['105px', '60px'], ['260px', '60px'], ['335px', '195px']];
         this.greenPositions = [['30px', '178px'], ['185px', '178px'], ['105px', '315px'], ['260px', '315px'], ['335px', '178px']];
         this.bluePositions = [['42px', '111px'], ['125px', '35px'], ['208px', '5px'], ['291px', '35px'], ['374px', '111px']];
         this.greenPositions = [['42px', '140px'], ['125px', '172px'], ['208px', '177px'], ['291px', '172px'], ['374px', '140px']];
         this.cols = [26, 31, 34, 31, 26];
         this.rows = 3;
         this.divSize = [['227px', '80px'], ['297px', '80px'],['320px', '80px'], ['297px', '80px'], ['227px', '80px']];
        this.text = [250, 340,460,340, 250];
         break;
      default:
        break;
    }
  }

  getBluePosition(id, index, tipo){
    let posicion;
    if (id == 0) {
      if (tipo == 'textarea') {
        posicion = {'position': 'absolute','top': this.bluePositions[index][0],'left': this.bluePositions[index][1]};
        return posicion;
      }else if (tipo == 'div') {
        posicion = {'position': 'absolute','top': this.bluePositions[index][0],'left': this.bluePositions[index][1],
                    'width': this.divSize[index][0], 'height': this.divSize[index][1]};
        return posicion;
      }
    }else if (id  == 1) {
      let top = parseInt(this.bluePositions[index][0].split("p")[0]);
      top = top - 20;
      posicion = {'position': 'absolute','top': top + 'px','left': this.bluePositions[index][1]};
      return posicion;
    }

  }

  getGreenPosition(id, index, tipo){
    let posicion;
    if (id == 0) {
      if (tipo == 'textarea') {
        posicion = {'position': 'absolute','top': this.greenPositions[index][0],'left': this.greenPositions[index][1]};
        return posicion;
      }else if (tipo == 'div') {
        posicion = {'position': 'absolute','top': this.greenPositions[index][0],'left': this.greenPositions[index][1],
                    'width': this.divSize[index][0], 'height': this.divSize[index][1]};
        return posicion;
      }      
    }else if (id == 1) {
      let top = parseInt(this.greenPositions[index][0].split("p")[0]);
      top = top - 20;
      posicion = {'position': 'absolute','top': top + 'px','left': this.greenPositions[index][1]};
      return posicion;
    }
  }

  // getRedPosition(index){
  //   let posicion = {'position': 'absolute','top': this.redPositions[index][0],'left': this.redPositions[index][1]};
  //   return posicion;
  // }


  enviarAspectoComun(evt: any){

    let respuesta = evt.target.value;

    if (respuesta.length > 0 && respuesta != this.aspectoComun) {

      this._vinculacionIdeasService.editaAspectoComun( respuesta, this.idMateriaFechaActividad, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            this.aspectoComun = respuesta;
            alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
          }
        },error => {
          console.log(<any>error)
        });
      
    }

    
  }

  enviarRespuestas(id, id_categoria, evt){
    let respuesta = evt.target.value;
    let dbRespuesta, bandera = 0;
    let texto = this.getRespuesta(this.elementos[id].elemento_id, id_categoria)
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
    

    if (respuesta != "" && bandera == 1) {
      let id_elemento, datos, idRespuestaFinal, elementoRespuesta;
        id_elemento = this.elementos[id].elemento_id;
        datos = [{id_elemento: id_elemento, id_pregunta: this.idRespuesta, id_categoria: id_categoria, respuesta: respuesta}];
        elementoRespuesta = this.getRespuesta(id_elemento, id_categoria);
        if (elementoRespuesta) {
          idRespuestaFinal = elementoRespuesta.respuesta_final_id;
        }
      
      
      this._vinculacionIdeasService.enviarRespuesta(2, datos, this.jwt, idRespuestaFinal).subscribe(
        response => {
          if(response && response['status']){
            this.consultaDatos();
            alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
          }else{
            alertify.error('Error al guardar').dismissOthers(); 
          }
        },error => {
          console.log(<any>error)
      });
    }
  }

  getRespuesta(id_elem, id_cat){
    if(this.respuestas){
      this.respuestaFiltrada = this.respuestas.filter(res => 
        res.elemento_id == id_elem && res.categoria_id == id_cat);
      if (this.respuestaFiltrada[0]){
        return this.respuestaFiltrada[0];  
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
    
  eliminarRespuesta(){
    alertify.confirm('Borrar mapa cognitivo', this.translate.instant('¿Desea eliminar el mapa cognitivo?'),
    function(){
      

      this._vinculacionIdeasService.borrar(2,this.idRespuesta,this.idMateriaFechaActividad,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              alertify.success('Mapa cognitivo eliminado correctamente').dismissOthers();
              this.stepMC.emit(0);
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
    window.scrollTo(0,0);
    var data = document.getElementById('tablaMC_' + this.idRespuesta);  
    var idImage = 'urlMC_' + this.idRespuesta;
    html2canvas(data, {
      allowTaint: true,
      "logging": true,
      useCORS: true,
      onclone: function (clonedDoc) {
        clonedDoc.getElementById(idImage).style.display = 'block';
      }
    }).then(canvas => {  
      var link = document.createElement("a");
      link.download = "mapa_cognitivo.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }

}
