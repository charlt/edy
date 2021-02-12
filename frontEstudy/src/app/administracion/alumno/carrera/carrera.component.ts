import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../services/alumno.service';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify:any;

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent implements OnInit {
  title;
  campus;
  ofertas;
  idAlumno;
  tipoAdmin;
  id_plan_orden;
  planOrdenForm: FormGroup
  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _alumnoService: AlumnoService,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _alumnosService: AlumnoService,
    private _catalogosService: CatalogoService

  ){
    this.title= "Carreras";
    this._usuarioService.pushBreadcum('Carrera','/admin/alumno',2);
    this._usuarioService.pushBreadcum(this.title,"",2);
   }

   get f() { return this.planOrdenForm.controls; }

  ngOnInit(){
    this.idAlumno = this.route.snapshot.params['id'];
    this.planOrdenForm =  this.formBuilder.group({
      campus: ['', Validators.required]
    });
    let identity = JSON.parse(localStorage.getItem('identity'));
    this.tipoAdmin = identity.administrador.edicion;
    this.consulta();
    this.consultaCampus();
  }

  consultaCampus(){
    this._catalogosService.consultaCampus('').subscribe(
      response =>{
          if(response && response['status']){
            console.log(response)
              this.campus = response['campus'];
          }
      },error =>{
        console.log(<any>error)
      });
  }

  consulta(){
    this._alumnoService.consultaAlumnoCarrera(this.idAlumno).subscribe(response=> {
      if (response && response['status']){
        this.ofertas = response['ofertas']
      }
    });
  }
  
  cambiaOferta(){
    if (this.planOrdenForm.invalid) {
      return;
  }
    let id_plan_orden = this.planOrdenForm.get('plan_orden_id').value;    
    let campus_id = this.planOrdenForm.get('campus').value;    
    this._alumnosService.insertaOferta(this.idAlumno, id_plan_orden, campus_id).subscribe(
      response =>{
        if(response && response['status']){
          alertify.success(response['msg']);
          this._modalService.dismissAll();
          this.consulta();
          this.planOrdenForm.get('carrera_id').setValue('');
        }
      },error =>{
        console.log(<any>error)
    });
  }

  
  close(){
    this._modalService.dismissAll();
    let id = this.planOrdenForm.get('carrera_id').value;
    if(id){
      this.planOrdenForm.reset()
    }
  }

  elimina(index, plan_orden_id, alumno_id){
    alertify.confirm('', '¿Deseas eliminar la carrera del alumno?', function(){
      this._alumnosService.eliminaOferta(plan_orden_id, alumno_id).subscribe(
        response =>{
          if(response && response['status']){
            alertify.success(response['msg']);
            this.ofertas.splice(index,1)
          }
        },error =>{
          console.log(<any>error)
      });
      }.bind(this),
      function(){
          alertify.error('Cancelado');
      }).set('labels', {ok:'Sí', cancel:'No'});  
  }

  open(content){
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      ariaLabelledBy: 'modal-basic-title'
    };
      this._modalService.open(content, ngbModalOptions);
  }

}
