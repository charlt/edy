import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RubricasService } from '../../administracion/rubricas/services/rubricas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.scss']
})
export class RubricaComponent implements OnInit {

  jwt: string;
  idRol: number;
  Rubrica: Array<any>;
  respuestas: Array<any>;
  Horizontales: Array<any>;
  Verticales: Array<any>;
  completo: boolean = false;
  totalHorizontales: Array<number>;
  seleccionados: Array<any>;
  Datos: Array<any>;
  bandera: boolean = false;
  @Output() setTotal = new EventEmitter <number>();
  @Input() idMateriaFechaActividad;
  @Input() idRubrica: number;

  constructor(
    private _rubricaService: RubricasService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idRol = this._usuarioService.getRol().rol_id;
    this.consultaDatos();
  }

  Matrix ()  {
    let rows = this.Verticales.length;
    let columns = this.Horizontales.length;
    let myArray = new Array(rows);
    this.totalHorizontales = new Array(rows);
    this.Datos = new Array(rows);
    for (let i = 0; i < myArray.length; i++) {  
      myArray[i] = new Array(columns);    
      this.totalHorizontales[i] = null;
      this.Datos[i] =new Array(columns);
      for (let j = 0; j < myArray[i].length; j++) {
        myArray[i][j] = false;
        let datos = this.getTexto(this.Verticales[i].categoria_id, this.Horizontales[j].elemento_id);
        this.Datos[i][j] = {
          texto: datos.celda,
          equivalencia: datos.valor,
          respuesta_id :datos.respuesta_id
        };
      }
    }          
    return myArray;
  }

  consultaDatos(){
    this._rubricaService.consulta(this.jwt, this.idRubrica).subscribe(
      response =>{
        if(response && response['status']){
          this.Rubrica = response['rubrica'];
          this.consulta();
        }
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  consulta(){
    this._rubricaService.consultaHorizontal(this.idRubrica, this.jwt).subscribe(
      response =>{
        if (response && response['status']) {
          this.Horizontales = response['elementos'];          
          this._rubricaService.consultaVertical(this.idRubrica, this.jwt).subscribe(
            response =>{
              if (response && response['status']) {
                this.Verticales = response['categorias']; 
                this.consultaRespuestas();
              }
            },error =>{
              console.log(<any>error)
            });    
        }
      },error =>{
        console.log(<any>error)
    }); 
  }

  consultaRespuestas(){
    this._rubricaService.consultaRespuestas(this.idRubrica, this.jwt).subscribe(response =>{
        if (response && response['status']) {
          this.respuestas = response['respuesta'];
          this.respuestas.forEach(respuesta => {
            respuesta.editar = 0;
          });
          this.seleccionados = this.Matrix();
          if (this.idRol == 2) {
            this.consultaAlumno();
          }          
          this.completo = true;
        }
      },error =>{
        console.log(<any>error)
    }); 
  }

  consultaAlumno(){
    let respuestas;
    this._rubricaService.consultaAlumno(this.idRubrica, this.idMateriaFechaActividad, this.jwt).subscribe(response =>{
      if (response && response['status']) {        
        respuestas = response['respuesta'];
        for (let i = 0; i < this.Datos.length; i++) {
          for (let j = 0; j < this.Datos[i].length; j++) {
            let dato = respuestas.find(r => r.respuesta_id == this.Datos[i][j].respuesta_id);            
            if (dato) {              
              this.seleccionados[i][j] = true;
              this.totalHorizontales[i] = parseInt(dato.valor);
            }            
          }
        }
        this.getTotal();        
      }
    },error =>{
      console.log(<any>error)
  }); 
  }

  getTexto(id_cat, id_elem){
    let respuestaFiltrada = this.respuestas.find(res => 
      res.categoria_id == id_cat && res.elemento_id == id_elem);
    
    if (respuestaFiltrada) return respuestaFiltrada;
    else return false;
  }

  getTotal() {
    let total = 0;
    let bandera = true;
    for (let i = 0; i < this.totalHorizontales.length; i++) {
      if (this.totalHorizontales[i] != null) {
        total += this.totalHorizontales[i];
      }else {
        bandera = false;
      }
    }
    if (bandera) {
      this.bandera = true;
    }
    if (total > 0) {
      return total;
    }
    return false;
  }

  guardarValor(row, col){      
    for (let i = 0; i < this.seleccionados[row].length; i++) {
      if (this.seleccionados[row][i] == true)
        this.seleccionados[row][i] = false;
    }
    this.seleccionados[row][col] = true;
    this.totalHorizontales[row] = parseInt(this.Datos[row][col].equivalencia);
    let datos = this.getTexto(this.Verticales[row].categoria_id, this.Horizontales[col].elemento_id);      
    this._rubricaService.guardaTotalCelda(this.jwt, datos, this.idMateriaFechaActividad).subscribe(response => {
    }, error => {
      console.log(<any>error);
    });
  }

  guardarRubrica(){
    let calificacion;
    this._rubricaService.guardarRubrica(this.jwt, this.idMateriaFechaActividad).subscribe(response => {
      if (response && response['status']) {
        calificacion = response['calificacion'];
        this.setTotal.emit(calificacion);
      }
    }, error => {
      console.log(<any>error);
    });
  }

}
