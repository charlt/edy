import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { universidad } from "src/app/services/universidad";
import { SolicitudService } from '../../services/solicitud.service';

declare var alertify: any;

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.scss']
})
export class AsesorComponent implements OnInit {

  universidad = universidad;
  asesorForm: FormGroup;
  asesor: any = null;

  @Input() infoAsesor: any;
  @Output() registroExitoso = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private _solicitudService: SolicitudService
  ) { }

  ngOnInit() {
    console.log(this.infoAsesor);
    let info = this.infoAsesor;
    
    this.asesorForm = this.formBuilder.group({
      asesor: [{value:'', disabled: info? true: false}, Validators.required]
    });    
    this.asesorForm.get('asesor').valueChanges.subscribe(value => {
      value = parseInt(value);
      if (value) this.asesorForm.addControl('busqueda', new FormControl(''));
      else {
        if (this.asesorForm.get('asesor')) this.asesorForm.removeControl('busqueda');
        if (this.asesor != null) this.asesor = null; 
      }      
    });

    if (info) {
      let seleccion;
      info.asesor_id? seleccion = '1': seleccion = '0';
      this.asesorForm.get('asesor').setValue(seleccion, {emitEvent:false});
      this.asesor = this.infoAsesor;
    }
    
  }

  get aF() { return this.asesorForm.controls }

  asesorSeleccionado(e){
    if(e.status){
      this.asesor = e.persona;
    }
  }

  enviarInformacion() {    
    this._solicitudService.guardaAsesorPersona(this.asesor).subscribe(
      response =>{                        
        console.log(response);
        if (response && response['status']) { 
          this.registroExitoso.emit();
          alertify.success(response['msg']).dismissOthers();
        }else{
          alertify.error(response['msg']).dismissOthers();
        }
    }, error => {
      console.log(<any>error);
    });  
  }

}
