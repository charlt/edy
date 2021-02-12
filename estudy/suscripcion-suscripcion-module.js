(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suscripcion-suscripcion-module"],{

/***/ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/suscripcion/suscripcion-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SuscripcionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionRoutingModule", function() { return SuscripcionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suscripcion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suscripcion.component */ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _suscripcion_component__WEBPACK_IMPORTED_MODULE_2__["SuscripcionComponent"],
    }
];
var SuscripcionRoutingModule = /** @class */ (function () {
    function SuscripcionRoutingModule() {
    }
    SuscripcionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SuscripcionRoutingModule);
    return SuscripcionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <app-encabezado-persona [idPersona]=\"idAlumno\" \r\n    [idRol]=\"2\"></app-encabezado-persona>\r\n    <h5 class=\"mt-3\">{{title}}</h5>\r\n    <button class=\"btn btn-success my-3\" (click)=\"open(content)\"><i class=\"fa fa-plus\"></i> Agregar nuevo plan de pago</button>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Suscripción</th>\r\n            <th scope=\"col\">Descripción</th>\r\n            <th scope=\"col\">Reinscripción</th>\r\n            <th scope=\"col\">Colegiatura</th>\r\n          \r\n            <th scope=\"col\">Editar</th>\r\n            <th scope=\"col\">Eliminar</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"suscripcion.length == 0\">\r\n            <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n          </tr>\r\n          <tr *ngFor=\"let _suscripcion of suscripcion; let i = index\">\r\n            <td>{{_suscripcion.nombre_suscripcion}}</td>\r\n            <td>{{_suscripcion.descripcion_suscripcion}}</td>\r\n            <td>$ {{_suscripcion.descuento_reinscripcion}}\r\n              <span class=\"badge badge-success\" *ngIf=\"_suscripcion.beca_reinscripcion != 0\">\r\n                Beca\r\n                <span *ngIf=\"_suscripcion.valor_beca_reinscripcion == 1\"> $ </span>\r\n                 {{_suscripcion.beca_reinscripcion}}\r\n                <span *ngIf=\"_suscripcion.valor_beca_reinscripcion == 2\"> % </span>\r\n              </span>\r\n\r\n            </td>\r\n            <td>$ {{_suscripcion.descuento_colegiatura}}\r\n              <span class=\"badge badge-success\" *ngIf=\"_suscripcion.beca_colegiatura != 0\">\r\n                Beca  \r\n                <span *ngIf=\"_suscripcion.valor_beca_colegiatura == 1\"> $ </span>\r\n                {{_suscripcion.beca_colegiatura}}\r\n                <span *ngIf=\"_suscripcion.valor_beca_colegiatura == 2\"> % </span>\r\n              </span>\r\n            </td>\r\n            <td><button class=\"btn btn-info\" (click)=\"open(content, _suscripcion)\"><i class=\"fa fa-pencil\"></i></button></td>\r\n            <td><button class=\"btn btn-danger\" (click)=\"eliminar(_suscripcion.alumno_suscripcion_id, i)\"><i class=\"fa fa-times\"></i></button></td>\r\n          </tr>\r\n          \r\n        </tbody>\r\n      </table>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{titulo}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body mx-5 my-2\">\r\n    <form [formGroup]=\"pagosForm\" (ngSubmit)=\"enviaInformacion()\">\r\n      <div class=\"form-group mb-2\">\r\n        <label class=\"control-label\">Nombre del plan de pago</label>\r\n        \r\n        <select class=\"form-control\" formControlName=\"id_suscripcion\" (change)=\"cambiaSuscripcion($event)\">\r\n          <option value=\"\" hidden disabled selected>Selecciona una opción</option>\r\n          <option [value]=\"suscripcion.suscripcion_id\" \r\n            *ngFor=\"let suscripcion of catSuscripciones; let i = index;\">\r\n            {{suscripcion.nombre_suscripcion}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div *ngIf=\"selectedSuscripcion\" class=\"row alert alert-secondary\">\r\n        <div class=\"col-12\">\r\n          <h5>Inscripción/Reinscripción</h5>\r\n        </div>\r\n        <div class=\"col-6 text-center\">\r\n          <label>Monto</label>\r\n          <h5>$ {{selectedSuscripcion.monto_reinscripcion}}</h5>\r\n        </div>\r\n        <div *ngIf=\"f.becaReinscripcion.value == 1\" class=\"col-6 text-center\">\r\n          <label>Monto con beca</label>\r\n          <h5>$ {{becaReinscripcion}}</h5>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <label><input type=\"checkbox\" value=\"1\" formControlName=\"becaReinscripcion\"> ¿Deseas agregar beca al alumno? </label>\r\n        </div>\r\n        <div class=\"col-6\"  *ngIf=\"f.becaReinscripcion.value == 1\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"control-label\">Descuento de beca</label>\r\n            <input class=\"form-control\" type=\"number\" formControlName=\"montoBecaReinscripcion\" placeholder=\"montoBecaReinscripcion\" (blur)=\"calculaBeca(1)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\"  *ngIf=\"f.becaReinscripcion.value == 1\">\r\n          <div class=\"form-group mb-2\">\r\n\r\n            <label class=\"control-label\">Tipo de descuento</label><br>\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input type=\"radio\" id=\"monto1\" formControlName=\"tipoBecaReinscripcion\"  name=\"tipoBecaReinscripcion\" class=\"custom-control-input\" value=\"1\" >\r\n              <label class=\"custom-control-label\" for=\"monto1\">Monto</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input type=\"radio\" id=\"porcentaje1\" formControlName=\"tipoBecaReinscripcion\"  name=\"tipoBecaReinscripcion\" class=\"custom-control-input\" value=\"2\">\r\n              <label class=\"custom-control-label\" for=\"porcentaje1\">Porcentaje</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"selectedSuscripcion\" class=\"row alert alert-info\">\r\n        <div class=\"col-12\">\r\n          <h5>Colegiatura</h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-6 text-center\">\r\n              <label>Monto</label>\r\n              <h5>$ {{selectedSuscripcion.monto_colegiatura}}</h5>\r\n            </div>\r\n            <div *ngIf=\"f.becaColegiatura.value == 1\" class=\"col-6 text-center\">\r\n              <label>Monto con beca</label>\r\n              <h5>$ {{becaColegiatura}}</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <label><input type=\"checkbox\" value=\"1\" formControlName=\"becaColegiatura\"> ¿Deseas agregar beca al alumno? </label>\r\n        </div>\r\n        <div class=\"col-6\"  *ngIf=\"f.becaColegiatura.value == 1\">\r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"control-label\">Descuento de beca</label>\r\n            <input class=\"form-control\" type=\"number\" formControlName=\"montoBecaColegiatura\" placeholder=\"montoBecaColegiatura\" (blur)=\"calculaBeca(2)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\"  *ngIf=\"f.becaColegiatura.value == 1\"> \r\n          <div class=\"form-group mb-2\">\r\n            <label class=\"control-label\">Tipo de descuento</label><br>\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input type=\"radio\" id=\"monto2\" formControlName=\"tipoBecaColegiatura\" class=\"custom-control-input\" value=\"1\" >\r\n              <label class=\"custom-control-label\" for=\"monto2\">Monto</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input type=\"radio\" id=\"porcentaje2\" formControlName=\"tipoBecaColegiatura\" class=\"custom-control-input\" value=\"2\">\r\n              <label class=\"custom-control-label\" for=\"porcentaje2\">Porcentaje</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n      \r\n      <button type=\"submit\" class=\"btn btn-success pull-right mt-3\" [disabled]=\"pagosForm.invalid\">Guardar información</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3MvYWx1bW5vcy9zdXNjcmlwY2lvbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wYWdvcy9hbHVtbm9zL3N1c2NyaXBjaW9uL3N1c2NyaXBjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SuscripcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionComponent", function() { return SuscripcionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var SuscripcionComponent = /** @class */ (function () {
    function SuscripcionComponent(_pagoService, _modalService, _fb, route, router) {
        this._pagoService = _pagoService;
        this._modalService = _modalService;
        this._fb = _fb;
        this.route = route;
        this.router = router;
        this.suscripcion = [];
        this.titulo = '';
        this.selectedSuscripcion = null;
        this.becaReinscripcion = 0;
        this.becaColegiatura = 0;
        this.title = 'Plan de pagos';
        this.idAlumno = this.route.snapshot.paramMap.get('id');
        this.redireccion = this.route.snapshot.paramMap.get('id2');
    }
    SuscripcionComponent.prototype.ngOnInit = function () {
        this.consultaSuscripciones();
    };
    SuscripcionComponent.prototype.consultaSuscripciones = function () {
        var _this = this;
        this._pagoService.consultaAlumnoSuscripcion(this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.suscripcion = response['suscripcion'];
                console.log(_this.suscripcion);
            }
            else {
                _this.suscripcion = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    SuscripcionComponent.prototype.getSuscripciones = function () {
        var _this = this;
        this._pagoService.catSuscripcion().subscribe(function (response) {
            if (response && response['status']) {
                _this.catSuscripciones = response['suscripcion'];
            }
            else {
                _this.catSuscripciones = undefined;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SuscripcionComponent.prototype.open = function (content, suscripcion) {
        var _this = this;
        if (suscripcion === void 0) { suscripcion = undefined; }
        if (suscripcion) {
            this.seleccionado = suscripcion;
            this.selectedSuscripcion = this.seleccionado;
        }
        else {
            this.seleccionado = null;
            this.selectedSuscripcion = null;
        }
        if (!this.catSuscripciones)
            this.getSuscripciones();
        if (this.pagosForm)
            this.pagosForm = undefined;
        if (this.seleccionado) {
            this.titulo = 'Editar pago';
        }
        else {
            this.titulo = 'Agregar pago';
        }
        this.pagosForm = this._fb.group({
            id_suscripcion: [this.seleccionado ? this.seleccionado.suscripcion_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            becaColegiatura: [this.seleccionado && this.seleccionado.beca_colegiatura ? '1 ' : ''],
            becaReinscripcion: [this.seleccionado && this.seleccionado.beca_reinscripcion ? '1 ' : ''],
            montoBecaColegiatura: [this.seleccionado ? parseInt(this.seleccionado.beca_colegiatura) : 0],
            tipoBecaColegiatura: [this.seleccionado ? this.seleccionado.valor_beca_colegiatura : "1"],
            montoBecaReinscripcion: [this.seleccionado ? parseInt(this.seleccionado.beca_reinscripcion) : 0],
            tipoBecaReinscripcion: [this.seleccionado ? this.seleccionado.valor_beca_reinscripcion : "1"],
        });
        if (this.seleccionado) {
            this.calculaBeca(1);
            this.calculaBeca(2);
        }
        this.pagosForm.get('tipoBecaReinscripcion').valueChanges.subscribe(function (val) {
            _this.calculaBeca(1);
        });
        this.pagosForm.get('tipoBecaColegiatura').valueChanges.subscribe(function (val) {
            _this.calculaBeca(2);
        });
        this._modalService.open(content, { backdrop: 'static', keyboard: false, size: 'lg' });
    };
    SuscripcionComponent.prototype.cambiaSuscripcion = function (event) {
        var i = event.target.selectedIndex - 1;
        this.selectedSuscripcion = this.catSuscripciones[i];
        this.becaReinscripcion = this.selectedSuscripcion.monto_reinscripcion;
        this.becaColegiatura = this.selectedSuscripcion.monto_colegiatura;
    };
    SuscripcionComponent.prototype.calculaBeca = function (tipo) {
        var monto, tipoBeca, montoBeca;
        if (tipo == 1) {
            monto = this.selectedSuscripcion.monto_reinscripcion;
            tipoBeca = this.pagosForm.get('tipoBecaReinscripcion').value;
            montoBeca = this.pagosForm.get('montoBecaReinscripcion').value;
        }
        else {
            monto = this.selectedSuscripcion.monto_colegiatura;
            tipoBeca = this.pagosForm.get('tipoBecaColegiatura').value;
            montoBeca = this.pagosForm.get('montoBecaColegiatura').value;
        }
        var total = 0;
        if (tipoBeca == 1) {
            total = parseFloat(monto) - parseFloat(montoBeca);
        }
        else {
            total = parseFloat(monto) - parseFloat(monto) * parseFloat(montoBeca) / 100;
        }
        if (tipo == 1) {
            this.becaReinscripcion = total;
        }
        else {
            this.becaColegiatura = total;
        }
    };
    SuscripcionComponent.prototype.enviaInformacion = function () {
        var _this = this;
        var form = Object.entries(this.pagosForm.value);
        var id = 0, id_suscripcion_alumno;
        if (this.seleccionado) {
            id = 1;
            id_suscripcion_alumno = this.seleccionado.alumno_suscripcion_id;
        }
        this._pagoService.modificaSuscripcionAlumno(this.idAlumno, form, id, id_suscripcion_alumno).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
                if (_this.redireccion == 1) {
                    _this.router.navigate(['/admin/solicitud-pagos/nueva-inscripcion/' + _this.idAlumno]);
                }
                _this.consultaSuscripciones();
                _this._modalService.dismissAll();
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    SuscripcionComponent.prototype.eliminar = function (id_suscripcion_alumno, index) {
        alertify.confirm('Eliminar suscripción', '¿Deseas eliminar la suscripción?', function () {
            var _this = this;
            this._pagoService.eliminaSuscripcionAlumno(this.idAlumno, id_suscripcion_alumno).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.suscripcion.splice(index, 1);
                    alertify.success(response['msg']).dismissOthers();
                }
                else {
                    alertify.error(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancel');
        });
    };
    Object.defineProperty(SuscripcionComponent.prototype, "f", {
        get: function () { return this.pagosForm.controls; },
        enumerable: true,
        configurable: true
    });
    SuscripcionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suscripcion',
            template: __webpack_require__(/*! ./suscripcion.component.html */ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.html"),
            styles: [__webpack_require__(/*! ./suscripcion.component.scss */ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SuscripcionComponent);
    return SuscripcionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.module.ts ***!
  \********************************************************************************/
/*! exports provided: SuscripcionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionModule", function() { return SuscripcionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _suscripcion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suscripcion.component */ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _suscripcion_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suscripcion-routing.module */ "./src/app/administracion/pagos/alumnos/suscripcion/suscripcion-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SuscripcionModule = /** @class */ (function () {
    function SuscripcionModule() {
    }
    SuscripcionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_suscripcion_component__WEBPACK_IMPORTED_MODULE_3__["SuscripcionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _suscripcion_routing_module__WEBPACK_IMPORTED_MODULE_7__["SuscripcionRoutingModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_2__["EncabezadoPersonaModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], SuscripcionModule);
    return SuscripcionModule;
}());



/***/ })

}]);
//# sourceMappingURL=suscripcion-suscripcion-module.js.map