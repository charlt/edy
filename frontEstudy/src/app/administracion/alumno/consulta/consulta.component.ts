import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { TranslateService } from '@ngx-translate/core';
import { AlumnoService } from '../services/alumno.service';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PlataformaService } from 'src/app/services/plataforma.service';

declare var alertify:any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  title: string;
  jwt: string;
  Alumnos;  
  searchChangeObserver;
  search;
  contenido: string;
  searchField: FormControl; 
  idRol: number;
  idAlumno: number;
  pagConsulta;
  tipoForm;
  textoBusqueda;
  totalItems: number = 100;
  page: number = 1;
  itemsPerPage: number = 50;
  previousPage: any = 1;

  generaExcel;
  // loadPage;
  loading: boolean = false;
  catSituacion: any;
  situacionForm: FormGroup;
  planOrdenForm: FormGroup;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private translate: TranslateService,
    private _alumnosService: AlumnoService,
    private _modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private _plataformaService: PlataformaService
  ) { 
    this.title= "Consulta de alumnos";
    this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idRol = this._usuarioService.getRol().rol_id;
    let identity = this._usuarioService.getIdentity();
    let persona_id = localStorage.getItem('id_persona')
    localStorage.removeItem('id_persona');
    
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    

    this.searchField = new FormControl();
    // busqueda de datos por input  
    this.searchField.valueChanges.subscribe(data => {
      this.textoBusqueda = data;
      if (this.totalItems == 1){
        this.consultaTotal();
        this.itemsPerPage = 50;
      }
        this.busquedaAlumno(data);
      }
    );
    if(persona_id){
      this.consultaEspAlumno(persona_id);
    }else{
      this.consultaTotal();
    }
    this.planOrdenForm =  this.formBuilder.group({});
  }

  cambiaTipoBusqueda(value){
    if(this.tipoForm != value && this.textoBusqueda){
      this.tipoForm = value;
      this.consultaAlumno(this.textoBusqueda, 0);
    }
  }

  consultaTotal(){
    this._alumnosService.getTotalAlumnos(this.jwt).subscribe(response =>{
      if(response && response['status']){
        this.totalItems = response['total'];
        this.busquedaAlumno('', 1);
        this.tipoForm = 1;
      }
    },error =>{
      console.log(<any>error)
    });
  }

  consultaEspAlumno(id_persona){
    this.totalItems = 1
    this.Alumnos = [];
    this._alumnosService.consultaEspecifica(id_persona, this.jwt).subscribe(
      response =>{ 
          if(response && response['status']) {
            let alumno = response['alumno']
            this.Alumnos.push(alumno);
          }
          else this.Alumnos = null;
          this.loading = false;
      },error =>{
        console.log(<any>error)
    });
  }


  eliminar(id_alumno,index){
    alertify.confirm(this.translate.instant('MsgEraseStudent'),
    function(){
      this._alumnosService.elimina(id_alumno,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.Alumnos.splice(index,1);
              alertify.success(response['msg']);
            }
            else{
              alertify.success(response['msg']);
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  } 
  
  busquedaAlumno(input, id = 0) {   
    this.Alumnos = null;
    this.loading = true; 
    if (id == 0){
      if (!this.searchChangeObserver){
        Observable.create(observer =>{        
          this.searchChangeObserver = observer;
        }).pipe(debounceTime(500)).subscribe(busqueda =>{  
          let inicio = (this.page - 1) * this.itemsPerPage;    
          if (busqueda === '' || busqueda == null) this.consultaAlumno(busqueda, inicio);
          else this.consultaAlumno(busqueda, 0);
        });
      }    
      this.searchChangeObserver.next(input);
    }else {
      let inicio = (this.page - 1) * this.itemsPerPage;      
      this.consultaAlumno('', inicio);
    }      
  } 
  
  consultaAlumno(busqueda, inicio){    
    this._alumnosService.consultaAlumno(this.jwt, this.idRol, busqueda, inicio, this.itemsPerPage, this.tipoForm).subscribe(
      response =>{ 
          if(response && response['status']) {
            this.Alumnos = response['usuario'];
            console.log(this.Alumnos);
            
          }
          else this.Alumnos = null;
          this.loading = false;
      },error =>{
        console.log(<any>error)
    });
  }

  open(content, id_alumno, tipo){
    this.idAlumno = id_alumno; 
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      ariaLabelledBy: 'modal-basic-title'
    };
    if (tipo == 0) {
      this._modalService.open(content, ngbModalOptions);
    }else if (tipo == 1) {
      ngbModalOptions['size'] = 'lg';
      this.situacionAlumno(content, ngbModalOptions);
    }
  }


  cambiaOferta(){
    let idPlanOrden = this.planOrdenForm.get('plan_orden_id').value;
    this._alumnosService.cambiaOferta(this.jwt, idPlanOrden, this.idAlumno).subscribe(
      response =>{
        if(response && response['status']){
          document.getElementById('_modal').click();
          let inicio = (this.page - 1) * this.itemsPerPage;      
          this.consultaAlumno('', inicio);
          alertify.success(response['msg']).dismissOthers();
        }
      },error =>{
        console.log(<any>error)
    });
  }

  loadPage(page: number){
    if (page !== this.previousPage){
      this.previousPage = page;
      this.busquedaAlumno('', 1);
    }
  }

  situacionAlumno(content, options){
    this.situacionForm = this.formBuilder.group({
      situacion: ['', Validators.required]
      // observacion: ['', Validators.required]
    });
    this.situacionForm.get('situacion').valueChanges.subscribe(value => {
      if (value == 1 || value == 4 ) {
        if (this.situacionForm.get('observacion')){
          this.situacionForm.removeControl('observacion')
        }
      }else{
        if (!this.situacionForm.get('observacion')) {          
          this.situacionForm.addControl('observacion', new FormControl('', Validators.required))
        }
      }
    });
    if (!this.catSituacion) {
      this._alumnosService.getSituacion(this.jwt).subscribe(response =>{      
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
    this._alumnosService.cambiaSituacion(this.situacionForm.value, this.idAlumno,1).subscribe(response =>{
      if(response && response['status']){
        let index = this.Alumnos.map(a => {return a.persona_id}).indexOf(this.idAlumno);        
        let situacion = this.catSituacion.find(s => s.situacion_alumno_id == this.situacionForm.value.situacion);        
        this.Alumnos[index].estatus = this.situacionForm.value.situacion;        
        this.Alumnos[index].situacion_alumno = situacion.situacion_alumno_descripcion;
        this.Alumnos[index].situacion_alumno_id = situacion.situacion_alumno_id;

        alertify.success(response['msg']).dismissOthers();
        this._modalService.dismissAll();
      }
    },error =>{
      console.log(<any>error)
    });
  }

  setSelectedRol() {
    if (sessionStorage.getItem('selectedRol')) sessionStorage.removeItem('selectedRol');
    sessionStorage.setItem('selectedRol', 'Alumno');
  }

  verPlataforma(alumno) {
    this._plataformaService.consultaJWT(alumno.matricula, 2).subscribe(response =>{
      if(response && response['status']){
        sessionStorage.setItem('tmp_jwt', this.jwt);
        sessionStorage.setItem('tmp_identity', JSON.stringify(this._usuarioService.getIdentity()));
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');
        localStorage.setItem('jwt', response['jwt']);
        localStorage.setItem('identity',JSON.stringify(response['user']));
        this.router.navigate(['/learning/home']);
      }
    },error =>{
      console.log(<any>error)
    });
  }

  filtroForm: FormGroup;
  Filtros = [
    { label: 'Plan de estudios', service: 'consultaPlanEstudios', name: 'plan_estudio_id', 
        option_label: 'plan_estudio', response: 'planEstudio', values: [] },
    { label: 'Grado', name: 'orden_jerarquico_id', option_label: 'orden_jerarquico_descripcion', values: [] },
    { label: 'Campus', service: 'consultaCampus', name: 'campus_id', 
        option_label: 'campus', response: 'campus', values: [] },
    { label: 'Situación de alumno', service: 'getSituacion', name: 'situacion_alumno_id', 
        option_label: 'situacion_alumno_descripcion', response: 'ciclo_estatus', values: [] }
  ];

  suscripcion = new Subscription();

  setFiltro() {
    if (this.Filtros[0].values.length == 0) {
      this.Filtros.forEach(filtro => {
        if (filtro.service) {
            let service = filtro.name == 'situacion_alumno_id'? '_alumnosService': '_catalogoService';
            this[service][filtro.service](this.jwt).subscribe(response => {              
            if (response && response['status']) {
              filtro['values'] = response[filtro.response];
            }
          }, error => {
            console.log(<any>error);
          }); 
        }  
      }); 
    }    
    
    this.filtroForm = this.formBuilder.group({
      plan_estudio_id: [''],
      orden_jerarquico_id: [''],
      campus_id: [''],
      situacion_alumno_id: ['']
    });

    this.suscripcion = this.filtroForm.get('plan_estudio_id').valueChanges.subscribe(value => {
      this.filtroForm.get('orden_jerarquico_id').setValue("", {emitEvent: false})
      if (value != 0 && value != '') {
        this._catalogoService.consultaGrado(value).subscribe(response => {
          if (response && response['status']) {
            let index = this.Filtros.findIndex(f => f.name == 'orden_jerarquico_id');
            this.Filtros[index]['values'] = response['ordenJerarquico'];
          }
          console.log(this.Filtros);
          
        }, error => {
          console.log(<any>error);
        });
      }
    })
  }

  busquedaFiltro() {
    let values = Object.entries(this.filtroForm.value);    
    let form = [];
    for (var [key, value] of values) {      
      if (value != "" && value != 0) {
        let obj = {key: key, value: value};
        form.push(obj);
      }      
    }   
    if (form.length > 0) {
      this.Alumnos = null;
      this.loading = true;      
      this._alumnosService.busquedaFiltro(form, 0, this.itemsPerPage).subscribe(response => {
        console.log(response);
        
        if (response && response['status']) {
            this.Alumnos = response['usuario'];
        } else {
          this.Alumnos = null;
        }
        this.loading = false;
      }, error => {
        console.log(<any>error);
      })
    }else {
      alertify.error('Selecciona por lo menos un filtro').dismissOthers();
    }    
  }

}
