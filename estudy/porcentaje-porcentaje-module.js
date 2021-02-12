(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["porcentaje-porcentaje-module"],{

/***/ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: PorcentajeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorcentajeRoutingModule", function() { return PorcentajeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _porcentaje_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./porcentaje.component */ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _porcentaje_component__WEBPACK_IMPORTED_MODULE_2__["PorcentajeComponent"],
    }
];
var PorcentajeRoutingModule = /** @class */ (function () {
    function PorcentajeRoutingModule() {
    }
    PorcentajeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PorcentajeRoutingModule);
    return PorcentajeRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 mb-3\">\r\n    <h4>{{title}}</h4>\r\n    <button class=\"btn btn-success mt-2\" (click)=\"open(content)\"><i class=\"fa fa-plus\"></i> Agregar descuento / pago</button>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Tipo</th>\r\n          <th scope=\"col\">Monto</th>\r\n          <th scope=\"col\">Día inicio </th>\r\n          <th scope=\"col\">Día Fin </th>\r\n          <th>Editar </th>\r\n          <th>Eliminar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"porcentaje.length == 0\">\r\n          <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n        </tr>\r\n        <tr *ngFor=\"let _porcentaje of porcentaje; let i = index\">\r\n          <td [ngClass]=\"[_porcentaje.tipo_porcentaje == 1 ? 'alert-success':'alert-danger']\">\r\n            <span *ngIf=\"_porcentaje.tipo_porcentaje == 1\">Descuento</span>\r\n            <span *ngIf=\"_porcentaje.tipo_porcentaje == 2\">Recargo</span>\r\n          </td>          \r\n          <td>\r\n            <span *ngIf=\"_porcentaje.valor == 1\"> $ </span>\r\n            {{_porcentaje.porcentaje}}\r\n            <span *ngIf=\"_porcentaje.valor == 2\"> % </span>\r\n          </td>\r\n          <td>{{_porcentaje.dia_inicio}}</td>\r\n          <td>{{_porcentaje.dia_fin}}</td>\r\n          <td><button class=\"btn btn-info\" (click)=\"open(content, _porcentaje)\"><i class=\"fa fa-pencil\"></i></button></td>\r\n          <td><button class=\"btn btn-danger\" (click)=\"eliminar(_porcentaje.porcentaje_pago_id, i)\"><i class=\"fa fa-times\"></i></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>    \r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modalTitle}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <form [formGroup]=\"porcentajeForm\" (ngSubmit)=\"enviaInformacion()\">\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"control-label\">Tipo</label><br>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" id=\"descuento\" formControlName=\"tipo\" class=\"custom-control-input\" value=\"1\">\r\n            <label class=\"custom-control-label\" for=\"descuento\">Descuento</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" id=\"recargo\" formControlName=\"tipo\" class=\"custom-control-input\" value=\"2\">\r\n            <label class=\"custom-control-label\" for=\"recargo\">Recargo</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"control-label\">Tipo de descuento</label><br>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" id=\"monto\" formControlName=\"id_valor\" class=\"custom-control-input\" value=\"1\">\r\n            <label class=\"custom-control-label\" for=\"monto\">Monto</label>\r\n          </div>        \r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" id=\"porcentaje\" formControlName=\"id_valor\" class=\"custom-control-input\" value=\"2\">\r\n            <label class=\"custom-control-label\" for=\"porcentaje\">Porcentaje</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"control-label\">Monto del descuento / recargo</label>\r\n          <input type=\"number\" formControlName=\"porcentaje\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"control-label\">Día de inicio</label>\r\n          <input type=\"number\" formControlName=\"inicio\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"control-label\">Día de fin</label>\r\n          <input type=\"number\" formControlName=\"fin\" class=\"form-control\">\r\n        </div>\r\n        <button class=\"btn btn-success pull-right mt-3\" [disabled]=\"porcentajeForm.invalid\">Guardar información</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc3VzY3JpcGNpb24vcG9yY2VudGFqZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wYWdvcy9zdXNjcmlwY2lvbi9wb3JjZW50YWplL3BvcmNlbnRhamUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PorcentajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorcentajeComponent", function() { return PorcentajeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PorcentajeComponent = /** @class */ (function () {
    function PorcentajeComponent(_pagoService, route, _modalService, formBuilder) {
        this._pagoService = _pagoService;
        this.route = route;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this.porcentaje = [];
        this.modalTitle = '';
        this.id_suscripcion = this.route.snapshot.paramMap.get('id');
        this.title = "Descuentos / recargos";
    }
    PorcentajeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pagoService.consultaSuscripcion(this.id_suscripcion).subscribe(function (response) {
            if (response && response['status']) {
                _this.suscripcion = response['suscripcion'];
                _this.title = _this.title + ' de ' + _this.suscripcion.nombre_suscripcion;
            }
            else {
                _this.suscripcion = null;
            }
        }, function (error) {
            console.log(error);
        });
        this.consultaPorcentajes();
    };
    PorcentajeComponent.prototype.consultaPorcentajes = function () {
        var _this = this;
        this._pagoService.consultaPorcentaje(this.id_suscripcion).subscribe(function (response) {
            if (response && response['status']) {
                _this.porcentaje = response['porcentaje'];
            }
            else {
                _this.porcentaje = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    PorcentajeComponent.prototype.open = function (content, seleccionado) {
        if (seleccionado === void 0) { seleccionado = undefined; }
        this.seleccionado = seleccionado;
        this.modalTitle = 'Nuevo descuento / recargo';
        if (seleccionado)
            this.modalTitle = 'Editar descuento / recargo';
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
        };
        var s = seleccionado;
        this.porcentajeForm = undefined;
        this.porcentajeForm = this.formBuilder.group({
            tipo: [s ? s.tipo_porcentaje : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id_valor: [s ? s.valor : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            porcentaje: [s ? s.porcentaje : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inicio: [s ? s.dia_inicio : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fin: [s ? s.dia_fin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this._modalService.open(content, ngbModalOptions);
    };
    PorcentajeComponent.prototype.enviaInformacion = function () {
        var _this = this;
        var id = 0, porcentaje_pago_id;
        if (this.seleccionado) {
            id = 1;
            porcentaje_pago_id = this.seleccionado.porcentaje_pago_id;
        }
        var form = Object.entries(this.porcentajeForm.value);
        this._pagoService.modificaPorcentaje(this.id_suscripcion, form, id, porcentaje_pago_id).subscribe(function (response) {
            if (response && response['status']) {
                _this._modalService.dismissAll();
                _this.consultaPorcentajes();
                alertify.success(response['msg']).dismissOthers();
            }
            else {
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    PorcentajeComponent.prototype.eliminar = function (id_porcentaje_pago, index) {
        alertify.confirm('Eliminar descuento / recargo', '¿Deseas eliminar el descuento / recargo?', function () {
            var _this = this;
            this._pagoService.eliminaPorcentaje(id_porcentaje_pago).subscribe(function (response) {
                if (response && response['status']) {
                    _this.porcentaje.splice(index, 1);
                    alertify.success(response['msg']).dismissOthers();
                }
                else {
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancel');
        });
    };
    PorcentajeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-porcentaje',
            template: __webpack_require__(/*! ./porcentaje.component.html */ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.html"),
            styles: [__webpack_require__(/*! ./porcentaje.component.scss */ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PorcentajeComponent);
    return PorcentajeComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PorcentajeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorcentajeModule", function() { return PorcentajeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _porcentaje_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./porcentaje-routing.module */ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje-routing.module.ts");
/* harmony import */ var _porcentaje_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./porcentaje.component */ "./src/app/administracion/pagos/suscripcion/porcentaje/porcentaje.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PorcentajeModule = /** @class */ (function () {
    function PorcentajeModule() {
    }
    PorcentajeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_porcentaje_component__WEBPACK_IMPORTED_MODULE_3__["PorcentajeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _porcentaje_routing_module__WEBPACK_IMPORTED_MODULE_2__["PorcentajeRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], PorcentajeModule);
    return PorcentajeModule;
}());



/***/ })

}]);
//# sourceMappingURL=porcentaje-porcentaje-module.js.map