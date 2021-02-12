import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CalendarioService } from './calendario.service';

@Component({
  selector: 'app-calendario-component',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnChanges {

  constructor(
    private _calendarioService: CalendarioService,
    private _modalService: NgbModal
  ) {

  }

  @Input() idCiclo: any;
  @Input() tipoCalendario: number = 0; //Calendario para vista de fechas
  //tipoCalendario = 1 Calendario para seleccionar fechas
  @Input() Meses: any;
  @Output() Fechas = new EventEmitter<any>();

  title: string;

  // @Input() notifier: Subject<any>;
  
  valueMonths = [
    {value: 0, text: "Enero"},
    {value: 1, text: "Febrero"},
    {value: 2, text: "Marzo"},
    {value: 3, text: "Abril"},
    {value: 4, text: "Mayo"},
    {value: 5, text: "Junio"},
    {value: 6, text: "Julio"},
    {value: 7, text: "Agosto"},
    {value: 8, text: "Septiembre"},
    {value: 9, text: "Octubre"},
    {value: 10, text: "Noviembre"},
    {value: 11, text: "Diciembre"},
  ];


  arrayMonths: any;
  months = [];
  loading:boolean = false;

  Ciclo: any;
  fechaInicio: any;
  fechaFin: any;

  Events: any;

  monthSelected: any;
  eventsDate: any = [];
  arraySelected = []

  ngOnChanges() {  
    this.loading = true;
        
    if (this.tipoCalendario == 0) {
      this.arrayMonths = this.fechaInicio = this.fechaFin = this.Events = undefined;
      this.months = [];
      
      this._calendarioService.consultaFechas(this.idCiclo).subscribe(response => {
        if (response && response['status']) {
          this.Ciclo = response['datos'][0];        
          
          let inicio = this.Ciclo['fecha_inicio'].split('-');
          let fin = this.Ciclo['fecha_fin'].split('-');

          this.fechaInicio = new Date(inicio[0], parseInt(inicio[1]) - 1, inicio[2]);
          this.fechaFin = new Date(fin[0], parseInt(fin[1]) - 1, fin[2], 23, 59, 59);
          // let anioInicio = this.fechaInicio.getFullYear();
          // let anioFin = this.fechaFin.getFullYear();

          if (this.fechaFin > this.fechaInicio) {
            var mesesDiferencia;
            mesesDiferencia = (this.fechaFin.getFullYear() - this.fechaInicio.getFullYear()) * 12;
            mesesDiferencia -= this.fechaInicio.getMonth();
            mesesDiferencia += this.fechaFin.getMonth();
            mesesDiferencia <= 0 ? 0 : mesesDiferencia;
              
            let mes = this.fechaInicio.getMonth();
            // let mesFin = this.fechaFin.getMonth();
            let anio = this.fechaInicio.getFullYear();          
            // let anioFin = this.fechaFin.getFullYear();
            let obj;
            for (let i = 0; i <= mesesDiferencia; i++) {   
              let valueMonths = JSON.parse(JSON.stringify(this.valueMonths));                 
              obj = valueMonths.find(m => m.value == mes);
              obj['year'] = anio;
              this.months.push(obj);
              mes++;
              if (mes > 11) {
                mes = 0;
                anio++;
              }
            }  
            
            this._calendarioService.consultaEventos(this.idCiclo).subscribe(response => {                        
              if (response && response['status']) {
                this.Events = response['eventos'];
              }            
              this.setMonths();
            }, error => {
              console.log(<any>error);
            });

          }  
        }
      }, error => {
        console.log(<any>error);
      });
    }else{
      this.arraySelected = [];
      this.months = this.Meses;
      let year = new Date().getFullYear();
      this.months.forEach(m => {
        m.year = year
      });
      this.setMonths();      
    }
  }

  setMonths() {  
      
    this.arrayMonths = Array.from({length: this.months.length}, (x, i) => ({ month: this.months[i]}));
    let lastDayMonth, prevLastDayMonth, firstDayIndex, lastDayIndex, nextDays, days;
    
    this.months.forEach((month, _index) => {
      lastDayMonth = new Date(month.year, month.value + 1, 0).getDate();
      prevLastDayMonth = new Date(month.year, month.value, 0).getDate();
      firstDayIndex = new Date(month.year, month.value, 1).getDay();
      lastDayIndex = new Date(month.year, month.value + 1, 0).getDay();
      days = [];   
      

      if (firstDayIndex > 0) {
        for (let i = firstDayIndex; i > 0; i--) {                  
          days.push(
            { class: 'prev-month', value: prevLastDayMonth - i + 1 }
          );
        }
      }      
         
      for (let i = 1; i <= lastDayMonth; i++) {
        if (this.tipoCalendario == 0) {
          if (
            i === new Date().getDate() &&
            month.value === new Date().getMonth()
            && month.year === new Date().getFullYear()
          ) {
            days.push({ class: 'today', value: i, style: {'background-color': '#299e4c'}, events: [] });
          } else {
            let obj = { class: 'day', value: i, events: [] };

            if (
                (month.value == this.fechaInicio.getMonth() && i == this.fechaInicio.getDate() && 
                month.year == this.fechaInicio.getFullYear()) || 
                (month.value == this.fechaFin.getMonth() && i == this.fechaFin.getDate() && 
                month.year == this.fechaFin.getFullYear())
            ) {
              obj['class'] = "day day-active";
              obj['style'] = {'background-color': '#00addf'};
              obj['events'].push({
                color: '#00addf',
                evento_nombre: this.Ciclo['ciclo_desc'],
                fecha_inicio: this.Ciclo['fecha_inicio'],
                fecha_fin: this.Ciclo['fecha_fin']
              })
            }

            // PARA PINTAR LOS DIAS ENTRE 2 FECHAS.
            // if(this.fechaFin.getFullYear() == this.fechaInicio.getFullYear()) {
              // this.anioInicio = this.fechaInicio.getFullYear();
              // this.anioFin = this.ani;
            
            //   if (
            //     (i >= this.fechaInicio.getDate() && month.value == this.fechaInicio.getMonth()) ||
            //     (month.value > this.fechaInicio.getMonth() && month.value < this.fechaFin.getMonth()) ||
            //     (month.value == this.fechaFin.getMonth() && i <= this.fechaFin.getDate())
            //   ) {
            //     obj['class'] = "day day-active"
            //   }
            // }else if (this.fechaFin.getFullYear() > this.fechaInicio.getFullYear()) {
            //   if (
            //     ( i >= this.fechaInicio.getDate() && month.value == this.fechaInicio.getMonth() 
            //       && month.year == this.fechaInicio.getFullYear()) ||
            //     (month.value > this.fechaInicio.getMonth() && month.year == this.fechaInicio.getFullYear()) ||
            //     (month.year > this.fechaInicio.getFullYear() && month.value < this.fechaFin.getMonth()) ||
            //     (month.year > this.fechaInicio.getFullYear() && month.value == this.fechaFin.getMonth() &&
            //     i <= this.fechaFin.getDate())
            //   )
            //   {
            //     obj['class'] = "day day-active"
            //   }
            // }
            days.push(obj);
          }
        }else {
          let obj = { class: 'day', value: i };
          days.push(obj);
        }
      }

      days.length <= 35? nextDays = 13 - (lastDayIndex): nextDays = 6 - (lastDayIndex);

      if (nextDays > 0) {
        for (let j = 1; j <= nextDays; j++) {
          days.push({ class: 'next-month', value: j });
        }   
      }

      let length = days.length / 7;
      let module = days.length % 7;

      let arrayLength = Array.from({length: length}, x => 7);
      if (module != 0) {
        arrayLength.push(module) 
      }

      let indexArray = 0;
      let index = 0;
      this.arrayMonths[_index]['weeks'] = Array.from({length: arrayLength.length}, x => []);

      for (let i = 0; i < arrayLength.length; i++) {
        for (let j = 0; j < arrayLength[indexArray]; j++) {  
          this.arrayMonths[_index]['weeks'][i].push(days[index]);
          index++;
        }
        indexArray++;
      }
    });    

    if(this.Events) {
      let _inicio, _fin, _fechaInicio, _fechaFin;
      this.Events.forEach(event => {  

        _inicio = event['fecha_inicio'].split('-');
        _fin = event['fecha_fin'].split('-');

        _fechaInicio = new Date(_inicio[0], parseInt(_inicio[1]) - 1, _inicio[2]);
        _fechaFin = new Date(_fin[0], parseInt(_fin[1]) - 1, _fin[2], 23, 59, 59);
        
        let mesInicio = this.arrayMonths.find(m => m.month.value == _fechaInicio.getMonth() 
          && m.month.year == _fechaInicio.getFullYear());
        let mesFin = this.arrayMonths.find(m => m.month.value == _fechaFin.getMonth() 
        && m.month.year == _fechaFin.getFullYear());                
        
        if(mesInicio && mesFin && mesInicio == mesFin) {
          mesInicio.weeks.forEach(week => {           
            week.forEach(day => { 
              if(day.value >= _fechaInicio.getDate() && day.value <= _fechaFin.getDate()) {
                this.setBackground(day, _fechaInicio, _fechaFin, event);           
              }
            });
          });
        }else if (mesInicio && mesFin && mesInicio != mesFin) {
            
          let mes = _fechaInicio.getMonth();
          let mesF = _fechaFin.getMonth();
          let anio = _fechaInicio.getFullYear();          
          let anioF = _fechaFin.getFullYear();

          let _mesInicio = this.arrayMonths.map(m => {return m.month}).findIndex(_m => _m.value == mes && _m.year == anio);
          let _mesFin = this.arrayMonths.map(m => {return m.month}).findIndex(_m => _m.value == mesF && _m.year == anioF);
          
          for(let i = _mesInicio; i <= _mesFin; i++) {            
            //i es igual al indice del mes en arrayMonths
            this.arrayMonths[i].weeks.forEach(week => {           
              week.forEach(day => {                            
                if(
                    (day.value >= _fechaInicio.getDate() && i == _mesInicio) ||
                    (i > _mesInicio && i < _mesFin) ||
                    (i == _mesFin && day.value <= _fechaFin.getDate())
                  ) {
                    this.setBackground(day, _fechaInicio, _fechaFin, event);           
                }
              });
            });
          }
        }
      });      
    }    

    setTimeout(() => {
      this.loading = false;
    }, 1);    
  }

  setBackground(day, _fechaInicio, _fechaFin, event) {
      if (day.class != 'prev-month' && day.class != 'next-month') {
        day['events'].push({
          color: event.color,
          evento_nombre: event.evento_nombre,
          evento_desc: event.evento_desc,
          fecha_inicio: event.fecha_inicio,
          fecha_fin: event.fecha_fin
        });
        if (day['style']) {
          if (day['style']['background-color']){
            day['style'] = {'background': `linear-gradient(to bottom, ${day['style']['background-color']} 50%, ${event['color']} 50%)`, 'color': 'white'}
          }else if (day['style']['background']) {
            let init = day['style']['background'].indexOf('(');
            let fin = day['style']['background'].indexOf(')');
            let array = day['style']['background'].substring(init + 1, fin).split(',');                      
            let colors = array.splice(1);                                            
            let string_colors = "";
            let arrayColors = [];
            colors.forEach(color => {
              let _color = color.split(' ')[1];
              if (arrayColors.indexOf(_color) == -1) arrayColors.push(_color)
            });   
            let percent = (100 / (arrayColors.length + 1));
                               
            arrayColors.forEach((color, i) => {
              string_colors += `${color} ${percent * (i)}%, `
              string_colors += `${color} ${percent * (i + 1)}%, `
            });
            string_colors += `${event['color']} ${percent * (arrayColors.length)}%, ` 
            string_colors += `${event['color']} 100%`;

            day['style'] = {'background': `linear-gradient(to bottom, ${string_colors})`, 'color': 'white'}                      
          }                    
        }else {
          day['style'] = {'background-color': event['color'], 'color': 'white'};
        }
    }
  }

  openModal(modal, month, day) {
    this.monthSelected = month;
    this.monthSelected['day'] = day;    
    this.eventsDate = this.monthSelected['day']['events'];
    this._modalService.open(modal, {size: "lg"});
  }

  setDate(month, day) {
    let date = JSON.stringify({
      "year": month.year,
      "month": month.value,
      "day": day.value
    });
    let duplicated = this.arraySelected.find(s => s === date);
    if (!duplicated && (day.class == 'day' || day.class == 'day day-selected')) {
      this.arraySelected.push(date); 
      day['class'] = "day day-selected";
      day['style'] = {'background-color': '#d1ecf1'};
      this.Fechas.emit(this.arraySelected);
    } else if (duplicated && (day.class == 'day' || day.class == 'day day-selected')) {
      let index = this.arraySelected.findIndex(s => s === date);
      this.arraySelected.splice(index, 1);      
      day['class'] = "day";
      delete day['style'];
      this.Fechas.emit(this.arraySelected);
    }    
  }

}

