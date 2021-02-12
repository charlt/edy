import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class AdminExpedienteService {
  public url: string;
  
  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
  ) { 
    this.url = GLOBAL.url;
  }

  catalogos(){    
    return this._httpClient.get(this.url +'/catalogoSG/documento.php');
  }

  alerts(){    
    return this._httpClient.get(this.url +'controlEscolar/notificaciones/pendientes.php');
  }

  consulta(idTipoBusqueda,idDocumento){    
    var params = '?tipo_busqueda='+idTipoBusqueda;
    params += '&id_documento='+idDocumento;

    
    return this._httpClient.get(this.url +'/controlEscolar/expediente/consultaExpediente.php'+params);
  }

  consultaDocumentoEtiquetas(id_documento) {
    let params = new HttpParams()
      .set('id_documento', id_documento)

    return this._httpClient.get(this.url +'/controlEscolar/documentos/documentoEtiquetas.php', {params: params});
  }

  guardarEtiquetasDocumento(etiquetas, id_documento) {
    let formData = new FormData();
      formData.append('id_documento', id_documento);
    etiquetas.forEach(etiqueta => {
      formData.append('id_etiquetas[]', etiqueta.id_etiqueta);
    });

    return this._httpClient.post(this.url +'controlEscolar/documentos/crearEtiquetasDocumento.php', formData);
  }

  guardarCarrerasDocumento(carreras, id_documento) {
    let formData = new FormData();
      formData.append('id_documento', id_documento);
    carreras.forEach(carrera => {
      formData.append('id_carreras[]', carrera.id_carrera);
    });

    return this._httpClient.post(this.url +'controlEscolar/documentos/crearCarrerasDocumento.php', formData);
  }
  
  consultaDocumentoCarreras(id_documento) {
    let params = new HttpParams()
      .set('id_documento', id_documento);

    return this._httpClient.get(this.url +'/controlEscolar/documentos/documentoCarreras.php', {params: params});
  }

  eliminarDocumento(id_documento) {
    let formData = new FormData();
      formData.append('id_documento', id_documento);

    return this._httpClient.post(this.url +'controlEscolar/documentos/eliminarDocumento.php', formData);
  }

  catalogoEtiquetas() {
    return this._httpClient.get(this.url +'/controlEscolar/documentos/catalogoEtiquetas.php');
  }

  consultaEtiqueta(id_etiqueta) {
    let params = new HttpParams()
      .set('id_etiqueta', id_etiqueta);

    return this._httpClient.get(this.url +'/controlEscolar/documentos/consultaEtiqueta.php', {params: params});
  }

  modificaEtiqueta(form, id_etiqueta) {
    let formData = new FormData();
    if (id_etiqueta) formData.append('id_etiqueta', id_etiqueta);
    formData.append('clave_etiqueta', form.clave);
    formData.append('nombre', form.nombre);
    formData.append('descripcion', form.descripcion);

    return this._httpClient.post(this.url +'controlEscolar/documentos/modificaEtiqueta.php', formData);
  }

  eliminarEtiqueta(id_etiqueta) {
    let formData = new FormData();
    formData.append('id_etiqueta', id_etiqueta);

    return this._httpClient.post(this.url +'controlEscolar/documentos/eliminarEtiqueta.php', formData);
  }

  modificaDocumento(form, id_documento) {
    let formData = new FormData();
    if (id_documento) formData.append('id_documento', id_documento);
    formData.append('nombre', form.nombre_documento);
    formData.append('descripcion', form.documento_desc);
    formData.append('obligatorio', form.obligatorio);

    return this._httpClient.post(this.url +'controlEscolar/documentos/modificaDocumento.php', formData);
  }

}
