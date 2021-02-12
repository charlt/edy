import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatriculacionServiceService } from './services/matriculacion-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { EncuestaService } from '../encuesta/services/encuesta.service';
import { GrupoService } from '../grupo/service/grupo.service';
import { AspiranteService } from '../aspirante/services/aspirante.service';

declare var alertify;

@Component({
  selector: 'app-matriculacion',
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.scss']
})
export class MatriculacionComponent implements OnInit {
  title;
  grupos;
  campus;
  id_aspirante;
  idOrdenJerarquico;
  matriculacionForm: FormGroup;
  carrera;
  loading;
  @Input() switchForm: FormGroup;

  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _matriculaService: MatriculacionServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private _catalogoService: CatalogoService,
    private _encuestaService: EncuestaService,
    private _aspiranteService: AspiranteService
  ) {
    this.title = 'Matriculación de aspirante';
    this._usuarioService.pushBreadcum(this.title, '', 2);
  }

  get f() { return this.matriculacionForm.controls; }

  ngOnInit() {
    this.id_aspirante = this.route.snapshot.params['id'];
    this.consultaCampus();

    this.matriculacionForm = this.formBuilder.group({
      grupo: [''],
      matricula: [''],
      campus: [false],
      check: [false],
      checkMatricula: [false],
      selectCampus: []
    });

    this._aspiranteService.consultaEspecifica(this.id_aspirante).subscribe(
      response=>{
        if(response && response['status']){
          this.carrera = response['aspirante'].carrera;
        }
      },error=>{
        console.log(error)
      }
    )
  }

  // guardaAlumnoGrupo(){
  //   let id_grupo = this.matriculacionForm.get('grupo').value;
  //   this._grupoService.agregaAlumnoGrupo(this.id_aspirante, id_grupo, '').subscribe(response => {
  //     if (response && response['status']){
  //       alertify.success(response['msg']);
  //     }else{
  //       alertify.error(response['msg']);
  //     }
  //   },error =>{
  //     console.log(<any>error);
  //   });
  // }

  obtieneGrado(event) {
    this.grupos = null;
    this.idOrdenJerarquico = event.idOrdenJerarquico;
    this._encuestaService.consultaGrupo(this.idOrdenJerarquico).subscribe(response => {
      if (response && response['status']){
        this.grupos = response['grupos'];
      }else{
        this.grupos = null;
      }
    },error =>{
      console.log(<any>error);
    });
  }

  enviarInformacion(){
    this.loading = true;
    if (this.matriculacionForm.invalid) {
      Object.keys(this.matriculacionForm.controls).forEach(controlKey => {
        this.matriculacionForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    if (!this.matriculacionForm.get('check').value) {
      this._matriculaService.guardaMatriculacion(this.id_aspirante, this.matriculacionForm).subscribe(
        response => {
          if (response && response['status']){
            if (this.matriculacionForm.get('grupo').value && this.matriculacionForm.get('check').value){
              this._agregaAlumno();
              // this.guardaAlumnoGrupo();
            }
            this.cambiaEstatusAspirante();
            this.router.navigate(['admin/aspirante']);
            alertify.success(response['msg']);
          } else {
            alertify.error(response['msg']);
          }
        }, error => {
          console.log(<any>error)
        });
    }else{
      let guarda;
      let _grupo = null;
      if (this.matriculacionForm.get('grupo').value){
        _grupo = this.matriculacionForm.get('grupo').value;
        this.grupos.forEach(grupo => {
          if (_grupo == grupo.grupo_id){
            if ( grupo.orden_jerarquico_id == 1) {
              guarda = true;
            }else{
              guarda = false;
            }
          }
        });
      }else{
        if (this.idOrdenJerarquico == 1) {
          guarda = true;
        }else{
          alertify.error('Selecciona primer grado')
        }
      }
  
      if (guarda) {
        this._matriculaService.guardaMatriculacion(this.id_aspirante, this.matriculacionForm).subscribe(
          response => {
            if (response && response['status']){
              if (this.matriculacionForm.get('grupo').value && this.matriculacionForm.get('check').value){
                this._agregaAlumno();
                // this.guardaAlumnoGrupo();
              }
              this.cambiaEstatusAspirante();
              alertify.success(response['msg']);
            } else {
              alertify.error(response['msg']);
            }
          }, error => {
            console.log(<any>error)
          });
      } else if(_grupo && guarda){
        alertify.error('Solo puedes seleccionar grupos de primer grado ');
      }
    }



  }

  _agregaAlumno() {
    this._matriculaService.agregaAlumno(this.id_aspirante, this.matriculacionForm).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg']);
          this.cambiaEstatusAspirante();
          this.router.navigate(['admin/aspirante']);
        } else {
          alertify.error(response['msg']);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaCampus(){
      this._catalogoService.consultaCampus('').subscribe(
        response => {
          if (response && response['status']) {
            this.campus = response['campus']
          }
        }, error => {
          console.log(<any>error)
        });
  }

  cambiaEstatusAspirante(){
    this._aspiranteService.editaEstatusAspirante(this.id_aspirante, 2).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg']);
          this.loading = false;
        }else{
          alertify.success(response['msg']);
          this.loading = false;
        }
      }, error => {
        console.log(error)
      }
    )
  }
}
