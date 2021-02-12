(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~docente-docente-module~expediente-expediente-module"],{

/***/ "./src/app/administracion/aspirante/expediente/expediente-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/aspirante/expediente/expediente-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ExpedienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteRoutingModule", function() { return ExpedienteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expediente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente.component */ "./src/app/administracion/aspirante/expediente/expediente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _expediente_component__WEBPACK_IMPORTED_MODULE_2__["ExpedienteComponent"] },
];
var ExpedienteRoutingModule = /** @class */ (function () {
    function ExpedienteRoutingModule() {
    }
    ExpedienteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExpedienteRoutingModule);
    return ExpedienteRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/aspirante/expediente/expediente.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/aspirante/expediente/expediente.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n        <app-encabezado-persona [idPersona]=\"idAspirante\" [idRol]=\"idRol\"></app-encabezado-persona>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <app-documentos [aspiranteId]=\"idAspirante\" [idRolUsuario]=\"idRol\"></app-documentos>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/aspirante/expediente/expediente.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/aspirante/expediente/expediente.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzcGlyYW50ZS9leHBlZGllbnRlL2V4cGVkaWVudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/aspirante/expediente/expediente.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/aspirante/expediente/expediente.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExpedienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteComponent", function() { return ExpedienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpedienteComponent = /** @class */ (function () {
    function ExpedienteComponent(_usuarioService, router, route) {
        this._usuarioService = _usuarioService;
        this.router = router;
        this.route = route;
        if (this.route.snapshot.paramMap.get('id')) {
            this.idAspirante = parseInt(this.route.snapshot.paramMap.get('id'));
        }
        this.title = "Adjuntar documentos";
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ExpedienteComponent.prototype.ngOnInit = function () {
        if (!this.idRol)
            this.idRol = 4;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExpedienteComponent.prototype, "idAspirante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExpedienteComponent.prototype, "idRol", void 0);
    ExpedienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expediente-aspirante',
            template: __webpack_require__(/*! ./expediente.component.html */ "./src/app/administracion/aspirante/expediente/expediente.component.html"),
            styles: [__webpack_require__(/*! ./expediente.component.scss */ "./src/app/administracion/aspirante/expediente/expediente.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ExpedienteComponent);
    return ExpedienteComponent;
}());



/***/ }),

/***/ "./src/app/administracion/aspirante/expediente/expediente.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/aspirante/expediente/expediente.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExpedienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteModule", function() { return ExpedienteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _expediente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente-routing.module */ "./src/app/administracion/aspirante/expediente/expediente-routing.module.ts");
/* harmony import */ var _expediente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expediente.component */ "./src/app/administracion/aspirante/expediente/expediente.component.ts");
/* harmony import */ var src_app_inscripcion_documentos_documentos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/inscripcion/documentos/documentos.module */ "./src/app/inscripcion/documentos/documentos.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ExpedienteModule = /** @class */ (function () {
    function ExpedienteModule() {
    }
    ExpedienteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_expediente_component__WEBPACK_IMPORTED_MODULE_3__["ExpedienteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _expediente_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExpedienteRoutingModule"],
                src_app_inscripcion_documentos_documentos_module__WEBPACK_IMPORTED_MODULE_4__["DocumentosModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_5__["EncabezadoPersonaModule"]
            ],
            exports: [_expediente_component__WEBPACK_IMPORTED_MODULE_3__["ExpedienteComponent"]]
        })
    ], ExpedienteModule);
    return ExpedienteModule;
}());



/***/ }),

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

/***/ "./src/app/learning/expediente/expediente-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/learning/expediente/expediente-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ExpedienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteRoutingModule", function() { return ExpedienteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expediente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente.component */ "./src/app/learning/expediente/expediente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _expediente_component__WEBPACK_IMPORTED_MODULE_2__["ExpedienteComponent"]
    }
];
var ExpedienteRoutingModule = /** @class */ (function () {
    function ExpedienteRoutingModule() {
    }
    ExpedienteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExpedienteRoutingModule);
    return ExpedienteRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/expediente/expediente.component.html":
/*!***************************************************************!*\
  !*** ./src/app/learning/expediente/expediente.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-expediente-aspirante *ngIf=\"idAspirante\" [idAspirante]=\"idAspirante\" [idRol]=\"idRol\"></app-expediente-aspirante>"

/***/ }),

/***/ "./src/app/learning/expediente/expediente.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/learning/expediente/expediente.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2V4cGVkaWVudGUvZXhwZWRpZW50ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/learning/expediente/expediente.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/learning/expediente/expediente.component.ts ***!
  \*************************************************************/
/*! exports provided: ExpedienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteComponent", function() { return ExpedienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_aspirante_services_aspirante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/aspirante/services/aspirante.service */ "./src/app/administracion/aspirante/services/aspirante.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpedienteComponent = /** @class */ (function () {
    function ExpedienteComponent(_usuarioService, _aspiranteService, route) {
        this._usuarioService = _usuarioService;
        this._aspiranteService = _aspiranteService;
        this.route = route;
        this.jwt = this._usuarioService.getJWT();
        this.idRol = this._usuarioService.getRol().rol_id;
        if (this.idRol != 1 && this.idRol != 5) {
            this.idPersona = this._usuarioService.getIdentity().persona_id;
        }
        else {
            this.idPersona = parseInt(this.route.snapshot.paramMap.get('id'));
        }
        this.idRol = 2;
    }
    ExpedienteComponent.prototype.ngOnInit = function () {
        this.consultaAspirante();
    };
    ExpedienteComponent.prototype.consultaAspirante = function () {
        var _this = this;
        this._aspiranteService.registroAspirante(this.jwt, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.idAspirante = response['idAspirante'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ExpedienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expediente',
            template: __webpack_require__(/*! ./expediente.component.html */ "./src/app/learning/expediente/expediente.component.html"),
            styles: [__webpack_require__(/*! ./expediente.component.scss */ "./src/app/learning/expediente/expediente.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_aspirante_services_aspirante_service__WEBPACK_IMPORTED_MODULE_2__["AspiranteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ExpedienteComponent);
    return ExpedienteComponent;
}());



/***/ }),

/***/ "./src/app/learning/expediente/expediente.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/learning/expediente/expediente.module.ts ***!
  \**********************************************************/
/*! exports provided: ExpedienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteModule", function() { return ExpedienteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _expediente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente-routing.module */ "./src/app/learning/expediente/expediente-routing.module.ts");
/* harmony import */ var _expediente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expediente.component */ "./src/app/learning/expediente/expediente.component.ts");
/* harmony import */ var src_app_administracion_aspirante_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/aspirante/expediente/expediente.module */ "./src/app/administracion/aspirante/expediente/expediente.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExpedienteModule = /** @class */ (function () {
    function ExpedienteModule() {
    }
    ExpedienteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_expediente_component__WEBPACK_IMPORTED_MODULE_3__["ExpedienteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _expediente_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExpedienteRoutingModule"],
                src_app_administracion_aspirante_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_4__["ExpedienteModule"]
            ],
            exports: [_expediente_component__WEBPACK_IMPORTED_MODULE_3__["ExpedienteComponent"]]
        })
    ], ExpedienteModule);
    return ExpedienteModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~docente-docente-module~expediente-expediente-module.js.map