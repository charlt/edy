(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscripcion-documentos-documentos-module"],{

/***/ "./src/app/inscripcion/services/solicitud.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/inscripcion/services/solicitud.service.ts ***!
  \***********************************************************/
/*! exports provided: SolicitudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudService", function() { return SolicitudService; });
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




var SolicitudService = /** @class */ (function () {
    function SolicitudService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    SolicitudService.prototype.consultaFormularios = function (jwt, id_aspirante) {
        var params = '?jwt=' + jwt;
        params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/consultaFormulario.php' + params);
    };
    SolicitudService.prototype.consultaAvance = function (jwt, id_aspirante) {
        var params = '?jwt=' + jwt;
        params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/pasos.php' + params);
    };
    SolicitudService.prototype.consultaPersona = function (id_persona) {
        var params = '?id_persona=' + id_persona;
        return this._httpClient.get(this.url + 'admin/personas/consulta.php' + params);
    };
    SolicitudService.prototype.actualizaInfoPersonal = function (id_persona) {
        var params = '?id_persona=' + id_persona;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/actualizaInfoPersonal.php' + params);
    };
    SolicitudService.prototype.guardaAsesorPersona = function (asesor) {
        var formData = new FormData();
        formData.append('id_asesor', asesor ? asesor.persona_id : null);
        return this._httpClient.post(this.url + 'seguimiento/asesor/guardaAlumno.php', formData);
    };
    SolicitudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SolicitudService);
    return SolicitudService;
}());



/***/ })

}]);
//# sourceMappingURL=inscripcion-documentos-documentos-module.js.map