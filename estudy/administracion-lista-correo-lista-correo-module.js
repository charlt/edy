(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-lista-correo-lista-correo-module"],{

/***/ "./src/app/administracion/lista-correo/consulta/consulta.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/consulta/consulta.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n      <h4 class=\"top-buffer\">{{title}}</h4>\r\n      <br>\r\n      <a  [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> {{'listaCorreo' | translate}} </a>\r\n      <hr>\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n        <div class=\"input-group-append\">\r\n          <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n      </div>        \r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-bordered\">\r\n            <tbody><tr>\r\n              <th>{{'nombreLista' | translate}}</th>\r\n              <th>{{'verLista' | translate}} </th>\r\n              <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n              <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>   \r\n            </tr>\r\n            <tr *ngIf=\"!lista\">\r\n                <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n            </tr>\r\n              <tr *ngFor=\"let grupo of lista; let i = index;\">\r\n                <td>{{grupo.grupo_correo}}</td>\r\n                <td>\r\n                  <button (click)=\"open(content,grupo.grupo_correo,grupo.grupo_correo_id)\" class=\"btn btn-success\"><i class=\"fa fa-eye\"></i></button>\r\n                </td>                               \r\n                <td [hidden]=\"tipoAdmin == 0\">\r\n                  <a [routerLink]=\"['../editar/'+grupo.grupo_correo_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n                </td>\r\n                <td [hidden]=\"tipoAdmin == 0\">\r\n                  <button (click)=\"eliminar(grupo.grupo_correo_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                </td>                                   \r\n              </tr>          \r\n          </tbody></table>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">{{asunto}}</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-bordered\" *ngIf=\"usuarios\">\r\n                  <tbody><tr>\r\n                    <th>{{'TbName' | translate}}</th>\r\n                    <th>{{'Mail' | translate}} </th>\r\n                    <th>{{'tipoUsuario' | translate}}</th>\r\n                  </tr>\r\n                    <tr *ngFor=\"let usuario of usuarios; let i = index;\">\r\n                      <td>{{usuario.nombre}}</td>\r\n                      <td>{{usuario.email}}</td>                               \r\n                      <td>{{usuario.usuario_id}}</td>                       \r\n                    </tr>          \r\n                </tbody></table>\r\n              </div>            \r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n          </div>\r\n      </ng-template>\r\n    </div>"

/***/ }),

/***/ "./src/app/administracion/lista-correo/consulta/consulta.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/consulta/consulta.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2xpc3RhLWNvcnJlby9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/lista-correo/consulta/consulta.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/consulta/consulta.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_lista_correo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/lista-correo.service */ "./src/app/administracion/lista-correo/services/lista-correo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function ConsultaComponent(_usuarioService, _catalogoService, modalService, _listaCorreoService, translate) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.modalService = modalService;
        this._listaCorreoService = _listaCorreoService;
        this.translate = translate;
        this.breadcrum = [];
        this.title = 'Consulta de lista de correos';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaListaCorreo(this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.lista = response['grupos'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.open = function (content, asunto, id) {
        var _this = this;
        this.asunto = asunto;
        this.modalService.open(content, { size: 'lg' });
        this.usuarios = "";
        this._listaCorreoService.consultaLista(id, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.usuarios = response['alumnos'];
            }
            else {
                _this.usuarios = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm(this.translate.instant('MsgEraseList'), function () {
            var _this = this;
            this._listaCorreoService.elimina(id, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.lista.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
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
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/lista-correo/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/lista-correo/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_lista_correo_service__WEBPACK_IMPORTED_MODULE_4__["ListaCorreoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/lista-correo/lista-correo-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/lista-correo-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ListaCorreoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCorreoRoutingModule", function() { return ListaCorreoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/lista-correo/consulta/consulta.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/lista-correo/nuevo/nuevo.component.ts");
/* harmony import */ var _lista_correo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-correo.component */ "./src/app/administracion/lista-correo/lista-correo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _lista_correo_component__WEBPACK_IMPORTED_MODULE_4__["ListaCorreoComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"] },
            { path: 'nuevo', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"] },
            { path: 'editar/:id', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"] }
        ]
    }
];
var ListaCorreoRoutingModule = /** @class */ (function () {
    function ListaCorreoRoutingModule() {
    }
    ListaCorreoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ListaCorreoRoutingModule);
    return ListaCorreoRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/lista-correo/lista-correo.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/lista-correo.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/lista-correo/lista-correo.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/lista-correo.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbGlzdGEtY29ycmVvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFHRDtFQUNJLFdBQVU7RUFDViw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGdCQUFlO0VBR2Ysb0RBQWdELEVBQ25EOztBQUVEO0VBQ0ksMEJBMUJrQjtFQTJCbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUEvQmtCLEVBZ0NyQjs7QUFFRDtFQUNJLGVBbkNrQixFQW9DckI7O0FBQ0Q7RUFDSSwwQkF0Q2tCO0VBdUNsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQThCO0VBQzlCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2xpc3RhLWNvcnJlby9saXN0YS1jb3JyZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/lista-correo/lista-correo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/lista-correo/lista-correo.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaCorreoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCorreoComponent", function() { return ListaCorreoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaCorreoComponent = /** @class */ (function () {
    function ListaCorreoComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Administrador de correos";
        this._usuarioService.pushBreadcum(this.title, '/admin/lista-correo', 1);
    }
    ListaCorreoComponent.prototype.ngOnInit = function () {
    };
    ListaCorreoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-correo',
            template: __webpack_require__(/*! ./lista-correo.component.html */ "./src/app/administracion/lista-correo/lista-correo.component.html"),
            styles: [__webpack_require__(/*! ./lista-correo.component.scss */ "./src/app/administracion/lista-correo/lista-correo.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ListaCorreoComponent);
    return ListaCorreoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/lista-correo/lista-correo.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/administracion/lista-correo/lista-correo.module.ts ***!
  \********************************************************************/
/*! exports provided: ListaCorreoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCorreoModule", function() { return ListaCorreoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _lista_correo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-correo-routing.module */ "./src/app/administracion/lista-correo/lista-correo-routing.module.ts");
/* harmony import */ var _lista_correo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-correo.component */ "./src/app/administracion/lista-correo/lista-correo.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/lista-correo/consulta/consulta.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/lista-correo/nuevo/nuevo.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ListaCorreoModule = /** @class */ (function () {
    function ListaCorreoModule() {
    }
    ListaCorreoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_lista_correo_component__WEBPACK_IMPORTED_MODULE_4__["ListaCorreoComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"], _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_6__["NuevoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lista_correo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListaCorreoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
            ]
        })
    ], ListaCorreoModule);
    return ListaCorreoModule;
}());



/***/ }),

/***/ "./src/app/administracion/lista-correo/nuevo/nuevo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/nuevo/nuevo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-xl-6 col-lg-6\">\r\n        <h4 class=\"top-buffer\">{{title}}</h4>\r\n        <br>        \r\n        <div class=\"input-group mb-3\">\r\n          <input (keyup)=\"consulta_usuario(search)\" type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n          <div class=\"input-group-append\">\r\n            <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n        </div>       \r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-bordered\">\r\n            <tbody  \r\n            cdkDropList\r\n            #usuarioList=\"cdkDropList\"\r\n            [cdkDropListData]=\"usuarios\"\r\n            [cdkDropListConnectedTo]=\"[userList]\"\r\n            (cdkDropListDropped)=\"drop($event)\">\r\n              <tr>\r\n                <th>{{'TbName' | translate}}</th>\r\n                <th>{{'curpLista' | translate}} </th>\r\n                <th>{{'correoLista' | translate}}</th>\r\n              </tr>    \r\n              <tr *ngIf=\"!usuarios\">\r\n                  <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n              </tr>            \r\n              <tr *ngFor=\"let usuario of usuarios\" cdkDrag>\r\n                <td>{{usuario.nombre}}</td>\r\n                <td>{{usuario.curp}}</td> \r\n                <td>{{usuario.email}}</td> \r\n              </tr>  \r\n            </tbody>\r\n          </table>\r\n        </div>   \r\n      </div>     \r\n      <div class=\"col col-xl-6 col-lg-6\">\r\n        <h4 class=\"top-buffer\">{{'verCorreos' | translate}}</h4>\r\n        <form [formGroup]=\"usuarioForm\" (ngSubmit)=\"enviarInformacion()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'nombreLista' | translate}}</label>\r\n          <input formControlName=\"nombreLista\" class=\"form-control\" type=\"text\" placeholder=\"{{'nombreLista' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"f.nombreLista.invalid && f.nombreLista.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>                         \r\n        </div>       \r\n        <div class=\"table-responsive mt-2\">\r\n          <table class=\"table table-striped table-bordered\">\r\n              <tbody\r\n              cdkDropList\r\n              #userList=\"cdkDropList\"\r\n              [cdkDropListData]=\"users\"\r\n              [cdkDropListConnectedTo]=\"[usuarioList]\"\r\n              (cdkDropListDropped)=\"drop($event)\">\r\n                <tr>\r\n                  <th>{{'TbName' | translate}}</th>\r\n                  <th>{{'curpLista' | translate}} </th>\r\n                  <th>{{'correoLista' | translate}}</th>\r\n                </tr>  \r\n                <tr *ngIf=\"users.length == 0\">\r\n                    <td colspan=\"12\" class=\"text-center\">{{'trAddUser' | translate}}</td>\r\n                </tr>                \r\n                <tr *ngFor=\"let user of users\" cdkDrag>\r\n                  <td>{{user.nombre}}</td>\r\n                  <td>{{user.curp}}</td>\r\n                  <td>{{user.email}}</td>\r\n                </tr>  \r\n              </tbody>\r\n            </table>  \r\n          </div>  \r\n        <button [hidden]=\"tipoAdmin == 0\"  [disabled]=\"buttonDisabled\" type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n        </form>\r\n      </div>\r\n    </div>        \r\n  </div>     \r\n</div>"

/***/ }),

/***/ "./src/app/administracion/lista-correo/nuevo/nuevo.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/nuevo/nuevo.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block; }\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbGlzdGEtY29ycmVvL251ZXZvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbGlzdGEtY29ycmVvL251ZXZvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxsaXN0YS1jb3JyZW9cXG51ZXZvXFxudWV2by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNmRDtFQUNJLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixzQkFBcUI7RUFDckIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsOEJBQTZCO0VBQzdCLDJCQUEwQjtFQUMxQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLHNIQUU4QyxFQUMvQzs7QUFFRDtFQUNFLFdBQVUsRUFDWDs7QUFFRDtFQUNFLHVEQUFzRCxFQUN2RDs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLHVEQUFzRCxFQUN2RCIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2xpc3RhLWNvcnJlby9udWV2by9udWV2by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Zvcm1zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/lista-correo/nuevo/nuevo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/lista-correo/nuevo/nuevo.component.ts ***!
  \**********************************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_lista_correo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/lista-correo.service */ "./src/app/administracion/lista-correo/services/lista-correo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NuevoComponent = /** @class */ (function () {
    function NuevoComponent(_usuarioService, _catalogoService, _listaCorreoService, router, route, formBuilder) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this._listaCorreoService = _listaCorreoService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.breadcrum = [];
        this.lista = [];
        this.users = [];
        this.estado = false;
        this.buttonDisabled = false;
        this.idLista = this.route.snapshot.paramMap.get('id');
        if (this.idLista)
            this.title = 'Editar lista de correos';
        else
            this.title = 'Nueva lista de correos';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(NuevoComponent.prototype, "f", {
        get: function () { return this.usuarioForm.controls; },
        enumerable: true,
        configurable: true
    });
    NuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaUsuario(this.jwt, '50').subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.usuarios = response['usuario'];
            }
        }, function (error) {
            console.log(error);
        });
        this.usuarioForm = this.formBuilder.group({
            nombreLista: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        if (this.idLista != null) {
            this._listaCorreoService.consultaEspecifica(this.idLista, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.estado = true;
                    _this.users = response['alumnos'];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    NuevoComponent.prototype.drop = function (event) {
        if (event.previousContainer !== event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            for (var i = 1; i < this.users.length; i++) {
                if (this.users[i].usuario_id == this.users[0].usuario_id) {
                    alertify.error("El usuario ya se encuentra en la lista");
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(event.container.data, event.previousContainer.data, 0, event.previousIndex);
                }
            }
            if (this.users.length != 0) {
                this.estado = true;
            }
            else {
                alertify.error("Debes agregar usuarios a la lista");
            }
        }
        // else{
        //   // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
        // }
    };
    NuevoComponent.prototype.consulta_usuario = function (input) {
        var _this = this;
        if (!this.searchChangeObserver) {
            rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.searchChangeObserver = observer;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe(function (respuesta) {
                var resultado = respuesta;
                _this._listaCorreoService.consultaUsuario(resultado, _this.jwt).subscribe(function (response) {
                    console.log(response);
                    if (response && response['status']) {
                        _this.usuarios = response['usuario'];
                        alertify.success(response['msg']);
                    }
                    else {
                        _this.usuarios = response['usuario'];
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            });
        }
        this.searchChangeObserver.next(input);
    };
    NuevoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.usuarioForm.invalid) {
            Object.keys(this.usuarioForm.controls).forEach(function (controlKey) {
                _this.usuarioForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (this.estado) {
            this.estado = false;
            this.buttonDisabled = true;
            this.users.forEach(function (usuario) {
                _this.lista.push(parseInt(usuario.usuario_id));
            });
            this._listaCorreoService.insertaGrupo(this.usuarioForm, this.jwt, this.idLista).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.mensaje = response['msg'];
                    if (response['id_correo_grupo']) {
                        _this.idLista = response['id_correo_grupo'];
                        _this.insertaUsuario();
                    }
                    else {
                        _this._listaCorreoService.eliminarUsuarios(_this.idLista, _this.jwt).subscribe(function (respuesta) {
                            console.log(respuesta);
                            if (respuesta && respuesta['status']) {
                                _this.insertaUsuario();
                            }
                            else {
                                alertify.error(respuesta['msg']);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error("Agrega usuarios al grupo");
        }
        if (this.usuarioForm.invalid) {
            return;
        }
    };
    NuevoComponent.prototype.insertaUsuario = function () {
        var _this = this;
        this._listaCorreoService.insertaUsuario(this.idLista, this.jwt, this.lista).subscribe(function (respuesta) {
            console.log(respuesta);
            if (respuesta && respuesta['status']) {
                _this.router.navigate(['admin/lista-correo/consulta']);
                alertify.success(_this.mensaje);
            }
            else {
                alertify.error(respuesta['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo',
            template: __webpack_require__(/*! ./nuevo.component.html */ "./src/app/administracion/lista-correo/nuevo/nuevo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo.component.scss */ "./src/app/administracion/lista-correo/nuevo/nuevo.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _services_lista_correo_service__WEBPACK_IMPORTED_MODULE_6__["ListaCorreoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], NuevoComponent);
    return NuevoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/lista-correo/services/lista-correo.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/lista-correo/services/lista-correo.service.ts ***!
  \******************************************************************************/
/*! exports provided: ListaCorreoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCorreoService", function() { return ListaCorreoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaCorreoService = /** @class */ (function () {
    function ListaCorreoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ListaCorreoService.prototype.consultaLista = function (id, jwt) {
        var params = '?id_correo_grupo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'smtp/grupoCorreo/consulta_alumno.php' + params);
    };
    ListaCorreoService.prototype.consultaUsuario = function (input, jwt) {
        var params = '?busqueda=' + input;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/general/usuario/consulta_nombre.php' + params);
    };
    ListaCorreoService.prototype.elimina = function (id, jwt) {
        var params = '?id_correo_grupo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'smtp/grupoCorreo/elimina.php' + params);
    };
    ListaCorreoService.prototype.consultaEspecifica = function (id, jwt) {
        var params = '?id_correo_grupo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/smtp/grupoCorreo/consulta_alumno.php' + params);
    };
    ListaCorreoService.prototype.insertaGrupo = function (grupo, jwt, id_grupo) {
        console.log(grupo);
        var formData = new FormData();
        formData.append('grupo_correo', grupo.get('nombreLista').value);
        formData.append('id_correo_grupo', id_grupo);
        formData.append('estatus', '1');
        formData.append('jwt', jwt);
        if (id_grupo != null) {
            return this._httpClient.post(this.url + '/smtp/grupoCorreo/edita.php', formData);
        }
        else {
            return this._httpClient.post(this.url + '/smtp/grupoCorreo/crea.php', formData);
        }
    };
    ListaCorreoService.prototype.insertaUsuario = function (id_grupo, jwt, usuario) {
        var formData = new FormData();
        formData.append('id_grupo_correo', id_grupo);
        usuario.forEach(function (user) {
            formData.append('id_usuario[]', user);
        });
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/smtp/grupoCorreo/inserta_alumno.php', formData);
    };
    ListaCorreoService.prototype.eliminarUsuarios = function (id_grupo, jwt) {
        var params = '?id_grupo_correo=' + id_grupo;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/smtp/grupoCorreo/elimina_alumno.php' + params);
    };
    ListaCorreoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListaCorreoService);
    return ListaCorreoService;
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
//# sourceMappingURL=administracion-lista-correo-lista-correo-module.js.map