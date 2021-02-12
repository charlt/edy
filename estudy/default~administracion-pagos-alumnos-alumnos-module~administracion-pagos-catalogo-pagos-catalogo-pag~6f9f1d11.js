(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-pagos-alumnos-alumnos-module~administracion-pagos-catalogo-pagos-catalogo-pag~6f9f1d11"],{

/***/ "./src/app/administracion/pagos/services/pago.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/pagos/services/pago.service.ts ***!
  \***************************************************************/
/*! exports provided: PagoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoService", function() { return PagoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagoService = /** @class */ (function () {
    function PagoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.urlPagos = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAssets + '/pagos/';
    }
    PagoService.prototype.modificaDescuento = function (descuento, id_descuento, tipo) {
        var formData = new FormData();
        formData.append('descripcion', descuento.get('desc').value);
        formData.append('fecha_inicio', descuento.get('fechaInicio').value);
        formData.append('fecha_fin', descuento.get('fechaFin').value);
        formData.append('descuento', descuento.get('descuento').value);
        formData.append('cod_promo', descuento.get('codigoProm').value);
        formData.append('clave', descuento.get('clave').value);
        formData.append('valor', tipo);
        if (id_descuento) {
            formData.append('id_descuento', id_descuento);
            return this._httpClient.post(this.url + 'pagos/descuentos/edita.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'pagos/descuentos/crea.php', formData);
        }
    };
    PagoService.prototype.guardaLayoutPago = function (form) {
        var formData = new FormData();
        formData.append('documento_pagos', form.get('contenido').value);
        return this._httpClient.post(this.url + 'pagos/extras/layoutPagos.php', formData);
    };
    PagoService.prototype.guardaComprobantePago = function (descuento, solicitud_pago_id) {
        var formData = new FormData();
        formData.append('archivo', descuento.get('contenido').value);
        formData.append('solicitud_pago_id', solicitud_pago_id);
        return this._httpClient.post(this.url + 'pagos/transferencia/comprobantePago.php', formData);
    };
    PagoService.prototype.consultaEspDescuento = function (id_descuento) {
        var params = '?id_descuento=' + id_descuento;
        return this._httpClient.get(this.url + 'pagos/descuentos/consultaEspecifica.php' + params);
    };
    PagoService.prototype.consultaTransferencia = function () {
        // var params = '?id_descuento='+id_descuento;
        return this._httpClient.get(this.url + 'pagos/transferencia/consulta.php');
    };
    PagoService.prototype.eliminaDescuento = function (id_descuento) {
        var params = '?id_descuento=' + id_descuento;
        return this._httpClient.get(this.url + 'pagos/descuentos/elimina.php' + params);
    };
    PagoService.prototype.catPagos = function (idTipoPago) {
        if (idTipoPago === void 0) { idTipoPago = null; }
        var params = '';
        if (idTipoPago) {
            params = '?id_tipo_pago=' + idTipoPago;
        }
        return this._httpClient.get(this.url + 'catalogosPL/pago.php' + params);
    };
    PagoService.prototype.catSituacionAlumnosPagos = function () {
        return this._httpClient.get(this.url + 'catalogosCE/situacionAlumnoPago.php');
    };
    PagoService.prototype.catTipoPagos = function () {
        return this._httpClient.get(this.url + 'catalogosPL/tipoPago.php');
    };
    PagoService.prototype.catSuscripcion = function (idCarrera) {
        if (idCarrera === void 0) { idCarrera = null; }
        var params = '';
        if (idCarrera) {
            params = '?id_carrera=' + idCarrera;
        }
        return this._httpClient.get(this.url + 'catalogosPL/suscripcion.php' + params);
    };
    PagoService.prototype.catFormaPago = function () {
        return this._httpClient.get(this.url + 'catalogosPL/formaPago.php');
    };
    PagoService.prototype.catProducto = function () {
        return this._httpClient.get(this.url + 'catalogosPL/producto.php');
    };
    PagoService.prototype.catEstatusSolicitudPago = function () {
        return this._httpClient.get(this.url + 'catalogosPL/estatusSolicitudPago.php');
    };
    PagoService.prototype.catEstatusPago = function () {
        return this._httpClient.get(this.url + 'catalogosPL/estatusPago.php');
    };
    PagoService.prototype.catDescuentos = function () {
        return this._httpClient.get(this.url + 'catalogosPL/descuento.php');
    };
    PagoService.prototype.consultaPago = function (idPago) {
        var params = '?id_pago=' + idPago;
        return this._httpClient.get(this.url + 'pagos/pagos/consulta.php' + params);
    };
    PagoService.prototype.consultaSuscripcion = function (id_suscripcion) {
        var params = '?id_suscripcion=' + id_suscripcion;
        return this._httpClient.get(this.url + 'pagos/suscripcion/consulta.php' + params);
    };
    PagoService.prototype.consultaAlumnos = function (busqueda) {
        var params = '';
        if (busqueda) {
            params = '?busqueda=' + busqueda;
        }
        return this._httpClient.get(this.url + 'pagos/alumno/consultaPagos.php' + params);
    };
    PagoService.prototype.modificaPago = function (pago, id_pago) {
        var formData = new FormData();
        formData.append('nombre_pago', pago.get('nombrePago').value);
        formData.append('descripcion_pago', pago.get('descripcionPago').value);
        formData.append('monto', pago.get('monto').value);
        formData.append('id_tipo_pago', pago.get('idTipoPago').value);
        formData.append('id_estatus_pago', pago.get('idEstatusPago').value);
        var fd = new FormData();
        if (id_pago == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'pagos/pagos/crea.php', formData);
        }
        else {
            formData.append('id_pago', id_pago);
            return this._httpClient.post(this.url + 'pagos/pagos/edita.php', formData);
        }
    };
    PagoService.prototype.modificaSuscripcion = function (suscripcion, id_suscripcion) {
        var formData = new FormData();
        formData.append('nombre_suscripcion', suscripcion.get('nombreSuscripcion').value);
        formData.append('descripcion_suscripcion', suscripcion.get('descripcionSuscripcion').value);
        formData.append('clave_suscripcion', suscripcion.get('claveSuscripcion').value);
        formData.append('monto_colegiatura', suscripcion.get('montoColegiatura').value);
        formData.append('monto_reinscripcion', suscripcion.get('montoReinscripcion').value);
        formData.append('dia_pago_colegiatura', suscripcion.get('diaPagoColegiatura').value);
        formData.append('dia_pago_reinscripcion', suscripcion.get('diaPagoReinscripcion').value);
        if (id_suscripcion == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'pagos/suscripcion/crea.php', formData);
        }
        else {
            formData.append('id_suscripcion', id_suscripcion);
            return this._httpClient.post(this.url + 'pagos/suscripcion/edita.php', formData);
        }
    };
    PagoService.prototype.eliminaSuscripcion = function (id_suscripcion) {
        var formData = new FormData();
        formData.append('id_suscripcion', id_suscripcion);
        return this._httpClient.post(this.url + 'pagos/suscripcion/elimina.php', formData);
    };
    PagoService.prototype.eliminaSuscripcionPago = function (id_pago) {
        var formData = new FormData();
        formData.append('id_pago', id_pago);
        return this._httpClient.post(this.url + 'pagos/suscripcion/eliminaPago.php', formData);
    };
    PagoService.prototype.generaPago = function (suscripcion, id_suscripcion) {
        var formData = new FormData();
        formData.append('id_suscripcion', id_suscripcion);
        formData.append('mes', suscripcion.get('mes').value);
        formData.append('anio', suscripcion.get('anio').value);
        if (suscripcion.get('descuento').value && suscripcion.get('descuento').value != '') {
            formData.append('id_descuento', suscripcion.get('descuento').value);
        }
        return this._httpClient.post(this.url + 'pagos/suscripcion/generaPago.php', formData);
    };
    PagoService.prototype.consultaAlumnoSuscripcion = function (id_alumno) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + 'pagos/alumno/consultaSuscripcion.php' + params);
    };
    PagoService.prototype.consultaAlumnoInscripcion = function (id_alumno) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + 'pagos/alumno/consultaInscripcion.php' + params);
    };
    PagoService.prototype.consultaPersonaSuscripcionPago = function (id_persona, id_rol) {
        var params = '?id_persona=' + id_persona;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + 'pagos/alumno/consultaSuscripcionPago.php' + params);
    };
    PagoService.prototype.consultaPorcentaje = function (id_suscripcion) {
        var params = '?id_suscripcion=' + id_suscripcion;
        return this._httpClient.get(this.url + 'pagos/suscripcion/consultaPorcentaje.php' + params);
    };
    PagoService.prototype.consultaPagosAlumno = function (id_alumno) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + 'pagos/alumno/consultaPagosAlumno.php' + params);
    };
    PagoService.prototype.consultaPagos = function (busqueda, idEstatusPago, inicio, max) {
        var params = '?';
        if (busqueda) {
            params += '&busqueda=' + busqueda;
        }
        if (idEstatusPago) {
            params += '&id_estatus_solicitud_pago=' + idEstatusPago;
        }
        params += '&inicio=' + inicio;
        params += '&max=' + max;
        return this._httpClient.get(this.url + 'pagos/solicitud/consultaPagos.php' + params);
    };
    PagoService.prototype.guardaSuscripcion = function (id_alumno, form) {
        var formData = new FormData();
        formData.append('id_alumno', id_alumno);
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var _a = form_1[_i], key = _a[0], value = _a[1];
            formData.append(key, value);
        }
        return this._httpClient.post(this.url + 'pagos/alumnoSuscripcion/creaSuscripcion.php', formData);
    };
    PagoService.prototype.eliminaSuscripcionAlumno = function (id_alumno, id_suscripcion_alumno) {
        var formData = new FormData();
        formData.append('id_alumno', id_alumno);
        formData.append('id_suscripcion_alumno', id_suscripcion_alumno);
        return this._httpClient.post(this.url + 'pagos/alumnoSuscripcion/eliminaSuscripcion.php', formData);
    };
    PagoService.prototype.modificaSuscripcionAlumno = function (id_alumno, form, tipo, id_suscripcion_alumno) {
        var formData = new FormData();
        formData.append('id_alumno', id_alumno);
        for (var _i = 0, form_2 = form; _i < form_2.length; _i++) {
            var _a = form_2[_i], key = _a[0], value = _a[1];
            formData.append(key, value);
        }
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'pagos/alumnoSuscripcion/creaSuscripcion.php', formData);
        }
        else if (tipo == 1) {
            formData.append('id_suscripcion_alumno', id_suscripcion_alumno);
            return this._httpClient.post(this.url + 'pagos/alumnoSuscripcion/editaSuscripcion.php', formData);
        }
    };
    PagoService.prototype.consultaSolicitud = function (id_solicitud_pago) {
        var params = '?id_solicitud_pago=' + id_solicitud_pago;
        return this._httpClient.get(this.url + 'pagos/solicitud/consulta.php' + params);
    };
    PagoService.prototype.creaProducto = function (solicitud, idPersona) {
        var formData = new FormData();
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
    };
    PagoService.prototype.creaColegiaturaAlumno = function (solicitud, idPersona) {
        var formData = new FormData();
        formData.append('fecha_pago', solicitud.get('fechaPago').value);
        formData.append('id_forma_pago', solicitud.get('idFormaPago').value);
        formData.append('id_estatus_solicitud_pago', solicitud.get('idEstatusSolicitudPago').value);
        formData.append('id_pago', solicitud.get('idPago').value);
        if (solicitud.get('idDescuento') && solicitud.get('idDescuento').value != "") {
            formData.append('id_descuento', solicitud.get('idDescuento').value);
        }
        formData.append('monto', solicitud.get('montoOriginal').value);
        formData.append('monto_final', solicitud.get('montoTotal').value);
        if (solicitud.get('beca').value != "") {
            formData.append('beca', solicitud.get('beca').value);
        }
        var recargo = 0;
        if (solicitud.get('recargo').value)
            recargo = parseFloat(solicitud.get('recargo').value) * -1;
        formData.append('porcentaje', recargo.toString());
        formData.append('nombre_pago', solicitud.get('nombrePago').value);
        formData.append('observacion', solicitud.get('observacion').value);
        formData.append('id_persona', idPersona);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'pagos/solicitud/crea.php', formData);
    };
    PagoService.prototype.editaSolicitud = function (solicitud, id_solicitud_pago, idPersona) {
        var formData = new FormData();
        formData.append('fecha_pago', solicitud.get('fechaPago').value);
        formData.append('id_forma_pago', solicitud.get('idFormaPago').value);
        formData.append('id_estatus_solicitud_pago', solicitud.get('idEstatusSolicitudPago').value);
        if (solicitud.get('id_descuento') && solicitud.get('idDescuento').value != "") {
            formData.append('id_descuento', solicitud.get('idDescuento').value);
        }
        formData.append('monto', solicitud.get('monto').value);
        formData.append('monto_final', solicitud.get('montoTotal').value);
        if (solicitud.get('beca').value != "") {
            formData.append('beca', solicitud.get('beca').value);
        }
        var recargo = 0;
        if (solicitud.get('recargo').value)
            recargo = parseFloat(solicitud.get('recargo').value) * -1;
        formData.append('porcentaje', recargo.toString());
        formData.append('nombre_pago', solicitud.get('nombrePago').value);
        formData.append('observacion', solicitud.get('observacion').value);
        formData.append('id_persona', idPersona);
        formData.append('id_solicitud_pago', id_solicitud_pago);
        return this._httpClient.post(this.url + 'pagos/solicitud/edita.php', formData);
    };
    PagoService.prototype.eliminaSolicitudPago = function (id_solicitud_pago) {
        var formData = new FormData();
        formData.append('id_solicitud_pago', id_solicitud_pago);
        return this._httpClient.post(this.url + 'pagos/solicitud/elimina.php', formData);
    };
    PagoService.prototype.modificaPorcentaje = function (id_suscripcion, form, id, id_porcentaje_pago) {
        var formData = new FormData();
        formData.append('id_suscripcion', id_suscripcion);
        for (var _i = 0, form_3 = form; _i < form_3.length; _i++) {
            var _a = form_3[_i], key = _a[0], value = _a[1];
            formData.append(key, value);
        }
        if (id == 0) {
            return this._httpClient.post(this.url + 'pagos/porcentaje/crea.php', formData);
        }
        else if (id == 1) {
            formData.append('id_porcentaje_pago', id_porcentaje_pago);
            return this._httpClient.post(this.url + 'pagos/porcentaje/edita.php', formData);
        }
    };
    PagoService.prototype.eliminaPorcentaje = function (id_porcentaje_pago) {
        var formData = new FormData();
        formData.append('id_porcentaje_pago', id_porcentaje_pago);
        return this._httpClient.post(this.url + 'pagos/porcentaje/elimina.php', formData);
    };
    PagoService.prototype.consultaPagosGenerados = function (id_suscripcion) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_suscripcion', id_suscripcion);
        return this._httpClient.get(this.url + 'pagos/suscripcion/consultaPagos.php', { params: params });
    };
    PagoService.prototype.guardarSuscripcionPago = function (suscripcion, id_suscripcion) {
        var formData = new FormData();
        formData.append('mes', suscripcion.get('mes').value);
        formData.append('anio', suscripcion.get('anio').value);
        formData.append('tipo', suscripcion.get('tipoPago').value);
        formData.append('id_suscripcion', id_suscripcion);
        return this._httpClient.post(this.url + 'pagos/suscripcion/creaPago.php', formData);
    };
    PagoService.prototype.irPagar = function () {
        window.location.href = this.urlPagos + 'mercadoPago';
    };
    PagoService.prototype.cambiaSituacion = function (form, id_alumno) {
        var formData = new FormData();
        formData.append('estatus', form.situacion);
        formData.append('id_alumno', id_alumno);
        formData.append('observacion', form.observacion ? form.observacion : '');
        return this._httpClient.post(this.url + 'pagos/alumno/cambiaSituacionPago.php', formData);
    };
    PagoService.prototype.codigoPromocion = function (id_solicitud_pago, codigo_promocion) {
        var params = '?id_solicitud_pago=' + id_solicitud_pago;
        params += '&codigo_promocion=' + codigo_promocion;
        return this._httpClient.get(this.url + 'pagos/descuentos/codigoPromocion.php' + params);
    };
    PagoService.prototype.getTotalPagos = function () {
        return this._httpClient.get(this.url + 'pagos/solicitud/totalPagos.php');
    };
    PagoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PagoService);
    return PagoService;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-pagos-alumnos-alumnos-module~administracion-pagos-catalogo-pagos-catalogo-pag~6f9f1d11.js.map