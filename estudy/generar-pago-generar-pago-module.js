(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generar-pago-generar-pago-module"],{

/***/ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: GenerarPagoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarPagoRoutingModule", function() { return GenerarPagoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generar_pago_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generar-pago.component */ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _generar_pago_component__WEBPACK_IMPORTED_MODULE_2__["GenerarPagoComponent"]
    }];
var GenerarPagoRoutingModule = /** @class */ (function () {
    function GenerarPagoRoutingModule() {
    }
    GenerarPagoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GenerarPagoRoutingModule);
    return GenerarPagoRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <p>Selecciona los meses que deseas que el sistema aplique el pago</p>\r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form class=\"row\" [formGroup]=\"generarPagoForm\" (ngSubmit)=\"enviarInformacion()\">\r\n\r\n  <div class=\"col-md-4\">              \r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Selecciona el mes:</label>\r\n      <select class=\"form-control\"  formControlName=\"mes\">\r\n        <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n        <option value=\"1\">Enero</option>\r\n        <option value=\"2\">Febrero</option>\r\n        <option value=\"3\">Marzo</option>\r\n        <option value=\"4\">Abril</option>\r\n        <option value=\"5\">Mayo</option>\r\n        <option value=\"6\">Junio</option>\r\n        <option value=\"7\">Julio</option>        \r\n        <option value=\"8\">Agosto</option>\r\n        <option value=\"9\">Septiembre</option>\r\n        <option value=\"10\">Octubre</option>\r\n        <option value=\"11\">Noviembre</option>\r\n        <option value=\"12\">Diciembre</option>\r\n     </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.mes.invalid && f.mes.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Selecciona el año:</label>\r\n      <select class=\"form-control\"  formControlName=\"anio\">\r\n        <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n        <option value=\"2019\">2019</option>\r\n        <option value=\"2020\">2020</option>\r\n        <option value=\"2021\">2021</option>\r\n        <option value=\"2022\">2022</option>\r\n        <option value=\"2023\">2023</option>\r\n        <option value=\"2024\">2024</option>\r\n        <option value=\"2025\">2025</option>\r\n        <option value=\"2026\">2026</option>        \r\n        <option value=\"2027\">2027</option>\r\n        <option value=\"2028\">2028</option>\r\n        <option value=\"2029\">2029</option>\r\n     </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.anio.invalid && f.anio.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"form-group mb-2\">\r\n      <label class=\"control-label\">Pago</label><br>\r\n      <div class=\"custom-control custom-radio custom-control-inline\">\r\n        <input type=\"radio\" id=\"colegiatura1\" formControlName=\"tipoPago\" class=\"custom-control-input\" value=\"1\">\r\n        <label class=\"custom-control-label\" for=\"colegiatura1\">Reinscripción</label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio custom-control-inline\">\r\n        <input type=\"radio\" id=\"colegiatura\" formControlName=\"tipoPago\" class=\"custom-control-input\" value=\"2\" >\r\n        <label class=\"custom-control-label\" for=\"colegiatura\">Colegiatura</label>\r\n      </div>\r\n      <br>\r\n      <span class=\"invalidText\" *ngIf=\"f.tipoPago.invalid && f.tipoPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n                                                                                                                                \r\n    <button  type=\"submit\" class=\"btn btn-primary pull-right mt-1\">{{'fmSave' | translate}}</button>\r\n    <div class=\"resultado-datos-ciclo margin-top\" ></div>      \r\n  </div>  \r\n  </form>\r\n  </div>\r\n  <div class=\"col-12 mt-4\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-border\">\r\n        <thead class=\"bg-light\">\r\n          <tr>\r\n            <th>Tipo</th>\r\n            <th>Mes</th>\r\n            <th>Año</th>\r\n            <th>Monto</th>\r\n            <th>Eliminar</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"Pagos\">\r\n          <tr *ngFor=\"let pago of Pagos; let i = index;\">\r\n            <td>\r\n              <span *ngIf=\"pago.tipo == 1\" >Reinscripción</span>\r\n              <span *ngIf=\"pago.tipo == 2\" >Colegiatura</span>\r\n              <span *ngIf=\"pago.tipo == 3\" >Inscripcion</span>\r\n\r\n            </td>\r\n            <td><span *ngIf=\"pago.mes\">{{pago.mesNombre}}</span></td>\r\n            <td><span *ngIf=\"pago.anio && pago.anio != '0' \">{{pago.anio}}</span></td>\r\n            <td>\r\n              <span *ngIf=\"pago.tipo == 1\" >{{pago.monto_reinscripcion}}</span>\r\n              <span *ngIf=\"pago.tipo == 2\" >{{pago.monto_colegiatura}}</span>\r\n              <span *ngIf=\"pago.tipo == 3\" >{{pago.monto_inscripcion}}</span>\r\n\r\n            </td>\r\n            <td><button class=\"btn btn-danger\" (click)=\"eliminar(pago.pago_id,index)\"><i class=\"fa fa-trash\"></i></button></td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"!Pagos\">\r\n          <tr>\r\n            <td class=\"text-center\" colspan=\"12\">No se encontró información</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc3VzY3JpcGNpb24vZ2VuZXJhci1wYWdvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL3N1c2NyaXBjaW9uL2dlbmVyYXItcGFnby9nZW5lcmFyLXBhZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GenerarPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarPagoComponent", function() { return GenerarPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenerarPagoComponent = /** @class */ (function () {
    function GenerarPagoComponent(_pagoService, route, formBuilder, router) {
        this._pagoService = _pagoService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.descuentos = [];
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.id_suscripcion = this.route.snapshot.paramMap.get('id');
        this.title = "Generar pago";
    }
    GenerarPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.consulta();
        this._pagoService.consultaSuscripcion(this.id_suscripcion).subscribe(function (response) {
            if (response && response['status']) {
                _this.suscripcion = response['suscripcion'];
                _this.title = _this.title + ' para ' + _this.suscripcion.nombre_suscripcion;
            }
            else {
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catDescuentos().subscribe(function (response) {
            if (response && response['status']) {
                _this.descuentos = response['descuentos'];
            }
            else {
                _this.descuentos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this.generarPagoForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            mes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            anio: ['2020', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tipoPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(GenerarPagoComponent.prototype, "f", {
        get: function () { return this.generarPagoForm.controls; },
        enumerable: true,
        configurable: true
    });
    GenerarPagoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.generarPagoForm.invalid) {
            Object.keys(this.generarPagoForm.controls).forEach(function (controlKey) {
                _this.generarPagoForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        var duplicados = this.Pagos.filter(function (suscripcion) {
            console.log(suscripcion.anio, suscripcion.mes, suscripcion.tipo);
            return suscripcion.anio == this.generarPagoForm.get('anio').value && suscripcion.mes == this.generarPagoForm.get('mes').value && suscripcion.tipo == this.generarPagoForm.get('tipoPago').value;
        }.bind(this));
        if (duplicados.length) {
            alertify.error('Este registro ya existe');
        }
        else {
            alertify.confirm('', '¿Deseas generar el pago este mes?', function () {
                var _this = this;
                this._pagoService.guardarSuscripcionPago(this.generarPagoForm, this.id_suscripcion).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this.consulta();
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }.bind(this), function () {
                alertify.error('Cancelado');
            });
        }
    };
    GenerarPagoComponent.prototype.consulta = function () {
        var _this = this;
        this._pagoService.consultaPagosGenerados(this.id_suscripcion).subscribe(function (response) {
            if (response && response['status']) {
                _this.Pagos = response['pagos'];
                _this.Pagos.forEach(function (pagos) {
                    pagos.mesNombre = _this.meses[parseInt(pagos.mes) - 1];
                });
                console.log(_this.Pagos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    GenerarPagoComponent.prototype.eliminar = function (id, index) {
        alertify.confirm('¿deseas eliminar el pago?', function () {
            var _this = this;
            this._pagoService.eliminaSuscripcionPago(id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Pagos.splice(index, 1);
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
    GenerarPagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generar-pago',
            template: __webpack_require__(/*! ./generar-pago.component.html */ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.html"),
            styles: [__webpack_require__(/*! ./generar-pago.component.scss */ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GenerarPagoComponent);
    return GenerarPagoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.module.ts ***!
  \**************************************************************************************/
/*! exports provided: GenerarPagoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarPagoModule", function() { return GenerarPagoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _generar_pago_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generar-pago-routing.module */ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago-routing.module.ts");
/* harmony import */ var _generar_pago_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generar-pago.component */ "./src/app/administracion/pagos/suscripcion/generar-pago/generar-pago.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_administracion_form_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/administracion/form/form.module */ "./src/app/administracion/form/form.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GenerarPagoModule = /** @class */ (function () {
    function GenerarPagoModule() {
    }
    GenerarPagoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_generar_pago_component__WEBPACK_IMPORTED_MODULE_3__["GenerarPagoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _generar_pago_routing_module__WEBPACK_IMPORTED_MODULE_2__["GenerarPagoRoutingModule"],
                src_app_administracion_form_form_module__WEBPACK_IMPORTED_MODULE_5__["FormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"]
            ]
        })
    ], GenerarPagoModule);
    return GenerarPagoModule;
}());



/***/ })

}]);
//# sourceMappingURL=generar-pago-generar-pago-module.js.map