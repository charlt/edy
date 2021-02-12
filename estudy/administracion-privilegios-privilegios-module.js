(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-privilegios-privilegios-module"],{

/***/ "./src/app/administracion/privilegios/consulta/consulta.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/privilegios/consulta/consulta.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4><br>\r\n    <div>\r\n        <a [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> {{'agPrivilegio' | translate}}</a>\r\n       </div>\r\n       <hr>\r\n       <div class=\"input-group mb-3\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n        <div class=\"input-group-append\">\r\n          <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n      </div>\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n      <tr class=\"\">\r\n        <th>{{'tbPrivilegio' | translate}}</th>\r\n        <th>{{'tbIcono' | translate}}</th>\r\n        <th>{{'tbUrl' | translate}}</th>\r\n        <th>Estado</th>\r\n        <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n        <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>\r\n        <th >{{'fmAsignarPadre' | translate}}</th>\r\n      </tr>\r\n    </thead>\r\n    <tr *ngIf=\"(privilegio | filter: search).length === 0\">\r\n      <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n    </tr>\r\n    <tbody *ngFor=\"let _privilegio of privilegio | filter:search; let i = index \">\r\n      <tr [ngClass]=\"{'alert-danger': _privilegio.estatus == 0, 'active': _privilegio.estatus == 1 }\" >\r\n        <td >{{_privilegio.privilegio}}</td>\r\n        <td ><i class=\"fa {{_privilegio.icono}}\"></i>{{_privilegio.icono}}</td>\r\n        <td >{{_privilegio.url}}</td>\r\n        <td>\r\n          <span *ngIf=\"_privilegio.estatus == 1\">Activo</span>\r\n          <span *ngIf=\"_privilegio.estatus == 0\">Inactivo</span>\r\n        </td>\r\n        <td [hidden]=\"tipoAdmin == 0\"  class=\"text-center \"> <a [routerLink]=\"['../editar/'+ _privilegio.privilegio_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td>\r\n        <td [hidden]=\"tipoAdmin == 0\" class=\"text-center \"><button class=\"btn btn-danger\" (click)=\"eliminar(_privilegio.privilegio_id, i)\" ><i class=\"fa fa-trash\"></i></button></td>\r\n        <td  class=\"text-center \"><button class=\"btn btn-primary\" (click)=\"open(content, _privilegio.privilegio_id, _privilegio.privilegio_padre_id )\"><i class=\"fa fa-pencil\"></i></button></td>\r\n      </tr>\r\n      <tr *ngFor=\"let subprivilegio of _privilegio.sub_privilegios\" [ngClass]=\"{'alert-danger': subprivilegio.estatus == 0}\">\r\n        <td>{{subprivilegio.privilegio}}</td>\r\n        <td><i class=\"fa {{subprivilegio.icono}}\"></i>{{subprivilegio.icono}}</td>\r\n        <td>{{subprivilegio.url}}</td>\r\n        <td>\r\n          <span *ngIf=\"subprivilegio.estatus == 1\">Activo</span>\r\n          <span *ngIf=\"subprivilegio.estatus == 0\">Inactivo</span>\r\n        </td>\r\n        <td  class=\"text-center \"> <a [routerLink]=\"['../editar/'+ subprivilegio.privilegio_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td>\r\n        <td  class=\"text-center \"><button class=\"btn btn-danger\" (click)=\"eliminar(subprivilegio.privilegio_id, i)\" ><i class=\"fa fa-trash\"></i></button></td>\r\n        <td  class=\"text-center \"><button class=\"btn btn-primary\" (click)=\"open(content, subprivilegio.privilegio_id, subprivilegio.privilegio_padre_id)\"><i class=\"fa fa-pencil\"></i></button></td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">{{'fmPrivilegios' | translate}}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <select class=\"form-control form-control-md\" [(ngModel)]=\"idPadre\" >\r\n            <option hidden value=\"\" disabled  selected>selecciona</option>\r\n          <option [value] =\"_privilegio.privilegio_id\" *ngFor=\"let _privilegio of privilegio\">{{_privilegio.privilegio}}</option> \r\n        </select>\r\n      </div>\r\n    </div><br>\r\n    <button class=\"btn btn-success pull-right\" (click)=\"privilegioPadre(idPadre)\" (click)=\"c('Close click')\" (click)=\"quitarPrivilegio()\" >{{'fmSave' | translate}}</button>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">{{'fmClose' | translate}}</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/privilegios/consulta/consulta.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/privilegios/consulta/consulta.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3ByaXZpbGVnaW9zL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/privilegios/consulta/consulta.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/privilegios/consulta/consulta.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_privilegios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/privilegios.service */ "./src/app/administracion/privilegios/services/privilegios.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function ConsultaComponent(_usuarioService, _catalogoService, modalService, route, _privilegiosServices, router, _translate) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.modalService = modalService;
        this.route = route;
        this._privilegiosServices = _privilegiosServices;
        this.router = router;
        this._translate = _translate;
        this.id_privilegio = this.route.snapshot.paramMap.get('id');
        this.title = "Consulta de privilegios";
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.open = function (content, id_privilegio, privilegio_padre_id) {
        var _this = this;
        this.id_seleccionado = id_privilegio;
        this.idPadre = privilegio_padre_id;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsultaComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaPrivilegios(this.jwt, this.muestraEstatus).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.privilegio = response['privilegios'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.privilegioPadre = function (id_nuevo) {
        var _this = this;
        console.log(this.id_seleccionado);
        this.idPadre = id_nuevo;
        this._privilegiosServices.privilegioPadre(this.idPadre, this.id_seleccionado, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                alertify.success(response['msg']);
                setTimeout(function () {
                    _this.quitarPrivilegio();
                }, 100);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.quitarPrivilegio = function () {
        var _this = this;
        this._catalogoService.consultaPrivilegios(this.jwt, this.muestraEstatus).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.privilegio = response['privilegios'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm(this._translate.instant('¿Deseas eliminar el privilegio?'), function () {
            var _this = this;
            this._privilegiosServices.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.privilegio[index].estatus = 0;
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
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/privilegios/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/privilegios/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_privilegios_service__WEBPACK_IMPORTED_MODULE_5__["PrivilegiosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/privilegios/form/form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/privilegios/form/form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-12  editar-privilegio\">\r\n    <form [formGroup]=\"privilegioForm\" (ngSubmit)=\"enviarInformacion()\">\r\n      <div class=\"col-md-6\"><br>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'cvPrivilegio' | translate}}</label>\r\n          <input formControlName=\"cvPrivilegio\" class=\"form-control\" id=\"Privilegio\" placeholder=\"{{'cvPrivilegio' | translate}}\" type=\"text\" required>\r\n          <span class=\"invalidText\" *ngIf=\"f.cvPrivilegio.invalid && f.cvPrivilegio.touched\">\r\n              {{'fmrErrCvPrivilegio' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'tbPrivilegio' | translate}}</label>\r\n          <input formControlName=\"privilegio\" class=\"form-control\" id=\"Privilegio\" placeholder=\"{{'tbPrivilegio' | translate}}\" type=\"text\" required>\r\n          <span class=\"invalidText\" *ngIf=\"f.privilegio.invalid && f.privilegio.touched\">\r\n              {{'fmErrPrivilegio' | translate}}\r\n          </span>\r\n        </div><br>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Selección de tipo privilegio</label>\r\n          <div class=\"row\">  \r\n            <div class=\"col col-sm-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input  formControlName=\"tipoPrivilegio\" (click)=\"limpiar(1)\" value=\"1\" type=\"radio\" id=\"customRadio1\"  name=\"tipoPrivilegio\" class=\"custom-control-input\" [checked]=\"radio == 0\">\r\n                <label class=\"custom-control-label\" for=\"customRadio1\">Privilegio</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-sm-4\">\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input formControlName=\"tipoPrivilegio\" (click)=\"limpiar(2)\" value=\"2\" type=\"radio\" id=\"customRadio2\" name=\"tipoPrivilegio\" class=\"custom-control-input\" [checked]=\" radio == 1 \">\r\n                    <label class=\"custom-control-label\" for=\"customRadio2\">Subprivilegio</label>\r\n                </div>    \r\n            </div>\r\n          </div>  \r\n          </div>\r\n      <div [hidden]=\"f.tipoPrivilegio.value == 1 && radio == 0 \">        \r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'tbIcono' | translate}}</label>\r\n          <input formControlName=\"icono\" class=\"form-control\" id=\"icono\" placeholder=\"{{'tbIcono' | translate}}\" type=\"text\" >\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoPrivilegio.value == 1 && f.icono.invalid && f.icono.touched\">\r\n              {{'fmErrIcono' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'tbUrl' | translate}}</label>\r\n          <input formControlName=\"url\" class=\"form-control\" placeholder=\"{{'tbUrl' | translate}}\" type=\"text\" >\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoPrivilegio.value == 1 && f.url.invalid && f.url.touched\">\r\n              {{'fmErrUrl' | translate}}\r\n          </span>\r\n        </div>\r\n            <label class=\"control-label\">{{'fmPrivilegios' | translate}}</label>\r\n            <select formControlName=\"idPadre\" class=\"form-control form-control-md\" >\r\n              <option hidden value=\"\" disabled  selected>selecciona</option>\r\n              <option [value] =\"_privilegio.privilegio_id\" *ngFor=\"let _privilegio of privilegio\">{{_privilegio.privilegio}}</option>\r\n            </select>\r\n      </div><br>\r\n        <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right guardar-privilegio\">{{'fmSave' | translate}}</button>       \r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/privilegios/form/form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/privilegios/form/form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcHJpdmlsZWdpb3MvZm9ybS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wcml2aWxlZ2lvcy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/privilegios/form/form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/privilegios/form/form.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_privilegios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/privilegios.service */ "./src/app/administracion/privilegios/services/privilegios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
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
    function FormComponent(_usuarioService, formbuilder, _privilegiosServices, router, _catalogoService, route) {
        this._usuarioService = _usuarioService;
        this.formbuilder = formbuilder;
        this._privilegiosServices = _privilegiosServices;
        this.router = router;
        this._catalogoService = _catalogoService;
        this.route = route;
        this.radio = 0;
        this.id_privilegio = this.route.snapshot.paramMap.get('id');
        if (this.id_privilegio)
            this.title = 'Editar elemento';
        else
            this.title = 'Nuevo elemento';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.privilegioForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaPrivilegios(this.jwt, this.muestraEstatus).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.privilegio = response['privilegios'];
            }
        }, function (error) {
            console.log(error);
        });
        this.privilegioForm = this.formbuilder.group({
            privilegio: [''],
            icono: [''],
            url: [''],
            cvPrivilegio: [''],
            tipoPrivilegio: ['1'],
            idPadre: ['']
        });
        if (this.id_privilegio != null) {
            this._privilegiosServices.consulta(this.jwt, this.id_privilegio).subscribe(function (response) {
                console.log(response['privilegios']);
                if (response && response['status']) {
                    _this._privilegio = response['privilegios'][0];
                    _this.privilegioForm.get('cvPrivilegio').setValue(_this._privilegio.privilegio_clave);
                    _this.privilegioForm.get('privilegio').setValue(_this._privilegio.privilegio);
                    _this.privilegioForm.get('icono').setValue(_this._privilegio.icono);
                    _this.privilegioForm.get('url').setValue(_this._privilegio.url);
                    _this.privilegioForm.get('idPadre').setValue(_this._privilegio.privilegio_padre_id);
                    response['privilegios'].forEach(function (_idPadre) {
                        var privilegioPadre = _idPadre.privilegio_padre_id;
                        if (!privilegioPadre) {
                            _this.radio = 0;
                        }
                        else {
                            _this.radio = 1;
                        }
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormComponent.prototype.limpiar = function (tipo) {
        if (tipo == 1) {
            if (this.id_privilegio == null) {
                this.privilegioForm.get('icono').setValue("");
                this.privilegioForm.get('url').setValue("");
                this.privilegioForm.get('idPadre').setValue("");
            }
        }
    };
    FormComponent.prototype.enviarInformacion = function () {
        //stop here if form is invalid
        var _this = this;
        if (this.privilegioForm.invalid) {
            Object.keys(this.privilegioForm.controls).forEach(function (controlKey) {
                _this.privilegioForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._privilegiosServices.modificaPrivilegios(this.privilegioForm, this.jwt, this.id_privilegio).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.router.navigate(['admin/privilegio/consulta']);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
        if (this.privilegioForm.invalid) {
            return;
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/privilegios/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/privilegios/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_privilegios_service__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/administracion/privilegios/privilegios-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/privilegios/privilegios-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: PrivilegiosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegiosRoutingModule", function() { return PrivilegiosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _privilegios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privilegios.component */ "./src/app/administracion/privilegios/privilegios.component.ts");
/* harmony import */ var src_app_administracion_privilegios_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/privilegios/consulta/consulta.component */ "./src/app/administracion/privilegios/consulta/consulta.component.ts");
/* harmony import */ var src_app_administracion_privilegios_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/privilegios/form/form.component */ "./src/app/administracion/privilegios/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _privilegios_component__WEBPACK_IMPORTED_MODULE_2__["PrivilegiosComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: src_app_administracion_privilegios_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevo', component: src_app_administracion_privilegios_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'editar/:id', component: src_app_administracion_privilegios_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
        ]
    }
];
var PrivilegiosRoutingModule = /** @class */ (function () {
    function PrivilegiosRoutingModule() {
    }
    PrivilegiosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PrivilegiosRoutingModule);
    return PrivilegiosRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/privilegios/privilegios.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/privilegios/privilegios.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/privilegios/privilegios.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/privilegios/privilegios.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3ByaXZpbGVnaW9zL3ByaXZpbGVnaW9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/privilegios/privilegios.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/privilegios/privilegios.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivilegiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegiosComponent", function() { return PrivilegiosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivilegiosComponent = /** @class */ (function () {
    function PrivilegiosComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = "Privilegios";
        this._usuarioService.pushBreadcum(this.title, '/admin/privilegio', 1);
    }
    PrivilegiosComponent.prototype.ngOnInit = function () {
    };
    PrivilegiosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privilegios',
            template: __webpack_require__(/*! ./privilegios.component.html */ "./src/app/administracion/privilegios/privilegios.component.html"),
            styles: [__webpack_require__(/*! ./privilegios.component.scss */ "./src/app/administracion/privilegios/privilegios.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], PrivilegiosComponent);
    return PrivilegiosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/privilegios/privilegios.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/privilegios/privilegios.module.ts ***!
  \******************************************************************/
/*! exports provided: createTranslateLoader, PrivilegiosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegiosModule", function() { return PrivilegiosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _privilegios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privilegios-routing.module */ "./src/app/administracion/privilegios/privilegios-routing.module.ts");
/* harmony import */ var _privilegios_privilegios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privilegios/privilegios.component */ "./src/app/administracion/privilegios/privilegios.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/privilegios/consulta/consulta.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/privilegios/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/privilegios/', '.json');
}
var PrivilegiosModule = /** @class */ (function () {
    function PrivilegiosModule() {
    }
    PrivilegiosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_privilegios_privilegios_component__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__["LanguageTranslationModule"],
                _privilegios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivilegiosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"]
            ]
        })
    ], PrivilegiosModule);
    return PrivilegiosModule;
}());



/***/ }),

/***/ "./src/app/administracion/privilegios/services/privilegios.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/privilegios/services/privilegios.service.ts ***!
  \****************************************************************************/
/*! exports provided: PrivilegiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegiosService", function() { return PrivilegiosService; });
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




var PrivilegiosService = /** @class */ (function () {
    function PrivilegiosService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PrivilegiosService.prototype.elimina = function (id, jwt) {
        var params = '?id_privilegio=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'admin/privilegios/elimina.php' + params);
    };
    PrivilegiosService.prototype.consulta = function (jwt, id) {
        var params = '?id_privilegio=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'admin/privilegios/consulta.php' + params);
    };
    PrivilegiosService.prototype.modificaPrivilegios = function (privilegios, jwt, id_privilegio) {
        var formData = new FormData();
        formData.append('privilegio_clave', privilegios.get('cvPrivilegio').value);
        formData.append('privilegio', privilegios.get('privilegio').value);
        formData.append('icono', privilegios.get('icono').value);
        formData.append('url', privilegios.get('url').value);
        formData.append('jwt', jwt);
        if (privilegios.get('idPadre').value == "") {
        }
        else {
            formData.append('privilegio_padre_id', privilegios.get('idPadre').value);
        }
        var fd = new FormData();
        if (id_privilegio == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'admin/privilegios/crea.php', formData);
        }
        else {
            formData.append('id_privilegio', id_privilegio); //EDITA 
            return this._httpClient.post(this.url + 'admin/privilegios/edita.php', formData);
        }
    };
    PrivilegiosService.prototype.privilegioPadre = function (id_nuevo, id_seleccionado, jwt) {
        var formData = new FormData();
        formData.append('id_privilegio', id_seleccionado);
        formData.append('id_privilegio_padre', id_nuevo);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/privilegios/editaPadre.php', formData);
    };
    PrivilegiosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PrivilegiosService);
    return PrivilegiosService;
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


/***/ }),

/***/ "./src/app/services/catalogo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/catalogo.service.ts ***!
  \**********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogoService = /** @class */ (function () {
    function CatalogoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CatalogoService.prototype.consultaEstatusMateria = function () {
        return this._httpClient.get(this.url + 'catalogosLE/estatusMateria.php');
    };
    CatalogoService.prototype.consultaArea = function () {
        // var params = '?id_plan_estudio='+idPlan
        // params += '&id_plan_estudio='+idPlan;
        return this._httpClient.get(this.url + 'catalogosCE/consultaArea.php');
    };
    CatalogoService.prototype.consultaGrado = function (idPlan) {
        var params = '?id_plan_estudio=' + idPlan;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    CatalogoService.prototype.consultaCampus = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/campus.php' + params);
    };
    CatalogoService.prototype.consultaInstitucion = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/instituciones.php' + params);
    };
    CatalogoService.prototype.consultaTipoInst = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipo_instituciones.php' + params);
    };
    CatalogoService.prototype.consultaCarrera = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/carreras.php' + params);
    };
    CatalogoService.prototype.consultaCarreraAspirantes = function () {
        return this._httpClient.get(this.url + 'catalogos/carrerasAspirante.php');
    };
    CatalogoService.prototype.consultatipoPeriodo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoPeriodo.php' + params);
    };
    CatalogoService.prototype.consultaNivelEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/nivelestudios.php' + params);
    };
    CatalogoService.prototype.consultaEstatusAspirante = function () {
        return this._httpClient.get(this.url + 'catalogoSG/estatusAspirante.php');
    };
    CatalogoService.prototype.consultaEstatusCiclo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/ciclo_estatus.php' + params);
    };
    CatalogoService.prototype.consultaCiclo = function () {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        // var params = '?jwt='+jwt
        return this._httpClient.get(this.url + 'catalogosCE/ciclo.php');
    };
    CatalogoService.prototype.consultaGrupo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/grupo.php' + params);
    };
    // consultaGruposPrimero(){
    //   return this._httpClient.get(this.url +'controlEscolar/ordenJerarquico/gruposPrimero.php');
    // }
    // // controlEscolar\ordenJerarquico\gruposPrimero.php
    CatalogoService.prototype.consultatipoAsignatura = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoAsignatura.php' + params);
    };
    CatalogoService.prototype.consultaRol = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/planEstudios.php' + params);
    };
    CatalogoService.prototype.consultatipoPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/tipoPlanEstudios.php' + params);
    };
    CatalogoService.prototype.consultaAsignaturaTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/asignaturas.php' + params);
    };
    CatalogoService.prototype.consultaUsuario = function (jwt, limite) {
        var params = '?jwt=' + jwt;
        params += '&limite=' + limite;
        return this._httpClient.get(this.url + 'catalogos/usuario.php' + params);
    };
    CatalogoService.prototype.consultaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/correos.php' + params);
    };
    CatalogoService.prototype.consultaRolTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaListaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/grupoCorreo.php' + params);
    };
    CatalogoService.prototype.consultaPrivilegios = function (jwt, muestraEstatus) {
        var params = '?jwt=' + jwt;
        params += '&muestra_estatus=' + muestraEstatus;
        return this._httpClient.get(this.url + 'catalogos/privilegios.php' + params);
    };
    CatalogoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogoService);
    return CatalogoService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-privilegios-privilegios-module.js.map