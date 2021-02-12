import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PagosService } from 'src/app/servicios/pagos.service';
import { GLOBAL } from "src/app/servicios/global";
// import {debounceTime} from 'rxjs/operators';

declare var OpenPay: any;

@Component({
  selector: 'app-pagos-component',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  urlImg: string = 'assets/images/';
  pay: number;
  show: boolean = false;
  showBack: boolean = false;
  paymentsForm: FormGroup;
  card: string = '';
  typeCard: string = '';
  cvvHover: boolean = false;
  rotate: boolean = false;
  visa: string = 'M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893zM34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066h-3.888L19.153,16.8z'
  mastercard: any = {
    letters: "m0 0v-0.103h0.095c0.021 0 0.039 5e-3 0.052 0.013 0.012 8e-3 0.019 0.022 0.019 0.039s-7e-3 0.03-0.019 0.038c-0.013 9e-3 -0.031 0.013-0.052 0.013zm0.096 0.072c0.049 0 0.087-0.011 0.114-0.033s0.04-0.052 0.04-0.09c0-0.032-0.01-0.058-0.032-0.079-0.021-0.02-0.051-0.033-0.091-0.038l0.126-0.145h-0.098l-0.117 0.144h-0.038v-0.144h-0.082v0.385zm-0.025-0.518c0.045 0 0.087 9e-3 0.125 0.026 0.039 0.017 0.073 0.04 0.102 0.069s0.052 0.063 0.069 0.103c0.016 0.039 0.025 0.081 0.025 0.126s-9e-3 0.087-0.025 0.126c-0.017 0.039-0.04 0.074-0.069 0.103s-0.063 0.052-0.102 0.069c-0.038 0.016-0.08 0.024-0.125 0.024s-0.088-8e-3 -0.127-0.024c-0.04-0.017-0.075-0.04-0.104-0.069s-0.052-0.064-0.068-0.103c-0.017-0.039-0.025-0.081-0.025-0.126s8e-3 -0.087 0.025-0.126c0.016-0.04 0.039-0.074 0.068-0.103s0.064-0.052 0.104-0.069c0.039-0.017 0.082-0.026 0.127-0.026m0 0.739c0.059 0 0.113-0.011 0.165-0.033 0.051-0.021 0.095-0.051 0.134-0.089 0.038-0.037 0.068-0.081 0.09-0.132 0.022-0.05 0.033-0.104 0.033-0.161s-0.011-0.111-0.033-0.161-0.052-0.094-0.09-0.132c-0.039-0.037-0.083-0.067-0.134-0.089-0.052-0.022-0.106-0.033-0.165-0.033-0.06 0-0.115 0.011-0.167 0.033s-0.097 0.052-0.135 0.089c-0.038 0.038-0.068 0.082-0.09 0.132s-0.033 0.104-0.033 0.161 0.011 0.111 0.033 0.161c0.022 0.051 0.052 0.095 0.09 0.132 0.038 0.038 0.083 0.068 0.135 0.089 0.052 0.022 0.107 0.033 0.167 0.033m-38.961 1.483c0 0.734 0.481 1.337 1.267 1.337 0.751 0 1.258-0.577 1.258-1.337s-0.507-1.337-1.258-1.337c-0.786 0-1.267 0.603-1.267 1.337m3.381 0v2.088h-0.908v-0.507c-0.288 0.376-0.725 0.612-1.319 0.612-1.171 0-2.089-0.918-2.089-2.193 0-1.276 0.918-2.193 2.089-2.193 0.594 0 1.031 0.236 1.319 0.612v-0.507h0.908zm30.684 0c0 0.734 0.481 1.337 1.267 1.337 0.752 0 1.258-0.577 1.258-1.337s-0.506-1.337-1.258-1.337c-0.786 0-1.267 0.603-1.267 1.337m3.382 0v3.765h-0.909v-2.184c-0.288 0.376-0.725 0.612-1.319 0.612-1.171 0-2.089-0.918-2.089-2.193 0-1.276 0.918-2.193 2.089-2.193 0.594 0 1.031 0.236 1.319 0.612v-0.507h0.909zm-22.795 1.38c0.585 0 0.961-0.367 1.057-1.013h-2.167c0.097 0.603 0.463 1.013 1.11 1.013m0.018 0.813c-1.224 0-2.08-0.891-2.08-2.193 0-1.328 0.891-2.193 2.141-2.193 0.629 0 1.205 0.157 1.712 0.585l-0.445 0.673c-0.35-0.279-0.796-0.437-1.215-0.437-0.585 0-1.118 0.271-1.249 1.023h3.101c9e-3 0.113 0.018 0.227 0.018 0.349-9e-3 1.302-0.813 2.193-1.983 2.193m10.964-2.193c0 0.734 0.481 1.337 1.267 1.337 0.751 0 1.258-0.577 1.258-1.337s-0.507-1.337-1.258-1.337c-0.786 0-1.267 0.603-1.267 1.337m3.381 0v2.088h-0.908v-0.507c-0.289 0.376-0.725 0.612-1.319 0.612-1.171 0-2.089-0.918-2.089-2.193 0-1.276 0.918-2.193 2.089-2.193 0.594 0 1.03 0.236 1.319 0.612v-0.507h0.908zm-8.509 0c0-1.267 0.882-2.193 2.228-2.193 0.629 0 1.048 0.14 1.502 0.498l-0.436 0.734c-0.341-0.245-0.699-0.376-1.093-0.376-0.725 9e-3 -1.258 0.533-1.258 1.337s0.533 1.328 1.258 1.337c0.394 0 0.752-0.131 1.093-0.376l0.436 0.734c-0.454 0.358-0.873 0.498-1.502 0.498-1.346 0-2.228-0.926-2.228-2.193m11.707 2.193c-0.524 0-0.865-0.245-1.101-0.612v0.507h-0.9v-4.176h0.909v2.341c0 0.691 0.297 1.075 0.891 1.075 0.184 0 0.376-0.026 0.568-0.105l0.28 0.856c-0.201 0.079-0.463 0.114-0.647 0.114m-24.341-0.437c-0.437 0.288-1.039 0.437-1.703 0.437-1.058 0-1.739-0.507-1.739-1.337 0-0.681 0.507-1.101 1.441-1.232l0.429-0.061c0.498-0.07 0.733-0.201 0.733-0.437 0-0.323-0.332-0.507-0.952-0.507-0.629 0-1.083 0.201-1.389 0.437l-0.428-0.707c0.498-0.367 1.127-0.542 1.808-0.542 1.206 0 1.905 0.568 1.905 1.363 0 0.734-0.55 1.118-1.459 1.249l-0.428 0.062c-0.393 0.052-0.708 0.13-0.708 0.41 0 0.306 0.297 0.489 0.795 0.489 0.533 0 1.049-0.201 1.302-0.358zm11.716 0.437c-0.524 0-0.865-0.245-1.1-0.612v0.507h-0.9v-4.176h0.908v2.341c0 0.691 0.297 1.075 0.891 1.075 0.184 0 0.376-0.026 0.568-0.105l0.28 0.856c-0.201 0.079-0.463 0.114-0.647 0.114m-7.749-0.105h-1.485v1.267h-0.918v-1.267h-0.847v-0.83h0.847v-1.905c0-0.969 0.376-1.546 1.45-1.546 0.394 0 0.848 0.122 1.136 0.323l-0.262 0.778c-0.271-0.157-0.568-0.236-0.804-0.236-0.454 0-0.602 0.28-0.602 0.699v1.887h1.485zm-13.577-4.176v2.621c0 0.987-0.629 1.651-1.643 1.66-0.533 9e-3 -1.083-0.157-1.468-0.743-0.288 0.463-0.742 0.743-1.38 0.743-0.446 0-0.882-0.131-1.223-0.62v0.515h-0.909v-4.176h0.917v2.315c0 0.725 0.402 1.11 1.023 1.11 0.603 0 0.908-0.393 0.908-1.101v-2.324h0.918v2.315c0 0.725 0.419 1.11 1.022 1.11 0.62 0 0.917-0.393 0.917-1.101v-2.324z",
    other: "m0 0v0.61h-0.159l-0.184-0.419-0.183 0.419h-0.16v-0.61h0.113v0.46l0.172-0.397h0.117l0.172 0.398v-0.461zm-1.009 0v0.506h0.204v0.103h-0.52v-0.103h0.204v-0.506z",
    orange: "m1080.6 714.05h-17.202v-30.915h17.202z",
    red: "m0 0c0 5.017 2.349 9.486 6.007 12.366-2.675 2.106-6.051 3.363-9.72 3.363-8.686 0-15.727-7.042-15.727-15.729s7.041-15.729 15.727-15.729c3.669 0 7.045 1.257 9.72 3.363-3.658 2.88-6.007 7.349-6.007 12.366",
    yellow: "m0 0c0-8.687-7.041-15.729-15.727-15.729-3.669 0-7.045 1.257-9.721 3.363 3.659 2.88 6.008 7.349 6.008 12.366s-2.349 9.486-6.008 12.366c2.676 2.106 6.052 3.363 9.721 3.363 8.686 0 15.727-7.042 15.727-15.729"
  };
  email: string;
  flag: boolean = false;
  loading: boolean = false;
  button: string = 'Enviar información';
  matricula: string;
  Data: any;
  monto: any;
  productionMode = GLOBAL.productionMode;

  idOpen;
  apiKey;
  uriPay;
  uriStorePay;
  sandboxMode;
  errOpenpay: any = false;
  errPagoFacil: any = false;
  descripcion: string = '';
  deviceSessionId: any;
  success: boolean = false;
  DataPF: any;
  listErrorPF = [];
  
  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _pagosService: PagosService
  ) { }

  get pF() { return this.paymentsForm.controls }

  ngOnInit() {
    this.pay = parseInt(this.route.snapshot.paramMap.get('pay'));
    this.matricula = this.route.snapshot.paramMap.get('id');           
    if (this.pay == 1 || this.pay == 2) {
      this.paymentsForm = this._fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        last_name: ['', [Validators.required, Validators.minLength(5)]],
        card: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
          Validators.minLength(15), Validators.maxLength(19)])],
        month: ['', Validators.required],
        year: ['', Validators.required],
        cvv: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
        Validators.minLength(2), Validators.maxLength(4)])],
        email: ['', Validators.email],
        phone_number: ['', Validators.required]
      });
    }
    if (this.pay == 1) {
      this.setOpenpayValues();
    }
    let disabled = false;
    this._pagosService.getMonto(this.matricula).subscribe(response => {
      if (response && response['status']) {        
        this.Data = response['adeudo'][0];        
        this.monto = this.Data.saldo;        
        disabled = true;
      }
      this.paymentsForm.addControl('monto', new FormControl({ value: this.monto? '$'+this.monto : '',
        disabled: disabled }, Validators.required))
      this.setValues();
    }, error => {
      console.log(<any>error);
    });
  }

  setOpenpayValues() {
    if(this.productionMode){
      //PRODUCCION
      this.idOpen = '';
      this.apiKey = '';
      this.uriPay = 'https://api.openpay.mx';
      this.uriStorePay = 'https://dashboard.openpay.mx/';
      this.sandboxMode = false;
    }else{
      //PRUEBAS
      this.idOpen = 'm5gnjuckgutcnnq5ak5x';
      this.apiKey = 'pk_442326e295014edcb3efec354dd319db';
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
      this.card = value;       
      
      if (value.length >= 1) {
        this.typeCard = OpenPay.card.cardType(trimmed).toLowerCase();        
        // let type = value.substr(0,1);
        // if (type == 4) {
        //   this.typeCard = 'visa'
        // }else if (type == 5) {
        //   this.typeCard = 'mastercard'
        // }else {
        //   this.typeCard = '';
        // }
      }else {
        this.typeCard = '';
      }
    });

    this.flag = true;
  }

  sendData() { 
    this.errOpenpay = false;
    this.errPagoFacil = false;
    this.button = 'Enviando información';
    this.loading = true; 
    if (!this.monto && !this.Data) {
      this.monto = parseInt(this.paymentsForm.get('monto').value);
      this.monto = this.monto.toFixed(2);
      this.Data = {};
      this.Data['nombre'] = this.paymentsForm.get('name').value;
      this.Data['apellidos'] = this.paymentsForm.get('last_name').value;
    }
    
    if (this.pay == 1) {
      this.setFormOpenpay();
    }else if (this.pay == 2) {
      this.paymentsForm.setErrors({invalid: true});
      this.listErrorPF = [];
      this._pagosService.sendPayPF(this.paymentsForm.value, this.monto,this.matricula, GLOBAL.productionMode).subscribe(response => {        
        if (response && response['valido'] == '1') {
          this.DataPF = response['data'];
          this.button = 'Tu pago ha sido exitoso';
          this.success = true;
          this.errPagoFacil = false;
          this.listErrorPF = [];
        }else {
          this.paymentsForm.setErrors({invalid: true});
          this.button = 'Enviar información';
          this.success = false;
          this.ErrorPagoFacil(response['data']);
        }
        this.loading = false;
      }, error => {
        console.log(<any>error);
      });
    }
  }

  ErrorPagoFacil(error) {
    this.errPagoFacil = error.pf_message;
    if (error.error.cvt) {
      this.listErrorPF.push(error.error.cvt);
    }
    if (error.error.numeroTarjeta) {
      this.listErrorPF.push(error.error.numeroTarjeta)
    }
  }

  setFormOpenpay() {
    let form = this.paymentsForm.value;    
    OpenPay.token.create({
      "card_number": form.card,
      "holder_name": form.name,
      "expiration_year": form.year,
      "expiration_month": form.month,
      "cvv2": form.cvv
    }, this.SuccessOpenpay.bind(this), this.ErrorOpenpay.bind(this));
  }

  SuccessOpenpay(response){    
    // if (response['status'] == 200) {
    var token_id = response['data'].id;
    let form = this.paymentsForm.value;
    let apellidos; 
    if (!this.Data['apellidos']) apellidos = this.Data.primer_apellido+' '+this.Data.segundo_apellido;
    else apellidos = this.Data.apellidos;

    this._pagosService.sendPayOP(token_id,this.Data.nombre,apellidos,form.phone_number,form.email,
      this.monto,this.descripcion,this.deviceSessionId,this.matricula,GLOBAL.productionMode).subscribe(response => {        
      if (response && response['status']) {
        this.DataPF = response['autorizacion'];
        this.button = 'Tu pago ha sido exitoso';
        this.success = true;
        this.errOpenpay = false;
      }else {
        this.button = 'Enviar información';
        this.success = false;
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
    } else if (error_code === 400 && desc === 'The expiration date has already passed') {
        error_message = 'Por favor, proporciona de forma correcta la fecha de vencimiento de la tarjeta mes/año.';
    } else if (error_code === 400 && desc === 'card_number must contain only digits') {
        error_message = 'Por favor, proporciona de forma correcta el número de la tarjeta.';
    }
    
    // var msg;
    //     switch(response['data'].error_code){
    //       case 1001:
    //           msg ='Los campos no tienen el formato correcto, o la petición no tiene campos que son requeridos';
    //           break;
    //       case 2001: 
    //           msg = 'La cuenta de banco con esta CLABE ya se encuentra registrada en el cliente';
    //       break;
    //       case 2002: 
    //           msg = 'La tarjeta con este número ya se encuentra registrada en el cliente';
    //       break;
    //       case 2004: 
    //           msg = 'El número de dígitos de la tarjeta no son correctos';
    //       break;
    //       case 2005: 
    //           msg = 'La fecha de expiración ya no es vigente';
    //       break;
    //       default:
    //           msg = response['data'].description;
    //       break;
    //   }
    this.errOpenpay = error_message;
    this.button = 'Enviar información';
    this.paymentsForm.setErrors({invalid: true});
    this.loading = false;
  }

}
