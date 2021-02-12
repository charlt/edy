(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-usuario-usuario-module"],{

/***/ "./src/app/administracion/usuario/consulta/consulta.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/usuario/consulta/consulta.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n    <h4 class=\"top-buffer\">{{title}}</h4>\r\n    <br>\r\n    <a class=\"btn btn-success\" (click)=\"linkNuevoUser()\" style=\"color: white;\"><i class=\"fa fa-plus\"></i> {{'nuevoUsuario' | translate}} </a>\r\n    <hr>\r\n    <div class=\"input-group mb-3\">\r\n      <input (keyup)=\"consulta_usuario(search)\" type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div> \r\n    <div class=\" table-responsive\">\r\n      <table class=\"table table-striped table-bordered \">\r\n        <tbody><tr>\r\n          <th>#</th>\r\n          <th>{{'nombreUsuario' | translate}}</th>\r\n          <th>{{'curpUsuario' | translate}} </th>\r\n          <th>{{'correoUsuario' | translate}}</th>\r\n          <th>{{'usuario' | translate}}</th>\r\n          <th>Cambiar contraseña</th>\r\n          <th>{{'Rol' | translate}}</th>\r\n          <th>{{'Edit' | translate}}</th>\r\n          <th>{{'Erase' | translate}}</th>                                                         \r\n        </tr>\r\n        <tr *ngIf=\"!usuarios\">\r\n          <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n        </tr>\r\n          <tr *ngFor=\"let usuario of usuarios; let i = index;\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{usuario.primer_apellido}} {{usuario.segundo_apellido}} {{usuario.nombre}}</td>\r\n            <td>{{usuario.curp}}</td>\r\n            <td>{{usuario.email}}</td>\r\n            <td>\r\n              <div class=\"d-flex justify-content-start\">\r\n                <p *ngIf=\"!usuario.editar\" class=\"m-0 p-0\">{{usuario.usuario}}</p>\r\n                <input (blur)=\"editaUsuario($event, i)\" class=\"form-control\" *ngIf=\"usuario.editar\" type=\"text\" id=\"usuario_{{i}}\" [value]=\"usuario.usuario\">  \r\n                <button (click)=\"usuario.editar = !usuario.editar\" class=\"btn btn-info ml-2\"><i class=\"fa fa-pencil\"></i></button>\r\n              </div>\r\n            </td>\r\n            <!--td class=\"text-center\"> \r\n              <button class=\"btn btn-primary\" (click)=\"openUserModal(contentUser, usuario.usuario, usuario.persona_id, usuario.rol)\">\r\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td-->\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-primary\" (click)=\"openPassModal(contentPass, usuario.usuario_id)\">\r\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"text-center\">{{usuario.rol}} \r\n              <button class=\"btn btn-warning text-white btn-sm\" [routerLink]=\"['../roles/' + usuario.usuario_id + '/' + usuario.persona_id]\">Ver</button>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <a [routerLink]=\"['../editar/'+usuario.usuario_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button (click)=\"eliminar(usuario.persona_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n            </td>\r\n          </tr>          \r\n      </tbody></table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentPass let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Cambiar contraseña</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-password [id_usuario]=\"id_usuario\" (closeModal)=\"modal.close('Close click')\"></app-password>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentUser let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Datos del usuario</h4>\r\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button> -->\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Usuario: {{usuario}}</p>\r\n    <p>Contraseña original: {{rol}}{{id_persona}}</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/administracion/usuario/consulta/consulta.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/usuario/consulta/consulta.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3VzdWFyaW8vY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/usuario/consulta/consulta.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/usuario/consulta/consulta.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/administracion/usuario/services/usuarios.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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









var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(_usuarioService, _catalogoService, translate, _usuariosService, modalService, route, router) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.translate = translate;
        this._usuariosService = _usuariosService;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.title = 'Consulta de usuarios';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        var _datosUsuario = localStorage.getItem('usuario');
        if (_datosUsuario) {
            this.datosUsuario = JSON.parse(_datosUsuario);
            localStorage.removeItem('usuario');
            // console.log(this.datosUsuario)
            this.openUserModal(this.contentUser, this.datosUsuario[0].usuario, this.datosUsuario[0].id, this.datosUsuario[0].rol);
        }
        this.consultaUsuario();
    };
    ConsultaComponent.prototype.consultaUsuario = function () {
        var _this = this;
        this._catalogoService.consultaUsuario(this.jwt, '50').subscribe(function (response) {
            if (response && response['status']) {
                _this.usuarios = response['usuario'];
                _this.usuarios.forEach(function (usuario) {
                    usuario['editar'] = false;
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.linkNuevoUser = function () {
        this.router.navigate(['admin/usuario/nuevo']);
    };
    ConsultaComponent.prototype.openPassModal = function (contentContraseña, idUsuario) {
        this.id_usuario = idUsuario;
        this.modalService.open(contentContraseña, { size: 'lg' });
    };
    ConsultaComponent.prototype.openUserModal = function (contentUser, usuario, persona_id, rol) {
        this.usuario = usuario;
        this.id_persona = persona_id;
        this.rol = rol;
        this.modalService.open(contentUser, { size: 'sm' });
    };
    ConsultaComponent.prototype.consulta_usuario = function (input) {
        var _this = this;
        if (!this.searchChangeObserver) {
            rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
                _this.searchChangeObserver = observer;
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe(function (respuesta) {
                var resultado = respuesta;
                _this._usuariosService.consultaUsuario(resultado, _this.jwt).subscribe(function (response) {
                    console.log(response);
                    if (response && response['status']) {
                        _this.usuarios = response['usuario'];
                        alertify.success(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            });
        }
        this.searchChangeObserver.next(input);
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm(this.translate.instant('MsgEraseUser'), function () {
            var _this = this;
            this._usuariosService.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.usuarios.splice(index, 1);
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
        console.log("Borrar");
    };
    ConsultaComponent.prototype.editaUsuario = function (evt, i) {
        var _this = this;
        var nuevo_usuario = evt.target.value;
        if (this.usuarios[i]['usuario'] != nuevo_usuario) {
            this._usuariosService.busquedaCorreoUsuario(nuevo_usuario, 1).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.error('El usuario ya existe');
                }
                else {
                    _this._usuariosService.editaNombreUsuario(nuevo_usuario, _this.usuarios[i]['usuario_id']).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.usuarios[i]['usuario'] = nuevo_usuario;
                            alertify.success(response['msg']);
                        }
                        else {
                            alertify.success(response['msg']);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentUser'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalRef"])
    ], ConsultaComponent.prototype, "contentUser", void 0);
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/usuario/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/usuario/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/edita/edita.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/usuario/edita/edita.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-persona [idPersona]=\"idPersona\" ></app-persona>"

/***/ }),

/***/ "./src/app/administracion/usuario/edita/edita.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/usuario/edita/edita.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3VzdWFyaW8vZWRpdGEvZWRpdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/usuario/edita/edita.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/usuario/edita/edita.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaComponent", function() { return EditaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditaComponent = /** @class */ (function () {
    function EditaComponent(route) {
        this.route = route;
        this.idPersona = this.route.snapshot.paramMap.get('id');
    }
    EditaComponent.prototype.ngOnInit = function () {
    };
    EditaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edita',
            template: __webpack_require__(/*! ./edita.component.html */ "./src/app/administracion/usuario/edita/edita.component.html"),
            styles: [__webpack_require__(/*! ./edita.component.scss */ "./src/app/administracion/usuario/edita/edita.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditaComponent);
    return EditaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/nuevo/nuevo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/usuario/nuevo/nuevo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!registroExitoso\" class=\"col col-xl-12 col-lg-12\">\r\n  <form *ngIf=\"usuarioForm\" [formGroup]=\"usuarioForm\" (ngSubmit)=\"enviarInformacion()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'nombreUsuario' | translate}}(*)</label>\r\n          <input formControlName=\"nombreUsuario\" class=\"form-control\" placeholder=\"{{'nombreUsuario' | translate}}\"\r\n            type=\"text\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.nombreUsuario.invalid && f.nombreUsuario.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'apPatUsuario' | translate}}(*)</label>\r\n          <input formControlName=\"apPatUsuario\" class=\"form-control\" placeholder=\"{{'apPatUsuario' | translate}}\"\r\n            type=\"text\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.apPatUsuario.invalid && f.apPatUsuario.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'apMatUsuario' | translate}}</label>\r\n          <input formControlName=\"apMatUsuario\" class=\"form-control\" placeholder=\"{{'apMatUsuario' | translate}}\"\r\n            type=\"text\" autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.apMatUsuario.invalid && f.apMatUsuario.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'sexoUsuario' | translate}}</label><br>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input formControlName=\"sexoUsuario\" type=\"radio\" id=\"hombre\" name=\"sexoUsuario\"\r\n              class=\"custom-control-input\" value=\"1\">\r\n            <label class=\"custom-control-label text-dark\" for=\"hombre\">Hombre</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input formControlName=\"sexoUsuario\" type=\"radio\" id=\"mujer\" name=\"sexoUsuario\" class=\"custom-control-input\"\r\n              value=\"2\">\r\n            <label class=\"custom-control-label text-dark\" for=\"mujer\">Mujer</label>\r\n          </div>\r\n          <br>\r\n          <span class=\"invalidText\" *ngIf=\"f.sexoUsuario.invalid && f.sexoUsuario.touched\">\r\n            {{'fmOptSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'celular' | translate}}</label>\r\n          <input formControlName=\"celular\" class=\"form-control\" placeholder=\"{{'celular' | translate}}\" type=\"text\"\r\n            autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.celular.invalid && f.celular.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'correoUsuario' | translate}}(*)</label>\r\n          <input formControlName=\"correoUsuario\" class=\"form-control\" placeholder=\"{{'correoUsuario' | translate}}\"\r\n            type=\"email\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.correoUsuario.invalid && f.correoUsuario.touched && !errCorreo\">\r\n            {{'fmErrEmail' | translate}}\r\n          </span>\r\n          <span class=\"invalidText\" *ngIf=\"errCorreo\">\r\n            Ingresa un correo diferente\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'rfcUsuario' | translate}}</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"rfcUsuario\"\r\n            placeholder=\"{{'rfcUsuario' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"f.rfcUsuario.invalid && f.rfcUsuario.touched\">\r\n            {{'fmErrRFC' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'curpUsuario' | translate}}</label>\r\n          <input id=\"curp\" type=\"text\" autocomplete=\"new-password\"\r\n            onKeyUp=\"document.getElementById(this.id).value=document.getElementById(this.id).value.toUpperCase()\" [class.ng-invalid]=\"errCURP\" class=\"form-control\" formControlName=\"curpUsuario\" placeholder=\"{{'curpUsuario' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"f.curpUsuario.invalid && f.curpUsuario.touched && !errCURP\">\r\n            {{'fmErrCURP' | translate}}\r\n          </span>\r\n          <span class=\"invalidText\" *ngIf=\"errCURP\">\r\n            Ingresa una CURP diferente\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'fnUsuario' | translate}}</label>\r\n          <input type=\"date\" class=\"form-control\" formControlName=\"fnUsuario\" placeholder=\"{{'fnUsuario' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"f.fnUsuario.invalid && f.fnUsuario.touched\">\r\n            {{'fmErrDate' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 mt-3\">\r\n        <label><input type=\"checkbox\" id =\"ckeck\" (click)=\"enviaCorreo();\" >¿Deseas enviarle un correo al usuario con sus credenciales? </label>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <br>\r\n        <label><input type=\"checkbox\" formControlName=\"forceUser\"> Agregar usuario y contraseña manualmente</label>\r\n      </div>\r\n    </div><hr>\r\n    <div class=\"row\" [hidden]=\"!f.forceUser.value\"> <!--Form #####-->\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'usuarioOpcional' | translate}} </label>\r\n          <input formControlName=\"usuario\" class=\"form-control\" placeholder=\"{{'usuario' | translate}}\" type=\"text\" autocomplete=\"new-password\">\r\n          <span class=\"invalidText\" *ngIf=\"f.usuario.invalid && f.usuario.touched && !errUser\">\r\n            {{'fmIncorrectUser' | translate}}\r\n          </span>\r\n          <span class=\"invalidText\" *ngIf=\"errUser\">\r\n            Ingresa un nombre de usuario diferente\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'passUsuario' | translate}}</label>\r\n          <input formControlName=\"passUsuario\" class=\"form-control\" placeholder=\"{{'passUsuario' | translate}}\" type=\"password\" autocomplete=\"new-password\">\r\n          <span class=\"invalidText\" *ngIf=\"f.passUsuario.invalid && f.passUsuario.touched\">\r\n            {{'fmIncorrectPass' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group mb-2\">\r\n          <label class=\"control-label\">Rol</label>\r\n          <select formControlName=\"catRoles\" class=\"form-control\" (change)=\"cambiaValidacion(f.catRoles.value)\">\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"rol.rol_id\" *ngFor=\"let rol of roles\">{{rol.rol}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.catRoles.invalid && f.catRoles.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <div [hidden]=\"f.catRoles.value != 3 && f.catRoles.value != 2\">\r\n          <label><input type=\"checkbox\" formControlName=\"muestraClave\"> \r\n            ¿Deseas agregar la \r\n            <label *ngIf=\"f.catRoles.value == 2\" class=\"control-label\">matrícula</label>\r\n            <label *ngIf=\"f.catRoles.value == 3\" class=\"control-label\">clave</label>\r\n            manualmente ?\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [hidden]=\"(f.catRoles.valid && f.catRoles.value == 1)  || !f.muestraClave.value\" class=\"col-md-12\">\r\n        <label *ngIf=\"f.catRoles.value == 2\" class=\"control-label\">{{'matrícula' | translate}}</label>\r\n        <label *ngIf=\"f.catRoles.value != 2\" class=\"control-label\">{{'clave' | translate}}</label>\r\n        <input formControlName=\"clave\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div [hidden]=\"f.catRoles.invalid || f.catRoles.value != 4\" class=\"row\"> <!--Nuevo select de carrera aspirante-->\r\n      <div class=\"col-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Carrera(*)</label>\r\n          <select formControlName=\"catCarreraAspirante\" class=\"form-control\">\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"carrera.carrera_id\" *ngFor=\"let carrera of carreras\">{{carrera.carrera}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.catArea.invalid && f.catArea.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" [hidden]=\"f.catRoles.value != 1\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'TypeRol' | translate}}</label>\r\n          <select formControlName=\"catArea\" class=\"form-control\">\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"area.area_id\" *ngFor=\"let area of areas\">{{area.area_nombre}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.catArea.invalid && f.catArea.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Tipo de consulta</label>\r\n          <select formControlName=\"tipoConsulta\" class=\"form-control\">\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"1\">Consulta</option>\r\n            <option [value]=\"2\">Consulta y edición</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoConsulta.invalid && f.tipoConsulta.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"f.catRoles.value == 2\">\r\n      <app-consulta-asignatura [tipo]=\"'small'\" [parentForm]=\"usuarioForm\" [nivel]=\"3\"></app-consulta-asignatura>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"f.catRoles.value == 2\">\r\n      <div class=\"col-12\">\r\n        <label><input type=\"checkbox\" formControlName=\"campusUs\">¿Deseas agregar a campus?</label>\r\n      </div>\r\n      <div class=\"col-12\" [hidden]=\"!f.campusUs.value\" rel=\"1\">\r\n        <label class=\"control-label\" for=\"\">Campus</label>\r\n        <select formControlName=\"campus\" class=\"form-control\">\r\n          <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n          <option [value]=\"_campus.campus_id\" *ngFor=\"let _campus of campus\">{{_campus.campus}}</option>\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.campus.invalid && f.campus.touched\">\r\n          {{'fmErrSelect' | translate}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <hr>\r\n        <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"buttonDisabled || loading\" type=\"submit\"\r\n          class=\"btn btn-success pull-right\"><i *ngIf=\"loading\" class=\"fa fa-spin fa-spinner\"></i> {{'fmSave' | translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div *ngIf=\"registroExitoso\" class=\"col col-xl-12 col-lg-12\">\r\n  <div class=\"alert alert-success text-center\">\r\n    <h1><i class=\"fa fa-check\"></i></h1>\r\n    <h3>Registro exitoso</h3>\r\n    <p>Se ha creado el usuario exitosamente, estas son las credenciales</p>\r\n    <h5>\r\n      Usuario: {{usuario}}\r\n    </h5>\r\n    <h5>\r\n      Contraseña: {{password}}\r\n    </h5>\r\n\r\n    <br>\r\n    <button class=\"btn btn-success\" (click)=\"redireccion()\">Continuar</button>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/usuario/nuevo/nuevo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/usuario/nuevo/nuevo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.ng-valid.ng-invalid {\n  border: 1px solid #dc3545; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vdXN1YXJpby9udWV2by9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3VzdWFyaW8vbnVldm8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXHVzdWFyaW9cXG51ZXZvXFxudWV2by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNoQkE7RUFDRywwQkFBeUIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi91c3VhcmlvL251ZXZvL251ZXZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuIC5uZy12YWxpZC5uZy1pbnZhbGlke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/usuario/nuevo/nuevo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/usuario/nuevo/nuevo.component.ts ***!
  \*****************************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuarios.service */ "./src/app/administracion/usuario/services/usuarios.service.ts");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function NuevoComponent(formBuilder, _usuarioService, _usuariosService, _catalogoService, router) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._usuariosService = _usuariosService;
        this._catalogoService = _catalogoService;
        this.router = router;
        this.buttonDisabled = false;
        this.loading = false;
        this.errCURP = false;
        this.errCorreo = false;
        this.errUser = false;
        this.nuevo = true;
        this.msgUser = false;
        this.msgPassword = 0;
        this.registroExitoso = false;
        this.correo = 0;
        this.title = 'Nuevo usuario';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(NuevoComponent.prototype, "f", {
        get: function () { return this.usuarioForm.controls; },
        enumerable: true,
        configurable: true
    });
    NuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('selectedRol'))
            this.selectedRol = sessionStorage.getItem('selectedRol');
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        this.color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_5__["randomColor"])();
        this.mostrarCampus();
        this._catalogoService.consultaRol(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                if (_this.selectedRol)
                    _this.roles = [response['rol'].find(function (r) { return r.rol == _this.selectedRol; })];
                else
                    _this.roles = response['rol'];
            }
            _this.setForm();
        }, function (error) {
            console.log(error);
        });
        this.consultaArea();
        this.consultaCarrera();
    };
    NuevoComponent.prototype.consultaCarrera = function () {
        var _this = this;
        this._catalogoService.consultaCarreraAspirantes().subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
                console.log(_this.carreras);
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoComponent.prototype.setForm = function () {
        var _this = this;
        this.usuarioForm = this.formBuilder.group({
            nombreUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apPatUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apMatUsuario: [''],
            sexoUsuario: [''],
            fnUsuario: [''],
            celular: [''],
            forceUser: [false],
            muestraClave: [false],
            campusUs: [false],
            curpUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)],
            rfcUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)],
            correoUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            usuario: [''],
            passUsuario: [''],
            clave: [''],
            catRoles: [this.selectedRol ? this.roles.find(function (r) { return r.rol == _this.selectedRol; }).rol_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            catArea: [''],
            tipoConsulta: [''],
            campus: [''],
            plan_orden_id: [''],
            carrera_id: [''],
            plan_estudio_id: [''],
            catCarreraAspirante: [''],
        });
        this.usuarioForm.get('curpUsuario').valueChanges.subscribe(function (value) {
            if (_this.usuarioForm.get('curpUsuario').valid) {
                _this.curp(value);
            }
            else {
                _this.errCURP = false;
            }
        });
        this.usuarioForm.get('usuario').valueChanges.subscribe(function (value) {
            _this.buscaUsuario(_this.usuarioForm.get('usuario').value, 1);
        });
        this.usuarioForm.get('correoUsuario').valueChanges.subscribe(function (value) {
            _this.buttonDisabled = false;
            _this.errCorreo = false;
            if (_this.usuarioForm.get('correoUsuario').valid) {
                _this.buscaUsuario(_this.usuarioForm.get('correoUsuario').value, 2);
            }
        });
    };
    NuevoComponent.prototype.buscaUsuario = function (busqueda, tipo) {
        var _this = this;
        this._usuariosService.busquedaCorreoUsuario(busqueda, tipo).subscribe(function (response) {
            if (response && response['status']) {
                _this.coincidencias = response['coincidencia'];
                _this.coincidencias.forEach(function (coincidencia) {
                    if (coincidencia.email == busqueda && tipo == 2) {
                        _this.usuarioForm.controls['correoUsuario'].setErrors({ 'incorrect': true });
                        _this.errCorreo = true;
                        _this.buttonDisabled = true;
                    }
                    else if (coincidencia.usuario == busqueda && tipo == 1) {
                        _this.errUser = true;
                        _this.buttonDisabled = true;
                        _this.usuarioForm.controls['usuario'].setErrors({ 'incorrect': true });
                    }
                });
            }
            else if (tipo == 1) {
                _this.errUser = false;
                _this.buttonDisabled = false;
            }
            else if (tipo == 2) {
                _this.errCorreo = false;
                _this.buttonDisabled = false;
            }
            if (_this.errCorreo == true && _this.usuarioForm.get('correoUsuario').value) {
                alertify.error('Correo no disponible').dismissOthers();
            }
            else if (_this.errUser == true && _this.usuarioForm.get('usuario').value && _this.usuarioForm.get('forceUser').value) {
                alertify.error('Nombre de usuario no disponible').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoComponent.prototype.mostrarCampus = function () {
        var _this = this;
        this._catalogoService.consultaCampus(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.campus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoComponent.prototype.consultaArea = function () {
        var _this = this;
        this._catalogoService.consultaArea().subscribe(function (response) {
            if (response && response['status']) {
                _this.areas = response['areas'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoComponent.prototype.cambiaValidacion = function (rol) {
        if (rol == 1) {
            this.usuarioForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.clave.reset();
            this.usuarioForm.get('clave').setValue("");
            this.usuarioForm.controls.catCarreraAspirante.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catCarreraAspirante.reset();
            this.usuarioForm.get('catCarreraAspirante').setValue("");
            this.usuarioForm.controls.carrera_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.carrera_id.reset();
            this.usuarioForm.get('carrera_id').setValue("");
            this.usuarioForm.controls.plan_estudio_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_estudio_id.reset();
            this.usuarioForm.get('plan_estudio_id').setValue("");
            this.usuarioForm.controls.plan_orden_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_orden_id.reset();
            this.usuarioForm.get('plan_orden_id').setValue("");
            this.usuarioForm.controls.catArea.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.catArea.reset();
            this.usuarioForm.get('catArea').setValue("");
            this.usuarioForm.controls.tipoConsulta.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.tipoConsulta.reset();
            this.usuarioForm.get('tipoConsulta').setValue("");
        }
        else if (rol == 2) {
            //this.usuarioForm.controls.clave.setValidators(Validators["required"])
            //this.usuarioForm.controls.clave.reset();
            this.usuarioForm.get('clave').setValue("");
            this.usuarioForm.controls.carrera_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.carrera_id.reset();
            this.usuarioForm.get('carrera_id').setValue("");
            this.usuarioForm.controls.plan_estudio_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.plan_estudio_id.reset();
            this.usuarioForm.get('plan_estudio_id').setValue("");
            this.usuarioForm.controls.plan_orden_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.plan_orden_id.reset();
            this.usuarioForm.get('plan_orden_id').setValue("");
            this.usuarioForm.controls.catArea.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catArea.reset();
            this.usuarioForm.get('catArea').setValue("");
            this.usuarioForm.controls.tipoConsulta.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.tipoConsulta.reset();
            this.usuarioForm.get('tipoConsulta').setValue("");
            this.usuarioForm.controls.catCarreraAspirante.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catCarreraAspirante.reset();
            this.usuarioForm.get('catCarreraAspirante').setValue("");
        }
        else if (rol == 3) {
            this.usuarioForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.clave.reset();
            this.usuarioForm.get('clave').setValue("");
            this.usuarioForm.controls.catCarreraAspirante.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catCarreraAspirante.reset();
            this.usuarioForm.get('catCarreraAspirante').setValue("");
            this.usuarioForm.controls.carrera_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.carrera_id.reset();
            this.usuarioForm.get('carrera_id').setValue("");
            this.usuarioForm.controls.plan_estudio_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_estudio_id.reset();
            this.usuarioForm.get('plan_estudio_id').setValue("");
            this.usuarioForm.controls.plan_orden_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_orden_id.reset();
            this.usuarioForm.get('plan_orden_id').setValue("");
            this.usuarioForm.controls.catArea.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catArea.reset();
            this.usuarioForm.get('catArea').setValue("");
            this.usuarioForm.controls.tipoConsulta.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.tipoConsulta.reset();
            this.usuarioForm.get('tipoConsulta').setValue("");
        }
        else if (rol == 4) {
            this.usuarioForm.controls.catCarreraAspirante.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.catCarreraAspirante.reset();
            this.usuarioForm.get('catCarreraAspirante').setValue("");
            this.usuarioForm.controls.carrera_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.carrera_id.reset();
            this.usuarioForm.get('carrera_id').setValue("");
            this.usuarioForm.controls.plan_estudio_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_estudio_id.reset();
            this.usuarioForm.get('plan_estudio_id').setValue("");
            this.usuarioForm.controls.plan_orden_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_orden_id.reset();
            this.usuarioForm.get('plan_orden_id').setValue("");
            this.usuarioForm.controls.catArea.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catArea.reset();
            this.usuarioForm.get('catArea').setValue("");
            this.usuarioForm.controls.tipoConsulta.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.tipoConsulta.reset();
            this.usuarioForm.get('tipoConsulta').setValue("");
        }
        else if (rol == 5) {
            this.usuarioForm.controls.catCarreraAspirante.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catCarreraAspirante.reset();
            this.usuarioForm.get('catCarreraAspirante').setValue("");
            this.usuarioForm.controls.carrera_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.carrera_id.reset();
            this.usuarioForm.get('carrera_id').setValue("");
            this.usuarioForm.controls.plan_estudio_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_estudio_id.reset();
            this.usuarioForm.get('plan_estudio_id').setValue("");
            this.usuarioForm.controls.plan_orden_id.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.plan_orden_id.reset();
            this.usuarioForm.get('plan_orden_id').setValue("");
            this.usuarioForm.controls.catArea.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.catArea.reset();
            this.usuarioForm.get('catArea').setValue("");
            this.usuarioForm.controls.tipoConsulta.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.tipoConsulta.reset();
            this.usuarioForm.get('tipoConsulta').setValue("");
        }
        else {
            this.usuarioForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.clave.reset();
            this.usuarioForm.get('clave').setValue("");
        }
    };
    NuevoComponent.prototype.enviaCorreo = function () {
        if (this.correo == 0) {
            this.correo = 1;
        }
        else if (this.correo == 1) {
            this.correo = 0;
        }
    };
    NuevoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.usuarioForm.invalid) {
            Object.keys(this.usuarioForm.controls).forEach(function (controlKey) {
                _this.usuarioForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this.loading = true;
        this.color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_5__["randomColor"])();
        this._usuariosService.modificaUsuario(this.usuarioForm, this.idUsuario, this.idPersona, this.idRol, this.color, this.correo).subscribe(function (response) {
            // console.log(response)
            if (response && response['status']) {
                var usuario = void 0;
                var rol = void 0;
                _this.idRol = _this.usuarioForm.get('catRoles').value;
                if (_this.usuarioForm.get('usuario').value)
                    usuario = _this.usuarioForm.get('usuario').value;
                else
                    usuario = _this.usuarioForm.get('correoUsuario').value;
                if (!_this.usuarioForm.get('passUsuario').value) {
                    _this.idPersona = response['id_persona'];
                    switch (_this.idRol) {
                        case "1":
                            rol = "Admin";
                            break;
                        case "2":
                            rol = "Alumno";
                            break;
                        case "3":
                            rol = "Docente";
                            break;
                        case "4":
                            rol = "Aspirante";
                            break;
                        case "5":
                            rol = "Asesor";
                            break;
                        default:
                            break;
                    }
                    _this.usuario = usuario;
                    _this.password = rol + "" + _this.idPersona;
                    _this.registroExitoso = true;
                    //
                }
                else {
                    _this.router.navigate(['admin/usuario/consulta']);
                }
                if (sessionStorage.getItem('selectedRol'))
                    sessionStorage.removeItem('selectedRol');
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
            _this.loading = false;
            // alertify.success(response['msg']);
            //  else {
            //   alertify.error(response['msg']);
            // }
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
        if (this.usuarioForm.invalid) {
            return;
        }
    };
    NuevoComponent.prototype.redireccion = function () {
        switch (this.idRol) {
            case "1":
                this.router.navigate(['admin/usuario/']);
                break;
            case "2":
                this.router.navigate(['admin/alumno/']);
                break;
            case "3":
                this.router.navigate(['admin/docente/']);
                break;
            case "4":
                this.router.navigate(['admin/aspirante/']);
                break;
            default:
                break;
        }
    };
    NuevoComponent.prototype.curp = function (curp) {
        var _this = this;
        this.buttonDisabled = false;
        if (curp != '') {
            if (!this.idUsuario) {
                this._usuariosService.consultaCurp(curp, '').subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.error("Esta curp ya existe en nuestros registros").dismissOthers();
                        _this.usuarioForm.controls['curpUsuario'].setErrors({ 'incorrect': true });
                        _this.buttonDisabled = true;
                        _this.errCURP = true;
                    }
                    else {
                        _this.buttonDisabled = false;
                        _this.errCURP = false;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            this.buttonDisabled = false;
            this.errCURP = false;
        }
    };
    NuevoComponent.prototype.ngOnDestroy = function () {
        if (sessionStorage.getItem('selectedRol'))
            sessionStorage.removeItem('selectedRol');
    };
    NuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo',
            template: __webpack_require__(/*! ./nuevo.component.html */ "./src/app/administracion/usuario/nuevo/nuevo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo.component.scss */ "./src/app/administracion/usuario/nuevo/nuevo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"],
            _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NuevoComponent);
    return NuevoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/roles/roles.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/usuario/roles/roles.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>Rol</th>\r\n            <th>Editar</th>\r\n            <th>Eliminar</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let rol of Roles; let i = index;\">\r\n            <td>{{rol['rol']}}</td>\r\n            <td class=\"text-center\"><button class=\"btn btn-info\" (click)=\"openModalEdita(contentEdita, rol.rol_id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button></td>\r\n            <td class=\"text-center\"><button class=\"btn btn-danger\" (click)=\"elimina(rol.rol_id)\"><i class=\"fa fa-times\"></i></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <button class=\"btn btn-success pull-right\" (click)=\"openModalAgregar(content)\"><i class=\"fa fa-plus\"></i> Agregar rol</button>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentEdita let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edita rol</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body m-3\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <app-edita-rol-usuario [idRol]=\"id_rol\" [idUsuario]=\"idUsuario\" [idPersona]=\"idPersona\"></app-edita-rol-usuario>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Agregar roles</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body m-3\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <form [formGroup]=\"rolForm\" (ngSubmit)=\"agrega()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Elige el rol que se agregará</label>\r\n          <select class=\"form-control\" formControlName=\"rol\">\r\n            <option value=\"\" selected disabled hidden>{{ 'fmOptSelect' | translate }}</option>\r\n            <option [value]=\"rol.rol_id\" *ngFor=\"let rol of catRoles\">{{rol.rol}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Ingresa la clave/matricula</label>\r\n          <input class=\"form-control\" formControlName=\"clave_usuario\" >\r\n        </div>\r\n        <button class=\"btn btn-success pull-right mt-3\" type=\"submit\" [disabled]=\"rolForm.invalid\">Guardar información</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/administracion/usuario/roles/roles.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/usuario/roles/roles.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vdXN1YXJpby9yb2xlcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi91c3VhcmlvL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/usuario/roles/roles.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/usuario/roles/roles.component.ts ***!
  \*****************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/rol.service */ "./src/app/services/rol.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RolesComponent = /** @class */ (function () {
    function RolesComponent(_rolesService, _usuarioService, route, _modalService, _catalogoService, formBuilder) {
        this._rolesService = _rolesService;
        this._usuarioService = _usuarioService;
        this.route = route;
        this._modalService = _modalService;
        this._catalogoService = _catalogoService;
        this.formBuilder = formBuilder;
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.idUsuario = parseInt(this.route.snapshot.paramMap.get('u'));
        this.idPersona = parseInt(this.route.snapshot.paramMap.get('p'));
        this.getRoles();
        this.consultaRoles();
    };
    RolesComponent.prototype.getRoles = function () {
        var _this = this;
        this._rolesService.consultaRol(this.jwt, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.Roles = response['roles'];
                console.log(_this.Roles);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RolesComponent.prototype.openModalEdita = function (content, id_rol) {
        this.id_rol = id_rol;
        this._modalService.open(content, {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
    };
    RolesComponent.prototype.openModalAgregar = function (content) {
        this.rolForm = this.formBuilder.group({
            rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            clave_usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        if (!this.catRoles) {
            this.consultaRoles();
        }
        this._modalService.open(content, {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
    };
    RolesComponent.prototype.consultaRoles = function () {
        var _this = this;
        this._catalogoService.consultaRol(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.catRoles = response['rol'];
                console.log(_this.catRoles);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RolesComponent.prototype.elimina = function (id_rol) {
        alertify.confirm('Eliminar rol', '¿Desea eliminar el rol?', function () {
            this.enviaDatos(id_rol, null, 0);
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    RolesComponent.prototype.agrega = function () {
        var id_rol = this.rolForm.get('rol').value;
        var clave_usuario = this.rolForm.get('clave_usuario').value;
        this.enviaDatos(id_rol, clave_usuario, 1);
    };
    RolesComponent.prototype.enviaDatos = function (id_rol, clave_usuario, tipo) {
        var _this = this;
        this._rolesService.setDatos(this.jwt, this.idPersona, this.idUsuario, id_rol, clave_usuario, tipo).subscribe(function (response) {
            if (response && response['status']) {
                _this.getRoles();
                _this._modalService.dismissAll();
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    RolesComponent.prototype.close = function () {
        this.getRoles();
        this._modalService.dismissAll();
    };
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/administracion/usuario/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/administracion/usuario/roles/roles.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_rol_service__WEBPACK_IMPORTED_MODULE_1__["RolService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/services/usuarios.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/usuario/services/usuarios.service.ts ***!
  \*********************************************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
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




var UsuariosService = /** @class */ (function () {
    function UsuariosService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    UsuariosService.prototype.consultaUsuario = function (input, jwt) {
        var params = '?busqueda=' + input;
        // params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/general/usuario/consulta_nombre.php' + params);
    };
    UsuariosService.prototype.busquedaCorreoUsuario = function (busqueda, tipo) {
        var params = '?busqueda=' + busqueda;
        params += '&tipoBusqueda=' + tipo;
        return this._httpClient.get(this.url + '/general/usuario/consultaUsuarioCorreo.php' + params);
    };
    UsuariosService.prototype.elimina = function (id, jwt) {
        var params = '?id_persona=' + id;
        // params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'general/usuario/elimina.php' + params);
    };
    UsuariosService.prototype.consultaEspecifica = function (id, id_rol, jwt) {
        var params = '?id_usuario=' + id;
        var params = '?id_rol=' + id_rol;
        // params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'general/usuario/consulta.php' + params);
    };
    UsuariosService.prototype.consultaUsuariosRol = function (id_rol, persona_id) {
        var params = '?persona_id=' + persona_id;
        params += '&id_rol=' + id_rol;
        // var params = '?id_rol=' + id_rol;
        return this._httpClient.get(this.url + 'general/usuario/consultaEspecificaRoles.php' + params);
    };
    UsuariosService.prototype.modificaUsuario = function (usuario, id_usuario, id_persona, id_rol, color, correo) {
        var formData = new FormData();
        formData.append('nombre', usuario.get('nombreUsuario').value);
        formData.append('primer_apellido', usuario.get('apPatUsuario').value);
        formData.append('segundo_apellido', usuario.get('apMatUsuario').value);
        formData.append('id_sexo', usuario.get('sexoUsuario').value);
        formData.append('curp', usuario.get('curpUsuario').value);
        formData.append('rfc', usuario.get('rfcUsuario').value);
        formData.append('fecha_nacimiento', usuario.get('fnUsuario').value);
        formData.append('email', usuario.get('correoUsuario').value);
        formData.append('celular', usuario.get('celular').value);
        formData.append('nombre_usuario', usuario.get('usuario').value);
        formData.append('contraseña', usuario.get('passUsuario').value);
        formData.append('id_rol', usuario.get('catRoles').value);
        formData.append('id_otros_datos', '1');
        formData.append('estatus', '1');
        formData.append('clave_usuario', usuario.get('clave').value);
        formData.append('color', color);
        formData.append('plan_orden_id', usuario.get('plan_orden_id').value);
        formData.append('enviar_correo', correo);
        formData.append('id_area', usuario.get('catArea').value);
        formData.append('tipo_consulta', usuario.get('tipoConsulta').value);
        formData.append('id_campus', usuario.get('campus').value);
        formData.append('carrera_id', usuario.get('catCarreraAspirante').value);
        if (id_usuario == null) {
            return this._httpClient.post(this.url + 'general/usuario/crea.php', formData);
        }
        else {
            formData.append('id_usuario', id_usuario);
            formData.append('id_persona', id_persona);
            formData.append('id_rol_old', id_rol);
            formData.append('id_rol_new', usuario.get('catRoles').value);
            return this._httpClient.post(this.url + 'general/usuario/edita.php', formData);
        }
    };
    UsuariosService.prototype.editaUsuarioRol = function (usuario, id_persona, id_rol) {
        var formData = new FormData();
        formData.append('clave', usuario.get('clave').value);
        formData.append('plan_orden_id', usuario.get('plan_orden_id').value);
        formData.append('id_area', usuario.get('catArea').value);
        formData.append('tipo_consulta', usuario.get('tipoConsulta').value);
        formData.append('id_campus', usuario.get('campusUs').value);
        formData.append('persona_id', id_persona);
        formData.append('id_rol_old', id_rol);
        formData.append('tipo_consulta', usuario.get('tipoConsulta').value);
        formData.append('id_rol_new', usuario.get('catRoles').value);
        formData.append('area_id', usuario.get('catArea').value);
        return this._httpClient.post(this.url + 'general/usuario/editaRolesUsuario.php', formData);
    };
    UsuariosService.prototype.consultaCurp = function (curp, jwt) {
        var params = '?curp=' + curp;
        // params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/general/usuario/consulta_curp.php' + params);
    };
    UsuariosService.prototype.editaNombreUsuario = function (nombre_usuario, id_usuario) {
        var formData = new FormData();
        formData.append('nombre_usuario', nombre_usuario);
        formData.append('id_usuario', id_usuario);
        return this._httpClient.post(this.url + 'general/usuario/editaUsuario.php', formData);
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/usuario-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/usuario/usuario-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UsuarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRoutingModule", function() { return UsuarioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.component */ "./src/app/administracion/usuario/usuario.component.ts");
/* harmony import */ var _usuario_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario/consulta/consulta.component */ "./src/app/administracion/usuario/consulta/consulta.component.ts");
/* harmony import */ var _usuario_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuario/nuevo/nuevo.component */ "./src/app/administracion/usuario/nuevo/nuevo.component.ts");
/* harmony import */ var _edita_edita_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edita/edita.component */ "./src/app/administracion/usuario/edita/edita.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/administracion/usuario/roles/roles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _usuario_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _usuario_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevo', component: _usuario_nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__["NuevoComponent"] },
            { path: 'editar/:id', component: _edita_edita_component__WEBPACK_IMPORTED_MODULE_5__["EditaComponent"] },
            { path: 'roles/:u/:p', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"] },
        ]
    }
];
var UsuarioRoutingModule = /** @class */ (function () {
    function UsuarioRoutingModule() {
    }
    UsuarioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsuarioRoutingModule);
    return UsuarioRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/usuario.component.html":
/*!***************************************************************!*\
  !*** ./src/app/administracion/usuario/usuario.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/usuario/usuario.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/administracion/usuario/usuario.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vdXN1YXJpby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/usuario/usuario.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/administracion/usuario/usuario.component.ts ***!
  \*************************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
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





var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Usuario";
        this._usuarioService.pushBreadcum(this.title, '/admin/usuario', 1);
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent.prototype.onActivate = function (e) {
        this.breadcum = this._usuarioService.getBreadcum();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UsuarioComponent.prototype, "persona", void 0);
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/administracion/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.scss */ "./src/app/administracion/usuario/usuario.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/administracion/usuario/usuario.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/administracion/usuario/usuario.module.ts ***!
  \**********************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/usuario/consulta/consulta.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/usuario/nuevo/nuevo.component.ts");
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario-routing.module */ "./src/app/administracion/usuario/usuario-routing.module.ts");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario.component */ "./src/app/administracion/usuario/usuario.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_components_persona_persona_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/persona/persona.module */ "./src/app/components/persona/persona.module.ts");
/* harmony import */ var _edita_edita_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edita/edita.component */ "./src/app/administracion/usuario/edita/edita.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/administracion/usuario/roles/roles.component.ts");
/* harmony import */ var src_app_components_password_password_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/password/password.module */ "./src/app/components/password/password.module.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var src_app_components_edita_rol_usuario_edita_rol_usuario_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/edita-rol-usuario/edita-rol-usuario.module */ "./src/app/components/edita-rol-usuario/edita-rol-usuario.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"], _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"], _edita_edita_component__WEBPACK_IMPORTED_MODULE_10__["EditaComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_11__["RolesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                _usuario_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsuarioRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                src_app_components_persona_persona_module__WEBPACK_IMPORTED_MODULE_9__["PersonaModule"],
                src_app_components_password_password_module__WEBPACK_IMPORTED_MODULE_12__["PasswordModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_13__["ConsultaAsignaturaModule"],
                src_app_components_edita_rol_usuario_edita_rol_usuario_module__WEBPACK_IMPORTED_MODULE_14__["EditaRolUsuarioModule"]
            ]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());



/***/ }),

/***/ "./src/app/components/edita-rol-usuario/edita-rol-usuario.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/edita-rol-usuario/edita-rol-usuario.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form *ngIf=\"usuarioForm\" [formGroup]=\"usuarioForm\" (ngSubmit)=\"enviarInformacion()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label class=\"control-label\">Rol</label>\r\n                    <select formControlName=\"catRoles\" class=\"form-control\"\r\n                        (change)=\"cambiaValidacion(f.catRoles.value)\">\r\n                        <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n                        <option [value]=\"rol.rol_id\" *ngFor=\"let rol of roles\">{{rol.rol}}</option>\r\n                    </select>\r\n                    <span class=\"invalidText\" *ngIf=\"f.catRoles.invalid && f.catRoles.touched\">\r\n                        {{'fmErrSelect' | translate}}\r\n                    </span>\r\n                </div>\r\n                <div [hidden]=\"f.catRoles.value != 3\">\r\n                    <label><input type=\"checkbox\" formControlName=\"muestraClave\"> ¿Deseas agregar la clave manualmente?</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div [hidden]=\"f.catRoles.valid && f.catRoles.value == 1  || !f.muestraClave.value\" class=\"col-md-12\">\r\n                <label *ngIf=\"f.catRoles.value == 2\" class=\"control-label\">{{'matrícula' | translate}}</label>\r\n                <label *ngIf=\"f.catRoles.value != 2\" class=\"control-label\">{{'clave' | translate}}</label>\r\n                <input formControlName=\"clave\" class=\"form-control\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" [hidden]=\"f.catRoles.value != 1\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">{{'TypeRol' | translate}}</label>\r\n                    <select formControlName=\"catArea\" class=\"form-control\">\r\n                        <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n                        <option [value]=\"area.area_id\" *ngFor=\"let area of areas\">{{area.area_nombre}}</option>\r\n                    </select>\r\n                    <span class=\"invalidText\" *ngIf=\"f.catArea.invalid && f.catArea.touched\">\r\n                        {{'fmErrSelect' | translate}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Tipo de consulta</label>\r\n                    <select formControlName=\"tipoConsulta\" class=\"form-control\">\r\n                        <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n                        <option [value]=\"1\">Consulta</option>\r\n                        <option [value]=\"2\">Consulta y edición</option>\r\n                    </select>\r\n                    <span class=\"invalidText\" *ngIf=\"f.tipoConsulta.invalid && f.tipoConsulta.touched\">\r\n                        {{'fmErrSelect' | translate}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"f.catRoles.value == 2\">\r\n            <!--app-consulta-asignatura [tipo]=\"'small'\" [parentForm]=\"usuarioForm\" [nivel]=\"3\"></app-consulta-asignatura-->\r\n            <label>Matrícula</label>\r\n            <input formControlName=\"clave\" class=\"form-control\" placeholder=\"{{'matricula' | translate}}\">\r\n        </div>\r\n        <!--div class=\"row\" *ngIf=\"f.catRoles.value == 2\">\r\n            <div class=\"col-12\">\r\n                <label><input type=\"checkbox\" formControlName=\"campusUs\">¿Deseas agregar a campus?</label>\r\n            </div>\r\n            <div class=\"col-12\" [hidden]=\"!f.campusUs.value\" rel=\"1\">\r\n                <label class=\"control-label\" for=\"\">Campus</label>\r\n                <select formControlName=\"campus\" class=\"form-control\">\r\n                    <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n                    <option [value]=\"_campus.campus_id\" *ngFor=\"let _campus of campus\">{{_campus.campus}}</option>\r\n                </select>\r\n                <span class=\"invalidText\" *ngIf=\"f.campus.invalid && f.campus.touched\">\r\n                    {{'fmErrSelect' | translate}}\r\n                </span>\r\n            </div>\r\n        </div--><hr>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"buttonDisabled || loading\" type=\"submit\"\r\n                    class=\"btn btn-success pull-right\"><i *ngIf=\"loading\" class=\"fa fa-spin fa-spinner\"></i>\r\n                    {{'fmSave' | translate}}</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n<!-- <div *ngIf=\"registroExitoso\" class=\"col col-xl-12 col-lg-12\">\r\n    <div class=\"alert alert-success text-center\">\r\n        <h1><i class=\"fa fa-check\"></i></h1>\r\n        <h3>Registro exitoso</h3>\r\n        <p>Se ha creado el usuario exitosamente, estas son las credenciales</p>\r\n        <h5>Usuario: {{usuario}}</h5>\r\n        <h5>Contraseña: {{password}}</h5><br>\r\n        <button class=\"btn btn-success\" (click)=\"redireccion()\">Continuar</button>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/edita-rol-usuario/edita-rol-usuario.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/edita-rol-usuario/edita-rol-usuario.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0YS1yb2wtdXN1YXJpby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRhLXJvbC11c3VhcmlvL2VkaXRhLXJvbC11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/edita-rol-usuario/edita-rol-usuario.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edita-rol-usuario/edita-rol-usuario.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditaRolUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaRolUsuarioComponent", function() { return EditaRolUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_administracion_usuario_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/usuario/services/usuarios.service */ "./src/app/administracion/usuario/services/usuarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditaRolUsuarioComponent = /** @class */ (function () {
    function EditaRolUsuarioComponent(formBuilder, _catalogoService, _usuariosService, router) {
        this.formBuilder = formBuilder;
        this._catalogoService = _catalogoService;
        this._usuariosService = _usuariosService;
        this.router = router;
        this.correo = 0; //prueba
    }
    Object.defineProperty(EditaRolUsuarioComponent.prototype, "f", {
        get: function () { return this.usuarioForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditaRolUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.consultaRol();
        this.usuarioForm = this.formBuilder.group({
            usuario: [''],
            passUsuario: [''],
            clave: [''],
            muestraClave: [false],
            campusUs: [false],
            catRoles: [{ "value": this.selectedRol ? this.roles.find(function (r) { return r.rol == _this.selectedRol; }).rol_id : '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            catArea: [''],
            tipoConsulta: [''],
            campus: [''],
            plan_orden_id: [''],
        });
        this.consultaArea();
        this.mostrarCampus();
    };
    EditaRolUsuarioComponent.prototype.consultaArea = function () {
        var _this = this;
        this._catalogoService.consultaArea().subscribe(function (response) {
            if (response && response['status']) {
                _this.areas = response['areas'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditaRolUsuarioComponent.prototype.cambiaValidacion = function (rol) {
        if (rol == 1) {
            this.usuarioForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.clave.updateValueAndValidity();
            this.usuarioForm.controls.catArea.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.catArea.updateValueAndValidity();
            this.usuarioForm.controls.tipoConsulta.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.usuarioForm.controls.tipoConsulta.updateValueAndValidity();
        }
        else if (rol == 3) {
            this.usuarioForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.clave.updateValueAndValidity();
        }
        else {
            this.usuarioForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.usuarioForm.controls.clave.updateValueAndValidity();
        }
    };
    EditaRolUsuarioComponent.prototype.consultaRol = function () {
        var _this = this;
        this._catalogoService.consultaRol('').subscribe(function (response) {
            if (response && response['status']) {
                if (_this.idRol) {
                    _this.usuarioForm.get('catRoles').setValue(_this.idRol);
                    _this.consultaUserRol();
                }
                if (_this.selectedRol)
                    _this.roles = [response['rol'].find(function (r) { return r.rol == _this.selectedRol; })];
                else
                    _this.roles = response['rol'];
            }
            // this.setForm();
        }, function (error) {
            console.log(error);
        });
    };
    EditaRolUsuarioComponent.prototype.consultaUserRol = function () {
        var _this = this;
        var user;
        this._usuariosService.consultaUsuariosRol(this.idRol, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                user = response['usuario'][0];
                if (_this.idRol == 1) {
                    _this.usuarioForm.get('catArea').setValue(user.area_id);
                    if (user.vista == 1 && user.edicion == 0) {
                        _this.usuarioForm.get('tipoConsulta').setValue(1);
                    }
                    else {
                        _this.usuarioForm.get('tipoConsulta').setValue(2);
                    }
                }
                else if (_this.idRol == 2) {
                    _this.usuarioForm.get('clave').setValue(user.clave_alumno);
                    if (user.campus_id && _this.campus) {
                        _this.usuarioForm.get('campusUs').setValue(true);
                        _this.usuarioForm.get('campus').setValue(user.campus_id);
                    }
                }
                else if (_this.idRol == 3) {
                    _this.usuarioForm.get('muestraClave').setValue(true);
                    _this.usuarioForm.get('clave').setValue(user.clave_profesor);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditaRolUsuarioComponent.prototype.redireccion = function () {
    };
    EditaRolUsuarioComponent.prototype.enviaCorreo = function () {
        if (this.correo == 0) {
            this.correo = 1;
        }
        else if (this.correo == 1) {
            this.correo = 0;
        }
    };
    EditaRolUsuarioComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.usuarioForm.invalid) {
            Object.keys(this.usuarioForm.controls).forEach(function (controlKey) {
                _this.usuarioForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this.loading = true;
        this._usuariosService.editaUsuarioRol(this.usuarioForm, this.idPersona, this.idRol).subscribe(function (response) {
            // console.log(response)
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    EditaRolUsuarioComponent.prototype.mostrarCampus = function () {
        var _this = this;
        this._catalogoService.consultaCampus('').subscribe(function (response) {
            if (response && response['status']) {
                _this.campus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditaRolUsuarioComponent.prototype, "idRol", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditaRolUsuarioComponent.prototype, "idUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditaRolUsuarioComponent.prototype, "idPersona", void 0);
    EditaRolUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edita-rol-usuario',
            template: __webpack_require__(/*! ./edita-rol-usuario.component.html */ "./src/app/components/edita-rol-usuario/edita-rol-usuario.component.html"),
            styles: [__webpack_require__(/*! ./edita-rol-usuario.component.scss */ "./src/app/components/edita-rol-usuario/edita-rol-usuario.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            src_app_administracion_usuario_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditaRolUsuarioComponent);
    return EditaRolUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/edita-rol-usuario/edita-rol-usuario.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/edita-rol-usuario/edita-rol-usuario.module.ts ***!
  \**************************************************************************/
/*! exports provided: EditaRolUsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaRolUsuarioModule", function() { return EditaRolUsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edita_rol_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edita-rol-usuario.component */ "./src/app/components/edita-rol-usuario/edita-rol-usuario.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditaRolUsuarioModule = /** @class */ (function () {
    function EditaRolUsuarioModule() {
    }
    EditaRolUsuarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_edita_rol_usuario_component__WEBPACK_IMPORTED_MODULE_2__["EditaRolUsuarioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__["LanguageTranslationModule"],
                _consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__["ConsultaAsignaturaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            exports: [
                _edita_rol_usuario_component__WEBPACK_IMPORTED_MODULE_2__["EditaRolUsuarioComponent"]
            ]
        })
    ], EditaRolUsuarioModule);
    return EditaRolUsuarioModule;
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

/***/ "./src/app/services/rol.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rol.service.ts ***!
  \*****************************************/
/*! exports provided: RolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolService", function() { return RolService; });
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



var RolService = /** @class */ (function () {
    function RolService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    RolService.prototype.consultaRol = function (jwt, id_persona) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt).set('id_persona', id_persona);
        return this._httpClient.get(this.url + 'general/usuarioRol/consulta.php', { params: params });
    };
    RolService.prototype.setDatos = function (jwt, id_persona, id_usuario, id_rol, clave_usuario, tipo) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('id_persona', id_persona);
        formData.append('id_usuario', id_usuario);
        formData.append('id_rol', id_rol);
        formData.append('clave_usuario', clave_usuario);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'general/usuarioRol/elimina.php', formData);
        }
        else if (tipo == 1) {
            return this._httpClient.post(this.url + 'general/usuarioRol/crea.php', formData);
        }
    };
    RolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RolService);
    return RolService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-usuario-usuario-module.js.map