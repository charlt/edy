import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from '../../services/pago.service';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title;
  descuentos;
  id_descuento;

  constructor(
    private _usuarioService:UsuarioService,
    private _pagoService: PagoService
  ){
    this.title='Consulta';
    this._usuarioService.pushBreadcum(this.title, '', 2)
   }

  ngOnInit(){
    this.consultaDescuentos();
  }

  consultaDescuentos(){
    this._pagoService.catDescuentos().subscribe(
      response =>{
        if(response && response['status']){
          this.descuentos = response['descuentos'];
          console.log(this.descuentos);
          
        }
      },error =>{
        console.log(<any>error)
      });
  }

  elimina(id_descuento, index){
    alertify.confirm('', '¿Deseas eliminar el descuento?', function(){
      this._pagoService.eliminaDescuento(id_descuento).subscribe(
        response =>{
          if(response && response['status']){
            this.descuentos.splice(index,1);
            console.log(response);
            
          }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});  



  }

}
