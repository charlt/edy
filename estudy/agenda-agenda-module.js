(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"],{

/***/ "./src/app/learning/agenda/agenda-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/learning/agenda/agenda-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AgendaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaRoutingModule", function() { return AgendaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agenda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agenda.component */ "./src/app/learning/agenda/agenda.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _agenda_component__WEBPACK_IMPORTED_MODULE_2__["AgendaComponent"]
    }
];
var AgendaRoutingModule = /** @class */ (function () {
    function AgendaRoutingModule() {
    }
    AgendaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AgendaRoutingModule);
    return AgendaRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/agenda/agenda.component.html":
/*!*******************************************************!*\
  !*** ./src/app/learning/agenda/agenda.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  agenda works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/learning/agenda/agenda.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/learning/agenda/agenda.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2FnZW5kYS9hZ2VuZGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/learning/agenda/agenda.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/learning/agenda/agenda.component.ts ***!
  \*****************************************************/
/*! exports provided: AgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaComponent", function() { return AgendaComponent; });
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

var AgendaComponent = /** @class */ (function () {
    function AgendaComponent() {
    }
    AgendaComponent.prototype.ngOnInit = function () {
    };
    AgendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agenda',
            template: __webpack_require__(/*! ./agenda.component.html */ "./src/app/learning/agenda/agenda.component.html"),
            styles: [__webpack_require__(/*! ./agenda.component.scss */ "./src/app/learning/agenda/agenda.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgendaComponent);
    return AgendaComponent;
}());



/***/ }),

/***/ "./src/app/learning/agenda/agenda.module.ts":
/*!**************************************************!*\
  !*** ./src/app/learning/agenda/agenda.module.ts ***!
  \**************************************************/
/*! exports provided: AgendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaModule", function() { return AgendaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agenda-routing.module */ "./src/app/learning/agenda/agenda-routing.module.ts");
/* harmony import */ var _agenda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda.component */ "./src/app/learning/agenda/agenda.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgendaModule = /** @class */ (function () {
    function AgendaModule() {
    }
    AgendaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_agenda_component__WEBPACK_IMPORTED_MODULE_3__["AgendaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agenda_routing_module__WEBPACK_IMPORTED_MODULE_2__["AgendaRoutingModule"]
            ]
        })
    ], AgendaModule);
    return AgendaModule;
}());



/***/ })

}]);
//# sourceMappingURL=agenda-agenda-module.js.map