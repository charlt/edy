(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"],{

/***/ "./src/app/learning/historial/historial-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/learning/historial/historial-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: HistorialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialRoutingModule", function() { return HistorialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial.component */ "./src/app/learning/historial/historial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _historial_component__WEBPACK_IMPORTED_MODULE_2__["HistorialComponent"]
    }
];
var HistorialRoutingModule = /** @class */ (function () {
    function HistorialRoutingModule() {
    }
    HistorialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HistorialRoutingModule);
    return HistorialRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/historial/historial.component.html":
/*!*************************************************************!*\
  !*** ./src/app/learning/historial/historial.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-historial-alumno></app-historial-alumno>"

/***/ }),

/***/ "./src/app/learning/historial/historial.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/learning/historial/historial.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2hpc3RvcmlhbC9oaXN0b3JpYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/learning/historial/historial.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/learning/historial/historial.component.ts ***!
  \***********************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
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


var HistorialComponent = /** @class */ (function () {
    function HistorialComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    HistorialComponent.prototype.ngOnInit = function () {
    };
    HistorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial',
            template: __webpack_require__(/*! ./historial.component.html */ "./src/app/learning/historial/historial.component.html"),
            styles: [__webpack_require__(/*! ./historial.component.scss */ "./src/app/learning/historial/historial.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], HistorialComponent);
    return HistorialComponent;
}());



/***/ }),

/***/ "./src/app/learning/historial/historial.module.ts":
/*!********************************************************!*\
  !*** ./src/app/learning/historial/historial.module.ts ***!
  \********************************************************/
/*! exports provided: HistorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialModule", function() { return HistorialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-routing.module */ "./src/app/learning/historial/historial-routing.module.ts");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.component */ "./src/app/learning/historial/historial.component.ts");
/* harmony import */ var src_app_administracion_alumno_historial_historial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/alumno/historial/historial.module */ "./src/app/administracion/alumno/historial/historial.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HistorialModule = /** @class */ (function () {
    function HistorialModule() {
    }
    HistorialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistorialRoutingModule"],
                src_app_administracion_alumno_historial_historial_module__WEBPACK_IMPORTED_MODULE_4__["HistorialModule"]
            ]
        })
    ], HistorialModule);
    return HistorialModule;
}());



/***/ })

}]);
//# sourceMappingURL=historial-historial-module.js.map