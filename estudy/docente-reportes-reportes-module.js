(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-reportes-reportes-module"],{

/***/ "./src/app/docente/reportes/reportes-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/docente/reportes/reportes-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesRoutingModule", function() { return ReportesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reportes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportes.component */ "./src/app/docente/reportes/reportes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _reportes_component__WEBPACK_IMPORTED_MODULE_2__["ReportesComponent"]
    }
];
var ReportesRoutingModule = /** @class */ (function () {
    function ReportesRoutingModule() {
    }
    ReportesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportesRoutingModule);
    return ReportesRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/reportes/reportes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/docente/reportes/reportes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\r\n<!-- <div class=\"col-md-12\"> -->\r\n<h4> Lista de Asistencia y Evaluación Continua</h4>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"jumbotron jumbotron-fluid\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\" (click)=\"generaReporteAsistencia()\">\r\n                        <div class=\"card cTipo1 text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h1><i class=\"fa fa-list\"></i></h1>\r\n                                <p>Lista de Asistencias</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" (click)=\"generaReporteEvaluacion()\">\r\n                        <div class=\"card cTipo1 text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h1><i class=\"fa fa-file\"></i></h1>\r\n                                <p>Evaluación continua</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\" (click)=\"formulario(0)\">\r\n                        <div class=\"card cTipo1 text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h1><i class=\"fa fa-file-text\"></i></h1>\r\n                                <p>Acta de Calificación</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" (click)=\"generaReporteCalificaciones()\">\r\n                        <div class=\"card cTipo1 text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h1><i class=\"fa fa-file-o\"></i></h1>\r\n                                <p>Calificación Actividad</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" (click)=\"formulario(1)\">\r\n                        <div class=\"card cTipo1 text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h1><i class=\"fa fa-file-text\"></i></h1>\r\n                                <p>Acta de Calificación Irregulares</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8\">\r\n        <div class=\"row mt-5\" *ngIf=\"muestraForm == true\">\r\n            <div class=\"col-md-12\">\r\n                <form [formGroup]=\"reporteForm\" (ngSubmit)=\"enviarInformacion()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\" rel=\"1\">\r\n                                <label class=\"control-label\" for=\"_actividades\">Selecciona una actividad</label>\r\n                                <select formControlName=\"_actividades\" class=\"form-control\">\r\n                  <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n                  <option [value]=\"actividad.actividad_id\" *ngFor=\"let actividad of actividades\">{{actividad.actividad_nombre}}</option>\r\n                </select>\r\n                                <span class=\"invalidText\" *ngIf=\"f._actividades.invalid && f._actividades.touched\">\r\n                  {{'fmErrSelect' | translate}}\r\n                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\" for=\"fecha_inicio\"><i class=\"fa fa-calendar\"></i> Fecha inicio</label>\r\n                                <input formControlName=\"fecha_inicio\" class=\"form-control\" id=\"fecha_inicio\" type=\"date\">\r\n                                <span class=\"invalidText\" *ngIf=\"f.fecha_inicio.invalid && f.fecha_inicio.touched\">\r\n                  {{'fmErrDateStart' | translate}}\r\n                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\" for=\"fecha_fin\"><i class=\"fa fa-calendar\"></i> Fecha fin</label>\r\n                                <input formControlName=\"fecha_fin\" class=\"form-control\" id=\"fecha_fin\" type=\"date\">\r\n                                <span class=\"invalidText\" *ngIf=\"f.fecha_fin.invalid && f.fecha_fin.touched\">\r\n                  {{'fmErrDateFinish' | translate}}\r\n                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div><br>\r\n                    <button class=\"btn btn-success pull-right\" type=\"submit\">Enviar información</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/docente/reportes/reportes.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/docente/reportes/reportes.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9yZXBvcnRlcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL3JlcG9ydGVzL3JlcG9ydGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/docente/reportes/reportes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/docente/reportes/reportes.component.ts ***!
  \********************************************************/
/*! exports provided: ReportesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesComponent", function() { return ReportesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_reportes_docente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/reportes-docente.service */ "./src/app/docente/reportes/services/reportes-docente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(_usuarioService, _reportesDocenteService, route, formBuilder) {
        this._usuarioService = _usuarioService;
        this._reportesDocenteService = _reportesDocenteService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.title = 'Acta de calificaciones';
        this._usuarioService.pushBreadcum(this.title, '', 2);
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].url;
    }
    Object.defineProperty(ReportesComponent.prototype, "f", {
        get: function () { return this.reporteForm.controls; },
        enumerable: true,
        configurable: true
    });
    ReportesComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
        this.reporteForm = this.formBuilder.group({
            fecha_inicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fecha_fin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _actividades: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.consultaCatActividades();
    };
    ReportesComponent.prototype.consultaCatActividades = function () {
        var _this = this;
        this._reportesDocenteService.consultaActividades(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividades = response['actividades'];
            }
        });
    };
    ReportesComponent.prototype.enviarInformacion = function () {
        var _this = this;
        console.log(this.url);
        if (this.reporteForm.invalid) {
            Object.keys(this.reporteForm.controls).forEach(function (controlKey) {
                _this.reporteForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        var params = '?id_asignatura_grupo=' + this.idAsignaturaGrupo;
        params += '&jwt=' + this.jwt;
        params += '&id_actividad=' + this.reporteForm.get('_actividades').value;
        params += '&fecha_inicio=' + this.reporteForm.get('fecha_inicio').value;
        params += '&fecha_fin=' + this.reporteForm.get('fecha_fin').value;
        if (this.tipo == 0) {
            window.open(this.url + '/reportes/grupos/actaCalificaciones.php' + params, '_blank');
        }
        else if (this.tipo == 1) {
            window.open(this.url + '/reportes/grupos/actaCalificacionesIrregulares.php' + params, '_blank');
        }
    };
    ReportesComponent.prototype.generaReporteAsistencia = function () {
        var params = '?id_asignatura_grupo=' + this.idAsignaturaGrupo;
        var urlReporte = this.url + 'reportes/grupos/listaAsistencia.php' + params;
        window.open(urlReporte, '_blank');
    };
    ReportesComponent.prototype.generaReporteEvaluacion = function () {
        var params = '?id_asignatura_grupo=' + this.idAsignaturaGrupo;
        var urlReporte = this.url + 'reportes/grupos/listaEvaluacion.php' + params;
        window.open(urlReporte, '_blank');
    };
    ReportesComponent.prototype.generaReporteCalificaciones = function () {
        var params = '?id_asignatura_grupo=' + this.idAsignaturaGrupo;
        var urlReporte = this.url + 'reportes/grupos/alumnosCompletos.php' + params;
        window.open(urlReporte, '_blank');
    };
    ReportesComponent.prototype.formulario = function (tipo) {
        this.tipo = tipo;
        if (this.muestraForm)
            this.muestraForm = false;
        else if (!this.muestraForm)
            this.muestraForm = true;
        console.log(this.muestraForm);
    };
    ReportesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! ./reportes.component.html */ "./src/app/docente/reportes/reportes.component.html"),
            styles: [__webpack_require__(/*! ./reportes.component.scss */ "./src/app/docente/reportes/reportes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_reportes_docente_service__WEBPACK_IMPORTED_MODULE_2__["ReportesDocenteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ReportesComponent);
    return ReportesComponent;
}());



/***/ }),

/***/ "./src/app/docente/reportes/reportes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/docente/reportes/reportes.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesModule", function() { return ReportesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reportes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportes-routing.module */ "./src/app/docente/reportes/reportes-routing.module.ts");
/* harmony import */ var _reportes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportes.component */ "./src/app/docente/reportes/reportes.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportesModule = /** @class */ (function () {
    function ReportesModule() {
    }
    ReportesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_reportes_component__WEBPACK_IMPORTED_MODULE_3__["ReportesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reportes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportesRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], ReportesModule);
    return ReportesModule;
}());



/***/ }),

/***/ "./src/app/docente/reportes/services/reportes-docente.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/docente/reportes/services/reportes-docente.service.ts ***!
  \***********************************************************************/
/*! exports provided: ReportesDocenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesDocenteService", function() { return ReportesDocenteService; });
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




var ReportesDocenteService = /** @class */ (function () {
    function ReportesDocenteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ReportesDocenteService.prototype.consultaActividades = function (id_asignatura_grupo) {
        var params = '?id_asignatura_grupo=' + id_asignatura_grupo;
        return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consultaActividades.php' + params);
    };
    ReportesDocenteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportesDocenteService);
    return ReportesDocenteService;
}());



/***/ })

}]);
//# sourceMappingURL=docente-reportes-reportes-module.js.map