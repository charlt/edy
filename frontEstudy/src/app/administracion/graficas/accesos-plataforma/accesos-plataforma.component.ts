import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AccesosPlataformaService } from './accesos-plataforma.service';
import { FechaService } from 'src/app/services/fecha.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-accesos-plataforma',
  templateUrl: './accesos-plataforma.component.html',
  styleUrls: ['./accesos-plataforma.component.scss']
})
export class AccesosPlataformaComponent implements OnInit {

  dataForm: FormGroup;
  jwt: string;
  show: boolean = false;
  loading: boolean = false;

  roles = [];

  years = [
    { value: 2020, text: '2020' }, { value: 2021, text: '2021' }, { value: 2022, text: '2022' },
    { value: 2023, text: '2023' }, { value: 2024, text: '2024' }, { value: 2025, text: '2025' }
  ];

  months = [
    { value: 1, text: 'Enero' }, { value: 2, text: 'Febrero' }, { value: 3, text: 'Marzo' },
    { value: 4, text: 'Abril' }, { value: 5, text: 'Mayo' }, { value: 6, text: 'Junio' }, 
    { value: 7, text: 'Julio' }, { value: 8, text: 'Agosto' }, { value: 9, text: 'Septiembre' },
    { value: 10, text: 'Octubre' }, { value: 11, text: 'Noviembre' }, { value: 12, text: 'Diciembre' }
  ];

  options = [
    { value: 0, text: 'Día' },
    // { value: 1, text: 'Semana' },
    { value: 2, text: 'Mes' }
  ];
  
  days: any;
  number: number = 4;

  Data: any;
  Accesos: Array<any>;

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      // yAxes: [{ stacked: true, ticks: { beginAtZero: true, stepSize: 2 } }]
      yAxes: [{ stacked: true, ticks: { beginAtZero: true, precision: 0 } }]
    }
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];
  public chartColors: Array<any> = [{ backgroundColor: [], borderColor: [] }];

  constructor(
    private formBuilder: FormBuilder,
    private _accesosPlataformaService: AccesosPlataformaService,
    private _fechaService: FechaService,
    private _catalogoService: CatalogoService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this._catalogoService.consultaRol(this.jwt).subscribe(response => {
      if (response && response['status']) {
       let roles = response['rol'].filter(r => r.rol == 'Alumno' || r.rol == 'Docente'); 
       roles.forEach(rol => {
         this.roles.push({value: rol.rol_id, text: rol.rol})
       });
       this.setData();      
      }
    }, error => {
      console.log(<any>error);
    });   
  }

  setData() {
    let date = new Date();
    this.dataForm = this.formBuilder.group({
      rol: [this.roles[0]['value'], Validators.required],
      year: [date.getFullYear(), Validators.required],
      month: [date.getMonth() + 1, Validators.required],
      search: ['0', Validators.required],
      option: [date.getDate(), Validators.required]
    });
    this.getDaysPerMonth();
    this.Data = [
      { label: 'Elige el rol', iterator: this.roles, control: 'rol', size: 'col-4' },
      { label: 'Elige el año', iterator: this.years, control: 'year', size: 'col-4' },
      { label: 'Elige el mes', iterator: this.months, control: 'month', size: 'col-4' },
      { label: 'Elige el tipo de búsqueda', iterator: this.options, control: 'search', size: 'col-6' },
      { label: 'Elige el día', iterator: this.days, control: 'option', size: 'col-6' }
    ];
    this.dataForm.get('month').valueChanges.subscribe(value => {
      if (this.dataForm.get('search').value != '') {
        this.setErrors(3);
      }
      if (this.dataForm.get('option')) {
        this.Data.splice(this.Data.length - 1, 1);
        this.dataForm.removeControl('option');
        this.number = 4;
        this.Data.forEach(item => {
          item.size = 'col-3';
        });
      }
    });
    this.dataForm.get('search').valueChanges.subscribe(value => {
      this.number = 4;
      let data = this.getDaysInMonth(this.dataForm.get('year').value, this.dataForm.get('month').value);
      if (this.dataForm.get('option')) {
        this.Data.splice(this.Data.length - 1, 1);
        this.dataForm.removeControl('option');
      }
      this.Data.forEach(item => {
        item.size = 'col-3';
      });
      this.setErrors(4);
      if (value == 0) {
        this.dataForm.addControl('option', new FormControl('', Validators.required));
        this.dataForm.get('option').setValue('');
        this.getDaysPerMonth();
        this.number = 5;
        this.Data.push({ label: 'Elige el día', iterator: this.days, control: 'option' });
        this.Data.forEach((item, i) => {
          if (i < 3) item.size = 'col-4';
          else item.size = 'col-6';
        });        
      }else if (value == 2) {
        this.days = data;
      }      
    }); 
    this.sendData();
  }

  getDaysPerMonth() {
    let daysPerMonth = this.getDaysInMonth(this.dataForm.get('year').value, this.dataForm.get('month').value);
    this.days = [];
    for (let i = 0; i < daysPerMonth; i++) {
      this.days.push({value: i+1, text: i+1});   
    }
  }

  get dF() { return this.dataForm.controls }

  getDaysInMonth (year, month) {    
    return new Date(year, month, 0).getDate();
  };

  sendData() {
    this.loading = true;
    this.show = false;
    let form = this.dataForm.value;
    let fecha, fecha_inicio, fecha_fin;
    
    if (form.search == 0) {
      fecha = {year: form.year, month: parseInt(form.month), day: parseInt(form.option)};
      fecha_inicio = this._fechaService.formatoFecha(fecha, '', 1) + ' 00:00:00';
      fecha_fin = this._fechaService.formatoFecha(fecha, '', 1) + ' 23:59:59';
    }else if (form.search == 2) {
      fecha_inicio = this._fechaService.formatoFecha({year: form.year, month: parseInt(form.month), day: 1}, '', 1) + ' 00:00:00';
      fecha_fin = this._fechaService.formatoFecha({year: form.year, month: parseInt(form.month), day: this.days}, '', 1) + ' 23:59:59';
    }
    this._accesosPlataformaService.consultaAccesos(fecha_inicio, fecha_fin, form.rol, form.search).subscribe(response => {
      if (response && response['status']) {
        this.Accesos = response['accesos'];
        this.setDatos();
        this.loading = false;
      }else {
        this.Accesos = null;
        this.loading = false;
        this.show = false;
      }
    }, error => {
      console.log(<any>error);
    });
  }

  setErrors(level){        
    for (let i = level; i < this.Data.length; i++) {            
      this.dataForm.get(this.Data[i]['control']).setValue('');
    }
  }

  setDatos() {
    let datos = [];
    let form = this.dataForm.value;
    this.chartColors[0]['backgroundColor'] = [];
    this.chartColors[0]['borderColor'] = [];
    this.barChartData = [];
    this.barChartLabels = [];

    this.Accesos.forEach(acceso => {
      let color = "hsla(" + ~~(360 * Math.random()) + "," + (25 + 70 * Math.random()) + "%,"+
        (70 + 10 * Math.random()) + "%,1)";
      if(form.search == 0) {
        let hora;
        if (parseInt(acceso.hora) < 12 && parseInt(acceso.hora) > 0) hora = acceso.hora + ' a.m';
        else if (parseInt(acceso.hora) == 0) hora = '12 a.m';
        else if (parseInt(acceso.hora) == 12) hora = acceso.hora + ' p.m';
        else if (parseInt(acceso.hora) > 12) hora = (parseInt(acceso.hora) - 12) + ' p.m';
        this.barChartLabels.push(hora);
      } 
      else if (form.search == 2) this.barChartLabels.push('Día: ' + acceso.dia);
      datos.push(acceso.accesos);
      this.chartColors[0]['backgroundColor'].push(color);
      this.chartColors[0]['borderColor'].push(color);
    });
    
    let label;
    if (form.search == 0) label = `Accesos día ${form.option} de ${this.months[parseInt(this.dataForm.get('month').value)-1]['text']} del ${this.dataForm.get('year').value}`;
    else if(form.search == 2) label = `Accesos en el mes de ${this.months[parseInt(this.dataForm.get('month').value)-1]['text']} del ${this.dataForm.get('year').value}`;
    
    this.barChartData.push({ data: datos, label: label });
    this.show = true;
  }
}
