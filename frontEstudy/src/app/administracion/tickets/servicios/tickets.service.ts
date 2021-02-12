import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url: string = GLOBAL.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  getConteoTickets() {
    return this.httpClient.get(this.url + 'controlEscolar/tickets/conteoEstatusTicket.php');
  }

  consultaTipoTicket() {
    return this.httpClient.get(this.url + '/catalogosCE/consultaTipoTiket.php');
  }

  consultaTicket(id_estatus) {
    let params = new HttpParams()
      .set('id_estatus_ticket', id_estatus);
    
    return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaPorEstatus.php', { params: params });
  }

  consultaPorTicket(id_ticket) {
    let params = new HttpParams()
      .set('id_ticket', id_ticket);

    return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaTicket.php', { params: params });
  }

  consultaRespuestas(id_ticket) {
    let params = new HttpParams()
      .set('id_ticket', id_ticket);

    return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaRespuestas.php', { params: params });
  }

  guardarRespuesta(id_ticket, form) {    
    let formData = new FormData();
      formData.append('id_ticket', id_ticket);
      formData.append('texto', form.texto);

    return this.httpClient.post(this.url + 'controlEscolar/tickets/creaRespuesta.php', formData);
  }

  guardaTicketCorreccion(form, idPersona, idRol, idRolUsuario) {
    let formData: FormData = new FormData();    
    formData.append('asunto_ticket', form.asunto);
    formData.append('descripcion_ticket', form.mensaje);
    formData.append('id_tipo_ticket', form.tipoTicket);
    if (idRol == 1) {
      formData.append('id_persona', idPersona);
      formData.append('id_rol', idRolUsuario);
      formData.append('id_area', '1');
      formData.append('id_rol_admin', idRol);
      return this.httpClient.post(this.url + 'controlEscolar/tickets/crearNotificacion.php', formData);
    }else if (idRol == 2) {
      return this.httpClient.post(this.url + 'controlEscolar/tickets/crearTicket.php', formData);
    }
  }

  ticketVisto(id_ticket){

    var params = '?id_ticket='+id_ticket;
  
    return this.httpClient.get(this.url +'general/tickets/ticketVisto.php'+params);
  }

  cerrarTicket(id_ticket) {
    let formData = new FormData();
      formData.append('id_ticket', id_ticket);
    return this.httpClient.post(this.url +'controlEscolar/tickets/cerrarTicket.php', formData);
  }

  eliminarTicket(id_ticket) {
    let formData = new FormData();
      formData.append('id_ticket', id_ticket);
    return this.httpClient.post(this.url +'controlEscolar/tickets/eliminarTicket.php', formData);
  }

}