import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { universidad} from 'src/app/services/universidad'
import { PagoService } from 'src/app/administracion/pagos/services/pago.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requiredFileType } from '../../file-upload/file.upload.validators';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { TransferenciaService } from './transferencia.service';

declare var alertify;

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  @Input() monto;
  @Input() descripcion;
  @Input() fecha_limite;

  identity;
  universidad;
  transferencias;
  solicitud_pago_id;
  isDisabled = false;
  comprobanteExitoso = false;
  cargando = false;

  tranferenciaForm: FormGroup;
  url = GLOBAL.urlAssets;
  produccion = GLOBAL.productionMode;
  bandera: boolean = false;
  stringMonto: string;
  Datos: any;
  imprimiendo: boolean = false;

  constructor(
    private _usuarioService: UsuarioService,
    private _pagoService: PagoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _transferenciaService: TransferenciaService
  ){}

  get f() { return this.tranferenciaForm.controls; }

  Tabla = [
    {id: 1, titulo: 'Descripción', valor: undefined},
    {id: 2, titulo: 'Fecha y hora', valor: undefined},
    {id: 3, titulo: 'Correo del cliente', valor: undefined}
  ]

  ngOnInit() { 
    this.monto = parseInt(this.monto);      
    this.identity = this._usuarioService.getIdentity();        
    this.solicitud_pago_id = this.route.snapshot.paramMap.get('id');
    this.consultaTransferencias();
    this.tranferenciaForm = this.formBuilder.group({
      contenido: ['', requiredFileType(0)]
    });
    this.stringMonto = this.numberWithCommas(this.monto);
    
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  consultaTransferencias(){
    this._pagoService.consultaTransferencia().subscribe(
      response =>{
        if(response && response['status']){
          this.transferencias = response['transferencias'];
        }
      },error=>{
        console.log(error);
      }
    )
  }

  imprimir(){
    setTimeout(() => {
      window.print();
      this.imprimiendo = false;
    }, 1000);
    
    /*this.imprimiendo = true;
    this._transferenciaService.crearCargo(this.produccion, this.identity, 
      this.monto, this.descripcion).subscribe(response => {
      console.log(response);
      if (response && response['status']) {
        this.Datos = response['datos'];
        this.Tabla[0]['valor'] = this.descripcion;        
        this.Tabla[1]['valor'] = new Date(this.Datos['fecha']);
        this.Tabla[2]['valor'] = this.identity.email;
        this.bandera = true;

        setTimeout(() => {
          window.print();
          this.imprimiendo = false;
        }, 1000);
      }
    }, error => {
      console.log(<any>error);
    });*/
  }

  enviarInformacion(){
    
    this.cargando = true;
    if (!this.tranferenciaForm.get('contenido').value) {
      alertify.error('Selecciona un archivo');
      return
    }
    this.isDisabled = true;
    this._pagoService.guardaComprobantePago(this.tranferenciaForm, this.solicitud_pago_id).subscribe(
      response =>{
        if(response && response['status']){
          this.isDisabled = false;
          alertify.success(response['msg'])
          this.comprobanteExitoso = true;
        }
        this.cargando = false;
      },error=>{
        console.log(error);
      }
      )
      this.isDisabled = false;
  }

}
