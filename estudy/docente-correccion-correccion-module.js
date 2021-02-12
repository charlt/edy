(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-correccion-correccion-module"],{

/***/ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts ***!
  \*********************************************************************************/
/*! exports provided: RetroalimentacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroalimentacionService", function() { return RetroalimentacionService; });
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




var RetroalimentacionService = /** @class */ (function () {
    function RetroalimentacionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    RetroalimentacionService.prototype.consultaRetrosAlumno = function (tipo, id_materia, id_asignatura_grupo) {
        var params = '?nuevos=' + tipo;
        params += '&materia_id=' + id_materia;
        return this._httpClient.get(this.url + '/controlEscolar/retroalimentacion/retroalimentacionesAlumno.php' + params);
    };
    RetroalimentacionService.prototype.consultaRetrosDocente = function (jwt, tipo, id_asignatura_grupo) {
        var params = '?jwt=' + jwt;
        params += '&nuevos=' + tipo;
        params += '&id_asignatura_grupo=' + id_asignatura_grupo;
        return this._httpClient.get(this.url + '/controlEscolar/retroalimentacion/retroalimentacionesDocente.php' + params);
    };
    RetroalimentacionService.prototype.cambiaVisto = function (rol, id_materia, id_actividad, visto, cambios) {
        var params = '?rol_id=' + rol;
        params += '&id_materia=' + id_materia;
        params += '&visto=' + visto; //1 visto 0 no visto
        params += '&id_actividad=' + id_actividad;
        params += '&numero_cambios=' + cambios;
        return this._httpClient.get(this.url + '/learning/retroalimentacion/marcaVistoRetro.php' + params);
    };
    RetroalimentacionService.prototype.notificaciones = function (id_materia, id_actividad, jwt) {
        var params = '?id_materia=' + id_materia;
        params += '&id_actividad=' + id_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/notificaciones/retroalimentacionActividad.php' + params);
    };
    RetroalimentacionService.prototype.consulta = function (id_materia, id_actividad) {
        var params = '?id_materia=' + id_materia;
        params += '&id_actividad=' + id_actividad;
        return this._httpClient.get(this.url + '/learning/retroalimentacion/consulta.php' + params);
    };
    RetroalimentacionService.prototype.enviar = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt, retroalimentacion_id, contForm, id_materia, id_actividad) {
        if (retroalimentacion_id === void 0) { retroalimentacion_id = null; }
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('origen', origen);
        // formData.append('jwt', jwt);
        formData.append('id_materia', id_materia);
        formData.append('id_actividad', id_actividad);
        if (texto)
            formData.append('texto', texto);
        else
            formData.append('texto', '');
        if (contForm.get('contenido').value)
            formData.append('archivo', contForm.get('contenido').value);
        if (!retroalimentacion_id) {
            return this._httpClient.post(this.url + 'learning/retroalimentacion/crea.php', formData);
        }
    };
    RetroalimentacionService.prototype.correccionActividad = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        return this._httpClient.post(this.url + 'learning/fechaActividad/corregirActividad.php', formData);
    };
    RetroalimentacionService.prototype.invalidacionActividad = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        return this._httpClient.post(this.url + 'learning/fechaActividad/invalidaActividad.php', formData);
    };
    RetroalimentacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RetroalimentacionService);
    return RetroalimentacionService;
}());



/***/ })

}]);
//# sourceMappingURL=docente-correccion-correccion-module.js.map