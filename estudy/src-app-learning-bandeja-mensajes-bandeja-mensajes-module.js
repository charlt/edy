(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-learning-bandeja-mensajes-bandeja-mensajes-module"],{

/***/ "./src/app/docente/mensajeria/services/mensajeria.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/docente/mensajeria/services/mensajeria.service.ts ***!
  \*******************************************************************/
/*! exports provided: MensajeriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeriaService", function() { return MensajeriaService; });
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




var MensajeriaService = /** @class */ (function () {
    function MensajeriaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    MensajeriaService.prototype.cambiaVisto = function (rol, id_materia, visto, cambios) {
        var params = '?rol_id=' + rol;
        params += '&id_materia=' + id_materia;
        params += '&visto=' + visto; //1 visto 0 no visto
        params += '&numero_cambios=' + cambios;
        return this._httpClient.get(this.url + 'learning/mensaje_materia/MarcaVistoMensaje.php' + params);
    };
    MensajeriaService.prototype.consulta = function (materia_id, jwt, inicio, final) {
        var params = '?id_materia=' + materia_id;
        params += '&limit_inicio=' + inicio;
        params += '&limit_final=' + final;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/mensaje_materia/consulta.php' + params);
    };
    MensajeriaService.prototype.consultaBandejaMensajes = function (tipo) {
        var params = '?nuevos=' + tipo;
        return this._httpClient.get(this.url + '/controlEscolar/mensajeria/mensajesDocente.php' + params);
    };
    MensajeriaService.prototype.consultaBandejaMensajesAlumno = function (tipo) {
        var params = '?nuevos=' + tipo;
        return this._httpClient.get(this.url + '/controlEscolar/mensajeria/mensajesAlumno.php' + params);
    };
    MensajeriaService.prototype.enviar = function (persona_id, materia_id, texto, origen, jwt, mensaje_id) {
        if (mensaje_id === void 0) { mensaje_id = null; }
        var formData = new FormData();
        formData.append('persona_id', persona_id);
        formData.append('materia_id', materia_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        formData.append('jwt', jwt);
        if (!mensaje_id) {
            return this._httpClient.post(this.url + 'learning/mensaje_materia/crea.php', formData);
        }
    };
    MensajeriaService.prototype.getTotalMensajes = function (jwt, materia_id) {
        var params = '?id_materia=' + materia_id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/totalMensajeriaMateria.php' + params);
    };
    MensajeriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MensajeriaService);
    return MensajeriaService;
}());



/***/ }),

/***/ "./src/app/learning/bandeja-mensajes/bandeja-mensajes-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/learning/bandeja-mensajes/bandeja-mensajes-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: BandejaMensajesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaMensajesRoutingModule", function() { return BandejaMensajesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-mensajes.component */ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_2__["BandejaMensajesComponent"]
    }
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

/***/ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 0 ? 'active':''\" (click)=\"consultaMensajes(0)\">Todos</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 1 ? 'active':''\" (click)=\"consultaMensajes(1)\">Nuevos</button>      \r\n    </div><br><br>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Asignatura</th>\r\n          <th>Docente</th>\r\n          <th>Fecha del último envio</th>\r\n          <th>Número de mensajes</th>\r\n          <th>Ir a la asignatura</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"mensajes\">\r\n        <tr *ngFor = \"let mensaje of mensajes\">\r\n          <td>{{mensaje.asignatura}}</td>\r\n          <td>{{mensaje.docente.nombre}} {{mensaje.docente.primer_apellido}} {{mensaje.docente.segundo_apellido}}</td>\r\n          <td class=\"text-center\">{{mensaje.ultimo_mensaje | date: \"dd/MM/yyyy\"}} {{mensaje.ultimo_mensaje |date:\"shortTime\" }}</td>\r\n          <td class=\"text-center\">{{mensaje.total_mensajes}}</td>\r\n          <td class=\"text-center\">\r\n            <button [disabled]=\"cargandoRedireccion\" type=\"button\" class=\"btn btn-primary\" (click)=\"seleccionaMateria(mensaje.materia_id);\">\r\n              <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"!mensajes\">\r\n        <tr >\r\n          <td colspan=\"20\" class=\"text-center p-3\">\r\n            <span>No se encontraron mensajes</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2JhbmRlamEtbWVuc2FqZXMvYmFuZGVqYS1tZW5zYWplcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.ts ***!
  \*************************************************************************/
/*! exports provided: BandejaMensajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaMensajesComponent", function() { return BandejaMensajesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_docente_mensajeria_services_mensajeria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/docente/mensajeria/services/mensajeria.service */ "./src/app/docente/mensajeria/services/mensajeria.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
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





var BandejaMensajesComponent = /** @class */ (function () {
    function BandejaMensajesComponent(_usuarioService, _mensajeService, _materiaService, _router) {
        this._usuarioService = _usuarioService;
        this._mensajeService = _mensajeService;
        this._materiaService = _materiaService;
        this._router = _router;
        this.ident = 0;
        this.title = 'Consulta mensajes';
    }
    BandejaMensajesComponent.prototype.ngOnInit = function () {
        this.consultaMensajes(0);
    };
    BandejaMensajesComponent.prototype.consultaMensajes = function (tipo) {
        var _this = this;
        this.ident = tipo;
        this._mensajeService.consultaBandejaMensajesAlumno(tipo).subscribe(function (response) {
            if (response && response['status']) {
                _this.mensajes = response['mensajes'];
                _this.mensajes.forEach(function (mensaje) {
                    var fecha = new Date(mensaje.ultimo_mensaje * 1000);
                    mensaje.ultimo_mensaje = fecha;
                });
                console.log(_this.mensajes);
            }
            else {
                _this.mensajes = null;
            }
        });
    };
    BandejaMensajesComponent.prototype.seleccionaMateria = function (id_materia) {
        var _this = this;
        this._materiaService.seleccionaMateria(id_materia, '').then(function (data) {
            _this._router.navigate(['/materia/mensajes/' + id_materia]);
        });
    };
    BandejaMensajesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bandeja-mensajes',
            template: __webpack_require__(/*! ./bandeja-mensajes.component.html */ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.html"),
            styles: [__webpack_require__(/*! ./bandeja-mensajes.component.scss */ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_docente_mensajeria_services_mensajeria_service__WEBPACK_IMPORTED_MODULE_1__["MensajeriaService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__["MateriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BandejaMensajesComponent);
    return BandejaMensajesComponent;
}());



/***/ }),

/***/ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/learning/bandeja-mensajes/bandeja-mensajes.module.ts ***!
  \**********************************************************************/
/*! exports provided: BandejaMensajesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaMensajesModule", function() { return BandejaMensajesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bandeja_mensajes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-mensajes-routing.module */ "./src/app/learning/bandeja-mensajes/bandeja-mensajes-routing.module.ts");
/* harmony import */ var _bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bandeja-mensajes.component */ "./src/app/learning/bandeja-mensajes/bandeja-mensajes.component.ts");
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
                _bandeja_mensajes_routing_module__WEBPACK_IMPORTED_MODULE_2__["BandejaMensajesRoutingModule"]
            ],
            exports: [_bandeja_mensajes_component__WEBPACK_IMPORTED_MODULE_3__["BandejaMensajesComponent"]]
        })
    ], BandejaMensajesModule);
    return BandejaMensajesModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-learning-bandeja-mensajes-bandeja-mensajes-module.js.map