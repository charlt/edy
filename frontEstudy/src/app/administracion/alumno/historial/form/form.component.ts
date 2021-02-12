import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorialService } from '../historial.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Subscription } from 'rxjs';

declare var alertify: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  jwt: string;
  historialForm: FormGroup;
  idHistorial: string;
  Ciclos: Array<any>;
  idMateria = null;
  CicloEstatusHist: Array<any>;
  idAlumno: any;
  bandera: boolean = false;
  show: boolean = false;
  editar: boolean = false;
  Historial: any;
  Data: any = {};
  suscripcion: Subscription;
  catSituacionReprobatoria: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _historialService: HistorialService,
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idAlumno = this.route.snapshot.paramMap.get('id');    
    this.idHistorial = this.route.snapshot.paramMap.get('id_historial');

    this._catalogoService.consultaCiclo().subscribe(response => {
      if (response && response['status']) {
        this.Ciclos = response['ciclo'];        
        this._historialService.catCicloEstatusHistorial().subscribe(response => {          
          if (response && response['status']) {
            this.CicloEstatusHist = response['ciclo_estatus'];
            this.setForm();
          }
        }, error => {
          console.log(<any>error);
        });
      }
    }, error => {
      console.log(<any>error);
    });
  }

  setForm() {
    this.historialForm = this.formBuilder.group({
      id_ciclo: ['', Validators.required],
      id_estatus_historial: ['', Validators.required],
      calificacion: ['', Validators.required]
    });  
    
    this.suscripcion = this.historialForm.get('calificacion').valueChanges.subscribe(value => {
      if (value < 6) {
        if(!this.historialForm.get('situacion_reprobatoria_id')){
          this.historialForm.addControl('situacion_reprobatoria_id', new FormControl('', Validators.required));
        }
        if (!this.catSituacionReprobatoria) {
          this._historialService.catSituacionReprobatoria().subscribe(response => {                      
            if (response && response['status']) {
              this.catSituacionReprobatoria = response['situacion_reprobatoria'];
            }
          }, error => {
            console.log(<any>error);
          });
        }
      }else {
        if (this.historialForm.get('situacion_reprobatoria_id')) 
          this.historialForm.removeControl('situacion_reprobatoria_id')
      }      
    });

    if (this.idHistorial) {
      this.editar = true;
      this._historialService.consultaHistorial(this.idHistorial).subscribe(response => {                        
        if (response && response['status']) {
          this.Historial = response['historial'];    
          console.log(this.Historial);
           
          this.setData();     
        }
      }, error => {
        console.log(<any>error);
      });
    }else {
      this.bandera = true;
    }
  }

  get hF() { return this.historialForm.controls }

  setData() {
    let h = this.Historial;   
    this.historialForm.get('id_ciclo').setValue(h.ciclo_id);
    this.historialForm.get('id_estatus_historial').setValue(h.estatus_historial_id);
    this.historialForm.get('calificacion').setValue(parseInt(h.calificacion));
    this.Data['carrera_id'] = h.carrera_id;
    this.Data['plan_estudio_id'] = h.plan_estudio_id;
    // this.Data['plan_orden_id'] = h.orden_jerarquico_id;
    this.Data['plan_orden_id'] = h.plan_orden_id;
    this.Data['orden_asignatura_id'] = h.orden_asignatura_id;    
    if (h.situacion_reprobatoria_id && h.situacion_reprobatoria_id < 6) {
      this.historialForm.get('situacion_reprobatoria_id').setValue(h.situacion_reprobatoria_id);
    }
    this.bandera = true;
  }

  sendData() {
    let tipo = this.editar? 1 : 0;   
    if (tipo == 1) this.historialForm.addControl('id_historial', new FormControl(this.idHistorial));
    let form = this.historialForm.value;       
    this._historialService.modificaHistorial(form, this.idAlumno, tipo).subscribe(response => {
      if (response && response['status']) {
        alertify.success(response['msg']);
        this.router.navigate(['/admin/alumno/historial/' + this.idAlumno])
      }
    }, error => {
      console.log(<any>error);
    });
  }

  showForm(evt: any) {        
    this.show = true;
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
