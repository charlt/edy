(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~docente-docente-module"],{

/***/ "./src/app/administracion/alumno/accesos/accesos.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/accesos/accesos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <button class=\"btn btn-success pull-right\" (click)=\"generaReporte();\">Descargar reporte</button>\r\n    </div>\r\n</div>\r\n<app-accesos-persona [id_persona]=\"id_alumno\" [id_rol]=\"'2'\"></app-accesos-persona>"

/***/ }),

/***/ "./src/app/administracion/alumno/accesos/accesos.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/accesos/accesos.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9hY2Nlc29zL2FjY2Vzb3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/alumno/accesos/accesos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/administracion/alumno/accesos/accesos.component.ts ***!
  \********************************************************************/
/*! exports provided: AccesosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesosComponent", function() { return AccesosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccesosComponent = /** @class */ (function () {
    function AccesosComponent(_usuarioService, _alumnosService, route) {
        this._usuarioService = _usuarioService;
        this._alumnosService = _alumnosService;
        this.route = route;
        this.title = "Consulta de accesos";
        this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
    }
    AccesosComponent.prototype.ngOnInit = function () {
        this.id_alumno = this.route.snapshot.params['id'];
    };
    AccesosComponent.prototype.generaReporte = function () {
        var params = '?id_persona=' + this.id_alumno;
        var urlReporte = this.url + 'reportes/alumnos/accesos.php' + params;
        window.open(urlReporte, '_blank');
    };
    AccesosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accesos',
            template: __webpack_require__(/*! ./accesos.component.html */ "./src/app/administracion/alumno/accesos/accesos.component.html"),
            styles: [__webpack_require__(/*! ./accesos.component.scss */ "./src/app/administracion/alumno/accesos/accesos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AccesosComponent);
    return AccesosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/accesos/accesos.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/alumno/accesos/accesos.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccesosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesosModule", function() { return AccesosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accesos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accesos.component */ "./src/app/administracion/alumno/accesos/accesos.component.ts");
/* harmony import */ var src_app_components_accesos_persona_accesos_persona_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/accesos-persona/accesos-persona.module */ "./src/app/components/accesos-persona/accesos-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccesosModule = /** @class */ (function () {
    function AccesosModule() {
    }
    AccesosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_accesos_component__WEBPACK_IMPORTED_MODULE_2__["AccesosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_accesos_persona_accesos_persona_module__WEBPACK_IMPORTED_MODULE_3__["AccesosPersonaModule"]
            ],
            exports: [_accesos_component__WEBPACK_IMPORTED_MODULE_2__["AccesosComponent"]]
        })
    ], AccesosModule);
    return AccesosModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/alumno-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/administracion/alumno/alumno-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AlumnoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoRoutingModule", function() { return AlumnoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alumno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alumno.component */ "./src/app/administracion/alumno/alumno.component.ts");
/* harmony import */ var _alumno_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alumno/consulta/consulta.component */ "./src/app/administracion/alumno/consulta/consulta.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/alumno/form/form.component.ts");
/* harmony import */ var src_app_learning_expediente_expediente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/learning/expediente/expediente.component */ "./src/app/learning/expediente/expediente.component.ts");
/* harmony import */ var _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accesos/accesos.component */ "./src/app/administracion/alumno/accesos/accesos.component.ts");
/* harmony import */ var _tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tickets-alumno/tickets-alumno.component */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts");
/* harmony import */ var _consulta_tickets_alumno_consulta_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consulta-tickets-alumno/consulta-tickets-alumno.component */ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.ts");
/* harmony import */ var _notas_notas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notas/notas.component */ "./src/app/administracion/alumno/notas/notas.component.ts");
/* harmony import */ var _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pendientes/pendientes.component */ "./src/app/administracion/alumno/pendientes/pendientes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _alumno_component__WEBPACK_IMPORTED_MODULE_2__["AlumnoComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _alumno_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevo', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'expediente/:id', component: src_app_learning_expediente_expediente_component__WEBPACK_IMPORTED_MODULE_5__["ExpedienteComponent"] },
            { path: 'accesos/:id', component: _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_6__["AccesosComponent"] },
            { path: 'ticket/:id', component: _tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_7__["TicketsAlumnoComponent"] },
            { path: 'ticket-expediente/:id', component: _tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_7__["TicketsAlumnoComponent"] },
            { path: 'consulta-ticket/:id', component: _consulta_tickets_alumno_consulta_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_8__["ConsultaTicketsAlumnoComponent"] },
            { path: 'notas/:id', component: _notas_notas_component__WEBPACK_IMPORTED_MODULE_9__["NotasComponent"] },
            { path: 'dashboard/:id', loadChildren: 'src/app/administracion/alumno/dashboard/dashboard.module#DashboardModule' },
            { path: 'materias/:id', loadChildren: './materias-alumnos/materias-alumnos.module#MateriasAlumnosModule' },
            { path: 'historial/:id', loadChildren: 'src/app/administracion/alumno/historial/historial.module#HistorialModule' },
            { path: 'carrera/:id', loadChildren: './carrera/carrera.module#CarreraModule' },
            { path: 'solicitud/:id', loadChildren: 'src/app/inscripcion/solicitud/solicitud.module#SolicitudModule' },
            { path: 'avance/:id', loadChildren: 'src/app/materia/avance/avance.module#AvanceModule' },
            { path: 'pendientes', component: _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_10__["PendientesComponent"] }
        ]
    }
];
var AlumnoRoutingModule = /** @class */ (function () {
    function AlumnoRoutingModule() {
    }
    AlumnoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AlumnoRoutingModule);
    return AlumnoRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/alumno.component.html":
/*!*************************************************************!*\
  !*** ./src/app/administracion/alumno/alumno.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/alumno.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/administracion/alumno/alumno.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFHRDtFQUNJLFdBQVU7RUFDViw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGdCQUFlO0VBR2Ysb0RBQWdELEVBQ25EOztBQUVEO0VBQ0ksMEJBMUJrQjtFQTJCbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUEvQmtCLEVBZ0NyQjs7QUFFRDtFQUNJLGVBbkNrQixFQW9DckI7O0FBQ0Q7RUFDSSwwQkF0Q2tCO0VBdUNsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQThCO0VBQzlCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9hbHVtbm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/alumno/alumno.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/administracion/alumno/alumno.component.ts ***!
  \***********************************************************/
/*! exports provided: AlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoComponent", function() { return AlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlumnoComponent = /** @class */ (function () {
    function AlumnoComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Alumno";
        this._usuarioService.pushBreadcum(this.title, '/admin/alumno', 1);
    }
    AlumnoComponent.prototype.ngOnInit = function () {
    };
    AlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alumno',
            template: __webpack_require__(/*! ./alumno.component.html */ "./src/app/administracion/alumno/alumno.component.html"),
            styles: [__webpack_require__(/*! ./alumno.component.scss */ "./src/app/administracion/alumno/alumno.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AlumnoComponent);
    return AlumnoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/alumno.module.ts":
/*!********************************************************!*\
  !*** ./src/app/administracion/alumno/alumno.module.ts ***!
  \********************************************************/
/*! exports provided: AlumnoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoModule", function() { return AlumnoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alumno-routing.module */ "./src/app/administracion/alumno/alumno-routing.module.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/alumno/consulta/consulta.component.ts");
/* harmony import */ var _alumno_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alumno.component */ "./src/app/administracion/alumno/alumno.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/buscadorPersona/buscador-persona.module */ "./src/app/components/buscadorPersona/buscador-persona.module.ts");
/* harmony import */ var src_app_components_persona_persona_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/persona/persona.module */ "./src/app/components/persona/persona.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/alumno/form/form.component.ts");
/* harmony import */ var src_app_learning_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/learning/expediente/expediente.module */ "./src/app/learning/expediente/expediente.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _consulta_tickets_alumno_consulta_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./consulta-tickets-alumno/consulta-tickets-alumno.component */ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.ts");
/* harmony import */ var _historial_historial_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./historial/historial.module */ "./src/app/administracion/alumno/historial/historial.module.ts");
/* harmony import */ var _tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tickets-alumno/tickets-alumno.module */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.module.ts");
/* harmony import */ var _notas_notas_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notas/notas.module */ "./src/app/administracion/alumno/notas/notas.module.ts");
/* harmony import */ var _accesos_accesos_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./accesos/accesos.module */ "./src/app/administracion/alumno/accesos/accesos.module.ts");
/* harmony import */ var _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pendientes/pendientes.component */ "./src/app/administracion/alumno/pendientes/pendientes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { AccesosComponent } from './accesos/accesos.component';

// import { AccesosPersonaModule } from 'src/app/components/accesos-persona/accesos-persona.module';



// import { NotasComponent } from './notas/notas.component';



//import { MatStepperModule } from '@angular/material';
var AlumnoModule = /** @class */ (function () {
    function AlumnoModule() {
    }
    AlumnoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"], _alumno_component__WEBPACK_IMPORTED_MODULE_4__["AlumnoComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"], _consulta_tickets_alumno_consulta_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_15__["ConsultaTicketsAlumnoComponent"], _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_20__["PendientesComponent"]],
            imports: [
                //CdkStepperModule, 
                //MatStepperModule,                       
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_7__["BuscadorPersonaModule"],
                src_app_components_persona_persona_module__WEBPACK_IMPORTED_MODULE_8__["PersonaModule"],
                _alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlumnoRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_11__["ConsultaAsignaturaModule"],
                src_app_learning_expediente_expediente_module__WEBPACK_IMPORTED_MODULE_13__["ExpedienteModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_14__["EncabezadoPersonaModule"],
                // AccesosPersonaModule,
                _historial_historial_module__WEBPACK_IMPORTED_MODULE_16__["HistorialModule"],
                _tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_17__["TicketsAlumnoModule"],
                _notas_notas_module__WEBPACK_IMPORTED_MODULE_18__["NotasModule"],
                _accesos_accesos_module__WEBPACK_IMPORTED_MODULE_19__["AccesosModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabsetModule"]
            ]
        })
    ], AlumnoModule);
    return AlumnoModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Notificaciones y tickets</h4>\r\n    <app-encabezado-persona [idPersona]=\"idPersona\" [idRol]=\"'2'\"></app-encabezado-persona>\r\n    <button class=\"btn btn-success\" [routerLink]=\"['../../ticket/'+ idPersona]\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Nueva notificación</button><br><br>\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>Asunto</th>\r\n          <th>Descripción</th>\r\n          <th>Fecha envío</th>\r\n          <th>Tipo de ticket</th>\r\n          <th>Estatus del ticket</th>\r\n          <th>Eliminar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let ticket of tickets; let i = index;\">\r\n          <td>{{ticket.asunto_ticket}}</td>\r\n          <td>{{ticket.descripcion_ticket}}</td>\r\n          <td>{{ticket.fecha_creacion | date: \"dd/MM/yyyy\"}} {{ticket.fecha_creacion | date: \"shortTime\"}}</td>\r\n          <td>{{ticket.tipo_ticket}}</td>\r\n          <td>{{ticket.estatus_ticket}}</td>\r\n          <td class=\"text-center\"><i (click)=\"eliminaTicket(ticket, i)\" class=\"fa fa-minus-square fa-2x _hover text-danger\" aria-hidden=\"true\"></i></td>\r\n        </tr>\r\n        <tr *ngIf=\"!tickets\">\r\n          <td colspan=\"7\" class=\"text-center\">No se encontraron tickets</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NvbnN1bHRhLXRpY2tldHMtYWx1bW5vL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxhbHVtbm9cXGNvbnN1bHRhLXRpY2tldHMtYWx1bW5vXFxjb25zdWx0YS10aWNrZXRzLWFsdW1uby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NvbnN1bHRhLXRpY2tldHMtYWx1bW5vL2NvbnN1bHRhLXRpY2tldHMtYWx1bW5vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLl9ob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ConsultaTicketsAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaTicketsAlumnoComponent", function() { return ConsultaTicketsAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var _tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tickets/servicios/tickets.service */ "./src/app/administracion/tickets/servicios/tickets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultaTicketsAlumnoComponent = /** @class */ (function () {
    function ConsultaTicketsAlumnoComponent(route, _alumnosService, _ticketService) {
        this.route = route;
        this._alumnosService = _alumnosService;
        this._ticketService = _ticketService;
    }
    ConsultaTicketsAlumnoComponent.prototype.ngOnInit = function () {
        this.idPersona = this.route.snapshot.params['id'];
        this.consultaTickets();
    };
    ConsultaTicketsAlumnoComponent.prototype.consultaTickets = function () {
        var _this = this;
        this._alumnosService.consultaTicketAlumno(this.idPersona, 2).subscribe(function (response) {
            if (response && response['status']) {
                _this.tickets = response['tickets'];
                _this.tickets.forEach(function (_ticket) {
                    _ticket.fecha_creacion = new Date((_ticket.fecha_creacion) * 1000);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaTicketsAlumnoComponent.prototype.eliminaTicket = function (ticket, index) {
        alertify.confirm('Eliminar ticket', "\u00BFDeseas eliminar el ticket con asunto: \n      " + ticket.asunto_ticket + "?", function () {
            var _this = this;
            this._ticketService.eliminarTicket(ticket.ticket_id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.tickets.splice(index, 1);
                    if (_this.tickets.length == 0)
                        _this.tickets = undefined;
                    alertify.success(response['msg']).dismissOthers();
                }
                else {
                    alertify.error(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    ConsultaTicketsAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-tickets-alumno',
            template: __webpack_require__(/*! ./consulta-tickets-alumno.component.html */ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.html"),
            styles: [__webpack_require__(/*! ./consulta-tickets-alumno.component.scss */ "./src/app/administracion/alumno/consulta-tickets-alumno/consulta-tickets-alumno.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoService"],
            _tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"]])
    ], ConsultaTicketsAlumnoComponent);
    return ConsultaTicketsAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/consulta/consulta.component.html":
/*!************************************************************************!*\
  !*** ./src/app/administracion/alumno/consulta/consulta.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-10\">\r\n    <h4>Alumnos</h4><br>\r\n    <button class=\" btn btn-success\" (click)=\"setSelectedRol()\" [routerLink]=\"['../../usuario/nuevo']\">Agregar alumno</button>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <div class=\"btngroup pull-right\" role=\"group\" aria-label=\"Basic example\">\r\n        <a [routerLink]=\"['../pendientes']\" type=\"button\" class=\"btn btn-outline-primary\" >\r\n          <h4><i class=\"fa fa-list-ul\"></i></h4>\r\n          <p><small>Pendientes de alumnos</small></p>\r\n        </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    \r\n    <div class=\"input-group mt-2 mb-3\" *ngIf=\"tipoForm != 5\">\r\n      <br>\r\n      <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"filtroForm\" (ngSubmit)=\"busquedaFiltro()\" class=\"row mt-2 mb-3\" *ngIf=\"tipoForm == 5 && filtroForm\">\r\n      <div class=\"col-3\" *ngFor=\"let filtro of Filtros; let index = i;\">\r\n        <div class=\"form-group\">\r\n          <label>{{filtro.label}}</label>\r\n          <select [formControlName]=\"filtro.name\" class=\"form-control\" [id]=\"filtro.name\">\r\n            <option value=\"\" disabled hidden selected>Selecciona una opción</option>\r\n            <option value=\"0\">Ninguno</option>\r\n            <option [value]=\"opcion[filtro.name]\" *ngFor=\"let opcion of filtro.values\">{{opcion[filtro.option_label]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\">\r\n        <button class=\"btn btn-primary pull-right\">Buscar alumnos</button>\r\n      </div>\r\n    </form>    \r\n    <!-- 1 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\" (click)=\"cambiaTipoBusqueda(1)\">\r\n      <input [(ngModel)]=\"tipoForm\" [value]=\"1\" type=\"radio\" id=\"coincidencias\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"coincidencias\">Búsqueda por coincidencias</label>\r\n    </div>\r\n    <!-- 2 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\" (click)=\"cambiaTipoBusqueda(2)\">\r\n      <input [(ngModel)]=\"tipoForm\"  [value]=\"2\" type=\"radio\" id=\"curp\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"curp\">Búsqueda por CURP</label>\r\n    </div>\r\n    <!-- 3 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\" (click)=\"cambiaTipoBusqueda(3)\">\r\n      <input [(ngModel)]=\"tipoForm\" [value]=\"3\" type=\"radio\" id=\"correo\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"correo\">Búsqueda por correo</label>\r\n    </div>\r\n    <!-- 4 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\" (click)=\"cambiaTipoBusqueda(4)\">\r\n      <input [(ngModel)]=\"tipoForm\"  [value]=\"4\" type=\"radio\" id=\"clave\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"clave\">Búsqueda por matrícula</label>\r\n    </div>\r\n    <!-- 5 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input (click)=\"setFiltro()\" [(ngModel)]=\"tipoForm\" [value]=\"5\" type=\"radio\" id=\"filtro\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"filtro\">Búsqueda por filtro</label>\r\n    </div>\r\n\r\n    <p><strong style=\"font-size: small;\">Total de registros: {{totalItems}}</strong></p>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Matrícula de alumno</th>\r\n            <th>Nombre</th>\r\n            <th>Correo</th>\r\n            <th>Carrera</th>\r\n            <th>Grado</th>\r\n            <!-- <th>Expediente</th> -->\r\n            <th>Enviar notificación</th>\r\n            <th>Dashboard</th>\r\n            <th>Situación</th>\r\n            <th>Plataforma</th>\r\n            <!--th>Eliminar</th-->\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"Alumnos\">\r\n          <tr *ngFor=\"let alumno of Alumnos; let i = index\">\r\n            <td *ngIf=\"alumno.clave_alumno && !alumno.matricula\">\r\n              {{alumno.clave_alumno}}\r\n            </td>\r\n            <td *ngIf=\"alumno.matricula && !alumno.clave_alumno\">{{alumno.matricula}}</td>\r\n            <td><a [routerLink]=\"['../dashboard/'+alumno.persona_id]\">{{alumno.primer_apellido}} {{alumno.segundo_apellido}} {{alumno.nombre}}</a></td>\r\n            <td>{{alumno.email}}</td>\r\n            <td *ngIf=\"alumno.carrera\" class=\"text-center\">{{alumno.carrera}} <i class=\"fa fa-pencil  _hover text-primary\" aria-hidden=\"true\" [routerLink]=\"['../carrera/'+alumno.persona_id]\"></i></td>\r\n            <td *ngIf=\"!alumno.carrera\" class=\"text-center\"><div class=\"alert alert-danger\" role=\"alert\">Sin carrera asignada <i class=\"fa fa-pencil  _hover text-primary\" aria-hidden=\"true\" [routerLink]=\"['../carrera/'+alumno.persona_id]\"></i></div></td>\r\n            <td class=\"text-center\">\r\n              <p> {{alumno.orden_jerarquico}}</p>\r\n            </td>\r\n            <!-- <td class=\"text-center\"><i class=\"fa fa-file-text-o _hover fa-2x\" aria-hidden=\"true\" [routerLink]=\"['../expediente/' + alumno.persona_id]\"></i></td> -->\r\n            \r\n              \r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-primary\" [routerLink]=\"['../ticket/'+alumno.persona_id]\"><i class=\"fa fa-ticket\" aria-hidden=\"true\"></i></button>\r\n            </td>\r\n            <td class=\"text-center\"><a [routerLink]=\"['../dashboard/'+alumno.persona_id]\"><i class=\"fa fa-dashboard  fa-2x \"></i></a></td>\r\n            <td [ngClass]=\"[alumno.situacion_alumno_id == '1' ? 'alert-success':'',alumno.situacion_alumno_id == '2' || alumno.situacion_alumno_id == '3' || alumno.situacion_alumno_id == '5'  ? 'alert-danger':'',alumno.situacion_alumno_id == '4' ? 'alert-warning':'']\" class=\"text-center\">\r\n              <i class=\"fa fa-user-o _hover fa-2x\" aria-hidden=\"true\" (click)=\"open(Situacion, alumno.persona_id, 1)\"></i>\r\n              <p> {{alumno.situacion_alumno}}</p>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-warning\" (click)=\"verPlataforma(alumno)\">\r\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n\r\n            <!--td class=\"text-center\"><i class=\"fa fa-minus-square fa-2x _hover text-danger\" aria-hidden=\"true\" (click)=\"eliminar(alumno.persona_id, i)\"></i></td-->\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"!Alumnos && !loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">No se encontraron alumnos</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">\r\n              <div class=\"mt-2 mb-2\">\r\n                <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n                <h5>\"Cargando información, por favor espere.\"</h5>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" \r\n          [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #Situacion let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Situación del alumno</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <form [formGroup]=\"situacionForm\" (ngSubmit)=\"enviaInformacion()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Tipo de situación</label>\r\n          <select formControlName=\"situacion\" class=\"form-control\"  >\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"situacion.situacion_alumno_id\" *ngFor=\"let situacion of catSituacion\">{{situacion.situacion_alumno_descripcion}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"situacionForm.get('observacion')\">\r\n          <label class=\"control-label\">Observación</label>\r\n          <textarea class=\"form-control\" formControlName=\"observacion\" rows=\"3\"></textarea>\r\n        </div>\r\n        <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-success pull-right mt-3\" [disabled]=\"situacionForm.invalid\">Guardar información</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/alumno/consulta/consulta.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/administracion/alumno/consulta/consulta.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n._hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NvbnN1bHRhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NvbnN1bHRhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxhbHVtbm9cXGNvbnN1bHRhXFxjb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNmRDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5faG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/alumno/consulta/consulta.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/consulta/consulta.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
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
    function ConsultaComponent(_usuarioService, _catalogoService, translate, _alumnosService, _modalService, formBuilder, router, _plataformaService) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.translate = translate;
        this._alumnosService = _alumnosService;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this._plataformaService = _plataformaService;
        this.totalItems = 100;
        this.page = 1;
        this.itemsPerPage = 50;
        this.previousPage = 1;
        // loadPage;
        this.loading = false;
        this.Filtros = [
            { label: 'Plan de estudios', service: 'consultaPlanEstudios', name: 'plan_estudio_id',
                option_label: 'plan_estudio', response: 'planEstudio', values: [] },
            { label: 'Grado', name: 'orden_jerarquico_id', option_label: 'orden_jerarquico_descripcion', values: [] },
            { label: 'Campus', service: 'consultaCampus', name: 'campus_id',
                option_label: 'campus', response: 'campus', values: [] },
            { label: 'Situación de alumno', service: 'getSituacion', name: 'situacion_alumno_id',
                option_label: 'situacion_alumno_descripcion', response: 'ciclo_estatus', values: [] }
        ];
        this.suscripcion = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.title = "Consulta de alumnos";
        this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.idRol = this._usuarioService.getRol().rol_id;
        var identity = this._usuarioService.getIdentity();
        var persona_id = localStorage.getItem('id_persona');
        localStorage.removeItem('id_persona');
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        // busqueda de datos por input  
        this.searchField.valueChanges.subscribe(function (data) {
            _this.textoBusqueda = data;
            if (_this.totalItems == 1) {
                _this.consultaTotal();
                _this.itemsPerPage = 50;
            }
            _this.busquedaAlumno(data);
        });
        if (persona_id) {
            this.consultaEspAlumno(persona_id);
        }
        else {
            this.consultaTotal();
        }
        this.planOrdenForm = this.formBuilder.group({});
    };
    ConsultaComponent.prototype.cambiaTipoBusqueda = function (value) {
        if (this.tipoForm != value && this.textoBusqueda) {
            this.tipoForm = value;
            this.consultaAlumno(this.textoBusqueda, 0);
        }
    };
    ConsultaComponent.prototype.consultaTotal = function () {
        var _this = this;
        this._alumnosService.getTotalAlumnos(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.totalItems = response['total'];
                _this.busquedaAlumno('', 1);
                _this.tipoForm = 1;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consultaEspAlumno = function (id_persona) {
        var _this = this;
        this.totalItems = 1;
        this.Alumnos = [];
        this._alumnosService.consultaEspecifica(id_persona, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                var alumno = response['alumno'];
                _this.Alumnos.push(alumno);
            }
            else
                _this.Alumnos = null;
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id_alumno, index) {
        alertify.confirm(this.translate.instant('MsgEraseStudent'), function () {
            var _this = this;
            this._alumnosService.elimina(id_alumno, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Alumnos.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    ConsultaComponent.prototype.busquedaAlumno = function (input, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.Alumnos = null;
        this.loading = true;
        if (id == 0) {
            if (!this.searchChangeObserver) {
                rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
                    _this.searchChangeObserver = observer;
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe(function (busqueda) {
                    var inicio = (_this.page - 1) * _this.itemsPerPage;
                    if (busqueda === '' || busqueda == null)
                        _this.consultaAlumno(busqueda, inicio);
                    else
                        _this.consultaAlumno(busqueda, 0);
                });
            }
            this.searchChangeObserver.next(input);
        }
        else {
            var inicio = (this.page - 1) * this.itemsPerPage;
            this.consultaAlumno('', inicio);
        }
    };
    ConsultaComponent.prototype.consultaAlumno = function (busqueda, inicio) {
        var _this = this;
        this._alumnosService.consultaAlumno(this.jwt, this.idRol, busqueda, inicio, this.itemsPerPage, this.tipoForm).subscribe(function (response) {
            if (response && response['status']) {
                _this.Alumnos = response['usuario'];
                console.log(_this.Alumnos);
            }
            else
                _this.Alumnos = null;
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.open = function (content, id_alumno, tipo) {
        this.idAlumno = id_alumno;
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            ariaLabelledBy: 'modal-basic-title'
        };
        if (tipo == 0) {
            this._modalService.open(content, ngbModalOptions);
        }
        else if (tipo == 1) {
            ngbModalOptions['size'] = 'lg';
            this.situacionAlumno(content, ngbModalOptions);
        }
    };
    ConsultaComponent.prototype.cambiaOferta = function () {
        var _this = this;
        var idPlanOrden = this.planOrdenForm.get('plan_orden_id').value;
        this._alumnosService.cambiaOferta(this.jwt, idPlanOrden, this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                document.getElementById('_modal').click();
                var inicio = (_this.page - 1) * _this.itemsPerPage;
                _this.consultaAlumno('', inicio);
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.busquedaAlumno('', 1);
        }
    };
    ConsultaComponent.prototype.situacionAlumno = function (content, options) {
        var _this = this;
        this.situacionForm = this.formBuilder.group({
            situacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            // observacion: ['', Validators.required]
        });
        this.situacionForm.get('situacion').valueChanges.subscribe(function (value) {
            if (value == 1 || value == 4) {
                if (_this.situacionForm.get('observacion')) {
                    _this.situacionForm.removeControl('observacion');
                }
            }
            else {
                if (!_this.situacionForm.get('observacion')) {
                    _this.situacionForm.addControl('observacion', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required));
                }
            }
        });
        if (!this.catSituacion) {
            this._alumnosService.getSituacion(this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.catSituacion = response['ciclo_estatus'];
                    _this._modalService.open(content, options);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._modalService.open(content, options);
        }
    };
    ConsultaComponent.prototype.enviaInformacion = function () {
        var _this = this;
        this._alumnosService.cambiaSituacion(this.situacionForm.value, this.idAlumno, 1).subscribe(function (response) {
            if (response && response['status']) {
                var index = _this.Alumnos.map(function (a) { return a.persona_id; }).indexOf(_this.idAlumno);
                var situacion = _this.catSituacion.find(function (s) { return s.situacion_alumno_id == _this.situacionForm.value.situacion; });
                _this.Alumnos[index].estatus = _this.situacionForm.value.situacion;
                _this.Alumnos[index].situacion_alumno = situacion.situacion_alumno_descripcion;
                _this.Alumnos[index].situacion_alumno_id = situacion.situacion_alumno_id;
                alertify.success(response['msg']).dismissOthers();
                _this._modalService.dismissAll();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.setSelectedRol = function () {
        if (sessionStorage.getItem('selectedRol'))
            sessionStorage.removeItem('selectedRol');
        sessionStorage.setItem('selectedRol', 'Alumno');
    };
    ConsultaComponent.prototype.verPlataforma = function (alumno) {
        var _this = this;
        this._plataformaService.consultaJWT(alumno.matricula, 2).subscribe(function (response) {
            if (response && response['status']) {
                sessionStorage.setItem('tmp_jwt', _this.jwt);
                sessionStorage.setItem('tmp_identity', JSON.stringify(_this._usuarioService.getIdentity()));
                localStorage.removeItem('jwt');
                localStorage.removeItem('identity');
                localStorage.setItem('jwt', response['jwt']);
                localStorage.setItem('identity', JSON.stringify(response['user']));
                _this.router.navigate(['/learning/home']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.setFiltro = function () {
        var _this = this;
        if (this.Filtros[0].values.length == 0) {
            this.Filtros.forEach(function (filtro) {
                if (filtro.service) {
                    var service = filtro.name == 'situacion_alumno_id' ? '_alumnosService' : '_catalogoService';
                    _this[service][filtro.service](_this.jwt).subscribe(function (response) {
                        if (response && response['status']) {
                            filtro['values'] = response[filtro.response];
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            });
        }
        this.filtroForm = this.formBuilder.group({
            plan_estudio_id: [''],
            orden_jerarquico_id: [''],
            campus_id: [''],
            situacion_alumno_id: ['']
        });
        this.suscripcion = this.filtroForm.get('plan_estudio_id').valueChanges.subscribe(function (value) {
            _this.filtroForm.get('orden_jerarquico_id').setValue("", { emitEvent: false });
            if (value != 0 && value != '') {
                _this._catalogoService.consultaGrado(value).subscribe(function (response) {
                    if (response && response['status']) {
                        var index = _this.Filtros.findIndex(function (f) { return f.name == 'orden_jerarquico_id'; });
                        _this.Filtros[index]['values'] = response['ordenJerarquico'];
                    }
                    console.log(_this.Filtros);
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    ConsultaComponent.prototype.busquedaFiltro = function () {
        var _this = this;
        var values = Object.entries(this.filtroForm.value);
        var form = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var _a = values_1[_i], key = _a[0], value = _a[1];
            if (value != "" && value != 0) {
                var obj = { key: key, value: value };
                form.push(obj);
            }
        }
        if (form.length > 0) {
            this.Alumnos = null;
            this.loading = true;
            this._alumnosService.busquedaFiltro(form, 0, this.itemsPerPage).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.Alumnos = response['usuario'];
                }
                else {
                    _this.Alumnos = null;
                }
                _this.loading = false;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error('Selecciona por lo menos un filtro').dismissOthers();
        }
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/alumno/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/alumno/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_4__["AlumnoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_10__["PlataformaService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/form/form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/administracion/alumno/form/form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">  \r\n  <div class=\"col-12 col-xl-12 col-lg-12\">\r\n    <h4>{{title}}</h4><br>\r\n    <form *ngIf=\"flag\" [formGroup]=\"alumnoForm\" (ngSubmit)=\"sendInfo()\" class=\"row\">\r\n      <div class=\"form-group mt-2\" [className]=\"Sizes[item['size']]\" *ngFor=\"let item of FormData.first; let i = index\">\r\n        <div *ngIf=\"item['type'] != 'select' && item['type'] != 'radio' && item['type'] != 'checkbox'\">\r\n          <label class=\"control-label\"><span *ngIf=\"item['required']\">* </span>{{item['label']}}</label>\r\n          <input [formControlName]=\"item['control']\" [className]=\"item['class']\" [type]=\"item['type']\"\r\n            [attr.placeholder]=\"item['label']\">\r\n          <span class=\"invalidText\" *ngIf=\"c[item.control].invalid && c[item.control].touched\">\r\n            {{ item['error'] | translate}}\r\n          </span>   \r\n        </div>    \r\n        <div *ngIf=\"item['type'] == 'select'\"> \r\n          <label class=\"control-label\"><span *ngIf=\"item['required']\">* </span>{{item['label']}}</label>\r\n          <select [formControlName]=\"item['control']\" [className]=\"item['class']\" name=\"cat_situacion\" id=\"cat_situacion\">\r\n            <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n            <option *ngFor=\"let situacion of Situacion; let i = index\" [value]=\"situacion['situacion_alumno_id']\">\r\n              {{situacion['situacion_alumno_descripcion']}}\r\n            </option>\r\n          </select>\r\n        </div> \r\n      </div> \r\n      <div class=\"col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12\">\r\n        <app-consulta-asignatura [parentForm]=\"alumnoForm\" [nivel]=\"2\" [tipo]=\"'select_alumno'\"></app-consulta-asignatura>\r\n      </div>\r\n      <div class=\"form-group mt-2\" [className]=\"item['size']\" *ngFor=\"let item of FormData.last; let i = index\">\r\n        <div *ngIf=\"item['type'] == 'checkbox'\" class=\"custom-control custom-checkbox ml-3\">\r\n          <input [formControlName]=\"item['control']\" type=\"checkbox\" class=\"custom-control-input t-3\" id=\"correo\" name=\"correo\">\r\n          <label class=\"custom-control-label\" for=\"correo\">{{item['label']}}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-3\">\r\n        <button class=\"btn btn-success pull-right\" type=\"submit\" [disabled]=\"alumnoForm.invalid\">Guardar información</button>\r\n      </div>             \r\n    </form> \r\n  </div> \r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/form/form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/administracion/alumno/form/form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.color {\n  height: 38px;\n  width: 100%;\n  border-radius: 5px;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2Zvcm0vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9hbHVtbm8vZm9ybS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9mb3JtL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxhbHVtbm9cXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDcEREO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2REO0VBQ0ksYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsOEJBQTZCLEVBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5jb2xvciB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/alumno/form/form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/administracion/alumno/form/form.component.ts ***!
  \**************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, _usuarioService, _alumnoService, router) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._alumnoService = _alumnoService;
        this.router = router;
        this.Sizes = [
            'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
            'col-xl-3 col-lg-3 col-md-4 col-sm-10 col-9',
            'col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3'
        ];
        this.FormData = {
            first: [
                { label: 'Nombre', control: 'nombre', error: '', type: 'text', class: 'form-control', size: 0, required: true },
                { label: 'Primer apellido', control: 'primer_apellido', error: '', type: 'text', class: 'form-control', size: 0, required: true },
                { label: 'Segundo apellido', control: 'segundo_apellido', error: '', type: 'text', class: 'form-control', size: 0, required: true },
                { label: 'CURP', control: 'curp', error: '', type: 'text', class: 'form-control', size: 0, required: true },
                { label: 'Correo electrónico', control: 'email', error: '', type: 'email', class: 'form-control', size: 0, required: true },
                { label: 'Celular', control: 'celular', error: '', type: 'number', class: 'form-control', size: 0, required: false },
                { label: 'RFC', control: 'rfc', error: '', type: 'text', class: 'form-control', size: 0, required: false },
                { label: 'Fecha de nacimiento', control: 'fecha_nacimiento', error: '', type: 'date', class: 'form-control', size: 0, required: false },
                { label: 'Matricula', control: 'matricula', error: '', type: 'text', class: 'form-control bg-white', size: 1, required: false },
                { label: 'Color', control: 'color', error: '', type: 'color', class: 'color', size: 2, required: false },
                { label: 'Situación del alumno', control: 'situacion', error: '', type: 'select', class: 'form-control', size: 0, required: true }
            ],
            last: [
                { label: 'Enviar correo con matrícula', control: 'envia_correo', error: '', type: 'checkbox', class: '', size: 0, required: true }
            ]
        };
        this.flag = false;
        this.matricula = '';
        this.title = "Agregar nuevo alumno";
        this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._alumnoService.getMatricula(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.matricula = response['matricula'];
                _this.getCatSituacion();
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(FormComponent.prototype, "c", {
        get: function () { return this.alumnoForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.getCatSituacion = function () {
        var _this = this;
        this._alumnoService.getSituacion(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.Situacion = response['ciclo_estatus'];
                _this.setData();
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.setData = function () {
        this.alumnoForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            primer_apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            segundo_apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            curp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            celular: '',
            rfc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)],
            fecha_nacimiento: '',
            color: Object(randomcolor__WEBPACK_IMPORTED_MODULE_2__["randomColor"])(),
            matricula: { value: this.matricula, disabled: true },
            situacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            envia_correo: false,
        });
        this.flag = true;
    };
    FormComponent.prototype.sendInfo = function () {
        var _this = this;
        this.alumnoForm.setErrors({ incorrect: true });
        var Form = Object.entries(this.alumnoForm.value);
        this._alumnoService.creaAlumno(this.jwt, Form).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
                ;
                _this.router.navigate(['/admin/alumno/consulta']);
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/alumno/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/alumno/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/notas/notas.component.html":
/*!******************************************************************!*\
  !*** ./src/app/administracion/alumno/notas/notas.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Notas del alumno</h4>\r\n    <table class=\"table table-bordered table-striped\">\r\n      <tr>\r\n        <th class=\"text-center\">#</th>\r\n        <th>Docente</th>\r\n        <th>Nota</th>\r\n        <th>Fecha de creación</th>\r\n        <th>Asignatura</th>\r\n      </tr>\r\n      <tr *ngFor=\"let nota of notas; let i = index\">\r\n        <td class=\"text-center\">{{i+1}}</td>\r\n        <td>{{nota.nombre}} {{nota.primer_apellido}} {{nota.segundo_apellido}}</td>\r\n        <td [innerHTML]=\"nota.texto\"></td>\r\n        <td>{{nota.fecha_creacion | date: \"dd/MM/yyyy\"}} {{nota.fecha_creacion | date: \"shortTime\"}}</td>\r\n        <td>{{nota.asignatura}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/notas/notas.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/administracion/alumno/notas/notas.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9ub3Rhcy9ub3Rhcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/alumno/notas/notas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/administracion/alumno/notas/notas.component.ts ***!
  \****************************************************************/
/*! exports provided: NotasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasComponent", function() { return NotasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotasComponent = /** @class */ (function () {
    function NotasComponent(_usuarioService, _alumnoService, router) {
        this._usuarioService = _usuarioService;
        this._alumnoService = _alumnoService;
        this.router = router;
        this.title = "Notas del alumno";
        this._usuarioService.pushBreadcum(this.title, '', 2);
    }
    NotasComponent.prototype.ngOnInit = function () {
        this.id_alumno = this.router.snapshot.params['id'];
        this.consultaNotas();
    };
    NotasComponent.prototype.consultaNotas = function () {
        var _this = this;
        this._alumnoService.consultaEspNotas(this.id_alumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.notas = response['notas'];
                _this.notas.forEach(function (nota) {
                    nota.fecha_creacion = new Date((nota.fecha_creacion) * 1000);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    NotasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notas',
            template: __webpack_require__(/*! ./notas.component.html */ "./src/app/administracion/alumno/notas/notas.component.html"),
            styles: [__webpack_require__(/*! ./notas.component.scss */ "./src/app/administracion/alumno/notas/notas.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NotasComponent);
    return NotasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/notas/notas.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/administracion/alumno/notas/notas.module.ts ***!
  \*************************************************************/
/*! exports provided: NotasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasModule", function() { return NotasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas.component */ "./src/app/administracion/alumno/notas/notas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasModule = /** @class */ (function () {
    function NotasModule() {
    }
    NotasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notas_component__WEBPACK_IMPORTED_MODULE_2__["NotasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_notas_component__WEBPACK_IMPORTED_MODULE_2__["NotasComponent"]]
        })
    ], NotasModule);
    return NotasModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/pendientes/pendientes.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/alumno/pendientes/pendientes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-12\" *ngIf=\"Alumnos\">\r\n    <ngb-tabset>\r\n      <ngb-tab title=\"{{pestania.title}}\" *ngFor=\"let pestania of pestanias; let i = index;\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"container mt-3\">\r\n            <!-- <h5>{{labelsAbiertas[i]}}</h5> -->\r\n            <div class=\"table-responsive mt-3\">\r\n              <table class=\"table table-bordered\">\r\n                <thead class=\"bg-light\">\r\n                  <tr>\r\n                    <th class=\"alert-warning\" colspan=\"6\">\r\n                      {{pestania.description}}\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Nombre del alumno</th>\r\n                    <th>Clave del alumno</th>\r\n                    <th *ngIf=\"pestania.key == 'alumnos_sin_plan'\">Carrera</th>\r\n                    <th *ngIf=\"pestania.key == 'alumnos_asignaturas_duplicadas'\">Asignaturas</th>\r\n                    <th *ngIf=\"pestania.key == 'alumnos_materias_incompletas'\">Total de asignatura</th>\r\n                    <th>Dashboard</th>\r\n                    <th>Plataforma</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let alumno of Alumnos[pestania.key]; let j = index;\">\r\n                    <td>{{j+1}}</td>\r\n                    <td>{{alumno.primer_apellido}} {{alumno.segundo_apellido}} {{alumno.nombre}}</td>\r\n                    <td>{{alumno.clave_alumno}}</td>\r\n                    <th *ngIf=\"pestania.key == 'alumnos_sin_plan'\">\r\n                      <a [routerLink]=\"['/admin/alumno/carrera/'+alumno.alumno_id]\">+ Agregar</a>\r\n                    </th>\r\n                    <th *ngIf=\"pestania.key == 'alumnos_asignaturas_duplicadas'\">\r\n                      <a [routerLink]=\"['/admin/alumno/materias/'+alumno.alumno_id]\">{{alumno.asignatura}}</a>\r\n                    </th>\r\n                    <th *ngIf=\"pestania.key == 'alumnos_materias_incompletas'\">\r\n                      <a [routerLink]=\"['/admin/alumno/materias/'+alumno.alumno_id]\">{{alumno.activas}} / {{alumno.totales}}</a>\r\n                    </th>\r\n                    <td class=\"text-center\">\r\n                      <button class=\"btn btn-primary\" [routerLink]=\"['../dashboard/'+alumno.alumno_id]\"><i class=\"fa fa-dashboard\"></i></button>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                      <button class=\"btn btn-warning\" (click)=\"verPlataforma(alumno)\"><i class=\"fa fa-eye\"></i></button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/pendientes/pendientes.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/alumno/pendientes/pendientes.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9wZW5kaWVudGVzL3BlbmRpZW50ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/alumno/pendientes/pendientes.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/pendientes/pendientes.component.ts ***!
  \**************************************************************************/
/*! exports provided: PendientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesComponent", function() { return PendientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendientesComponent = /** @class */ (function () {
    function PendientesComponent(_usuarioService, _alumnoService, _plataformaService, router) {
        this._usuarioService = _usuarioService;
        this._alumnoService = _alumnoService;
        this._plataformaService = _plataformaService;
        this.router = router;
        this.title = 'Pendientes de alumno';
        this.pestanias = [
            { key: 'alumnos_sin_plan', title: 'Alumnos sin carrera asignada', description: 'Si un alumno no está vínculado a una carrera el cambio de ciclo se debera cambiar el grado manualmente al que sube el alumno' },
            //{key: 'alumnos_sin_grupo', title: 'Alumnos sin grupo asignado', description: 'Si un alumno no está asignado directamente a un grupo, en el cambio de ciclo se deberá asignar manualmente a sus asignaturas'},
            { key: 'alumnos_materias_incompletas', title: 'Alumnos con asignaturas faltantes', description: 'Alumnos que se encuentran en un grado especifico pero no estan cursando todas las asignaturas de su grado ' },
            { key: 'alumnos_asignaturas_duplicadas', title: 'Alumnos con asignaturas duplicadas', description: 'Alumnos con asignatura en curso cargada más de una vez' },
        ];
        this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    PendientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._alumnoService.getPendientes().subscribe(function (response) {
            if (response && response['status']) {
                _this.Alumnos = response['alumnos'];
                console.log(_this.Alumnos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    PendientesComponent.prototype.verPlataforma = function (alumno) {
        var _this = this;
        this._plataformaService.consultaJWT(alumno.clave_alumno, 2).subscribe(function (response) {
            if (response && response['status']) {
                sessionStorage.setItem('tmp_jwt', _this.jwt);
                sessionStorage.setItem('tmp_identity', JSON.stringify(_this._usuarioService.getIdentity()));
                sessionStorage.setItem('urlRedirect', '/admin/alumno/pendientes');
                localStorage.removeItem('jwt');
                localStorage.removeItem('identity');
                localStorage.setItem('jwt', response['jwt']);
                localStorage.setItem('identity', JSON.stringify(response['user']));
                _this.router.navigate(['/learning/home']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    PendientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pendientes',
            template: __webpack_require__(/*! ./pendientes.component.html */ "./src/app/administracion/alumno/pendientes/pendientes.component.html"),
            styles: [__webpack_require__(/*! ./pendientes.component.scss */ "./src/app/administracion/alumno/pendientes/pendientes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_4__["AlumnoService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_2__["PlataformaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PendientesComponent);
    return PendientesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~docente-docente-module.js.map