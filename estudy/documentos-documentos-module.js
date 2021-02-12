(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentos-documentos-module"],{

/***/ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4><br>\r\n    <button class=\" btn btn-success\" (click)=\"abrirModal(modalDocumentos)\"><i class=\"fa fa-plus\"></i> Agregar documento</button>\r\n    <button class=\"btn btn-info mr-2 pull-right\" [routerLink]=\"['/admin/expediente/etiquetas']\">Ver catálogo de etiquetas</button>\r\n    <div class=\"table-responsive mt-3\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Documento</th>\r\n            <th>Descripción</th>\r\n            <th>Carreras</th>\r\n            <th>Etiquetas</th>\r\n            <th>Editar</th>\r\n            <th>Eliminar</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"Documentos\">\r\n          <tr *ngFor=\"let documento of Documentos; let i = index\">\r\n            <td>{{documento.nombre_documento}}</td>\r\n            <td>{{documento.documento_desc}}</td>\r\n            <td>\r\n              <button class=\"btn btn-success\" (click)=\"carrerasDocumento(modalCarreras, documento.documento_id)\">\r\n                <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n            <td>\r\n              <button class=\"btn btn-warning\" (click)=\"etiquetasDocumento(modalEtiquetas, documento.documento_id)\">\r\n                <i class=\"fa fa-tags\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"text-center\" (click)=\"abrirModal(modalDocumentos, documento)\">\r\n              <button class=\"btn btn-info\">\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-danger\" (click)=\"eliminar(documento.documento_id, i)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"!Documentos && !loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">No se encontraron documentos</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"loading\">\r\n          <tr>\r\n            <td colspan=\"9\" class=\"text-center\">\r\n              <div class=\"mt-2 mb-2\">\r\n                <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n                <h5>\"Cargando información, por favor espere.\"</h5>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <div class=\"d-flex justify-content-center\">\r\n        <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" \r\n          [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalEtiquetas let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Etiquetas del documento</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body px-5\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <ul class=\"list-group\" *ngIf=\"Etiquetas.length > 0 && catEtiquetas\">\r\n        <li *ngFor=\"let etiqueta of catEtiquetas; let i = index;\"\r\n          class=\"list-group-item d-flex justify-content-between align-items-center\"\r\n         style=\"cursor: pointer;\" [ngClass]=\"Etiquetas[i].seleccionado? 'bg-light': ''\"\r\n         (click)=\"seleccionaDato(i, 0)\">\r\n          {{etiqueta.nombre}}\r\n          <span *ngIf=\"Etiquetas[i].seleccionado\" class=\"badge badge-primary\"><i class=\"fa fa-check\"></i></span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-12 mt-3\">\r\n      <button class=\"btn btn-success pull-right\" (click)=\"guardarDatos(0)\">Guardar información</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modalCarreras let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Carreras del documento</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body px-5\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <ul class=\"list-group\" *ngIf=\"Carreras.length > 0 && catCarreras\">\r\n        <li *ngFor=\"let carrera of catCarreras; let i = index;\"\r\n          class=\"list-group-item d-flex justify-content-between align-items-center\"\r\n         style=\"cursor: pointer;\" [ngClass]=\"Carreras[i].seleccionado? 'bg-light': ''\"\r\n         (click)=\"seleccionaDato(i, 1)\">\r\n          {{carrera.carrera}}\r\n          <span *ngIf=\"Carreras[i].seleccionado\" class=\"badge badge-primary\"><i class=\"fa fa-check\"></i></span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-12 mt-3\">\r\n      <button class=\"btn btn-success pull-right\" (click)=\"guardarDatos(1)\">Guardar información</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modalDocumentos let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{tipo}} documento</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body px-5\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <form *ngIf=\"documentoForm\" [formGroup]=\"documentoForm\" (ngSubmit)=\"modificaDocumento()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Nombre: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"nombre_documento\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Descripción: </label>\r\n          <textarea class=\"form-control\" formControlName=\"documento_desc\" rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Obligatorio: </label>\r\n          <br>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input formControlName=\"obligatorio\" value=\"1\" type=\"radio\" id=\"radio_1\" class=\"custom-control-input\">\r\n            <label class=\"custom-control-label\" for=\"radio_1\">Si</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input formControlName=\"obligatorio\" value=\"0\" type=\"radio\" id=\"radio_2\" class=\"custom-control-input\">\r\n            <label class=\"custom-control-label\" for=\"radio_2\">No</label>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-success pull-right mt-3\" [disabled]=\"documentoForm.invalid\">{{boton}} información</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover {\n  background-color: #f8f9fa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWRtaW4tZXhwZWRpZW50ZS9kb2N1bWVudG9zL2NvbnN1bHRhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxhZG1pbi1leHBlZGllbnRlXFxkb2N1bWVudG9zXFxjb25zdWx0YVxcY29uc3VsdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9hZG1pbi1leHBlZGllbnRlL2RvY3VtZW50b3MvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.ts ***!
  \*******************************************************************************************/
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
        this.Etiquetas = [];
        this.Carreras = [];
        this.title = " Catálogo de documentos";
        this._usuarioService.pushBreadcum(this.title, '', 1);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.consultaDocumentos();
    };
    ConsultaComponent.prototype.consultaDocumentos = function () {
        var _this = this;
        this._adminExpedienteService.catalogos().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.Documentos = response['documento'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.etiquetasDocumento = function (modal, id_documento) {
        var _this = this;
        this.Etiquetas = [];
        this.idDocumento = id_documento;
        this._adminExpedienteService.consultaDocumentoEtiquetas(id_documento).subscribe(function (response) {
            if (response && response['status']) {
                _this.catEtiquetas = response['etiquetas'];
                _this.catEtiquetas.forEach(function (e) {
                    _this.Etiquetas.push({
                        id_etiqueta_tr: e.id_etiqueta_tr,
                        seleccionado: e.id_etiqueta_documento ? true : false
                    });
                });
            }
        }, function (error) {
            console.log(error);
        });
        this._modalService.open(modal, { size: 'lg' });
    };
    ConsultaComponent.prototype.seleccionaDato = function (index, tipo) {
        var variable = 'Etiquetas';
        if (tipo == 1)
            variable = 'Carreras';
        this[variable][index]['seleccionado'] = !this[variable][index]['seleccionado'];
    };
    ConsultaComponent.prototype.carrerasDocumento = function (modal, id_documento) {
        var _this = this;
        this.Carreras = [];
        this.idDocumento = id_documento;
        this._adminExpedienteService.consultaDocumentoCarreras(id_documento).subscribe(function (response) {
            if (response && response['status']) {
                _this.catCarreras = response['carreras'];
                _this.catCarreras.forEach(function (c) {
                    _this.Carreras.push({
                        id_carrera: c.carrera_id,
                        seleccionado: c.documento_carrera_id ? true : false
                    });
                });
            }
        }, function (error) {
            console.log(error);
        });
        this._modalService.open(modal, { size: 'lg' });
    };
    ConsultaComponent.prototype.guardarDatos = function (tipo) {
        var _this = this;
        var bandera = false;
        var form = [];
        var datos = { var: 'Etiquetas', key: 'id_etiqueta', value: 'id_etiqueta_tr',
            service: 'guardarEtiquetasDocumento', msg: 'etiqueta' };
        if (tipo == 1)
            datos = { var: 'Carreras', key: 'id_carrera', value: 'id_carrera',
                service: 'guardarCarrerasDocumento', msg: 'carrera' };
        this[datos.var].forEach(function (d) {
            if (d.seleccionado) {
                bandera = true;
                var obj = {};
                obj[datos.key] = d[datos.value];
                form.push(obj);
            }
        });
        if (!bandera) {
            alertify.error("Selecciona al menos una " + datos.msg).dismissOthers();
            return;
        }
        this._adminExpedienteService[datos.service](form, this.idDocumento).subscribe(function (response) {
            if (response && response['status']) {
                _this._modalService.dismissAll();
                alertify.success(response['msg']).dismissOthers();
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.abrirModal = function (modal, documento) {
        if (documento === void 0) { documento = null; }
        if (!documento) {
            this.idDocumento = null;
            this.tipo = 'Agregar';
            this.boton = 'Guardar';
        }
        else {
            this.tipo = 'Editar';
            this.boton = 'Editar';
            this.idDocumento = documento.documento_id;
        }
        this.documentoForm = this.formBuilder.group({
            nombre_documento: [documento ? documento.nombre_documento : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            documento_desc: [documento ? documento.documento_desc : ''],
            obligatorio: [documento ? documento.obligatorio : ''],
        });
        this._modalService.open(modal);
    };
    ConsultaComponent.prototype.modificaDocumento = function () {
        var _this = this;
        this._adminExpedienteService.modificaDocumento(this.documentoForm.value, this.idDocumento).subscribe(function (response) {
            if (response && response['status']) {
                _this.consultaDocumentos();
                alertify.success(response['msg']).dismissOthers();
                _this._modalService.dismissAll();
            }
            console.log(_this.Documentos);
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id_documento, index) {
        alertify.confirm('Eliminar documento', '¿Deseas eliminar el documento?', function () {
            var _this = this;
            this._adminExpedienteService.eliminarDocumento(id_documento).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Documentos.splice(index, 1);
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
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _admin_expediente_service__WEBPACK_IMPORTED_MODULE_4__["AdminExpedienteService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/documentos-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/documentos-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DocumentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosRoutingModule", function() { return DocumentosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.ts");
/* harmony import */ var _documentos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentos.component */ "./src/app/administracion/admin-expediente/documentos/documentos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _documentos_component__WEBPACK_IMPORTED_MODULE_3__["DocumentosComponent"],
        children: [
            // { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: '', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"] }
        ]
    }
];
var DocumentosRoutingModule = /** @class */ (function () {
    function DocumentosRoutingModule() {
    }
    DocumentosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocumentosRoutingModule);
    return DocumentosRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/documentos.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/documentos.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/documentos.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/documentos.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FkbWluLWV4cGVkaWVudGUvZG9jdW1lbnRvcy9kb2N1bWVudG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/documentos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/documentos.component.ts ***!
  \************************************************************************************/
/*! exports provided: DocumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosComponent", function() { return DocumentosComponent; });
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


var DocumentosComponent = /** @class */ (function () {
    function DocumentosComponent() {
    }
    DocumentosComponent.prototype.ngOnInit = function () {
    };
    DocumentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentos',
            template: __webpack_require__(/*! ./documentos.component.html */ "./src/app/administracion/admin-expediente/documentos/documentos.component.html"),
            styles: [__webpack_require__(/*! ./documentos.component.scss */ "./src/app/administracion/admin-expediente/documentos/documentos.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentosComponent);
    return DocumentosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/admin-expediente/documentos/documentos.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/documentos/documentos.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DocumentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosModule", function() { return DocumentosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _documentos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentos-routing.module */ "./src/app/administracion/admin-expediente/documentos/documentos-routing.module.ts");
/* harmony import */ var _documentos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentos.component */ "./src/app/administracion/admin-expediente/documentos/documentos.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/admin-expediente/documentos/consulta/consulta.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DocumentosModule = /** @class */ (function () {
    function DocumentosModule() {
    }
    DocumentosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_documentos_component__WEBPACK_IMPORTED_MODULE_3__["DocumentosComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _documentos_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocumentosRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            exports: [_documentos_component__WEBPACK_IMPORTED_MODULE_3__["DocumentosComponent"]]
        })
    ], DocumentosModule);
    return DocumentosModule;
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
//# sourceMappingURL=documentos-documentos-module.js.map