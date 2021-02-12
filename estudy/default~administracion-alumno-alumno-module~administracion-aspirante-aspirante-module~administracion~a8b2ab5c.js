(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~administracion~a8b2ab5c"],{

/***/ "./src/app/administracion/plan-estudios/services/orden-jerarquico.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/services/orden-jerarquico.service.ts ***!
  \***********************************************************************************/
/*! exports provided: OrdenJerarquicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenJerarquicoService", function() { return OrdenJerarquicoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdenJerarquicoService = /** @class */ (function () {
    function OrdenJerarquicoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    OrdenJerarquicoService.prototype.consultaOrdenJerarquico = function (id, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_orden_jerarquico=' + id;
        return this._httpClient.get(this.url + '/admin/ordenJerarquico/consulta.php' + params);
    };
    OrdenJerarquicoService.prototype.consultaCatOrdenJerarquico = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/catalogos/ordenJerarquico.php' + params);
    };
    OrdenJerarquicoService.prototype.agregaOrdenJerarquico = function (idPlanEstudios, jwt) {
        var formData = new FormData();
        formData.append('id_plan_estudios', idPlanEstudios);
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'admin/planEstudios/agregaOrdenJerarquico.php', formData);
    };
    OrdenJerarquicoService.prototype.elimina = function (id) {
        var params = '?id_plan_orden=' + id;
        return this._httpClient.get(this.url + '/admin/ordenJerarquico/eliminaPlanOrden.php' + params);
    };
    OrdenJerarquicoService.prototype.vinculaOrdenPlanAsignatura = function (id_plan_orden, id_asignatura, jwt) {
        var formData = new FormData();
        formData.append('id_orden_jerarquico', id_plan_orden);
        formData.append('id_asignatura', id_asignatura);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/ordenJerarquico/creaPlanAsignatura.php', formData);
    };
    OrdenJerarquicoService.prototype.consultaAsignatura = function (id, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_plan_orden=' + id;
        return this._httpClient.get(this.url + '/admin/ordenJerarquico/consultaAsignaturas.php' + params);
    };
    OrdenJerarquicoService.prototype.consultaAlumnosSinGrupo = function (id, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_plan_orden=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/ordenJerarquico/consultaAlumnosSinGrupo.php' + params);
    };
    OrdenJerarquicoService.prototype.eliminaAsignatura = function (id) {
        var params = '?id_orden_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/ordenJerarquico/eliminaAsignatura.php' + params);
    };
    OrdenJerarquicoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrdenJerarquicoService);
    return OrdenJerarquicoService;
}());



/***/ }),

/***/ "./src/app/components/consultaAsignatura/consulta-asignatura.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/consultaAsignatura/consulta-asignatura.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"row\" *ngIf=\"bandera && parentForm\" [formGroup]=\"parentForm\">\r\n        <div [className]=\"style\" *ngFor=\"let select of Selects; let i = index\">\r\n          <label class=\"control-label\" for=\"SeleccionarAsignatura\">* {{ select.label | translate}}</label>\r\n          <select formControlName=\"{{select.value}}\" class=\"form-control\" (change)=\"this[select.function]($event)\">\r\n            <option hidden value=\"\" selected>{{'fmOptSelect' | translate}}</option>\r\n            <option  [value]=\"item[select.value]\" *ngFor=\"let item of select['iterator']\">{{item[select.key]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"bandera && !parentForm\">\r\n        <div [className]=\"style\" *ngFor=\"let select of Selects; let i = index\">\r\n          <label class=\"control-label\" for=\"SeleccionarAsignatura\">{{i+1}}. {{ select.label | translate}}</label>\r\n          <select class=\"form-control\" id=\"asignatura_id\" (change)=\"this[select.function]($event)\"  >\r\n            <option hidden value=\"\" selected>{{'fmOptSelect' | translate}}</option>\r\n            <option  [value]=\"item[select.value]\" *ngFor=\"let item of select['iterator']\">{{item[select.key]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!-- <div [className]=\"style\" *ngFor=\"let select of Selects; let i = index\">\r\n        <label class=\"control-label\" for=\"SeleccionarAsignatura\">{{i+1}}. {{ select.label | translate}}</label>\r\n        <select class=\"form-control\" id=\"asignatura_id\" (change)=\"this[select.function]($event)\"  >\r\n          <option hidden value=\"\" selected>{{'fmOptSelect' | translate}}</option>\r\n          <option  [value]=\"item[select.value]\" *ngFor=\"let item of select.iterator\">{{item[select.key]}}</option>\r\n        </select>\r\n      </div> -->\r\n      <!-- <div [className]=\"style\"> \r\n        <label class=\"control-label\" for=\"SeleccionarAsignatura\">2. {{'selectPlanEstudio' | translate}}</label>\r\n        <select class=\"form-control\" id=\"asignatura_id\" (change)=\"grado($event)\" >\r\n          <option hidden value=\"\"  selected>{{'fmOptSelect' | translate}}</option>\r\n          <option  [value]=\"_planEstudio.plan_estudio_id\" *ngFor=\"let _planEstudio of planEstudio\">{{_planEstudio.plan_estudio}}</option>\r\n        </select>\r\n      </div>\r\n      <div [className]=\"style\"> \r\n        <label class=\"control-label\" for=\"SeleccionarAsignatura\">3. Selecciona un grado</label>\r\n        <select class=\"form-control\" id=\"asignatura_id\" (change)=\"_asignatura($event)\">\r\n          <option hidden value=\"\"  selected>{{'fmOptSelect' | translate}}</option>\r\n          <option [value]=\"orden.plan_orden_id\" *ngFor=\"let orden of ordJerarquicos\">{{orden.orden_jerarquico_descripcion}}</option>\r\n        </select>\r\n      </div>\r\n      <div [className]=\"style\">\r\n        <label class=\"control-label\" for=\"SeleccionarAsignatura\">4. {{'selectAsignatura' | translate}}</label>\r\n      <select class=\"form-control\" id=\"asignatura_id\" (change)=\"output($event)\" >\r\n        <option hidden value=\"\"  selected>{{'fmOptSelect' | translate}}</option>\r\n        <option  [value]=\"_asignatura.asignatura_id\" *ngFor=\"let _asignatura of _asignaturas\">{{_asignatura.asignatura}}</option>\r\n      </select>\r\n      </div>     -->\r\n    \r\n"

/***/ }),

/***/ "./src/app/components/consultaAsignatura/consulta-asignatura.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/consultaAsignatura/consulta-asignatura.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25zdWx0YUFzaWduYXR1cmEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnN1bHRhQXNpZ25hdHVyYS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDcEREO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25zdWx0YUFzaWduYXR1cmEvY29uc3VsdGEtYXNpZ25hdHVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/consultaAsignatura/consulta-asignatura.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/consultaAsignatura/consulta-asignatura.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConsultaAsignaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaAsignaturaComponent", function() { return ConsultaAsignaturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_administracion_carrera_services_carrera_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/administracion/carrera/services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_administracion_plan_estudios_services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/administracion/plan-estudios/services/orden-jerarquico.service */ "./src/app/administracion/plan-estudios/services/orden-jerarquico.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConsultaAsignaturaComponent = /** @class */ (function () {
    function ConsultaAsignaturaComponent(_translate, _usuarioService, _router, _catalogoService, _carreraService, _ordenJerarquicoService) {
        this._translate = _translate;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._catalogoService = _catalogoService;
        this._carreraService = _carreraService;
        this._ordenJerarquicoService = _ordenJerarquicoService;
        this.ponderacionTotal = 0;
        this.Selects = [];
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bandera = false;
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.completado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._translate.setDefaultLang('es');
    }
    ConsultaAsignaturaComponent.prototype.ngOnInit = function () {
        this.nivel = this.nivel ? this.nivel : 4;
        this.jwt = '';
    };
    ConsultaAsignaturaComponent.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.nivel > 4 && _this.nivel < 7) {
                _this.nivel = 3;
            }
            if (_this.carreras) {
                _this.bandera = false;
                _this.deleteDatos();
            }
            if (_this.nivel < 7 && !_this.carreras) {
                _this.consultaCarreras();
            }
            if (_this.nivel == 7) {
                _this.carreras = undefined;
                _this.bandera = false;
                _this.deleteDatos();
            }
        }, 1);
    };
    ConsultaAsignaturaComponent.prototype.consultaCarreras = function () {
        var _this = this;
        this._catalogoService.consultaCarrera(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
                _this.setDatos();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAsignaturaComponent.prototype.deleteDatos = function () {
        this.Selects = [];
        this.planEstudio = undefined;
        this.ordJerarquicos = undefined;
        this._asignaturas = undefined;
        this.parentForm.removeControl('carrera_id');
        this.parentForm.removeControl('plan_estudio_id');
        this.parentForm.removeControl('plan_orden_id');
        this.parentForm.removeControl('orden_asignatura_id');
        if (this.nivel < 7) {
            this.setDatos();
        }
    };
    ConsultaAsignaturaComponent.prototype.setDatos = function () {
        this.Data = [
            { label: 'SelectCareer', function: 'planEstudio_', iterator: this.carreras, value: 'carrera_id', key: 'carrera' },
            { label: 'selectPlanEstudio', function: 'grado', iterator: this.planEstudio, value: 'plan_estudio_id', key: 'plan_estudio' },
            { label: 'Selecciona un grado', function: '_asignatura', iterator: this.ordJerarquicos, value: 'plan_orden_id', key: 'orden_jerarquico_descripcion' },
            { label: 'selectAsignatura', function: 'sendAsignatura', iterator: this._asignaturas, value: 'orden_asignatura_id', key: 'asignatura' },
        ];
        for (var i = 0; i < this.nivel; i++) {
            this.Selects.push(this.Data[i]);
            if (this.parentForm) {
                this.parentForm.addControl(this.Data[i]['value'], new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required));
            }
        }
        switch (this.tipo) {
            case 'small':
                this.style = 'col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12';
                break;
            case 'medium':
                this.style = 'col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12';
                break;
            case 'large':
                this.style = 'col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12';
                break;
            default:
                this.style = 'col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12';
                break;
        }
        if (this.arrayData && this.arrayData['carrera_id']) {
            this.callFunction('planEstudio_', 'carrera_id');
        }
        else {
            this.ready.emit(true);
            this.bandera = true;
        }
    };
    ConsultaAsignaturaComponent.prototype.planEstudio_ = function (event, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var idCarrera;
        if (id == 0)
            idCarrera = event.target.value;
        else if (id == 1)
            idCarrera = event;
        if (this.nivel > 1) {
            this.setErrors(1);
            this._carreraService.consultaPlanEstudios(idCarrera, this.jwt).subscribe(function (response) {
                _this.idOrdenAsignatura = 0;
                if (response && response['status']) {
                    _this.planEstudio = response['plan'];
                    _this.Selects[1].iterator = _this.planEstudio;
                    if (id == 1)
                        _this.callFunction('grado', 'plan_estudio_id');
                }
                else {
                    _this.planEstudio = null;
                    _this.Selects[1].iterator = null;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.sendOutput({ idCarrera: idCarrera });
        }
    };
    ConsultaAsignaturaComponent.prototype.grado = function (event, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var idPlanEstudio;
        if (id == 0)
            idPlanEstudio = event.target.value;
        else if (id == 1)
            idPlanEstudio = event;
        if (this.nivel > 2) {
            this.setErrors(2);
            this._catalogoService.consultaGrado(idPlanEstudio).subscribe(function (response) {
                if (response && response['status']) {
                    _this.ordJerarquicos = response['ordenJerarquico'];
                    _this.Selects[2].iterator = _this.ordJerarquicos;
                    if (id == 1)
                        _this.callFunction('_asignatura', 'plan_orden_id');
                }
                else {
                    _this.ordJerarquicos = null;
                    _this.Selects[2].iterator = null;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log(idPlanEstudio);
            this.sendOutput({ idPlanEstudio: idPlanEstudio });
        }
    };
    ConsultaAsignaturaComponent.prototype._asignatura = function (event, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var idOrdenJerarquico;
        if (id == 0)
            idOrdenJerarquico = event.target.value;
        else if (id == 1)
            idOrdenJerarquico = event;
        this.sendOutput({ idOrdenJerarquico: idOrdenJerarquico });
        if (this.nivel > 3) {
            this.setErrors(3);
            this._ordenJerarquicoService.consultaAsignatura(idOrdenJerarquico, this.jwt).subscribe(function (response) {
                _this.idOrdenAsignatura = response['orden_asignatura_id'];
                if (response && response['status']) {
                    _this._asignaturas = response['asignatura'];
                    _this.Selects[3].iterator = _this._asignaturas;
                    if (id == 1)
                        _this.callFunction('', 'orden_asignatura_id');
                }
                else {
                    _this._asignaturas = null;
                    _this.Selects[3].iterator = null;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.sendOutput({ idOrdenJerarquico: idOrdenJerarquico, });
        }
    };
    ConsultaAsignaturaComponent.prototype.sendAsignatura = function (event) {
        this.idOrdenAsignatura = event.target.value;
        var idAsignatura = 0;
        this._asignaturas.forEach(function (asignatura) {
            if (this.idOrdenAsignatura == asignatura.orden_asignatura_id) {
                idAsignatura = asignatura.asignatura_id;
            }
        }.bind(this));
        this.sendOutput({
            "idOrdenAsignatura": this.idOrdenAsignatura,
            "idAsignatura": idAsignatura
        });
    };
    ConsultaAsignaturaComponent.prototype.sendOutput = function (object) {
        if (!this.parentForm) {
            this.sucessEvent.emit(object);
        }
        else {
            if (this.parentForm.get('nivel')) {
                var nivel = this.parentForm.get('nivel').value;
                if (nivel != 5 && nivel != 6)
                    this.completado.emit(true);
            }
        }
        this.sucessEvent.emit(object);
    };
    ConsultaAsignaturaComponent.prototype.setErrors = function (level) {
        this.completado.emit(false);
        for (var i = level; i < this.nivel; i++) {
            if (this.parentForm) {
                this.parentForm.get(this.Selects[i]['value']).setValue('');
                this.Selects[i].iterator = null;
            }
            else {
                this.Selects[i].iterator = null;
            }
        }
        if (!this.parentForm && this.nivel == 4 && this.idOrdenAsignatura) {
            this.sendOutput({ change: true });
        }
    };
    ConsultaAsignaturaComponent.prototype.callFunction = function (call, control) {
        if (call != '')
            this[call](this.arrayData[control], 1);
        if (this.parentForm) {
            this.parentForm.get(control).setValue(this.arrayData[control]);
        }
        if (control == 'orden_asignatura_id') {
            this.ready.emit(true);
            this.bandera = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConsultaAsignaturaComponent.prototype, "sucessEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConsultaAsignaturaComponent.prototype, "tipo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ConsultaAsignaturaComponent.prototype, "nivel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"])
    ], ConsultaAsignaturaComponent.prototype, "parentForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConsultaAsignaturaComponent.prototype, "ready", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConsultaAsignaturaComponent.prototype, "arrayData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConsultaAsignaturaComponent.prototype, "completado", void 0);
    ConsultaAsignaturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-asignatura',
            template: __webpack_require__(/*! ./consulta-asignatura.component.html */ "./src/app/components/consultaAsignatura/consulta-asignatura.component.html"),
            styles: [__webpack_require__(/*! ./consulta-asignatura.component.scss */ "./src/app/components/consultaAsignatura/consulta-asignatura.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"],
            src_app_administracion_carrera_services_carrera_service__WEBPACK_IMPORTED_MODULE_5__["CarreraService"],
            src_app_administracion_plan_estudios_services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_7__["OrdenJerarquicoService"]])
    ], ConsultaAsignaturaComponent);
    return ConsultaAsignaturaComponent;
}());



/***/ }),

/***/ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/consultaAsignatura/consulta-asignatura.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultaAsignaturaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaAsignaturaModule", function() { return ConsultaAsignaturaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consulta_asignatura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-asignatura.component */ "./src/app/components/consultaAsignatura/consulta-asignatura.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConsultaAsignaturaModule = /** @class */ (function () {
    function ConsultaAsignaturaModule() {
    }
    ConsultaAsignaturaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_consulta_asignatura_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaAsignaturaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_consulta_asignatura_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaAsignaturaComponent"]]
        })
    ], ConsultaAsignaturaModule);
    return ConsultaAsignaturaModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~administracion~a8b2ab5c.js.map