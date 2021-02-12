import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  
  idAlumno;
  pagos = [];
  title;
  url = GLOBAL.url;
  busqueda = null; 
  estatusSolicitudPago = null;
  searchField: FormControl;
  
  totalItems: number = 0;
  page: number = 1;
  itemsPerPage: number = 50;
  previousPage: any = 1;

  constructor(
    private _pagoService : PagoService,
    private route : ActivatedRoute

  ) { }

  ngOnInit() {
    this.title = "Pagos del alumno";
    this.idAlumno = this.route.snapshot.paramMap.get('id');
    this.searchField = new FormControl();
    // busqueda de datos por input  
    this.searchField.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.busqueda = data;
      this.page = 1;
      this.previousPage = 1;
      this.consulta_pagos(null);
    });

    this.consultaTotalPagos();
    this.consulta_estatus_pagos();
    this.consulta_pagos();

  }

  consultaTotalPagos(){
    // primera consulta
    this._pagoService.getTotalPagos().subscribe(response =>{
      
      if(response && response['status']){
        this.totalItems = parseInt(response['pagos']['total']);        
      }
    },error =>{
      console.log(<any>error)
    });
  }

  consulta_estatus_pagos(){
    this._pagoService.catEstatusSolicitudPago().subscribe(
      response=>{
        if(response && response['status']){
          this.estatusSolicitudPago = response['estatusSolicitudPago']
        }else{
          this.estatusSolicitudPago = [];
        }
      },error=>{
        console.log(error)
    });
  }

  consulta_pagos(idEstatusPago = null, inicio = 0){
    this._pagoService.consultaPagos(this.busqueda, idEstatusPago, inicio, this.itemsPerPage).subscribe(
      response =>{
        if(response && response['status']){
          this.pagos = response['pagos'];     
        }else{
          this.pagos = [];
        }
      },
      error =>{
        console.log(error);
    });
  }
  
  eliminar(id_solicitud_pago, index) {    
    alertify.confirm('Eliminar pago', '¿Deseas eliminar el pago del alumnos?',
    function(){
      this._pagoService.eliminaSolicitudPago( id_solicitud_pago).subscribe(response =>{  
        if(response && response['status']) {
          this.pagos.splice(index,1);
          alertify.success(response['msg']).dismissOthers();
        }else{
          alertify.error(response['msg']).dismissOthers();
        }
      },error=>{
        console.log(error)
      });
    }.bind(this),
    function(){
      alertify.error('Cancel');
    });
  }

  loadPage(page: number){
    if (page !== this.previousPage){
      this.previousPage = page;
      let inicio = (this.page - 1) * this.itemsPerPage;    
      this.consulta_pagos(null, inicio);
    }
  }

}
