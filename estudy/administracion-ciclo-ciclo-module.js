(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-ciclo-ciclo-module"],{

/***/ "./src/app/administracion/ciclo/ciclo-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/administracion/ciclo/ciclo-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CicloRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloRoutingModule", function() { return CicloRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ciclo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ciclo.component */ "./src/app/administracion/ciclo/ciclo.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/ciclo/nuevo/nuevo.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/ciclo/consulta/consulta.component.ts");
/* harmony import */ var _transferir_ciclo_transferir_ciclo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transferir-ciclo/transferir-ciclo.component */ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _ciclo_component__WEBPACK_IMPORTED_MODULE_2__["CicloComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'nuevo', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"] },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"] },
            { path: 'editar/:id', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"] },
            { path: 'transferir/:id', component: _transferir_ciclo_transferir_ciclo_component__WEBPACK_IMPORTED_MODULE_5__["TransferirCicloComponent"] }
        ]
    }
];
var CicloRoutingModule = /** @class */ (function () {
    function CicloRoutingModule() {
    }
    CicloRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CicloRoutingModule);
    return CicloRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/ciclo/ciclo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/administracion/ciclo/ciclo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/ciclo/ciclo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/administracion/ciclo/ciclo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2ljbG8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUdEO0VBQ0ksV0FBVTtFQUNWLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZ0JBQWU7RUFHZixvREFBZ0QsRUFDbkQ7O0FBRUQ7RUFDSSwwQkExQmtCO0VBMkJsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQS9Ca0IsRUFnQ3JCOztBQUVEO0VBQ0ksZUFuQ2tCLEVBb0NyQjs7QUFDRDtFQUNJLDBCQXRDa0I7RUF1Q2xCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2ljbG8vY2ljbG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/ciclo/ciclo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/administracion/ciclo/ciclo.component.ts ***!
  \*********************************************************/
/*! exports provided: CicloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloComponent", function() { return CicloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CicloComponent = /** @class */ (function () {
    function CicloComponent(_translate, _usuarioService, _router) {
        this._translate = _translate;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate.setDefaultLang('es');
        this.title = "Ciclos";
        this._usuarioService.pushBreadcum(this.title, '/admin/ciclo', 1);
    }
    CicloComponent.prototype.ngOnInit = function () {
    };
    CicloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ciclo',
            template: __webpack_require__(/*! ./ciclo.component.html */ "./src/app/administracion/ciclo/ciclo.component.html"),
            styles: [__webpack_require__(/*! ./ciclo.component.scss */ "./src/app/administracion/ciclo/ciclo.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CicloComponent);
    return CicloComponent;
}());



/***/ }),

/***/ "./src/app/administracion/ciclo/ciclo.module.ts":
/*!******************************************************!*\
  !*** ./src/app/administracion/ciclo/ciclo.module.ts ***!
  \******************************************************/
/*! exports provided: CicloModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloModule", function() { return CicloModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ciclo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ciclo.component */ "./src/app/administracion/ciclo/ciclo.component.ts");
/* harmony import */ var _ciclo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-routing.module */ "./src/app/administracion/ciclo/ciclo-routing.module.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/ciclo/nuevo/nuevo.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/ciclo/consulta/consulta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _transferir_ciclo_transferir_ciclo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transferir-ciclo/transferir-ciclo.component */ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CicloModule = /** @class */ (function () {
    function CicloModule() {
    }
    CicloModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ciclo_component__WEBPACK_IMPORTED_MODULE_2__["CicloComponent"], _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__["NuevoComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"], _transferir_ciclo_transferir_ciclo_component__WEBPACK_IMPORTED_MODULE_9__["TransferirCicloComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                _ciclo_routing_module__WEBPACK_IMPORTED_MODULE_3__["CicloRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"]
            ]
        })
    ], CicloModule);
    return CicloModule;
}());



/***/ }),

/***/ "./src/app/administracion/ciclo/consulta/consulta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/ciclo/consulta/consulta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div>\r\n      <a [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> Agregar ciclo</a>\r\n    </div>\r\n    <hr>\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\"\r\n        aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <tr>\r\n        <th>{{'_nombreCiclo' | translate}}</th>\r\n        <!--<th>{{'Level' | translate}}</th>-->\r\n        <th>{{'tbFechaInicio' | translate}} </th>\r\n        <th>{{'tbFechaFin' | translate}}</th>\r\n        <th>{{'Estatus' | translate}}</th>\r\n        <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n        <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>\r\n      </tr>\r\n      <tr *ngIf=\"(ciclos | filter: search).length === 0\">\r\n        <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n      </tr>\r\n      <tr *ngFor=\"let ciclo of ciclos | filter:search; let i = index \">\r\n        <td>{{ciclo.ciclo_desc}}</td>\r\n        <!--<td></td>-->\r\n        <td>{{ciclo.fecha_inicio | date: \"dd/MM/yyyy\"}}</td>\r\n        <td>{{ciclo.fecha_fin | date: \"dd/MM/yyyy\"}}</td>\r\n        <td [ngClass]=\"{'alert-success':ciclo.ciclo_estatus_id == 1, 'alert-danger': ciclo.ciclo_estatus_id == 2, 'alert-primary': ciclo.ciclo_estatus_id == 3}\"\r\n          class=\"alert text-center\" role=\"alert\">\r\n          <p>{{ciclo.ciclo_estatus_desc}}</p>\r\n          <!--button *ngIf=\"ciclo.ciclo_estatus_id == 1\" class=\"btn btn-danger\" (click)=\"cerrarCiclo(ciclo.ciclo_id)\">Cerrar ciclo</button>\r\n          <button *ngIf=\"ciclo.ciclo_estatus_id == 2\" class=\"btn btn-info\" [routerLink]=\"['../transferir/'+ciclo.ciclo_id]\">Transferir ciclo</button-->\r\n        </td>\r\n        <td [hidden]=\"tipoAdmin == 0\" class=\"text-center\"><a [routerLink]=\"['../editar/'+ciclo.ciclo_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td>\r\n        <td [hidden]=\"tipoAdmin == 0\" class=\"text-center\"><button (click)=\"eliminar(ciclo.ciclo_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/ciclo/consulta/consulta.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/ciclo/consulta/consulta.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NpY2xvL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/ciclo/consulta/consulta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/ciclo/consulta/consulta.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_ciclo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ciclo.service */ "./src/app/administracion/ciclo/services/ciclo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(_catalogoService, _usuarioService, _translate, _cicloService) {
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this._translate = _translate;
        this._cicloService = _cicloService;
        this.title = "Consulta de ciclos";
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.consulta();
    };
    ConsultaComponent.prototype.consulta = function () {
        var _this = this;
        this._catalogoService.consultaCiclo().subscribe(function (response) {
            if (response && response['status']) {
                _this.ciclos = response['ciclo'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm("Eliminar", this._translate.instant('MsgEraseSyllabus'), function () {
            var _this = this;
            this._cicloService.elimina(id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.ciclos.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancel');
        });
    };
    ConsultaComponent.prototype.cerrarCiclo = function (ciclo_id) {
        alertify.confirm('', '¿Deseas cerrar este ciclo?', function () {
            var _this = this;
            this._cicloService.cierraC(ciclo_id).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.consulta();
                }
                else {
                    alertify.alert('Error en el cierre del ciclo', response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/ciclo/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/ciclo/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__["CatalogoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_ciclo_service__WEBPACK_IMPORTED_MODULE_4__["CicloService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/ciclo/nuevo/nuevo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/ciclo/nuevo/nuevo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n</div>\r\n<div class=\"col-md-12 editar-ciclo\"> \r\n  <form [formGroup]=\"cicloForm\" (ngSubmit)=\"enviarInformacion()\">\r\n\r\n<!--<div class=\"col-md-6\">              \r\n  <div class=\"form-group \">         \r\n    <label class=\"control-label\" for=\"\">{{'Level' | translate}}:</label>\r\n    <select  formControlName=\"nivelCiclo\"  class=\"form-control\"  >\r\n      <option hidden value=\"\" disabled  selected>{{'fmErrSelect' | translate}} </option>\r\n      <option  [value]=\"nivelEstudio.nivel_estudios_id\" *ngFor=\"let nivelEstudio of nivelEstudios\">{{nivelEstudio.nivel_estudios}}</option>\r\n    </select>\r\n  </div>                                           \r\n</div>-->\r\n<div class=\"col-md-6\">              \r\n  <div class=\"form-group\">                               \r\n    <label class=\"control-label  \" for=\"nombre_ciclo\">{{'_nombreCiclo' | translate}}:</label>\r\n    <input formControlName=\"nombreCiclo\" class=\"form-control\" id=\"nombre_ciclo\" placeholder=\"{{'_nombreCiclo' | translate}}\" type=\"text\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.nombreCiclo.invalid && f.nombreCiclo.touched\">\r\n      {{'fmErrCycleName' | translate}}\r\n    </span>\r\n  </div>                                                                   \r\n  <div class=\"form-group\">                               \r\n    <label class=\"control-label\" for=\"fecha_inicio\"><i class=\"fa fa-calendar\"></i>{{'fmFechaInicio' | translate}}:</label>\r\n    <input formControlName=\"fechaInicio\" class=\"form-control\" id=\"fecha_inicio\" type=\"date\">\r\n    <span class=\"invalidText\" *ngIf=\"f.fechaInicio.invalid && f.fechaInicio.touched\">\r\n        {{'fmErrDateStart' | translate}}\r\n    </span>\r\n  </div>                                                \r\n  <div class=\"form-group\">                               \r\n    <label class=\"control-label\"for=\"fecha_cierre\"><i class=\"fa fa-calendar\"></i>{{'fmFechaFin' | translate}}:</label>\r\n    <input formControlName=\"fechaCierre\" class=\"form-control\" id=\"fecha_cierre\" type=\"date\">\r\n    <span class=\"invalidText\" *ngIf=\"f.fechaCierre.invalid && f.fechaCierre.touched\">\r\n        {{'fmErrDateFinish' | translate}}\r\n    </span>\r\n  </div>                                                 \r\n  <div class=\"form-group \" rel=\"1\">\r\n    <label class=\"control-label\" for=\"\">{{'Estatus' | translate}}:</label>\r\n    <select  formControlName=\"cicloEstatus\"  class=\"form-control\"  >\r\n      <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n      <option  [value]=\"ciclo.ciclo_estatus_id\" *ngFor=\"let ciclo of cicloEstatus\">{{ciclo.ciclo_estatus_desc}}</option>\r\n    </select>\r\n    <span class=\"invalidText\" *ngIf=\"f.cicloEstatus.invalid && f.cicloEstatus.touched\">\r\n      {{'fmErrSelect' | translate}}\r\n    </span>\r\n  </div> <br>                                      \r\n  <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right guardar-cilclo\">{{'fmSave' | translate}}</button>\r\n  <div class=\"resultado-datos-ciclo margin-top\" ></div>      \r\n</div>  \r\n</form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/ciclo/nuevo/nuevo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/ciclo/nuevo/nuevo.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2ljbG8vbnVldm8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2ljbG8vbnVldm8vbnVldm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/ciclo/nuevo/nuevo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/ciclo/nuevo/nuevo.component.ts ***!
  \***************************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ciclo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ciclo.service */ "./src/app/administracion/ciclo/services/ciclo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevoComponent = /** @class */ (function () {
    function NuevoComponent(formBuilder, _catalogoService, _cicloService, _usuarioService, router, route) {
        this.formBuilder = formBuilder;
        this._catalogoService = _catalogoService;
        this._cicloService = _cicloService;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.route = route;
        this.id_ciclo = this.route.snapshot.paramMap.get('id');
        if (this.id_ciclo)
            this.title = 'Editar ciclo';
        else
            this.title = 'Nuevo elemento';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(NuevoComponent.prototype, "f", {
        get: function () { return this.cicloForm.controls; },
        enumerable: true,
        configurable: true
    });
    NuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaNivelEstudios(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.nivelEstudios = response['nivelEstudios'];
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogoService.consultaEstatusCiclo(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.cicloEstatus = response['ciclo_estatus'];
            }
        }, function (error) {
            console.log(error);
        });
        this.cicloForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            nombreCiclo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaInicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaCierre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cicloEstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        if (this.id_ciclo != null) {
            this._cicloService.consulta(this.jwt, this.id_ciclo).subscribe(function (response) {
                if (response && response['status']) {
                    _this.ciclos = response['ciclo'][0];
                    if (_this.id_ciclo)
                        _this.title = 'Editar ciclo: ' + _this.ciclos.ciclo_desc;
                    else
                        _this.title = 'Nuevo elemento';
                    _this._usuarioService.pushBreadcum(_this.title, "", 2);
                    _this.cicloForm = _this.formBuilder.group({
                        //nivelCiclo:   [ , Validators.required], 
                        nombreCiclo: [_this.ciclos.ciclo_desc, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        fechaInicio: [_this.ciclos.fecha_inicio, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        fechaCierre: [_this.ciclos.fecha_fin, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        cicloEstatus: [_this.ciclos.ciclo_estatus_id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    NuevoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.cicloForm.invalid) {
            Object.keys(this.cicloForm.controls).forEach(function (controlKey) {
                _this.cicloForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._cicloService.modificaCiclos(this.cicloForm, this.jwt, this.id_ciclo).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.router.navigate(['admin/ciclo/consulta']);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
        if (this.cicloForm.invalid) {
            return;
        }
    };
    NuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo',
            template: __webpack_require__(/*! ./nuevo.component.html */ "./src/app/administracion/ciclo/nuevo/nuevo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo.component.scss */ "./src/app/administracion/ciclo/nuevo/nuevo.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _services_ciclo_service__WEBPACK_IMPORTED_MODULE_5__["CicloService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NuevoComponent);
    return NuevoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/ciclo/services/ciclo.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/administracion/ciclo/services/ciclo.service.ts ***!
  \****************************************************************/
/*! exports provided: CicloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloService", function() { return CicloService; });
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




var CicloService = /** @class */ (function () {
    function CicloService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CicloService.prototype.aperuraCiclo = function (ciclo, id_ciclo) {
        var formData = new FormData();
        formData.append('id_ciclo', id_ciclo);
        formData.append('num_mat_rep', ciclo.get('numMaterias').value);
        if (ciclo.get('nuevoCiclo').value == false) {
            formData.append('id_ciclo_to', ciclo.get('ciclo').value);
        }
        if (ciclo.get('docGrupo').value == true) {
            formData.append('auto_docente', '1');
        }
        else {
            formData.append('auto_docente', '0');
        }
        if (ciclo.get('recursadores').value == true) {
            formData.append('auto_recursador', '1');
        }
        else {
            formData.append('auto_recursador', '0');
        }
        if (ciclo.get('reprobados').value == true) {
            formData.append('auto_reprobados', '1');
        }
        else {
            formData.append('auto_reprobados', '0');
        }
        return this._httpClient.post(this.url + 'controlEscolar/ciclo/aperturaCiclo.php', formData);
    };
    CicloService.prototype.cierraC = function (ciclo_id) {
        var formData = new FormData();
        formData.append('id_ciclo', ciclo_id);
        return this._httpClient.post(this.url + 'controlEscolar/ciclo/cierreCiclo.php', formData);
    };
    CicloService.prototype.consulta = function (jwt, id) {
        var params = '?id_ciclo=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/ciclo/consulta.php' + params);
    };
    CicloService.prototype.consultaGruposCiclo = function (id) {
        var params = '?id_ciclo=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/ciclo/consultaGrupo.php' + params);
    };
    CicloService.prototype.elimina = function (id) {
        var params = '?id_ciclo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/ciclo/elimina.php' + params);
    };
    CicloService.prototype.modificaCiclos = function (ciclo, jwt, id_ciclo) {
        var formData = new FormData();
        formData.append('ciclo_desc', ciclo.get('nombreCiclo').value);
        formData.append('fecha_inicio', ciclo.get('fechaInicio').value);
        formData.append('fecha_fin', ciclo.get('fechaCierre').value);
        formData.append('ciclo_estatus_id', ciclo.get('cicloEstatus').value);
        var fd = new FormData();
        if (id_ciclo == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'controlEscolar/ciclo/crea.php', formData);
        }
        else {
            formData.append('id_ciclo', id_ciclo);
            return this._httpClient.post(this.url + 'controlEscolar/ciclo/edita.php', formData);
        }
    };
    CicloService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CicloService);
    return CicloService;
}());



/***/ }),

/***/ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <form [formGroup]=\"transferForm\" (ngSubmit)=\"enviarInformacion()\">\r\n      <div class=\"form-group \" rel=\"1\" [hidden]=\"f.nuevoCiclo.value\">\r\n        <label class=\"control-label\" for=\"\">¿Cuál es el ciclo al que deseas transferir la nueva información?</label>\r\n        <select formControlName=\"ciclo\" class=\"form-control\">\r\n          <option hidden value=\"\" disabled selected>Selecciona una opción </option>\r\n          <option [value]=\"ciclo.ciclo_id\" *ngFor=\"let ciclo of ciclos\">{{ciclo.ciclo_desc}}</option>\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.ciclo.invalid && f.ciclo.touched\">\r\n          {{'fmErrSelect' | translate}}\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input formControlName=\"nuevoCiclo\" type=\"checkbox\" class=\"custom-control-input\" id=\"nuevoCiclo\" (click)=\"cambiaValid()\">\r\n          <label class=\"custom-control-label\" for=\"nuevoCiclo\">Crear nuevo ciclo</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"numMaterias\">Máximo de materias reprobadas por alumno para subir al siguiente grado</label>\r\n        <input formControlName=\"numMaterias\" class=\"form-control\" id=\"numMaterias\" placeholder=\"\" type=\"number\" required>\r\n        <span class=\"invalidText\" *ngIf=\"f.numMaterias.invalid && f.numMaterias.touched\">\r\n          Ingresa el número máximo de materias\r\n        </span>\r\n      </div>\r\n      <div>\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input formControlName=\"docGrupo\" type=\"checkbox\" class=\"custom-control-input\" id=\"docGrupo\">\r\n          <label class=\"custom-control-label\" for=\"docGrupo\">¿Agregar los docentes automáticamente al grupo con base a las asignaturas del ciclo pasado?</label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input formControlName=\"reprobados\" type=\"checkbox\" class=\"custom-control-input\" id=\"reprobados\">\r\n          <label class=\"custom-control-label\" for=\"reprobados\">¿Agregar a los alumnos que no aprobaron el ciclo al mismo grado?</label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input formControlName=\"recursadores\" type=\"checkbox\" class=\"custom-control-input\" id=\"recursadores\">\r\n          <label class=\"custom-control-label\" for=\"recursadores\">Para alumnos que reprobaron menos de {{f.numMaterias.value}} materias. ¿Agregar a su respectiva asignatura de recursamiento?</label>\r\n        </div>\r\n        <button class=\"btn btn-primary pull-right\" type=\"submit\">Transferir ciclo</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2ljbG8vdHJhbnNmZXJpci1jaWNsby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jaWNsby90cmFuc2ZlcmlyLWNpY2xvL3RyYW5zZmVyaXItY2ljbG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TransferirCicloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferirCicloComponent", function() { return TransferirCicloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ciclo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ciclo.service */ "./src/app/administracion/ciclo/services/ciclo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferirCicloComponent = /** @class */ (function () {
    function TransferirCicloComponent(_catalogoService, _cicloService, route, formBuilder) {
        this._catalogoService = _catalogoService;
        this._cicloService = _cicloService;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    Object.defineProperty(TransferirCicloComponent.prototype, "f", {
        get: function () { return this.transferForm.controls; },
        enumerable: true,
        configurable: true
    });
    TransferirCicloComponent.prototype.ngOnInit = function () {
        this.idCiclo = this.route.snapshot.paramMap.get('id');
        this.consulta();
        this.transferForm = this.formBuilder.group({
            ciclo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numMaterias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nuevoCiclo: [false],
            docGrupo: [false],
            reprobados: [false],
            recursadores: [false],
        });
    };
    TransferirCicloComponent.prototype.consulta = function () {
        var _this = this;
        var ciclosPerm = [];
        this._catalogoService.consultaCiclo().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.ciclos = response['ciclo'];
                _this.ciclos.forEach(function (_ciclo) {
                    if (_ciclo.ciclo_id != _this.idCiclo && _ciclo.ciclo_estatus_id == 1) {
                        ciclosPerm.push(_ciclo);
                    }
                });
                _this.ciclos = ciclosPerm;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TransferirCicloComponent.prototype.cambiaValid = function () {
        if (this.transferForm.get('nuevoCiclo').value) {
            this.transferForm.controls.ciclo.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]["null"]);
            this.transferForm.controls.ciclo.updateValueAndValidity();
        }
    };
    TransferirCicloComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.transferForm.invalid) {
            Object.keys(this.transferForm.controls).forEach(function (controlKey) {
                _this.transferForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._cicloService.aperuraCiclo(this.transferForm, this.idCiclo).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
            }
        }, function (error) {
            console.log(error);
        });
    };
    TransferirCicloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transferir-ciclo',
            template: __webpack_require__(/*! ./transferir-ciclo.component.html */ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.html"),
            styles: [__webpack_require__(/*! ./transferir-ciclo.component.scss */ "./src/app/administracion/ciclo/transferir-ciclo/transferir-ciclo.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__["CatalogoService"],
            _services_ciclo_service__WEBPACK_IMPORTED_MODULE_4__["CicloService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TransferirCicloComponent);
    return TransferirCicloComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/services/catalogo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/catalogo.service.ts ***!
  \**********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogoService = /** @class */ (function () {
    function CatalogoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CatalogoService.prototype.consultaEstatusMateria = function () {
        return this._httpClient.get(this.url + 'catalogosLE/estatusMateria.php');
    };
    CatalogoService.prototype.consultaArea = function () {
        // var params = '?id_plan_estudio='+idPlan
        // params += '&id_plan_estudio='+idPlan;
        return this._httpClient.get(this.url + 'catalogosCE/consultaArea.php');
    };
    CatalogoService.prototype.consultaGrado = function (idPlan) {
        var params = '?id_plan_estudio=' + idPlan;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    CatalogoService.prototype.consultaCampus = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/campus.php' + params);
    };
    CatalogoService.prototype.consultaInstitucion = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/instituciones.php' + params);
    };
    CatalogoService.prototype.consultaTipoInst = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipo_instituciones.php' + params);
    };
    CatalogoService.prototype.consultaCarrera = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/carreras.php' + params);
    };
    CatalogoService.prototype.consultaCarreraAspirantes = function () {
        return this._httpClient.get(this.url + 'catalogos/carrerasAspirante.php');
    };
    CatalogoService.prototype.consultatipoPeriodo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoPeriodo.php' + params);
    };
    CatalogoService.prototype.consultaNivelEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/nivelestudios.php' + params);
    };
    CatalogoService.prototype.consultaEstatusAspirante = function () {
        return this._httpClient.get(this.url + 'catalogoSG/estatusAspirante.php');
    };
    CatalogoService.prototype.consultaEstatusCiclo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/ciclo_estatus.php' + params);
    };
    CatalogoService.prototype.consultaCiclo = function () {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        // var params = '?jwt='+jwt
        return this._httpClient.get(this.url + 'catalogosCE/ciclo.php');
    };
    CatalogoService.prototype.consultaGrupo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/grupo.php' + params);
    };
    // consultaGruposPrimero(){
    //   return this._httpClient.get(this.url +'controlEscolar/ordenJerarquico/gruposPrimero.php');
    // }
    // // controlEscolar\ordenJerarquico\gruposPrimero.php
    CatalogoService.prototype.consultatipoAsignatura = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoAsignatura.php' + params);
    };
    CatalogoService.prototype.consultaRol = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/planEstudios.php' + params);
    };
    CatalogoService.prototype.consultatipoPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/tipoPlanEstudios.php' + params);
    };
    CatalogoService.prototype.consultaAsignaturaTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/asignaturas.php' + params);
    };
    CatalogoService.prototype.consultaUsuario = function (jwt, limite) {
        var params = '?jwt=' + jwt;
        params += '&limite=' + limite;
        return this._httpClient.get(this.url + 'catalogos/usuario.php' + params);
    };
    CatalogoService.prototype.consultaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/correos.php' + params);
    };
    CatalogoService.prototype.consultaRolTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaListaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/grupoCorreo.php' + params);
    };
    CatalogoService.prototype.consultaPrivilegios = function (jwt, muestraEstatus) {
        var params = '?jwt=' + jwt;
        params += '&muestra_estatus=' + muestraEstatus;
        return this._httpClient.get(this.url + 'catalogos/privilegios.php' + params);
    };
    CatalogoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogoService);
    return CatalogoService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-ciclo-ciclo-module.js.map