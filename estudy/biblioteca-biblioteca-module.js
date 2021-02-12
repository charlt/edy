(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["biblioteca-biblioteca-module"],{

/***/ "./src/app/learning/biblioteca/biblioteca-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/learning/biblioteca/biblioteca-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BibliotecaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliotecaRoutingModule", function() { return BibliotecaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _biblioteca_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biblioteca.component */ "./src/app/learning/biblioteca/biblioteca.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _biblioteca_component__WEBPACK_IMPORTED_MODULE_2__["BibliotecaComponent"]
    }
];
var BibliotecaRoutingModule = /** @class */ (function () {
    function BibliotecaRoutingModule() {
    }
    BibliotecaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BibliotecaRoutingModule);
    return BibliotecaRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/biblioteca/biblioteca.component.html":
/*!***************************************************************!*\
  !*** ./src/app/learning/biblioteca/biblioteca.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 style=\"color: #004d80;\"> Servicios Digitales de Investigación</h4>\r\n<p style=\"text-align: justify;\">\r\n  Para  {{nombreInstitucion}} es una prioridad poner al alcance de sus alumnos, egresados, docentes \r\n  e investigadores, las principales fuentes de información en habla hispana. Es por ello que Servicios \r\n  Digitales de Investigación, reúne las principales bases de datos arbitradas de la región, que brindan \r\n  a los usuarios acceso gratuito a materiales académicos, artículos de investigación y recursos periodísticos.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/learning/biblioteca/biblioteca.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/learning/biblioteca/biblioteca.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2JpYmxpb3RlY2EvYmlibGlvdGVjYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/learning/biblioteca/biblioteca.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/learning/biblioteca/biblioteca.component.ts ***!
  \*************************************************************/
/*! exports provided: BibliotecaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliotecaComponent", function() { return BibliotecaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_universidad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/universidad */ "./src/app/services/universidad.ts");
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



var BibliotecaComponent = /** @class */ (function () {
    function BibliotecaComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = "Biblioteca";
        this._usuarioService.pushBreadcum(this.title, "", 1);
    }
    BibliotecaComponent.prototype.ngOnInit = function () {
        this.nombreInstitucion = _services_universidad__WEBPACK_IMPORTED_MODULE_1__["universidad"].nombre;
    };
    BibliotecaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biblioteca',
            template: __webpack_require__(/*! ./biblioteca.component.html */ "./src/app/learning/biblioteca/biblioteca.component.html"),
            styles: [__webpack_require__(/*! ./biblioteca.component.scss */ "./src/app/learning/biblioteca/biblioteca.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], BibliotecaComponent);
    return BibliotecaComponent;
}());



/***/ }),

/***/ "./src/app/learning/biblioteca/biblioteca.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/learning/biblioteca/biblioteca.module.ts ***!
  \**********************************************************/
/*! exports provided: BibliotecaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliotecaModule", function() { return BibliotecaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _biblioteca_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biblioteca-routing.module */ "./src/app/learning/biblioteca/biblioteca-routing.module.ts");
/* harmony import */ var _biblioteca_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biblioteca.component */ "./src/app/learning/biblioteca/biblioteca.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BibliotecaModule = /** @class */ (function () {
    function BibliotecaModule() {
    }
    BibliotecaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_biblioteca_component__WEBPACK_IMPORTED_MODULE_3__["BibliotecaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _biblioteca_routing_module__WEBPACK_IMPORTED_MODULE_2__["BibliotecaRoutingModule"]
            ]
        })
    ], BibliotecaModule);
    return BibliotecaModule;
}());



/***/ }),

/***/ "./src/app/services/universidad.ts":
/*!*****************************************!*\
  !*** ./src/app/services/universidad.ts ***!
  \*****************************************/
/*! exports provided: universidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "universidad", function() { return universidad; });
var universidad = {
    color: "#292f33",
    logo: "assets/images/logo.png",
    logoDark: "assets/images/logoWhite.png",
    nombre: "Casa Lamm"
};


/***/ })

}]);
//# sourceMappingURL=biblioteca-biblioteca-module.js.map