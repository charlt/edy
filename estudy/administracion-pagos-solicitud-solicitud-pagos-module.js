(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-pagos-solicitud-solicitud-pagos-module"],{

/***/ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/consulta/consulta.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mt-3\">Consulta de pagos  </h5>\r\n<div class=\"row\">\r\n  <div class=\"col-9\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-success\" id=\"dropdownBasic1\" ngbDropdownToggle>Agregar pago</button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n      <a ngbDropdownItem [routerLink]=\"['/admin/solicitud-pagos/nueva-colegiatura/']\" class=\"dropdown-item\">Pago  de colegiatura/reinscripción</a>\r\n      <a ngbDropdownItem [routerLink]=\"['/admin/solicitud-pagos/nueva-inscripcion/']\" class=\"dropdown-item\">Pago de inscripción</a>\r\n      <a  ngbDropdownItem [routerLink]=\"['/admin/solicitud-pagos/nuevo-producto/']\"  class=\"dropdown-item\" >Pago de producto/servicio</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <a type=\"button\" class=\"btn btn-outline-info pull-right\" [routerLink]=\"['/admin/pagos-alumno/layout']\">\r\n        <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\r\n        <p>Layout carga</p>\r\n    </a>\r\n</div>\r\n</div>\r\n<div class=\"input-group mb-3 mt-2\">\r\n  <input type=\"text\" class=\"form-control\" [formControl]=\"searchField\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n  <div class=\"input-group-append\">\r\n    <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n  </div>\r\n</div>\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button (click)=\"consulta_pagos(null)\" type=\"button\" class=\"btn btn-outline-secondary\" >Todos</button>\r\n  <button (click)=\"consulta_pagos(_estatus.estatus_solicitud_pago_id)\" type=\"button\" [ngClass]=\"{'btn-outline-danger' : _estatus.estatus_solicitud_pago_id == '1' , 'btn-outline-warning' : _estatus.estatus_solicitud_pago_id == '2' , 'btn-outline-success' : _estatus.estatus_solicitud_pago_id == '3' }\" class=\"btn \" *ngFor=\"let _estatus of estatusSolicitudPago\">{{_estatus.descripcion}}</button>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Nombre del alumno</th>\r\n      <th scope=\"col\">Pago</th>\r\n      <th scope=\"col\">Monto</th>\r\n      <th scope=\"col\">Estatus del pago</th>\r\n      <th scope=\"col\">Fecha del pago</th>\r\n      <th scope=\"col\">Forma de pago</th>\r\n      <th scope=\"col\">Descuentos</th>\r\n      <th scope=\"col\">Total a pagar</th>\r\n      <th scope=\"col\">Observación</th>\r\n      <th scope=\"col\">Ficha de pago</th>\r\n      <!--th scope=\"col\">Editar</th-->\r\n      <th scope=\"col\">Eliminar</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngIf=\"pagos.length == 0\">\r\n      <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n    </tr>\r\n    <tr *ngFor=\"let pago of pagos; let i = index\">\r\n      <td>{{pago.nombre}} {{pago.primer_apellido}} {{pago.segundo_apellido}}</td>\r\n      <td>{{pago.nombre_pago}}</td>\r\n      <td>{{pago.monto}}</td>\r\n      <td class=\"text-center\">\r\n        <button [routerLink]=\"['/admin/solicitud-pagos/estatus-pago/'+pago.solicitud_pago_id]\" class=\"btn \" [ngClass]=\"{'btn-outline-success': pago.estatus_solicitud_pago_id == 3,'btn-outline-warning': pago.estatus_solicitud_pago_id == 2 ,'btn-outline-danger': pago.estatus_solicitud_pago_id == 1}\">{{pago.desc_estatus_solicitud_pago}}</button>\r\n      </td>\r\n      <td><span *ngIf=\"pago.fecha_pago && pago.fecha_pago != '0000-00-00 00:00:00'\">{{pago.fecha_pago | date:\"dd/MM/yyy hh:mm:a\"}}</span></td>\r\n      <td>{{pago.desc_forma_pago}}</td>\r\n      <td>\r\n        <span class=\"badge badge-success m-1\" *ngIf=\"pago.beca > 0 \">Beca (${{pago.beca}})</span><br>\r\n        <span class=\"badge badge-success m-1\" *ngIf=\"pago.descuento_id\">\r\n          {{pago.desc_descuento}}\r\n          (<span *ngIf=\"pago.valor == 1\"> $ </span>\r\n          {{pago.descuento}}\r\n          <span *ngIf=\"pago.valor == 2\"> % </span>)\r\n        </span>\r\n        <span class=\"badge m-1\" [ngClass]=\"pago.porcentaje < 0 ? 'badge-danger' : 'badge-success'\" *ngIf=\"pago.porcentaje != 0 \">\r\n          <span  *ngIf=\"pago.porcentaje < 0\">Recargo ${{pago.porcentaje * -1}} </span>\r\n          <span *ngIf=\"pago.porcentaje > 0\">Pronto pago ${{pago.porcentaje}} </span>\r\n        </span>   \r\n      </td>\r\n      <td>{{pago.monto_final}}</td>\r\n      <td>{{pago.observacion}}</td>\r\n      <td><a *ngIf=\"pago.estatus_solicitud_pago_id == '3'\" [href]=\"url +'pagos/docs/ficha.php?id_solicitud_pago='+pago.solicitud_pago_id\"  target=\"_blank\" class=\"btn btn-success\"><i class=\"fa fa-file-pdf-o\"></i></a></td>\r\n      <!--td><a [routerLink]=\"['/admin/solicitud-pagos/edita/'+pago.solicitud_pago_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td-->\r\n      <td><button (click)=\"eliminar(pago.solicitud_pago_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></td>    \r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n<div class=\"d-flex justify-content-center\">\r\n  <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" \r\n    [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/consulta/consulta.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL3NvbGljaXR1ZC9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/consulta/consulta.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function ConsultaComponent(_pagoService, route) {
        this._pagoService = _pagoService;
        this.route = route;
        this.pagos = [];
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.busqueda = null;
        this.estatusSolicitudPago = null;
        this.totalItems = 0;
        this.page = 1;
        this.itemsPerPage = 50;
        this.previousPage = 1;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Pagos del alumno";
        this.idAlumno = this.route.snapshot.paramMap.get('id');
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        // busqueda de datos por input  
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe(function (data) {
            _this.busqueda = data;
            _this.page = 1;
            _this.previousPage = 1;
            _this.consulta_pagos(null);
        });
        this.consultaTotalPagos();
        this.consulta_estatus_pagos();
        this.consulta_pagos();
    };
    ConsultaComponent.prototype.consultaTotalPagos = function () {
        var _this = this;
        // primera consulta
        this._pagoService.getTotalPagos().subscribe(function (response) {
            if (response && response['status']) {
                _this.totalItems = parseInt(response['pagos']['total']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consulta_estatus_pagos = function () {
        var _this = this;
        this._pagoService.catEstatusSolicitudPago().subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusSolicitudPago = response['estatusSolicitudPago'];
            }
            else {
                _this.estatusSolicitudPago = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consulta_pagos = function (idEstatusPago, inicio) {
        var _this = this;
        if (idEstatusPago === void 0) { idEstatusPago = null; }
        if (inicio === void 0) { inicio = 0; }
        this._pagoService.consultaPagos(this.busqueda, idEstatusPago, inicio, this.itemsPerPage).subscribe(function (response) {
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
    ConsultaComponent.prototype.eliminar = function (id_solicitud_pago, index) {
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
    ConsultaComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            var inicio = (this.page - 1) * this.itemsPerPage;
            this.consulta_pagos(null, inicio);
        }
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>  \r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form  [formGroup]=\"solicitudForm\" (ngSubmit)=\"enviarInformacion()\">\r\n  <div class=\"row\">\r\n      <div class=\"col-12\">  \r\n        <div *ngIf=\"!buscarAlumno\" class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"\">Alumno:</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-preppend\">\r\n              <button class=\"btn btn-outline-secondary\" (click) =\"buscarAlumno = true;\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n            </div>\r\n            <input class=\"form-control\" [value]=\"nombreAlumno\" placeholder=\"Da clic en el botón de buscar\" disabled>\r\n          </div>\r\n          \r\n        </div>             \r\n        <app-buscador-persona  *ngIf=\"buscarAlumno\" [idRol]=\"idRol\" (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n\r\n\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 \" *ngIf=\"errorSuscripcion\"> \r\n      <div class=\"alert alert-danger\">\r\n        {{msgErrorSuscripcion}} \r\n        <a  *ngIf=\"codigoErrorSuscripcion == 1\" [routerLink]=\"['/admin/pagos-alumno/suscripcion/'+idAlumno+'/1']\" class=\"btn btn-info\" > Agregar plan de pagos </a>\r\n        <a  *ngIf=\"codigoErrorSuscripcion == 2\"  [routerLink]=\"['/admin/suscripcion/generar-pago/'+idErrorSuscripcion]\" class=\"btn btn-info\" > Ir a configuración </a>\r\n\r\n      </div>\r\n    </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group mb-2\">\r\n      <label class=\"control-label\">Pago:</label>\r\n   \r\n      <select class=\"form-control\" formControlName=\"idPago\" (change)=\"seleccionarPago($event)\" >\r\n        <option value=\"\" hidden disabled selected>Selecciona una opción</option>\r\n        <option [value]=\"_suscripcionPago.pago_id\" \r\n          *ngFor=\"let _suscripcionPago of suscripcionPago; let i = index;\">\r\n          {{_suscripcionPago.nombre_pago}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"selectedSuscripcionPago\">\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Monto <span *ngIf=\"selectedSuscripcionPago.beca > 0\"> \r\n        ( Beca   <span *ngIf=\"selectedSuscripcionPago.valor_beca == 1\"> $ </span>\r\n        {{selectedSuscripcionPago.beca}}\r\n        <span *ngIf=\"selectedSuscripcionPago.valor_beca == 2\"> % </span>) </span>  </label>\r\n      <input formControlName=\"monto\" class=\"form-control\" id=\"monto\" placeholder=\"Monto final\" type=\"number\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.monto.invalid && f.monto.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div> \r\n    \r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Descuento:</label>\r\n      <select  formControlName=\"idDescuento\"  class=\"form-control\"  (change)=\"aplicaDescuento($event)\" >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"descuento.descuento_id\" *ngFor=\"let descuento of descuentos\">{{descuento.descripcion}}\r\n          (<span *ngIf=\"descuento.valor == 1\"> $ </span>\r\n          {{descuento.descuento}}\r\n          <span *ngIf=\"descuento.valor == 2\"> % </span>)\r\n        </option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idDescuento.invalid && f.idDescuento.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Estatus del pago:</label>\r\n      <select  formControlName=\"idEstatusSolicitudPago\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"_estatusSolicitudPago.estatus_solicitud_pago_id\" *ngFor=\"let _estatusSolicitudPago of estatusSolicitudPago\">{{_estatusSolicitudPago.descripcion}}</option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idEstatusSolicitudPago.invalid && f.idEstatusSolicitudPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>  \r\n  <div class=\"col-12\">\r\n  <div class=\"row\" *ngIf=\"f.idEstatusSolicitudPago.value == 3\">\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Forma del pago:</label>\r\n      <select  formControlName=\"idFormaPago\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"_formaPago.forma_pago_id\" *ngFor=\"let _formaPago of formaPago\">{{_formaPago.descripcion}}</option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idFormaPago.invalid && f.idFormaPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"beca\">Fecha del pago:</label>\r\n        <input formControlName=\"fechaPago\" class=\"form-control\" id=\"fecha_pago\" placeholder=\"Ingresa la fecha del pago\" type=\"date\">\r\n        <span class=\"invalidText\" *ngIf=\"f.fechaPago.invalid && f.fechaPago.touched\">\r\n          {{'fmErrDate' | translate}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"observacion\">Observación:</label>\r\n        <textarea formControlName=\"observacion\" class=\"form-control\" id=\"observacion\" placeholder=\"Ingresa observación\"></textarea>\r\n        <span class=\"invalidText\" *ngIf=\"f.observacion.invalid && f.observacion.touched\">\r\n          {{'fmErrText' | translate}}\r\n        </span>\r\n      </div>                                                                      \r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"montoTotal\">Recargo:</label>\r\n        <input formControlName=\"recargo\" class=\"form-control\" id=\"recargo\" placeholder=\"Ingresa el monto de la beca\" type=\"number\"  (change)=\"aplicaRecargo($event)\" >\r\n        <span class=\"invalidText\" *ngIf=\"f.recargo.invalid && f.recargo.touched\">\r\n          {{'fmErrNumber' | translate}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"montoTotal\">Monto total:</label>\r\n      <input formControlName=\"montoTotal\" class=\"form-control\" id=\"montoTotal\" placeholder=\"Ingresa el monto de la beca\" type=\"number\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.montoTotal.invalid && f.montoTotal.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <button type=\"submit\" class=\" mt-3 btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n  </div>\r\n  </form>\r\n  </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc29saWNpdHVkL2Zvcm0tY29sZWdpYXR1cmEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc29saWNpdHVkL2Zvcm0tY29sZWdpYXR1cmEvZm9ybS1jb2xlZ2lhdHVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FormColegiaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormColegiaturaComponent", function() { return FormColegiaturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.service */ "./src/app/components/encabezado-persona/encabezado-persona.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormColegiaturaComponent = /** @class */ (function () {
    function FormColegiaturaComponent(formBuilder, _pagoService, _encabezadoPersonaService, router, route, location) {
        this.formBuilder = formBuilder;
        this._pagoService = _pagoService;
        this._encabezadoPersonaService = _encabezadoPersonaService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.pagos = [];
        this.descuentos = [];
        this.formaPago = [];
        this.estatusSolicitudPago = [];
        this.beca = 0;
        this.descuento = 0;
        this.idAlumno = null;
        this.nombreAlumno = null;
        this.matricula = null;
        this.buscarAlumno = false;
        this.suscripcionPago = [];
        this.selectedSuscripcionPago = null;
        this.errorSuscripcion = 0;
        this.msgErrorSuscripcion = "";
        this.codigoErrorSuscripcion = 0;
        this.idRol = 4;
        if (this.router.url.indexOf('nueva-inscripcion') == -1) { //nueva colegiatura
            this.idRol = 2;
            this.title = 'Agregar Colegiatura/reinscripción';
        }
        else { //nueva inscripcion
            this.idRol = 4;
            this.title = 'Agregar inscripción';
        }
    }
    FormColegiaturaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solicitudForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            montoOriginal: [''],
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            montoTotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaPago: [''],
            idPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idFormaPago: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idEstatusSolicitudPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idDescuento: [''],
            observacion: [''],
            nombrePago: [''],
            beca: [''],
            recargo: ['0']
        });
        this.idAlumno = this.route.snapshot.paramMap.get('id1');
        if (this.idAlumno)
            this.consultaPersona();
        this._pagoService.catPagos().subscribe(function (response) {
            if (response && response['status']) {
                _this.pagos = response['pagos'];
            }
            else {
                _this.pagos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catDescuentos().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.descuentos = response['descuentos'];
            }
            else {
                _this.descuentos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catEstatusSolicitudPago().subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusSolicitudPago = response['estatusSolicitudPago'];
            }
            else {
                _this.estatusSolicitudPago = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catFormaPago().subscribe(function (response) {
            if (response && response['status']) {
                _this.formaPago = response['formaPago'];
            }
            else {
                _this.formaPago = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormColegiaturaComponent.prototype.consultaPersona = function () {
        var _this = this;
        this.errorSuscripcion = 0;
        this.msgErrorSuscripcion = "";
        this.codigoErrorSuscripcion = 0;
        this._encabezadoPersonaService.consultaPersona(this.idAlumno, this.idRol).subscribe(function (response) {
            if (response && response['status']) {
                _this.nombreAlumno = response['persona'].nombre + ' ' + response['persona'].primer_apellido + ' ' + response['persona'].segundo_apellido;
                _this.matricula = response['persona'].clave_alumno;
                _this._pagoService.consultaPersonaSuscripcionPago(_this.idAlumno, _this.idRol).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.suscripcionPago = response['suscripcionPago'];
                    }
                    else {
                        _this.errorSuscripcion = 1;
                        _this.msgErrorSuscripcion = response['msg'];
                        _this.codigoErrorSuscripcion = response['codigoError'];
                        _this.idErrorSuscripcion = response['idSuscripcion'];
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                console.log(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(FormColegiaturaComponent.prototype, "f", {
        get: function () { return this.solicitudForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormColegiaturaComponent.prototype.aplicaDescuento = function (event) {
        var indexDescuento = event.target.selectedIndex - 1;
        var descuento = this.descuentos[indexDescuento];
        var monto = parseFloat(this.solicitudForm.get('monto').value);
        if (descuento.valor == 1) {
            this.descuento = descuento.descuento;
        }
        else if (descuento.valor == 2) {
            this.descuento = (monto * descuento.descuento / 100);
        }
        monto = monto - this.descuento;
        this.solicitudForm.get('montoTotal').setValue(monto);
        this.solicitudForm.get('recargo').setValue(0);
        return monto;
    };
    FormColegiaturaComponent.prototype.aplicaRecargo = function () {
        var monto = this.solicitudForm.get('monto').value;
        monto = monto - this.descuento + parseFloat(this.solicitudForm.get('recargo').value);
        this.solicitudForm.get('montoTotal').setValue(monto);
    };
    FormColegiaturaComponent.prototype.seleccionarPago = function (event) {
        var i = event.target.selectedIndex - 1;
        this.selectedSuscripcionPago = this.suscripcionPago[i];
        this.solicitudForm.get('montoOriginal').setValue(this.selectedSuscripcionPago.monto);
        this.solicitudForm.get('monto').setValue(this.selectedSuscripcionPago.descuento);
        this.solicitudForm.get('montoTotal').setValue(this.selectedSuscripcionPago.descuento);
        this.solicitudForm.get('nombrePago').setValue(this.selectedSuscripcionPago.nombre_pago);
        this.solicitudForm.get('beca').setValue(this.selectedSuscripcionPago.monto - this.selectedSuscripcionPago.descuento);
    };
    FormColegiaturaComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.solicitudForm.invalid) {
            Object.keys(this.solicitudForm.controls).forEach(function (controlKey) {
                _this.solicitudForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('fechaPago').value == '') {
            alertify.error('Debes definir una fecha');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('idFormaPago').value == '1') {
            alertify.error('Debes definir un pago');
            return;
        }
        if (!this.idAlumno) {
            alertify.error('Debes seleccionar un alumno');
            return;
        }
        this._pagoService.creaColegiaturaAlumno(this.solicitudForm, this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.location.back();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormColegiaturaComponent.prototype.alumnoSeleccionado = function (event) {
        if (event.status) {
            this.idAlumno = event.persona.persona_id;
            this.nombreAlumno = this.nombreAlumno = event.persona.nombre + ' ' + event.persona.primer_apellido + ' ' + event.persona.segundo_apellido;
            this.buscarAlumno = false;
            this.consultaPersona();
        }
        else {
            this.idAlumno = null;
        }
    };
    FormColegiaturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-colegiatura',
            template: __webpack_require__(/*! ./form-colegiatura.component.html */ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.html"),
            styles: [__webpack_require__(/*! ./form-colegiatura.component.scss */ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_pago_service__WEBPACK_IMPORTED_MODULE_2__["PagoService"],
            src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__["EncabezadoPersonaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], FormColegiaturaComponent);
    return FormColegiaturaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>  \r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form  class=\"row\" [formGroup]=\"solicitudForm\" (ngSubmit)=\"enviarInformacion()\">\r\n  <div class=\"col-12\">  \r\n    <div *ngIf=\"!buscarAlumno\" class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"\">Alumno:</label>\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-preppend\">\r\n          <button class=\"btn btn-outline-secondary\" (click) =\"buscarAlumno = true;\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n        <input class=\"form-control\" [value]=\"nombreAlumno\" placeholder=\"Da clic en el botón de buscar\" disabled>\r\n      </div>\r\n      \r\n    </div>             \r\n    <app-buscador-persona  *ngIf=\"buscarAlumno\" [idRol]=\"2\" (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n\r\n   \r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Pago:</label>\r\n      <input  formControlName=\"nombrePago\"  class=\"form-control\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.nombrePago.invalid && f.nombrePago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Monto:</label>\r\n      <input  formControlName=\"monto\"  class=\"form-control\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.monto.invalid && f.monto.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Beca:</label>\r\n      <input formControlName=\"beca\" class=\"form-control\" id=\"beca\" placeholder=\"Ingresa el monto de la beca\" type=\"number\" (blur)=\"aplicaBeca($event)\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.beca.invalid && f.beca.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Descuento:</label>\r\n      <select  formControlName=\"idDescuento\"  class=\"form-control\"  (change)=\"aplicaDescuento($event)\" >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"descuento.descuento_id\" *ngFor=\"let descuento of descuentos\">{{descuento.descripcion}} \r\n          (<span *ngIf=\"descuento.valor == 1\"> $ </span>\r\n           {{descuento.descuento}} \r\n          <span *ngIf=\"descuento.valor == 2\"> % </span>)\r\n        </option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idDescuento.invalid && f.idDescuento.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"row  alert alert-info m-1\">\r\n      <div class=\"col-12  \">\r\n        <div class=\"form-group \" rel=\"1\">\r\n          <label class=\"control-label\" for=\"\">Estatus del pago:</label>\r\n          <select  formControlName=\"idEstatusSolicitudPago\"  class=\"form-control\"  >\r\n            <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            <option  [value]=\"_estatusSolicitudPago.estatus_solicitud_pago_id\" *ngFor=\"let _estatusSolicitudPago of estatusSolicitudPago\">{{_estatusSolicitudPago.descripcion}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.idEstatusSolicitudPago.invalid && f.idEstatusSolicitudPago.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"info_pago\" class=\"col-12\">\r\n        <p *ngIf=\"info_pago.pago_externo_id\">\r\n          <label>Ver comprobante:</label>\r\n          <app-archivo [urlBase]=\"info_pago.comprobante\"></app-archivo>          \r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"f.idEstatusSolicitudPago.value == 3 || f.idEstatusSolicitudPago.value == 2\">\r\n        <div class=\"col-6\">\r\n          <div class=\"form-group \" rel=\"1\">\r\n            <label class=\"control-label\" for=\"\">Forma del pago:</label>\r\n            <select  formControlName=\"idFormaPago\"  class=\"form-control\"  >\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n              <option  [value]=\"_formaPago.forma_pago_id\" *ngFor=\"let _formaPago of formaPago\">{{_formaPago.descripcion}}</option>\r\n            </select>\r\n            <span class=\"invalidText\" *ngIf=\"f.idFormaPago.invalid && f.idFormaPago.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"form-group\">                               \r\n              <label class=\"control-label\" for=\"beca\">Fecha del pago:</label>\r\n              <input formControlName=\"fechaPago\" class=\"form-control\" id=\"fecha_pago\" placeholder=\"Ingresa la fecha del pago\" type=\"date\">\r\n              <span class=\"invalidText\" *ngIf=\"f.fechaPago.invalid && f.fechaPago.touched\">\r\n                {{'fmErrDate' | translate}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group\">                               \r\n              <label class=\"control-label\" for=\"observacion\">Observación:</label>\r\n              <textarea formControlName=\"observacion\" class=\"form-control\" id=\"observacion\" placeholder=\"Ingresa observación\"></textarea>\r\n              <span class=\"invalidText\" *ngIf=\"f.observacion.invalid && f.observacion.touched\">\r\n                {{'fmErrText' | translate}}\r\n              </span>\r\n            </div>                                                                      \r\n            \r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group\">                               \r\n              <label class=\"control-label\" for=\"recargo\">Recargo:</label>\r\n              <input formControlName=\"recargo\" class=\"form-control\" id=\"recargo\" placeholder=\"Ingresa el monto de la beca\" type=\"number\" (change)=\"aplicaRecargo()\"  >\r\n              <span class=\"invalidText\" *ngIf=\"f.recargo.invalid && f.recargo.touched\">\r\n                {{'fmErrNumber' | translate}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Total a pagar:</label>\r\n      <input formControlName=\"montoTotal\" class=\"form-control\" id=\"monto\" placeholder=\"Monto final\" type=\"number\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.monto.invalid && f.monto.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div> \r\n  </div>\r\n  <div class=\"col-12\">\r\n    <button type=\"submit\" class=\" mt-3 btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n  </div>\r\n  </form>\r\n  </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc29saWNpdHVkL2Zvcm0tcGFnby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wYWdvcy9zb2xpY2l0dWQvZm9ybS1wYWdvL2Zvcm0tcGFnby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPagoComponent", function() { return FormPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.service */ "./src/app/components/encabezado-persona/encabezado-persona.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormPagoComponent = /** @class */ (function () {
    function FormPagoComponent(formBuilder, _pagoService, _encabezadoPersonaService, router, route, location) {
        this.formBuilder = formBuilder;
        this._pagoService = _pagoService;
        this._encabezadoPersonaService = _encabezadoPersonaService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.pagos = [];
        this.descuentos = [];
        this.formaPago = [];
        this.estatusSolicitudPago = [];
        this.monto = 0;
        this.beca = 0;
        this.montoDescuento = 0;
        this.idAlumno = null;
        this.nombreAlumno = null;
        this.matricula = null;
        this.buscarAlumno = false;
    }
    FormPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solicitudForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            montoTotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaPago: [''],
            idFormaPago: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idEstatusSolicitudPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nombrePago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idDescuento: [''],
            beca: ['0'],
            recargo: [''],
            observacion: ['']
        });
        this.idSolicitudPago = this.route.snapshot.paramMap.get('id1');
        this._pagoService.consultaSolicitud(this.idSolicitudPago).subscribe(function (response) {
            if (response && response['status']) {
                var solicitud = response['solicitud'];
                _this.info_pago = solicitud.info_pago;
                _this.idAlumno = solicitud.persona_id;
                _this.monto = solicitud.monto;
                _this.beca = solicitud.beca ? solicitud.beca : 0;
                _this.solicitudForm.get('monto').setValue(solicitud.monto);
                _this.solicitudForm.get('montoTotal').setValue(solicitud.monto_final);
                var fecha_pago = void 0;
                var fecha_pago2 = void 0;
                if (solicitud.estatus_solicitud_pago_id == '3') {
                    fecha_pago = new Date(solicitud.fecha_pago * 1000);
                    fecha_pago2 = fecha_pago.toISOString().substring(0, 10);
                }
                else {
                    fecha_pago2 = null;
                    fecha_pago = null;
                }
                _this.solicitudForm.get('fechaPago').setValue(fecha_pago2);
                _this.solicitudForm.get('idFormaPago').setValue(solicitud.forma_pago_id);
                _this.solicitudForm.get('idEstatusSolicitudPago').setValue(solicitud.estatus_solicitud_pago_id);
                _this.solicitudForm.get('nombrePago').setValue(solicitud.nombre_pago);
                if (!solicitud.descuento_id)
                    solicitud.descuento_id = "";
                _this.solicitudForm.get('idDescuento').setValue(solicitud.descuento_id);
                _this.solicitudForm.get('beca').setValue(solicitud.beca);
                _this.solicitudForm.get('recargo').setValue(solicitud.recargo);
                _this.solicitudForm.get('observacion').setValue(solicitud.observacion);
                _this.consultaPersona();
            }
        }, function (error) {
            console.log(error);
        });
        this.title = 'Editar información de pago';
        this._pagoService.catDescuentos().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.descuentos = response['descuentos'];
            }
            else {
                _this.descuentos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catEstatusSolicitudPago().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.estatusSolicitudPago = response['estatusSolicitudPago'];
            }
            else {
                _this.estatusSolicitudPago = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catFormaPago().subscribe(function (response) {
            if (response && response['status']) {
                _this.formaPago = response['formaPago'];
            }
            else {
                _this.formaPago = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormPagoComponent.prototype.consultaPersona = function () {
        var _this = this;
        this._encabezadoPersonaService.consultaPersona(this.idAlumno, 2).subscribe(function (response) {
            if (response && response['status']) {
                _this.nombreAlumno = response['persona'].nombre + ' ' + response['persona'].primer_apellido + ' ' + response['persona'].segundo_apellido;
                _this.matricula = response['persona'].clave_alumno;
            }
            else {
                console.log(response['error']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(FormPagoComponent.prototype, "f", {
        get: function () { return this.solicitudForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormPagoComponent.prototype.actualizaMonto = function (event) {
        var indexPago = event.target.selectedIndex - 1;
        this.solicitudForm.get('montoTotal').setValue(this.monto);
        this.solicitudForm.get('beca').setValue("");
        this.solicitudForm.get('idDescuento').setValue("");
        this.solicitudForm.get('recargo').setValue("");
    };
    FormPagoComponent.prototype.aplicaBeca = function (event) {
        this.beca = event.target.value;
        var montoFinal = this.monto - this.beca;
        this.solicitudForm.get('montoTotal').setValue(montoFinal);
        this.solicitudForm.get('idDescuento').setValue("");
        this.solicitudForm.get('recargo').setValue("");
    };
    FormPagoComponent.prototype.aplicaDescuento = function (event) {
        var indexDescuento = event.target.selectedIndex - 1;
        var descuento = this.descuentos[indexDescuento];
        var montoPago = this.monto - this.beca;
        if (descuento.valor == 1) {
            this.montoDescuento = descuento.descuento;
        }
        else if (descuento.valor == 2) {
            this.montoDescuento = (montoPago * descuento.descuento / 100);
        }
        var montoFinal = montoPago - this.montoDescuento;
        this.solicitudForm.get('montoTotal').setValue(montoFinal);
        this.solicitudForm.get('recargo').setValue("");
    };
    FormPagoComponent.prototype.aplicaRecargo = function () {
        var montoFinal = this.monto - this.beca - this.montoDescuento + parseFloat(this.solicitudForm.get('recargo').value);
        this.solicitudForm.get('montoTotal').setValue(montoFinal);
    };
    FormPagoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.solicitudForm.invalid) {
            Object.keys(this.solicitudForm.controls).forEach(function (controlKey) {
                _this.solicitudForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (!this.idAlumno) {
            alertify.error('Debes seleccionar un alumno');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('fechaPago').value == '') {
            alertify.error('Debes definir una fecha');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('idFormaPago').value == '1') {
            alertify.error('Debes definir un pago');
            return;
        }
        this._pagoService.editaSolicitud(this.solicitudForm, this.idSolicitudPago, this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.location.back();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormPagoComponent.prototype.alumnoSeleccionado = function (event) {
        if (event.status) {
            this.idAlumno = event.persona.persona_id;
            this.nombreAlumno = this.nombreAlumno = event.persona.nombre + ' ' + event.persona.primer_apellido + ' ' + event.persona.segundo_apellido;
            this.buscarAlumno = false;
        }
        else {
            this.idAlumno = null;
        }
    };
    FormPagoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-pago',
            template: __webpack_require__(/*! ./form-pago.component.html */ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.html"),
            styles: [__webpack_require__(/*! ./form-pago.component.scss */ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_pago_service__WEBPACK_IMPORTED_MODULE_2__["PagoService"],
            src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__["EncabezadoPersonaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], FormPagoComponent);
    return FormPagoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>  \r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form  class=\"row\" [formGroup]=\"solicitudForm\" (ngSubmit)=\"enviarInformacion()\">\r\n  <div class=\"col-12\">  \r\n    <div *ngIf=\"!buscarAlumno\" class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"\">Alumno:</label>\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-preppend\">\r\n          <button class=\"btn btn-outline-secondary\" (click) =\"buscarAlumno = true;\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n        <input class=\"form-control\" [value]=\"nombreAlumno\" placeholder=\"Da clic en el botón de buscar\" disabled>\r\n      </div>\r\n      \r\n    </div>             \r\n    <app-buscador-persona  *ngIf=\"buscarAlumno\" [idRol]=\"2\" (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n\r\n    <div class=\"form-group mb-2\">\r\n\r\n      <label class=\"control-label\">Tipo de descuento</label><br>\r\n      <div class=\"custom-control custom-radio custom-control-inline\">\r\n        <input type=\"radio\" id=\"catalogo1\" formControlName=\"catalogoPago\"  name=\"catalogoPago\" class=\"custom-control-input\" value=\"1\" >\r\n        <label class=\"custom-control-label\" for=\"catalogo1\">Pago libre</label>\r\n      </div>\r\n      <div class=\"custom-control custom-radio custom-control-inline\">\r\n        <input type=\"radio\" id=\"catalogo2\" formControlName=\"catalogoPago\"  name=\"catalogoPago\" class=\"custom-control-input\" value=\"2\">\r\n        <label class=\"custom-control-label\" for=\"catalogo2\">Pago por catálogo</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group \" rel=\"1\" *ngIf=\"f.catalogoPago.value == 2 \">\r\n      \r\n      <label class=\"control-label\" for=\"\">Pago:</label>\r\n      <select  formControlName=\"idPago\"  class=\"form-control\" >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"producto.pago_id\" *ngFor=\"let producto of productos\">{{producto.nombre_producto}} <span *ngIf=\"producto.monto\">$({{producto.monto}})</span></option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idPago.invalid && f.idPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"f.catalogoPago.value == 1 \" class=\"col-6\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Nombre del pago:</label>\r\n      <input formControlName=\"nombrePago\" class=\"form-control\" id=\"nombrePago\" placeholder=\"Ingresa el nombre del pago\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.nombrePago.invalid && f.nombrePago.touched\">\r\n        {{'fmErrText' | translate}}\r\n      </span>\r\n    </div> \r\n  </div>\r\n  <div *ngIf=\"f.catalogoPago.value == 1 \" class=\"col-6\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Monto:</label>\r\n      <input formControlName=\"monto\" class=\"form-control\" id=\"monto\" placeholder=\"Monto final\" type=\"number\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.monto.invalid && f.monto.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div> \r\n  </div>\r\n  \r\n  <div class=\"col-12\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Estatus del pago:</label>\r\n      <select  formControlName=\"idEstatusSolicitudPago\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"_estatusSolicitudPago.estatus_solicitud_pago_id\" *ngFor=\"let _estatusSolicitudPago of estatusSolicitudPago\">{{_estatusSolicitudPago.descripcion}}</option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idEstatusSolicitudPago.invalid && f.idEstatusSolicitudPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>  \r\n  <hr>\r\n  <div class=\"col-12\">\r\n  <div class=\"row\" *ngIf=\"f.idEstatusSolicitudPago.value == 3\">\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Forma del pago:</label>\r\n      <select  formControlName=\"idFormaPago\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"_formaPago.forma_pago_id\" *ngFor=\"let _formaPago of formaPago\">{{_formaPago.descripcion}}</option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idFormaPago.invalid && f.idFormaPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"beca\">Fecha del pago:</label>\r\n        <input formControlName=\"fechaPago\" class=\"form-control\" id=\"fecha_pago\" placeholder=\"Ingresa la fecha del pago\" type=\"date\">\r\n        <span class=\"invalidText\" *ngIf=\"f.fechaPago.invalid && f.fechaPago.touched\">\r\n          {{'fmErrDate' | translate}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"observacion\">Observación:</label>\r\n        <textarea formControlName=\"observacion\" class=\"form-control\" id=\"observacion\" placeholder=\"Ingresa observación\"></textarea>\r\n        <span class=\"invalidText\" *ngIf=\"f.observacion.invalid && f.observacion.touched\">\r\n          {{'fmErrText' | translate}}\r\n        </span>\r\n      </div>                                                                      \r\n      \r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <button type=\"submit\" class=\" mt-3 btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n  </div>\r\n  </form>\r\n  </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc29saWNpdHVkL2Zvcm0tcHJvZHVjdG8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc29saWNpdHVkL2Zvcm0tcHJvZHVjdG8vZm9ybS1wcm9kdWN0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function() { return FormProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.service */ "./src/app/components/encabezado-persona/encabezado-persona.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormProductoComponent = /** @class */ (function () {
    function FormProductoComponent(formBuilder, _pagoService, _encabezadoPersonaService, router, route, location) {
        this.formBuilder = formBuilder;
        this._pagoService = _pagoService;
        this._encabezadoPersonaService = _encabezadoPersonaService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.productos = [];
        this.descuentos = [];
        this.formaPago = [];
        this.estatusSolicitudPago = [];
        this.beca = 0;
        this.idAlumno = null;
        this.nombreAlumno = null;
        this.matricula = null;
        this.buscarAlumno = false;
    }
    FormProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solicitudForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            monto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            catalogoPago: [1],
            nombrePago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaPago: [''],
            idFormaPago: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idEstatusSolicitudPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idDescuento: [''],
            beca: [''],
            observacion: [''],
        });
        this.idAlumno = this.route.snapshot.paramMap.get('id1');
        this.consultaPersona();
        this.title = 'Nuevo pago de producto';
        this.solicitudForm.get('catalogoPago').valueChanges.subscribe(function (catalogoPago) {
            if (catalogoPago == 1) {
                _this.solicitudForm.get('idPago').setValue(1);
            }
        });
        this.solicitudForm.get('idPago').valueChanges.subscribe(function (pago) {
            _this.productos.forEach(function (producto) {
                if (producto.pago_id == pago) {
                    this.solicitudForm.get('nombrePago').setValue(producto.nombre_producto);
                    this.solicitudForm.get('monto').setValue(producto.monto);
                }
            }.bind(_this));
        });
        this._pagoService.catProducto().subscribe(function (response) {
            if (response && response['status']) {
                _this.productos = response['productos'];
            }
            else {
                _this.productos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catDescuentos().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.descuentos = response['descuentos'];
            }
            else {
                _this.descuentos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catEstatusSolicitudPago().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.estatusSolicitudPago = response['estatusSolicitudPago'];
            }
            else {
                _this.estatusSolicitudPago = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catFormaPago().subscribe(function (response) {
            if (response && response['status']) {
                _this.formaPago = response['formaPago'];
            }
            else {
                _this.formaPago = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormProductoComponent.prototype.consultaPersona = function () {
        var _this = this;
        this._encabezadoPersonaService.consultaPersona(this.idAlumno, 2).subscribe(function (response) {
            if (response && response['status']) {
                _this.nombreAlumno = response['persona'].nombre + ' ' + response['persona'].primer_apellido + ' ' + response['persona'].segundo_apellido;
                _this.matricula = response['persona'].clave_alumno;
            }
            else {
                console.log(response['error']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(FormProductoComponent.prototype, "f", {
        get: function () { return this.solicitudForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormProductoComponent.prototype.aplicaBeca = function (event) {
        this.beca = event.target.value;
        var montoPago = this.montoPago - this.beca;
        this.solicitudForm.get('monto').setValue(montoPago);
        this.solicitudForm.get('idDescuento').setValue("");
    };
    FormProductoComponent.prototype.aplicaDescuento = function (event) {
        var indexDescuento = event.target.selectedIndex - 1;
        var descuento = this.descuentos[indexDescuento];
        console.log(descuento);
        var montoPago = this.montoPago - this.beca;
        if (descuento.valor == 1) {
            montoPago = montoPago - descuento.descuento;
        }
        else if (descuento.valor == 2) {
            montoPago = montoPago - (montoPago * descuento.descuento / 100);
        }
        this.solicitudForm.get('monto').setValue(montoPago);
    };
    FormProductoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.solicitudForm.invalid) {
            Object.keys(this.solicitudForm.controls).forEach(function (controlKey) {
                _this.solicitudForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (!this.idAlumno) {
            alertify.error('Debes seleccionar un alumno');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('fechaPago').value == '') {
            alertify.error('Debes definir una fecha');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('idFormaPago').value == '1') {
            alertify.error('Debes definir un pago');
            return;
        }
        this._pagoService.creaProducto(this.solicitudForm, this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.location.back();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormProductoComponent.prototype.alumnoSeleccionado = function (event) {
        if (event.status) {
            this.idAlumno = event.persona.persona_id;
            this.nombreAlumno = this.nombreAlumno = event.persona.nombre + ' ' + event.persona.primer_apellido + ' ' + event.persona.segundo_apellido;
            this.buscarAlumno = false;
        }
        else {
            this.idAlumno = null;
        }
    };
    FormProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-producto',
            template: __webpack_require__(/*! ./form-producto.component.html */ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.html"),
            styles: [__webpack_require__(/*! ./form-producto.component.scss */ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_pago_service__WEBPACK_IMPORTED_MODULE_2__["PagoService"],
            src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__["EncabezadoPersonaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], FormProductoComponent);
    return FormProductoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>  \r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form  class=\"row\" [formGroup]=\"solicitudForm\" (ngSubmit)=\"enviarInformacion()\">\r\n  <div class=\"col-12\">  \r\n    <div *ngIf=\"!buscarAlumno\" class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"\">Alumno:</label>\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-preppend\">\r\n          <button class=\"btn btn-outline-secondary\" (click) =\"buscarAlumno = true;\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n        <input class=\"form-control\" [value]=\"nombreAlumno\" placeholder=\"Da clic en el botón de buscar\" disabled>\r\n      </div>\r\n      \r\n    </div>             \r\n    <app-buscador-persona  *ngIf=\"buscarAlumno\" [idRol]=\"2\" (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n\r\n   \r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Pago:</label>\r\n      <input  formControlName=\"nombrePago\"  class=\"form-control\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.nombrePago.invalid && f.nombrePago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Monto:</label>\r\n      <input  formControlName=\"monto\"  class=\"form-control\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.monto.invalid && f.monto.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Monto de Beca:</label>\r\n      <input formControlName=\"beca\" class=\"form-control\" id=\"beca\" placeholder=\"Ingresa el monto de la beca\" type=\"number\" (blur)=\"aplicaBeca($event)\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.beca.invalid && f.beca.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Descuento:</label>\r\n      <select  formControlName=\"idDescuento\"  class=\"form-control\"  (change)=\"aplicaDescuento($event)\" >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"descuento.descuento_id\" *ngFor=\"let descuento of descuentos\">{{descuento.descripcion}} \r\n          (<span *ngIf=\"descuento.valor == 1\"> $ </span>\r\n           {{descuento.descuento}} \r\n          <span *ngIf=\"descuento.valor == 2\"> % </span>)\r\n        </option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idDescuento.invalid && f.idDescuento.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Estatus del pago:</label>\r\n      <select  formControlName=\"idEstatusSolicitudPago\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"_estatusSolicitudPago.estatus_solicitud_pago_id\" *ngFor=\"let _estatusSolicitudPago of estatusSolicitudPago\">{{_estatusSolicitudPago.descripcion}}</option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idEstatusSolicitudPago.invalid && f.idEstatusSolicitudPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>  \r\n  <hr>\r\n  <div class=\"col-12\">\r\n  <div class=\"row\" *ngIf=\"f.idEstatusSolicitudPago.value == 3\">\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Forma del pago:</label>\r\n      <select  formControlName=\"idFormaPago\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"_formaPago.forma_pago_id\" *ngFor=\"let _formaPago of formaPago\">{{_formaPago.descripcion}}</option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.idFormaPago.invalid && f.idFormaPago.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"beca\">Fecha del pago:</label>\r\n        <input formControlName=\"fechaPago\" class=\"form-control\" id=\"fecha_pago\" placeholder=\"Ingresa la fecha del pago\" type=\"date\">\r\n        <span class=\"invalidText\" *ngIf=\"f.fechaPago.invalid && f.fechaPago.touched\">\r\n          {{'fmErrDate' | translate}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"observacion\">Observación:</label>\r\n        <textarea formControlName=\"observacion\" class=\"form-control\" id=\"observacion\" placeholder=\"Ingresa observación\"></textarea>\r\n        <span class=\"invalidText\" *ngIf=\"f.observacion.invalid && f.observacion.touched\">\r\n          {{'fmErrText' | translate}}\r\n        </span>\r\n      </div>                                                                      \r\n      \r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">                               \r\n        <label class=\"control-label\" for=\"recargo\">Recargo:</label>\r\n        <input formControlName=\"recargo\" class=\"form-control\" id=\"recargo\" placeholder=\"Ingresa el monto de la beca\" type=\"number\" (change)=\"aplicaRecargo($event)\"  >\r\n        <span class=\"invalidText\" *ngIf=\"f.recargo.invalid && f.recargo.touched\">\r\n          {{'fmErrNumber' | translate}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Total a pagar:</label>\r\n      <input formControlName=\"montoTotal\" class=\"form-control\" id=\"monto\" placeholder=\"Monto final\" type=\"number\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.monto.invalid && f.monto.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div> \r\n  </div>\r\n  <div class=\"col-12\">\r\n    <button type=\"submit\" class=\" mt-3 btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n  </div>\r\n  </form>\r\n  </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3Mvc29saWNpdHVkL2Zvcm0tc29saWNpdHVkL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL3NvbGljaXR1ZC9mb3JtLXNvbGljaXR1ZC9mb3JtLXNvbGljaXR1ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSolicitudComponent", function() { return FormSolicitudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.service */ "./src/app/components/encabezado-persona/encabezado-persona.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormSolicitudComponent = /** @class */ (function () {
    function FormSolicitudComponent(formBuilder, _pagoService, _encabezadoPersonaService, router, route, location) {
        this.formBuilder = formBuilder;
        this._pagoService = _pagoService;
        this._encabezadoPersonaService = _encabezadoPersonaService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.pagos = [];
        this.descuentos = [];
        this.formaPago = [];
        this.estatusSolicitudPago = [];
        this.beca = 0;
        this.montoDescuento = 0;
        this.idAlumno = null;
        this.nombreAlumno = null;
        this.matricula = null;
        this.buscarAlumno = false;
    }
    FormSolicitudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solicitudForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            montoTotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaPago: [''],
            idFormaPago: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idEstatusSolicitudPago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nombrePago: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idDescuento: [''],
            beca: [''],
            recargo: [''],
            observacion: ['']
        });
        this.idSolicitudPago = this.route.snapshot.paramMap.get('id1');
        this._pagoService.consultaSolicitud(this.idSolicitudPago).subscribe(function (response) {
            if (response && response['status']) {
                var solicitud = response['solicitud'];
                _this.idAlumno = solicitud.persona_id;
                _this.montoPago = solicitud.monto_final;
                _this.solicitudForm.get('monto').setValue(solicitud.monto);
                _this.solicitudForm.get('montoTotal').setValue(solicitud.monto_final);
                var fecha_pago = void 0;
                var fecha_pago2 = void 0;
                if (solicitud.estatus_solicitud_pago_id == '3') {
                    fecha_pago = new Date(solicitud.fecha_pago * 1000);
                    fecha_pago2 = fecha_pago.toISOString().substring(0, 10);
                }
                else {
                    fecha_pago2 = null;
                    fecha_pago = null;
                }
                _this.solicitudForm.get('fechaPago').setValue(fecha_pago2);
                _this.solicitudForm.get('idFormaPago').setValue(solicitud.forma_pago_id);
                _this.solicitudForm.get('idEstatusSolicitudPago').setValue(solicitud.estatus_solicitud_pago_id);
                _this.solicitudForm.get('nombrePago').setValue(solicitud.nombre_pago);
                if (!solicitud.descuento_id)
                    solicitud.descuento_id = "";
                _this.solicitudForm.get('idDescuento').setValue(solicitud.descuento_id);
                _this.solicitudForm.get('beca').setValue(solicitud.beca);
                _this.solicitudForm.get('recargo').setValue(solicitud.recargo);
                _this.solicitudForm.get('observacion').setValue(solicitud.observacion);
                _this.consultaPersona();
            }
        }, function (error) {
            console.log(error);
        });
        this.title = 'Editar información de pago';
        this._pagoService.catDescuentos().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.descuentos = response['descuentos'];
            }
            else {
                _this.descuentos = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catEstatusSolicitudPago().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.estatusSolicitudPago = response['estatusSolicitudPago'];
            }
            else {
                _this.estatusSolicitudPago = [];
            }
        }, function (error) {
            console.log(error);
        });
        this._pagoService.catFormaPago().subscribe(function (response) {
            if (response && response['status']) {
                _this.formaPago = response['formaPago'];
            }
            else {
                _this.formaPago = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormSolicitudComponent.prototype.consultaPersona = function () {
        var _this = this;
        this._encabezadoPersonaService.consultaPersona(this.idAlumno, 2).subscribe(function (response) {
            if (response && response['status']) {
                _this.nombreAlumno = response['persona'].nombre + ' ' + response['persona'].primer_apellido + ' ' + response['persona'].segundo_apellido;
                _this.matricula = response['persona'].clave_alumno;
            }
            else {
                console.log(response['error']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(FormSolicitudComponent.prototype, "f", {
        get: function () { return this.solicitudForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormSolicitudComponent.prototype.actualizaMonto = function (event) {
        var indexPago = event.target.selectedIndex - 1;
        this.montoPago = this.pagos[indexPago].monto;
        this.solicitudForm.get('montoTotal').setValue(this.montoPago);
        this.solicitudForm.get('beca').setValue("");
        this.solicitudForm.get('idDescuento').setValue("");
        this.solicitudForm.get('recargo').setValue("");
    };
    FormSolicitudComponent.prototype.aplicaBeca = function (event) {
        this.beca = event.target.value;
        var montoPago = this.montoPago - this.beca;
        this.solicitudForm.get('montoTotal').setValue(montoPago);
        this.solicitudForm.get('idDescuento').setValue("");
        this.solicitudForm.get('recargo').setValue("");
    };
    FormSolicitudComponent.prototype.aplicaDescuento = function (event) {
        var indexDescuento = event.target.selectedIndex - 1;
        var descuento = this.descuentos[indexDescuento];
        var montoPago = this.montoPago - this.beca;
        if (descuento.valor == 1) {
            this.descuento = descuento.descuento;
        }
        else if (descuento.valor == 2) {
            this.descuento = (montoPago * descuento.descuento / 100);
        }
        montoPago = montoPago - this.descuento;
        this.solicitudForm.get('montoTotal').setValue(montoPago);
    };
    FormSolicitudComponent.prototype.aplicaRecargo = function (event) {
        var recargo = event.target.value;
        var montoPago = this.montoPago - this.beca - this.descuento + recargo;
        this.solicitudForm.get('montoTotal').setValue(montoPago);
    };
    FormSolicitudComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.solicitudForm.invalid) {
            Object.keys(this.solicitudForm.controls).forEach(function (controlKey) {
                _this.solicitudForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (!this.idAlumno) {
            alertify.error('Debes seleccionar un alumno');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('fechaPago').value == '') {
            alertify.error('Debes definir una fecha');
            return;
        }
        if (this.solicitudForm.get('idEstatusSolicitudPago').value == '3' && this.solicitudForm.get('idFormaPago').value == '1') {
            alertify.error('Debes definir un pago');
            return;
        }
        this._pagoService.editaSolicitud(this.solicitudForm, this.idSolicitudPago, this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.location.back();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormSolicitudComponent.prototype.alumnoSeleccionado = function (event) {
        if (event.status) {
            this.idAlumno = event.persona.persona_id;
            this.nombreAlumno = this.nombreAlumno = event.persona.nombre + ' ' + event.persona.primer_apellido + ' ' + event.persona.segundo_apellido;
            this.buscarAlumno = false;
        }
        else {
            this.idAlumno = null;
        }
    };
    FormSolicitudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-solicitud',
            template: __webpack_require__(/*! ./form-solicitud.component.html */ "./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.html"),
            styles: [__webpack_require__(/*! ./form-solicitud.component.scss */ "./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_pago_service__WEBPACK_IMPORTED_MODULE_2__["PagoService"],
            src_app_components_encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_4__["EncabezadoPersonaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], FormSolicitudComponent);
    return FormSolicitudComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/solicitud-pagos.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/solicitud-pagos.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL3NvbGljaXR1ZC9zb2xpY2l0dWQtcGFnb3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/solicitud-pagos.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SolicitudPagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPagosComponent", function() { return SolicitudPagosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SolicitudPagosComponent = /** @class */ (function () {
    function SolicitudPagosComponent() {
    }
    SolicitudPagosComponent.prototype.ngOnInit = function () {
    };
    SolicitudPagosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-pagos',
            template: __webpack_require__(/*! ./solicitud-pagos.component.html */ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-pagos.component.scss */ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudPagosComponent);
    return SolicitudPagosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/solicitud-pagos.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/solicitud-pagos.module.ts ***!
  \**************************************************************************/
/*! exports provided: SolicitudPagosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPagosModule", function() { return SolicitudPagosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitud_pagos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-pagos.routing.module */ "./src/app/administracion/pagos/solicitud/solicitud-pagos.routing.module.ts");
/* harmony import */ var _solicitud_pagos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-pagos.component */ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/buscadorPersona/buscador-persona.module */ "./src/app/components/buscadorPersona/buscador-persona.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.ts");
/* harmony import */ var _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-colegiatura/form-colegiatura.component */ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.ts");
/* harmony import */ var _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-producto/form-producto.component */ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.ts");
/* harmony import */ var _form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-pago/form-pago.component */ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.ts");
/* harmony import */ var _form_solicitud_form_solicitud_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-solicitud/form-solicitud.component */ "./src/app/administracion/pagos/solicitud/form-solicitud/form-solicitud.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SolicitudPagosModule = /** @class */ (function () {
    function SolicitudPagosModule() {
    }
    SolicitudPagosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_solicitud_pagos_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudPagosComponent"], _form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_11__["FormPagoComponent"], _form_solicitud_form_solicitud_component__WEBPACK_IMPORTED_MODULE_12__["FormSolicitudComponent"], _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_10__["FormProductoComponent"], _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_9__["FormColegiaturaComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_8__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solicitud_pagos_routing_module__WEBPACK_IMPORTED_MODULE_2__["SolicitudPagosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_5__["LanguageTranslationModule"],
                src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_6__["BuscadorPersonaModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__["ArchivoModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
            ]
        })
    ], SolicitudPagosModule);
    return SolicitudPagosModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/solicitud/solicitud-pagos.routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/pagos/solicitud/solicitud-pagos.routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SolicitudPagosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPagosRoutingModule", function() { return SolicitudPagosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_pagos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-pagos.component */ "./src/app/administracion/pagos/solicitud/solicitud-pagos.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/pagos/solicitud/consulta/consulta.component.ts");
/* harmony import */ var _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-colegiatura/form-colegiatura.component */ "./src/app/administracion/pagos/solicitud/form-colegiatura/form-colegiatura.component.ts");
/* harmony import */ var _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-producto/form-producto.component */ "./src/app/administracion/pagos/solicitud/form-producto/form-producto.component.ts");
/* harmony import */ var _form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-pago/form-pago.component */ "./src/app/administracion/pagos/solicitud/form-pago/form-pago.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { FormSolicitudComponent } from './form-solicitud/form-solicitud.component';




var routes = [
    {
        path: '',
        component: _solicitud_pagos_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudPagosComponent"],
        children: [
            { path: '', redirectTo: 'consulta-pago', pathMatch: 'full' },
            { path: 'consulta-pago', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevo-producto', component: _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_5__["FormProductoComponent"] },
            { path: 'nueva-colegiatura', component: _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_4__["FormColegiaturaComponent"] },
            { path: 'nueva-inscripcion', component: _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_4__["FormColegiaturaComponent"] },
            { path: 'nueva-inscripcion/:id1', component: _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_4__["FormColegiaturaComponent"] },
            { path: 'nueva-colegiatura/:id1', component: _form_colegiatura_form_colegiatura_component__WEBPACK_IMPORTED_MODULE_4__["FormColegiaturaComponent"] },
            { path: 'nuevo-producto/:id1', component: _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_5__["FormProductoComponent"] },
            { path: 'estatus-pago/:id1', component: _form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_6__["FormPagoComponent"] },
        ]
    }
];
var SolicitudPagosRoutingModule = /** @class */ (function () {
    function SolicitudPagosRoutingModule() {
    }
    SolicitudPagosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudPagosRoutingModule);
    return SolicitudPagosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/encabezado-persona/encabezado-persona.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/encabezado-persona/encabezado-persona.service.ts ***!
  \*****************************************************************************/
/*! exports provided: EncabezadoPersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncabezadoPersonaService", function() { return EncabezadoPersonaService; });
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




var EncabezadoPersonaService = /** @class */ (function () {
    function EncabezadoPersonaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    EncabezadoPersonaService.prototype.consultaPersona = function (id_persona, id_rol) {
        var params = '?id_persona=' + id_persona;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + '/admin/personas/consulta.php' + params);
    };
    EncabezadoPersonaService.prototype.modificaPersona = function (persona, id_persona, id_sexo, fechaN, jwt) {
        var formData = new FormData();
        formData.append('nombre', persona.get('nombreUsuario').value);
        formData.append('primer_apellido', persona.get('apPatUsuario').value);
        formData.append('segundo_apellido', persona.get('apMatUsuario').value);
        formData.append('id_sexo', id_sexo);
        formData.append('curp', persona.get('curpUsuario').value);
        formData.append('rfc', persona.get('rfcUsuario').value);
        formData.append('email', persona.get('correoUsuario').value);
        formData.append('celular', persona.get('celUsuario').value);
        formData.append('id_persona', id_persona);
        //formData.append('clave_elector', persona.get('claveElector').value);
        formData.append('jwt', jwt);
        if (fechaN == null) {
            formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
        }
        else {
            formData.append('fecha_nacimiento', fechaN);
        }
        return this._httpClient.post(this.url + 'admin/personas/edita.php', formData);
    };
    EncabezadoPersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EncabezadoPersonaService);
    return EncabezadoPersonaService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-pagos-solicitud-solicitud-pagos-module.js.map