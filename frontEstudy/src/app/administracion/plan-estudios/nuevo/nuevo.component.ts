import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService} from '../../../services/catalogo.service';
import { UsuarioService} from '../../../services/usuario.service';
import { PlanEstudiosService} from '../services/plan-estudios.service';
import { Router, ActivatedRoute } from '@angular/router';


declare var alertify:any;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  idPlanEstudios;
  idCarrera;
  planEstudios;
  planEstudiosForm: FormGroup;
  submitted: boolean;
  jwt: string;
  title: string;
  carreras;
  periodos;
  tipoPlan;
  tipoAdmin;
  constructor(
    private formBuilder: FormBuilder,
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService,
    private _planEstudiosService : PlanEstudiosService,
    private router : Router,
    private route: ActivatedRoute
  ) { 

    this.idPlanEstudios = this.route.snapshot.paramMap.get('id');
    this.idCarrera = this.route.snapshot.paramMap.get('id2');


    if(this.idPlanEstudios)
      this.title = 'Editar elemento';
    else
      this.title = 'Nuevo elemento';
      
    this._usuarioService.pushBreadcum(this.title,"",2);

  }

  get f() { return this.planEstudiosForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this._catalogoService.consultaCarrera(this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.carreras = response['carreras'];
          }

      },error =>{
        console.log(<any>error)
      });

      this._catalogoService.consultatipoPeriodo(this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.periodos = response['periodos'];
            }
  
        },error =>{
          console.log(<any>error)
        });
        
      this._catalogoService.consultatipoPlanEstudios(this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.tipoPlan = response['tipoPlan'];

            }
  
        },error =>{
          console.log(<any>error)
        });

        
        this.planEstudiosForm = this.formBuilder.group({
          clavePlan: ['', Validators.required],
          nombrePlan: ['', Validators.required],
          periodosEstudios: ['', Validators.required],
          RVOE:[''],
          cMin: ['', Validators.required],
          minCredits: ['', Validators.required],
          totalCredits: ['', Validators.required],
          CURP:[''],
          catCarreras:  ['', Validators.required],
          catPeriodos:  ['', Validators.required],
          catTipoPlan: ['', Validators.required],
          minimoMateriasGrado: ['']

        });
    if(this.idPlanEstudios != null && this.idCarrera != null){
      
      this._planEstudiosService.consultaEspecifica( this.idPlanEstudios , this.jwt).subscribe(
        response =>{
          if(response && response['status']){
            this.planEstudios = response['planEstudio'][0]; 
            this.planEstudiosForm = this.formBuilder.group({
              nombrePlan: [this.planEstudios.plan_estudio, Validators.required],
              clavePlan: [this.planEstudios.plan_estudio_clave, Validators.required],
              periodosEstudios: [this.planEstudios.total_periodos, Validators.required],
              RVOE: [this.planEstudios.rvoe],
              cMin: [this.planEstudios.minima_aprobatoria, Validators.required],
              totalCredits: [this.planEstudios.total_creditos, Validators.required],
              minCredits: [this.planEstudios.minima_creditos, Validators.required],
              CURP:  [this.planEstudios.curp_responsable],
              catCarreras:  [this.idCarrera, Validators.required],
              catPeriodos:  [this.planEstudios.tipo_periodo_id, Validators.required],
              catTipoPlan: [this.planEstudios.tipo_plan_estudio_id, Validators.required],
              minimoMateriasGrado: [this.planEstudios.minimo_materias_grado]


            });
          }
        },error =>{
          console.log(<any>error)
        });
    }
  }

  
  enviarInformacion(){
       // stop here if form is invalid
      if (this.planEstudiosForm.invalid) {
        Object.keys(this.planEstudiosForm.controls).forEach( controlKey => {
          this.planEstudiosForm.controls[controlKey].markAsTouched();
        });
        return;
      }
 
       this._planEstudiosService.modificaPlanEstudios(this.planEstudiosForm , this.idPlanEstudios  ).subscribe(
        response =>{
            if(response && response['status']){
              this.router.navigate(['admin/plan-estudios/consulta']);
              alertify.success(response['msg'])
            }else{
              alertify.error(response['msg'])
            }
  
        },error =>{
          console.log(<any>error)
        });

  }

}
