import { Component, OnInit, Input } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {

  title;
  idAlumno;
  suscripcion = [];
  pagosForm: FormGroup;
  catSuscripciones: any;
  titulo = '';
  seleccionado: any;
  selectedSuscripcion = null;
  becaReinscripcion = 0;
  becaColegiatura = 0;
  redireccion;

  constructor(
    private _pagoService: PagoService,
    private _modalService: NgbModal,
    private _fb: FormBuilder,
    private route : ActivatedRoute,
    private router: Router
  ) { 
    this.title = 'Plan de pagos';
    this.idAlumno = this.route.snapshot.paramMap.get('id');
    this.redireccion = this.route.snapshot.paramMap.get('id2');

  }

  ngOnInit() {    
    this.consultaSuscripciones();
  }

  consultaSuscripciones() {
    this._pagoService.consultaAlumnoSuscripcion(this.idAlumno).subscribe(response =>{        
        if(response && response['status']){
          this.suscripcion = response['suscripcion'];
          console.log(this.suscripcion);
          
        }else{
          this.suscripcion = [];
        }
      },error=>{
        console.log(error)
    });
  }

  getSuscripciones() {
    this._pagoService.catSuscripcion().subscribe(response =>{
        if(response && response['status']){
          this.catSuscripciones = response['suscripcion'];          
        }else{
          this.catSuscripciones = undefined
        }
      },error=>{
        console.log(error)
    });

  }

  open(content, suscripcion = undefined) {
    if(suscripcion){
      this.seleccionado = suscripcion;
      this.selectedSuscripcion = this.seleccionado;
    
    }else{
      this.seleccionado = null;
      this.selectedSuscripcion = null;

    }

    if (!this.catSuscripciones) this.getSuscripciones();
    if (this.pagosForm) this.pagosForm = undefined;

    
    if(this.seleccionado) {
      this.titulo = 'Editar pago';
    }else{
      this.titulo = 'Agregar pago';

    }
    
    this.pagosForm = this._fb.group({
      id_suscripcion: [this.seleccionado ? this.seleccionado.suscripcion_id: '', Validators.required],
      becaColegiatura: [this.seleccionado && this.seleccionado.beca_colegiatura ? '1 ': ''],
      becaReinscripcion : [this.seleccionado && this.seleccionado.beca_reinscripcion ? '1 ': ''],
      montoBecaColegiatura: [this.seleccionado? parseInt(this.seleccionado.beca_colegiatura): 0],
      tipoBecaColegiatura: [this.seleccionado? this.seleccionado.valor_beca_colegiatura: "1"],
      montoBecaReinscripcion: [this.seleccionado? parseInt(this.seleccionado.beca_reinscripcion): 0],
      tipoBecaReinscripcion: [this.seleccionado? this.seleccionado.valor_beca_reinscripcion: "1"],
    });

    if(this.seleccionado){
      this.calculaBeca(1);
      this.calculaBeca(2);
    }
  

      this.pagosForm.get('tipoBecaReinscripcion').valueChanges.subscribe(val => {
        this.calculaBeca(1);
    });

    this.pagosForm.get('tipoBecaColegiatura').valueChanges.subscribe(val => {
      this.calculaBeca(2);
  });

    
    
    this._modalService.open(content, {backdrop: 'static', keyboard: false, size: 'lg'});
  }

  cambiaSuscripcion(event){
    let i = event.target.selectedIndex -1;
    this.selectedSuscripcion = this.catSuscripciones[i];
    this.becaReinscripcion = this.selectedSuscripcion.monto_reinscripcion;
    this.becaColegiatura = this.selectedSuscripcion.monto_colegiatura;
    
  }

  calculaBeca(tipo){
    let monto,tipoBeca,montoBeca; 
    if(tipo == 1){
      monto = this.selectedSuscripcion.monto_reinscripcion;
      tipoBeca = this.pagosForm.get('tipoBecaReinscripcion').value;
      montoBeca =this.pagosForm.get('montoBecaReinscripcion').value; 
    }else{
      monto = this.selectedSuscripcion.monto_colegiatura;
      tipoBeca = this.pagosForm.get('tipoBecaColegiatura').value;
      montoBeca =this.pagosForm.get('montoBecaColegiatura').value; 
    }
    
    let total = 0;
    if(tipoBeca == 1){
      total = parseFloat(monto) - parseFloat(montoBeca);
    }else{
      total = parseFloat(monto) - parseFloat(monto)*parseFloat(montoBeca)/100;
    }

    if(tipo == 1){
      this.becaReinscripcion = total
    }else{
      this.becaColegiatura = total
    }


  }

  enviaInformacion() {
    let form = Object.entries(this.pagosForm.value);
    let id = 0, id_suscripcion_alumno;
    if (this.seleccionado) {
      id = 1;
      id_suscripcion_alumno = this.seleccionado.alumno_suscripcion_id;
    }    
    this._pagoService.modificaSuscripcionAlumno(this.idAlumno, form, id, id_suscripcion_alumno).subscribe(response =>{      
      if(response && response['status']) {
        alertify.success(response['msg']).dismissOthers();

        if(this.redireccion == 1){
          this.router.navigate(['/admin/solicitud-pagos/nueva-inscripcion/'+this.idAlumno])
        }
        this.consultaSuscripciones();
        this._modalService.dismissAll();
      }else{
        alertify.error(response['msg']).dismissOthers();
      }
    },error=>{
      console.log(error)
    });
  }  

  eliminar(id_suscripcion_alumno, index) {    
    alertify.confirm('Eliminar suscripción', '¿Deseas eliminar la suscripción?',
    function(){
      this._pagoService.eliminaSuscripcionAlumno(this.idAlumno, id_suscripcion_alumno).subscribe(response =>{  
        console.log(response);
        if(response && response['status']) {
          this.suscripcion.splice(index,1);
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

  get f() { return this.pagosForm.controls; }


}
