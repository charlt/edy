(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicios-academicos-servicios-academicos-module"],{

/***/ "./src/app/learning/servicios-academicos/servicios-academicos-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/learning/servicios-academicos/servicios-academicos-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ServiciosAcademicosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosAcademicosRoutingModule", function() { return ServiciosAcademicosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_academicos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios-academicos.component */ "./src/app/learning/servicios-academicos/servicios-academicos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _servicios_academicos_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosAcademicosComponent"]
    }
];
var ServiciosAcademicosRoutingModule = /** @class */ (function () {
    function ServiciosAcademicosRoutingModule() {
    }
    ServiciosAcademicosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServiciosAcademicosRoutingModule);
    return ServiciosAcademicosRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/servicios-academicos/servicios-academicos.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/learning/servicios-academicos/servicios-academicos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  servicios-academicos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/learning/servicios-academicos/servicios-academicos.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/learning/servicios-academicos/servicios-academicos.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL3NlcnZpY2lvcy1hY2FkZW1pY29zL3NlcnZpY2lvcy1hY2FkZW1pY29zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/learning/servicios-academicos/servicios-academicos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/learning/servicios-academicos/servicios-academicos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiciosAcademicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosAcademicosComponent", function() { return ServiciosAcademicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiciosAcademicosComponent = /** @class */ (function () {
    function ServiciosAcademicosComponent() {
    }
    ServiciosAcademicosComponent.prototype.ngOnInit = function () {
    };
    ServiciosAcademicosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicios-academicos',
            template: __webpack_require__(/*! ./servicios-academicos.component.html */ "./src/app/learning/servicios-academicos/servicios-academicos.component.html"),
            styles: [__webpack_require__(/*! ./servicios-academicos.component.scss */ "./src/app/learning/servicios-academicos/servicios-academicos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiciosAcademicosComponent);
    return ServiciosAcademicosComponent;
}());



/***/ }),

/***/ "./src/app/learning/servicios-academicos/servicios-academicos.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/learning/servicios-academicos/servicios-academicos.module.ts ***!
  \******************************************************************************/
/*! exports provided: ServiciosAcademicosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosAcademicosModule", function() { return ServiciosAcademicosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servicios_academicos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios-academicos-routing.module */ "./src/app/learning/servicios-academicos/servicios-academicos-routing.module.ts");
/* harmony import */ var _servicios_academicos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios-academicos.component */ "./src/app/learning/servicios-academicos/servicios-academicos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiciosAcademicosModule = /** @class */ (function () {
    function ServiciosAcademicosModule() {
    }
    ServiciosAcademicosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_servicios_academicos_component__WEBPACK_IMPORTED_MODULE_3__["ServiciosAcademicosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _servicios_academicos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiciosAcademicosRoutingModule"]
            ]
        })
    ], ServiciosAcademicosModule);
    return ServiciosAcademicosModule;
}());



/***/ })

}]);
//# sourceMappingURL=servicios-academicos-servicios-academicos-module.js.map