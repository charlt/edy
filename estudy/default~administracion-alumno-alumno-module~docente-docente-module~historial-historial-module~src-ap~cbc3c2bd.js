(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~docente-docente-module~historial-historial-module~src-ap~cbc3c2bd"],{

/***/ "./src/app/administracion/alumno/historial/form/form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/form/form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <form class=\"row\" [formGroup]=\"historialForm\" (ngSubmit)=\"sendData()\" *ngIf=\"historialForm\" [hidden]=\"!show\">\r\n      <div class=\"col-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Ciclo</label>\r\n          <select class=\"form-control\" formControlName=\"id_ciclo\">\r\n            <option value=\"\" hidden disabled selected>Selecciona una opción</option>\r\n            <option [value]=\"ciclo.ciclo_id\" *ngFor=\"let ciclo of Ciclos\">{{ciclo.ciclo_desc}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <app-consulta-asignatura *ngIf=\"bandera\" (ready)=\"showForm($event)\" [arrayData]=\"Data\" [parentForm]=\"historialForm\" [tipo]=\"'medium'\"></app-consulta-asignatura>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Elige el estatus del historial</label>\r\n          <select class=\"form-control\" formControlName=\"id_estatus_historial\">\r\n            <option value=\"\" hidden disabled selected>Selecciona una opción</option>\r\n            <option [value]=\"estatus.estatus_historial_id\" *ngFor=\"let estatus of CicloEstatusHist\">{{estatus.estatus_historial_descripcion}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Calificación</label>\r\n          <select formControlName=\"calificacion\" class=\"form-control\">\r\n            <option value=\"\" disabled selected hidden>Selecciona una opción</option>\r\n            <option [value]=\"i\" \r\n              *ngFor=\"let calificacion of [].constructor(11); let i = index\">{{i}}</option>\r\n          </select>\r\n          <!-- <input type=\"text\" class=\"form-control\" formControlName=\"calificacion\"> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" *ngIf=\"hF && hF.situacion_reprobatoria_id\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Situacón de la calificación reprobatoria</label>\r\n          <select formControlName=\"situacion_reprobatoria_id\" class=\"form-control\">\r\n            <option value=\"\" disabled selected hidden>Selecciona una opción</option>\r\n            <option [value]=\"situacion.situacion_id\" \r\n              *ngFor=\"let situacion of catSituacionReprobatoria; let i = index\">\r\n                {{situacion.situacion_descripcion}}\r\n            </option>\r\n          </select>\r\n          <!-- <input type=\"text\" class=\"form-control\" formControlName=\"calificacion\"> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\">\r\n        <button [disabled]=\"historialForm.invalid\" type=\"submit\" class=\"btn btn-primary pull-right\">Guardar información</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/alumno/historial/form/form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/form/form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2hpc3RvcmlhbC9mb3JtL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9oaXN0b3JpYWwvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/alumno/historial/form/form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/form/form.component.ts ***!
  \************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _historial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../historial.service */ "./src/app/administracion/alumno/historial/historial.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
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
    function FormComponent(formBuilder, route, router, _historialService, _catalogoService, _usuarioService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this._historialService = _historialService;
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this.idMateria = null;
        this.bandera = false;
        this.show = false;
        this.editar = false;
        this.Data = {};
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.idAlumno = this.route.snapshot.paramMap.get('id');
        this.idHistorial = this.route.snapshot.paramMap.get('id_historial');
        this._catalogoService.consultaCiclo().subscribe(function (response) {
            if (response && response['status']) {
                _this.Ciclos = response['ciclo'];
                _this._historialService.catCicloEstatusHistorial().subscribe(function (response) {
                    if (response && response['status']) {
                        _this.CicloEstatusHist = response['ciclo_estatus'];
                        _this.setForm();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.setForm = function () {
        var _this = this;
        this.historialForm = this.formBuilder.group({
            id_ciclo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id_estatus_historial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            calificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.suscripcion = this.historialForm.get('calificacion').valueChanges.subscribe(function (value) {
            if (value < 6) {
                if (!_this.historialForm.get('situacion_reprobatoria_id')) {
                    _this.historialForm.addControl('situacion_reprobatoria_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
                }
                if (!_this.catSituacionReprobatoria) {
                    _this._historialService.catSituacionReprobatoria().subscribe(function (response) {
                        if (response && response['status']) {
                            _this.catSituacionReprobatoria = response['situacion_reprobatoria'];
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                if (_this.historialForm.get('situacion_reprobatoria_id'))
                    _this.historialForm.removeControl('situacion_reprobatoria_id');
            }
        });
        if (this.idHistorial) {
            this.editar = true;
            this._historialService.consultaHistorial(this.idHistorial).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Historial = response['historial'];
                    console.log(_this.Historial);
                    _this.setData();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.bandera = true;
        }
    };
    Object.defineProperty(FormComponent.prototype, "hF", {
        get: function () { return this.historialForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.setData = function () {
        var h = this.Historial;
        this.historialForm.get('id_ciclo').setValue(h.ciclo_id);
        this.historialForm.get('id_estatus_historial').setValue(h.estatus_historial_id);
        this.historialForm.get('calificacion').setValue(parseInt(h.calificacion));
        this.Data['carrera_id'] = h.carrera_id;
        this.Data['plan_estudio_id'] = h.plan_estudio_id;
        // this.Data['plan_orden_id'] = h.orden_jerarquico_id;
        this.Data['plan_orden_id'] = h.plan_orden_id;
        this.Data['orden_asignatura_id'] = h.orden_asignatura_id;
        if (h.situacion_reprobatoria_id && h.situacion_reprobatoria_id < 6) {
            this.historialForm.get('situacion_reprobatoria_id').setValue(h.situacion_reprobatoria_id);
        }
        this.bandera = true;
    };
    FormComponent.prototype.sendData = function () {
        var _this = this;
        var tipo = this.editar ? 1 : 0;
        if (tipo == 1)
            this.historialForm.addControl('id_historial', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.idHistorial));
        var form = this.historialForm.value;
        this._historialService.modificaHistorial(form, this.idAlumno, tipo).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.router.navigate(['/admin/alumno/historial/' + _this.idAlumno]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.showForm = function (evt) {
        this.show = true;
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.suscripcion.unsubscribe();
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/alumno/historial/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/alumno/historial/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _historial_service__WEBPACK_IMPORTED_MODULE_3__["HistorialService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/historial/historial-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HistorialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialRoutingModule", function() { return HistorialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial.component */ "./src/app/administracion/alumno/historial/historial.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/alumno/historial/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _historial_component__WEBPACK_IMPORTED_MODULE_2__["HistorialComponent"] },
    { path: 'historial/:id/nuevo', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'historial/:id/editar/:id_historial', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] }
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

/***/ "./src/app/administracion/alumno/historial/historial.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado-persona [idPersona]=\"idAlumno\" [idRol]=\"2\"></app-encabezado-persona>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <a class=\"btn btn-success\" routerLink=\"../nuevo/\" *ngIf=\"idRol == 1\">Agregar Calificación</a>\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"imprimeHistorial()\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i> Imprimir historial</button><br>\r\n        <div class=\"table-responsive mt-4\">\r\n            <table class=\"table\">\r\n                <thead class=\"bg-light\">\r\n                    <tr>\r\n                        <th>Materia</th>\r\n                        <th>Descripción</th>\r\n                        <th>Grado</th>\r\n                        <th>Ciclo</th>\r\n                        <th>Fecha</th>\r\n                        <th>Tipo de evaluación</th>\r\n                        <th>Calificación ordinaria</th>\r\n                        <th *ngIf=\"idRol == 1\">Editar</th>\r\n                        <th *ngIf=\"idRol == 1\">Eliminar</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let historial of Historial; let i = index;\">\r\n                        <td>{{historial.asignatura_clave}}</td>\r\n                        <td>{{historial.asignatura}}</td>\r\n                        <td>{{historial.orden_jerarquico}}</td>\r\n                        <td>{{historial.ciclo_desc}}</td>\r\n                        <td></td>\r\n                        <td>{{historial.estatus_historial_descripcion}}</td>\r\n                        <td>{{historial.situacion_reprobatoria_id == null? historial.calificacion: historial.situacion_clave}}</td>\r\n                        <td *ngIf=\"idRol == 1\"><button class=\"btn btn-info\" [routerLink]=\"['./editar/'+historial.historial_id]\"><i class=\"fa fa-pencil\"></i></button></td>\r\n                        <td *ngIf=\"idRol == 1\"><button class=\"btn btn-danger\" (click)=\"eliminar(i, historial.historial_id)\"><i class=\"fa fa-trash\"></i></button></td>\r\n                    </tr>\r\n                    <tr *ngIf=\"Historial == null\">\r\n                        <td class=\"text-center\" colspan=\"7\" *ngIf=\"idRol == 1\">No se encontró información</td>\r\n                        <td class=\"text-center\" colspan=\"5\" *ngIf=\"idRol == 2\">No se encontró información</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/historial/historial.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2hpc3RvcmlhbC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9hbHVtbm8vaGlzdG9yaWFsL2hpc3RvcmlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/alumno/historial/historial.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial.component.ts ***!
  \************************************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _historial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial.service */ "./src/app/administracion/alumno/historial/historial.service.ts");
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





var HistorialComponent = /** @class */ (function () {
    function HistorialComponent(_usuarioService, _historialService, route) {
        this._usuarioService = _usuarioService;
        this._historialService = _historialService;
        this.route = route;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
        this.title = "Historial";
        this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    HistorialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idRol = this._usuarioService.getRol().rol_id;
        if (this.idRol == 1 || this.idRol == 5) {
            this.idAlumno = this.route.snapshot.paramMap.get('id');
        }
        else if (this.idRol == 2) {
            this.idAlumno = this._usuarioService.getIdentity().persona_id;
        }
        this.jwt = this._usuarioService.getJWT();
        this._historialService.getHistorial(this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.Historial = response['historial'];
            }
            else {
                _this.Historial = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HistorialComponent.prototype.imprimeHistorial = function () {
        var params = '?alumno_id=' + this.idAlumno;
        params = params + '&jwt=' + this.jwt;
        window.open(this.url + 'reportes/grupos/listaMaterias.php' + params);
    };
    HistorialComponent.prototype.eliminar = function (index, id_historial) {
        alertify.confirm('¿Deseas eliminar el historial?', function () {
            var _this = this;
            this._historialService.eliminaHistorial(id_historial).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Historial.splice(index, 1);
                    alertify.success(response['msg']);
                    if (_this.Historial.length == 0) {
                        _this.Historial = null;
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    HistorialComponent.prototype.editar = function () {
    };
    HistorialComponent.prototype.creaHistorial = function () {
    };
    HistorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial-alumno',
            template: __webpack_require__(/*! ./historial.component.html */ "./src/app/administracion/alumno/historial/historial.component.html"),
            styles: [__webpack_require__(/*! ./historial.component.scss */ "./src/app/administracion/alumno/historial/historial.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _historial_service__WEBPACK_IMPORTED_MODULE_2__["HistorialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HistorialComponent);
    return HistorialComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/historial/historial.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial.module.ts ***!
  \*********************************************************************/
/*! exports provided: HistorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialModule", function() { return HistorialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-routing.module */ "./src/app/administracion/alumno/historial/historial-routing.module.ts");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial.component */ "./src/app/administracion/alumno/historial/historial.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/alumno/historial/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
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
            declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _historial_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistorialRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_6__["ConsultaAsignaturaModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_7__["EncabezadoPersonaModule"]
            ],
            exports: [_historial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialComponent"]]
        })
    ], HistorialModule);
    return HistorialModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/historial/historial.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial.service.ts ***!
  \**********************************************************************/
/*! exports provided: HistorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialService", function() { return HistorialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistorialService = /** @class */ (function () {
    function HistorialService(httpClient) {
        this.httpClient = httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    HistorialService.prototype.getHistorial = function (id_alumno) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id_alumno', id_alumno);
        return this.httpClient.get(this.url + 'controlEscolar/historial/consultaAlumno.php', { params: params });
    };
    HistorialService.prototype.catCicloEstatusHistorial = function () {
        return this.httpClient.get(this.url + 'catalogosCE/cicloEstatusHistorial.php');
    };
    HistorialService.prototype.modificaHistorial = function (form, id_alumno, id) {
        var formData = new FormData();
        console.log(form);
        formData.append('id_orden_asignatura', form.orden_asignatura_id);
        formData.append('id_ciclo', form.id_ciclo);
        formData.append('id_alumno', id_alumno);
        formData.append('id_estatus_historial', form.id_estatus_historial);
        formData.append('calificacion', form.calificacion);
        formData.append('materia_id', null);
        if (form.situacion_reprobatoria_id)
            formData.append('situacion_reprobatoria_id', form.situacion_reprobatoria_id);
        if (id == 0) {
            return this.httpClient.post(this.url + 'controlEscolar/historial/crea.php', formData);
        }
        else if (id == 1) {
            formData.append('id_historial', form.id_historial);
            return this.httpClient.post(this.url + 'controlEscolar/historial/edita.php', formData);
        }
    };
    HistorialService.prototype.eliminaHistorial = function (id_historial) {
        var formData = new FormData();
        formData.append('id_historial', id_historial);
        return this.httpClient.post(this.url + 'controlEscolar/historial/elimina.php', formData);
    };
    HistorialService.prototype.consultaHistorial = function (id_historial) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id_historial', id_historial);
        return this.httpClient.get(this.url + 'controlEscolar/historial/consulta.php', { params: params });
    };
    HistorialService.prototype.consultaNoAprobados = function (id_asignatura) {
        var params = '?id_asignatura=' + id_asignatura;
        return this.httpClient.get(this.url + 'controlEscolar/historial/consultaNoAprobados.php' + params);
    };
    HistorialService.prototype.catSituacionReprobatoria = function () {
        return this.httpClient.get(this.url + 'catalogosCE/situacionCalificacionReprobatorias.php');
    };
    HistorialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistorialService);
    return HistorialService;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~docente-docente-module~historial-historial-module~src-ap~cbc3c2bd.js.map