(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-solicitud-pago-module"],{

/***/ "./src/app/administracion/pagos/alumnos/solicitud/solicitud-pago.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/solicitud/solicitud-pago.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SolicitudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudModule", function() { return SolicitudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-routing.module */ "./src/app/administracion/pagos/alumnos/solicitud/solicitud-routing.module.ts");
/* harmony import */ var _solicitud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud.component */ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SolicitudModule = /** @class */ (function () {
    function SolicitudModule() {
    }
    SolicitudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_solicitud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_2__["SolicitudRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_5__["EncabezadoPersonaModule"]
            ],
            exports: [
                _solicitud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudComponent"]
            ]
        })
    ], SolicitudModule);
    return SolicitudModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/solicitud/solicitud-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/solicitud/solicitud-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SolicitudRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudRoutingModule", function() { return SolicitudRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud.component */ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _solicitud_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudComponent"],
    }
];
var SolicitudRoutingModule = /** @class */ (function () {
    function SolicitudRoutingModule() {
    }
    SolicitudRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudRoutingModule);
    return SolicitudRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado-persona [idPersona]=\"idAlumno\" \r\n[idRol]=\"2\"></app-encabezado-persona>\r\n<h5 class=\"mt-3\">Pagos del alumno </h5>\r\n<a [routerLink]=\"['/admin/solicitud-pagos/nueva-colegiatura/'+idAlumno]\" class=\"btn btn-success m-3\"><i class=\"fa fa-plus\"></i> Agregar pago de colegiatura/reinscripción</a>\r\n<a [routerLink]=\"['/admin/solicitud-pagos/nuevo-producto/'+idAlumno]\" class=\"btn btn-success m-3\"><i class=\"fa fa-plus\"></i> Agregar pago de producto/servicio</a>\r\n\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Pago</th>\r\n      <th scope=\"col\">Monto</th>\r\n      <th scope=\"col\">Estatus del pago</th>\r\n      <th scope=\"col\">Fecha del pago</th>\r\n      <th scope=\"col\">Forma de pago</th>\r\n      <th scope=\"col\">Descuento</th>\r\n      <th scope=\"col\">Total a pagar</th>\r\n      <th scope=\"col\">Observación</th>\r\n      <th scope=\"col\">Ficha de pago</th>\r\n      <!--th scope=\"col\">Editar</th-->\r\n      <th scope=\"col\">Eliminar</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngIf=\"pagos.length == 0\">\r\n      <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n    </tr>\r\n    <tr *ngFor=\"let pago of pagos; let i = index\">\r\n      <td>{{pago.nombre_pago}}</td>\r\n      <td>{{pago.monto}}</td>\r\n      <td>\r\n        <button [routerLink]=\"['/admin/solicitud-pagos/estatus-pago/'+pago.solicitud_pago_id]\" class=\"btn \" [ngClass]=\"{'btn-outline-success': pago.estatus_solicitud_pago_id == 3,'btn-outline-warning': pago.estatus_solicitud_pago_id == 2 ,'btn-outline-danger': pago.estatus_solicitud_pago_id == 1}\">{{pago.desc_estatus_solicitud_pago}}</button>\r\n      </td>\r\n      <td><span *ngIf=\"pago.fecha_pago && pago.fecha_pago != '0000-00-00 00:00:00'\">{{pago.fecha_pago | date:\"dd/MM/yyy hh:mm:a\"}}</span></td>\r\n      <td>{{pago.desc_forma_pago}}</td>\r\n      <td>\r\n        <span class=\"badge badge-success m-1\" *ngIf=\"pago.beca > 0 \">Beca (${{pago.beca}})</span><br>\r\n        <span class=\"badge badge-success m-1\" *ngIf=\"pago.descuento_id\">\r\n          {{pago.desc_descuento}}\r\n          (<span *ngIf=\"pago.valor == 1\"> $ </span>\r\n          {{pago.descuento}}\r\n          <span *ngIf=\"pago.valor == 2\"> % </span>)\r\n        </span>\r\n        <span class=\"badge m-1\" [ngClass]=\"pago.porcentaje < 0 ? 'badge-danger' : 'badge-success'\" *ngIf=\"pago.porcentaje != 0 \">\r\n          <span  *ngIf=\"pago.porcentaje < 0\">Recargo ${{pago.porcentaje * -1}} </span>\r\n          <span *ngIf=\"pago.porcentaje > 0\">Pronto pago ${{pago.porcentaje}} </span>\r\n        </span> <br>\r\n\r\n              \r\n      </td>\r\n      <td>{{pago.monto_final}}</td>\r\n      <td>{{pago.observacion}}</td>\r\n      <td><a *ngIf=\"pago.estatus_solicitud_pago_id == '3'\" [href]=\"url +'pagos/docs/ficha.php?id_solicitud_pago='+pago.solicitud_pago_id\"  target=\"_blank\" class=\"btn btn-success\"><i class=\"fa fa-file-pdf-o\"></i></a></td>\r\n      <!--td><a [routerLink]=\"['/admin/solicitud-pagos/edita/'+pago.solicitud_pago_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td-->\r\n      <td><button (click)=\"eliminar(pago.solicitud_pago_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></td>    \r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL2FsdW1ub3Mvc29saWNpdHVkL3NvbGljaXR1ZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudComponent", function() { return SolicitudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var SolicitudComponent = /** @class */ (function () {
    function SolicitudComponent(_pagoService, route) {
        this._pagoService = _pagoService;
        this.route = route;
        this.pagos = [];
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Pagos del alumno";
        this.idAlumno = this.route.snapshot.paramMap.get('id');
        this._pagoService.consultaPagosAlumno(this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.pagos = response['pagos'];
            }
            else {
                _this.pagos = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudComponent.prototype.eliminar = function (id_solicitud_pago, index) {
        alertify.confirm('Eliminar pago', '¿Deseas eliminar el pago del alumnos?', function () {
            var _this = this;
            this._pagoService.eliminaSolicitudPago(id_solicitud_pago).subscribe(function (response) {
                if (response && response['status']) {
                    _this.pagos.splice(index, 1);
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
    SolicitudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud',
            template: __webpack_require__(/*! ./solicitud.component.html */ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud.component.scss */ "./src/app/administracion/pagos/alumnos/solicitud/solicitud.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SolicitudComponent);
    return SolicitudComponent;
}());



/***/ })

}]);
//# sourceMappingURL=solicitud-solicitud-pago-module.js.map