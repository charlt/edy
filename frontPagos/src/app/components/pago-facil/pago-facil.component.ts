import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PagosService } from 'src/app/servicios/pagos.service';
import { GLOBAL } from "src/app/servicios/global";
import { tarjetas } from "src/app/models/logos";

declare var OpenPay: any;
declare var $;

@Component({
  selector: 'app-pago-facil',
  templateUrl: './pago-facil.component.html',
  styleUrls: ['./pago-facil.component.scss']
})
export class PagoFacilComponent implements OnInit {

  urlImg: string = 'assets/images/';
  pay: number;
  show: boolean = false;
  showBack: boolean = false;
  paymentsForm: FormGroup;
  card: string = '';
  typeCard: string = '';
  cvvHover: boolean = false;
  rotate: boolean = false;
  visa: string = tarjetas.visa;
  mastercard: any = tarjetas.mastercard;
  email: string;
  flag: boolean = false;
  loading: boolean = false;
  button: string = 'Pagar';
  matricula: string;
  Data: any;
  monto: any;
  productionMode = GLOBAL.productionMode;
  meses = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  errPagoFacil: any = false;
  deviceSessionId: any;
  success: boolean = false;
  DataPF: any;
  listErrorPF = [];
  userAgent: any;

  $pagoFacil;
  apiSucursal;
  apiUsuario;
  readonly = false;
  
  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private _pagosService: PagosService
  ) { }

  get pF() { return this.paymentsForm.controls }

  ngOnInit() {
    this.matricula = this.route.snapshot.paramMap.get('id');  
    this.userAgent = navigator.userAgent;         
    
    this.paymentsForm = this._fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, Validators.minLength(5)]],
      numeroTarjeta: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
        Validators.minLength(15), Validators.maxLength(19)])],
      mesExpiracion: ['', Validators.required],
      anyoExpiracion: ['', Validators.required],
      monto: [{value:''}, Validators.required],
      cvt: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
        Validators.minLength(2), Validators.maxLength(4)])],
      email: ['', Validators.email],
      celular: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.required, 
        Validators.minLength(7)])]
    });
    
    let disabled = false;
    this._pagosService.getMonto(this.matricula).subscribe(response => {
      if (response && response['status']) {        
        this.Data = response['adeudo'][0];        
        this.monto = this.Data.saldo;        
        disabled = true;
        this.readonly = true;

      }
      
      this.paymentsForm.get('monto').setValue(this.monto);
      this.setValues();      
    }, error => {
      console.log(<any>error);
    });    
        
    this.$pagoFacil = $('#form3ds');
    if(this.productionMode){
      this.$pagoFacil.enviarPagoFacil3dSecure("produccion");
      this.apiUsuario = '3976531cd3d4650b187c349b1adbb5750334ea39';
      this.apiSucursal = '1460bed92311987d2eccc6a37c195525142c0a56';
    }else{
      this.$pagoFacil.enviarPagoFacil3dSecure("");
      this.apiUsuario = 'ce4287a4093e4fca1928f2cde9bf041ee7de8292';
      this.apiSucursal = 'ba3b2748672431ebeebeed1327c14959a94a74be';
      
    }    
      
    
  }

  setValues() {
      this.paymentsForm.get('numeroTarjeta').valueChanges.subscribe(value => {        
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
    
    //console.log(this.$pagoFacil.serialize())
     this.$pagoFacil.submit();

    
     

    // this.errPagoFacil = false;
    // this.button = 'Enviando información';
    // this.loading = true; 
    // if (!this.monto && !this.Data) {
    //   this.monto = parseInt(this.paymentsForm.get('monto').value);
    //   this.monto = this.monto.toFixed(2);
    //   this.Data = {};
    //   this.Data['nombre'] = this.paymentsForm.get('nombre').value;
    //   this.Data['apellidos'] = this.paymentsForm.get('apellidos').value;
    // }
    // this.paymentsForm.setErrors({invalid: true});
    // this.listErrorPF = [];
    
    // this._pagosService.sendPayPF(this.paymentsForm.value, this.monto,this.matricula, GLOBAL.productionMode).subscribe(response => {        
    //   if (response && response['valido'] == '1') {
    //     this.DataPF = response['data'];
    //     this.button = 'Tu pago ha sido exitoso';
    //     this.success = true;
    //     this.errPagoFacil = false;
    //     this.listErrorPF = [];
    //   }else {
    //     this.paymentsForm.setErrors({invalid: true});
    //     this.button = 'Pagar';
    //     this.success = false;
    //     this.ErrorPagoFacil(response['data']);
    //   }
    //   this.loading = false;
    // }, error => {
    //   console.log(<any>error);
    // });
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

}
