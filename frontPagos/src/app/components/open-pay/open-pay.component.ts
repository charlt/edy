import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagosService } from 'src/app/servicios/pagos.service';
import { GLOBAL } from "src/app/servicios/global";
import { tarjetas } from "src/app/models/logos";
// import { paymentForm } from "src/app/models/paymentBasicForm";

declare var OpenPay: any;

@Component({
  selector: 'app-open-pay',
  templateUrl: './open-pay.component.html',
  styleUrls: ['./open-pay.component.scss']
})
export class OpenPayComponent implements OnInit {
  
  urlImg: string = 'assets/images/';
  show: boolean = false;
  showBack: boolean = false;
  paymentsForm: FormGroup;
  card: string = '';
  typeCard: string = '';
  cvvHover: boolean = false;
  rotate: boolean = false;
  email: string;
  flag: boolean = false;
  loading: boolean = false;
  button: string = 'Pagar';
  matricula: string;
  Data: any;
  monto: any;
  productionMode = GLOBAL.productionMode;
  descripcion: string = '';
  mastercard = tarjetas.mastercard;
  visa = tarjetas.visa;
  cvv: any;

  idOpen;
  apiKey;
  uriPay;
  uriStorePay;
  sandboxMode;
  errOpenpay: any = false;
  deviceSessionId: any;
  DataOP: any;
  autorizacion: string;
  setForm: boolean = false;
  successful: boolean;
  message: string;
  idSolicitudPago: any;
  urlFrontParent: string = GLOBAL.urlFront;
  urlredirectParent: string;
  plataforma: string;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _pagosService: PagosService
  ) { }

  get pF() { return this.paymentsForm.controls }

  ngOnInit() {      

    let locacion = this.router.url.split('/')[1];

    let Datos;

    if (locacion == 'open-pay') {
      this.plataforma = this.route.snapshot.paramMap.get('p'); 
      this.urlredirectParent = this.plataforma + '/pagos';
      sessionStorage.setItem('urlredirectParent', this.urlredirectParent); 

      if (sessionStorage.getItem('Datos')) sessionStorage.removeItem('Datos'); 
      this.idSolicitudPago = this.route.snapshot.paramMap.get('id'); 
      this._pagosService.consultaSolicitud(this.idSolicitudPago).subscribe(
        response =>{
          if(response && response['status']){
            let solicitud = response['solicitud'];
            this.descripcion = solicitud.nombre_pago;    
            this.monto = solicitud.monto_final;  
          }else{

          }
          
        },error =>{
          console.log(error)
        }
      )
      Datos = {
        id_solicitud_pago: this.idSolicitudPago,
        descripcion: this.descripcion,
        monto: this.monto
      }      
      sessionStorage.setItem('Datos', JSON.stringify(Datos));
    }else {
      Datos = JSON.parse(sessionStorage.getItem('Datos'));   
      this.urlredirectParent = sessionStorage.getItem('urlredirectParent');
      sessionStorage.removeItem('urlredirectParent');
      this.idSolicitudPago = Datos.id_solicitud_pago; 
      this.descripcion = Datos.descripcion;    
      this.monto = Datos.monto;  
    }
    
    this.autorizacion = this.route.snapshot.paramMap.get('auth');            
    if (this.autorizacion) {
      this._pagosService.getCargo(this.autorizacion, this.productionMode).subscribe(response => {                
        if (response && response['status'] == 'completed') {        
          this.DataOP = response['data'];
          this.message = 'Tu pago ha sido confirmado';
          this.errOpenpay = false;
          this.successful = true;
          this._pagosService.modificaEstatusExitoso(this.idSolicitudPago, this.autorizacion).subscribe(
            response => {    
              console.log(response);
                                      
              if (response && response['status']) {
                this.urlredirectParent = response['urlRedirect']
                this.guardaMensajePago(1);
              }else {
                this.flag = true;
                this.urlredirectParent = '';
              }
            }, error => {
              console.log(<any>error);
          });
        }else if(response && response['status'] == 'failed') {
          this.DataOP = response['error'];
          this.message = this.DataOP['detalles']['message'];
          this.successful = false;
          this.guardaMensajePago(0);
        }
      }, error => {
        console.log(<any>error);
      }); 
    }else {
      // this.matricula = this.route.snapshot.paramMap.get('id');        
      // this.descripcion = 'Pago Colegiatura Enlace - '+this.matricula;
    // this.paymentsForm = this._fb.group( {} );
    // paymentForm.map( item => { 
    //   this.paymentsForm.addControl( item['control'], new FormControl('') );
    //   // this.paymentsForm.get(item['control']).setValidators(Validators.)
    //   item['validators'].map(validator => console.log(validator));
    // });    
    // console.log(this.paymentsForm.controls);
      this.paymentsForm = this._fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        last_name: ['', [Validators.required, Validators.minLength(5)]],
        card: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
          Validators.minLength(14), Validators.maxLength(16)])],
        month: ['', Validators.required],
        year: ['', Validators.required],
        cvv: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
        Validators.minLength(2), Validators.maxLength(4)])],
        email: ['', Validators.email],
        phone_number: ['', Validators.required]
      });    
      this.setOpenpayValues();    

      // let disabled = true;
      // this._pagosService.getMonto(this.matricula).subscribe(response => {
      //   console.log(response);
        
      //   if (response && response['status']) {        
      //     this.Data = response['adeudo'][0];                
      //     this.monto = this.Data.saldo; 
      //     if(this.Data.nombre == 'curso'){
      //       this.descripcion = 'Pago curso Enlace - '+this.matricula;
      //     }
          
          // disabled = true;
        // }
      // this.paymentsForm.addControl('monto', new FormControl({ value: '$'+this.monto, disabled: disabled }, Validators.required));
      this.setValues();
      // }, error => {
      //   console.log(<any>error);
      // });
    }
  }

  guardaMensajePago(id) {
    this._pagosService.guardaMensajePago(this.idSolicitudPago, this.DataOP, id).subscribe(
      response => {        
        if (response && response['status']) {
          this.flag = true;
        }
      }, error => {
        console.log(<any>error);
    });
  }

  setOpenpayValues() {
    if(this.productionMode){
      //PRODUCCION
      // this.idOpen = 'mxtkp6hpf6eoqgrwsvat';
      // this.apiKey = 'pk_689023e907254d519b0ac3b4a44a3e5f';

      //PRODUCCION CASA LAMM
      // this.idOpen = 'mxtkp6hpf6eoqgrwsvat';
      // this.apiKey = 'pk_689023e907254d519b0ac3b4a44a3e5f';
      
      // this.uriPay = 'https://api.openpay.mx';
      // this.uriStorePay = 'https://dashboard.openpay.mx/';
      // this.sandboxMode = false;

      //LLAVES PARA PRUEBA EN SERVIDOR
      this.idOpen = 'mpbnfmkiekgicisu6qfi';
      this.apiKey = 'pk_f735c3ec9f2f4eaca1cce6c1d481b4ec';

      this.uriPay = 'https://sandbox-api.openpay.mx/';
      this.uriStorePay = 'https://sandbox-dashboard.openpay.mx/';
      this.sandboxMode = true;
      
    }else{
      //PRUEBAS MIGUE
      // this.idOpen = 'm5gnjuckgutcnnq5ak5x';
      // this.apiKey = 'pk_442326e295014edcb3efec354dd319db';
      
      //PRUEBAS PAQUITO
      // this.idOpen = 'mt2b4o1w2olgt3ksgjok';
      // this.apiKey = 'pk_0167031630ce485087c27aa9a8741fa9';

      //PRUEBAS CASA LAMM
      this.idOpen = 'mpbnfmkiekgicisu6qfi';
      this.apiKey = 'pk_f735c3ec9f2f4eaca1cce6c1d481b4ec';

      this.uriPay = 'https://sandbox-api.openpay.mx/';
      this.uriStorePay = 'https://sandbox-dashboard.openpay.mx/';
      this.sandboxMode = true;
    }

    OpenPay.setId(this.idOpen);
    OpenPay.setApiKey(this.apiKey);
    OpenPay.setSandboxMode(this.sandboxMode);
    this.deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
  }

  setValues() {
    this.paymentsForm.get('card').valueChanges.subscribe(value => {
      let trimmed = value.replace(/\s+/g, '');    
      
      if (trimmed.length > 16) {
        trimmed = trimmed.substr(0, 16);
      }      
      let numbers = [];
      for (let i = 0; i < trimmed.length; i += 4) {
        numbers.push(trimmed.substr(i, 4));
      }      
      value = numbers.join(' ');   
      let last = value[value.length - 1];    
      if (isNaN(last)) value = value.substr(0, value.length - 1);  
      if (!value) value = '';      
      this.card = value;       
      
      if (value.length >= 1) {
        this.typeCard = OpenPay.card.cardType(trimmed).toLowerCase();        
      }else {
        this.typeCard = '';
      }
    });

    this.paymentsForm.get('cvv').valueChanges.subscribe(value => {
      if (isNaN(value[value.length - 1])) value = value.substr(0, value.length - 1);   
      if (!value) value = '';       
      this.cvv = value;
    });

    this.flag = true;
    this.setForm = true;
  }

  sendData() { 
    this.paymentsForm.setErrors({invalid:true});
    this.errOpenpay = false;
    this.button = 'Enviando pago';
    this.loading = true; 
    if (!this.monto && !this.Data) {
      this.monto = parseInt(this.paymentsForm.get('monto').value);
      this.monto = this.monto.toFixed(2);
      this.Data = {};
      this.Data['nombre'] = this.paymentsForm.get('name').value;
      this.Data['apellidos'] = this.paymentsForm.get('last_name').value;
    }
    this.setFormOpenpay();
  }

  setFormOpenpay() {
    let form = this.paymentsForm.value;  
    let card = this.card.split(' ').join('');    

    OpenPay.token.create({
      "card_number": card,
      "holder_name": `${form.name} ${form.last_name}`,
      "expiration_year": form.year,
      "expiration_month": form.month,
      "cvv2": this.cvv
    }, this.SuccessOpenpay.bind(this), this.ErrorOpenpay.bind(this));
    
  }

  SuccessOpenpay(response){                
    // if (response['status'] == 200) {
    var token_id = response['data'].id;
    let form = this.paymentsForm.value;
    let nombre = this.paymentsForm.get('name').value;
    let apellidos = this.paymentsForm.get('last_name').value;

    // if (!this.Data['apellidos']) 
    // else apellidos = this.Data.apellidos;

    this._pagosService.sendPayOP(token_id,nombre,apellidos,form.phone_number,form.email,
      this.monto,this.descripcion,this.deviceSessionId,this.idSolicitudPago,GLOBAL.productionMode).subscribe(response => {                
      if (response && response['status']) {
        // localStorage.setItem('matricula', this.matricula);
        window.location.replace(response['url']);
        // this.DataOP = response['autorizacion'];
        // this.button = 'Tu pago ha sido exitoso';
        // this.success = true;
        // this.errOpenpay = false;
      }else {
        this.button = 'Pagar';
        this.errOpenpay = response['msg'];
      }
      this.loading = false;
    }, error => {
      console.log(<any>error);
    });
    // }
  
    // this._pagosService.realizar_pago(this.identity.nombre,this.identity.primer_apellido+' '+this.identity.segundo_apellido,this.identity.celular,this.identity.email,token_id,this.montoPagoUnico,this.nombreCarrera,this.deviceSessionId,this.jwt).subscribe(      response=>{
        
    //     if(response && response['status'] == 0 ){
    //       alertify.error(response['msg']);          
    //     }else{
    //       alertify.success(response['msg']);
    //       this.pagoUnico=true;
          
    //     }
    //     this.realizandoPago=false;

    //   },
    //   error=>{
    //     console.log(error);
        
    //     this.realizandoPago=false;
    //   }
    // )
    
  }

  ErrorOpenpay(response) {            
    var desc = response.data.description != undefined ? response.data.description : response.message;
    var error_code = response.status;
    var error_code2 = response.data.error_code;
    var error_message;
    if(error_code === 400 && desc === 'card_number is required, holder_name is required, expiration_year expiration_month is required' ||
        error_code === 400 && desc === 'holder_name is required, card_number is required, expiration_year expiration_month is required' ||
        error_code === 400 && desc === 'holder_name is required, expiration_year expiration_month is required' ||
        error_code === 400 && desc === 'The CVV2 security code is required' ||
        error_code === 400 && desc === 'holder_name is required' ||
        error_code === 400 && desc === 'card_number is required, card_number is required' ||
        error_code === 400 && desc === 'expiration_year expiration_month is required' ||
        error_code === 400 && desc === 'expiration_month 00 is invalid, valid expirations months are 01 to 12' ||
        error_code === 400 && desc === 'holder_name is required, expiration_month 00 is invalid, valid expirations months are 01 to 12' ||
        error_code === 400 && desc === 'card_number is required, holder_name is required, card_number is required' ||
        error_code === 400 && desc === 'card_number is required, expiration_year expiration_month is required' ||
        error_code === 400 && desc === 'holder_name is required, card_number is required, card_number is required' ||
        error_code === 400 && desc === 'holder_name is required, card_number length is invalid' ||
        error_code === 400 && desc === 'card_number length is invalid') {
        error_message = 'Por favor, proporciona todos los datos que se solicitan de la tarjeta.';
    } else if(error_code === 400 && desc === 'cvv2 length must be 3 digits' || error_code === 400 && desc === 'cvv2 length must be 4 digits' || error_code === 400 && desc === 'cvv2 must contain only digits') {
        error_message = 'Por favor, proporciona correctamente el código de seguridad de la tarjeta.';
    } else if (error_code === 422 && desc === 'The card number verification digit is invalid') {
        error_message = 'Por favor, proporciona de forma correcta todos los datos que se solicitan de la tarjeta.';
    } else if ((error_code === 400 && desc === 'The expiration date has already passed') || (error_code === 400 && desc === 'The expiration date has expired')) {
        error_message = 'Por favor, proporciona de forma correcta la fecha de vencimiento de la tarjeta mes/año.';
    } else if (error_code === 400 && desc === 'card_number must contain only digits') {
        error_message = 'Por favor, proporciona de forma correcta el número de la tarjeta.';
    }
    
    // var msg;
    // switch(response['data'].error_code){
    //   case 1001:
    //       msg ='Los campos no tienen el formato correcto, o la petición no tiene campos que son requeridos';
    //       break;
    //   case 2001: 
    //       msg = 'La cuenta de banco con esta CLABE ya se encuentra registrada en el cliente';
    //   break;
    //   case 2002: 
    //       msg = 'La tarjeta con este número ya se encuentra registrada en el cliente';
    //   break;
    //   case 2004: 
    //       msg = 'El número de dígitos de la tarjeta no son correctos';
    //   break;
    //   case 2005: 
    //       msg = 'La fecha de expiración ya no es vigente';
    //   break;
    //   default:
    //       msg = response['data'].description;
    //   break;
    // }    
    this.errOpenpay = error_message;
    this.button = 'Pagar';
    this.paymentsForm.setErrors({invalid: true});
    this.loading = false;
  }

}
