import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AspiranteService } from '../services/aspirante.service';
import { TranslateService } from '@ngx-translate/core';
import { GLOBAL } from 'src/app/services/global';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title;
  jwt: string;
  aspirantes;
  nombre;
  numAspirantes: number;
  public contenido;
  url = GLOBAL.url;
  aspirantesSolicitud;
  encabezados;
  tablaPrueba;
  table;
  itemsPerPage: number = 50;
  totalItems;
  page: any = 1;
  previousPage: any = 1;
  consultaAspirantes: boolean = false;
  validado;
  tipoConsulta: any = 1;
  selectAspirante;
  carrera_id;
  carreras;
  carreraIdBusqueda = "";
  aspirantesTotales = [];
  estatusAspirantes;
  situacion_aspirante_id = "";
  persona_id;
  indexAspirante;
  estatusPermitido = [];
  fechaInicio = '';
  fechaFin = '';
  muestraFechas = false;
  consultaAnterior;
  searchField: FormControl; 

  @ViewChild('modalCarrera') modalCarrera: ElementRef;
  @ViewChild('modalSituacion') modalSituacion: ElementRef;

  constructor(
    private _usuarioService: UsuarioService,
    private _aspiranteService: AspiranteService,
    private translate: TranslateService,
    private _modalService: NgbModal,
    private _catalogoService: CatalogoService,
    private router: Router
  ) {
    this.title = "Consulta";
    this._usuarioService.pushBreadcum('Aspirantes', '/admin/aspirante', 1);
    this._usuarioService.pushBreadcum(this.title, "", 2);
  }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.consultaCarrerasAspirante();
    this.consultaEstatus();
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.buscaPersona(data);
    });
  }

  consultaCarrerasAspirante() {
    this._catalogoService.consultaCarreraAspirantes().subscribe(
      response => {
        if (response && response['status']) {
          this.carreras = response['carreras'];
          if (sessionStorage.getItem('filtroAspirante')) {
            let filtro = JSON.parse(sessionStorage.getItem('filtroAspirante'));
            this.tipoConsulta = filtro.tipo;
            this.carreraIdBusqueda = filtro.id_carrera;
            this.switchConsulta(this.tipoConsulta);
            sessionStorage.removeItem('filtroAspirante');
          } else {
            this.switchConsulta(1);
          }
        }
      }, error => {
        console.log(error)
      }
    )
  }

  switchFechas() {
    if (this.muestraFechas) {
      this.muestraFechas = false;
      this.fechaInicio = '';
      this.fechaFin = '';
      this.switchConsulta(this.tipoConsulta);
    } else if (!this.muestraFechas) {
      this.muestraFechas = true;
    }
  }

  cambiaEstatusAspirante() {
    this._aspiranteService.editaEstatusAspirante(this.persona_id, this.situacion_aspirante_id).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg']);
          this.aspirantes[this.indexAspirante].situacion_aspirante_id = this.situacion_aspirante_id;
          this._modalService.dismissAll();
          this.estatusAspirantes.forEach(estatus => {
            if (estatus.situacion_aspirante_id == this.situacion_aspirante_id) {
              this.aspirantes[this.indexAspirante].situacion_aspirante_descripcion = estatus.situacion_aspirante_descripcion;
            }
          });
        } else {
          alertify.success(response['msg']);
        }
      }, error => {
        console.log(error)
      }
    )
  }

  generaExcel() {
    window.open(this.url + 'seguimiento/reportes/solicitud_excel.php?jwt=' + this.jwt, "_blank");
  }

  consultatTotalAspirantes(tipo) {
    this._aspiranteService.totalAspirantes(tipo, this.carreraIdBusqueda, this.fechaInicio, this.fechaFin).subscribe(
      response => {
        if (response && response['status']) {
          this.totalItems = response['total'];
        }
      }, error => {
        console.log(error)
      }
    )
  }

  consultaEstatus() {
    this._catalogoService.consultaEstatusAspirante().subscribe(
      response => {
        if (response && response['status']) {
          this.estatusAspirantes = response['estatus'];
          this.estatusAspirantes.splice(0, 1);
          this.estatusAspirantes.splice(3, 1);
        }
      }, error => {
        console.log(error)
      }
    )
  }

  buscaPersona(data) {
    if (this.contenido != "") {
        this._aspiranteService.consultaAspirantes(this.jwt, data, 0, this.itemsPerPage, 1, '', '', '').subscribe(
          response => {
            if (response && response['status']) {
              this.aspirantes = response['aspirante'];
              this.numAspirantes = this.aspirantes.length;
            } else {
              this.aspirantes = [];
              this.numAspirantes = 0;
            }
          }, error => {
            console.log(<any>error)
          });
    } else {
      this.consultaTodos(1);
    }
  }

  eliminar(id, index) {
    alertify.confirm('', '¿Deseas eliminar el aspirante?', function () {
      this._aspiranteService.elimina(this.jwt, id).subscribe(
        response => {
          if (response && response['status']) {
            alertify.success(response['msg']);
            this.aspirantes.splice(index, 1);
          }
          else {
            alertify.success(response['msg']);
          }
        }, error => {
          console.log(<any>error)
        });
    }.bind(this),
      function () {
        alertify.error('Cancelado');
      }).set('labels', { ok: 'Sí', cancel: 'No' });
  }

  cambiaValidador(persona_id, index) {
    let validador = this.aspirantes[index].validado_administrador;
    if (validador == 0) validador = 1
    else if (validador == 1) validador = 0
    this.aspirantes[index].validado_administrador = validador;
    this._aspiranteService.editaValidacion(persona_id, validador).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg']);
          this.totalItems = this.totalItems - 1;
        }
        else {
          alertify.success(response['msg']);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  abreModal(index) {
    this.selectAspirante = "";
    this.selectAspirante = this.aspirantes[index];
    this._modalService.open(this.modalCarrera, { size: 'lg' });
  }

  obtieneCarrera(event) {
    this.carrera_id = event.idCarrera;
  }

  cambiaCarrera() {
    if (!this.carrera_id) {
      alertify.error('Selecciona una carrera');
      return
    }
    this._aspiranteService.editaCarrera(this.selectAspirante.persona_id, this.carrera_id).subscribe(
      response => {
        if (response && response['status']) {
          alertify.success(response['msg']);
          this._modalService.dismissAll();
          this.carrera_id = "";
          this.consultaTodos(this.tipoConsulta);
        }
        else {
          alertify.success(response['msg']);
        }
      }, error => {
        console.log(<any>error)
      });
  }

  switchConsulta(tipoConsulta) {
    if (tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (!this.fechaInicio && !this.fechaFin)) { //todos sin carrera y sin fecha
      this.consultaTodos(tipoConsulta);
    } else if (tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (this.fechaInicio && this.fechaFin)) {//todos con carrera y con fecha
      tipoConsulta = 4;
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (!this.fechaInicio && !this.fechaFin)) {//todos con carrera y sin fecha
      tipoConsulta = 5;
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (this.fechaInicio && this.fechaFin)) {//todos sin carrera y con fecha
      tipoConsulta = 6;
      this.muestraAspirantes(tipoConsulta);
    }

    else if (tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (!this.fechaInicio && !this.fechaFin)) {//validados sin carrera y sin fecha
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (this.fechaInicio && this.fechaFin)) {//validados con carrera y con fecha
      tipoConsulta = 7;
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (!this.fechaInicio && !this.fechaFin)) {//validados con carrera y sin fecha
      tipoConsulta = 8;
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (this.fechaInicio && this.fechaFin)) {//validados sin carrera y con fecha
      tipoConsulta = 9;
      this.muestraAspirantes(tipoConsulta);
    }


    else if (tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (!this.fechaInicio && !this.fechaFin)) {//sin validar sin carrera y sin fecha
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (this.fechaInicio && this.fechaFin)) {//sin validar con carrera y con fecha
      tipoConsulta = 10;
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (!this.fechaInicio && !this.fechaFin)) {//sin validar con carrera y sin fecha
      tipoConsulta = 11;
      this.muestraAspirantes(tipoConsulta);
    } else if (tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (this.fechaInicio && this.fechaFin)) {//sin validar sin carrera y con fecha
      tipoConsulta = 12;
      this.muestraAspirantes(tipoConsulta);
    }


   if(this.consultaAnterior != tipoConsulta){
    this.page = 1;
    this.consultaAnterior = tipoConsulta;
   }
   console.log(this.consultaAnterior, tipoConsulta);




    // console.log(tipoConsulta, this.carreraIdBusqueda);
    // if(tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')){ // todos
    //   this.consultaTodos(tipoConsulta);
    // }else if(tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')) { // validado sin carrera
    //   this.muestraAspirantes(tipoConsulta);
    // }else if(tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')) { // sin validar y sin carrera
    //   this.muestraAspirantes(tipoConsulta);
    // }else if(tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // validado con carrera
    //   tipoConsulta=4;
    //   this.muestraAspirantes(tipoConsulta);
    // }else if(tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // sin validar con carrera
    //   tipoConsulta = 5;
    //   this.muestraAspirantes(tipoConsulta);
    // }else if(tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // todos carrera
    //   tipoConsulta = 6;
    //   this.muestraAspirantes(tipoConsulta);
    // }
  }



  consultaTodos(tipo) { //primer consulta que se hace de todos los aspirantes y trae solo 50 registros
    this.aspirantes = null;
    this.numAspirantes = null;
    this.contenido = null;
    this.consultaAspirantes = true;

    let inicio = (this.page - 1) * this.itemsPerPage;
    this._aspiranteService.consultaAspirantes('', this.contenido, inicio, this.itemsPerPage, tipo, '', '', '').subscribe(
      response => {
        this.consultaAspirantes = false;
        if (response && response['status']) {
          this.aspirantes = response['aspirante'];
          this.numAspirantes = this.aspirantes.length;
          this.consultatTotalAspirantes(tipo)
        } else {
          this.numAspirantes = 0;
          this.totalItems = 0
          this.consultaAspirantes = false;
        }
      }, error => {
        console.log(<any>error)
      });
  }

  muestraAspirantes(tipo) { // trae todos los aspirantes y los guarda en un arreglo 
    // console.log(tipo);
    // if (tipo != 4 ) this.carreraIdBusqueda = "";
    // if (this.tipoConsulta != tipo || this.tipoConsulta == 4) {
    // this.tipoConsulta = tipo;
    this.aspirantes = [];
    // this.tipoConsulta = tipo;
    this.consultaAspirantes = true;

    let inicio = (this.page - 1) * this.itemsPerPage;
    // let fin = inicio + 50;
    if ((tipo == 4 || tipo == 6 || tipo == 7 || tipo == 9 || tipo == 10 || tipo == 12) && (!this.fechaInicio && !this.fechaFin)) {
      return
    }

    this._aspiranteService.consultaAspirantes('', this.contenido, inicio, this.itemsPerPage, tipo, this.carreraIdBusqueda, this.fechaInicio, this.fechaFin).subscribe(
      response => {
        if (response && response['status']) {
          this.consultaAspirantes = false;
          this.aspirantesTotales = response['aspirante'];
          // console.log(this.aspirantesTotales);
          this.aspirantes = response['aspirante'];
          this.numAspirantes = this.aspirantes.length;

          this.consultatTotalAspirantes(tipo)
        } else {
          this.numAspirantes = 0;
          this.totalItems = 0
          this.consultaAspirantes = false;
        }
      }, error => {
        console.log(<any>error)
      });
    // } else {
    //   let inicio = (this.page - 1) * this.itemsPerPage;
    //   let fin = inicio + 50;
    //   console.log(this.page, inicio, fin);
    //   if (this.aspirantesTotales.length < 50) {
    //     console.log(this.aspirantesTotales);
    //     this.aspirantes = [];
    //     this.aspirantes = this.aspirantesTotales.slice(inicio, this.aspirantesTotales.length)
    //     console.log(this.aspirantes);
    //   } else {
    //     console.log('aquí x2');
    //     this.aspirantes = [];
    //     this.aspirantes = this.aspirantesTotales.slice(inicio, fin)
    //     console.log(this.aspirantes);
    //   }
    // }
  }



  matricula_aspirante(id_aspirante, nombre, primer_apellido, index) {
    alertify.confirm('Matriculación de alumno', '¿Deseas matricular al aspirante ' + nombre + ' ' + primer_apellido + '? al hacer esta operación el aspirante desaparecerá de la lista', function () {
      this._aspiranteService.matriculaAspirante(id_aspirante, this.jwt).subscribe(
        response => {
          if (response && response['status']) {
            alertify.success(response['msg']);

            this.aspirantes.splice(index, 1);
          } else {
            alertify.success(response['msg']);
          }
        }, error => {
          console.log(<any>error)
        });
    }.bind(this),
      function () {
        alertify.error('Cancelado');
      }).set('labels', { ok: 'Sí', cancel: 'No' });
  }

  loadPage(page: number) {
    if (page != this.previousPage) {
      this.previousPage = page;
      // if (this.tipoConsulta == 1) {
      //   this.consultaTodos(1);
      // } else {
      //   this.previousPage = page;
      //   console.log(this.tipoConsulta);
      //   this.muestraAspirantes(this.tipoConsulta);
      // }
      this.switchConsulta(this.tipoConsulta);
    }
  }

  setSelectedRol() {
    if (sessionStorage.getItem('selectedRol')) sessionStorage.removeItem('selectedRol');
    sessionStorage.setItem('selectedRol', 'Aspirante');
  }

  setFiltros() {
    let filtro = {
      tipo: this.tipoConsulta,
      id_carrera: this.carreraIdBusqueda
    }
    if (sessionStorage.getItem('filtroAspirante')) sessionStorage.removeItem('filtroAspirante');
    sessionStorage.setItem('filtroAspirante', JSON.stringify(filtro));
    console.log(sessionStorage.getItem('filtroAspirante'));
  }

  muestraModalSituacion(persona_id, situacion_aspirante_id, index) {
    this.estatusPermitido = [];
    this.situacion_aspirante_id = ""
    this.estatusAspirantes.forEach(estatus => {
      if (situacion_aspirante_id == 1 && estatus.situacion_aspirante_id == 3) {
        this.estatusPermitido.push(estatus)
      } else if (situacion_aspirante_id == 3 && estatus.situacion_aspirante_id == 1) {
        this.estatusPermitido.push(estatus)
      }
    });

    console.log(this.estatusPermitido, situacion_aspirante_id, this.estatusAspirantes);

    this.persona_id = persona_id;
    this.indexAspirante = index;
    this._modalService.open(this.modalSituacion, { size: 'sm' });
  }

}
