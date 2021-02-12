(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-components-pago-pago-module"],{

/***/ "./src/app/components/file-upload/file.upload.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/file-upload/file.upload.validators.ts ***!
  \******************************************************************/
/*! exports provided: requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");

function requiredFileType(type) {
    return function (control) {
        var archivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__["Archivo"];
        var tipoArchivos;
        if (type == 0) {
            type = archivo.length - 1;
            tipoArchivos = archivo[type].formatos;
        }
        else {
            tipoArchivos = archivo[type].formatos;
        }
        var file = control.value;
        if (file) {
            var archivo_1 = file.name.split('.');
            var longitud = archivo_1.length;
            var extension = file.name.split('.')[longitud - 1].toLowerCase();
            if (tipoArchivos.indexOf(extension.toLowerCase()) == -1) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/components/pago/pago-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/pago/pago-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PagoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoRoutingModule", function() { return PagoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pago_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pago.component */ "./src/app/components/pago/pago.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _pago_component__WEBPACK_IMPORTED_MODULE_2__["PagoComponent"]
    }
];
var PagoRoutingModule = /** @class */ (function () {
    function PagoRoutingModule() {
    }
    PagoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagoRoutingModule);
    return PagoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/pago/pago.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/pago/pago.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-print-none\" *ngIf=\"solicitudPago\">\r\n  <div class=\"row\">\r\n    <div class=\"col-5\">\r\n      <table class=\"table table-bordered\">\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"font-weight-bold\">Nombre del pago:</td>\r\n            <td>{{solicitudPago.nombre_pago}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"font-weight-bold\">Monto:</td>\r\n            <td>$ {{solicitudPago.monto}}</td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"solicitudPago.beca && solicitudPago.beca != 0\" >\r\n            <td class=\"font-weight-bold\">Beca:</td>\r\n            <td class=\"text-success\">$ {{solicitudPago.beca}}</td>\r\n          </tr>\r\n \r\n          <tr class=\"codigo_promocion\" *ngIf=\"!solicitudPago.descuento_id && tipoPago == 0\" >\r\n            <td  span=\"2\">\r\n              <div class=\"input-group m-1\">\r\n                <input [(ngModel)]=\"ingresarCodigo\" type=\"checkbox\" class=\"custom-control-input\"  id=\"codigo\" name=\"codigo\"> \r\n                <label class=\"custom-control-label pl-3\" for=\"codigo\">Ingresar código de promoción</label>\r\n              </div>\r\n              <div *ngIf=\"ingresarCodigo\" class=\"input-group m-1\">\r\n                <input  class=\"form-control\"\r\n                  #promocion [(ngModel)]=\"codigo_promocion\" (input)=\"promocion.value=$event.target.value.toUpperCase()\" \r\n                      placeholder=\"Ingresa aquí el código de promoción\"\r\n                    (blur)=\"validar_codigo()\"\r\n                    >\r\n                <div class=\"input-group-append\" >\r\n                  <span class=\"input-group-text\" id=\"basic-addon2\" [ngClass]=\"{'alert-success': estatusDescuento == 1, 'alert-danger' : estatusDescuento == 0 }\" >\r\n                    <i *ngIf=\"!consultaDescuento\" class=\" fa fa-ticket\"></i>\r\n                    <i *ngIf=\"consultaDescuento\" class=\" fa fa-ticket\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <p *ngIf=\"estatusDescuento == 1\" class=\"text-success\">Código correcto!</p>\r\n              <p *ngIf=\"estatusDescuento == 0\" class=\"text-danger\">Código de promoción Inválido</p>\r\n            </td>\r\n          </tr>\r\n          <tr   *ngIf=\" solicitudPago.descuento_id\">\r\n            <td class=\"font-weight-bold\">{{solicitudPago.descripcion_descuento}} </td>\r\n            <td class=\"text-success\">\r\n              <span *ngIf=\"solicitudPago.valor_descuento == 1\"> $ </span>\r\n                 {{solicitudPago.descuento}}\r\n                <span *ngIf=\"solicitudPago.valor_descuento == 2\"> % </span>\r\n              </td>\r\n          </tr>\r\n          <tr class=\"pago\">\r\n            <td class=\"font-weight-bold\">Total a pagar</td>\r\n            <td>$ {{solicitudPago.monto_final}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-7 tipoPago\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <p  *ngIf=\"tipoPago == 0\"><b>Selecciona un método de pago:</b></p>\r\n          <button  *ngIf=\"tipoPago != 0\"  class=\"btn btn-link \"  (click)=\"elegirPago(0)\">Seleccionar otro método de pago</button>\r\n        </div>\r\n        <div *ngIf=\"solicitudPago.tarjeta == 1 && (tipoPago == 0 || tipoPago == 1) \" class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n          <div [ngClass]=\"tipoPago== 1 ? 'alert-success':'alert-secondary'\"  class=\"text-center alert\" (click)=\"elegirPago(1)\"  style=\"cursor: pointer;\">\r\n            <i class=\"fa fa-credit-card fa-2x\" style=\"color:#002144\" aria-hidden=\"true\"></i>\r\n            <a   ><p><b>Pago con tarjeta<br></b>Crédito o débito</p></a>\r\n          </div>\r\n        </div>\r\n        <div  *ngIf=\"solicitudPago.transferencia == 1  && (tipoPago == 0 || tipoPago == 2)\" class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n          <div [ngClass]=\"tipoPago== 2 ? 'alert-success':'alert-secondary'\" class=\"text-center alert \" (click)=\"elegirPago(2)\"  style=\"cursor: pointer;\">\r\n            <i class=\"fa fa-barcode fa-2x\" style=\"color:#002144\" aria-hidden=\"true\"></i>\r\n            <a><p><b>Pago en tienda</b></p></a>\r\n          </div>\r\n        </div>\r\n        <div   *ngIf=\"solicitudPago.fisico == 1  && (tipoPago == 0 || tipoPago == 3) \" class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n          <div [ngClass]=\"tipoPago== 3 ? 'alert-success':'alert-secondary'\"  class=\"  text-center alert\" (click)=\"elegirPago(3)\"  style=\"cursor: pointer;\">\r\n            <i  class=\"fa fa-file-text-o fa-2x\" style=\"color:#002144\" aria-hidden=\"true\"></i>\r\n            <a><p>Pago por transferencia/depósito en el banco</p></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div>\r\n  <h5 *ngIf=\"tipoPago ==1\"> <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Pago con tarjeta</h5>\r\n  <h5 *ngIf=\"tipoPago ==2\"> <i class=\"fa fa-barcode\"  aria-hidden=\"true\"></i> Pago en efectivo en tienda de conveniencia</h5>\r\n  <h5 *ngIf=\"tipoPago ==3\"> <i class=\"fa fa-bank\"  aria-hidden=\"true\"></i> Pago en banco / transferencia</h5>\r\n  <!--div class=\"row alert alert-info d-print-none\" >       \r\n    <div *ngIf=\"solicitudPago\" class=\"col-6\">\r\n      \r\n      <h5>{{solicitudPago.nombre_pago}}</h5>\r\n      <h4><b *ngIf=\" solicitudPago.descuento_id\"> con {{solicitudPago.descripcion_descuento}}</b>${{solicitudPago.monto_final}}</h4>\r\n    </div>\r\n    <div class=\"col-6 text-right\">\r\n      <h5 *ngIf=\"tipoPago ==1\"> <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> Pago con tarjeta</h5>\r\n      <h5 *ngIf=\"tipoPago ==2\"> <i class=\"fa fa-barcode\"  aria-hidden=\"true\"></i> Pago en efectivo en tienda de conveniencia</h5>\r\n      <h5 *ngIf=\"tipoPago ==3\"> <i class=\"fa fa-bank\"  aria-hidden=\"true\"></i> Pago en banco / transferencia</h5>\r\n    </div>\r\n  </div-->\r\n  <!--div class=\"row m-3\" *ngIf=\"tipoPago == 0\">\r\n    <div class=\"col-6\">\r\n      \r\n\r\n\r\n      \r\n    </div>\r\n  </div-->\r\n  <div class=\"row\" *ngIf=\"solicitudPago\">\r\n    <!--div class=\"col-7 d-print-none\" *ngIf=\"tipoPago == 0\">  \r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <p><b>Selecciona un método de pago:</b></p>\r\n        </div>\r\n        <div *ngIf=\"solicitudPago.tarjeta == 1\" class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n          <div class=\"offset-md-1 text-center jumbotron\" (click)=\"elegirPago(1)\"  style=\"cursor: pointer;\">\r\n            <i class=\"fa fa-credit-card fa-3x\" style=\"color:#002144\" aria-hidden=\"true\"></i>\r\n            <a   ><p><b>Pago con tarjeta<br></b>Crédito o débito</p></a>\r\n          </div>\r\n        </div>\r\n        <div  *ngIf=\"solicitudPago.transferencia == 1\" class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n          <div class=\"offset-md-1 text-center jumbotron\" (click)=\"elegirPago(2)\"  style=\"cursor: pointer;\">\r\n            <i class=\"fa fa-barcode fa-3x\" style=\"color:#002144\" aria-hidden=\"true\"></i>\r\n            <a><p><b>Pago en efectivo en tienda de conveniencia</b></p></a>\r\n          </div>\r\n        </div>\r\n        <div   *ngIf=\"solicitudPago.fisico == 1\" class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n          <div class=\"offset-md-1  text-center jumbotron\" (click)=\"elegirPago(3)\"  style=\"cursor: pointer;\">\r\n            <i class=\"fa fa-bank fa-3x\" style=\"color:#002144\" aria-hidden=\"true\"></i>\r\n            <a><p>Pago en banco / transferencia</p></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div-->\r\n    <div *ngIf=\"tipoPago != 0\"  class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <!-- <iframe *ngIf=\"tipoPago == 1\" [src]=\"url+'/pagos/openPay/index.html?id='+solicitudPago.solicitud_pago_id | safeUrl\" style=\"border:0px; width: 100%; height: 800px\"></iframe> -->\r\n          <iframe class=\"iframe\" *ngIf=\"tipoPago == 1\" style=\"border:0px; width: 100%; height: 800px\" \r\n            [src]=\"urlFrontPago + 'open-pay/' + idSolicitudPago + '/' + plataforma | safeUrl\" ></iframe>\r\n          <iframe class=\"iframe\" *ngIf=\"tipoPago == 2\" style=\"border:0px; width: 100%; height: 800px\" \r\n          [src]=\"urlFrontPago + 'open-pay-transfer/' + idSolicitudPago | safeUrl\" ></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-transferencia   *ngIf=\"tipoPago == 3\" [monto]=\"monto\" [descripcion]=\"descripcion\"\r\n  [fecha_limite]=\"fecha_limite\" class=\"m-0 p-0\"></app-transferencia>\r\n"

/***/ }),

/***/ "./src/app/components/pago/pago.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/pago/pago.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pago td {\n  font-size: 18px; }\n\n@media print {\n  .container {\n    margin: 0px !important;\n    padding: 0px !important; }\n  .codigo_promocion {\n    visibility: hidden; }\n  .tipoPago {\n    visibility: hidden; }\n  .pago {\n    margin-top: -30%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ29cXHBhZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZSxFQUNsQjs7QUFHTDtFQUNJO0lBQ0ksdUJBQXNCO0lBQ3RCLHdCQUF1QixFQUMxQjtFQUVEO0lBQ0ksbUJBQWtCLEVBQ3JCO0VBQ0Q7SUFDSSxtQkFBa0IsRUFDckI7RUFDRDtJQUNJLGlCQUFnQixFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdvL3BhZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnb3tcclxuICAgIHRke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29kaWdvX3Byb21vY2lvbntcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAudGlwb1BhZ297XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnBhZ297XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pago/pago.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/pago/pago.component.ts ***!
  \***************************************************/
/*! exports provided: PagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoComponent", function() { return PagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_administracion_pagos_services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/pagos/services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
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




var PagoComponent = /** @class */ (function () {
    function PagoComponent(route, _pagoService, router) {
        this.route = route;
        this._pagoService = _pagoService;
        this.router = router;
        this.tipoPago = 0;
        this.solicitudPago = null;
        //metodosPago = 0;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAssets;
        this.ingresarCodigo = false;
        this.consultaDescuento = false;
        this.estatusDescuento = null;
        this.urlFrontPago = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFrontPago;
    }
    PagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plataforma = this.router.url.split('/')[1];
        this.idSolicitudPago = this.route.snapshot.paramMap.get('id');
        this._pagoService.consultaSolicitud(this.idSolicitudPago).subscribe(function (response) {
            if (response && response['status']) {
                _this.solicitudPago = response['solicitud'];
                _this.monto = _this.solicitudPago.monto_final;
                _this.descripcion = _this.solicitudPago.nombre_pago;
                if (_this.solicitudPago.descuento_id) {
                    _this.codigo_promocion = _this.solicitudPago.clave_descuento;
                    _this.ingresarCodigo = true;
                    _this.estatusDescuento = 1;
                }
                _this.fecha_limite = new Date(response['solicitud']['fecha_pago'] * 1000);
                /*this.metodosPago = parseInt(this.solicitudPago.tarjeta) + parseInt(this.solicitudPago.transferencia) +parseInt(this.solicitudPago.fisico);
      
                if(this.metodosPago == 1){
                  if(this.solicitudPago.tarjeta == 1){
                    this.elegirPago(1);
                  }
                  if(this.solicitudPago.transferencia == 1){
                    this.elegirPago(2);
                  }
                  if(this.solicitudPago.fisico == 1){
                    
                    this.elegirPago(3);
                  }
                }else{
                  console.log(this.solicitudPago)
                  if(this.solicitudPago.estatus_solicitud_pago_id == '2' && this.solicitudPago.forma_pago_id == '3'){
                    this.elegirPago(2);
                  }
                }*/
            }
            else {
            }
        }, function (error) {
            console.log(error);
        });
    };
    PagoComponent.prototype.elegirPago = function (tipoPago) {
        this.tipoPago = tipoPago;
    };
    PagoComponent.prototype.validar_codigo = function () {
        var _this = this;
        this._pagoService.codigoPromocion(this.idSolicitudPago, this.codigo_promocion).subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusDescuento = 1;
                _this.solicitudPago.descuento_id = response['idDescuento'];
                _this.solicitudPago.descripcion_descuento = response['nombreDescuento'];
                _this.solicitudPago.monto_final = response['montoFinal'];
                _this.solicitudPago.descuento = response['montoDescuento'];
                _this.solicitudPago.valor_descuento = response['valorDescuento'];
            }
            else {
                _this.estatusDescuento = 0;
            }
        }, function (error) {
            console.log(error);
        });
    };
    PagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pago',
            template: __webpack_require__(/*! ./pago.component.html */ "./src/app/components/pago/pago.component.html"),
            styles: [__webpack_require__(/*! ./pago.component.scss */ "./src/app/components/pago/pago.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_administracion_pagos_services_pago_service__WEBPACK_IMPORTED_MODULE_2__["PagoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagoComponent);
    return PagoComponent;
}());



/***/ }),

/***/ "./src/app/components/pago/pago.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/pago/pago.module.ts ***!
  \************************************************/
/*! exports provided: PagoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoModule", function() { return PagoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pago_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pago.component */ "./src/app/components/pago/pago.component.ts");
/* harmony import */ var _transferencia_transferencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transferencia/transferencia.component */ "./src/app/components/pago/transferencia/transferencia.component.ts");
/* harmony import */ var _pago_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pago-routing.module */ "./src/app/components/pago/pago-routing.module.ts");
/* harmony import */ var _file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/safe-url.pipe */ "./src/app/pipes/safe-url.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PagoModule = /** @class */ (function () {
    function PagoModule() {
    }
    PagoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_pago_component__WEBPACK_IMPORTED_MODULE_2__["PagoComponent"], _transferencia_transferencia_component__WEBPACK_IMPORTED_MODULE_3__["TransferenciaComponent"], src_app_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeUrlPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pago_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagoRoutingModule"],
                _file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            exports: [
                _pago_component__WEBPACK_IMPORTED_MODULE_2__["PagoComponent"]
            ]
        })
    ], PagoModule);
    return PagoModule;
}());



/***/ }),

/***/ "./src/app/components/pago/transferencia/transferencia.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/pago/transferencia/transferencia.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-md-12\">\r\n      <p>Realiza el pago y una vez que tengas el comprobante, adjuntalo en este apartado y espera a que sea validado por un administrador.</p>\r\n    </div>\r\n    <div class=\"col-md-6 form\" *ngIf=\"transferencias && transferencias.length > 0 \" > \r\n      <div *ngFor=\"let transferencia of transferencias\">\r\n        <ul class=\"list-group list-group-flush datos\">\r\n          <li class=\"list-group-item active\">Ficha de pago</li>\r\n          <li class=\"list-group-item\"><b class=\"float-left\"> Monto:</b>\r\n            <p class=\"float-right\">\r\n              <span>${{monto}}</span></p>\r\n          </li>\r\n          <li class=\"list-group-item\"><b class=\"float-left\"> Banco:</b>\r\n            <p class=\"float-right\">{{transferencia.banco}}</p>\r\n          </li>\r\n          <li class=\"list-group-item\"><b class=\"float-left\"> Beneficiario:</b>\r\n            <p class=\"float-right\">{{transferencia.beneficiario}}</p>\r\n          </li>\r\n          <li class=\"list-group-item\"><b class=\"float-left\"> CLABE:</b>\r\n            <p class=\"float-right\"> {{transferencia.clabe}}</p>\r\n          </li>\r\n          <li class=\"list-group-item\"><b class=\"float-left\"> Referencia:</b><span\r\n              class=\"float-right reference\">{{identity.nombre + ' ' + identity.primer_apellido + ' ' + identity.segundo_apellido }}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"row d-print-none\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <button [disabled]=\"imprimiendo\" class=\"btn btn-success form pull-right\" (click)=\"imprimir();\">\r\n            <span *ngIf=\"!imprimiendo\">Imprimir</span>\r\n            <span *ngIf=\"imprimiendo\"><i class=\"fa fa-spinner fa-pulse\"></i> Imprimiendo</span>\r\n          </button><br><br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 d-print-none\">\r\n      <div *ngIf=\"comprobanteExitoso\" class=\"alert alert-success text-center\">\r\n        <h1><i class=\"fa fa-check\"></i></h1>\r\n        <h4>Comprobante adjuntado exitosamente</h4>\r\n      </div>\r\n      <form *ngIf=\"!comprobanteExitoso\" [formGroup]=\"tranferenciaForm\" (ngSubmit)=\"enviarInformacion()\">\r\n        \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"\">Comprobante de pago</label>\r\n          <app-file-upload formControlName=\"contenido\"></app-file-upload>\r\n        </div><br>\r\n        <button [disabled]=\"isDisabled || cargando \" class=\"btn btn-success pull-right\" type=\"submit\"><i *ngIf=\"cargandop\" class=\"fa fa-spin fa-spinner\"></i> Enviar comprobante</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row pagina mt-0 pt-0\" *ngIf=\"bandera\">\r\n    <div class=\"col-12 mt-0 pt-0\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col-6 ml-0 pl-0\">\r\n          <img class=\"logo_empresa\" src=\"assets/images/logo.png\" alt=\"Logo\">\r\n        </div>\r\n        <div class=\"col-6 p-0 m-0\">\r\n          <!-- <img class=\"logo_empresa pull-right\" src=\"assets/images/logo.png\" alt=\"Logo\"> -->\r\n\r\n          <!-- <div class=\"d-flex flex-row justify-content-end bd-highlight mb-3\">\r\n            <div class=\"bd-highlight mt-5 pr-3\">\r\n              Servicio a pagar\r\n            </div>\r\n            <div class=\"bd-highlight mt-4\">\r\n              <img class=\"logo_paynet pull-right\" src=\"http://localhost/estudy_new/assets/openpay/images/paynet_logo.png\" alt=\"Logo Paynet\">\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-1 pl-0\">\r\n          <div class=\"cuadro azul\"></div>\r\n        </div>\r\n        <div class=\"col-5 pl-0\">\r\n          <h3>Fecha límite de pago</h3>\r\n          <h4>{{fecha_limite | date: 'dd/MM/yyyy hh:mm a' }}</h4>\r\n          <img [src]=\"Datos.pago.barcode_url\" alt=\"Código de Barras\">\r\n          <div><p class=\"font-13\">{{Datos.pago.reference}}</p></div>\r\n          <p class=\"small mb-0 pb-0\">En caso de que el escáner no sea capaz de leer el código de barras, escribir la referencia tal como se muestra.</p>\r\n        </div>\r\n        <div class=\"col-6 bg-primary text-white\">\r\n          <div class=\"container px-3 pt-4\">\r\n            <h2>Total a pagar</h2>\r\n            <h1>${{stringMonto}}<span style=\"font-size: 30px\">.00</span><small style=\"font-size: 22px\"> MXN</small></h1>\r\n            <p class=\"font-11\">La comisión por recepción del pago varía de acuerdo a los términos y condiciones que cada cadena comercial establece.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-1\" style=\"margin-top: 55px;\">\r\n        <div class=\"col-1 pl-0\">\r\n          <div class=\"cuadro azul\"></div>\r\n        </div>\r\n        <div class=\"col-11 pl-0\">\r\n          <h3>Detalles de la compra</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let fila of Tabla; let i = index;\">\r\n        <div class=\"col-1 px-0\">\r\n          <div class=\"cuadro\" [ngClass]=\"i == 1? 'bg-light-2': 'bg-light-1'\"></div>\r\n        </div>\r\n        <div class=\"col-4 pl-0\" [ngClass]=\"i == 1? 'bg-light-2': 'bg-light-1'\">\r\n          <div class=\"tabla\">\r\n            <div>{{fila.titulo}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-7\" style=\"border-left: 2px solid white\" [ngClass]=\"i == 1? 'bg-light-2': 'bg-light-1'\">\r\n          <div class=\"tabla pl-4\">\r\n            <div *ngIf=\"i != 1\">{{fila.valor}}</div>\r\n            <div *ngIf=\"i == 1\">{{fila.valor | date: 'dd/MM/yyyy hh:mm a'}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-1\">\r\n        <div class=\"col-1 pl-0\">\r\n          <div class=\"cuadro azul\"></div>\r\n        </div>\r\n        <div class=\"col-5 pl-0\">\r\n          <h3 class=\"mb-3\">Como realizar el pago</h3>\r\n          <ol class=\"pl-3 font-11\">\r\n            <li>Acude a cualquier tienda afiliada</li>\r\n            <li>Entrega al cajero el código de barras y menciona que realizarás un pago de servicio Paynet</li>\r\n            <li>Realizar el pago en efectivo por ${{stringMonto}}.00 MXN </li>\r\n            <li>Conserva el ticket para cualquier aclaración</li>\r\n          </ol>\r\n          <p class=\"font-11\">Si tienes dudas comunícate a e-Study al teléfono TELEFONO TIENDA o al correo CORREO SOPORTE TIENDA</p>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <h3 class=\"mb-3\">Instrucciones para el cajero</h3>\r\n          <ol class=\"pl-3 font-11\">\r\n            <li>Ingresar al menú de Pago de Servicios</li>\r\n            <li>Seleccionar Paynet</li>\r\n            <li>Escanear el código de barras o ingresar el núm. de referencia</li>\r\n            <li>Ingresa la cantidad total a pagar</li>\r\n            <li>Cobrar al cliente el monto total más la comisión</li>\r\n            <li>Confirmar la transacción y entregar el ticket al cliente</li>\r\n          </ol>\r\n          <p class=\"font-11\">Para cualquier duda sobre como cobrar, por favor llamar al teléfono +52 (55) 5351 7371 en un horario de 8am a 9pm de lunes a domingo</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center mt-3\">\r\n          <img height=\"140\" [src]=\"url + 'assets/openpay/images/Horizontal_1.gif'\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"whitepaper\">\r\n    <div class=\"Header\">\r\n    <div class=\"Logo_empresa\">\r\n        <img src=\"assets/images/logo.png\" alt=\"Logo\">\r\n      </div>\r\n      <div class=\"Logo_paynet\">\r\n        <div>Servicio a pagar</div>\r\n        <img src=\"http://localhost/estudy_new/assets/openpay/images/paynet_logo.png\" alt=\"Logo Paynet\">\r\n      </div>\r\n      </div>\r\n      <div class=\"Data\">\r\n        <div class=\"Big_Bullet\">\r\n            <span></span>\r\n          </div>\r\n        <div class=\"col1\">\r\n            <h3>Fecha límite de pago</h3>\r\n              <h4>30 de Noviembre 2018, a las 2:30 AM</h4>\r\n              <img width=\"300\" src=\"https://api.openpay.mx/barcode/0129384756234859?height=30\" alt=\"Código de Barras\">\r\n            <p><span>0129384756234859</span></p>\r\n              <small>En caso de que el escáner no sea capaz de leer el código de barras, escribir la referencia tal como se muestra.</small>\r\n  \r\n          </div>\r\n          <div class=\"col2\">\r\n            <h2>Total a pagar</h2>\r\n              <h1>$9,000<span>.00</span><small> MXN</small></h1>\r\n              <span class=\"note\">La comisión por recepción del pago varía de acuerdo a los términos y condiciones que cada cadena comercial establece.</span>\r\n          </div>\r\n      </div>\r\n      <div class=\"DT-margin\"></div>\r\n      <div class=\"Data\">\r\n        <div class=\"Big_Bullet\">\r\n            <span></span>\r\n          </div>\r\n        <div class=\"col1\">\r\n            <h3>Detalles de la compra</h3>\r\n          </div>\r\n    </div>\r\n      <div class=\"Table-Data\">\r\n        <div class=\"table-row color1\">\r\n            <div>Descripción</div>\r\n              <span>Descripción de la compra realizada</span>\r\n          </div>\r\n        <div class=\"table-row color2\">\r\n            <div>Fecha y hora</div>\r\n              <span>30 de Noviembre de 2018 a las 4:00 A.M.</span>\r\n          </div>\r\n        <div class=\"table-row color1\">\r\n            <div>Correo del cliente</div>\r\n              <span>nombre@dominio.com</span>\r\n          </div>\r\n        <div class=\"table-row color2\"  style=\"display:none\">\r\n            <div>&nbsp;</div>\r\n              <span>&nbsp;</span>\r\n          </div>\r\n        <div class=\"table-row color1\" style=\"display:none\">\r\n            <div>&nbsp;</div>\r\n              <span>&nbsp;</span>\r\n          </div>\r\n      </div>\r\n      <div class=\"DT-margin\"></div>\r\n      <div>\r\n          <div class=\"Big_Bullet\">\r\n            <span></span>\r\n          </div>\r\n        <div class=\"col1\">\r\n            <h3>Como realizar el pago</h3>\r\n              <ol>\r\n                <li>Acude a cualquier tienda afiliada</li>\r\n                  <li>Entrega al cajero el código de barras y menciona que realizarás un pago de servicio Paynet</li>\r\n                  <li>Realizar el pago en efectivo por $9,000.00 MXN </li>\r\n                  <li>Conserva el ticket para cualquier aclaración</li>\r\n              </ol>\r\n              <small>Si tienes dudas comunícate a NOMBRE TIENDA al teléfono TELEFONO TIENDA o al correo CORREO SOPORTE TIENDA</small>\r\n          </div>\r\n        <div class=\"col1\">\r\n            <h3>Instrucciones para el cajero</h3>\r\n              <ol>\r\n                <li>Ingresar al menú de Pago de Servicios</li>\r\n                  <li>Seleccionar Paynet</li>\r\n                  <li>Escanear el código de barras o ingresar el núm. de referencia</li>\r\n                  <li>Ingresa la cantidad total a pagar</li>\r\n                  <li>Cobrar al cliente el monto total más la comisión</li>\r\n                  <li>Confirmar la transacción y entregar el ticket al cliente</li>\r\n              </ol>\r\n              <small>Para cualquier duda sobre como cobrar, por favor llamar al teléfono +52 (55) 5351 7371 en un horario de 8am a 9pm de lunes a domingo</small>\r\n          </div>\r\n      </div>\r\n  \r\n      <div class=\"logos-tiendas\">\r\n  \r\n        <ul>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/01.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/02.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/03.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/04.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/05.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/06.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/07.png\" width=\"100\" height=\"50\"></li>\r\n          <li><img src=\"http://localhost/estudy_new/assets/openpay/images/08.png\" width=\"100\" height=\"50\"></li>\r\n        </ul>\r\n          <div style=\"height: 90px; width: 190px; float: right; margin-top: 30px;\">\r\n            ¿Quieres pagar en otras tiendas? visítanos en: www.openpay.mx/tiendas\r\n          </div>\r\n  \r\n      </div>\r\n      <div class=\"Powered\">\r\n        <img src=\"http://localhost/estudy_new/assets/openpay/images/powered_openpay.png\" alt=\"Powered by Openpay\" width=\"150\">\r\n        <a href=\"#\">Imprimir</a>\r\n        <a href=\"#\">Seguir comprando</a>\r\n      </div>\r\n  </div> -->\r\n  <!-- <div style=\"height: 40px; width: 100%; float: left;\"></div> -->"

/***/ }),

/***/ "./src/app/components/pago/transferencia/transferencia.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/pago/transferencia/transferencia.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n@media print {\n  @page {\n    size: Letter landscape; }\n  .reference {\n    text-align: right; }\n  .form {\n    visibility: visible; }\n  .no-print {\n    visibility: hidden; }\n  .imprimir {\n    margin-top: -289%;\n    visibility: visible; }\n  .iframe {\n    visibility: hidden; }\n  .codigo_promocion {\n    visibility: hidden; }\n  .datos {\n    margin-top: 25%; } }\n\n@media screen {\n  .pagina {\n    display: none; } }\n\n.pagina {\n  font-family: Helvetica, Arial, sans-serf; }\n\n.pagina h2 {\n    font-size: 22px;\n    font-weight: lighter; }\n\n.pagina h3 {\n    font-size: 20px;\n    margin: 15px 0 0 0; }\n\n.pagina h4 {\n    font-size: 16px;\n    margin: 8px 0; }\n\n.pagina .small {\n    font-size: 9px; }\n\n.pagina td {\n    padding: 10px 8.5% 10px 8.5%; }\n\n.pagina li {\n    margin-top: 2px; }\n\n.pagina .logos-tiendas {\n    clear: both;\n    float: left;\n    width: 100%;\n    padding: 10px 0 10px 8%;\n    border-top: 1px solid #EDEDED;\n    border-bottom: 1px solid #EDEDED;\n    margin: 20px 0 0 0; }\n\n.pagina .logos-tiendas div {\n    float: left;\n    margin-right: 50px; }\n\n.pagina .logos-tiendas small {\n    font-size: 11px;\n    margin-left: 20px;\n    float: left; }\n\n.pagina .logos-tiendas ul {\n    margin: 0;\n    list-style: none;\n    padding: 0;\n    width: 480px;\n    float: left; }\n\n.pagina .logos-tiendas li {\n    float: left;\n    margin: 10px 10px 0 10px; }\n\n.logo_empresa {\n  height: 80px; }\n\n.logo_paynet {\n  height: 60px; }\n\n.cuadro {\n  height: 55px; }\n\n.azul {\n  width: 75%;\n  background-color: #007bff; }\n\n.gris {\n  width: 100%; }\n\n.tabla {\n  display: table;\n  height: 55px; }\n\n.tabla div {\n  display: table-cell;\n  vertical-align: middle; }\n\n.bg-light-1 {\n  background-color: #f3f3f3; }\n\n.bg-light-2 {\n  background-color: #ebebeb; }\n\n.font-11 {\n  font-size: 11px; }\n\n.font-13 {\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdvL3RyYW5zZmVyZW5jaWEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ28vdHJhbnNmZXJlbmNpYS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdvXFx0cmFuc2ZlcmVuY2lhXFx0cmFuc2ZlcmVuY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2JEO0VBQ0k7SUFDSSx1QkFBc0IsRUFBQTtFQUV6QjtJQUNJLGtCQUFpQixFQUNwQjtFQUNEO0lBQ0Ysb0JBQW1CLEVBRWhCO0VBQ0Q7SUFDSSxtQkFBa0IsRUFDckI7RUFDRDtJQUNJLGtCQUFpQjtJQUNqQixvQkFBbUIsRUFDekI7RUFDRDtJQUNDLG1CQUFrQixFQUNsQjtFQUNEO0lBQ0EsbUJBQWtCLEVBQ2pCO0VBRUQ7SUFDQSxnQkFBZSxFQUNkLEVBQUE7O0FBR0g7RUFDQztJQUNDLGNBQWEsRUFDYixFQUFBOztBQUdGO0VBMkJDLHlDQUF1QyxFQStCdkM7O0FBMUREO0lBR0UsZ0JBQWM7SUFDZCxxQkFBbUIsRUFDbkI7O0FBTEY7SUFPRSxnQkFBYztJQUNkLG1CQUFpQixFQUNqQjs7QUFURjtJQVdFLGdCQUFjO0lBQ2QsY0FBWSxFQUNaOztBQWJGO0lBZ0JFLGVBQWMsRUFDZDs7QUFqQkY7SUFvQkUsNkJBQTRCLEVBQzVCOztBQXJCRjtJQXdCRSxnQkFBZSxFQUNmOztBQXpCRjtJQThCRSxZQUFVO0lBQ1YsWUFBVTtJQUNWLFlBQVU7SUFDVix3QkFBc0I7SUFDdEIsOEJBQTRCO0lBQzVCLGlDQUErQjtJQUMvQixtQkFBaUIsRUFDakI7O0FBckNGO0lBdUNFLFlBQVU7SUFDVixtQkFBaUIsRUFDakI7O0FBekNGO0lBMkNFLGdCQUFjO0lBQ2Qsa0JBQWdCO0lBQ2hCLFlBQVUsRUFDVjs7QUE5Q0Y7SUFnREUsVUFBUztJQUNULGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YsYUFBWTtJQUNaLFlBQVcsRUFDWDs7QUFyREY7SUF1REUsWUFBVztJQUNYLHlCQUF3QixFQUN4Qjs7QUFJRjtFQUNDLGFBQVksRUFDWjs7QUFFRDtFQUNDLGFBQVksRUFDWjs7QUFXRDtFQUVDLGFBQVksRUFFWjs7QUFFRDtFQUNDLFdBQVU7RUFDViwwQkFBeUIsRUFDekI7O0FBRUQ7RUFDQyxZQUFXLEVBRVg7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsYUFBWSxFQUNmOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNDLDBCQUF5QixFQUN6Qjs7QUFFRDtFQUNDLDBCQUF5QixFQUN6Qjs7QUFFRDtFQUNDLGdCQUFlLEVBQ2Y7O0FBRUQ7RUFDQyxnQkFBZSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdvL3RyYW5zZmVyZW5jaWEvdHJhbnNmZXJlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Zvcm1zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICBAcGFnZSB7XHJcbiAgICAgICAgc2l6ZTogTGV0dGVyIGxhbmRzY2FwZTsgXHJcbiAgICAgIH1cclxuICAgICAucmVmZXJlbmNle1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICB9XHJcbiAgICAgLmZvcm17XHJcblx0XHQgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHRcdC8vICBtYXJnaW4tdG9wOiAyMSU7XHJcbiAgICAgfVxyXG4gICAgIC5uby1wcmludHtcclxuICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgIH1cclxuICAgICAuaW1wcmltaXJ7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IC0yODklO1xyXG4gICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdCB9XHJcblx0IC5pZnJhbWV7XHJcblx0XHQgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdCB9XHJcblx0IC5jb2RpZ29fcHJvbW9jaW9ue1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdCB9XHJcblxyXG5cdCAuZGF0b3N7XHJcblx0XHRtYXJnaW4tdG9wOiAyNSU7XHJcblx0IH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcblx0LnBhZ2luYSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuIH1cclxuXHJcbi5wYWdpbmEge1xyXG5cclxuXHRoMiB7XHJcblx0XHRmb250LXNpemU6MjJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XHJcblx0fVxyXG5cdGgzIHtcclxuXHRcdGZvbnQtc2l6ZToyMHB4O1xyXG5cdFx0bWFyZ2luOjE1cHggMCAwIDA7XHJcblx0fVxyXG5cdGg0IHtcclxuXHRcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0bWFyZ2luOjhweCAwO1xyXG5cdH1cclxuXHJcblx0LnNtYWxsIHtcclxuXHRcdGZvbnQtc2l6ZTogOXB4O1xyXG5cdH1cclxuXHJcblx0dGQge1xyXG5cdFx0cGFkZGluZzogMTBweCA4LjUlIDEwcHggOC41JTtcclxuXHR9XHJcblxyXG5cdGxpIHtcclxuXHRcdG1hcmdpbi10b3A6IDJweDtcclxuXHR9XHJcblxyXG5cdGZvbnQtZmFtaWx5OkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyZjtcclxuXHJcblx0LmxvZ29zLXRpZW5kYXMge1xyXG5cdFx0Y2xlYXI6Ym90aDtcclxuXHRcdGZsb2F0OmxlZnQ7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0cGFkZGluZzoxMHB4IDAgMTBweCA4JTtcclxuXHRcdGJvcmRlci10b3A6MXB4IHNvbGlkICNFREVERUQ7XHJcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRURFREVEO1xyXG5cdFx0bWFyZ2luOjIwcHggMCAwIDA7XHJcblx0fVxyXG5cdC5sb2dvcy10aWVuZGFzIGRpdiB7XHJcblx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OjUwcHg7XHJcblx0fVxyXG5cdC5sb2dvcy10aWVuZGFzIHNtYWxsIHtcclxuXHRcdGZvbnQtc2l6ZToxMXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6MjBweDtcclxuXHRcdGZsb2F0OmxlZnQ7XHJcblx0fVxyXG5cdC5sb2dvcy10aWVuZGFzIHVsIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0d2lkdGg6IDQ4MHB4O1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cdC5sb2dvcy10aWVuZGFzIGxpIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0bWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi5sb2dvX2VtcHJlc2Ege1xyXG5cdGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmxvZ29fcGF5bmV0IHtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi8vIC5jdWFkcm8ge1xyXG4vLyBcdHdpZHRoOjQwcHg7XHJcbi8vIFx0Ly8gZmxvYXQ6bGVmdDtcclxuLy8gXHQvLyBtYXJnaW4tcmlnaHQ6MjRweDtcclxuLy8gfVxyXG5cclxuLy8gLmN1YWRybyBzcGFuLCAuY29sMiB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjojZjliMzE3O1xyXG4vLyB9XHJcbi5jdWFkcm8ge1xyXG5cdC8vIGJhY2tncm91bmQtY29sb3I6cmdiKDI0OSwgMTc5LCAyMyk7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG5cdC8vIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYXp1bCB7XHJcblx0d2lkdGg6IDc1JTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uZ3JpcyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLnRhYmxhe1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbi50YWJsYSBkaXYge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5iZy1saWdodC0xIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4uYmctbGlnaHQtMiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuLmZvbnQtMTEge1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmZvbnQtMTMge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pago/transferencia/transferencia.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/pago/transferencia/transferencia.component.ts ***!
  \**************************************************************************/
/*! exports provided: TransferenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaComponent", function() { return TransferenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_pagos_services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/pagos/services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _transferencia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transferencia.service */ "./src/app/components/pago/transferencia/transferencia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TransferenciaComponent = /** @class */ (function () {
    function TransferenciaComponent(_usuarioService, _pagoService, formBuilder, route, _transferenciaService) {
        this._usuarioService = _usuarioService;
        this._pagoService = _pagoService;
        this.formBuilder = formBuilder;
        this.route = route;
        this._transferenciaService = _transferenciaService;
        this.isDisabled = false;
        this.comprobanteExitoso = false;
        this.cargando = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        this.produccion = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].productionMode;
        this.bandera = false;
        this.imprimiendo = false;
        this.Tabla = [
            { id: 1, titulo: 'Descripción', valor: undefined },
            { id: 2, titulo: 'Fecha y hora', valor: undefined },
            { id: 3, titulo: 'Correo del cliente', valor: undefined }
        ];
    }
    Object.defineProperty(TransferenciaComponent.prototype, "f", {
        get: function () { return this.tranferenciaForm.controls; },
        enumerable: true,
        configurable: true
    });
    TransferenciaComponent.prototype.ngOnInit = function () {
        this.monto = parseInt(this.monto);
        this.identity = this._usuarioService.getIdentity();
        this.solicitud_pago_id = this.route.snapshot.paramMap.get('id');
        this.consultaTransferencias();
        this.tranferenciaForm = this.formBuilder.group({
            contenido: ['', Object(_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_4__["requiredFileType"])(0)]
        });
        this.stringMonto = this.numberWithCommas(this.monto);
    };
    TransferenciaComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    };
    TransferenciaComponent.prototype.consultaTransferencias = function () {
        var _this = this;
        this._pagoService.consultaTransferencia().subscribe(function (response) {
            if (response && response['status']) {
                _this.transferencias = response['transferencias'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    TransferenciaComponent.prototype.imprimir = function () {
        var _this = this;
        setTimeout(function () {
            window.print();
            _this.imprimiendo = false;
        }, 1000);
        /*this.imprimiendo = true;
        this._transferenciaService.crearCargo(this.produccion, this.identity,
          this.monto, this.descripcion).subscribe(response => {
          console.log(response);
          if (response && response['status']) {
            this.Datos = response['datos'];
            this.Tabla[0]['valor'] = this.descripcion;
            this.Tabla[1]['valor'] = new Date(this.Datos['fecha']);
            this.Tabla[2]['valor'] = this.identity.email;
            this.bandera = true;
    
            setTimeout(() => {
              window.print();
              this.imprimiendo = false;
            }, 1000);
          }
        }, error => {
          console.log(<any>error);
        });*/
    };
    TransferenciaComponent.prototype.enviarInformacion = function () {
        var _this = this;
        this.cargando = true;
        if (!this.tranferenciaForm.get('contenido').value) {
            alertify.error('Selecciona un archivo');
            return;
        }
        this.isDisabled = true;
        this._pagoService.guardaComprobantePago(this.tranferenciaForm, this.solicitud_pago_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.isDisabled = false;
                alertify.success(response['msg']);
                _this.comprobanteExitoso = true;
            }
            _this.cargando = false;
        }, function (error) {
            console.log(error);
        });
        this.isDisabled = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransferenciaComponent.prototype, "monto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransferenciaComponent.prototype, "descripcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransferenciaComponent.prototype, "fecha_limite", void 0);
    TransferenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transferencia',
            template: __webpack_require__(/*! ./transferencia.component.html */ "./src/app/components/pago/transferencia/transferencia.component.html"),
            styles: [__webpack_require__(/*! ./transferencia.component.scss */ "./src/app/components/pago/transferencia/transferencia.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_pagos_services_pago_service__WEBPACK_IMPORTED_MODULE_2__["PagoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _transferencia_service__WEBPACK_IMPORTED_MODULE_7__["TransferenciaService"]])
    ], TransferenciaComponent);
    return TransferenciaComponent;
}());



/***/ }),

/***/ "./src/app/components/pago/transferencia/transferencia.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/pago/transferencia/transferencia.service.ts ***!
  \************************************************************************/
/*! exports provided: TransferenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciaService", function() { return TransferenciaService; });
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



var TransferenciaService = /** @class */ (function () {
    function TransferenciaService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    TransferenciaService.prototype.crearCargo = function (produccion, persona, monto, descripcion) {
        var formData = new FormData();
        formData.append('produccion', produccion);
        formData.append('name', persona.nombre);
        formData.append('last_name', persona.primer_apellido + ' ' + persona.segundo_apellido);
        formData.append('email', persona.email);
        formData.append('phone_number', persona.celular);
        formData.append('monto', monto);
        formData.append('descripcion', descripcion);
        return this._httpClient.post(this.url + 'pagos/openpay/create-charge.php', formData);
    };
    TransferenciaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransferenciaService);
    return TransferenciaService;
}());



/***/ }),

/***/ "./src/app/pipes/safe-url.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeUrl' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/services/archivos.ts":
/*!**************************************!*\
  !*** ./src/app/services/archivos.ts ***!
  \**************************************/
/*! exports provided: Archivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archivo", function() { return Archivo; });
/* variable sincronizada con la base de de estudydg.cat_formatos */
var Archivo = [
    { id: 1, nombre: "Imagen", formatos: "jpg,jpeg,png,gif" },
    { id: 2, nombre: "Documento", formatos: "txt,doc,docx,pdf,odt" },
    { id: 3, nombre: "Presentación ", formatos: "pptx,ppsx,pptm,ppt,pps,potx,ppam" },
    { id: 4, nombre: "Hoja de cálculo ", formatos: "xlsx,xlsm,xlsb,xltx,xls,csv" },
    { id: 5, nombre: "Audio", formatos: "mp3,m4a,mp4,wav,wma" },
    { id: 6, nombre: "Video", formatos: "avi,mp4,m4v,mov,mpg,mpeg,swf" },
    { id: 100, nombre: "Archivo", formatos: "txt,doc,docx,odt,ppt,pdf,pps,jpg,jpeg,png,gif,jfif,pptx,pptm,ppt,potx,ppam,xlsx,xlsm,xlsb,xltx,XLR,mp3,m4a,mp4,wav,wma,avi,mp4, m4v, mov,mpg,mpeg,swf,wmv,zip,rar" },
];


/***/ })

}]);
//# sourceMappingURL=src-app-components-pago-pago-module.js.map