(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulo-modulo-module"],{

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/modulo-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModuloRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloRoutingModule", function() { return ModuloRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _modulo_component__WEBPACK_IMPORTED_MODULE_2__["ModuloComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', loadChildren: './consulta/consulta.module#ConsultaModule' },
            { path: 'actividades/:id', loadChildren: './actividad/actividad.module#ActividadModule' }
        ]
    }
];
var ModuloRoutingModule = /** @class */ (function () {
    function ModuloRoutingModule() {
    }
    ModuloRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModuloRoutingModule);
    return ModuloRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <button  class=\"btn btn-link\"  (click)=\"menu()\">\r\n        <span ><i class=\"fa fa-plus-square\"></i> Mostrar Bloques</span>  \r\n      </button>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL21vZHVsby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ModuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloComponent", function() { return ModuloComponent; });
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



var ModuloComponent = /** @class */ (function () {
    function ModuloComponent(_usuarioService, router, route) {
        this._usuarioService = _usuarioService;
        this.router = router;
        this.route = route;
    }
    ModuloComponent.prototype.ngOnInit = function () {
        this.idAsignatura = this.route.snapshot.parent.parent.params['id'];
        this.identity = this._usuarioService.getIdentity();
    };
    ModuloComponent.prototype.menu = function () {
        if (this.identity.rol_id == "1") {
            this.router.navigate(['/admin/carga/asignatura/' + this.idAsignatura + '/modulos/']);
        }
        else {
            // idAsignatura es idAsignaturaGrupo
            if (this.route.snapshot.params['id']) {
                this.idAsignatura = this.route.snapshot.params['id'];
                this.router.navigate(['/docente/modulosAsignaturaGrupo/' + this.idAsignatura + '/']);
            }
            else {
                this.router.navigate(['/docente/contenido-asignatura/' + this.idAsignatura + '/']);
            }
        }
    };
    ModuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modulo',
            template: __webpack_require__(/*! ./modulo.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.html"),
            styles: [__webpack_require__(/*! ./modulo.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModuloComponent);
    return ModuloComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/modulo.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ModuloModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloModule", function() { return ModuloModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modulo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo-routing.module.ts");
/* harmony import */ var _modulo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulo.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/modulo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModuloModule = /** @class */ (function () {
    function ModuloModule() {
    }
    ModuloModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_modulo_component__WEBPACK_IMPORTED_MODULE_3__["ModuloComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modulo_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModuloRoutingModule"]
            ]
        })
    ], ModuloModule);
    return ModuloModule;
}());



/***/ })

}]);
//# sourceMappingURL=modulo-modulo-module.js.map