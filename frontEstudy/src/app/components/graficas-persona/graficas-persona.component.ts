import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { GraficasPersonaService } from './graficas-persona.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RolService } from 'src/app/services/rol.service';
import { EncabezadoPersonaService } from '../encabezado-persona/encabezado-persona.service';

@Component({
  selector: 'graficas-persona',
  templateUrl: './graficas-persona.component.html',
  styleUrls: ['./graficas-persona.component.scss']
})
export class GraficasPersonaComponent implements OnInit {

  title: string;
  searchForm: FormGroup;
  @Input() idPersona: any;

  years = [2020, 2021, 2022, 2023, 2024, 2025];
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  Accesos: any = [];
  month: string;
  show: boolean = false;
  loading: boolean = false;
  idRol: any;
  jwt: string;
  flag: boolean = false;
  persona;

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true, ticks: { beginAtZero: true, stepSize: 2 } }]
    }
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];
  public chartColors: Array<any> = [{ backgroundColor: [], borderColor: [] }];

  constructor(
    private _usuarioService: UsuarioService,
    // private _alumnosService: AlumnoService,
    private route: ActivatedRoute,
    private _graficasService: GraficasPersonaService,
    private formBuilder: FormBuilder,
    private _rolService: RolService,
    private __encabezadoService: EncabezadoPersonaService
  ){
    // this.title= "Consulta de accesos";
    // this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
    // this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit(){
    this.jwt = this._usuarioService.getJWT();
    this._rolService.consultaRol(this.jwt, this.idPersona).subscribe(response => {      
      if (response && response['status']) {
        this.idRol = response['roles'][0]['rol_id'];        
        let fecha = new Date();
        let mes = fecha.getMonth();
        let anio = fecha.getFullYear();
        this.searchForm = this.formBuilder.group({
          month: [mes, Validators.required],
          year: [anio, Validators.required]
        });
        this.buscarAccesos();
        if(this.idRol == 2){
          this.consultaPersona();
        }
      }
    }, error => {
      console.log(<any>error);
    });
  }

  consultaPersona(){
    this.__encabezadoService.consultaPersona(this.idPersona, 2).subscribe(response => {      
      if (response && response['status']) {
        this.persona = response['persona'];
        console.log(this.persona);
      }
    }, error => {
      console.log(<any>error);
    });
  }

  buscarAccesos() {  
    this.Accesos = [];
    this.show = false;
    this.loading = true;
    this.barChartLabels = [];
    this.barChartData = [];
    this.month = this.searchForm.get('month').value;
    let year = this.searchForm.get('year').value;
    this._graficasService.consultaAccesosMes(this.idPersona, this.month, year).subscribe(response =>{  
      if(response && response['status']){
        this.Accesos = response['registros'];
        this.setDatos();
        this.loading = false;
      }else {
        this.Accesos = null;
        this.loading = false;
      }
      this.flag = true;
    },error =>{
      console.log(<any>error)
    });
  }

  setDatos() {
    let datos = [];
    this.chartColors[0]['backgroundColor'] = [];
    this.chartColors[0]['borderColor'] = [];

    this.Accesos.forEach(acceso => {
      let color = "hsla(" + ~~(360 * Math.random()) + "," + (25 + 70 * Math.random()) + "%,"+
        (70 + 10 * Math.random()) + "%,1)";
      this.barChartLabels.push('Día: ' + acceso.dia);
      datos.push(acceso.accesos);
      this.chartColors[0]['backgroundColor'].push(color);
      this.chartColors[0]['borderColor'].push(color);

    });

    console.log(this.chartColors);
    
    this.barChartData.push({data: datos, label: `Accesos en el mes de ${this.months[parseInt(this.month)-1]}`});
    this.show = true;
  }


  

}
