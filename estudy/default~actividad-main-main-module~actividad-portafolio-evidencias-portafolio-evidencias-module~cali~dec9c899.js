(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~actividad-main-main-module~actividad-portafolio-evidencias-portafolio-evidencias-module~cali~dec9c899"],{

/***/ "./src/app/materia/actividad/services/actividad.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/materia/actividad/services/actividad.service.ts ***!
  \*****************************************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActividadService = /** @class */ (function () {
    function ActividadService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.actividadCompletada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.actividadCalificada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ActividadService.prototype.consulta = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/actividad/consulta.php' + params);
    };
    ActividadService.prototype.consultaRetro = function (jwt, id_actividad, id_materia) {
        var params = '?id_actividad=' + id_actividad;
        params += '&id_materia=' + id_materia;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/mensajeriaActividad.php' + params);
    };
    ActividadService.prototype.consultaFechaActividadActivo = function (id_actividad, id_materia, jwt) {
        var params = '?id_actividad=' + id_actividad;
        params += '&id_materia=' + id_materia;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/consultaActivo.php' + params);
    };
    ActividadService.prototype.consultaActividadPadre = function (id_actividad, id_materia, jwt) {
        var params = '?id_actividad=' + id_actividad;
        params += '&id_materia=' + id_materia;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/consultaPadre.php' + params);
    };
    ActividadService.prototype.consultaFechaActividadDummy = function (id_actividad, jwt) {
        var params = '?id_actividad=' + id_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/consultaDummy.php' + params);
    };
    ActividadService.prototype.consultaPreguntas = function (id, jwt, tipo) {
        if (tipo === void 0) { tipo = 0; }
        console.log(tipo);
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/learning/actividad/consultaPreguntas.php' + params);
    };
    ActividadService.prototype.consultaRespuestas = function (id_materia_fecha_actividad, jwt) {
        var params = '?id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/consultaRespuestas.php' + params);
    };
    ActividadService.prototype.consultaPreguntasRespuestas = function (id_actividad, id_mfa, intentos, jwt, tipo) {
        if (tipo === void 0) { tipo = 1; }
        var params = '?id_actividad=' + id_actividad;
        params += '&jwt=' + jwt;
        params += '&id_materia_fecha_actividad=' + id_mfa;
        params += '&intentos_restantes=' + intentos;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/learning/actividad/consultaPreguntas.php' + params);
    };
    ActividadService.prototype.consultaContenidos = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/contenidoActividad/consulta.php' + params);
    };
    ActividadService.prototype.registraFechaActividad = function (id, idMateria, idTipoActividad, jwt) {
        var params = '?id_actividad=' + id;
        params += '&id_materia=' + idMateria;
        params += '&id_tipo_actividad=' + idTipoActividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/registra.php' + params);
    };
    ActividadService.prototype.actualizaFechaActividad = function (id, estatus_actividad, jwt) {
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', id);
        formData.append('jwt', jwt);
        formData.append('calificacion', '10');
        formData.append('intento_num', '1');
        formData.append('id_estatus_actividad', estatus_actividad);
        return this._httpClient.post(this.url + 'learning/fechaActividad/edita.php', formData);
    };
    ActividadService.prototype.finalizaFechaActividad = function (id, tipo_calificacion, forzar_cierre) {
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', id);
        formData.append('tipo_calificacion', tipo_calificacion);
        formData.append('forzar_cierre', forzar_cierre);
        return this._httpClient.post(this.url + 'learning/fechaActividad/finalizarActividad.php', formData);
    };
    ActividadService.prototype.reintentaActividad = function (id, idMateria, intento_num, idTipoActividad, jwt) {
        var formData = new FormData();
        formData.append('id_actividad', id);
        formData.append('id_materia', idMateria);
        formData.append('intento_num', intento_num);
        formData.append('id_tipo_actividad', idTipoActividad);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/fechaActividad/reintenta.php', formData);
    };
    ActividadService.prototype.correccionActividad = function (id, idMateria) {
        var formData = new FormData();
        formData.append('id_actividad', id);
        formData.append('id_materia', idMateria);
        return this._httpClient.post(this.url + 'learning/fechaActividad/corregirActividadPrimeraVez.php', formData);
    };
    ActividadService.prototype.calificaRespuesta = function (idMateriaFechaActividad, idDatosPregunta, valorRespuesta, tipoCalificacion, numeroRespuestas, jwt) {
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('id_datos_pregunta', idDatosPregunta);
        formData.append('tipo_calificacion', tipoCalificacion);
        formData.append('valor_respuesta', valorRespuesta);
        formData.append('numero_respuestas', numeroRespuestas);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/fechaActividad/calificarRespuesta.php', formData);
    };
    ActividadService.prototype.siguienteActividad = function (idActividad) {
        var seriacionActividad = JSON.parse(localStorage.getItem('seriacionActividad'));
        var nextActividad = 0;
        seriacionActividad.forEach(function (actividad, index) {
            if (actividad == idActividad) {
                nextActividad = seriacionActividad[index + 1];
            }
        });
        return nextActividad;
    };
    ActividadService.prototype.consultaFaltantes = function (id_materia_fecha, jwt) {
        var params = '?id_materia_fecha_actividad=' + id_materia_fecha;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/preguntaFaltantes.php' + params);
    };
    ActividadService.prototype.guardarCalificacion = function (id_materia_fecha, jwt) {
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', id_materia_fecha);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/learning/fechaActividad/guardarCalificacionDocente.php', formData);
    };
    ActividadService.prototype.aprobarPortafolio = function (id_materia_fecha, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', id_materia_fecha);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/fechaActividad/validarPortafolio.php', formData);
    };
    ActividadService.prototype.guardarCalificacionPortafolio = function (id_materia_fecha, calificacion, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', id_materia_fecha);
        formData.append('calificacion', calificacion);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/fechaActividad/guardarCalificacionPortafolio.php', formData);
    };
    ActividadService.prototype.reevaluarCalificacion = function (id_materia_fecha, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', id_materia_fecha);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/fechaActividad/reevaluarCalificacion.php', formData);
    };
    ActividadService.prototype.consultaPendientes = function (jwt, id_actividad, id_materia) {
        var params = '?materia_id=' + id_materia;
        params += '&jwt=' + jwt;
        params += '&actividad_id=' + id_actividad;
        return this._httpClient.get(this.url + '/learning/fechaActividad/actividadesPendientes.php' + params);
    };
    ActividadService.prototype.guardaCalificacionDocente = function (id_materia) {
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', id_materia);
        return this._httpClient.post(this.url + 'learning/fechaActividad/guardarCalificacionDocente.php', formData);
    };
    ActividadService.prototype.creaSeguimientoActividad = function (id_materia_fecha_actividad) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', id_materia_fecha_actividad);
        return this._httpClient.post(this.url + 'learning/seguimientoActividad/crea.php', formData);
    };
    ActividadService.prototype.consultaSemaforo = function (id_materia_fecha_actividad) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_materia_fecha_actividad', id_materia_fecha_actividad);
        return this._httpClient.get(this.url + 'learning/seguimientoActividad/consultaSemaforo.php', { params: params });
    };
    ActividadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActividadService);
    return ActividadService;
}());



/***/ })

}]);
//# sourceMappingURL=default~actividad-main-main-module~actividad-portafolio-evidencias-portafolio-evidencias-module~cali~dec9c899.js.map