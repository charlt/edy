import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoService } from './services/grupo.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

// import { privilegiosDocente } from "../../models/controlEscolar/privilegiosDocente";
import { debounceTime } from 'rxjs/operators';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModuloService } from 'src/app/administracion/carga-actividades/services/modulo.service';

declare var alertify: any;

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {

  title: string;
  jwt;

  alumnos;

  paginacion = 50;
  totalAlumnos;
  pagina = 1;

  actividad;
  actividadSQA; //un conjunto de actividades

  
  grupo;
  idAsignaturaGrupo;
  idAsignatura;
  asignaturaGrupo;
  verRetro = false;  
  identity;
  idDocente;
  docente;
  edicion_contenido;

  archivos;
  idAlumnoSelected;
  
  cargandoGrupo = true;
  idMateriaAlumno: number;
  tipoConsulta;
  Privilegios;

  idRol: any;

  urlRedirect: string;
  searchChangeObserver;
  searchField: any;
  editaCalificacion: boolean = false;

  subscription: Subscription;
  actividadesModulo: any;
  formActividades: FormGroup;
  sumaTotal: number = 0;
  idModuloSeleccionado: any;
  idActividadSeleccionada: any;
  indexSeleccionado: any;
  btnBloqueo: boolean = false;
  banderaCheckbox: boolean = false;
  cargaBloques;

  @ViewChild('content') myModal: NgbModal;
  @ViewChild('modalCalificacion') modalCalificacion: NgbModal;

  constructor(
    private _usuarioService: UsuarioService,
    private _grupoService: GrupoService,    
    private router : Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private _moduloService: ModuloService,
    private _fb: FormBuilder
  ) {
    this.idRol = this._usuarioService.getRol().rol_id;  

    this.subscription = this.router.events.subscribe(val => {        
      if (val instanceof NavigationEnd) {
        this.setDatos();
      }
    });
    
    if (this.idRol == 1) {
      this.tipoConsulta = 4;
      this.urlRedirect = '/admin/grupo';
    } else if (this.idRol == 3) {
      this.tipoConsulta = this.route.snapshot.paramMap.get('id2');
      this.urlRedirect = '/docente';
      this.title = 'Alumnos en grupo';
      this._usuarioService.pushBreadcum(this.title,"",2);
    }        
    
    if (localStorage.getItem('selectedMateria') != undefined && 
        localStorage.getItem('seriacionActividad') != undefined &&
        localStorage.getItem('modulos') != undefined) {
        localStorage.removeItem("selectedMateria");  
        localStorage.removeItem("seriacionActividad");  
        localStorage.removeItem("modulos"); 
    }     
   }

  ngOnInit() {  
    this.jwt = this._usuarioService.getJWT();    
    this.identity = this._usuarioService.getIdentity();
    this.idDocente = this.identity.persona_id;

    if(this.identity.docente){
      this.docente = this.identity.docente;
      this.edicion_contenido = parseInt(this.identity.docente.edicion_contenido);
    }else{
      this.docente = null;
      this.edicion_contenido = 0;
    }
  }

  getMensajeEnviado($event){
    let enviado = $event;
    if(enviado){
      this.consultaAlumnos(this.tipoConsulta);
    }
  }

  setDatos() {
    if(this._grupoService.getSelectedAsignaturaGrupo())
      this.idAsignatura = this._grupoService.getSelectedAsignaturaGrupo().asignatura_id;
    else
      this.idAsignatura = null;

    if (sessionStorage.getItem('situacionAsignaturaGrupo')) sessionStorage.removeItem('situacionAsignaturaGrupo');
    this.searchField = new FormControl();      
    this.searchField.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.consultaAlumno(data);
    });    
    this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
    this._grupoService.consultaPrivilegiosDocente().subscribe(response =>{                        
      if(response && response['status']){

        this.cargaBloques = response['cargaBloques'];
        this.Privilegios = response['privilegios'];
        if(!this.edicion_contenido){
            this.Privilegios = this.Privilegios.filter(p => p.i != "1");
        }
        this.Privilegios.forEach(privilegio => {
          if (privilegio['id'] != null) {
            let lastIndex = privilegio['url'].lastIndexOf('/');
            privilegio['url'] = privilegio['url'].substring(0, lastIndex + 1);
            privilegio['url'] = privilegio['url'] + this.idAsignaturaGrupo; 
          }
        });
      }else{
      }
    },error =>{
      console.log(<any>error)
    });
          
    this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(
      response =>{        
        this.asignaturaGrupo = response['grupo'];
        sessionStorage.setItem('situacionAsignaturaGrupo', this.asignaturaGrupo.situacion_asignatura_grupo_id);
        if(!this.asignaturaGrupo.asignatura_id && !this.idAsignaturaGrupo){
          this.router.navigate(['/docente/authDocente']);
        }
        
      },error =>{
        console.log(<any>error)
      }
    );
    this.consultaTotalAlumnos();
    this.consultaAlumnos(this.tipoConsulta);
  }

  consultaTotalAlumnos(){
    this._grupoService.totalAlumnos(this.idAsignaturaGrupo).subscribe(
      response=>{
        if(response && response['status']){
          this.totalAlumnos = response['totalAlumnos'];
        }
        
      },error=>{
      }
    );
  }

  consultaAlumnos(tipoConsulta){
    this.cargandoGrupo = true;
    this.tipoConsulta = tipoConsulta;

    let ini = (this.pagina -1)*this.paginacion;
    let fin =  this.pagina*this.paginacion;


    this._grupoService.consultaAlumnos(this.idAsignaturaGrupo,this.idAsignatura, tipoConsulta,ini,fin).subscribe(
      response =>{
          if(response && response['status']){
            this.actividad =response['actividades'];
            this.actividad.forEach(item => { item['editar'] = false; });            
            this.actividadSQA = response['actividadesSQA'];
            this.alumnos = response['Alumnos'];              
          }else{
            this.alumnos = null;
          }
          this.cargandoGrupo = false;
        },
          error=>{
            console.log(error)
          }
    );
  }
  
  openModalArchivo(content,id,idAlumno){
    this.idAlumnoSelected = idAlumno;
    this._grupoService.consultaArchivos(id,this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.archivos = response['materiaArchivos'];
            let idArchivoTmp=0;
            this.archivos.forEach(function(_archivo){

             if(idArchivoTmp == _archivo.pregunta_id){
                _archivo.verEncabezado=false;

             }
             else{
               _archivo.verEncabezado=true;
             }

             idArchivoTmp=_archivo.pregunta_id;
         }.bind(this))
          }
          else{
            this.archivos=null;  
          }

           },error =>{
        console.log(<any>error)
      }
    );
    
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }

  vistaAlumno(){
    this._grupoService.changeMenu.emit({menu: 1});
    // this.router.navigate(['/docente/vista-alumno/1']);
    this._grupoService.seleccionaMateriaDummy(this.idAsignaturaGrupo,this.jwt).then(
      data =>{
        this.router.navigate(['/materia/']);
      }
    )
  }

  openMensajeria(content, id_materia){
    this.idMateriaAlumno = id_materia; 
    setTimeout(() => {
      this.modalService.open(content, {backdrop: 'static', size: 'lg'});

    }, 100);       
  }

  vistaContenido(){    
    if(this.edicion_contenido == "1"){
      if(this.cargaBloques){
        this.router.navigate(['/docente/modulosAsignaturaGrupo/'+this.idAsignaturaGrupo]);
      }else{
        let nombre_modulo = 'Actividades del grupo ' +this.asignaturaGrupo.grupo
        this._grupoService.consultaModulos(this.idAsignaturaGrupo,nombre_modulo,this.jwt).subscribe(
          response =>{
            if(response && response['status']){
              
              let modulo = response['modulo'];
    
             this.router.navigate(['/docente/modulosAsignaturaGrupo/'+this.idAsignaturaGrupo+'/actividades/'+modulo.modulo_id]);
    
            }
            
          },error=>{
            console.log(error);
          }
        )
      }
      
    }else{
      this.router.navigate(['/docente/contenido-asignatura/'+this.idAsignatura]);
    }
  }

  seleccionaSeccion(index, id_modulo,id_actividad,tipo) {          
    if (tipo == 2) {
      this.editaActividad(index);
    }else if (tipo == 5) {
      this.banderaCheckbox = false;
      this.idModuloSeleccionado = id_modulo;
      this.idActividadSeleccionada = id_actividad;
      this.indexSeleccionado = index;
      this._moduloService.consultaActividad(this.idModuloSeleccionado, 0,2).subscribe(
        response=>{
          if(response && response['status']){
            this.actividadesModulo = response['Actividades'].filter(f => f.tipo_actividad_id != 5);
            this.formActividades = this._fb.group({
              items: this._fb.array([])
            });
            this.actividadesModulo.forEach(actividad => {
              this.addItem(actividad.actividad_id);
            });
          }else{
            this.actividadesModulo = [];
            this.formActividades = null;
          }          
        },error=>{
          console.log(<any>error);
      });
      this.modalService.open(this.modalCalificacion, {size: 'lg'});
    }
  }

  ingresarCalificacionesDirecto(){
    this.modalService.dismissAll();
    this.actividad[this.indexSeleccionado].tipo_actividad_id = 2; 
    this.editaActividad(this.indexSeleccionado)
  }

  editaActividad(index){
    this.actividad[index]['editar'] = !this.actividad[index]['editar'];
  }

  get items():FormArray{
    return <FormArray>this.formActividades.get('items');
  }

  addItem(id_actividad) {
    this.items.push(
      this._fb.group({
        actividad_id: [id_actividad, Validators.required],
        porcentaje: [0, Validators.required]
      })
    );
  }

  getPorcentaje() {
    let suma = 0;
    this.items.value.forEach(item => {
      suma += item.porcentaje;
      this.sumaTotal = suma; 
    });
    return this.sumaTotal;
  }

  enviarPorcentajes() {
    this.btnBloqueo = true;
    this._grupoService.guardarPorcentajes(this.items.value, this.idAsignaturaGrupo, 
      this.idModuloSeleccionado, this.idActividadSeleccionada).subscribe(
      response =>{
        if (response && response['status']) {
          this.setDatos();
          this.modalService.dismissAll();
          alertify.success(response['msg']).dismissOthers();
        }
        this.btnBloqueo = false;
      }, error => {
        console.log(<any>error);
    });
  }

  // itemsTabla(id_actividad) {
  //   return this._fb.group({
  //     actividad_id: [id_actividad, Validators.required],
  //     porcentaje: ['0', Validators.required],
  //   });
  // }

  modificaCalificacion(datos, event, id_materia, i, j) {    
    let calificacion = event.target.value;
    let id_actividad = datos.actividad_id;
    if (calificacion != '' && calificacion) {
    this._grupoService.modificaCalificacion(id_actividad,id_materia, calificacion).subscribe(
      response =>{
        if(response && response['status']){
          this.alumnos[i]['actividadesAlumno'][j]['calificacion'] = Number.parseFloat(calificacion).toFixed(2);
          this.alumnos[i]['actividadesAlumno'][j]['estatus_actividad_id'] = 9;
          alertify.success(response['msg']).dismissOthers();
        }
    }, error => {
        console.log(error)
    });
    }
  }

  modificaCalificacionFinal(alumno, event, index) {    
    let calificacion = event.target.value;
    let id_alumno = alumno.alumno_id;
    if (calificacion != '' && calificacion) {
    this._grupoService.modificaCalificacionFinal(id_alumno,calificacion,this.idAsignaturaGrupo).subscribe(
      response =>{
        if(response && response['status']){
          this.alumnos[index]['calificacion'] = Number.parseFloat(calificacion).toFixed(2);
          alertify.success(response['msg']).dismissOthers();
        }
    }, error => {
        console.log(error)
    });
    }
  }

  calculoCalificacion(){
    this.router.navigate(['/docente/calculo/'+this.idAsignaturaGrupo+'/2'])
  }

  consultaAlumno(busqueda){    
    this.alumnos = null;
    this.cargandoGrupo = true; 
    this._grupoService.busquedaAlumno(this.idAsignaturaGrupo, busqueda).subscribe(
      response =>{ 
          if(response && response['status']) {
            this.alumnos = response['Alumnos'];
          }
          else this.alumnos = null;
          this.cargandoGrupo = false;
      },error =>{
        console.log(<any>error)
    });
  }

  ngOnDestroy() {    
    this.subscription.unsubscribe();    
  }


  editaVisible(index, visible, id_actividad) {
    visible == '1'? visible = '0': (visible == '0'? visible = '1' : null);    
    
    this._grupoService.editaVisible(visible, id_actividad).subscribe(response => {
      if (response && response['status']) {
        this.actividad[index]['visible'] = visible;
        alertify.success(response['msg']).dismissOthers();
      }else {
        alertify.error(response['msg']).dismissOthers();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  cambioCheckbox(evt) {
    let checked = evt.target.checked;    
    if (checked) {
      this.banderaCheckbox = true;
    }else {
      this.banderaCheckbox = false;
    }    
  }
}

