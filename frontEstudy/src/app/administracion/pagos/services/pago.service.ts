import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  url: string;
  urlPagos: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
    this.urlPagos = GLOBAL.urlAssets+'/pagos/';
   }


  modificaDescuento(descuento,id_descuento,tipo){
    let formData: FormData = new FormData(); 
    formData.append('descripcion', descuento.get('desc').value);
    formData.append('fecha_inicio', descuento.get('fechaInicio').value);
    formData.append('fecha_fin', descuento.get('fechaFin').value);
    formData.append('descuento', descuento.get('descuento').value);
    formData.append('cod_promo', descuento.get('codigoProm').value);
    formData.append('clave', descuento.get('clave').value);
    formData.append('valor', tipo);

    if (id_descuento) {
      formData.append('id_descuento', id_descuento);
      return this._httpClient.post(this.url +'pagos/descuentos/edita.php',formData);
    }else{
      return this._httpClient.post(this.url +'pagos/descuentos/crea.php',formData);
    }
  }

  guardaLayoutPago(form){
    let formData: FormData = new FormData(); 
    formData.append('documento_pagos', form.get('contenido').value);
    return this._httpClient.post(this.url +'pagos/extras/layoutPagos.php',formData);
  }

  guardaComprobantePago(descuento, solicitud_pago_id){
    let formData: FormData = new FormData(); 
    formData.append('archivo', descuento.get('contenido').value);
    formData.append('solicitud_pago_id', solicitud_pago_id);
    return this._httpClient.post(this.url +'pagos/transferencia/comprobantePago.php',formData);
  }

  consultaEspDescuento(id_descuento){
    var params = '?id_descuento='+id_descuento;
    return this._httpClient.get(this.url +'pagos/descuentos/consultaEspecifica.php'+params);
  }

  consultaTransferencia(){
    // var params = '?id_descuento='+id_descuento;
    return this._httpClient.get(this.url +'pagos/transferencia/consulta.php');
  }

  eliminaDescuento(id_descuento){
    var params = '?id_descuento='+id_descuento;
    return this._httpClient.get(this.url +'pagos/descuentos/elimina.php'+params);
  } 


   catPagos(idTipoPago = null){
    var params = '';

    if(idTipoPago){
      params = '?id_tipo_pago='+idTipoPago;
    }
    
    return this._httpClient.get(this.url +'catalogosPL/pago.php'+params);
  } 

  catSituacionAlumnosPagos(){
    
    return this._httpClient.get(this.url +'catalogosCE/situacionAlumnoPago.php');
  }  

  catTipoPagos(){
    
    return this._httpClient.get(this.url +'catalogosPL/tipoPago.php');
  } 

  catSuscripcion(idCarrera = null){

    var params = '';

    if(idCarrera){
      params = '?id_carrera='+idCarrera;
    }
    
    return this._httpClient.get(this.url +'catalogosPL/suscripcion.php'+params);
  } 

  catFormaPago(){
    return this._httpClient.get(this.url +'catalogosPL/formaPago.php');
  }

  catProducto(){
    return this._httpClient.get(this.url +'catalogosPL/producto.php');
  }

  catEstatusSolicitudPago(){
    return this._httpClient.get(this.url +'catalogosPL/estatusSolicitudPago.php');
  }

  catEstatusPago(){
    return this._httpClient.get(this.url +'catalogosPL/estatusPago.php');
  }

  catDescuentos(){
    return this._httpClient.get(this.url +'catalogosPL/descuento.php');
  }

  consultaPago(idPago){
    var params = '?id_pago='+idPago;
    
    return this._httpClient.get(this.url +'pagos/pagos/consulta.php'+params);
  }



  consultaSuscripcion(id_suscripcion){

    var params = '?id_suscripcion='+id_suscripcion;

    return this._httpClient.get(this.url +'pagos/suscripcion/consulta.php'+params);
  } 

  consultaAlumnos(busqueda){

    var params = '';
    if(busqueda){
      params = '?busqueda='+busqueda;
    }
    

    return this._httpClient.get(this.url +'pagos/alumno/consultaPagos.php'+params);
  } 
  

  modificaPago(pago, id_pago) {

    let formData: FormData = new FormData();
    formData.append('nombre_pago', pago.get('nombrePago').value);
    formData.append('descripcion_pago', pago.get('descripcionPago').value);
    formData.append('monto', pago.get('monto').value);
    formData.append('id_tipo_pago', pago.get('idTipoPago').value);
    formData.append('id_estatus_pago', pago.get('idEstatusPago').value);
    
    var fd = new FormData();

    if (id_pago == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url + 'pagos/pagos/crea.php', formData);
    } else {

      formData.append('id_pago', id_pago);
      return this._httpClient.post(this.url + 'pagos/pagos/edita.php', formData);
    }
  }
  
  modificaSuscripcion(suscripcion, id_suscripcion) {

    let formData: FormData = new FormData();
      formData.append('nombre_suscripcion', suscripcion.get('nombreSuscripcion').value);
      formData.append('descripcion_suscripcion', suscripcion.get('descripcionSuscripcion').value);
      formData.append('clave_suscripcion', suscripcion.get('claveSuscripcion').value);
      formData.append('monto_colegiatura', suscripcion.get('montoColegiatura').value);
      formData.append('monto_reinscripcion', suscripcion.get('montoReinscripcion').value);
      formData.append('dia_pago_colegiatura', suscripcion.get('diaPagoColegiatura').value);
      formData.append('dia_pago_reinscripcion', suscripcion.get('diaPagoReinscripcion').value);
    
    if (id_suscripcion == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url + 'pagos/suscripcion/crea.php', formData);
    } else {
      formData.append('id_suscripcion', id_suscripcion);
      return this._httpClient.post(this.url + 'pagos/suscripcion/edita.php', formData);
    }
  }
  

  eliminaSuscripcion(id_suscripcion){

    let formData: FormData = new FormData(); 
    formData.append('id_suscripcion', id_suscripcion); 
    
    return this._httpClient.post(this.url +'pagos/suscripcion/elimina.php',formData);
  }

  eliminaSuscripcionPago(id_pago){

    let formData: FormData = new FormData(); 
    formData.append('id_pago', id_pago); 
    
    return this._httpClient.post(this.url +'pagos/suscripcion/eliminaPago.php',formData);
  }

  

  
  generaPago(suscripcion,id_suscripcion){

    let formData: FormData = new FormData(); 
    formData.append('id_suscripcion', id_suscripcion); 

    formData.append('mes', suscripcion.get('mes').value);
    formData.append('anio', suscripcion.get('anio').value);

    if(suscripcion.get('descuento').value && suscripcion.get('descuento').value != ''){
      formData.append('id_descuento', suscripcion.get('descuento').value);
    }
    
    return this._httpClient.post(this.url +'pagos/suscripcion/generaPago.php',formData);
  }

  consultaAlumnoSuscripcion(id_alumno){

    var params = '?id_alumno='+id_alumno;

    return this._httpClient.get(this.url +'pagos/alumno/consultaSuscripcion.php'+params);

  }

  consultaAlumnoInscripcion(id_alumno){

    var params = '?id_alumno='+id_alumno;

    return this._httpClient.get(this.url +'pagos/alumno/consultaInscripcion.php'+params);

  }
  consultaPersonaSuscripcionPago(id_persona,id_rol){

    var params = '?id_persona='+id_persona;
      params += '&id_rol='+id_rol;

    return this._httpClient.get(this.url +'pagos/alumno/consultaSuscripcionPago.php'+params);

  }
  consultaPorcentaje(id_suscripcion){

    var params = '?id_suscripcion='+id_suscripcion;

    return this._httpClient.get(this.url +'pagos/suscripcion/consultaPorcentaje.php'+params);

  }

  consultaPagosAlumno(id_alumno){
    var params = '?id_alumno='+id_alumno;

    return this._httpClient.get(this.url +'pagos/alumno/consultaPagosAlumno.php'+params);
  }

  consultaPagos(busqueda, idEstatusPago, inicio, max){
    var params = '?';
    
    if(busqueda){
      params += '&busqueda='+busqueda;
    }

    if(idEstatusPago){
      params += '&id_estatus_solicitud_pago='+idEstatusPago;
    }
    params += '&inicio='+inicio;
    params += '&max='+max;

    return this._httpClient.get(this.url +'pagos/solicitud/consultaPagos.php'+params);
  }

  guardaSuscripcion(id_alumno, form) {
    let formData = new FormData();
      formData.append('id_alumno', id_alumno);
    for (let [key, value] of form) {  
      formData.append(key, value);
    }
    return this._httpClient.post(this.url +'pagos/alumnoSuscripcion/creaSuscripcion.php', formData);
  }

  eliminaSuscripcionAlumno(id_alumno, id_suscripcion_alumno) {
    let formData = new FormData();
      formData.append('id_alumno', id_alumno);
      formData.append('id_suscripcion_alumno', id_suscripcion_alumno);

    return this._httpClient.post(this.url +'pagos/alumnoSuscripcion/eliminaSuscripcion.php', formData);
  }

  modificaSuscripcionAlumno(id_alumno, form, tipo, id_suscripcion_alumno) {
    let formData = new FormData();
      formData.append('id_alumno', id_alumno);
    for (let [key, value] of form) {  
      formData.append(key, value);
    }
    if (tipo == 0) {
      return this._httpClient.post(this.url +'pagos/alumnoSuscripcion/creaSuscripcion.php', formData);
    }else if (tipo == 1) {
      formData.append('id_suscripcion_alumno', id_suscripcion_alumno);
      return this._httpClient.post(this.url +'pagos/alumnoSuscripcion/editaSuscripcion.php', formData);
    }
  }

  consultaSolicitud(id_solicitud_pago){

    var params = '?id_solicitud_pago='+id_solicitud_pago;

    return this._httpClient.get(this.url +'pagos/solicitud/consulta.php'+params);

  }

  creaProducto(solicitud,idPersona) {


    let formData: FormData = new FormData();
    formData.append('fecha_pago', solicitud.get('fechaPago').value);
    formData.append('id_forma_pago', solicitud.get('idFormaPago').value);
    formData.append('id_estatus_solicitud_pago', solicitud.get('idEstatusSolicitudPago').value);
    formData.append('id_pago', solicitud.get('idPago').value);
    
      
    formData.append('monto', solicitud.get('monto').value);
    formData.append('monto_final', solicitud.get('monto').value);
    formData.append('nombre_pago', solicitud.get('nombrePago').value);
    formData.append('observacion', solicitud.get('observacion').value);    
    formData.append('id_persona', idPersona);    

    formData.append('porcentaje', '0');
    formData.append('tipo_porcentaje', '1');


    var fd = new FormData();

    return this._httpClient.post(this.url + 'pagos/solicitud/crea.php', formData);

  }


  creaColegiaturaAlumno(solicitud,idPersona) {


    let formData: FormData = new FormData();
    formData.append('fecha_pago', solicitud.get('fechaPago').value);
    formData.append('id_forma_pago', solicitud.get('idFormaPago').value);
    formData.append('id_estatus_solicitud_pago', solicitud.get('idEstatusSolicitudPago').value);
    formData.append('id_pago', solicitud.get('idPago').value);
    
      if(solicitud.get('idDescuento') && solicitud.get('idDescuento').value != ""){
        formData.append('id_descuento', solicitud.get('idDescuento').value);
      }
    formData.append('monto', solicitud.get('montoOriginal').value);
    formData.append('monto_final', solicitud.get('montoTotal').value);
    if(solicitud.get('beca').value != ""){
      formData.append('beca', solicitud.get('beca').value);
    }

    let recargo = 0;
    if(solicitud.get('recargo').value) 
     recargo = parseFloat(solicitud.get('recargo').value) * -1;

    formData.append('porcentaje',recargo.toString());
    

    formData.append('nombre_pago', solicitud.get('nombrePago').value);
    
    formData.append('observacion', solicitud.get('observacion').value);    
    formData.append('id_persona', idPersona);    


    var fd = new FormData();

      return this._httpClient.post(this.url + 'pagos/solicitud/crea.php', formData);
  
  }

  editaSolicitud(solicitud, id_solicitud_pago,idPersona) {


    let formData: FormData = new FormData();
    formData.append('fecha_pago', solicitud.get('fechaPago').value);
    formData.append('id_forma_pago', solicitud.get('idFormaPago').value);
    formData.append('id_estatus_solicitud_pago', solicitud.get('idEstatusSolicitudPago').value);
    
    if(solicitud.get('id_descuento') && solicitud.get('idDescuento').value != ""){
      formData.append('id_descuento', solicitud.get('idDescuento').value);
    }

    

    formData.append('monto', solicitud.get('monto').value);
    formData.append('monto_final', solicitud.get('montoTotal').value);
    if(solicitud.get('beca').value != ""){
      formData.append('beca', solicitud.get('beca').value);
    }
    
    let recargo = 0;
    if(solicitud.get('recargo').value) 
    recargo = parseFloat(solicitud.get('recargo').value) * -1;

   formData.append('porcentaje',recargo.toString());

    

    formData.append('nombre_pago', solicitud.get('nombrePago').value);
    
    formData.append('observacion', solicitud.get('observacion').value);    
    formData.append('id_persona', idPersona);    

    formData.append('id_solicitud_pago', id_solicitud_pago);
    return this._httpClient.post(this.url + 'pagos/solicitud/edita.php', formData);
  }

  eliminaSolicitudPago( id_solicitud_pago) {
    let formData = new FormData();
      formData.append('id_solicitud_pago', id_solicitud_pago);

    return this._httpClient.post(this.url +'pagos/solicitud/elimina.php', formData);
  }
  

  modificaPorcentaje(id_suscripcion, form, id, id_porcentaje_pago) {
    let formData = new FormData();
      formData.append('id_suscripcion', id_suscripcion);
    for (let [key, value] of form) {
      formData.append(key, value);
    }
    if (id == 0) {
      return this._httpClient.post(this.url +'pagos/porcentaje/crea.php', formData);
    }else if (id == 1) {
      formData.append('id_porcentaje_pago', id_porcentaje_pago);
      return this._httpClient.post(this.url +'pagos/porcentaje/edita.php', formData);
    }
  }

  eliminaPorcentaje(id_porcentaje_pago) {
    let formData = new FormData();
      formData.append('id_porcentaje_pago', id_porcentaje_pago);
    return this._httpClient.post(this.url +'pagos/porcentaje/elimina.php', formData);
  }

  consultaPagosGenerados(id_suscripcion) {
    let params = new HttpParams()
      .set('id_suscripcion', id_suscripcion);
    return this._httpClient.get(this.url + 'pagos/suscripcion/consultaPagos.php', {params: params});
  }

  guardarSuscripcionPago(suscripcion,id_suscripcion){

    let formData: FormData = new FormData();
    formData.append('mes', suscripcion.get('mes').value);
    formData.append('anio', suscripcion.get('anio').value);
    formData.append('tipo', suscripcion.get('tipoPago').value);
    formData.append('id_suscripcion', id_suscripcion);
        
    return this._httpClient.post(this.url + 'pagos/suscripcion/creaPago.php', formData);
  }

  irPagar(){
    window.location.href = this.urlPagos + 'mercadoPago';
  }

  cambiaSituacion( form, id_alumno) {
    let formData: FormData = new FormData();
    formData.append('estatus', form.situacion);
    formData.append('id_alumno', id_alumno);
    formData.append('observacion', form.observacion? form.observacion: '');

    return this._httpClient.post(this.url + 'pagos/alumno/cambiaSituacionPago.php', formData);
  }

  codigoPromocion(id_solicitud_pago,codigo_promocion){

    var params = '?id_solicitud_pago='+id_solicitud_pago;
    params += '&codigo_promocion='+codigo_promocion;
    
    return this._httpClient.get(this.url +'pagos/descuentos/codigoPromocion.php'+params);
  }

  getTotalPagos() {
    return this._httpClient.get(this.url + 'pagos/solicitud/totalPagos.php');
  }

}
