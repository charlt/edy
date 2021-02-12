import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  alumnos = [];
  inputBusqueda: FormControl;
  title;
  situacionForm: FormGroup;
  catSituacion: any;
  idAlumno: any;

  constructor(
    private _pagoService : PagoService,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _alumnosService: AlumnoService,
  ) { 
    this.title= 'Pagos de alumnos';
    this._usuarioService.pushBreadcum(this.title,'/admin/pagos-alumno',1);
    // this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.inputBusqueda = new FormControl();
    this.inputBusqueda.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.consultaAlumnos(value);
    });
    this.consultaAlumnos('');
  }

  consultaAlumnos(busqueda){    
    this._pagoService.consultaAlumnos(busqueda).subscribe(response =>{
        if(response && response['status']){
          this.alumnos = response['alumnos'];
          console.log(this.alumnos);
          
        }else{
          this.alumnos = [];
        }
      },error=>{
        console.log(error)
    });
  }

  open(content, id_alumno){
    this.idAlumno = id_alumno;    
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    };
    this.situacionAlumno(content, ngbModalOptions);
  }

  situacionAlumno(content, options){
    this.situacionForm = this.formBuilder.group({
      situacion: ['', Validators.required]
      // observacion: ['', Validators.required]
    });
    
    this.situacionForm.get('situacion').valueChanges.subscribe(value => {
      /*if (value == 1 || value == 4) {
        if (this.situacionForm.get('observacion')){
          this.situacionForm.removeControl('observacion')
        }
      }else{*/
        if (!this.situacionForm.get('observacion')) {          
          this.situacionForm.addControl('observacion', new FormControl('', Validators.required))
        }
     // }
    });

    if (!this.catSituacion) {
      this._pagoService.catSituacionAlumnosPagos().subscribe(response =>{      
        if(response && response['status']){
          this.catSituacion = response['ciclo_estatus'];        
          this._modalService.open(content, options);
          
        }
      },error =>{
        console.log(<any>error)
      });
    }else {
      this._modalService.open(content, options);
    }
    
  }

  enviaInformacion() {
    this._pagoService.cambiaSituacion(this.situacionForm.value, this.idAlumno).subscribe(response =>{
      if(response && response['status']){
        let index = this.alumnos.map(a => {return a.alumno_id}).indexOf(this.idAlumno);        
        let situacion = this.catSituacion.find(s => s.situacion_pago_id == this.situacionForm.value.situacion);                
        // this.alumnos[index].estatus = this.situacionForm.value.situacion;        
        this.alumnos[index].situacion_pago_descripcion = situacion.situacion_pago_descripcion;
        this.alumnos[index].situacion_pago_id = situacion.situacion_pago_id;
        alertify.success(response['msg']).dismissOthers();
        this._modalService.dismissAll();
      }
    },error =>{
      console.log(<any>error)
    });
  }

}
