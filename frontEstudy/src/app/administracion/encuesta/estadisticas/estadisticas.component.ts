import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../services/encuesta.service';
import { ActivatedRoute } from '@angular/router';
import { randomColor } from 'randomcolor';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  idEncuesta: number;

  labelsReactivos: any;
  idsReactivos: any;
  Reactivos: any = [];
  labelsAbiertas: any;
  idsAbiertas: any;
  Abiertas: any = [];

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      // yAxes: [{ stacked: true, ticks: { beginAtZero: true, stepSize: 2 } }]
      yAxes: [{ stacked: true, ticks: { beginAtZero: true, precision: 0 } }]
    }
  };
  public barChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public barChartLegend = true;
  public barChartData = [];
  public barChartColors: Array<any> = [{ backgroundColor: [], borderColor: [] }];

  public pieChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
    // ,
    // plugins: {
    //   datalabels: {
    //     formatter: (value, ctx) => {
    //       const label = ctx.chart.data.labels[ctx.dataIndex];
    //       return label;
    //     },
    //   },
    // }
  };
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [];

  constructor(
    private _encuestaService: EncuestaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idEncuesta = parseInt(this.route.snapshot.paramMap.get('id'));
    this.consultaEstadísticas();
  }

  consultaEstadísticas() {
    this._encuestaService.consultaEstadísticas(this.idEncuesta).subscribe(response => {
      console.log(response);
      if (response && response['status']) {
        this.setArreglos(response, 'reactivos', 'Reactivos');
        this.setArreglos(response, 'abiertas', 'Abiertas');
        this.setPieCharts();

        console.log(this.Abiertas, this.idsAbiertas, this.labelsAbiertas);
      }
    }, error => {
      console.log(<any>error);
    });
  }

  setPieCharts() {
    this.pieChartColors = [];
    this.pieChartData = [];
    this.pieChartLabels = [];

    this.Reactivos.forEach((reactivo, i) => {
      let labels = [];
      let data = [];
      let colors = [];

      reactivo.forEach(item => {
        let color = "hsla(" + ~~(360 * Math.random()) + "," + (25 + 70 * Math.random()) + "%,"+
          (70 + 10 * Math.random()) + "%,1)";
        // let color = randomColor();
        labels.push(item.respuesta);
        data.push(item.num_respuestas);
        colors.push(color);              
      });
      this.pieChartColors.push([{ backgroundColor: colors }]);
      this.pieChartLabels.push(labels);
      this.pieChartData.push(data);
    });
  }

  setArreglos(datos, tipo, variable) {
    let ids = datos[tipo].map(r => { return r.campo_encuesta_id });
    let labels = datos[tipo].map(r => { return r.pregunta});
    this['ids' + variable] = ids.filter(this.getUnicos);     
    this['labels' + variable] = labels.filter(this.getUnicos);   
    this['ids' + variable].forEach(id => {
      let arreglo = datos[tipo].filter(r => r.campo_encuesta_id == id);
      this[variable].push(arreglo);
    });    
  }

  getUnicos(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  // getTab(id) {
  //   let array = id.split('ngb-tab-');
  //   let tab = array[1];    
    // let id_estatus = this.EstatusTickets[tab]['estatus_ticket_id'];
    // this._ticketsService.consultaTicket(id_estatus).subscribe(response => {      
    //   if (response && response['status']) {
    //     this.Tickets = response['ticket'];  
    //   }else {
    //     this.Tickets = null;
    //   }
    // }, error => {
    //   console.log(<any>error);
    // });
  // }

}
