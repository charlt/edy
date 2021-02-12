import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { requiredFileType } from '../../components/file-upload/file.upload.validators';
import { MigracionService } from './migracion.service';

declare var alertify;

@Component({
  selector: 'app-migracion',
  templateUrl: './migracion.component.html',
  styleUrls: ['./migracion.component.scss']
})
export class MigracionComponent implements OnInit {
  layoutForm: FormGroup;
  bloqueo = false;
  botones = false;
  


  constructor(
    private formBuilder: FormBuilder,
    private _migracionService: MigracionService
  ){

   }

  get f() { return this.layoutForm.controls; }

  ngOnInit(){
    this.layoutForm = this.formBuilder.group({
      contenido: ['',requiredFileType(1)]
    });
  }

  enviar(){
    alertify.confirm('', '¿Estás seguro que deseas cotinuar?', function(){
      this.bloqueo = true;
      this._migracionService.layout(this.layoutForm).subscribe(
        response =>{
            if(response && response['status']){
              this.bloqueo = false;
              this.botones= true;
              alertify.success(response['msg'])
              this.layoutForm.get('contenido').setValue('')
            }else{
              this.bloqueo = false;
              alertify.error(response['msg'])
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
