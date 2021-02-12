import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CalendarioService } from 'src/app/components/calendario/calendario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  cicloForm: FormGroup;
  idCiclo: any;
  catCiclos: any;
  tipoForm: number;

  formCalendario: FormGroup;
  Eventos: any;
  titulo: string;
  edicion: boolean = false;
  suscripcion: Subscription;
  cargando: boolean = false;

  evento: any;

  constructor(
    private formBuilder: FormBuilder,
    private _catalogoService: CatalogoService,
    private _modalService: NgbModal,
    private _calendarioService: CalendarioService
  ) { }

  ngOnInit() {

    this._catalogoService.consultaCiclo().subscribe(response => {
      if (response && response['status']) {
        this.catCiclos = response['ciclo'];
      }
    }, error => {
      console.log(<any>error);
    });

    this.cicloForm = this.formBuilder.group({
      ciclo_id: ['', Validators.required]
    });

    this.cicloForm.get('ciclo_id').valueChanges.subscribe(value => {
      this.idCiclo = value;
    });
    
  }

  openModal(modal, tipo) {
    this.tipoForm = tipo;
    this.formCalendario = this.Eventos = this.evento =undefined;
    this.edicion = false;
    let size: NgbModalOptions = {size: 'lg'};

    if (this.tipoForm == 1) {
      this.titulo = 'Agregar evento';
      this.setFormulario();
    }else if (this.tipoForm == 0) {
      this.cargando = true;
      size['windowClass'] = 'modal-xl';
      this.titulo = 'Consulta de eventos';
      this._calendarioService.consultaEventos(this.idCiclo).subscribe(response => {            
        if (response && response['status']) {
          this.Eventos = response['eventos'];          
        }
        this.cargando = false
      }, error => {
        console.log(<any>error);
      });
    }
    this._modalService.open(modal, size);
  }

  enviaInformacion() {
    let form = JSON.parse(JSON.stringify(this.formCalendario.value));
    if (!form.fecha_fin) form['fecha_fin'] = form.fecha;
    form = Object.entries(form);

    this._calendarioService.guardaEvento(form, this.evento? this.evento.evento_id: null).subscribe(response => {
      if (response && response['status']) {
        alertify.success(response['msg']).dismissOthers();
        this._modalService.dismissAll();
        let id_ciclo = this.idCiclo;
        this.idCiclo = 0;

        setTimeout(() => {
          this.idCiclo = id_ciclo;
        }, 2);
      }
    }, error => {
      console.log(<any>error);
    });    
  }

  setFormulario(evento = null) {

    if (evento) {
      var inicio = evento['fecha_inicio'].split('-');
      var fin = evento['fecha_fin'].split('-');

      var fechaInicio = new Date(inicio[0], parseInt(inicio[1]) - 1, inicio[2]);
      var fechaFin = new Date(fin[0], parseInt(fin[1]) - 1, fin[2]);      
    }
    
    if (this.suscripcion) this.suscripcion.unsubscribe();
    this.formCalendario = this.formBuilder.group({
      ciclo_id: [this.idCiclo, Validators.required],
      fecha: [evento? evento.fecha_inicio: '', Validators.required],
      nombre: [evento? evento.evento_nombre: '', Validators.required],
      descripcion: [evento? evento.evento_desc: '', Validators.required],
      color: [evento? evento.color: '#00a2ff', Validators.required],
      checkbox_fin: [(evento? (fechaFin > fechaInicio)? true : false : false)]
    });

    if (evento && fechaFin > fechaInicio) {
      this.formCalendario.addControl('fecha_fin', new FormControl(evento.fecha_fin, Validators.required));
    }

    this.suscripcion = this.formCalendario.get('checkbox_fin').valueChanges.subscribe(value => {
      if (value) {
        if (!this.formCalendario.get('fecha_fin')) 
          this.formCalendario.addControl('fecha_fin', new FormControl('', Validators.required));
      }else {
        if (this.formCalendario.get('fecha_fin')) 
          this.formCalendario.removeControl('fecha_fin');
      }
    });
  }

  setEdicion(evento) {
    this.evento = evento;
    this.edicion = true;
    this.setFormulario(evento);
  }

  get fC() { return this.formCalendario.controls }

  eliminar(evento, index) {
    alertify.confirm('Eliminar evento', `¿Deseas eliminar el evento: ${evento.evento_nombre}?`,
      function () {
        this._calendarioService.eliminaEvento(evento.evento_id, this.jwt).subscribe(
          response => {
            if (response && response['status']) {
              this.Eventos.splice(index, 1);
              if (this.Eventos.length == 0) this.Eventos = undefined;
              let id_ciclo = this.idCiclo;
              this.idCiclo = 0;

              setTimeout(() => {
                this.idCiclo = id_ciclo;
              }, 2);
              alertify.success(response['msg']).dismissOthers();
            }else {
              alertify.error(response['msg']).dismissOthers();
            }
          }, error => {
            console.log(<any>error)
          });
      }.bind(this),
      function () {
        alertify.error('Cancelado').dismissOthers();
      }).set('labels', { ok: 'Sí', cancel: 'No' });
  }

  ngOnDestroy() {
    if (this.suscripcion) this.suscripcion.unsubscribe();
  }

}
