import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { TrActividad } from 'src/app/models/learning/trActividad';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadService } from '../../../../services/actividad.service';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import {adminEditor} from 'src/app/models/adminEditor';
import { GLOBAL} from 'src/app/services/global';
import { RubricasService } from 'src/app/administracion/rubricas/services/rubricas.service';
import { NgbModal, NgbTimepickerConfig, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FechaService } from 'src/app/services/fecha.service';
import { AsignaturaService } from 'src/app/administracion/asignatura/services/asignatura.service';



declare var alertify;

@Component({
  selector: 'form-actividad',
  templateUrl: './form-actividad.component.html',
  styleUrls: ['./form-actividad.component.scss']
})
export class FormActividadComponent implements OnInit {
  
  title;
  
  fechaIni;
  fechaFin;
  

  ponderacionTotal : number = 100;
  @Output() sucessEvent = new EventEmitter<any>();

  idModulo : number;
  idAsignatura:number;

  actividadForm: FormGroup;
  idActividad;  
  tipoActividad;
  actividad : TrActividad;
  dificultad;
  resolucion;
  contenidoActividad;
  importanciaActividad
  ponderacion: number;
  jwt;
  items;
  actividadSQA;
  urlArchivo;
  ponderacionMax: number;
  botonFuente: boolean = false;
  modulosActivos = [];
  urlAssets;
  rubricas;

  idCKeditor;
  adminEditor = adminEditor;
  idRol: number;
  cargando;
  tipoAdmin;
  today = this.calendar.getToday();
  meridian = true;
  errorFecha: boolean = false;
  disablePreview: boolean = false;

  idModuloNuevo;
  modulos;
  
  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _actividadService : ActividadService,
    private _rubricaService: RubricasService,
    private modalService: NgbModal,
    private config: NgbTimepickerConfig,
    private _fechaService: FechaService,
    private _asignaturaService: AsignaturaService,
    private calendar: NgbCalendar,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {
    config.spinners = false;
   }

  get f() { return this.actividadForm.controls; }
  get sf() { return this.actividadForm.controls.items}

  // log(val) { console.log(val); }

  ngOnInit() {    

    

    this.urlAssets = GLOBAL.urlAssets;
    let identity = this._usuarioService.getIdentity();
    this.jwt = this._usuarioService.getJWT();

    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    
    this.idActividad = this.route.snapshot.parent.params['id'];
    this.idModulo = this.route.snapshot.parent.parent.params['id'];
    this.idAsignatura = this.route.snapshot.parent.parent.parent.parent.parent.parent.params['id'];
    
    this.idRol = parseInt(this._usuarioService.getRol().rol_id);        
    

    this.actividadForm = this.formBuilder.group({
      claveActividad: ['', Validators.required],
       nombreActividad: ['', Validators.required],
       tipoActividad: ['', Validators.required],
       instruccion: ['', Validators.required],
       contenido: ['', requiredFileType(0)],
       fecha: [false],   
       hora: [false],   
       fechaInicio: [''],   
       fechaFin: [''],
       horaInicio: ['', Validators['null']], 
       horaFin: ['', Validators['null']], 
       idRubrica: [0],
       zonaHoraria: new Date().getTimezoneOffset()/60
     });
     
     
     if(this.idActividad){
 

      this._actividadService.consultaActividad(this.idActividad,this.jwt).subscribe(
        response =>{
          if(response && response['status']){
            this.actividad = response['actividad'][0];
            this.inicializaActividad();
            this.consultaTipoActividad(this.actividad.tipo_actividad_id);
            this.consultaPonderacion(this.actividad.ponderacion);
          }
        },error=>{
          console.log(error)
        });       
      
     }
    else{
      this.actividad = new TrActividad();
      this.title = "Crear nueva actividad";
      this.consultaTipoActividad(null);
      this.consultaPonderacion(null);
    }

            
    this._actividadService.consultaDificultad(this.jwt).subscribe(response =>{
      if(response && response['status']){
        this.dificultad = response['dificultad'];
      }
    },error =>{
    console.log(<any>error)
    });

    this._actividadService.consultaResolucion(this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.resolucion = response['metodos'];
            }

    },error =>{
      console.log(<any>error)
    });

    this._actividadService.consultaImportanciaActividad().subscribe(
      response =>{
          if(response && response['status']){
            this.importanciaActividad = response['actividades'];
          }

    },error =>{
      console.log(<any>error)
    });

  }

  consultaPonderacion(ponderacionActual){
      this._actividadService.sumaPonderacion(this.idAsignatura).subscribe(
        response =>{
          if(response['status']){          
            
            this.ponderacionMax = this.ponderacionTotal - parseInt(response['ponderacionTotal']);
            
            if(this.ponderacionMax < 0) this.ponderacionMax = 0; 

            if(ponderacionActual){
              this.ponderacionMax = this.ponderacionMax + parseInt(ponderacionActual);
            }

            
          }
      },error =>{
        
        console.log(<any>error)
      });
  }

  consultaTipoActividad(id_tipo_actividad){
    this._actividadService.consultaTipoActividad().subscribe(response =>{
      if(response && response['status']){
        
          this.tipoActividad = response['actividades'];
          if (this.idRol != 1) {
            let array = this.tipoActividad.map(a => {return a.tipo_actividad_id});
            
          }      
        
        this.valueChanges();
        if(id_tipo_actividad){
          this.generateItems(id_tipo_actividad);
        }
          
      }
    },error =>{
      console.log(<any>error)
    });
  }

  openModulo(content) {
    this.idModuloNuevo = '';
    let tipo,idAsignatura;
    if(this.idRol == 1){
      idAsignatura= this.idAsignatura;
      tipo = 1
    }
    else{
      idAsignatura = this.route.snapshot.parent.parent.parent.parent.params['id'];
      tipo = 3;
    }
      

    this._asignaturaService.consultaModulo(idAsignatura,tipo,null).subscribe(
      response=>{
        if(response && response['status']){
          let modulos = response['modulos'];

          this.modulos = modulos.filter(function (modulo) {
            console.log(modulo.modulo_id)
            console.log(this.idModulo)
            return modulo.modulo_id != this.idModulo;
          }.bind(this));
          
        }else{
          this.modulos= []
        }
      },error=>{
        console.log(error)
        this.modulos= []
      }
    )
    this.modalService.open(content, {size: 'sm'}).result.then((result) => {
    }, (reason) => {
    });
}

moverBloque(){
  this._actividadService.cambiarModulo(this.idActividad,this.actividad.orden,this.idModulo,this.idModuloNuevo).subscribe(
    response =>{
      if(response && response['status']){
          alertify.success('Actividad movida exitosamente')
          this._location.back();
      }else{

      }

    },error=>{
      console.log(error)
    }
  )
 
}

  inicializaActividad(){
    let shuffle;
    let tipoActividad,dificultad,resolucion; //es necesario declararla con un valor de lo contrario no manda información

    this.ponderacionMax = this.ponderacionTotal;

    let _fechaInicio: any = '';
    let _fechaFin: any = '';
    let _horaInicio: any = '';
    let _horaFin: any = '';
    if (this.actividad){ //si existe un valor de actividad tomo el id_actividad para su posterior uso

      if (this.actividad.fecha_inicio) {
        let Inicio = new Date(this.actividad.fecha_inicio * 1000);
        _fechaInicio = {year: Inicio.getFullYear(), month: Inicio.getMonth()+1, day: Inicio.getDate()};
        _horaInicio = {hour: Inicio.getHours(), minute: Inicio.getMinutes(), second: Inicio.getSeconds()};

        this.actividadForm.get('fecha').setValue(true);
        if(Inicio.getHours() != 0 || Inicio.getMinutes() !=0){
          this.actividadForm.get('hora').setValue(true);
        }
      }
      if (this.actividad.fecha_fin) {
        let Fin = new Date(this.actividad.fecha_fin * 1000);      
        _fechaFin = {year: Fin.getFullYear(), month: Fin.getMonth()+1, day: Fin.getDate()};
        _horaFin = {hour: Fin.getHours(), minute: Fin.getMinutes(), second: Fin.getSeconds()};
      }
      
      this.idActividad = this.actividad.actividad_id;
      tipoActividad = this.actividad.tipo_actividad_id;
      dificultad = this.actividad.dificultad_id;
      resolucion = this.actividad.metodo_resolver_id;
      this.ponderacion = parseInt(this.actividad.ponderacion);
      shuffle = this.actividad.aleatorio ?  this.actividad.aleatorio  : 0 ;
      
    }else{ //si no sólo declaro actividad como un elemento vacio, es necesario para el funcionamiento del formulario
      this.actividad = new TrActividad();
      tipoActividad =  ""
      dificultad = 1;
      resolucion = 1;
      shuffle = 0;
      this.ponderacion = 0;
  }

    if (this.actividad.tipo_calificacion == '2') {
      this.mostrar_rubrica();
    }

    this.actividadForm.get('nombreActividad').setValue(this.actividad.actividad_nombre);
    this.actividadForm.get('claveActividad').setValue(this.actividad.actividad_clave);
    this.actividadForm.get('tipoActividad').setValue(tipoActividad);
    this.actividadForm.get('instruccion').setValue(this.actividad.instruccion);
    this.actividadForm.get('contenido').setValue('');
    this.actividadForm.get('fechaInicio').setValue(_fechaInicio);
    this.actividadForm.get('fechaFin').setValue(_fechaFin);
    this.actividadForm.get('horaInicio').setValue(_horaInicio);
    this.actividadForm.get('horaFin').setValue(_horaFin);
    this.actividadForm.get('idRubrica').setValue(this.actividad.rubrica_id);

    this._actividadService.consultaContenido(this.idActividad,this.jwt).subscribe(response =>{
      if(response && response['status']){
        this.contenidoActividad = response['contenido'];
      }
    },error =>{
      console.log(<any>error)
    });
    
  }

  vistaArchivo(id,index,_visto){
    this.contenidoActividad[index].visto = _visto;
    if (this.contenidoActividad[index].visto == 0 || !this.contenidoActividad[index].visto){
      this.contenidoActividad[index].visto = 1;
    }else if(this.contenidoActividad[index].visto == 1){
      this.contenidoActividad[index].visto = 0;
    }
      this._actividadService.vistaArchivo(id, this.contenidoActividad[index].visto, this.jwt).subscribe(response =>{      
      //   if(response && response['status']){
      //   console.log(response);   
      // }
    },error =>{
    console.log(<any>error)
    });
  }

  valueChanges(){
    this.actividadForm.get('tipoActividad').valueChanges.subscribe(value => {          
      this.deleteControls();   
      this.generateItems(value);
    }); 
  }

  generateItems(value){ 
    let selected = this.tipoActividad.find(r => r.tipo_actividad_id == value);    
    let a = this.actividad;   
    let aleatorio = a.aleatorio ? a.aleatorio : '0';    
    let controls;

    if (value == '2') {
      let total_preguntas: any = this.actividad.num_total_preguntas;      
      if (parseInt(total_preguntas) > 0 ) total_preguntas = true;
      else if(parseInt(total_preguntas) == 0 || !total_preguntas) total_preguntas = false;
      
      controls = [{ control: 'tipoEvaluacion', value: a.tipo_calificacion? a.tipo_calificacion: '3', show: selected.tipo_evaluacion }, 
      { control: 'bullet', value: a.numero_mostrado? a.numero_mostrado: '1', show: selected.bullet }, 
      { control: 'aleatorio', value: aleatorio, show: selected.aleatorio },
      { control: 'numeroIntentos', value: a.num_intentos? a.num_intentos: 1, show: selected.num_intentos }, 
      { control: 'resolucion', value: a.metodo_resolver_id? a.metodo_resolver_id: '0', show: selected.metodo_resolucion },
      { control: 'importancia', value: a.importancia_actividad_id? a.importancia_actividad_id: '1', show: selected.importancia_actividad },
      { control: 'ponderacion', value: this.ponderacion? this.ponderacion: 0, show: selected.ponderacion}, 
      { control: 'unica', value: a.unica? a.unica: '0', show: selected.unica },
      { control: 'portafolio', value: a.portafolio? a.portafolio: '0', show: selected.portafolio },
      
      //{ control: 'totalPreguntas', value: total_preguntas, show: '1' }
      ];
      /*if (total_preguntas) {
        controls.push({ control: 'numeroPreguntas', value: a.num_total_preguntas, show: '1' })
      }*/
    }else {
      controls = [{ control: 'tipoEvaluacion', value: a.tipo_calificacion, show: selected.tipo_evaluacion }, 
      { control: 'bullet', value: a.numero_mostrado, show: selected.bullet }, 
      { control: 'aleatorio', value: aleatorio, show: selected.aleatorio },
      { control: 'numeroIntentos', value: a.num_intentos, show: selected.num_intentos }, 
      { control: 'resolucion', value: a.metodo_resolver_id, show: selected.metodo_resolucion },
      { control: 'importancia', value: a.importancia_actividad_id, show: selected.importancia_actividad },
      { control: 'ponderacion', value: this.ponderacion, show: selected.ponderacion}, 
      { control: 'unica', value: a.unica, show: selected.unica },
      { control: 'portafolio', value: a.portafolio, show: selected.portafolio },
    ];
    }
    this.addControls(controls);    
  }

  deleteControls(){
    let controls = ['tipoEvaluacion', 'bullet', 'aleatorio', 'numeroIntentos', 'resolucion', 'ponderacion', 
    'unica','importancia', 'portafolio', /*'totalPreguntas', 'numeroPreguntas'*/];
    controls.forEach(control => {      
      if (this.actividadForm.get(control)) {
        this.actividadForm.removeControl(control);
      }
    });
  }
  
  addControls(controls){
    controls.forEach(data => {
      if (data.control == 'ponderacion' && data.show == '1') {
        this.actividadForm.addControl( data.control, new FormControl( data.value, 
          Validators.compose([Validators.min(0), (control: AbstractControl) => Validators.max(this.ponderacionMax)(control), Validators.required])) ); 
      }else if (data.show == '1'){
        this.actividadForm.addControl( data.control, new FormControl( data.value, Validators['required']) ); 
      }
    });    
    
    /*if (this.actividadForm.get('totalPreguntas')) {
      this.actividadForm.get('totalPreguntas').valueChanges.subscribe(value => {
        if (value) this.actividadForm.addControl('numeroPreguntas', new FormControl('', Validators.required));
        else this.actividadForm.removeControl('numeroPreguntas');
      })
    }        */
  }

  generaClaveAsign(){
    let nombre = this.actividadForm.get('nombreActividad').value;
    let palabras = nombre.split(' ');
    let iniciales = '';
    let clave;
    palabras.forEach(_palabra => {
      iniciales = iniciales + _palabra.substr(0,1)  
    });
    clave = iniciales.toUpperCase();
    this.actividadForm.get('claveActividad').setValue(clave);
  }

  openModal(content, urlArchivo) {
    this.modalService.open(content, { size: 'lg' });
    // let _url = urlArchivo.splice(0,1);
    // console.log(_url);
    this.urlArchivo = this.urlAssets + urlArchivo;
  }

  verDatos() {
    console.log(this.actividadForm.value);
  }

  guardarBorrador(){
    this.cargando = true;
    this._actividadService.guardaContenido(this.actividadForm,this.idActividad,this.jwt, this.idModulo).subscribe(
      response =>{
            if(response && response['status']){
              alertify.success(response['msg'])
              if (response['id_actividad'])this.idActividad = response['id_actividad'];              
              this._actividadService.consultaContenido(this.idActividad,this.jwt).subscribe(
                response =>{
                  if(response && response['status']){
                    this.contenidoActividad = response['contenido'];
                    this.cargando = false;                 
                  }
                },
                error =>{
                  console.log(error)
                });

              this.sucessEvent.emit(
                {
                  'status': response['status'],
                  'idPregunta' : response['idPregunta']
                });//si se insertó correctamente se le agrega la asignatura a la asignatura
            }else{
              alertify.error(response['msg'])

            }
    },error =>{
      console.log(<any>error)
    });
  }

  eliminarContenido(id,index){
    alertify.confirm('¿Deseas eliminar el contenido?',
      function(){
        this._actividadService.eliminaContenido(id,this.jwt).subscribe(
          response =>{
            if(response && response['status']){
                    this.contenidoActividad.splice(index,1);
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
        alertify.error('Cancel');
      });
                
  }

  hasError( error: string ) {
    const control = this.actividadForm.get('contenido');
    return control.dirty && control.hasError(error);
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  setData(id, data) {
    if (id == 1) {
      this.actividadForm.get('fechaInicio').setValue(data);
    }else {
      this.actividadForm.get('fechaFin').setValue(data);
    }
  }

  enviarInformacionActividad(id = 0, url = ''){    
    if (id == 1) this.disablePreview = true;
    this.actividadForm.get('fechaInicio').setErrors(null);
    this.actividadForm.get('fechaFin').setErrors(null);    
    if (this.actividadForm.invalid) {
      Object.keys(this.actividadForm.controls).forEach( controlKey => {
        this.actividadForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    
    if (!this.botonFuente) {
      // let boton = document.getElementById(this.idCKeditor);
      // console.log(this.idCKeditor);
      // boton.click();
    // }   
    let form = this.actividadForm.value; 

      if ( ((!form.fechaInicio || form.fechaInicio == '') && (form.horaInicio != '' && form.horaInicio)) || 
          ((!form.fechaFin || form.fechaFin == '') && (form.horaFin != '' && form.horaFin)) ) {
        this.errorFecha = true;
      }else {
        this.errorFecha = false;
        let fInicio, fFin;

        if (!form.fecha || ((form.fechaInicio == '' || !form.fechaInicio) && (form.horaInicio == '' || !form.horaInicio))) fInicio = '0000-00-00 00:00:00';
        else if (!form.hora || ((form.fechaInicio != '' && form.fechaInicio) && (form.horaInicio == '' || !form.fechaInicio)))
          fInicio = this._fechaService.formatoFecha(form.fechaInicio, '', 1) + ' 00:00:00';
        else if ((form.fechaInicio == '' || !form.fechaInicio) && (form.horaInicio != '' && form.horaInicio))
          fInicio = '0000-00-00 ' + this._fechaService.formatoFecha('', form.horaInicio, 2);
        else if ((form.fechaInicio != '' && form.fechaInicio) && (form.horaInicio != '' && form.horaInicio))
          fInicio = this._fechaService.formatoFecha(form.fechaInicio, form.horaInicio, 0);
  
          
        if (!form.fecha || ((form.fechaFin == '' || !form.fechaFin) && (form.horaFin == '' || !form.horaFin))) fFin = '0000-00-00 00:00:00';
        else if (!form.hora || ((form.fechaFin != '' && form.fechaFin) && (form.horaFin == '' || !form.fechaFin)))
          fFin = this._fechaService.formatoFecha(form.fechaFin, '', 1) + ' 23:59:00';
        else if ((form.fechaFin == '' || !form.fechaFin) && (form.horaFin != '' && form.horaFin))
          fFin = '0000-00-00 ' + this._fechaService.formatoFecha('', form.horaFin, 2);
        else if ((form.fechaFin != '' && form.fechaFin) && (form.horaFin != '' && form.horaFin))
          fFin = this._fechaService.formatoFecha(form.fechaFin, form.horaFin, 0);
        
        this._actividadService.modificaActividad(this.actividadForm,this.idModulo,this.idActividad,this.jwt,
          fInicio, fFin).subscribe(
          response =>{
              if(response && response['status']){
                
                if(!this.idActividad) this.idActividad = response['idActividad'];
                
                if(this.actividadForm.get('tipoActividad').value == "2" && id == 0){
                  this.router.navigate(['./preguntas/'+this.idActividad+'/nuevo'],{ relativeTo: this.route.parent.parent });
                }else if(this.actividadForm.get('tipoActividad').value != "2" && id == 0) {
                  this._location.back();
                }else if(id == 1) {
                  this.router.navigate(['./'+url+ '/'+this.idActividad],{ relativeTo: this.route.parent.parent });
                }
                
                alertify.success(response['msg'])
                
              }else{
                alertify.error(response['msg'])
              }

              this.disablePreview = false;

          },error =>{
          console.log(<any>error)
        });
      }    
    }else{
      alertify.error("Para guardar los cambios da click de nuevo en el botón Fuente HTML").dismissOthers();
    }

  }

  mostrar_rubrica(){
    this._rubricaService.catalogo(this.jwt).subscribe(response=>{
      if(response && response['status']){
        this.rubricas = response['rubricas'];
      }
    },error=>{
      console.log(error);
    });
  }

  comienza(event){
    let self = this;
    let url = GLOBAL.url;
    let urlAssets = GLOBAL.urlAssets;
    let jwt = this.jwt;
    let idModulo = ""+this.idModulo+"";   

    event.editor.on('key', function( evt ) {
      var myEditor = this;
      //if delete or backspace pressed
      if ( ( evt.data.keyCode in { 8: 1, 46: 1 } ) ) {
          //get the last element
          var lastElement = myEditor.elementPath().lastElement,
            // lastElementName = lastElement.getName(),
            lastElementNode = lastElement.$; //native DOM object
            //see what properties the node has
          var src = lastElementNode.getAttribute("src");
          if (src) {
            var array = src.split("assets");          
            var url = 'assets' + array[1];
            self._actividadService.eliminaImagen(url).subscribe(response => {
              if (response && response['status']) 
                alertify.success(response['msg']).dismissOthers();
              else 
                alertify.error(response['msg']).dismissOthers();
            }, error => {
              console.log(<any>error);
            });
          }
      }
    });

    event.editor.on( 'fileUploadRequest', function( evt ) {
      var fileLoader = evt.data.fileLoader,
      formData = new FormData(),
      xhr = fileLoader.xhr;
      xhr.open('POST',url +'extras/archivo/carga_ckeditor.php', true);
      //xhr.setRequestHeader('Content-type', "multipart/form-data");
      formData.append('jwt', jwt);
      formData.append('nom_carpeta','modulo');
      formData.append('id', idModulo );
      formData.append('file', fileLoader.file, fileLoader.fileName);
      fileLoader.xhr.send( formData );
      evt.stop();
      // Prevented the default behavior.
    }, null, null, 4 );

    event.editor.on( 'fileUploadResponse', function( evt ) {
      // Prevent the default response handler.
      evt.stop();
      // Get XHR and response.
      var data = evt.data,
        xhr = data.fileLoader.xhr,
        response = xhr.responseText.split( '|' );
      if ( response[1] ) {
        // An error occurred during upload.          
        data.message = response[1];
        evt.cancel();
      }else {
        var msg = JSON.parse(response[0]);
        // console.log(response[0])
        // console.log(msg);
        setTimeout(() => {
          self.getData(event);
        }, 10);
        data.url = urlAssets + msg.url;        
      }      
    });
  }



  getData(event: any) {
    this.actividadForm.controls['instruccion'].setValue(event.editor.getData());    
  }

  btnSource(evt:any){
    // this.modulosActivos = [];
    // let numero = 0;
    // this.modulo.forEach(mod => {
    //   if (mod.actividades) {
    //     for (let i = 0; i < mod.actividades.length; i++) {
    //       if (mod.actividades[i].editar) {
    //         this.modulosActivos.push(numero)
    //         numero++;
    //       }          
    //     }
    //   }
    // });
    // console.log(this.modulosActivos)
    let parent = evt.target.classList;
    if(parent[1]){
      let sourceBtn = parent[1].substr(0, 18);
      if (sourceBtn === "cke_button__source") {
        this.botonFuente = !this.botonFuente;
        // if (this.botonFuente) {
        //   alertify.error("Para guardar los cambios da click de nuevo en el botón Fuente HTML").dismissOthers();
        // }else{
        //   alertify.success("Es posible guardar la información").dismissOthers();
        // }
      }
      // if (this.modulosActivos.length == 1) {
      //   this.idCKeditor = document.getElementsByClassName(parent[1])[0].id;
      // }
      // console.log(this.idCKeditor)
      // console.log(this.indexActividad)
      // console.log(document.getElementsByClassName(parent[1]))
      // console.log(div)
    }
  }

    
  redireccion(url){
    this.enviarInformacionActividad(1, url);
  }
  
  alertUnica() { 
    alertify.warning("Esta forma de evaluación reemplaza todas las calificaciones de las actividades anteriores").dismissOthers();
  }


}
