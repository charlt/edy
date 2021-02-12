(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-bandeja-mensajes-bandeja-mensajes-module"],{

/***/ "./src/app/docente/bandeja-mensajes/bandeja-mensajes-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/docente/bandeja-mensajes/bandeja-mensajes-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BandejaMensajesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaMensajesRoutingModule", function() { return BandejaMensajesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-mensajes.component */ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_2__["BandejaMensajesComponent"] },
];
var BandejaMensajesRoutingModule = /** @class */ (function () {
    function BandejaMensajesRoutingModule() {
    }
    BandejaMensajesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BandejaMensajesRoutingModule);
    return BandejaMensajesRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Consulta de mensajes</h4>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 0 ? 'active':''\" (click)=\"consultaMensajes(0)\">Todos</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 1 ? 'active':''\" (click)=\"consultaMensajes(1)\">Nuevos</button>      \r\n    </div><br><br>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Asignatura</th>\r\n          <th>Alumno</th>\r\n          <th>Fecha del último envio</th>\r\n          <th>Número de mensajes</th>\r\n          <th>Ver conversación</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"mensajes\">\r\n        <tr *ngFor = \"let mensaje of mensajes\">\r\n          <td>{{mensaje.nombre_asignatura}}</td>\r\n          <td>{{mensaje.alumno.nombre}} {{mensaje.alumno.primer_apellido}} {{mensaje.alumno.segundo_apellido}}</td>\r\n          <td class=\"text-center\">{{mensaje.ultimo_mensaje | date: \"dd/MM/yyyy\"}} {{mensaje.ultimo_mensaje |date:\"shortTime\" }}</td>\r\n          <td class=\"text-center\">{{mensaje.numero_mensajes}}</td>\r\n          <td class=\"text-center\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(modalMensajeria, mensaje.materia_id);\"><i class=\"fa fa-envelope-open\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody>\r\n        <tr *ngIf=\"!mensajes\">\r\n          <td colspan=\"20\" class=\"text-center p-3\">\r\n            <span>No se encontraron mensajes</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<ng-template #modalMensajeria let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n          <div class=\"col\" >\r\n              <app-mensajeria [activo]=\"0\" [idMateria]=\"idMateria\"></app-mensajeria>\r\n          </div>\r\n        </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvYmFuZGVqYS1tZW5zYWplcy9iYW5kZWphLW1lbnNhamVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.ts ***!
  \************************************************************************/
/*! exports provided: BandejaMensajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaMensajesComponent", function() { return BandejaMensajesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _mensajeria_services_mensajeria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mensajeria/services/mensajeria.service */ "./src/app/docente/mensajeria/services/mensajeria.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BandejaMensajesComponent = /** @class */ (function () {
    function BandejaMensajesComponent(router, route, _usuarioService, modalService, _mensajeriaService) {
        this.router = router;
        this.route = route;
        this._usuarioService = _usuarioService;
        this.modalService = modalService;
        this._mensajeriaService = _mensajeriaService;
        this.title = "Consulta de mensajes";
        this.title = this._usuarioService.pushBreadcum(this.title, "", 2);
        this.id_asignatura_grupo = this.route.snapshot.paramMap.get('id');
    }
    BandejaMensajesComponent.prototype.ngOnInit = function () {
        this.consultaMensajes(0);
    };
    BandejaMensajesComponent.prototype.openModal = function (content, materia_id) {
        this.idMateria = materia_id;
        this.modalService.open(content, { windowClass: 'modal-xl' });
    };
    BandejaMensajesComponent.prototype.consultaMensajes = function (tipo) {
        var _this = this;
        this.ident = tipo;
        this._mensajeriaService.consultaBandejaMensajes(tipo).subscribe(function (response) {
            if (response && response['status']) {
                _this.mensajes = response['mensajes'];
                _this.mensajes.forEach(function (mensajes) {
                    var fecha = new Date(mensajes.ultimo_mensaje * 1000);
                    mensajes.ultimo_mensaje = fecha;
                });
                console.log(_this.mensajes);
            }
            else {
                _this.mensajes = null;
            }
        });
    };
    BandejaMensajesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bandeja-mensajes',
            template: __webpack_require__(/*! ./bandeja-mensajes.component.html */ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.html"),
            styles: [__webpack_require__(/*! ./bandeja-mensajes.component.scss */ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _mensajeria_services_mensajeria_service__WEBPACK_IMPORTED_MODULE_2__["MensajeriaService"]])
    ], BandejaMensajesComponent);
    return BandejaMensajesComponent;
}());



/***/ }),

/***/ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/docente/bandeja-mensajes/bandeja-mensajes.module.ts ***!
  \*********************************************************************/
/*! exports provided: BandejaMensajesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaMensajesModule", function() { return BandejaMensajesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bandeja_mensajes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-mensajes-routing.module */ "./src/app/docente/bandeja-mensajes/bandeja-mensajes-routing.module.ts");
/* harmony import */ var _bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bandeja-mensajes.component */ "./src/app/docente/bandeja-mensajes/bandeja-mensajes.component.ts");
/* harmony import */ var _mensajeria_mensajeria_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mensajeria/mensajeria.module */ "./src/app/docente/mensajeria/mensajeria.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BandejaMensajesModule = /** @class */ (function () {
    function BandejaMensajesModule() {
    }
    BandejaMensajesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_3__["BandejaMensajesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bandeja_mensajes_routing_module__WEBPACK_IMPORTED_MODULE_2__["BandejaMensajesRoutingModule"],
                _mensajeria_mensajeria_module__WEBPACK_IMPORTED_MODULE_4__["MensajeriaModule"]
            ]
        })
    ], BandejaMensajesModule);
    return BandejaMensajesModule;
}());



/***/ })

}]);
//# sourceMappingURL=docente-bandeja-mensajes-bandeja-mensajes-module.js.map