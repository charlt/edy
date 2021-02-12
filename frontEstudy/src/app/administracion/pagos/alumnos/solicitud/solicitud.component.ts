import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';

declare var alertify;

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  idAlumno;
  pagos = [];
  title;
  url = GLOBAL.url;

  constructor(
    private _pagoService : PagoService,
    private route : ActivatedRoute

  ) { }

  ngOnInit() {
    this.title = "Pagos del alumno";
    this.idAlumno = this.route.snapshot.paramMap.get('id');



    
    this._pagoService.consultaPagosAlumno(this.idAlumno).subscribe(
      response =>{
        if(response && response['status']){
          this.pagos = response['pagos'];
     
        }else{
          this.pagos = [];
        }
      },
      error =>{
        console.log(error);
      }
    )
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

}
