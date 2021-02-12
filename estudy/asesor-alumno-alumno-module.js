(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asesor-alumno-alumno-module"],{

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

/***/ "./src/app/asesor/alumno/alumno-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/asesor/alumno/alumno-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AlumnoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoRoutingModule", function() { return AlumnoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_administracion_alumno_accesos_accesos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/alumno/accesos/accesos.component */ "./src/app/administracion/alumno/accesos/accesos.component.ts");
/* harmony import */ var src_app_administracion_alumno_notas_notas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/alumno/notas/notas.component */ "./src/app/administracion/alumno/notas/notas.component.ts");
/* harmony import */ var _alumno_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alumno.component */ "./src/app/asesor/alumno/alumno.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/asesor/alumno/consulta/consulta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _alumno_component__WEBPACK_IMPORTED_MODULE_4__["AlumnoComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"] },
            { path: 'dashboard/:id', loadChildren: 'src/app/administracion/alumno/dashboard/dashboard.module#DashboardModule' },
            { path: 'accesos/:id', component: src_app_administracion_alumno_accesos_accesos_component__WEBPACK_IMPORTED_MODULE_2__["AccesosComponent"] },
            { path: 'expediente/:id', loadChildren: 'src/app/learning/expediente/expediente.module#ExpedienteModule' },
            { path: 'historial/:id', loadChildren: 'src/app/administracion/alumno/historial/historial.module#HistorialModule' },
            { path: 'notas/:id', component: src_app_administracion_alumno_notas_notas_component__WEBPACK_IMPORTED_MODULE_3__["NotasComponent"] },
            { path: 'solicitud/:id', loadChildren: 'src/app/inscripcion/solicitud/solicitud.module#SolicitudModule' },
            { path: 'avance/:id', loadChildren: 'src/app/materia/avance/avance.module#AvanceModule' }
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

/***/ "./src/app/asesor/alumno/alumno.component.html":
/*!*****************************************************!*\
  !*** ./src/app/asesor/alumno/alumno.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/asesor/alumno/alumno.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/asesor/alumno/alumno.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNlc29yL2FsdW1uby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hc2Vzb3IvYWx1bW5vL2FsdW1uby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/asesor/alumno/alumno.component.ts":
/*!***************************************************!*\
  !*** ./src/app/asesor/alumno/alumno.component.ts ***!
  \***************************************************/
/*! exports provided: AlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoComponent", function() { return AlumnoComponent; });
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





var AlumnoComponent = /** @class */ (function () {
    function AlumnoComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Mis alumnos";
        this._usuarioService.pushBreadcum(this.title, '/asesor/alumno', 1);
    }
    AlumnoComponent.prototype.ngOnInit = function () {
    };
    AlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alumno',
            template: __webpack_require__(/*! ./alumno.component.html */ "./src/app/asesor/alumno/alumno.component.html"),
            styles: [__webpack_require__(/*! ./alumno.component.scss */ "./src/app/asesor/alumno/alumno.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AlumnoComponent);
    return AlumnoComponent;
}());



/***/ }),

/***/ "./src/app/asesor/alumno/alumno.module.ts":
/*!************************************************!*\
  !*** ./src/app/asesor/alumno/alumno.module.ts ***!
  \************************************************/
/*! exports provided: AlumnoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoModule", function() { return AlumnoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alumno-routing.module */ "./src/app/asesor/alumno/alumno-routing.module.ts");
/* harmony import */ var _alumno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alumno.component */ "./src/app/asesor/alumno/alumno.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/asesor/alumno/consulta/consulta.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_administracion_alumno_notas_notas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/administracion/alumno/notas/notas.module */ "./src/app/administracion/alumno/notas/notas.module.ts");
/* harmony import */ var src_app_administracion_alumno_accesos_accesos_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/administracion/alumno/accesos/accesos.module */ "./src/app/administracion/alumno/accesos/accesos.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AlumnoModule = /** @class */ (function () {
    function AlumnoModule() {
    }
    AlumnoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_alumno_component__WEBPACK_IMPORTED_MODULE_3__["AlumnoComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlumnoRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                src_app_administracion_alumno_notas_notas_module__WEBPACK_IMPORTED_MODULE_9__["NotasModule"],
                src_app_administracion_alumno_accesos_accesos_module__WEBPACK_IMPORTED_MODULE_10__["AccesosModule"]
            ]
        })
    ], AlumnoModule);
    return AlumnoModule;
}());



/***/ }),

/***/ "./src/app/asesor/alumno/consulta/consulta.component.html":
/*!****************************************************************!*\
  !*** ./src/app/asesor/alumno/consulta/consulta.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Mis alumnos</h4><br>\r\n    <!-- <button class=\" btn btn-success\" (click)=\"setSelectedRol()\" [routerLink]=\"['../../usuario/nuevo']\">Agregar alumno</button> -->\r\n    <!--div class=\"input-group mt-2 mb-3\">\r\n      <br>\r\n      <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\" [value]=\"1\" type=\"radio\" id=\"coincidencias\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"coincidencias\">Búsqueda por coincidencias</label>\r\n    </div>\r\n    \r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\"  [value]=\"2\" type=\"radio\" id=\"curp\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"curp\">Búsqueda por CURP</label>\r\n    </div>\r\n    \r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\" [value]=\"3\" type=\"radio\" id=\"correo\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"correo\">Búsqueda por correo</label>\r\n    </div>\r\n    \r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\"  [value]=\"4\" type=\"radio\" id=\"clave\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"clave\">Búsqueda por matrícula</label>\r\n    </div-->\r\n    <!--p><strong style=\"font-size: small;\">Total de registros: {{totalItems}}</strong></p-->\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Matrícula de alumno</th>\r\n            <th>Nombre</th>\r\n            <th>Correo</th>\r\n            <th>Carrera</th>\r\n            <th>Grado</th>\r\n            <!-- <th>Expediente</th> -->\r\n            <!-- <th>Enviar notificación</th> -->\r\n            <th>Dashboard</th>\r\n            <!-- <th>Situación</th> -->\r\n            <th>Plataforma</th>\r\n            <!--th>Eliminar</th-->\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"Alumnos\">\r\n          <tr *ngFor=\"let alumno of Alumnos; let i = index\">\r\n            <td *ngIf=\"alumno.clave_alumno && !alumno.matricula\">\r\n              {{alumno.clave_alumno}}\r\n            </td>\r\n            <td *ngIf=\"alumno.matricula && !alumno.clave_alumno\">{{alumno.matricula}}</td>\r\n            <td><a [routerLink]=\"['../dashboard/'+alumno.persona_id]\">{{alumno.primer_apellido}} {{alumno.segundo_apellido}} {{alumno.nombre}}</a></td>\r\n            <td>{{alumno.email}}</td>\r\n            <td *ngIf=\"alumno.carrera\" class=\"text-center\">{{alumno.carrera}} \r\n              <!-- <i class=\"fa fa-pencil  _hover text-primary\" aria-hidden=\"true\" [routerLink]=\"['../carrera/'+alumno.persona_id]\"></i> -->\r\n            </td>\r\n            <td *ngIf=\"!alumno.carrera\" class=\"text-center\"><div class=\"alert alert-danger\" role=\"alert\">Sin carrera asignada <i class=\"fa fa-pencil  _hover text-primary\" aria-hidden=\"true\" [routerLink]=\"['../carrera/'+alumno.persona_id]\"></i></div></td>\r\n            <td class=\"text-center\">\r\n              <p> {{alumno.orden_jerarquico}}</p>\r\n            </td>\r\n            <!-- <td class=\"text-center\"><i class=\"fa fa-file-text-o _hover fa-2x\" aria-hidden=\"true\" [routerLink]=\"['../expediente/' + alumno.persona_id]\"></i></td> -->              \r\n            <!-- <td class=\"text-center\">\r\n              <button class=\"btn btn-primary\" [routerLink]=\"['../ticket/'+alumno.persona_id]\"><i class=\"fa fa-ticket\" aria-hidden=\"true\"></i></button>\r\n            </td> -->\r\n            <td class=\"text-center\"><a [routerLink]=\"['../dashboard/'+alumno.persona_id]\"><i class=\"fa fa-dashboard  fa-2x \"></i></a></td>\r\n            <!-- <td [ngClass]=\"[alumno.situacion_alumno_id == '1' ? 'alert-success':'',alumno.situacion_alumno_id == '2' || alumno.situacion_alumno_id == '3' || alumno.situacion_alumno_id == '5'  ? 'alert-danger':'',alumno.situacion_alumno_id == '4' ? 'alert-warning':'']\" class=\"text-center\">\r\n              <i class=\"fa fa-user-o _hover fa-2x\" aria-hidden=\"true\" (click)=\"open(Situacion, alumno.persona_id, 1)\"></i>\r\n              <p> {{alumno.situacion_alumno}}</p>\r\n            </td> -->\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-warning\" (click)=\"verPlataforma(alumno)\">\r\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n\r\n            <!--td class=\"text-center\"><i class=\"fa fa-minus-square fa-2x _hover text-danger\" aria-hidden=\"true\" (click)=\"eliminar(alumno.persona_id, i)\"></i></td-->\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"!Alumnos && !loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">No se encontraron alumnos</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">\r\n              <div class=\"mt-2 mb-2\">\r\n                <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n                <h5>\"Cargando información, por favor espere.\"</h5>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <div class=\"d-flex justify-content-center\">\r\n        <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" \r\n          [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/asesor/alumno/consulta/consulta.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/asesor/alumno/consulta/consulta.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FzZXNvci9hbHVtbm8vY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/asesor/alumno/consulta/consulta.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/asesor/alumno/consulta/consulta.component.ts ***!
  \**************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_asesor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/asesor.service */ "./src/app/asesor/services/asesor.service.ts");
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
    function ConsultaComponent(_usuarioService, _plataformaService, _asesorService, router) {
        this._usuarioService = _usuarioService;
        this._plataformaService = _plataformaService;
        this._asesorService = _asesorService;
        this.router = router;
        this.page = 1;
        this.itemsPerPage = 50;
        this.previousPage = 1;
        this.tipoForm = 1;
        this.loading = false;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.idRol = this._usuarioService.getRol().rol_id;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(function (data) {
            var inicio = (_this.page - 1) * _this.itemsPerPage;
            _this.consultaAlumnos(data, inicio);
        });
        this.consultaAlumnos('', 1);
    };
    ConsultaComponent.prototype.consultaAlumnos = function (busqueda, inicio) {
        var _this = this;
        this.loading = true;
        this._asesorService.consultaAlumnos().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.Alumnos = response['Alumnos'];
            }
            else
                _this.Alumnos = null;
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
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
                _this.router.navigate(['learning/home']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/asesor/alumno/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/asesor/alumno/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_4__["PlataformaService"],
            _services_asesor_service__WEBPACK_IMPORTED_MODULE_6__["AsesorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=asesor-alumno-alumno-module.js.map