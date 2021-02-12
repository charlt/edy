import { Component, OnInit } from '@angular/core';
import { PagosService } from '../services/pagos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InscripcionService } from '../inscripcion.service';
import { SolicitudService } from '../services/solicitud.service';
import  { GLOBAL } from 'src/app/services/global';





declare var OpenPay: any;
declare var alertify: any;


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  
  
   //código de pago

  deviceSessionId;

  //PROD
  productionMode = GLOBAL.productionMode;
  
  //VARIABLES OPENPAY
  idOpen;
  apiKey;
  uriPay;
  uriStorePay;
  sandboxMode;



  montoPagoUnico = 6960;


  public suscripcion = {
    idTipo: "",
    nombre_tarjeta: "",
    numero_tarjeta: "",
    mes_tarjeta: "",
    anio_tarjeta: "",
    cvv: ""

  };
  tarjeta=0;
  tienda=0;
  domiciliado=0;
  identity;
  jwt
  title;
  nombreCarrera;
  referencia=null;
  pasoActual;

  pagoUnico=false;
  cubo_tienda=true;
  cubo_domiciliado=true;
  verRecibo =false;
  generarRecibo=false;
  generandoRecibo =false;
  realizandoPago=false;
  idAspirante: number;
  domiciliacionExitosa = false;

  idFormaPago;
  formaPago;

solicitud;

  constructor(
    private _pagosService : PagosService,
    private _usuarioService: UsuarioService,
    private _inscripcionService: InscripcionService,
    private modalService: NgbModal,
    private _solicitudService: SolicitudService
  ) { 
    this.title = "Pago en línea";
    this._usuarioService.pushBreadcum(this.title,"",1);
    this._usuarioService.removeBreadcum(2);

    if(this.productionMode){
      //PRODUCCION
      this.idOpen = 'mtjhizunvsxqpivzkskj';
      this.apiKey = 'pk_71440caabc3c408e83817a101917b664';
      this.uriPay = 'https://api.openpay.mx';
      this.uriStorePay = 'https://dashboard.openpay.mx/';
      this.sandboxMode = false;
    }else{
      //PRUEBAS
      this.idOpen = 'mlh6cva6fahaxtl9xx3g';
      this.apiKey = 'pk_5db0cb46ab8c450e9097200dfc0866aa';
      this.uriPay = 'https://sandbox-api.openpay.mx/';
      this.uriStorePay = 'https://sandbox-dashboard.openpay.mx/';
      this.sandboxMode = true;
    }

    

  
  }

  ngOnInit() {
    this.identity=this._usuarioService.getIdentity();
    console.log(this.identity)
    this.jwt = this._usuarioService.getJWT();
    
    this.idAspirante = parseInt(this._usuarioService.getIdentity().persona_id);
    


    this._inscripcionService.consultaAspirante(this.idAspirante).subscribe(
      response =>{
        
        if(response && response['status']){
          this.nombreCarrera = response['aspirante'].carrera;
          this.pasoActual = response['aspirante'].paso
        }
      },error =>{
        console.log(error);
      }
    )

    this._pagosService.consultaSolicitudPago(this.jwt).subscribe(
      response=>{
        
        if(response && response['status']){
          this.solicitud=response['solicitud'];
        

          this.idFormaPago = this.solicitud.forma_pago_id
          if(this.idFormaPago == '3'){
            this.generarRecibo=false;
            this.verRecibo=true;
            this.referencia = this.solicitud.tipo_pago.referencia
          }

          
          if(response['solicitud'].forma_pago_id=="2")
          {
            this.pagoUnico=true;
            this.tarjeta=1;
            this.cubo_tienda=false;
            this.cubo_domiciliado=false;
          }
          else{
            this.pagoUnico=false;
          }
          
         // this.referencia=response['solicitud'].referencia;
          //console.log(this.referencia);
        }
        else{
          this.verRecibo=false;
          this.generarRecibo=true;
        }
      },error=>{
        console.log(error)
      }
    )

    OpenPay.setId(this.idOpen);
    OpenPay.setApiKey(this.apiKey);
    OpenPay.setSandboxMode(this.sandboxMode);
    //Se genera el id de dispositivo
    this.deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
    //alert("Hola"+this.deviceSessionId);
    this.consultaPasos();
  }

  suscribe_cliente(){

  
    this.realizandoPago=true;
    this._pagosService.suscribir_cliente(this.suscripcion.idTipo,this.suscripcion.nombre_tarjeta,this.suscripcion.numero_tarjeta,this.suscripcion.mes_tarjeta,this.suscripcion.anio_tarjeta,this.suscripcion.cvv,this.identity.nombre,this.identity.email,this.jwt).subscribe(
      response =>{
        
        if(response && response['status']){
          console.log(response);
          this.realizandoPago=false;
          this.domiciliacionExitosa = true;
        }else{
          alertify.error(response['msg'])
          this.realizandoPago=false;
        }
      },error =>{
        console.log(error);
      }
    )
  }

  consultaPasos(){
    this._solicitudService.consultaAvance(this.jwt, this.idAspirante).subscribe(
      response =>{
          if(response && response['status']){            
            this.pasoActual = response['pasoActual'];
          }
      },error =>{
        console.log(<any>error)
      });
    }

  realizar_pago() {
    
    this.realizandoPago=true;
    OpenPay.token.extractFormAndCreate('payment-form', this.success_callback.bind(this), this.error_callback.bind(this)); 
  
    
  }
  ver_recibo(){
    
    
    window.open(this.uriStorePay+'/paynet-pdf/'+this.idOpen+'/'+this.referencia,'_blank');
  }

  generar_recibo(){
    this.generandoRecibo = true;
    this._pagosService.obtener_referencia(this.identity.nombre,this.identity.primer_apellido,this.identity.celular,this.identity.email,this.montoPagoUnico,this.nombreCarrera,this.jwt).subscribe(
      response=>{        
        
        if(response && response['status']){
          this.generarRecibo=false;
          this.verRecibo=true;
          this.referencia=response['referencia'];
          this.ver_recibo()
        }else{
          alertify.error(response['msg']);
        }

        this.generandoRecibo = false;

      },error=>{
        console.log(error);
      }
    )
  }
  

  success_callback(response){
  
    var token_id = response['data'].id;
    
    this._pagosService.realizar_pago(this.identity.nombre,this.identity.primer_apellido+' '+this.identity.segundo_apellido,this.identity.celular,this.identity.email,token_id,this.montoPagoUnico,this.nombreCarrera,this.deviceSessionId,this.jwt).subscribe(      response=>{
        
        if(response && response['status'] == 0 ){
          alertify.error(response['msg']);          
        }else{
          alertify.success(response['msg']);
          this.pagoUnico=true;
          
        }
        this.realizandoPago=false;

      },
      error=>{
        console.log(error);
        
        this.realizandoPago=false;
      }
    )
    
  }
  error_callback(response){

    var msg;
        switch(response['data'].error_code){
          case 1001:
              msg ='Los campos no tienen el formato correcto, o la petición no tiene campos que son requeridos.';
              break;
          case 2001: 
              msg = 'La cuenta de banco con esta CLABE ya se encuentra registrada en el cliente ';
          break;
          case 2002: 
              msg = 'La tarjeta con este número ya se encuentra registrada en el cliente';
          break;
          case 2004: 
              msg = 'El número de dígitos de la tarjeta no son correctos ';
          break;
          case 2005: 
              msg = 'La fecha de expiración ya no es vigente ';
          break;
          
          default:
              msg = response['data'].description;
          break;
      }


        alertify.error(msg)
        this.realizandoPago=false;
  }

  pago_tarjeta(){
    this.tarjeta=1;
    this.tienda=0;
    this.domiciliado=0;
  }

  pago_tiendac(){
    this.tarjeta=0;
    this.tienda=1;
    this.domiciliado=0;
  }
  
  pago_domiciliado(){
    this.tarjeta=0;
    this.tienda=0;
    this.domiciliado=1;
  }
  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
        
    }, (reason) => {
        
    });
}

}
