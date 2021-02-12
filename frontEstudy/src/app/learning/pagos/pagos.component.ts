import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/administracion/pagos/services/pago.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  title;
  pagos = [];
  idAlumno;

  constructor(
    private _pagoService : PagoService,
    private _usuarioService : UsuarioService
    ) { 
    this.title = "Mis pagos";
    this.idAlumno = this._usuarioService.getIdentity().persona_id

  }

  ngOnInit() {
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
    );
  }

  irPagar(){
    this._pagoService.irPagar();
  }

}
