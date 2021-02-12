import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { TranslateService } from '@ngx-translate/core';
import { GrupoService } from '../service/grupo.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { log } from 'console';


declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  public title: string;
  public search;

  jwt: string;
  grupos;
  ciclos;
  consultaInicial = 0;
  tipoAdmin;
  tipoConsulta = [
    { value: 1, label: 'Todos' },
    { value: 2, label: 'Ciclo', funcion: 'consultaCiclo', variable: 'ciclo', descripcion: 'ciclo_desc', valor: 'ciclo_id' },
    { value: 3, label: 'Campus', funcion: 'consultaCampus', variable: 'campus', descripcion: 'campus', valor: 'campus_id' },
    { value: 4, label: 'Asignatura', funcion: 'consultaAsignaturaTabla', variable: 'Asignaturas', descripcion: 'asignatura', valor: 'asignatura_id' },
    { value: 5, label: 'Grado' }
  ];
  formConsulta: FormGroup;
  Selects: any;
  datosSelect: any;
  tipo: any;
  tipoForm = 1;
  bandera: boolean = false;
  id_grupo;
  grupoForm: FormGroup;
  ordenJerarquico;
  bloquea = false;

  selectedIndex;
  grupoSeleccionado;
  indexGrupo;

  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private translate: TranslateService,
    private _gruposService: GrupoService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.title = 'Consulta de grupos';
    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  get f() { return this.grupoForm.controls; }


  ngOnInit() {
    this.consultaCatCiclo();
    this.formConsulta = this.formBuilder.group({
      busqueda: [1]
    })

    this.grupoForm = this.formBuilder.group({
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      ciclo: ['', Validators.required],
      numMateria: [''],
      validacionReprobadas: ['']
      // numeroAlumn: ['', Val,idators.required],
    });

    this.setValueChanges();
    let identity = this._usuarioService.getIdentity();
    if (identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;;
    /*this._catalogoService.consultaCiclo().subscribe(
  response =>{
      if(response && response['status']){
          this.ciclos = response['ciclo'];
      }
  },error =>{
    console.log(<any>error)
  });*/
    this.consultaGrupos();
  }

  consultaCatCiclo() {
    this._catalogoService.consultaCiclo().subscribe(
      response => {
        if (response && response['status']) {
          this.ciclos = response['ciclo'];
        }
      }, error => {
        console.log(<any>error)
      });
  }

  consultaGrado(id_plan, orden_jerarquico_id) {
    this._catalogoService.consultaGrado(id_plan).subscribe(
      response => {
        if (response && response['status']){
          let orden = response['ordenJerarquico'];
          let tam = orden.length;
          this.ordenJerarquico = orden[tam-1];
          
          if (orden_jerarquico_id == this.ordenJerarquico.orden_jerarquico_id) {
            alertify.error('Este grupo no se puede transferir a un grado mayor');
            this.bloquea = true;
          }
        }
      }, error => {
        console.log(<any>error)
      });
  }


  enviarInformacion(){
    this.bloquea=true;
    if (this.tipoForm == 2) {
      this.grupoForm.controls.clave.setValidators(Validators["null"])
      this.grupoForm.controls.clave.updateValueAndValidity();
      this.grupoForm.controls.nombre.setValidators(Validators["null"])
      this.grupoForm.controls.nombre.updateValueAndValidity();
    }
    if (this.grupoForm.invalid) {
      Object.keys(this.grupoForm.controls).forEach(controlKey => {
        this.grupoForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this._gruposService.tranfiereGrupo(this.grupoForm, this.id_grupo, this.tipoForm).subscribe(
      response => {
        if (response && response['status']){
          this.bloquea = false;

          this.grupos[this.selectedIndex].situacion_grupo_id = 5;
          
          this.modalService.dismissAll();
          alertify.success(response['msg']);
        }else{
          alertify.error(response['msg']);
          this.bloquea = false;
        }
      }, error => {
        console.log(<any>error)
      });
  }

  get fc() { return this.formConsulta.controls }

  setValueChanges() {
    this.formConsulta.get('busqueda').valueChanges.subscribe(tipo => {
      this.bandera = false;
      this.tipo = tipo;
      this.grupos = null;
      if (tipo == 1 || tipo == 5) {
        if (this.formConsulta.get('filtro')) this.formConsulta.removeControl('filtro');
      }
      if (tipo != 1 && tipo != 5) {
        if (this.formConsulta.get('carrera_id')) this.formConsulta.removeControl('carrera_id');
        if (this.formConsulta.get('plan_estudio_id')) this.formConsulta.removeControl('plan_estudio_id');
        if (this.formConsulta.get('plan_orden_id')) this.formConsulta.removeControl('plan_orden_id');

        if (!this.formConsulta.get('filtro')) {
          this.formConsulta.addControl('filtro', new FormControl(''));
          this.formConsulta.get('filtro').valueChanges.subscribe(filtro => {
            if (filtro != '') this.consultaGrupos(this.tipo, filtro);
          });
        } else {
          this.formConsulta.get('filtro').setValue('');
        }
        this.setSelect(tipo);
      } else if (tipo == 5) {
        setTimeout(() => {
          if (this.formConsulta.get('plan_orden_id')) {
            this.formConsulta.get('plan_orden_id').valueChanges.subscribe(id => {
              if (id != '') this.consultaGrupos(this.tipo, id);
            });
          }
        }, 100);
      } else if (tipo == 1) {
        this.consultaGrupos();
      }
    });
  }

  consultaGrupos(tipo = 1, filtro = '') {
    this._gruposService.consultaGrupoFiltro(tipo, filtro).subscribe(
      response => {
        if (response && response['status']) {
          this.grupos = response['grupos'];
          console.log(this.grupos);
          
        } else {
          this.grupos = null;
        }
        this.bandera = true;
      }, error => {
        console.log(<any>error)
      });
  }

  setSelect(tipo){
    this.Selects = undefined;
    let datos = this.setDatos(tipo);
    this._catalogoService[datos.funcion](this.jwt).subscribe(response =>{            
        if(response && response['status']){
          this.Selects = response[datos.variable];
        }
      },error =>{
        console.log(<any>error)
    });
  }

  setDatos(tipo) {
    let datos = this.tipoConsulta.find(t => t.value == tipo);
    this.datosSelect = {
      label: datos.descripcion, value: datos.valor,
      opcion: (tipo != 4) ? 'un ' + datos.label.toLowerCase() : 'una ' + datos.label.toLowerCase()
    };
    return { funcion: datos.funcion, variable: datos.variable };
  }

  eliminar(id) {
    let index = this.indexGrupo;    
    alertify.confirm(this.translate.instant('MsgEraseGroup'),
      function () {
        this._gruposService.elimina(id, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.modalService.dismissAll();
              this.grupos.splice(index, 1);
              alertify.success(response['msg']);
            }
            else {
              alertify.success(response['msg']);
            }
          }, error => {
            console.log(<any>error)
          });
      }.bind(this),
      function () {
        alertify.error('Operación cancelada');
      });

  }

  guardaIdGrupo(id) {
    if (localStorage.getItem('idGrupo')) localStorage.removeItem('idGrupo');
    localStorage.setItem('idGrupo', id);
  }

  cambiaTipo() {
    if (this.tipoForm == 1) { this.tipoForm = 2 }
    else if (this.tipoForm == 2) { this.tipoForm = 1 }
  }

  transferir(content, id_grupo,grupo,nombreGrupo,i){
    this.id_grupo = id_grupo;
    this.grupoForm.controls.clave.setValue(grupo);
    this.grupoForm.controls.nombre.setValue(nombreGrupo);

    this.selectedIndex = i;

    this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' });
  }

  close() {
    this.modalService.dismissAll();
  }

  mostrarGrupo(modal, grupo, i) {
    this.indexGrupo = i;
    this.grupoSeleccionado = grupo;
    this.modalService.open(modal, { size: 'lg'});
  }
}
