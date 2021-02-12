(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expediente-docente-expediente-docente-module"],{

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

/***/ "./src/app/administracion/docente/expediente-docente/expediente-docente-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/administracion/docente/expediente-docente/expediente-docente-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ExpedienteDocenteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteDocenteRoutingModule", function() { return ExpedienteDocenteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expediente_docente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente-docente.component */ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _expediente_docente_component__WEBPACK_IMPORTED_MODULE_2__["ExpedienteDocenteComponent"] }
];
var ExpedienteDocenteRoutingModule = /** @class */ (function () {
    function ExpedienteDocenteRoutingModule() {
    }
    ExpedienteDocenteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExpedienteDocenteRoutingModule);
    return ExpedienteDocenteRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/docente/expediente-docente/expediente-docente.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-expediente-aspirante *ngIf=\"idDocente\" [idAspirante]=\"idDocente\" [idRol]=\"idRol\"></app-expediente-aspirante>\r\n<!-- <app-documentos [aspiranteId]=\"idDocente\" []></app-documentos> -->"

/***/ }),

/***/ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/docente/expediente-docente/expediente-docente.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2RvY2VudGUvZXhwZWRpZW50ZS1kb2NlbnRlL2V4cGVkaWVudGUtZG9jZW50ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/docente/expediente-docente/expediente-docente.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExpedienteDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteDocenteComponent", function() { return ExpedienteDocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_docente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/docente.service */ "./src/app/administracion/docente/expediente-docente/services/docente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpedienteDocenteComponent = /** @class */ (function () {
    function ExpedienteDocenteComponent(_usuarioService, route, _docenteService) {
        this._usuarioService = _usuarioService;
        this.route = route;
        this._docenteService = _docenteService;
        this.idRol = this._usuarioService.getRol().rol_id;
        if (this.idRol != 1) {
            this.idDocente = this._usuarioService.getIdentity().persona_id;
        }
        else {
            this.idDocente = parseInt(this.route.snapshot.paramMap.get('id'));
        }
        this.idRol = 3;
    }
    ExpedienteDocenteComponent.prototype.ngOnInit = function () {
    };
    ExpedienteDocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expediente-docente',
            template: __webpack_require__(/*! ./expediente-docente.component.html */ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.html"),
            styles: [__webpack_require__(/*! ./expediente-docente.component.scss */ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_docente_service__WEBPACK_IMPORTED_MODULE_3__["DocenteService"]])
    ], ExpedienteDocenteComponent);
    return ExpedienteDocenteComponent;
}());



/***/ }),

/***/ "./src/app/administracion/docente/expediente-docente/expediente-docente.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/docente/expediente-docente/expediente-docente.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ExpedienteDocenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedienteDocenteModule", function() { return ExpedienteDocenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _expediente_docente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente-docente-routing.module */ "./src/app/administracion/docente/expediente-docente/expediente-docente-routing.module.ts");
/* harmony import */ var src_app_administracion_aspirante_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/aspirante/expediente/expediente.module */ "./src/app/administracion/aspirante/expediente/expediente.module.ts");
/* harmony import */ var _expediente_docente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expediente-docente.component */ "./src/app/administracion/docente/expediente-docente/expediente-docente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExpedienteDocenteModule = /** @class */ (function () {
    function ExpedienteDocenteModule() {
    }
    ExpedienteDocenteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_expediente_docente_component__WEBPACK_IMPORTED_MODULE_4__["ExpedienteDocenteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _expediente_docente_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExpedienteDocenteRoutingModule"],
                src_app_administracion_aspirante_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_3__["ExpedienteModule"]
            ],
            exports: [_expediente_docente_component__WEBPACK_IMPORTED_MODULE_4__["ExpedienteDocenteComponent"]]
        })
    ], ExpedienteDocenteModule);
    return ExpedienteDocenteModule;
}());



/***/ }),

/***/ "./src/app/administracion/docente/expediente-docente/services/docente.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/docente/expediente-docente/services/docente.service.ts ***!
  \***************************************************************************************/
/*! exports provided: DocenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteService", function() { return DocenteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocenteService = /** @class */ (function () {
    function DocenteService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    DocenteService.prototype.registroDocente = function (id_aspirante) {
        var formData = new FormData();
        formData.append('id_persona', id_aspirante);
        formData.append('clave_aspirante', id_aspirante);
        formData.append('carrera_id', '0');
        return this._httpClient.post(this.url + 'learning/perfil/registroAspirante.php', formData);
    };
    DocenteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DocenteService);
    return DocenteService;
}());



/***/ }),

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
//# sourceMappingURL=expediente-docente-expediente-docente-module.js.map