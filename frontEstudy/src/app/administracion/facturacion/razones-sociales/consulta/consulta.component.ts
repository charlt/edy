import { Component, OnInit } from '@angular/core';
import { FacturacionService } from '../services/facturacion.service';
declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  organizaciones = [];

  constructor(    
    private _facturacionService:FacturacionService,
    ) { }

  ngOnInit() {
    this._facturacionService.getOrganizaciones().subscribe(
      response =>{
        console.log('response',response)
          if(response && response['status']){
            //this.router.navigate(['admin/facturacion/vinculacion'])
            this.organizaciones=response['organizaciones']
          }else{
              alertify.error(response['msg'])
          }
 
      },error =>{
        console.log(<any>error)
      });
  }

}
