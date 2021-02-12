(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["etiquetas-etiquetas-module"],{

/***/ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4><br>\r\n    <button class=\" btn btn-success\" (click)=\"abrirModal(modalEtiquetas)\">\r\n      <i class=\"fa fa-plus\"></i> Agregar etiqueta</button>\r\n    <div class=\"table-responsive mt-3\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Clave</th>\r\n            <th>Etiqueta</th>\r\n            <th>Descripción</th>\r\n            <th>Editar</th>\r\n            <th>Eliminar</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"Etiquetas\">\r\n          <tr *ngFor=\"let etiqueta of Etiquetas; let i = index\">\r\n            <td>{{etiqueta.clave}}</td>\r\n            <td>{{etiqueta.nombre}}</td>\r\n            <td>{{etiqueta.descripcion}}</td>\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-info\" (click)=\"abrirModal(modalEtiquetas, etiqueta)\">\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-danger\" (click)=\"eliminar(etiqueta, i)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"!Etiquetas && !loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">No se encontraron etiquetas</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">\r\n              <div class=\"mt-2 mb-2\">\r\n                <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n                <h5>\"Cargando información, por favor espere.\"</h5>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <div class=\"d-flex justify-content-center\">\r\n        <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" \r\n          [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalEtiquetas let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{tipo}} etiqueta</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body px-5\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <form *ngIf=\"etiquetaForm\" [formGroup]=\"etiquetaForm\" (ngSubmit)=\"modificaEtiqueta()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Clave: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"clave\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Nombre: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"nombre\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Descripción: </label>\r\n          <textarea class=\"form-control\" formControlName=\"descripcion\"></textarea>\r\n        </div>\r\n        <button class=\"btn btn-success pull-right mt-3\" [disabled]=\"etiquetaForm.invalid\">{{boton}} información</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWRtaW4tZXhwZWRpZW50ZS9ldGlxdWV0YXMvY29uc3VsdGEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWRtaW4tZXhwZWRpZW50ZS9ldGlxdWV0YXMvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _admin_expediente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin-expediente.service */ "./src/app/administracion/admin-expediente/admin-expediente.service.ts");
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
    function ConsultaComponent(_usuarioService, _adminExpedienteService, _modalService, formBuilder) {
        this._usuarioService = _usuarioService;
        this._adminExpedienteService = _adminExpedienteService;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this.title = "Consulta de etiquetas";
        this.cargando = false;
        this._usuarioService.pushBreadcum(this.title, '', 1);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this._adminExpedienteService.catalogoEtiquetas().subscribe(function (response) {
            if (response && response['status']) {
                _this.Etiquetas = response['etiquetas'];
            }
            _this.cargando = false;
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.abrirModal = function (modal, etiqueta) {
        if (etiqueta === void 0) { etiqueta = null; }
        if (!etiqueta) {
            this.idEtiqueta = null;
            this.tipo = 'Agregar';
            this.boton = 'Guardar';
        }
        else {
            this.tipo = 'Editar';
            this.boton = 'Editar';
            this.idEtiqueta = etiqueta.id_etiqueta;
        }
        this.etiquetaForm = this.formBuilder.group({
            clave: [etiqueta ? etiqueta.clave : ''],
            nombre: [etiqueta ? etiqueta.nombre : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descripcion: [etiqueta ? etiqueta.descripcion : '']
        });
        this._modalService.open(modal);
    };
    ConsultaComponent.prototype.modificaEtiqueta = function () {
        var _this = this;
        this._adminExpedienteService.modificaEtiqueta(this.etiquetaForm.value, this.idEtiqueta).subscribe(function (response) {
            if (response && response['status']) {
                var object = _this.etiquetaForm.value;
                if (!_this.idEtiqueta) {
                    object['id_etiqueta'] = response['id_etiqueta'].toString();
                    _this.Etiquetas.push(object);
                }
                else {
                    object['id_etiqueta'] = _this.idEtiqueta;
                    var index = _this.Etiquetas.map(function (e) { return e.id_etiqueta; }).indexOf(_this.idEtiqueta);
                    _this.Etiquetas[index] = object;
                }
                alertify.success(response['msg']).dismissOthers();
                _this._modalService.dismissAll();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (etiqueta, index) {
        alertify.confirm('Eliminar etiqueta', "\u00BFDeseas eliminar la etiqueta con el nombre " + etiqueta.nombre + "?", function () {
            var _this = this;
            this._adminExpedienteService.eliminarEtiqueta(etiqueta.id_etiqueta).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Etiquetas.splice(index, 1);
                    alertify.success(response['msg']).dismissOthers();
                }
                else {
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _admin_expediente_service__WEBPACK_IMPORTED_MODULE_4__["AdminExpedienteService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/etiquetas-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/etiquetas-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EtiquetasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetasRoutingModule", function() { return EtiquetasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.ts");
/* harmony import */ var _etiquetas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etiquetas.component */ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _etiquetas_component__WEBPACK_IMPORTED_MODULE_3__["EtiquetasComponent"],
        children: [
            // { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: '', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"] },
        ]
    }
];
var EtiquetasRoutingModule = /** @class */ (function () {
    function EtiquetasRoutingModule() {
    }
    EtiquetasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EtiquetasRoutingModule);
    return EtiquetasRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FkbWluLWV4cGVkaWVudGUvZXRpcXVldGFzL2V0aXF1ZXRhcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EtiquetasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetasComponent", function() { return EtiquetasComponent; });
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


var EtiquetasComponent = /** @class */ (function () {
    function EtiquetasComponent() {
    }
    EtiquetasComponent.prototype.ngOnInit = function () {
    };
    EtiquetasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-etiquetas',
            template: __webpack_require__(/*! ./etiquetas.component.html */ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.html"),
            styles: [__webpack_require__(/*! ./etiquetas.component.scss */ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], EtiquetasComponent);
    return EtiquetasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/etiquetas/etiquetas.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EtiquetasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetasModule", function() { return EtiquetasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _etiquetas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etiquetas-routing.module */ "./src/app/administracion/admin-expediente/etiquetas/etiquetas-routing.module.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/admin-expediente/etiquetas/consulta/consulta.component.ts");
/* harmony import */ var _etiquetas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./etiquetas.component */ "./src/app/administracion/admin-expediente/etiquetas/etiquetas.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EtiquetasModule = /** @class */ (function () {
    function EtiquetasModule() {
    }
    EtiquetasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_etiquetas_component__WEBPACK_IMPORTED_MODULE_4__["EtiquetasComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _etiquetas_routing_module__WEBPACK_IMPORTED_MODULE_2__["EtiquetasRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            exports: [_etiquetas_component__WEBPACK_IMPORTED_MODULE_4__["EtiquetasComponent"]]
        })
    ], EtiquetasModule);
    return EtiquetasModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=etiquetas-etiquetas-module.js.map