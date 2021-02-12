import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { VideoConferenciaService } from '../services/video-conferencia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbTimeStruct, NgbCalendar, NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { FechaService } from 'src/app/services/fecha.service';

declare var alertify: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  jwt: string;
  idPersona: number;
  videoForm: FormGroup;
  disabled = false;
  Data = [];
  Items = [];
  bandera: boolean = false;
  usuario: any;
  idUsuarioZoom: number;
  idVideoconferencia;
  Videoconferencia;
  idAsignaturaGrupo: number;
  Titulo: string;
  error: string = null;
  today = this.calendar.getToday();
  meridian = true;
  minutos = [0, 15, 30, 45];
  bloqueoBoton = false;
  checked: boolean = false;
  dateChecked: boolean = false;
  items: FormArray;
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
    'Octubre', 'Noviembre', 'Diciembre'];
  arrayMonths = [];
  selectedMonths: any;
  arrayDates: any;

  constructor(
    private formBuilder: FormBuilder,
    private _conferenciaService: VideoConferenciaService,
    private _usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private calendar: NgbCalendar,
    config: NgbTimepickerConfig,
    private _fechaService: FechaService
  ) { 
    config.spinners = false;
  }

  get vF() { return this.videoForm.controls };

  ngOnInit() {
    // this.getUsersZoom();
    this.idVideoconferencia = this.route.snapshot.paramMap.get('id');    
    this.jwt = this._usuarioService.getJWT();
    this.idPersona = this._usuarioService.getIdentity().persona_id;
    let asignatura = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura;
    let docente = this._usuarioService.getIdentity();    
    this.Titulo = `${asignatura} - ${docente.primer_apellido} ${docente.segundo_apellido} ${docente.nombre}`
    
    this.idAsignaturaGrupo = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura_grupo_id;      
    if (this.idVideoconferencia) {
      this._conferenciaService.consultaConferencia(this.jwt, this.idVideoconferencia).subscribe(response => {        
        if (response && response['status']) {
          this.Videoconferencia = response['videoconferencia'];          
        }
        this.inicia();
      }, error => {
        console.log(<any>error);
      });
    }else {
      this.inicia();
    }    
  }
  
  inicia(){    
    this._conferenciaService.consulta(this.jwt, this.idPersona).subscribe(response => {                  
      if (response && response['status']) {
        this.usuario = response['usuario'];        
        this.idUsuarioZoom = this.usuario['usuario_zoom_id'];        
        this.disabled = true;
      }   
      this.Data = [
        // { label: 'API Key', control: 'apiKey', type: 'text', disabled: this.disabled, value: '' },
        // { label: 'API Secret', control: 'apiSecret', type: 'text', disabled: this.disabled, value: '' },
        // { label: 'ID personal de la reunión', control: 'idMeeting', type: 'number', disabled: this.disabled, value: '' },
        { label: 'Titulo de la videoconferencia', control: 'titulo', type: 'text', disabled: false, value: this.Videoconferencia? this.Videoconferencia.nombre : this.Titulo, required: true, hidden: false },
        // { label: 'Url de la videoconferencia', control: 'url', type: 'text', disabled: false, value: this.Videoconferencia? this.Videoconferencia.url_meet : '', required: false, hidden: false },
        { label: 'Descripción de la videoconferencia', control: 'descripcion', type: 'textarea', disabled: false, value: '', required: false, hidden: true }
      ];      
      this.createForm();
    }, error => {
      console.log(<any>error);
    });
  }

  createForm() {
    let fechaInicio: any = '';    
    let horaInicio: any = '';
    let horaFin: any = '';
    let minutosFin: any = '';
    let minutosInicio: any = '';
    let hours: any = '';
    let minutes: any = '';

    if (this.Videoconferencia) {      
                  
      let Inicio = new Date(this.Videoconferencia.fecha_inicio*1000);
      let Fin = new Date(this.Videoconferencia.fecha_fin*1000);
      // let Fin = new Date(this.Videoconferencia.fecha_fin*1000);

      fechaInicio= {year: Inicio.getFullYear(), month: Inicio.getMonth()+1, day: Inicio.getDate()};
      
      // fechaInicio= {year: Inicio.getFullYear(), month: Inicio.getMonth()+1, day: Inicio.getDate()};

      // horaInicio = {hour: Inicio.getHours(), minute: Inicio.getMinutes(), second: Inicio.getSeconds()};
      horaInicio = Inicio.getHours();
      minutosInicio = Inicio.getMinutes();
      horaFin = Fin.getHours();
      minutosFin = Fin.getMinutes();

      let horas = parseInt(horaInicio);
      let minutos = parseInt(minutosInicio);   
      let fin_horas = parseInt(horaFin);
      let fin_minutos = parseInt(minutosFin);

      let horas_Segundos = (fin_horas * 3600) - (horas * 3600);
      let minutos_Segundos = (fin_minutos * 60) - (minutos * 60);

      let segundos = minutos_Segundos + horas_Segundos;

      hours = Math.floor( segundos / 3600 );
      minutes = Math.floor( (segundos % 3600) / 60 );   
            
    }
    
    // let fechaInicio = this.Videoconferencia? this.Videoconferencia.fecha_inicio.replace(" ", "T") : '';
    // let fechaFin = this.Videoconferencia? this.Videoconferencia.fecha_fin.replace(" ", "T") : '';
    this.videoForm = this.formBuilder.group({
      fechaInicio: [ {value: fechaInicio, disabled: false }, Validators.required],
      horaInicio: [ {value: horaInicio, disabled: false }, Validators.required],
      minutosInicio: [ {value: minutosInicio, disabled: false }, Validators.required],
      horas: [ {value: hours, disabled: false }, Validators.required],
      minutos: [{value: minutes, disabled: false }, Validators.required],
      zonaHoraria: new Date().getTimezoneOffset()/60
    });
    
    this.Data.forEach(item => {      
      if (!item.disabled) {
        this.Items.push(item)
        let control = new FormControl( {value: item.value, disabled: false}, Validators[item['required']] )
        this.videoForm.addControl(item.control, control);
      }
    });  
    
    if (this.Videoconferencia && this.Videoconferencia['url_meet'] != null && this.Videoconferencia['url_meet'] != undefined
      && this.Videoconferencia['url_meet'] != "") {          
        this.setUrl(true, 1);
    }
    
    this.bandera = true;
  }

  enviarInformacion() {  
          
    // if (!this.usuario) {
    //   this._conferenciaService.creaUsuario(this.jwt, this.videoForm.value).subscribe(response => {   
    //     if (response && response['status']) {
    //       this.idUsuarioZoom = response['idUsuarioZoom'];
    //       this.creaConferencia();
    //     }      
    //   }, error => {
    //     console.log(<any>error);
    //   });
    // }else {
      this.creaConferencia();
    // }
  }

  creaConferencia() {
    this.bloqueoBoton = true;
    let form = this.videoForm.value;      
    // let duracion = `${form.horas}` 
    let horas = parseInt(form.horaInicio);
    let minutos = parseInt(form.minutosInicio);   
    let fin_horas = parseInt(form.horas);
    let fin_minutos = parseInt(form.minutos);

    let horas_Segundos = (horas * 3600) + (fin_horas * 3600);
    let minutos_Segundos = (minutos * 60) + (fin_minutos * 60);

    let segundos = minutos_Segundos + horas_Segundos;

    let hours = Math.floor( segundos / 3600 );
    let minutes: any = Math.floor( (segundos % 3600) / 60 );    
    
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // let result = `${hours} : ${minutes}`;    
    // let horaF = parseInt(form.horaInicio) + parseInt(form.duracion );
    
    if(hours >= 24) {
      alertify.error('La duración de la videoconferencia no debe pasar del día seleccionado')
    }
    // this.arrayDates.forEach(d => {
    //   // form.arregloFechas.push(d)
    // });
    
    else {
      let duracion = hours - parseInt(form.horaInicio);
      if (duracion > 8 || (duracion == 8 && minutes > 0)) {
        alertify.error('La videoconferencia no debe durar más de 8 horas');
      }else {
        let fechas, tipoFecha;
        if (this.dateChecked) {
          this.arrayDates.forEach(date => {
            let datos = this.formatDate(form, hours, minutes, 1, date);            
            let fInicio = this._fechaService.formatoFecha(datos['fechaFin'], datos['horaInicio'], 0);
            let fFin = this._fechaService.formatoFecha(datos['fechaFin'], datos['horaFin'], 0);
            form.arregloFechas.push({inicio: fInicio, fin: fFin});                  
          });
          fechas = form.arregloFechas;
          tipoFecha = 1;
        }else {
          let datos = this.formatDate(form, hours, minutes, 0);
          let fInicio = this._fechaService.formatoFecha(form.fechaInicio, datos['horaInicio'], 0);
          let fFin = this._fechaService.formatoFecha(datos['fechaFin'], datos['horaFin'], 0);
          fechas = {inicio: fInicio, fin: fFin};
          tipoFecha = 0;
        }
        let edicion = 0;
        if (this.Videoconferencia) {
          edicion = 1;
        }

        this._conferenciaService.creaConferencia(this.jwt, this.videoForm.value, edicion, this.idAsignaturaGrupo, 
          this.idVideoconferencia, fechas, tipoFecha).subscribe(response => {      
          if (response && response['status']) {
            this.bloqueoBoton = false;
            alertify.success(response['msg']).dismissOthers();
            this.router.navigate(['/docente/video-conferencia/']);
            this._conferenciaService.mostrarUsuarioConferencia.emit();
          }else{
            this.bloqueoBoton = false;
            alertify.error(response['msg']).dismissOthers();
          }      
        }, error => {
          console.log(<any>error);
        });
        
      }
    }
      // let fechaInicio = new Date(fInicio).getTime();
      // let fechaFin = new Date(fFin).getTime();
      
      //if (fechaFin - fechaInicio <= 14400000 && fechaInicio < fechaFin) {
        //this.error = null;
    

      /*}else if (fechaFin - fechaInicio > 14400000) {
        this.videoForm.setErrors({invalid: true});
        this.error = 'La videoconferencia no puede durar más de 4 horas';
      }else if (fechaInicio > fechaFin) {
        this.videoForm.setErrors({invalid: true});
        this.error = 'La fecha de inicio debe ser menor a la fecha de fin';
      }*/
    // }
    
  }

  formatDate(form, hours, minutes, type, date = null) {
    let fechaFin = {
      "year": type == 0? form.fechaInicio.year: date.year,
      "month": type == 0? form.fechaInicio.month: date.month + 1,
      "day": type == 0? form.fechaInicio.day: date.day
    }
    let horaInicio = {
      "hour": parseInt(form.horaInicio),
      "minute": parseInt(form.minutosInicio)
    }  
    let horaFin = {
      "hour": hours,
      "minute": parseInt(minutes)
    } 
    return {fechaFin: fechaFin, horaInicio: horaInicio, horaFin: horaFin }
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  setData(id, data) {
    if (id == 1) {
      this.videoForm.get('fechaInicio').setValue(data);
    }else {
      this.videoForm.get('fechaFin').setValue(data);
    }
  }

  // getUsersZoom() {
  //   this._conferenciaService.getUsersZoom().subscribe(response => {
  //     console.log(response);
  //   }, error => {
  //     console.log(<any>error);
  //   });
  // }

  setUrl(event, id = 0) {
    if (id == 0) this.checked = event.target.checked;
    else if (id == 1) this.checked = event;
    
    if (this.checked) {
      this.videoForm.addControl('url', new FormControl(id == 0? '': this.Videoconferencia['url_meet']));
    }else {
      this.videoForm.removeControl('url');
    }    
  }

  setDateChecked(event) {
    this.dateChecked = event.target.checked;
    
    if (this.dateChecked) {
      this.videoForm.addControl('arregloFechas', new FormArray([], Validators.required));
      this.videoForm.removeControl('fechaInicio');
    }else {
      this.videoForm.addControl('fechaInicio', new FormControl('', Validators.required));
      this.videoForm.removeControl('arregloFechas');
      this.selectedMonths = null;
      this.arrayDates = null;
    } 
    
    if (this.arrayMonths.length == 0) {
      this.months.forEach((m,i)=> {
        this.arrayMonths.push({value: i, text: m, checked: false});
      });
    }else {
      this.arrayMonths.forEach(m => {
        m.checked = false;
      });
    }    

    if (this.dateChecked) this.setMonth(new Date().getMonth());

  }

  setMonth(index) {
    this.arrayMonths[index]['checked'] = !this.arrayMonths[index]['checked'];
    this.arrayDates = null;
    this.videoForm.get('arregloFechas').setValue([]);    
    this.selectedMonths = this.arrayMonths.filter(m => m.checked == true).map(e => {
      return {value: e.value, text: e.text}
    });
    if(this.selectedMonths.length == 0) this.selectedMonths = null;
  }

  getDates(evt) {
    this.arrayDates = [];
    evt.forEach(e => { this.arrayDates.push(JSON.parse(e)) });    
    if (this.arrayDates.length > 0) {
      this.videoForm.get('arregloFechas').setErrors(null);
    }else {
      this.videoForm.get('arregloFechas').setErrors({'incorrect': true});
    }
  }

}