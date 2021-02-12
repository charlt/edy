(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calificaciones-calificaciones-module"],{

/***/ "./src/app/administracion/grupo/calificaciones/calificaciones-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/grupo/calificaciones/calificaciones-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CalificacionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionesRoutingModule", function() { return CalificacionesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calificaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calificaciones.component */ "./src/app/administracion/grupo/calificaciones/calificaciones.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _calificaciones_component__WEBPACK_IMPORTED_MODULE_2__["CalificacionesComponent"] }
];
var CalificacionesRoutingModule = /** @class */ (function () {
    function CalificacionesRoutingModule() {
    }
    CalificacionesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalificacionesRoutingModule);
    return CalificacionesRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/calificaciones/calificaciones.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/grupo/calificaciones/calificaciones.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <app-grupo></app-grupo>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/grupo/calificaciones/calificaciones.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/grupo/calificaciones/calificaciones.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2dydXBvL2NhbGlmaWNhY2lvbmVzL2NhbGlmaWNhY2lvbmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/calificaciones/calificaciones.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/grupo/calificaciones/calificaciones.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CalificacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionesComponent", function() { return CalificacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalificacionesComponent = /** @class */ (function () {
    function CalificacionesComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = 'Alumnos en grupo';
        var id = localStorage.getItem('idGrupo');
        this._usuarioService.pushBreadcum('Asignaturas en grupo', "/admin/grupo/consultaAsignaturas/" + id, 2);
        this._usuarioService.pushBreadcum(this.title, "", 3);
    }
    CalificacionesComponent.prototype.ngOnInit = function () {
    };
    CalificacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calificaciones',
            template: __webpack_require__(/*! ./calificaciones.component.html */ "./src/app/administracion/grupo/calificaciones/calificaciones.component.html"),
            styles: [__webpack_require__(/*! ./calificaciones.component.scss */ "./src/app/administracion/grupo/calificaciones/calificaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], CalificacionesComponent);
    return CalificacionesComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/calificaciones/calificaciones.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/grupo/calificaciones/calificaciones.module.ts ***!
  \******************************************************************************/
/*! exports provided: CalificacionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionesModule", function() { return CalificacionesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calificaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calificaciones-routing.module */ "./src/app/administracion/grupo/calificaciones/calificaciones-routing.module.ts");
/* harmony import */ var _calificaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calificaciones.component */ "./src/app/administracion/grupo/calificaciones/calificaciones.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_docente_grupo_grupo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/docente/grupo/grupo.module */ "./src/app/docente/grupo/grupo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CalificacionesModule = /** @class */ (function () {
    function CalificacionesModule() {
    }
    CalificacionesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_calificaciones_component__WEBPACK_IMPORTED_MODULE_3__["CalificacionesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calificaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalificacionesRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"],
                src_app_docente_grupo_grupo_module__WEBPACK_IMPORTED_MODULE_6__["GrupoModule"]
            ],
            exports: [_calificaciones_component__WEBPACK_IMPORTED_MODULE_3__["CalificacionesComponent"]]
        })
    ], CalificacionesModule);
    return CalificacionesModule;
}());



/***/ })

}]);
//# sourceMappingURL=calificaciones-calificaciones-module.js.map