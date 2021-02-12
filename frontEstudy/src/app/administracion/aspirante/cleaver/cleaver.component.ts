import { Component, OnInit } from '@angular/core';
import { CleaverService } from '../services/cleaver.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cleaver',
  templateUrl: './cleaver.component.html',
  styleUrls: ['./cleaver.component.scss']
})
export class CleaverComponent implements OnInit {

  jwt: string;
  idAspirante;
  Datos: Array<any> = [];
  bandera: boolean = false;
  Graficas: Array<any> = ['T', 'M', 'L'];
  title;
  Respuestas: Array<Object>;
  Interpretacion: Array<any> = [];
  Combinacion: any;

  public Legend: boolean = false;
  public Type: string = 'line';
  public Labels: Array<any> = ['', 'D', 'I', 'S', 'C', ''];
  public Options: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
        beginAtZero: false,
          stepSize: 5,
          max: 20,
          min: -20 
        }
      }]
    }
  };
  public DataCharts: Array<any> = [];
  public Colors: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];

  constructor(
    private _cleaverService: CleaverService,
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.idAspirante = parseInt(this.route.snapshot.paramMap.get('id'));
    this.title = "Resultado cleaver"
    this._usuarioService.pushBreadcum(this.title,"",2);
   }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.consulta();
  }

  consulta(){
    this._cleaverService.consultaCalificacion(this.jwt, this.idAspirante).subscribe(response => {
      if (response && response['status']) {
          this.Datos.push({text: 'M', value: response['M'], id: 'M'});
          this.Datos.push({text: 'L', value: response['L'], id: 'L'});
          // this.Datos.push({text: 'M', value: {D:10,I:3,S:4,C:4}, id: 'M'});
          // this.Datos.push({text: 'L', value: {D:4,I:4,S:3,C:10}, id: 'L'});
          this.Datos.push({text: 'TOTAL', value: response['T'], id: 'T'});
          
          this.getInterpretacion();
          this.setDatos();
          this.consultaResultados();
      }      
    }, error => {
      console.log(<any>error);
    });
  }

  setDatos(){
    this.Graficas.map(g => {
      let dato = this.Datos.find(d => d.id == g);
      let data = Object.values(dato.value);
      data.unshift(null);
      data.push(null);      
      this.DataCharts.push([{ data: data }]);
    });    
    this.bandera = true;
  }
  
  consultaResultados(){
    this._cleaverService.consultaRespuestas(this.jwt, this.idAspirante).subscribe(response => {
      if (response && response['status']) {
        this.Respuestas = response['reactivos'];
      }      
    }, error => {
      console.log(<any>error);
    });
  }

  // chartClicked(e: any): void {
  //     // console.log(e);
  // }

  // chartHovered(e: any): void {
  //     // console.log(e);
  // }

  descargaImagen(){
    var data = document.getElementById('cleaver'); 
    window.scrollTo(0,0);
    html2canvas(data, {
      allowTaint: true,
      "logging": true,
      useCORS: true,
      // onclone: function (clonedDoc) {
      //   clonedDoc.getElementById(idImage).style.display = 'block';
      // },
      width: data.offsetWidth,
      height: data.offsetHeight + 80
    }).then(canvas => {  
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "cleaver.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }

  getInterpretacion(){
    this.Datos.map(dato => {
      if (dato.text == 'M' || dato.text == 'L') {
        let data: Array<number> = Object.values(dato.value);
        let mayor = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] > mayor) mayor = data[i];       
        }
        let index = data.indexOf(mayor);
        this.Interpretacion.push({tipo: dato.text, column: this.Labels[index+1], value: mayor})        
      }
    }); 
    this.getCombinacion();  
  }

  getCombinacion(){
    let combinaciones = [
      {combinacion: 'D/I', datos: {bold: 'Creatividad:', text: 'Tiende a ser lógico, crítico e incisivo en sus enfoques hacia la obtención de metas. Se sentirá retado por problemas que requieren esfuerzos de análisis y originalidad. Será llano y crítico con la gente.'}}, 
      {combinacion: 'D/S', datos: {bold: 'Empuje:', text: 'Responde rápidamente a los retos, demuestra movilidad y flexibilidad en sus enfoques, tiende a ser iniciador versátil respondiendo rápidamente a la competencia.'}},
      {combinacion: 'D/C', datos: {bold: 'Individualidad:', text: 'Actúa de manera directa y positiva ante la oposición. Es una persona fuerte que toma una posición y lucha por mantenerla. Está dispuesto a tomar riesgos y puede ignorar niveles jerárquicos.'}}, 
      {combinacion: 'I/D', datos: {bold: 'Buena Voluntad:', text: 'Tiende a comportarse en una forma equilibrada y cordial, desplegando “agresividad social” en situaciones que percibe como favorables y sin amenazas. Tiende a mostrarse simpático y lucha por establecer relaciones armoniosas con la gente desde el primer contacto con ellos.'}}, 
      {combinacion: 'I/S', datos: {bold: 'Habilidad de Contactos:', text: 'Tiende a buscar a la gente con entusiasmo y chispa. Es una persona abierta que despliega un optimismo contagioso y trata de ganarse a la gente a través de la persuasión y de un acercamiento emotivo.'}}, 
      {combinacion: 'I/C', datos: {bold: 'Confianza en sí mismo:', text: 'Despliega confianza en sí mismo en la mayoría de sus tratos con otras personas. Aunque siempre lucha por ganarse a la gente, se muestra reacio a ceder su propio punto de vista. Esta persona siente que no importa qué situación se presente, el será capaz de actuar de forma exitosa.'}}, 
      {combinacion: 'S/D', datos: {bold: 'Paciencia:', text: 'Tiende a ser constante y consistente prefiriendo tratar un proyecto o tarea a la vez. En general, esta persona dirigirá sus habilidades y experiencia hacia áreas que requieren profundización y especialización. Ecuánime bajo las presiones, busca estabilizar su ambiente y reacciona negativamente a los cambios en el mismo.'}}, 
      {combinacion: 'S/I', datos: {bold: 'Reflexión:', text: 'Tiende a ser un individuo controlado y paciente. Se mueve con moderación y premeditación en la mayoría de las situaciones, actúa con cuidado y concentración.'}}, 
      {combinacion: 'S/C', datos: {bold: 'Persistencia:', text: 'Tiende a ser un individuo perseverante que una vez que decide algo, no se desvía de su objetivo. Toma un ritmo de trabajo y se apega a él. Puede ser rígido e independiente cuando se le presiona para hacerlo cambiar; exasperando a otros que requieren de su adaptación.'}}, 
      {combinacion: 'C/D', datos: {bold: 'Adaptabilidad:', text: 'Tiende a actuar de forma cuidadosa y conservadora. En general está dispuesto a modificar o transigir en su posición, con el objeto de lograr sus objetivos. Siendo un estricto observador de las políticas, puede parecer arbitrario y poco flexible al seguir una regla o fórmula establecida. Prefiere una atmósfera libre de antagonismos y desea la armonía.'}}, 
      {combinacion: 'C/I', datos: {bold: 'Perfeccionismo:', text: 'Esta persona tiende a ser un seguidor apegado al orden y los sistemas. Toma decisiones basadas en hechos conocidos o procedimientos establecidos. En todas sus actividades, trata meticulosamente de apegarse a los estándares establecidos, ya sea por sí mismo o por los demás.'}}, 
      {combinacion: 'C/S', datos: {bold: 'Sensibilidad:', text: 'Esta persona estará muy consciente en evitar riesgos o problemas. Tiende a buscar significados ocultos. La tensión puede ser evidente, particularmente si está bajo presión por obtener resultados. En general, se sentirá intranquilo mientras que no tenga una confirmación absoluta de que su decisión ha sido la correcta.'}}, 
      {combinacion: 'D=C', datos: {bold: 'Ambivalencia:', text: 'Cuando un empuje activo y un apego a reglas igualmente activo desencadenados por un mismo estímulo, aparecen al mismo tiempo, tienden a cancelarse entre sí, o al menos a modificarse a sí mismos”. Se anula.'}},
    ];
    let key;        
    if (this.Interpretacion[0].column == 'D' && this.Interpretacion[1].column == 'C' 
      && this.Interpretacion[0].value == this.Interpretacion[1].value) {
        key = 'D=C';
    }else {
      key = this.Interpretacion[0].column + '/' + this.Interpretacion[1].column;
    }
    let dato = combinaciones.find(r => r.combinacion == key);    
    if (dato) {
      this.Combinacion = dato;      
    }
  }

}
