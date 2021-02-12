import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';



declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  suscripcion = [];
  title;

  constructor(
    private _pagoService : PagoService,
  ) { 
    this.title = "Planes de pagos";
  }

  ngOnInit() {

    this._pagoService.catSuscripcion().subscribe(
      response =>{
        if(response && response['status']){
          this.suscripcion = response['suscripcion']
        }else{
          this.suscripcion = [];
        }

      },error=>{
        console.log(error)
      }
    );
  }

  
  eliminar(id, index) {
    alertify.confirm('¿deseas eliminar esta suscripción?',
      function () {
        this._pagoService.eliminaSuscripcion(id).subscribe(
          response => {
            if (response && response['status']) {
              this.suscripcion.splice(index, 1);
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
        alertify.error('Cancel');
      });
  }

}
