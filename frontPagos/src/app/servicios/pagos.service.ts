import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from "src/app/servicios/global";

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  url: string = GLOBAL.url;

  constructor(
    private http: HttpClient
  ) { }

  consultaSolicitud(id_solicitud) {    
    let params = new HttpParams();
      params = params.append('id_solicitud_pago', id_solicitud);
    console.log('checaaa')
    return this.http.get(this.url + 'pagos/solicitud/consulta.php', { params: params });
  }

  getMonto(matricula) {    
    let params = new HttpParams();
      params = params.append('matricula', matricula);
    
    return this.http.get(this.url + 'alumnos/consultaMatricula.php', { params: params });
  }

  sendPayPF(form, monto, matricula,produccion) {
    let formData = new FormData();
    formData.append('data', JSON.stringify(form));
    formData.append('monto', monto);
    formData.append('matricula', matricula);
    formData.append('produccion', produccion);

    return this.http.post(this.url + 'pagos/pago-facil.php', formData);
  }

  sendPayOP(token,nombre,apellidos,telefono,email,monto,descripcion,sesion,solicitud_pago_id,produccion) {
    let formData: FormData = new FormData(); 
    
    formData.append('name', nombre);
    formData.append('last_name', apellidos);
    formData.append('phone_number', telefono);
    formData.append('email', email);

    formData.append('token_id', token);
    formData.append('amount', monto);
    formData.append('description', descripcion);
    formData.append('deviceIdHiddenFieldName', sesion);
    formData.append('id_solicitud_pago', solicitud_pago_id);
    formData.append('produccion', produccion);

    return this.http.post(this.url + 'pagos/openpay/openpay.php', formData);
  }

  getCargo(autorizacion, produccion) {
    let formData: FormData = new FormData();
      formData.append('autorizacion', autorizacion);
      formData.append('produccion', produccion)
    return this.http.post(this.url + 'pagos/openpay/openpay-get-charge.php', formData);
  }

  modificaEstatusExitoso(id_solicitud_pago, autorizacion) {
    let formData: FormData = new FormData();
      formData.append('id_solicitud_pago', id_solicitud_pago);
      formData.append('id_estatus_solicitud_pago', '3');

    return this.http.post(this.url + 'pagos/solicitud/editaStatus.php', formData);
  }

  guardaMensajePago(id_solicitud_pago, datos, id) {
    let formData: FormData = new FormData();
      formData.append('id_solicitud_pago', id_solicitud_pago);
      formData.append('tipo', id);
      if (id == 1) {
        //
        formData.append('autorizacion', datos.autorizacion);
        formData.append('id_transaccion', datos.id);
      }else if (id == 0) {
        formData.append('error', datos.detalles.message);
      }

    return this.http.post(this.url + 'pagos/openpay/guardaPago.php', formData);
  }


  crearCargoOpenPay(produccion, id_solicitud_pago,nombre,primer_apellido,segundo_apellido,email,celular, monto, descripcion) {
    let formData = new FormData();
      formData.append('produccion', produccion);
      formData.append('id_solicitud_pago',id_solicitud_pago);
      formData.append('name',nombre);
      formData.append('last_name', primer_apellido + ' ' + segundo_apellido);
      formData.append('email', email);
      formData.append('phone_number', celular);
      formData.append('monto', monto);
      formData.append('descripcion', descripcion);


    return this.http.post(this.url + 'pagos/openpay/create-charge.php', formData);
  }

  consultaInformacion(id_persona){
    let params = new HttpParams();
    params = params.append('id_persona', id_persona);
  return this.http.get(this.url + 'admin/personas/consulta.php', { params: params });
  }

}
