(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asesor-aspirante-aspirante-module"],{

/***/ "./src/app/asesor/aspirante/aspirante-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/asesor/aspirante/aspirante-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AspiranteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteRoutingModule", function() { return AspiranteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_administracion_aspirante_cleaver_cleaver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/aspirante/cleaver/cleaver.component */ "./src/app/administracion/aspirante/cleaver/cleaver.component.ts");
/* harmony import */ var src_app_administracion_aspirante_expediente_expediente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/aspirante/expediente/expediente.component */ "./src/app/administracion/aspirante/expediente/expediente.component.ts");
/* harmony import */ var src_app_administracion_aspirante_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/aspirante/solicitud/solicitud.component */ "./src/app/administracion/aspirante/solicitud/solicitud.component.ts");
/* harmony import */ var _aspirante_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aspirante.component */ "./src/app/asesor/aspirante/aspirante.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/asesor/aspirante/consulta/consulta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _aspirante_component__WEBPACK_IMPORTED_MODULE_5__["AspiranteComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_6__["ConsultaComponent"] },
            { path: 'solicitud/:id', component: src_app_administracion_aspirante_solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudComponent"] },
            { path: 'expediente/:id', component: src_app_administracion_aspirante_expediente_expediente_component__WEBPACK_IMPORTED_MODULE_3__["ExpedienteComponent"] },
            { path: 'cleaver/:id', component: src_app_administracion_aspirante_cleaver_cleaver_component__WEBPACK_IMPORTED_MODULE_2__["CleaverComponent"] },
            { path: 'estadisticas', loadChildren: 'src/app/administracion/aspirante/estadistica/estadistica.module#EstadisticaModule' },
            { path: 'nuevo', loadChildren: 'src/app/signup/signup.module#SignupModule' }
        ]
    }
];
var AspiranteRoutingModule = /** @class */ (function () {
    function AspiranteRoutingModule() {
    }
    AspiranteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AspiranteRoutingModule);
    return AspiranteRoutingModule;
}());



/***/ }),

/***/ "./src/app/asesor/aspirante/aspirante.component.html":
/*!***********************************************************!*\
  !*** ./src/app/asesor/aspirante/aspirante.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/asesor/aspirante/aspirante.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/asesor/aspirante/aspirante.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNlc29yL2FzcGlyYW50ZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hc2Vzb3IvYXNwaXJhbnRlL2FzcGlyYW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/asesor/aspirante/aspirante.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/asesor/aspirante/aspirante.component.ts ***!
  \*********************************************************/
/*! exports provided: AspiranteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteComponent", function() { return AspiranteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AspiranteComponent = /** @class */ (function () {
    function AspiranteComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Mis aspirantes";
        this._usuarioService.pushBreadcum(this.title, '/asesor/aspirante', 1);
    }
    AspiranteComponent.prototype.ngOnInit = function () {
    };
    AspiranteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aspirante',
            template: __webpack_require__(/*! ./aspirante.component.html */ "./src/app/asesor/aspirante/aspirante.component.html"),
            styles: [__webpack_require__(/*! ./aspirante.component.scss */ "./src/app/asesor/aspirante/aspirante.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AspiranteComponent);
    return AspiranteComponent;
}());



/***/ }),

/***/ "./src/app/asesor/aspirante/aspirante.module.ts":
/*!******************************************************!*\
  !*** ./src/app/asesor/aspirante/aspirante.module.ts ***!
  \******************************************************/
/*! exports provided: AspiranteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteModule", function() { return AspiranteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _aspirante_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aspirante-routing.module */ "./src/app/asesor/aspirante/aspirante-routing.module.ts");
/* harmony import */ var _aspirante_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aspirante.component */ "./src/app/asesor/aspirante/aspirante.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/asesor/aspirante/consulta/consulta.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var src_app_administracion_aspirante_solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/administracion/aspirante/solicitud/solicitud.module */ "./src/app/administracion/aspirante/solicitud/solicitud.module.ts");
/* harmony import */ var src_app_administracion_aspirante_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/administracion/aspirante/expediente/expediente.module */ "./src/app/administracion/aspirante/expediente/expediente.module.ts");
/* harmony import */ var src_app_administracion_aspirante_cleaver_cleaver_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/administracion/aspirante/cleaver/cleaver.module */ "./src/app/administracion/aspirante/cleaver/cleaver.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AspiranteModule = /** @class */ (function () {
    function AspiranteModule() {
    }
    AspiranteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_aspirante_component__WEBPACK_IMPORTED_MODULE_3__["AspiranteComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _aspirante_routing_module__WEBPACK_IMPORTED_MODULE_2__["AspiranteRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_8__["ConsultaAsignaturaModule"],
                src_app_administracion_aspirante_solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_9__["SolicitudModule"],
                src_app_administracion_aspirante_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_10__["ExpedienteModule"],
                src_app_administracion_aspirante_cleaver_cleaver_module__WEBPACK_IMPORTED_MODULE_11__["CleaverModule"]
            ]
        })
    ], AspiranteModule);
    return AspiranteModule;
}());



/***/ }),

/***/ "./src/app/asesor/aspirante/consulta/consulta.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/asesor/aspirante/consulta/consulta.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Aspirantes</h4>\r\n    <button class=\"btn btn-success\" (click)=\"setSelectedRol()\" [routerLink]=\"['/asesor/aspirante/nuevo']\">Agregar\r\n      aspirante</button>\r\n    <!--div class=\"btn-group float-right\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"generaExcel()\">\r\n        <h4><i class=\"fa fa-file-excel-o\"></i></h4>\r\n        Genera reporte\r\n      </button>\r\n      <button [routerLink]=\"['/asesor/aspirante/estadisticas']\" class=\"btn btn-outline-info\">\r\n        <h4><i class=\"fa fa-table\"></i></h4>\r\n        Consulta estadística\r\n      </button>\r\n    </div-->\r\n    <p class=\"mt-3\">Búsqueda de aspirantes</p>\r\n    <div class=\"input-group mb-3\">\r\n      <input (keyup)=\"buscaPersona()\" [(ngModel)]=\"contenido\" type=\"text\" class=\"form-control\"\r\n        placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    <p *ngIf=\"!consultaAspirantes\"><strong style=\"font-size: small;\">Total de registros: {{totalItems}}</strong></p>\r\n    <div class=\"row\">\r\n      <!--div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label for=\"tipo\">Tipo de búsqueda</label>\r\n          <select class=\"form-control\" id=\"tipo\" [(ngModel)]=\"tipoConsulta\" (change)=\"switchConsulta(tipoConsulta)\">\r\n            <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n            <option value= 1 >Todos</option>\r\n            <option value= 2 >Validados</option>\r\n            <option value= 3 >Sin validar</option>\r\n          </select>\r\n        </div>\r\n      </div-->\r\n      <!-- <div class=\"col-md-4\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"tipoConsulta == 1 ? 'active':''\"\r\n            (click)=\"consultaTodos(1)\">Todos</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"tipoConsulta == 2 ? 'active':''\"\r\n            (click)=\"muestraAspirantes(2)\">Validado</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"tipoConsulta == 3 ? 'active':''\"\r\n            (click)=\"muestraAspirantes(3)\">Sin validar</button>\r\n        </div>\r\n      </div> -->\r\n      <!--div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label for=\"cat_carrera\">Carrera</label>\r\n          <select class=\"form-control\" id=\"cat_carrera\" [(ngModel)]=\"carreraIdBusqueda\" (change)=\"switchConsulta(tipoConsulta)\">\r\n            <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n            <option value=\"0\">Ninguna</option>\r\n            <option *ngFor=\"let carrera of carreras\" value=\"{{carrera.carrera_id}}\">{{carrera.carrera}}</option>\r\n          </select>\r\n        </div>\r\n      </div-->\r\n    </div>\r\n    <table class=\"table table-bordered table-responsive\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>Folio de aspirante</th>\r\n          <th>Nombre</th>\r\n          <th>Correo</th>\r\n          <th>Carrera</th>\r\n          <th>Paso</th>\r\n          <!-- <th>Validado por el administrador</th>\r\n          <th>Matricular</th> -->\r\n          <th>Información de inscripción</th>\r\n          <th>Expediente</th>\r\n          <th>Situación</th>\r\n          <th>Resultado cleaver</th>\r\n          <th>Reporte</th>\r\n          <th>Último acceso</th>\r\n          <!--<th>Generar matrícula</th>-->\r\n          <th>Fecha de registro</th>\r\n          <th>Eliminar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"aspirantes\">\r\n        <tr *ngFor=\"let aspirante of aspirantes; let i = index\">\r\n          <td>{{aspirante.persona_id}}</td>\r\n          <td style=\"width:20%\">{{aspirante.nombre}} {{aspirante.primer_apellido}} {{aspirante.segundo_apellido}}</td>\r\n          <td>{{aspirante.email}}</td>\r\n          <td>\r\n            {{aspirante.carrera}}\r\n            <a href=\"javascript:void(0)\" (click)=\"abreModal(i)\">Cambiar</a>\r\n          </td>\r\n          <td class=\"text-center\" [ngClass]=\"aspirante.paso == 4 ? 'alert-success':''\">\r\n            <!--span *ngIf=\"aspirante.paso == 4\"\r\n              (click)=\"matricula_aspirante(aspirante.persona_id,aspirante.nombre,aspirante.primer_apellido,i)\"\r\n              style=\"cursor: pointer;\"><i class=\"fa fa-id-card-o\"></i><span\r\n                style=\"font-size: 10px;\">Matrícular</span></span-->\r\n            <span>{{aspirante.paso}}</span>\r\n          </td>\r\n          <!-- <td>\r\n            <div style=\"display: flex; justify-content: center;\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{aspirante.persona_id}}\"\r\n                  (click)=\"cambiaValidador(aspirante.persona_id, i )\" [checked]=\"aspirante.validado_administrador != 0\">\r\n                <label class=\"custom-control-label\" for=\"{{aspirante.persona_id}}\"></label>\r\n              </div>\r\n            </div>\r\n          </td> -->\r\n          <!-- <td class=\"alert text-center\" role=\"alert\" [ngClass]=\"aspirante.paso == 4 ? 'alert-success':''\">\r\n            <a href=\"javascript:void()\" (click)=\"setFiltros()\" [routerLink]=\"['../../matriculacion/'+aspirante.persona_id]\"><i\r\n                class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i><br>\r\n              <small>Matricular</small>\r\n            </a>\r\n          </td> -->\r\n          <td class=\"text-center\">\r\n            <a [routerLink]=\"['../solicitud/'+aspirante.persona_id]\" target=\"_blank\"\r\n              [ngClass]=\"aspirante.paso >= 1 ? 'bg-completo': 'bg-incompleto'\">\r\n              <i class=\"fa fa-list fa-2x\" aria-hidden=\"true\"></i>\r\n              <p>{{aspirante.porcentaje_formulario}}%</p>\r\n            </a>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <a [routerLink]=\"['../expediente/'+aspirante.persona_id]\"\r\n              [ngClass]=\"aspirante.paso >= 3 ? 'bg-completo': 'bg-incompleto'\" target=\"_blank\">\r\n              <i class=\"fa fa-folder-open-o fa-2x\" aria-hidden=\"true\"></i>\r\n              <p>{{aspirante.porcentaje_documento}}%</p>\r\n            </a>\r\n          </td>\r\n          <td class=\"text-center\">\r\n          <a href=\"javascript:void(0)\" [ngClass]=\"{'bg-completo':aspirante.situacion_aspirante_id == 1, 'bg-incompleto':aspirante.situacion_aspirante_id ==2,\r\n           'bg-incompleto':aspirante.situacion_aspirante_id ==3, 'bg-null':aspirante.situacion_aspirante_id ==null}\" (click)=\"muestraModalSituacion(aspirante.persona_id, aspirante.situacion_aspirante_id, i)\">\r\n            <i class=\"fa fa-user-o fa-2x\" aria-hidden=\"true\"></i>\r\n            <p>{{aspirante.situacion_aspirante_descripcion}}</p>\r\n          </a>\r\n          </td>\r\n          <td [ngClass]=\"aspirante.cleaver_completo == '1' ? 'bg-completo': 'bg-incompleto'\" class=\"text-center\"\r\n            [routerLink]=\"['../cleaver/'+aspirante.persona_id]\"><i class=\"fa fa-bar-chart fa-2x\" aria-hidden=\"true\"></i>\r\n          </td>\r\n          <td [ngClass]=\"aspirante.paso >= 1 ? 'bg-completo': 'bg-incompleto'\" class=\"text-center\"><a\r\n              [href]=\"url+'/seguimiento/reportes/solicitud_inscripcion.php?id='+ aspirante.persona_id\"\r\n              style=\"color:inherit\" target=\"_blank\"><i class=\"fa fa-file-pdf-o fa-2x\" aria-hidden=\"true\"></i></a></td>\r\n          <td>\r\n            <p>{{aspirante.sesion | date: \"dd/MM/yyyy\"}} {{aspirante.sesion | date: \"mediumTime\"}} </p>\r\n          </td>\r\n          <!-- <td class=\"text-center\"><i style=\"color: red;\" class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i></td> -->\r\n          <td class=\"text-center\">{{aspirante.fecha_creacion | date: \"dd/MM/yyyy\"}}\r\n            {{aspirante.fecha_creacion | date: \"mediumTime\"}}</td>\r\n          <td class=\"text-center\"><i style=\"color: red;\" class=\"fa fa-minus-square fa-2x\" aria-hidden=\"true\"\r\n              (click)=\"eliminar(aspirante.persona_id, i)\"></i></td>\r\n        </tr>\r\n      </tbody>\r\n      <tr *ngIf=\"consultaAspirantes\">\r\n        <td colspan=\"11\">\r\n          <div class=\"col text-center mt-1 mb-1\">\r\n            <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n            <h5>\"Cargando datos, por favor espere.\"</h5>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div *ngIf=\"numAspirantes == 0\" class=\"alert alert-danger text-center\" role=\"alert\">\r\n      Sin coincidencias\r\n    </div>\r\n    <!--div class=\"d-flex justify-content-center\">\r\n      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" [maxSize]=\"4\"\r\n        [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n    </div-->\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalCarrera let-modal>\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p><b>Aspirante:</b> {{selectAspirante.nombre}} {{selectAspirante.primer_apellido}}\r\n      {{selectAspirante.segundo_apellido}}</p>\r\n    <p><b>Carrera:</b> {{selectAspirante.carrera}}</p>\r\n    <app-consulta-asignatura [nivel]=\"1\" [tipo]=\"'small'\" (sucessEvent)=\"obtieneCarrera($event)\"></app-consulta-asignatura>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiaCarrera()\">Guardar</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modalSituacion let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4>Edita situación</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"cat_estatus\">Situación</label>\r\n      <select id=\"cat_estatus\" class=\"form-control\" [(ngModel)]=\"situacion_aspirante_id\">\r\n        <option value=\"\" hidden selected>Selecciona una opción</option>\r\n        <option value=\"{{estatus.situacion_aspirante_id}}\" *ngFor=\"let estatus of estatusPermitido\">{{estatus.situacion_aspirante_descripcion}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiaEstatusAspirante()\">Guardar</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/asesor/aspirante/consulta/consulta.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/asesor/aspirante/consulta/consulta.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-completo {\n  color: var(--green); }\n\n.bg-incompleto {\n  color: var(--yellow); }\n\n.bg-alumno {\n  color: var(--blue); }\n\n.bg-null {\n  color: var(--black); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNlc29yL2FzcGlyYW50ZS9jb25zdWx0YS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhc2Vzb3JcXGFzcGlyYW50ZVxcY29uc3VsdGFcXGNvbnN1bHRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0kscUJBQW9CLEVBQ3ZCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXNlc29yL2FzcGlyYW50ZS9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb21wbGV0b3tcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbilcclxufVxyXG4gICBcclxuLmJnLWluY29tcGxldG97XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KVxyXG59XHJcblxyXG4uYmctYWx1bW5ve1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUpXHJcbn1cclxuXHJcbi5iZy1udWxse1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/asesor/aspirante/consulta/consulta.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/asesor/aspirante/consulta/consulta.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_asesor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/asesor.service */ "./src/app/asesor/services/asesor.service.ts");
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
    function ConsultaComponent(_usuarioService, _asesorService, translate, _modalService, _catalogoService, router) {
        this._usuarioService = _usuarioService;
        this._asesorService = _asesorService;
        this.translate = translate;
        this._modalService = _modalService;
        this._catalogoService = _catalogoService;
        this.router = router;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.itemsPerPage = 50;
        this.page = 1;
        this.previousPage = 1;
        this.consultaAspirantes = false;
        this.tipoConsulta = 1;
        this.carreraIdBusqueda = "";
        this.aspirantesTotales = [];
        this.situacion_aspirante_id = "";
        this.estatusPermitido = [];
        this.title = "Consulta";
        this._usuarioService.pushBreadcum('Aspirantes', '/admin/aspirante', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        //this.consultaCarrerasAspirante();
        this.consultaEstatus();
        this.consultaTodos();
    };
    /*consultaCarrerasAspirante() {
      this._catalogoService.consultaCarreraAspirantes().subscribe(
        response => {
          if (response && response['status']) {
            this.carreras = response['carreras'];
            if (sessionStorage.getItem('filtroAspirante')) {
              let filtro = JSON.parse(sessionStorage.getItem('filtroAspirante'));
              this.tipoConsulta = filtro.tipo;
              this.carreraIdBusqueda = filtro.id_carrera;
              this.switchConsulta(this.tipoConsulta);
              sessionStorage.removeItem('filtroAspirante');
            }else {
              this.switchConsulta(1);
            }
          }
        }, error => {
          console.log(error)
        }
      )
    }*/
    ConsultaComponent.prototype.cambiaEstatusAspirante = function () {
        var _this = this;
        this._asesorService.editaEstatusAspirante(this.persona_id, this.situacion_aspirante_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.aspirantes[_this.indexAspirante].situacion_aspirante_id = _this.situacion_aspirante_id;
                _this._modalService.dismissAll();
                _this.estatusAspirantes.forEach(function (estatus) {
                    if (estatus.situacion_aspirante_id == _this.situacion_aspirante_id) {
                        _this.aspirantes[_this.indexAspirante].situacion_aspirante_descripcion = estatus.situacion_aspirante_descripcion;
                    }
                });
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*generaExcel() {
      window.open(this.url + 'seguimiento/reportes/solicitud_excel.php?jwt=' + this.jwt, "_blank");
    }*/
    /* consultatTotalAspirantes(tipo) {
      this._aspiranteService.totalAspirantes(tipo, this.carreraIdBusqueda).subscribe(
        response => {
          if (response && response['status']) {
            this.totalItems = response['total'];
          }
        }, error => {
          console.log(error)
        }
      )
    }
  
    */
    ConsultaComponent.prototype.consultaEstatus = function () {
        var _this = this;
        this._catalogoService.consultaEstatusAspirante().subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusAspirantes = response['estatus'];
                _this.estatusAspirantes.splice(0, 1);
                _this.estatusAspirantes.splice(3, 1);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.buscaPersona = function () {
        var _this = this;
        if (this.contenido != "") {
            this._asesorService.consultaAspirantes().subscribe(function (response) {
                if (response && response['status']) {
                    _this.aspirantes = response['aspirantes'];
                    _this.numAspirantes = _this.aspirantes.length;
                }
                else {
                    _this.aspirantes = [];
                    _this.numAspirantes = 0;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.consultaTodos();
        }
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm('', '¿Deseas eliminar el aspirante?', function () {
            var _this = this;
            this._asesorService.eliminaAspirante(id).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.aspirantes.splice(index, 1);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    /* cambiaValidador(persona_id, index) {
      let validador = this.aspirantes[index].validado_administrador;
      if (validador == 0) validador = 1
      else if (validador == 1) validador = 0
      this.aspirantes[index].validado_administrador = validador;
      this._aspiranteService.editaValidacion(persona_id, validador).subscribe(
        response => {
          if (response && response['status']) {
            alertify.success(response['msg']);
            this.totalItems = this.totalItems - 1;
          }
          else {
            alertify.success(response['msg']);
          }
        }, error => {
          console.log(<any>error)
        });
    }*/
    ConsultaComponent.prototype.abreModal = function (index) {
        this.selectAspirante = "";
        this.selectAspirante = this.aspirantes[index];
        this._modalService.open(this.modalCarrera, { size: 'lg' });
    };
    ConsultaComponent.prototype.obtieneCarrera = function (event) {
        this.carrera_id = event.idCarrera;
    };
    ConsultaComponent.prototype.cambiaCarrera = function () {
        var _this = this;
        if (!this.carrera_id) {
            alertify.error('Selecciona una carrera');
            return;
        }
        this._asesorService.editaCarrera(this.selectAspirante.persona_id, this.carrera_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this._modalService.dismissAll();
                _this.carrera_id = "";
                _this.consultaTodos();
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*
      switchConsulta(tipoConsulta){
        // console.log(tipoConsulta, this.carreraIdBusqueda);
        if(tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')){ // todos
          this.consultaTodos(tipoConsulta);
        }else if(tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')) { // validado sin carrera
          this.muestraAspirantes(tipoConsulta);
        }else if(tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')) { // sin validar y sin carrera
          this.muestraAspirantes(tipoConsulta);
        }else if(tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // validado con carrera
          tipoConsulta=4;
          this.muestraAspirantes(tipoConsulta);
        }else if(tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // sin validar con carrera
          tipoConsulta = 5;
          this.muestraAspirantes(tipoConsulta);
        }else if(tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // todos carrera
          tipoConsulta = 6;
          this.muestraAspirantes(tipoConsulta);
        }
      }*/
    ConsultaComponent.prototype.consultaTodos = function () {
        var _this = this;
        this.aspirantes = null;
        this.numAspirantes = null;
        this.contenido = null;
        this.consultaAspirantes = true;
        var inicio = (this.page - 1) * this.itemsPerPage;
        this._asesorService.consultaAspirantes().subscribe(function (response) {
            _this.consultaAspirantes = false;
            if (response && response['status']) {
                _this.aspirantes = response['aspirantes'];
                _this.numAspirantes = _this.aspirantes.length;
            }
            else {
                _this.numAspirantes = 0;
                _this.totalItems = 0;
                _this.consultaAspirantes = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*
    muestraAspirantes(tipo) { // trae todos los aspirantes y los guarda en un arreglo
      // console.log(tipo);
      // if (tipo != 4 ) this.carreraIdBusqueda = "";
      // if (this.tipoConsulta != tipo || this.tipoConsulta == 4) {
        // this.tipoConsulta = tipo;
        this.aspirantes = [];
        // this.tipoConsulta = tipo;
        this.consultaAspirantes = true;
  
        let inicio = (this.page - 1) * this.itemsPerPage;
        let fin = inicio + 50;
        this._aspiranteService.consultaAspirantes('', this.contenido, inicio, this.itemsPerPage, tipo, this.carreraIdBusqueda).subscribe(
          response => {
            if (response && response['status']) {
              this.consultaAspirantes = false;
              this.aspirantesTotales = response['aspirante'];
              // console.log(this.aspirantesTotales);
             this.aspirantes =  response['aspirante'];
             this.numAspirantes = this.aspirantes.length;
  
              this.consultatTotalAspirantes(tipo)
            } else {
              this.numAspirantes = 0;
              this.totalItems = 0
              this.consultaAspirantes = false;
            }
          }, error => {
            console.log(<any>error)
          });
      // } else {
      //   let inicio = (this.page - 1) * this.itemsPerPage;
      //   let fin = inicio + 50;
      //   console.log(this.page, inicio, fin);
      //   if (this.aspirantesTotales.length < 50) {
      //     console.log(this.aspirantesTotales);
      //     this.aspirantes = [];
      //     this.aspirantes = this.aspirantesTotales.slice(inicio, this.aspirantesTotales.length)
      //     console.log(this.aspirantes);
      //   } else {
      //     console.log('aquí x2');
      //     this.aspirantes = [];
      //     this.aspirantes = this.aspirantesTotales.slice(inicio, fin)
      //     console.log(this.aspirantes);
      //   }
      // }
    }*/
    /*
      matricula_aspirante(id_aspirante, nombre, primer_apellido, index) {
        alertify.confirm('Matriculación de alumno', '¿Deseas matricular al aspirante ' + nombre + ' ' + primer_apellido + '? al hacer esta operación el aspirante desaparecerá de la lista', function () {
          this._aspiranteService.matriculaAspirante(id_aspirante, this.jwt).subscribe(
            response => {
              console.log(response)
              if (response && response['status']) {
                alertify.success(response['msg']);
    
                this.aspirantes.splice(index, 1);
              } else {
                alertify.success(response['msg']);
              }
            }, error => {
              console.log(<any>error)
            });
        }.bind(this),
          function () {
            alertify.error('Cancelado');
          }).set('labels', { ok: 'Sí', cancel: 'No' });
      }
      */
    /*
      loadPage(page: number) {
        if (page != this.previousPage) {
          this.previousPage = page;
          if (this.tipoConsulta == 1) {
            this.consultaTodos(1);
          } else {
            this.previousPage = page;
            this.muestraAspirantes(this.tipoConsulta);
          }
        }
      }*/
    ConsultaComponent.prototype.setSelectedRol = function () {
        if (sessionStorage.getItem('selectedRol'))
            sessionStorage.removeItem('selectedRol');
        sessionStorage.setItem('selectedRol', 'Aspirante');
    };
    ConsultaComponent.prototype.setFiltros = function () {
        var filtro = {
            tipo: this.tipoConsulta,
            id_carrera: this.carreraIdBusqueda
        };
        if (sessionStorage.getItem('filtroAspirante'))
            sessionStorage.removeItem('filtroAspirante');
        sessionStorage.setItem('filtroAspirante', JSON.stringify(filtro));
        console.log(sessionStorage.getItem('filtroAspirante'));
    };
    ConsultaComponent.prototype.muestraModalSituacion = function (persona_id, situacion_aspirante_id, index) {
        var _this = this;
        this.estatusPermitido = [];
        this.situacion_aspirante_id = "";
        this.estatusAspirantes.forEach(function (estatus) {
            if (situacion_aspirante_id == 1 && estatus.situacion_aspirante_id == 3) {
                _this.estatusPermitido.push(estatus);
            }
            else if (situacion_aspirante_id == 3 && estatus.situacion_aspirante_id == 1) {
                _this.estatusPermitido.push(estatus);
            }
        });
        console.log(this.estatusPermitido, situacion_aspirante_id, this.estatusAspirantes);
        this.persona_id = persona_id;
        this.indexAspirante = index;
        this._modalService.open(this.modalSituacion, { size: 'sm' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalCarrera'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConsultaComponent.prototype, "modalCarrera", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalSituacion'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConsultaComponent.prototype, "modalSituacion", void 0);
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/asesor/aspirante/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/asesor/aspirante/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_asesor_service__WEBPACK_IMPORTED_MODULE_7__["AsesorService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=asesor-aspirante-aspirante-module.js.map