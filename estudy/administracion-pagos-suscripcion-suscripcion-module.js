(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-pagos-suscripcion-suscripcion-module"],{

/***/ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/consulta/consulta.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h4>{{title}}</h4>\r\n    <div>\r\n      <a [routerLink]=\"['../nuevo']\" class=\"btn btn-success m-3\"><i class=\"fa fa-plus\"></i> Nuevo plan de pagos</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Nombre</th>\r\n          <th scope=\"col\">Descripción</th>\r\n          <th scope=\"col\">Inscripción / Reinscripción</th>\r\n          <th scope=\"col\">Día de pago Límite</th>\r\n          <th scope=\"col\">Colegiatura</th>\r\n          <th scope=\"col\">Día de pago Límite</th>\r\n          <th scope=\"col\">Pago fácil / retrasos </th>\r\n          <th scope=\"col\">Lista de pagos</th>\r\n          <th scope=\"col\">Editar</th>\r\n          <th scope=\"col\">Eliminar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"suscripcion.length == 0\">\r\n          <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n        </tr>\r\n        <tr *ngFor=\"let _suscripcion of suscripcion; let i = index\">\r\n          <td>{{_suscripcion.nombre_suscripcion}}</td>\r\n          <td [innerHTML]=\"_suscripcion.descripcion_suscripcion\"></td>\r\n          <td>{{_suscripcion.monto_reinscripcion}}</td>          \r\n          <td>{{_suscripcion.dia_pago_reinscripcion}}</td>          \r\n          <td>{{_suscripcion.monto_colegiatura}}</td>          \r\n          <td>{{_suscripcion.dia_pago_colegiatura}}</td>          \r\n          <td  ><a [routerLink]=\"['../porcentaje/'+_suscripcion.suscripcion_id]\" class=\"btn btn-success\"><i class=\"fa fa-percent\"></i></a></td>\r\n          <td  ><a [routerLink]=\"['../generar-pago/'+_suscripcion.suscripcion_id]\" class=\"btn btn-success\"><i class=\"fa fa-money\"></i></a></td>\r\n          <td  ><a [routerLink]=\"['../edita/'+_suscripcion.suscripcion_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td>\r\n          <td  ><button (click)=\"eliminar(_suscripcion.suscripcion_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></td>\r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/consulta/consulta.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL3N1c2NyaXBjaW9uL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/consulta/consulta.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
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
    function ConsultaComponent(_pagoService) {
        this._pagoService = _pagoService;
        this.suscripcion = [];
        this.title = "Planes de pagos";
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pagoService.catSuscripcion().subscribe(function (response) {
            if (response && response['status']) {
                _this.suscripcion = response['suscripcion'];
            }
            else {
                _this.suscripcion = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm('¿deseas eliminar esta suscripción?', function () {
            var _this = this;
            this._pagoService.eliminaSuscripcion(id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.suscripcion.splice(index, 1);
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
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/form/form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/form/form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form [formGroup]=\"colegiaturaForm\" (ngSubmit)=\"enviarInformacion()\">\r\n\r\n  <div class=\"col-md-12\">              \r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Nombre del plan de pagos:</label>\r\n      <input formControlName=\"nombreSuscripcion\" class=\"form-control\" id=\"beca\" placeholder=\"Ingresa el nombre del plan de pagos\" type=\"text\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.nombreSuscripcion.invalid && f.nombreSuscripcion.touched\">\r\n        {{'fmErrText' | translate}}\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Descripcion del plan de pagos:</label>\r\n      <ckeditor formControlName=\"descripcionSuscripcion\" [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\"></ckeditor>                              \r\n      <!-- <textarea formControlName=\"descripcionSuscripcion\" class=\"form-control\" id=\"beca\" placeholder=\"Ingresa la descripción\" >\r\n      </textarea> -->\r\n      <span class=\"invalidText\" *ngIf=\"f.nombreSuscripcion.invalid && f.nombreSuscripcion.touched\">\r\n        {{'fmErrText' | translate}}\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Clave del plan de pagos:</label>\r\n      <input formControlName=\"claveSuscripcion\" class=\"form-control\" id=\"clave_suscripcion\" placeholder=\"Ingresa la clave del plan de pagos\" type=\"text\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.claveSuscripcion.invalid && f.claveSuscripcion.touched\">\r\n        {{'fmErrText' | translate}}\r\n      </span>\r\n    </div>\r\n    \r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-6\">\r\n        <h5>Inscripción/Reinscripción</h5>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"beca\">Monto:</label>\r\n          <input formControlName=\"montoReinscripcion\" class=\"form-control\" id=\"montoReinscripcion\" placeholder=\"Monto de la reinscripción\" type=\"number\">\r\n          <span class=\"invalidText\" *ngIf=\"f.montoReinscripcion.invalid && f.montoReinscripcion.touched\">\r\n            {{'fmErrNumber' | translate}}\r\n          </span>\r\n        </div>   \r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"beca\">Día de pago:</label>\r\n          <input formControlName=\"diaPagoReinscripcion\" class=\"form-control\" id=\"diaPagoReinscripcion\" placeholder=\"Día de pago límite\" type=\"number\">\r\n          <span class=\"invalidText\" *ngIf=\"f.diaPagoReinscripcion.invalid && f.diaPagoReinscripcion.touched\">\r\n            {{'fmErrNumber' | translate}}\r\n          </span>\r\n        </div>   \r\n      </div>\r\n      <div class=\"col-6\">\r\n        <h5>Colegiaturas</h5>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"beca\">Monto:</label>\r\n          <input formControlName=\"montoColegiatura\" class=\"form-control\" id=\"montoColegiatura\" placeholder=\"Monto de la colegiatura\" type=\"number\">\r\n          <span class=\"invalidText\" *ngIf=\"f.montoColegiatura.invalid && f.montoColegiatura.touched\">\r\n            {{'fmErrNumber' | translate}}\r\n          </span>\r\n        </div>   \r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"beca\">Día de pago:</label>\r\n          <input formControlName=\"diaPagoColegiatura\" class=\"form-control\" id=\"diaPagoColegiatura\" placeholder=\"Día de pago limite\" type=\"number\">\r\n          <span class=\"invalidText\" *ngIf=\"f.diaPagoColegiatura.invalid && f.diaPagoColegiatura.touched\">\r\n            {{'fmErrNumber' | translate}}\r\n          </span>\r\n        </div>   \r\n      </div>\r\n    </div>\r\n                                                                                                                                   \r\n    <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right mt-3\">{{'fmSave' | translate}}</button>\r\n    <div class=\"resultado-datos-ciclo margin-top\" ></div>      \r\n  </div>  \r\n  </form>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/form/form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/form/form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc3VzY3JpcGNpb24vZm9ybS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wYWdvcy9zdXNjcmlwY2lvbi9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/form/form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/form/form.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _models_simpleEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/simpleEditor */ "./src/app/models/simpleEditor.ts");
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
    function FormComponent(formBuilder, route, router, _pagoService, _usuarioService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this._pagoService = _pagoService;
        this._usuarioService = _usuarioService;
        this.simpleEditor = _models_simpleEditor__WEBPACK_IMPORTED_MODULE_5__["simpleEditor"];
        this.id_suscripcion = this.route.snapshot.paramMap.get('id');
        if (this.id_suscripcion)
            this.title = 'Editar plan de pagos';
        else
            this.title = 'Nuevo plan  de pagos';
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        this.colegiaturaForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            nombreSuscripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descripcionSuscripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            claveSuscripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            montoReinscripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diaPagoReinscripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            montoColegiatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diaPagoColegiatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        if (this.id_suscripcion) {
            this._pagoService.consultaSuscripcion(this.id_suscripcion).subscribe(function (response) {
                if (response && response['suscripcion']) {
                    var suscripcion = response['suscripcion'];
                    _this.colegiaturaForm.get('nombreSuscripcion').setValue(suscripcion.nombre_suscripcion);
                    _this.colegiaturaForm.get('descripcionSuscripcion').setValue(suscripcion.descripcion_suscripcion);
                    _this.colegiaturaForm.get('claveSuscripcion').setValue(suscripcion.clave_suscripcion);
                    _this.colegiaturaForm.get('montoColegiatura').setValue(suscripcion.monto_colegiatura);
                    _this.colegiaturaForm.get('diaPagoColegiatura').setValue(suscripcion.dia_pago_colegiatura);
                    _this.colegiaturaForm.get('diaPagoReinscripcion').setValue(suscripcion.dia_pago_reinscripcion);
                    _this.colegiaturaForm.get('montoReinscripcion').setValue(suscripcion.monto_reinscripcion);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.colegiaturaForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.enviarInformacion = function () {
        var _this = this;
        var url = this.router.url;
        // stop here if form is invalid
        if (this.colegiaturaForm.invalid) {
            Object.keys(this.colegiaturaForm.controls).forEach(function (controlKey) {
                _this.colegiaturaForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._pagoService.modificaSuscripcion(this.colegiaturaForm, this.id_suscripcion).subscribe(function (response) {
            if (response && response['status']) {
                if (!_this.id_suscripcion)
                    _this.id_suscripcion = response['idSuscripcion'];
                _this.router.navigate(['admin/suscripcion/generar-pago/' + _this.id_suscripcion]);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/pagos/suscripcion/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/pagos/suscripcion/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_pago_service__WEBPACK_IMPORTED_MODULE_4__["PagoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/suscripcion-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/suscripcion-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SuscripcionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionRoutingModule", function() { return SuscripcionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _suscripcion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suscripcion.component */ "./src/app/administracion/pagos/suscripcion/suscripcion.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/pagos/suscripcion/form/form.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _suscripcion_component__WEBPACK_IMPORTED_MODULE_2__["SuscripcionComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'edita/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
            { path: 'nuevo', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"] },
            { path: 'porcentaje/:id', loadChildren: './porcentaje/porcentaje.module#PorcentajeModule' },
            { path: 'generar-pago/:id', loadChildren: './generar-pago/generar-pago.module#GenerarPagoModule' }
        ]
    }];
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

/***/ "./src/app/administracion/pagos/suscripcion/suscripcion.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/suscripcion.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/suscripcion.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/suscripcion.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL3N1c2NyaXBjaW9uL3N1c2NyaXBjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/suscripcion.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/suscripcion.component.ts ***!
  \***************************************************************************/
/*! exports provided: SuscripcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionComponent", function() { return SuscripcionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
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
    function SuscripcionComponent() {
    }
    SuscripcionComponent.prototype.ngOnInit = function () {
    };
    SuscripcionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suscripcion',
            template: __webpack_require__(/*! ./suscripcion.component.html */ "./src/app/administracion/pagos/suscripcion/suscripcion.component.html"),
            styles: [__webpack_require__(/*! ./suscripcion.component.scss */ "./src/app/administracion/pagos/suscripcion/suscripcion.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], SuscripcionComponent);
    return SuscripcionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/suscripcion/suscripcion.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/pagos/suscripcion/suscripcion.module.ts ***!
  \************************************************************************/
/*! exports provided: SuscripcionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscripcionModule", function() { return SuscripcionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _suscripcion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suscripcion-routing.module */ "./src/app/administracion/pagos/suscripcion/suscripcion-routing.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/pagos/suscripcion/form/form.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/pagos/suscripcion/consulta/consulta.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form/form.module */ "./src/app/administracion/form/form.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _suscripcion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suscripcion.component */ "./src/app/administracion/pagos/suscripcion/suscripcion.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
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
            declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"], _suscripcion_component__WEBPACK_IMPORTED_MODULE_8__["SuscripcionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _suscripcion_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuscripcionRoutingModule"],
                _form_form_module__WEBPACK_IMPORTED_MODULE_6__["FormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
            ]
        })
    ], SuscripcionModule);
    return SuscripcionModule;
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


/***/ })

}]);
//# sourceMappingURL=administracion-pagos-suscripcion-suscripcion-module.js.map