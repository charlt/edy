import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var alertify: any;

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.scss']
})
export class PorcentajeComponent implements OnInit {

  porcentaje = [];
  suscripcion;
  id_suscripcion;
  title;
  modalTitle = '';
  porcentajeForm: FormGroup;
  seleccionado: any;

  constructor(
    private _pagoService : PagoService,
    private route: ActivatedRoute,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
    this.id_suscripcion  = this.route.snapshot.paramMap.get('id');
    this.title = "Descuentos / recargos";
  }

  ngOnInit() {
    this._pagoService.consultaSuscripcion(this.id_suscripcion).subscribe(
      response =>{
        if(response && response['status']){
          this.suscripcion = response['suscripcion'];
          this.title = this.title + ' de '+this.suscripcion.nombre_suscripcion;
        }else{
          this.suscripcion = null;
        }
          
      },error=>{
        console.log(error)
      }
    );
    this.consultaPorcentajes();
  }

  consultaPorcentajes() {
    this._pagoService.consultaPorcentaje(this.id_suscripcion).subscribe(
      response =>{
        if(response && response['status']){
          this.porcentaje = response['porcentaje'];
        }else{
          this.porcentaje = [];
        }
      },error=>{
        console.log(error)
    });
  }

  open(content, seleccionado = undefined) {   
    this.seleccionado = seleccionado;
    this.modalTitle = 'Nuevo descuento / recargo';
    if (seleccionado) this.modalTitle = 'Editar descuento / recargo';    
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    };

    let s = seleccionado;
    this.porcentajeForm = undefined;
    this.porcentajeForm = this.formBuilder.group({
      tipo: [s? s.tipo_porcentaje: '', Validators.required],
      id_valor: [s? s.valor: '', Validators.required],
      porcentaje: [s? s.porcentaje: '', Validators.required],
      inicio: [s? s.dia_inicio: '', Validators.required],
      fin: [s? s.dia_fin: '', Validators.required]           
    });
    this._modalService.open(content, ngbModalOptions);
  }

  enviaInformacion() {
    let id = 0, porcentaje_pago_id;

    if (this.seleccionado) {
      id = 1;
      porcentaje_pago_id = this.seleccionado.porcentaje_pago_id;
    }
    let form = Object.entries(this.porcentajeForm.value);
    this._pagoService.modificaPorcentaje(this.id_suscripcion, form, id, porcentaje_pago_id).subscribe(response => {
        if (response && response['status']) {
          this._modalService.dismissAll();
          this.consultaPorcentajes();
          alertify.success(response['msg']).dismissOthers();
        }
        else {
          alertify.success(response['msg']).dismissOthers();
        }
      }, error => {
        console.log(<any>error)
    });
  }

  eliminar(id_porcentaje_pago, index) {
    alertify.confirm('Eliminar descuento / recargo', '¿Deseas eliminar el descuento / recargo?',
      function () {
        this._pagoService.eliminaPorcentaje(id_porcentaje_pago).subscribe(response => {
          if (response && response['status']) {
            this.porcentaje.splice(index, 1);
            alertify.success(response['msg']).dismissOthers();
          }
          else {
            alertify.success(response['msg']).dismissOthers();
          }
        }, error => {
          console.log(<any>error)
      });
      }.bind(this),
      function () {
        alertify.error('Cancel');
    });
  }

}
