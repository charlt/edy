import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RubricasService } from '../services/rubricas.service';
import { Router, ActivatedRoute  } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title: string;
  jwt: string;
  rubricaForm: FormGroup;
  itemHorizontal: FormArray;
  itemVertical: FormArray;
  Datos: Array<any> = [
    {label: 'Número de columnas', select: 'selectHorizontal', type: 'horizontales', text: 'Columna', num: 6, text_2: 'Porcentaje'},
    {label: 'Número de filas', select: 'selectVertical', type: 'verticales', text: 'Fila', num: 6, text_2: 'Porcentaje'}
  ];
  respuestas: Array<any> = [];
  bandera: boolean = false;

  idRubrica: number;
  idActividad: number = 1;
  idMateriaFechaActividad: number = 19;
  Rubrica: any;
  Horizontales: Array<any>; //Elementos
  Verticales: Array<any>; //Categorías
  Porcentajes: Array<any>;
  bandera_e: boolean = true;
  bandera_c: boolean = true;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _rubricasService: RubricasService,
    private router : Router,
    private route: ActivatedRoute
  ) { 
    this.idRubrica = parseInt(this.route.snapshot.paramMap.get('id'));    
    if (!this.idRubrica) this.title = 'Nueva rúbrica';
    else this.title = 'Editar rúbrica'
    this._usuarioService.pushBreadcum(this.title, '', 2);
  }

  // tablaForm = new FormArray([]);
  tablaForm: FormGroup;

  ngOnInit() {    
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    if (!this.idRubrica) this.setForm();
    else this.consultaDatos();
    this.tablaForm = this.formBuilder.group({
      Datos: this.formBuilder.array([])
    });
  }

  // initRows() {
  //   return this.formBuilder.group({
  //     name: [""]
  //   });
  // }

  // addNewRow() {
  //   this.formArr.push(this.initRows());
  // }

  // deleteRow(index: number) {
  //   this.formArr.removeAt(index);
  // }

  setForm(): void {
    this.rubricaForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      selectHorizontal: ["1", Validators.required],
      selectVertical: ["1", Validators.required],
      horizontales: this.formBuilder.array([this.createItem()]),
      verticales: this.formBuilder.array([this.createItem()])
    });
    this.valueChanges();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      texto: ["", Validators.required],
      porcentaje: ['', Validators.required]
    }); 
  } 

  valueChanges(): void {
    this.rubricaForm.get('selectHorizontal').valueChanges.subscribe(val => {
      this.numItems(parseInt(val), 'itemHorizontal', 'horizontales');
    });
    this.rubricaForm.get('selectVertical').valueChanges.subscribe(val => {
      this.numItems(parseInt(val), 'itemVertical', 'verticales');
    });
    this.bandera = true;
  }

  addItem(itemType, type): void {
    this[itemType] = this.rubricaForm.get(type) as FormArray;
    this[itemType].push(this.createItem());
  }

  deleteItem(itemType, type): void {
    this[itemType] = this.rubricaForm.get(type) as FormArray;
    this[itemType].removeAt(this[itemType].length-1);
  }

  numItems(value, itemType, type){
    let items = this.rubricaForm.get(type).value.length;
    let longitud;
    if (value < items) {
      longitud = items - value;
      for (let i = 0; i < longitud; i++) {
        this.deleteItem(itemType, type);
      }
    } else if (value > items) {
      longitud = value - items;
      for (let i = 0; i < longitud; i++) {
        this.addItem(itemType, type);
      }
    }
  }

  get formArray() {
    return this.tablaForm.get("Datos") as FormArray;
  }

  createData(texto, equivalencia): FormGroup {
    return this.formBuilder.group({
      texto: [texto, Validators.required],
      equivalencia: [equivalencia, Validators.required]
    }); 
  } 

  getText(id_cat, id_elem){    
    let respuestaFiltrada = this.respuestas.find(res => 
      res.categoria_id == id_cat && res.elemento_id == id_elem);
    
    if (respuestaFiltrada) return respuestaFiltrada.celda;
    else return '';
  }

  consulta(){
    this._rubricasService.consultaHorizontal(this.idRubrica, this.jwt).subscribe(
      response =>{
        if (response && response['status']) {
          this.Horizontales = response['elementos'];
          this._rubricasService.consultaVertical(this.idRubrica, this.jwt).subscribe(
            response =>{
              if (response && response['status']) {
                this.Verticales = response['categorias'];                    
                this.Porcentajes = new Array(this.Verticales.length);                
                for (let i = 0; i < this.Porcentajes.length; i++) {
                  this.Porcentajes[i] = new Array(this.Horizontales.length);
                  for (let j = 0; j < this.Porcentajes[i].length; j++) {
                    let equivalencia = (this.Verticales[i].porcentaje / 100) * this.Horizontales[j].porcentaje;
                    this.Porcentajes[i][j] = equivalencia;                    
                  }                  
                }    
                console.log(this.Horizontales, this.Verticales);                              
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

  consultaDatos(){    
    this._rubricasService.consulta(this.jwt, this.idRubrica).subscribe(
      response =>{
        if(response && response['status']){
          this.Rubrica = response['rubrica'];          
          this.idRubrica = this.Rubrica.rubrica_id;
          this.consulta();
        }
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  consultaRespuestas(){
    this._rubricasService.consultaRespuestas(this.idRubrica, this.jwt).subscribe(response =>{      
        if (response && response['status']) {
          this.respuestas = response['respuesta'];
          this.respuestas.forEach(respuesta => {
            respuesta.editar = 0;
          });          
        }          
        for (let i = 0; i < this.Verticales.length; i++) {
          this.formArray.push(new FormArray([]));
          for (let j = 0; j < this.Horizontales.length; j++) {
            let respuesta = this.respuestas.find(r => r.categoria_id == this.Verticales[i].categoria_id 
              && r.elemento_id == this.Horizontales[j].elemento_id);              
            let equivalencia = respuesta ? respuesta.valor :(this.Verticales[i].porcentaje / 100) * this.Horizontales[j].porcentaje;
            let texto = this.getText(this.Verticales[i].categoria_id, this.Horizontales[j].elemento_id);
            (this.formArray.at(i) as FormArray).push(this.createData(texto, equivalencia))
          }
        }                              
        this.bandera = true;
      },error =>{
        console.log(<any>error)
    }); 
  }

  enviarRespuestas() {
    this.bandera_e = true;
    this.bandera_c = false;
    // let suma_e = 0;
    let suma_c = 0;
    
    this.rubricaForm.value.horizontales.forEach(elemento => {
      if (elemento.porcentaje > 100) this.bandera_e = false;
      // if (i > 0) suma_e += elemento.porcentaje;
    });
    // if (suma_e > this.rubricaForm.value.horizontales[0].porcentaje) this.bandera_e = false;

    this.rubricaForm.value.verticales.forEach(categoria => {
      suma_c += categoria.porcentaje;
    });
    // if (suma_c > this.rubricaForm.value.horizontales[0].porcentaje) this.bandera_c = false;
    if (suma_c > 100 || suma_c < 100) this.bandera_c = false;
    else if (suma_c == 100) this.bandera_c = true;

    if (this.bandera_e && this.bandera_c) {
      this._rubricasService.creaRubricaJson(this.jwt, this.rubricaForm.value).subscribe(
        response =>{
          if (response && response['status']) {
            this.idRubrica = response['id_rubrica'];
            this.bandera = false;
            this.consultaDatos();
          }
        },error =>{
          console.log(<any>error)
      }); 
    }
  }

  guardarCelda(i, j) {
    let datos = this.formArray['controls'][i]['controls'][j].value;
    let texto = datos.texto;
    let porcentaje = datos.equivalencia;
    let categoria_id = this.Verticales[i].categoria_id;
    let elemento_id = this.Horizontales[j].elemento_id
    
    let dato = this.respuestas.find(res => 
      res.categoria_id == categoria_id && res.elemento_id == elemento_id);
      
    if (dato == undefined) {
      this._rubricasService.guardaCelda(this.jwt, elemento_id, categoria_id, texto, porcentaje).subscribe(response =>{
        if (response && response['status']) {
          alertify.success(response['msg']).dismissOthers();
        }
      },error =>{
        console.log(<any>error)
      }); 
    }else {
      this._rubricasService.editaCelda(this.jwt, dato.respuesta_id, texto, porcentaje).subscribe(response =>{
        if (response && response['status']) {
          alertify.success(response['msg']).dismissOthers();
        }
      },error =>{
        console.log(<any>error)
      }); 
    }
  }

  guardarDatos(i, j, id_horizontal, id_vertical) {
    let textarea = (<HTMLInputElement>document.getElementById('text_'+ i + '_' + j)).value;
    let valor = this.Porcentajes[i][j];
    if (textarea.length) {
      let dato = this.respuestas.find(res => 
        res.categoria_id == id_vertical && res.elemento_id == id_horizontal);
      if (dato == undefined) {
        this._rubricasService.guardaCelda(this.jwt, id_horizontal, id_vertical, textarea, valor).subscribe(response =>{
          if (response && response['status']) {
            this.consultaRespuestas();
          }
        },error =>{
          console.log(<any>error)
        }); 
      }else {
        this._rubricasService.editaCelda(this.jwt, dato.respuesta_id, textarea, valor).subscribe(response =>{
          if (response && response['status']) {
            this.consultaRespuestas();
          }
        },error =>{
          console.log(<any>error)
        }); 
      }
    }else {
      alertify.error("Ingresa todos los campos").dismissOthers();
    }
  }

  getTexto(id_cat, id_elem){
    let respuestaFiltrada = this.respuestas.find(res => 
      res.categoria_id == id_cat && res.elemento_id == id_elem);
    
    if (respuestaFiltrada) return respuestaFiltrada;
    else return false;
  }

  getMayor(id_categoria) {
    let datos = this.respuestas.filter(r => r.categoria_id == id_categoria).map(d => 
      {return parseInt(d.valor)});

    let mayor = 0;
    for (let i = 0; i < datos.length; i++) {
      if (datos[i] > mayor) mayor = datos[i];
    }
    if (mayor > 0) return mayor;
    return false;
  }

  getTotal() {    
    let arreglo = new Array(this.Verticales.length);
    this.Verticales.map((vertical, index) => {
      let valores = this.respuestas.filter(r => r.categoria_id == vertical.categoria_id).map(d => 
        {return parseInt(d.valor)});        
      if (valores.length > 0) {
        let mayor = 0;
        for (let i = 0; i < valores.length; i++) {
          if (valores[i] > mayor) mayor = valores[i];
        }
        arreglo[index] = mayor;
      }
    });    
    let total = 0;
    for (const valor of arreglo) { 
      if(valor) total += valor;
    } 
    if (total > 0) return total;  
    return false;
  }

  getTotalColumna(id_elemento){
    let datos = this.respuestas.filter(r => r.elemento_id == id_elemento).map(d => 
      {return parseInt(d.valor)});
    let total = 0;
    for (const valor of datos) {
      total += valor;
    } 
    if (total > 0) return total; 
    return false;
  }

  editaRespuesta(id_cat, id_elem) {
    let respuesta = this.respuestas.find(res => res.categoria_id == id_cat && res.elemento_id == id_elem);
    respuesta.editar = 1;
  }

  verDatos() {
    console.log(this.formArray.value)
  }

}
