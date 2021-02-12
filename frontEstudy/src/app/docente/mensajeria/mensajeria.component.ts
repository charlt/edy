import { Component, OnInit, Input, OnDestroy, OnChanges, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MensajeriaService } from './services/mensajeria.service';
// import { ActivatedRoute } from '@angular/router';
import { Timing } from "src/app/services/timing";
import { ActivatedRoute } from '@angular/router';

declare var alertify;

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.scss']
})
export class MensajeriaComponent implements OnInit, OnChanges, OnDestroy {

  title: string;
  jwt;
  idPersona;
  idRol;
  texto;
  mensaje;
  interval: any;

  itemsPerPage: number = 20;
  totalItems: number;
  page: number = 1;
  previousPage: number = 1;
  showPage: number;
  bandera: boolean = false;

  muestraCheckbox = true;
  visto
  cambioCheck;

  @Input() idMateria;
  @Input() activo;
  @Output() sucessEvent = new EventEmitter<any>();



  constructor(
    private _usuarioService: UsuarioService,
    private _mensajeriaService: MensajeriaService,
    private route: ActivatedRoute,
  ) {
    this.title = 'Mensajeria';
    this._usuarioService.pushBreadcum(this.title, "", 2);
    let rol = this._usuarioService.getRol();
    this.idRol = rol.rol_id;
    this.jwt = this._usuarioService.getJWT();
    let identity = this._usuarioService.getIdentity();
    this.idPersona = identity.persona_id;
  }

  ngOnChanges() {
    if (this.bandera) {
      this.inicia(0);
    }
  }

  ngOnInit() {
    if (!this.idMateria) {
      this.idMateria = this.route.snapshot.paramMap.get('id');
    }
    // if (this.route.snapshot.paramMap.get('id')) {
    //   this.idMateria = parseInt(this.route.snapshot.paramMap.get('id'));        
    // }else {
    //   this.idMateria = parseInt(this.idMateria);
    // }    
    this.inicia(1);
    this.bandera = true;
  }

  inicia(tipo) {
    let id = 0;
    this._mensajeriaService.getTotalMensajes(this.jwt, this.idMateria).subscribe(response => {
      if (response && response['status']) {
        this.totalItems = response['numero_mensajes'];
        if (!this.mensaje || this.activo) {
          if (tipo == 1) {
            let modulo = this.totalItems % this.itemsPerPage;
            let pages = (this.totalItems / this.itemsPerPage).toString();
            if (modulo == 0) {
              this.showPage = parseInt(pages);
            } else {
              this.showPage = parseInt(pages) + 1;
            }
          }
          this.consulta(id);
        }
      }
    }, error => {
      console.log(<any>error);
    })
  }

  cambiaVistoMensaje() {
    if (this.visto) this.visto = 1;
    else if (!this.visto) this.visto = 0
    this._mensajeriaService.cambiaVisto(this.idRol, this.idMateria, this.visto, this.cambioCheck).subscribe(
      response => {
        if (response && response['status']) {
          this.cambioCheck = this.cambioCheck++;
          alertify.success(response['msg']);
        }

        if (this.cambioCheck >= 1) {
          this.cambioCheck = 0;
        } else if (this.cambioCheck == 0) {
          this.cambioCheck = 1
        }
        // this.consultaMensajesRetro();
      });
  }

  consulta(id) {
    let inicio = (this.showPage - 1) * this.itemsPerPage;
    let final = 20;
    this._mensajeriaService.consulta(this.idMateria, this.jwt, inicio, final).subscribe(
      response => {
        if (response && response['status']) {
          if (id != 2) {
            if (!this.mensaje) {
              this.mensaje = response['mensajes'];
              // this.validaMensajeLeido();
            }
            this.mensaje.forEach(function (mensaje) {
              mensaje.fecha_creacion = new Date((mensaje.fecha_creacion) * 1000);
            });
            if (this.mensaje && this.mensaje.length < response['mensajes'].length) {
              let lastIndex = this.mensaje.length;
              for (let i = lastIndex; i < response['mensajes'].length; i++) {
                this.mensaje.push(response['mensajes'][i]);
              }
            }
          } else {
            this.mensaje = response['mensajes'];
            // this.validaMensajeLeido();
          }
        } else {
          this.mensaje = null;
        }
        if (this.activo) {
          if (id == 0) {
            this.interval = setInterval(() => {
              this.consulta(1);
            }, Timing.mensajeria);
          }
        } else {
          clearInterval(this.interval);
        }
        this.validaMensajeLeido();
      });
  }

  validaMensajeLeido() {
    let mensajesTemp = [];
    this.mensaje.forEach(_mensaje => {
      if (_mensaje.visto == 0 && _mensaje.origen != this.idRol) { //revisa cuantos no vistos hay 
        mensajesTemp.push(_mensaje)
      }
    });
    console.log(mensajesTemp);
    if (mensajesTemp.length == 0) {
      this.cambioCheck = 0;
    } else {
      this.cambioCheck = mensajesTemp.length;
    }

    let tamMensajes = this.mensaje.length;
    if (this.mensaje[tamMensajes - 1]['origen'] == this.idRol) {
      this.muestraCheckbox = false;
    } else {
      if (this.mensaje[tamMensajes - 1]['visto'] == 1) { this.visto = 1 }
      else { this.visto = 0 }
    }

    console.log(this.muestraCheckbox);

  }

  enviar(texto) {
    if (texto != undefined) {
      if (texto != '') {
        this._mensajeriaService.enviar(this.idPersona, this.idMateria, this.texto, this.idRol, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.texto = "";
              this.sucessEvent.emit(true);
              this.muestraCheckbox = false;
              this.cambioCheck = this.cambioCheck++;
              this.visto = 0
              if (!this.mensaje) {
                this.inicia(1);
              } else {
                this.consulta(1);
              }
              // this._mensajeriaService.consulta(this.idMateria,this.jwt,inicio,final).subscribe(
              //   response =>{
              //     if(response && response['status']){
              //       this.mensaje = response['mensajes'];
              // }
              // })
            } else {
              alertify.error('Error al enviar').dismissOthers();
            }
          }, error => {
            console.log(error)
          }
        );
      }
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      if (page > this.previousPage) {
        this.showPage = (this.showPage - page) + this.previousPage;
      } else {
        this.showPage = (this.showPage + this.previousPage) - page;
      }
      this.previousPage = page;
      this.consulta(2);
    }
  }

}
