import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from '../services/asignatura.service';
import { GLOBAL }  from '../../../services/global';

declare var alertify;


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {
  title: any;
  jwt;
  url;
  asignatura;
  idAsignaturaSelected;
  asignaturaSelect;
  imgURL;
  imgURLPrevia;
  contenidoPdf;
  @Input() id_asignatura;
  @Input() tipo;


  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _asignaturaService: AsignaturaService
    ){
      this.title = "Editar asignatura"
      this._usuarioService.pushBreadcum(this.title,'',2);
      this.url = GLOBAL.urlAssets;
     }

  ngOnInit() {
    this.jwt = '';

    if (this.tipo == 1) {
      this.idAsignaturaSelected = this.id_asignatura;
    }else{
      this.idAsignaturaSelected = this.route.snapshot.paramMap.get('id');
    }
    this.asignaturaSelect = this._usuarioService;
    this.consultaAsignaturas();
  }

  consultaAsignaturas(){
    this._asignaturaService.consultaEspecificaAsign(this.jwt , this.idAsignaturaSelected).subscribe(
      response =>{
          if(response && response['status']){
            this.asignatura = response['asignatura'];
            if(this.asignatura.url_imagen)
            this.imgURL =this.url + this.asignatura.url_imagen;
            if (this.asignatura.url_imagen_previa)
              this.imgURLPrevia = this.url + this.asignatura.url_imagen_previa;
          }
      },error =>{
        console.log(<any>error)
      });
  }

  guardarPdf(){
    this._asignaturaService.guardaContenido(this.contenidoPdf, this.idAsignaturaSelected).subscribe(
      response =>{
          if(response && response['status']){
           alertify.success(response['msg']).dismissOthers();
           this.contenidoPdf = ''
           this.consultaAsignaturas();
          }
        else{
          alertify.error(response['msg']).dismissOthers();
        }
      },error =>{
        console.log(<any>error)
      });
  }

  eliminarArchivo(url_contenido) {
    alertify.confirm('', '¿Deseas eliminar el contenido?', function(){
      this._asignaturaService.eliminaContenido(url_contenido, this.idAsignaturaSelected).subscribe(
        response =>{          
          if(response && response['status']){
           alertify.success(response['msg']).dismissOthers();
           this.contenidoPdf = ''
           this.consultaAsignaturas();
          }else{
            alertify.error(response['msg']).dismissOthers();
          }
        },error =>{
          console.log(<any>error)
      });
      }.bind(this),
      function(){
          alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});  
  }

}
