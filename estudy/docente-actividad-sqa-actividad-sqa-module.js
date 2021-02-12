(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-actividad-sqa-actividad-sqa-module"],{

/***/ "./src/app/docente/actividad-sqa/actividad-sqa-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/docente/actividad-sqa/actividad-sqa-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ActividadSQARoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadSQARoutingModule", function() { return ActividadSQARoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actividad_sqa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actividad-sqa.component */ "./src/app/docente/actividad-sqa/actividad-sqa.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _actividad_sqa_component__WEBPACK_IMPORTED_MODULE_2__["ActividadSQAComponent"]
    }
];
var ActividadSQARoutingModule = /** @class */ (function () {
    function ActividadSQARoutingModule() {
    }
    ActividadSQARoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ActividadSQARoutingModule);
    return ActividadSQARoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/actividad-sqa/actividad-sqa.component.html":
/*!********************************************************************!*\
  !*** ./src/app/docente/actividad-sqa/actividad-sqa.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n        <h2>Actividad SQA</h2>\r\n  </div>\r\n  <div class=\"col-md-6\" >\r\n      <app-encabezado-persona *ngIf=\"idAlumno !== undefined\" [idPersona]=\"idAlumno\" [idRol]=\"2\"></app-encabezado-persona>\r\n  </div>\r\n</div>\r\n<div [hidden]=\"estatusActividad==4\" *ngIf=\"sqam3 && sqam3.length > 0\" class=\"row\">\r\n    <div  class=\"col-md-12 text-center\">\r\n        <p *ngIf=\"!valor\">{{'_sinCalificar' | translate}}</p>\r\n        <h4 *ngIf=\"valor\">{{valor}}</h4>\r\n\r\n        <button class=\"btn btn-success btn-lg my-3\" type=\"submit\" id=\"button-addon2\" (click)=\"guardarCalificacion()\">{{'_guardarCalificacion'| translate }}</button>\r\n    </div>\r\n    \r\n</div>\r\n<div class=\"row\" >\r\n  <div class=\"col-md-12 text-center\" *ngIf=\"estatusActividad==4\">\r\n      <label><b>{{'calificacionActividad' | translate}}</b></label>\r\n      <h4 class=\"col-md-12 text-center\" >{{calif}}</h4>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" >\r\n\r\n  <div  *ngIf=\"sqam1 && sqam1.length > 0 \" class=\"col-4\" >\r\n    <br>\r\n    <h4>Momento 1:</h4> \r\n    <div  *ngFor=\"let sqa of sqam1\">\r\n      <p class=\"header-estudy\" >\r\n         <span [innerHtml]=\"sqa.pregunta\"></span></p>\r\n      <div class=\"alert alert-primary col-md-12\" role=\"alert\">\r\n          <b>Respuesta:</b>\r\n        <p [innerHtml]=\"sqa.respuesta\"></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div  *ngIf=\"sqam2 && sqam2.length > 0\" class=\"col-4\" >\r\n      <br>\r\n      <h4>Momento 2:</h4> \r\n      <div  *ngFor=\"let sqa of sqam2\">\r\n        <p class=\"header-estudy\" >\r\n          <span [innerHtml]=\"sqa.pregunta\"></span></p>\r\n        <div class=\"alert alert-primary col-md-12\" role=\"alert\">\r\n            <b>Respuesta:</b>\r\n          <p [innerHtml]=\"sqa.respuesta\"></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div  *ngIf=\"sqam3 && sqam3.length > 0\" class=\"col-4\" >\r\n    <form [formGroup]=\"finalForm\" (ngSubmit)=\"enviarInformacion()\">\r\n        <div [hidden]=\"estatusActividad==4\" class=\"form-group\"> \r\n        <select class=\"form-control\"  formControlName=\"valor\" (change)=\"valor = f.valor.value * 10\">\r\n            <option value=\"\" >Selecciona</option>\r\n            <option *ngFor=\"let metrica of metricaCalif; let i = index\" value=\"{{metrica.valor}}\">{{metrica.texto}}</option>\r\n            <!-- <option value=\"0.00\">0.0</option>\r\n            <option value=\"0.50\">5.0</option>\r\n            <option value=\"0.60\">6.0</option>\r\n            <option value=\"0.65\">6.5</option>\r\n            <option value=\"0.70\">7.0</option>\r\n            <option value=\"0.75\">7.5</option>\r\n            <option value=\"0.80\">8.0</option>\r\n            <option value=\"0.85\">8.5</option>\r\n            <option value=\"0.9\">9.0</option>\r\n            <option value=\"0.95\">9.5</option>\r\n            <option value=\"1.00\">10.0</option> -->\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.valor.invalid && f.valor.touched\">\r\n          {{'fmErrSelect' | translate}}\r\n        </span>\r\n        </div>\r\n        \r\n        <h4>Conclusión:</h4> \r\n        <div  *ngFor=\"let sqa of sqam3\">\r\n          <p class=\"header-estudy\" >\r\n            <span [innerHtml]=\"sqa.pregunta\"></span></p>\r\n          <div class=\"alert alert-primary col-md-12\" role=\"alert\">\r\n              <b>Respuesta:</b>\r\n            <p [innerHtml]=\"sqa.respuesta\"></p>\r\n          </div>\r\n        </div>\r\n        <div [hidden]=\"estatusActividad==4\" class=\"form-group\">\r\n        <textarea class=\"form-control\" formControlName=\"nota\" name=\"textarea\" rows=\"10\" cols=\"30\" placeholder=\"{{'Ingresaretroalimentacion' | translate}}\">...</textarea>\r\n        <span class=\"invalidText\" *ngIf=\"f.nota.invalid && f.nota.touched\">\r\n          {{'Ingresaretroalimentacion' | translate}}\r\n        </span>\r\n        </div>\r\n        <!-- <span class=\"invalidText\" *ngIf=\"f.textarea.invalid && f.textarea.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span> -->\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col\">\r\n                <retroalimentacion [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\"></retroalimentacion>\r\n            </div>\r\n          </div> -->\r\n  \r\n    </form>\r\n  </div>\r\n\r\n\r\n      \r\n</div  >\r\n\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/docente/actividad-sqa/actividad-sqa.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/docente/actividad-sqa/actividad-sqa.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9hY3RpdmlkYWQtc3FhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9jZW50ZS9hY3RpdmlkYWQtc3FhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFHRDtFQUNJLFdBQVU7RUFDViw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGdCQUFlO0VBR2Ysb0RBQWdELEVBQ25EOztBQUVEO0VBQ0ksMEJBMUJrQjtFQTJCbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUEvQmtCLEVBZ0NyQjs7QUFFRDtFQUNJLGVBbkNrQixFQW9DckI7O0FBQ0Q7RUFDSSwwQkF0Q2tCO0VBdUNsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQThCO0VBQzlCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUNwREQ7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL2FjdGl2aWRhZC1zcWEvYWN0aXZpZGFkLXNxYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/docente/actividad-sqa/actividad-sqa.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/docente/actividad-sqa/actividad-sqa.component.ts ***!
  \******************************************************************/
/*! exports provided: ActividadSQAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadSQAComponent", function() { return ActividadSQAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_actividad_sqa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/actividad-sqa.service */ "./src/app/docente/actividad-sqa/services/actividad-sqa.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_metricaCalificacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/metricaCalificacion */ "./src/app/services/metricaCalificacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActividadSQAComponent = /** @class */ (function () {
    function ActividadSQAComponent(_usuarioService, _sqaService, modalService, route, formBuilder) {
        this._usuarioService = _usuarioService;
        this._sqaService = _sqaService;
        this.modalService = modalService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.verRetro = false;
        this.verNota = false;
        this.title = 'Consulta de actividad SQA';
        this.idMateria = this.route.snapshot.paramMap.get('id1');
        this.idAlumno = this.route.snapshot.paramMap.get('id2');
        this.idActividad = this.route.snapshot.paramMap.get('id3');
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(ActividadSQAComponent.prototype, "f", {
        get: function () { return this.finalForm.controls; },
        enumerable: true,
        configurable: true
    });
    ActividadSQAComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        var rol = this._usuarioService.getRol();
        this.idPersona = identity.persona_id;
        this.idRol = rol.rol_id;
        this.metricaCalif = _services_metricaCalificacion__WEBPACK_IMPORTED_MODULE_6__["metrica"];
        this._sqaService.consulta(this.idMateria, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                console.log(response);
                _this.sqam1 = response['actividadSQAm1'];
                _this.sqam2 = response['actividadSQAm2'];
                _this.sqam3 = response['actividadSQAm3'];
                var idMat = _this.sqam3[0];
                _this.idMateriaFechaActividad = idMat.materia_fecha_actividad_id;
                _this.estatusActividad = idMat.estatus_actividad_id;
                _this.calif = idMat.calificacion;
            }
        });
        this.finalForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nota: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    ActividadSQAComponent.prototype.aDecimal = function (valor) {
        valor = parseFloat(valor).toFixed(2);
        valor = valor * 10;
        return valor.toFixed(2);
    };
    ActividadSQAComponent.prototype.openModalRetro = function (content) {
        this.verRetro = true;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ActividadSQAComponent.prototype.openModalNotas = function (content) {
        this.verNota = true;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ActividadSQAComponent.prototype.guardarCalificacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.finalForm.invalid) {
            Object.keys(this.finalForm.controls).forEach(function (controlKey) {
                _this.finalForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._sqaService.guardarCalificacion(this.finalForm, this.idMateriaFechaActividad, this.idPersona, this.idRol, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
        if (this.finalForm.invalid) {
            return;
        }
    };
    ActividadSQAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actividad-sqa',
            template: __webpack_require__(/*! ./actividad-sqa.component.html */ "./src/app/docente/actividad-sqa/actividad-sqa.component.html"),
            styles: [__webpack_require__(/*! ./actividad-sqa.component.scss */ "./src/app/docente/actividad-sqa/actividad-sqa.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_actividad_sqa_service__WEBPACK_IMPORTED_MODULE_2__["ActividadSqaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ActividadSQAComponent);
    return ActividadSQAComponent;
}());



/***/ }),

/***/ "./src/app/docente/actividad-sqa/actividad-sqa.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/docente/actividad-sqa/actividad-sqa.module.ts ***!
  \***************************************************************/
/*! exports provided: ActividadSQAModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadSQAModule", function() { return ActividadSQAModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _actividad_sqa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actividad-sqa.component */ "./src/app/docente/actividad-sqa/actividad-sqa.component.ts");
/* harmony import */ var _actividad_sqa_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actividad-sqa-routing.module */ "./src/app/docente/actividad-sqa/actividad-sqa-routing.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _retroalimentacion_retroalimentacion_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../retroalimentacion/retroalimentacion.module */ "./src/app/docente/retroalimentacion/retroalimentacion.module.ts");
/* harmony import */ var _notas_notas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notas/notas.module */ "./src/app/docente/notas/notas.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ActividadSQAModule = /** @class */ (function () {
    function ActividadSQAModule() {
    }
    ActividadSQAModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_actividad_sqa_component__WEBPACK_IMPORTED_MODULE_2__["ActividadSQAComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _actividad_sqa_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActividadSQARoutingModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__["EncabezadoPersonaModule"],
                _retroalimentacion_retroalimentacion_module__WEBPACK_IMPORTED_MODULE_7__["RetroalimentacionModule"],
                _notas_notas_module__WEBPACK_IMPORTED_MODULE_8__["NotasModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ]
        })
    ], ActividadSQAModule);
    return ActividadSQAModule;
}());



/***/ }),

/***/ "./src/app/docente/actividad-sqa/services/actividad-sqa.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/docente/actividad-sqa/services/actividad-sqa.service.ts ***!
  \*************************************************************************/
/*! exports provided: ActividadSqaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadSqaService", function() { return ActividadSqaService; });
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




var ActividadSqaService = /** @class */ (function () {
    function ActividadSqaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ActividadSqaService.prototype.consulta = function (materia_id, jwt) {
        var params = '?id_materia=' + materia_id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/materia/consultaActividadSQA.php' + params);
    };
    ActividadSqaService.prototype.guardarCalificacion = function (final, materia_fecha_actividad_id, persona_id, origen, jwt) {
        var formData = new FormData();
        var fd = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', final.get('nota').value);
        formData.append('origen', origen);
        formData.append('jwt', jwt);
        formData.append('calificacion', final.get('valor').value);
        return this._httpClient.post(this.url + 'learning/respuestaDiagnostica/guardarCalificacion.php', formData);
    };
    ActividadSqaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActividadSqaService);
    return ActividadSqaService;
}());



/***/ }),

/***/ "./src/app/models/simpleEditor.ts":
/*!****************************************!*\
  !*** ./src/app/models/simpleEditor.ts ***!
  \****************************************/
/*! exports provided: simpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleEditor", function() { return simpleEditor; });
var simpleEditor = [
    //['Styles''Format''Font','FontSize'],
    //['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
    //['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    //['Image','Table','-','Link','Flash','Smiley','TextColor','BGColor']
    ['Format', 'Font', 'FontSize'],
    ['Bold', 'Italic', 'Underline', 'StrikeThrough', '-', 'Outdent', 'Indent', '-', 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Table', 'Link', 'Smiley', 'TextColor', 'BGColor']
];


/***/ }),

/***/ "./src/app/services/metricaCalificacion.ts":
/*!*************************************************!*\
  !*** ./src/app/services/metricaCalificacion.ts ***!
  \*************************************************/
/*! exports provided: metrica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metrica", function() { return metrica; });
var metrica = [{
        valor: "0.00",
        texto: "0.0"
    },
    {
        valor: "0.50",
        texto: "5.0"
    },
    {
        valor: "0.60",
        texto: "6.0"
    },
    {
        valor: "0.65",
        texto: "6.5"
    },
    {
        valor: "0.70",
        texto: "7.0"
    },
    {
        valor: "0.75",
        texto: "7.5"
    },
    {
        valor: "0.80",
        texto: "8.0"
    },
    {
        valor: "0.85",
        texto: "8.5"
    },
    {
        valor: "0.90",
        texto: "9.0"
    },
    {
        valor: "0.95",
        texto: "9.5"
    },
    {
        valor: "1.00",
        texto: "10.0"
    }];


/***/ })

}]);
//# sourceMappingURL=docente-actividad-sqa-actividad-sqa-module.js.map