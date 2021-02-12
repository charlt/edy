(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-docente-dashboard-docente-module"],{

/***/ "./src/app/administracion/docente/dashboard-docente/dashboard-docente-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/administracion/docente/dashboard-docente/dashboard-docente-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DashboardDocenteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDocenteRoutingModule", function() { return DashboardDocenteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_docente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-docente.component */ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_docente_component__WEBPACK_IMPORTED_MODULE_2__["DashboardDocenteComponent"],
    }
];
var DashboardDocenteRoutingModule = /** @class */ (function () {
    function DashboardDocenteRoutingModule() {
    }
    DashboardDocenteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardDocenteRoutingModule);
    return DashboardDocenteRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-md-12\">\r\n    <graficas-persona [idPersona]=\"id_persona\"></graficas-persona>\r\n    <div class=\"row\">\r\n      <div class=\"ml-2\">\r\n        <a [routerLink]=\"['/admin/docente/materias/'+id_persona]\" class=\"btn btn-lg btn-info\">\r\n          <h1><i class=\"fa fa-book\"></i></h1><p>Materias</p>\r\n        </a>\r\n      </div>\r\n      <div class=\"ml-2\">\r\n        <a [routerLink]=\"['/admin/docente/accesos/'+id_persona]\" class=\"btn btn-lg btn-info\">\r\n          <h1><i class=\"fa fa-sign-in\"></i></h1><p>Accesos</p>\r\n        </a>\r\n      </div>\r\n      <div class=\"ml-2\">\r\n        <a [routerLink]=\"['/admin/docente/expediente/'+id_persona]\" class=\"btn btn-lg btn-info\">\r\n          <h1><i class=\"fa fa-file-text-o\"></i></h1><p>Expediente</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2RvY2VudGUvZGFzaGJvYXJkLWRvY2VudGUvZGFzaGJvYXJkLWRvY2VudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DashboardDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDocenteComponent", function() { return DashboardDocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardDocenteComponent = /** @class */ (function () {
    function DashboardDocenteComponent(route, _usuarioService) {
        this.route = route;
        this._usuarioService = _usuarioService;
        this.title = "";
        this._usuarioService.pushBreadcum('Docente', '/admin/docente', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    DashboardDocenteComponent.prototype.ngOnInit = function () {
        this.id_persona = this.route.snapshot.params['id'];
    };
    DashboardDocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-docente',
            template: __webpack_require__(/*! ./dashboard-docente.component.html */ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-docente.component.scss */ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], DashboardDocenteComponent);
    return DashboardDocenteComponent;
}());



/***/ }),

/***/ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/docente/dashboard-docente/dashboard-docente.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardDocenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDocenteModule", function() { return DashboardDocenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_docente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-docente-routing.module */ "./src/app/administracion/docente/dashboard-docente/dashboard-docente-routing.module.ts");
/* harmony import */ var _dashboard_docente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-docente.component */ "./src/app/administracion/docente/dashboard-docente/dashboard-docente.component.ts");
/* harmony import */ var src_app_components_graficas_persona_graficas_persona_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/graficas-persona/graficas-persona.module */ "./src/app/components/graficas-persona/graficas-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardDocenteModule = /** @class */ (function () {
    function DashboardDocenteModule() {
    }
    DashboardDocenteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_docente_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDocenteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_docente_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardDocenteRoutingModule"],
                src_app_components_graficas_persona_graficas_persona_module__WEBPACK_IMPORTED_MODULE_4__["GraficasPersonaModule"]
            ]
        })
    ], DashboardDocenteModule);
    return DashboardDocenteModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-docente-dashboard-docente-module.js.map