import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from '../../services/pago.service';

declare var alertify;

@Component({
  selector: 'app-carga-layout-pagos',
  templateUrl: './carga-layout-pagos.component.html',
  styleUrls: ['./carga-layout-pagos.component.scss']
})
export class CargaLayoutPagosComponent implements OnInit {
  title;
  pagos;
  exito;
  error;
  layoutForm: FormGroup;
  cargando = false;
  carga = 0;
  msjCarga;

  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _pagoService : PagoService,

  ){ 
    this.title = 'Carga de layout';
    this._usuarioService.pushBreadcum(this.title,'',2)

  }

  get f() { return this.layoutForm.controls}

  ngOnInit(){
    this.layoutForm = this.formBuilder.group({
      contenido: ['', requiredFileType(0)],
    });
  }

  enviar(){
    this.cargando = true;
    this._pagoService.guardaLayoutPago(this.layoutForm).subscribe(
      response => {
        if (response && response['status']) {
          this.pagos = response['alumnos_sin_suscripcion'];
          
          this.msjCarga = response['msg'];
          
          if(this.pagos.length){
            this.carga = 2;
          }else{
            this.carga = 1;
          }

        } else {
          
          this.msjCarga = response['msg'];
        }

        this.cargando = false;

        }, error => {
          this.cargando = false;
        console.log(<any>error)
      });
  }
}
