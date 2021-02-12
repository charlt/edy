import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AdminExpedienteService } from '../admin-expediente.service';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify;
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  title;
  alumnos;
  carreras;
  expediente;
  documentos;
  tipoCarrera ="";
  documentos_alumno = [];
  documentos_faltantes = [];

  tipoBusqueda = "";
  idDocumento = "";
  muestraTabla = false;

  constructor(
    private _usuarioService: UsuarioService,
    private _adminExpedienteService: AdminExpedienteService,
    private _catalogoService: CatalogoService
  ) {
    this.title = " Consulta expediente"
    this._usuarioService.pushBreadcum(this.title, '', 1);
  }

  ngOnInit() {
    this._adminExpedienteService.catalogos().subscribe(
      response =>{
        if(response && response['status']){
          this.documentos = response['documento'];
        }
      },error=>{
        console.log(error)
      }
    )
    this.consultaCarrera();
  }

  consultaCarrera(){
    this._catalogoService.consultaCarreraAspirantes().subscribe(
      response =>{
        if(response && response['status']){
          this.carreras= response['carreras'];
        }
      },error=>{
        console.log(error)
      }
    )
  }

  consultaExpediente(){
    this.muestraTabla = true
    this._adminExpedienteService.consulta(this.tipoBusqueda,this.idDocumento).subscribe(
      response => {
        // console.log(response);
        if (response && response['status']) {
          let _doc = response[0]; // documentos totales
          let expediente = response['expediente'];
          let _alumnos
          // console.log(this.tipoCarrera);
          if(this.tipoCarrera){
            this.alumnos =[];
            _alumnos = response[1];
            _alumnos.forEach(alumno => {
              if(alumno.carrera_id == this.tipoCarrera){
                this.alumnos.push(alumno)
              }
            });
          }else{
            this.alumnos = response[1]; // alumnos y sus faltantes
          }
            if (this.alumnos){
            this.alumnos.forEach(alumno => {
              alumno.pendientes = []; //documentos pendientes alumno
              alumno.archivos = []; 
              expediente.forEach(exp => {
                if (exp.aspirante_id == alumno.aspirante_id) { //alumno => aspirante
                  const encontrados = _doc.find(id => id.documento_id == exp.documento_id); // encuentra los del alumno
                  alumno.archivos.push(encontrados);
                }
              });
            });
            this.alumnos.forEach(_alumno => {
                _doc.forEach(doc => {
                  let busqueda = _alumno.archivos.indexOf(doc)
                  if(busqueda == -1){
                  _alumno.pendientes.push(doc)
                  }
                });
            });
          }else{
            this.alumnos.forEach(_alumno => {
              _doc.forEach(doc => {
                let busqueda = _alumno.archivos.indexOf(doc)  
                _alumno.pendientes.push(doc) 
              });
            });
          }
        }else{
          this.alumnos=null;
        }
      }, error => {
        console.log(<any>error)
      });
      // console.log(this.alumnos);
  }

  buscar(){
    if(this.tipoBusqueda == "" && this.idDocumento == ""){
      alertify.error('Selecciona el tipo de busqueda');
    }else{

        this.consultaExpediente()

    }
  }

}
