import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MateriasExtrasService } from './services/materias-extras.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MateriaService } from 'src/app/services/materia.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { AsignaturaService } from 'src/app/administracion/asignatura/services/asignatura.service';
import { Router } from '@angular/router';

declare var alertify;

@Component({
  selector: 'app-materias-extras',
  templateUrl: './materias-extras.component.html',
  styleUrls: ['./materias-extras.component.scss']
})
export class MateriasExtrasComponent implements OnInit {
  title;
  id_alumno;
  materias;
  _materia
  asignaturas;
  enCurso;
  pendientes;
  acreditadas;
  selectMateria;
  asignaturaPadreId;
  objetivos_desc: SafeHtml;



  constructor(
    private _usuarioService: UsuarioService,
    private _materiasExtraService: MateriasExtrasService,
    private modalService: NgbModal,
    private _materiaService: MateriaService,
    private _sanitizer: DomSanitizer,
    private _asignaturaService: AsignaturaService,
    private _router: Router
  ) {
    this.title = 'Consulta de materias';
    this._usuarioService.pushBreadcum(this.title, '', 1)
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    this.id_alumno = identity.alumno.alumno_id;
    this.consultaMaterias();
  }

  consultaMaterias(){
    this._materiasExtraService.consultaCatalogoCompraAsign(this.id_alumno).subscribe(
      response => {
        if (response && response['status']){
          this.asignaturas = response['asignaturas']
          this.enCurso = response['En curso']
          this.pendientes = response['Pendientes']
          this.acreditadas = response['Acreditadas']
          this.cambiaMaterias(1);
        }else{
          this.materias = null;
        }
      }, error => {
        console.log(error);
      });
  }

  cambiaMaterias(tipo){
    if (tipo == 1)this.materias =  this.asignaturas;
    else if(tipo == 2)this.materias = this.enCurso;
    else if(tipo == 3)this.materias = this.pendientes;
    else if (tipo == 4)this.materias = this.acreditadas;
  }

  seleccionaMateria(content, index){ 
    this.selectMateria = this.materias[index];
    if(this.selectMateria.asignatura_padre_seriacion){
      this.consultaAsignaturaPadre();
    }else{
      this.asignaturaPadreId = null;
    }
    let idMateria = this.selectMateria.materia_id;
    if(idMateria){
      this._materiaService.seleccionaMateria(idMateria,null).then(
        (data:any)=>{
          this._router.navigate(['/materia/']);
        }
      );
    }else{
      this._asignaturaService.consultaEspecificaAsign('', this.selectMateria.asignatura_id).subscribe(
        response =>{
            if(response && response['status']){
              let asignatura = response['asignatura'];
              this.objetivos_desc = this.htmlProperty(asignatura.objetivos_desc);
            }
            this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'});
        },error =>{
          console.log(<any>error)
        });
    }
  }

  consultaAsignaturaPadre(){
    this._asignaturaService.consultaEspecificaAsign('', this.selectMateria.asignatura_padre_seriacion).subscribe(
      response =>{
        if(response && response['status']){
            this.asignaturaPadreId = response['asignatura'];
          }
      },error =>{
        console.log(<any>error)
      });
  }



 
  close() {
    this.modalService.dismissAll();
  }

  htmlProperty(html) : SafeHtml { 
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  habilitar_materia(){
    let idAsignaturaGrupo;
   if(this.selectMateria.grupo){
    idAsignaturaGrupo = this.selectMateria.grupo[0].asignatura_grupo_id;
   }

    this.modalService.dismissAll();

    this._materiasExtraService.habilitarMateria(idAsignaturaGrupo).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          alertify.success(response['msg']);

          let idMateria = response['idMateria']

          this._materiaService.seleccionaMateria(idMateria,null).then(
            (data:any)=>{
              this._router.navigate(['/materia/']);
            }
          );
        }
      },error =>{
        console.log(error)
      }
    )

  }
}
