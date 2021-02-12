import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';
import { ZonaImagenesService } from 'src/app/administracion/carga-actividades/services/zona-imagenes.service';
import { randomColor } from 'randomcolor';
import { GLOBAL } from 'src/app/services/global';

declare var alertify: any;

@Component({
  selector: 'form-zona-imagenes',
  templateUrl: './form-zona-imagenes.component.html',
  styleUrls: ['./form-zona-imagenes.component.scss']
})
export class FormZonaImagenesComponent implements OnInit{

  jwt: string;
  url: string;
  public imagePath;
  imgURL: any;
  public message: string;
  width: number = 0;
  height: number = 0; 
  size: any; 
  imgFile: any;

  color: string;
  canvas: HTMLCanvasElement;
  x;
  y;
  w;
  h;
  drag: boolean = false;
  showContainer: boolean = true;
  showCards: boolean = false;
  hideCanvas: boolean = true;
  hideImage: boolean = true;

  indexRespuestas: number;
  seleccion: number;
  
  arrayCanvas = [];
  arrayRespuestas = [];

  inputForm: FormGroup;
  items: FormArray;

  respuestas;
  bandera: number = 0;
  tipoAdmin;
  context: CanvasRenderingContext2D;
  reactivos;
  datosImagen;
  flag: boolean = true;

  @ViewChild("myCanvas") myCanvas;
  @ViewChild("myImage") myImage;

  @Input() idPregunta;
  @Output() successEvent = new EventEmitter<any>();

  constructor(
    private _usuarioService: UsuarioService,
    private _zonaImagenesService: ZonaImagenesService,
    private formBuilder: FormBuilder
    ) { 
  }

  get f() { return this.inputForm.controls; }
  get sf() { return this.inputForm.controls.items}

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;

    this.url = GLOBAL.urlAssets;
    this.canvas = this.myCanvas.nativeElement;
    this.inputForm = this.formBuilder.group({
      imagen: ['', [requiredFileType(0),Validators.required]],
      items: this.formBuilder.array([ this.createItem(0) ])
    });  
    this.getDatos();
    this.indexRespuestas = 0;
  }

  getDatos(){
    this._zonaImagenesService.consultaZonaImagenes(this.idPregunta, this.jwt, 0).subscribe(
      response =>{
        if(response && response['status']){
          this.reactivos = response['reactivos'];
          this.respuestas = this.reactivos;
          this.datosImagen = response['contenidoPregunta'];
          this.inputForm.get('imagen').clearValidators();
          this.inputForm.get('imagen').updateValueAndValidity();
          this.deleteItem(0);
          for (let i = 0; i < this.reactivos.length; i++) {
            this.addItem(this.reactivos[i].color, this.reactivos[i].reactivo_desc);
            this.respuestas[i]['input'] = this.reactivos[i].reactivo_desc;
          }          
          this.seleccion = this.reactivos.length;
          this.preview(1,'');          
        }
      },error =>{
        console.log(<any>error)
      });   
  }
  // getRandomColor() {
  //   var letters = 'BCDEF'.split('');
  //   var color = '#';
  //   for (var i = 0; i < 6; i++ ) {
  //       color += letters[Math.floor(Math.random() * letters.length)];
  //   }
  //   return color;
  // }
  
  createItem(id, text = ''): FormGroup {
    let color = randomColor();
    if (id != 0) {
      color = id;
    }
    return this.formBuilder.group({
      input: [text, Validators.required],
      color: color,
      posX: [],
      posY: [],
      ancho: [],
      alto: []
    });
  }  
  
  addItem(id, text = ''): void {
    this.items = this.inputForm.get('items') as FormArray;
    this.items.push(this.createItem(id, text));
  }

  deleteItem(index){
    this.items = this.inputForm.get('items') as FormArray;
    this.items.removeAt(index);
  }

  hasError(error: string) {
    const control = this.inputForm.get('imagen');
    return control.dirty && control.hasError(error);
  }

  enviarRespuestas(){
    //this.showDrop = true;
    //this.showContainer = false;
    this.flag = true;
    if (this.inputForm.get('imagen').value) {
      this.preview(0, this.inputForm.get('imagen').value);
    }else{
      this.preview(2, '');
    }
    setTimeout(()=> {
    if (this.bandera == 1) {
      this.respuestas = this.inputForm.value.items;
      this.seleccion = this.inputForm.value.items.length;
      this.cleanCanvas();
      alertify.success('Paso 1 completado').dismissOthers();      
    }
    },100);
  }

  guardarCanvas(){
    if (this.indexRespuestas == this.seleccion) {  
      this.flag = false;                
      //this.hideCanvas = true;
      //this.showCards = true;
      //this.hideImage = false;
      //this.drawSelections();
      alertify.confirm('¿Deseas guardar los elementos con su correspondiente imagen?',
      function(){
        this._zonaImagenesService.modificaZona(this.inputForm,this.width,this.height,this.idPregunta,this.jwt).subscribe(
          response =>{
              if(response && response['status']){                
                this.selecciones = 0;
                alertify.success(response['msg']).dismissOthers();
                this.successEvent.emit({status: response['status']})
              }
              else{
                alertify.success(response['msg']).dismissOthers();
              }
          },error =>{
            console.log(<any>error)
          });
      }.bind(this),
      function(){
        alertify.error('Cancel').dismissOthers();
      });
    }else{
      alertify.error('El número de selecciones debe coincidir con el número de respuestas')
    }
  }

  drawSelections(){
    var ClientRect = this.myImage.nativeElement.getBoundingClientRect();        
    for (let i = 0; i < this.arrayCanvas.length; i++) {
      this.x = Math.round(ClientRect.left) + this.arrayCanvas[i].pointX;
      this.y = Math.round(ClientRect.top) + this.arrayCanvas[i].pointY;      
      this.w = this.arrayCanvas[i].width;
      this.h = this.arrayCanvas[i].height;       
      var ctx = this.myImage.nativeElement.getContext('2d');
      ctx.restore(); 
      ctx.lineWidth = 15;
      ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
      ctx.strokeRect(this.x, this.y, this.w, this.h);
      //ctx.stroke();
      ctx.save();   
      ctx.clip();  
    }
  }
 
  preview(id, evt) {
    let image = evt;
    let canvas = this.myCanvas.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0 , 0, canvas.width, canvas.height);    
    if (id == 0) {
    this.imgFile = image;
    this.size = image.size;
    let reader = new FileReader;
    reader.onload = () => { // when file has loaded
      this.imgURL = reader.result;   
      var img = new Image();
 
      img.onload = () => {
        if (img.width > 800) {
          this.imgURL = null;
          this.bandera = 0;
          this.hideCanvas = true;
          this.showCards = false;
          this.inputForm.controls['imagen'].setErrors({'incorrect': true});
          alertify.error("Ancho máximo de la imagen es de 800px").dismissOthers();
        }else{
          this.bandera = 1;
          this.showCards = true;
          this.width = img.width;
          this.height = img.height;
          canvas.width = img.width;
          canvas.height = img.height;
          canvas.style.background = "url("+this.imgURL+")";
          this.hideCanvas = false;
          // context.drawImage(img, 0 , 0);       
        }   
      };
      img.src = reader.result.toString(); // This is the data URL
    };
 
    reader.readAsDataURL(image);
    }else if (id != 0) {
      this.bandera = 1;
      this.showCards = true;
      this.width = this.datosImagen.imagen_ancho;
      this.height = this.datosImagen.imagen_alto;
      canvas.width = this.datosImagen.imagen_ancho;
      canvas.height = this.datosImagen.imagen_alto;
      canvas.style.background = "url("+this.url + this.datosImagen.imagen+")";
      this.hideCanvas = false;
      if (id == 1) {
        this.respuestas.forEach(r => {
          this.arrayCanvas.push({pointX: r.posicion_x, pointY: r.posicion_y, width: r.ancho, height: r.alto, color: r.color});
          this.drawRectangleSelected(r);
        });
      }
     
    }
    // this.imgType.nativeElement.value = ""; 
   }       

  mouseDown(evt: any){
    if(this.seleccion > 0 && this.flag) {
      var ClientRect = this.canvas.getBoundingClientRect();
      this.x = Math.round(evt.clientX - ClientRect.left);
      this.y = Math.round(evt.clientY - ClientRect.top);
      this.drag = true;
    }else{
      alertify.error('No puedes hacer más selecciones').dismissOthers();
    }
   }

  mouseUp(evt: any){
    var ClientRect = this.canvas.getBoundingClientRect();
    if (this.drag) {
      this.w = Math.round(evt.clientX - ClientRect.left) - this.x;
      this.h = Math.round(evt.clientY - ClientRect.top) - this.y;
      const randomHsl = Math.random() * 360;
      this.drag = false;
      // console.log(this.inputForm.get('items')['controls'][this.indexRespuestas].get('color').value)
      let color = this.inputForm.get('items')['controls'][this.indexRespuestas].get('color').value;
      this.inputForm.get('items')['controls'][this.indexRespuestas].get('posX').setValue(this.x);
      this.inputForm.get('items')['controls'][this.indexRespuestas].get('posY').setValue(this.y);
      this.inputForm.get('items')['controls'][this.indexRespuestas].get('ancho').setValue(this.w);
      this.inputForm.get('items')['controls'][this.indexRespuestas].get('alto').setValue(this.h);

      this.drawRectangle(evt,color);
      this.arrayCanvas.push({pointX: this.x, pointY: this.y, width: this.w, height: this.h, color: 'hsla('+ randomHsl +', 100%, 50%, 1)'});

      this.indexRespuestas++;
      if (this.indexRespuestas == this.seleccion) {
        this.flag = false;
        alertify.success('Se ha alcanzado el límite de selecciones').dismissOthers();
      }    
    }
  }

  drawRectangle(evt: any, color, id = 0){
    var ctx = this.canvas.getContext('2d');
    ctx.clearRect(this.x, this.y, this.w, this.h);
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.setLineDash([6]);
    ctx.strokeRect(this.x, this.y, this.w, this.h);   
  }  

  drawRectangleSelected(data) {
    this.x = data.posicion_x;      
    this.y = data.posicion_y;
    this.w = data.ancho;
    this.h = data.alto;
    this.inputForm.get('items')['controls'][this.indexRespuestas].get('posX').setValue(this.x);
    this.inputForm.get('items')['controls'][this.indexRespuestas].get('posY').setValue(this.y);
    this.inputForm.get('items')['controls'][this.indexRespuestas].get('ancho').setValue(this.w);
    this.inputForm.get('items')['controls'][this.indexRespuestas].get('alto').setValue(this.h);
    this.drawRectangle(data, data.color)
    this.indexRespuestas++;
    if (this.indexRespuestas == this.seleccion) {
      this.flag = false;
      // alertify.success('Se ha alcanzado el límite de selecciones').dismissOthers();
    }   
  }

  cleanCanvas(){
    let canvas = this.myCanvas.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0 , 0, canvas.width, canvas.height);   
    this.arrayCanvas = [];
    this.indexRespuestas = 0;
    this.flag = true;
    this.inputForm.get('items').value.forEach((value, i) => {
      this.inputForm.get('items')['controls'][i].get('posX').setValue(null);
      this.inputForm.get('items')['controls'][i].get('posY').setValue(null);
      this.inputForm.get('items')['controls'][i].get('ancho').setValue(null);
      this.inputForm.get('items')['controls'][i].get('alto').setValue(null);
    });
  }

  getColor(color){ 
    this.color = color;
    this.drag = true;
  }

  drawCircle(evt: any){
    if (this.drag) {      
    //  var canvas = <HTMLCanvasElement> document.getElementById('canvas');
      var imageCanvas = this.myImage.nativeElement;
      var ClientRect = imageCanvas.getBoundingClientRect();
      let x = Math.round(evt.clientX - ClientRect.left);
      let y = Math.round(evt.clientY - ClientRect.top);
      var ctx = imageCanvas.getContext('2d');
      
      ctx.beginPath();
      ctx.setLineDash([0]);
      ctx.arc(x, y, 15, 0, 2 * Math.PI);
      ctx.strokeStyle = 'black';
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.stroke();   
      this.drag = false;
    }
  }
   
}
