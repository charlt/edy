(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-solicitud-module"],{

/***/ "./src/app/administracion/aspirante/services/aspirante.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/aspirante/services/aspirante.service.ts ***!
  \************************************************************************/
/*! exports provided: AspiranteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteService", function() { return AspiranteService; });
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




var AspiranteService = /** @class */ (function () {
    function AspiranteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AspiranteService.prototype.consultaSolicitud = function (jwt) {
        // var params = '?jwt='+jwt;
        // params += '&id='+ id_persona;
        return this._httpClient.get(this.url + '/seguimiento/reportes/solicitud.php');
    };
    AspiranteService.prototype.totalAspirantes = function (tipo, carrera_id, fecha_inicio, fecha_fin) {
        var params = '?tipo=' + tipo;
        params += '&carrera_id=' + carrera_id;
        if (fecha_inicio)
            params += '&fecha_inicio=' + fecha_inicio;
        if (fecha_fin)
            params += '&fecha_fin=' + fecha_fin;
        return this._httpClient.get(this.url + '/seguimiento/administracion/totalAspirantes.php' + params);
    };
    AspiranteService.prototype.consultaEspecifica = function (id_persona) {
        var params = '?id=' + id_persona;
        return this._httpClient.get(this.url + '/seguimiento/aspirante/consultaAspirante.php' + params);
    };
    AspiranteService.prototype.elimina = function (jwt, id) {
        var params = '?aspirante_id=' + id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/elimina.php' + params);
    };
    AspiranteService.prototype.matriculaAspirante = function (id, jwt) {
        var params = '?id_aspirante=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/administracionAlumno/matriculaAspirante.php' + params);
    };
    AspiranteService.prototype.editaValidacion = function (id_persona, validador) {
        var params = '?persona_id=' + id_persona;
        params += '&validador=' + validador;
        return this._httpClient.get(this.url + '/seguimiento/administracion/cambiaValidacionAdmin.php' + params);
    };
    AspiranteService.prototype.consultaAspirantes = function (jwt, contenido, inicio, limite, tipo, carrera_id, fecha_inicio, fecha_fin) {
        var params = '?limit_final=' + limite;
        if (contenido != null) {
            params += '&busqueda=' + contenido;
        }
        if (carrera_id)
            params += '&carrera_id=' + carrera_id;
        if (fecha_inicio)
            params += '&fecha_inicio=' + fecha_inicio;
        if (fecha_fin)
            params += '&fecha_fin=' + fecha_fin;
        params += '&limit_inicio=' + inicio;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/seguimiento/administracion/consultaAspirantes.php' + params);
    };
    AspiranteService.prototype.consultaAlumno = function () {
        return this._httpClient.get(this.url + '/seguimiento/aspirante/consultaAlumno.php');
    };
    AspiranteService.prototype.editaEstatusAspirante = function (id_aspirante, situacion_aspirante_id) {
        var formData = new FormData();
        formData.append('aspirante_id', id_aspirante);
        formData.append('situacion_aspirante_id', situacion_aspirante_id);
        return this._httpClient.post(this.url + 'seguimiento/aspirante/editaEstatus.php', formData);
    };
    AspiranteService.prototype.editaCarrera = function (aspirante_id, carrera_id) {
        var params = '?id_aspirante=' + aspirante_id;
        params += '&id_carrera=' + carrera_id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/modificaCarrera.php' + params);
    };
    AspiranteService.prototype.registroAspirante = function (jwt, id_aspirante) {
        var formData = new FormData();
        formData.append('id_persona', id_aspirante);
        formData.append('clave_aspirante', id_aspirante);
        formData.append('carrera_id', '0');
        // formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/perfil/registroAspirante.php', formData);
    };
    AspiranteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AspiranteService);
    return AspiranteService;
}());



/***/ }),

/***/ "./src/app/learning/solicitud/solicitud-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/learning/solicitud/solicitud-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SolicitudRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudRoutingModule", function() { return SolicitudRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud.component */ "./src/app/learning/solicitud/solicitud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _solicitud_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudComponent"] }
];
var SolicitudRoutingModule = /** @class */ (function () {
    function SolicitudRoutingModule() {
    }
    SolicitudRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudRoutingModule);
    return SolicitudRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/solicitud/solicitud.component.html":
/*!*************************************************************!*\
  !*** ./src/app/learning/solicitud/solicitud.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<inscripcion-solicitud *ngIf=\"idAspirante\" [aspiranteId]=\"idAspirante\"></inscripcion-solicitud>"

/***/ }),

/***/ "./src/app/learning/solicitud/solicitud.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/learning/solicitud/solicitud.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL3NvbGljaXR1ZC9zb2xpY2l0dWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/learning/solicitud/solicitud.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/learning/solicitud/solicitud.component.ts ***!
  \***********************************************************/
/*! exports provided: SolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudComponent", function() { return SolicitudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_aspirante_services_aspirante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/aspirante/services/aspirante.service */ "./src/app/administracion/aspirante/services/aspirante.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitudComponent = /** @class */ (function () {
    function SolicitudComponent(_usuarioService, _aspiranteService) {
        this._usuarioService = _usuarioService;
        this._aspiranteService = _aspiranteService;
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.idPersona = this._usuarioService.getIdentity().persona_id;
        this.consultaAspirante();
    };
    SolicitudComponent.prototype.consultaAspirante = function () {
        var _this = this;
        this._aspiranteService.registroAspirante(this.jwt, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.idAspirante = response['idAspirante'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud',
            template: __webpack_require__(/*! ./solicitud.component.html */ "./src/app/learning/solicitud/solicitud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud.component.scss */ "./src/app/learning/solicitud/solicitud.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_aspirante_services_aspirante_service__WEBPACK_IMPORTED_MODULE_2__["AspiranteService"]])
    ], SolicitudComponent);
    return SolicitudComponent;
}());



/***/ }),

/***/ "./src/app/learning/solicitud/solicitud.module.ts":
/*!********************************************************!*\
  !*** ./src/app/learning/solicitud/solicitud.module.ts ***!
  \********************************************************/
/*! exports provided: SolicitudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudModule", function() { return SolicitudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-routing.module */ "./src/app/learning/solicitud/solicitud-routing.module.ts");
/* harmony import */ var src_app_inscripcion_solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/inscripcion/solicitud/solicitud.module */ "./src/app/inscripcion/solicitud/solicitud.module.ts");
/* harmony import */ var _solicitud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitud.component */ "./src/app/learning/solicitud/solicitud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolicitudModule = /** @class */ (function () {
    function SolicitudModule() {
    }
    SolicitudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_solicitud_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_2__["SolicitudRoutingModule"],
                src_app_inscripcion_solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_3__["SolicitudModule"]
            ],
            exports: [_solicitud_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudComponent"]]
        })
    ], SolicitudModule);
    return SolicitudModule;
}());



/***/ })

}]);
//# sourceMappingURL=solicitud-solicitud-module.js.map