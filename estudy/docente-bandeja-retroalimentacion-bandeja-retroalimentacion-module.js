(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-bandeja-retroalimentacion-bandeja-retroalimentacion-module"],{

/***/ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BandejaRetroalimentacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaRetroalimentacionRoutingModule", function() { return BandejaRetroalimentacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bandeja_retroalimentacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-retroalimentacion.component */ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _bandeja_retroalimentacion_component__WEBPACK_IMPORTED_MODULE_2__["BandejaRetroalimentacionComponent"] },
];
var BandejaRetroalimentacionRoutingModule = /** @class */ (function () {
    function BandejaRetroalimentacionRoutingModule() {
    }
    BandejaRetroalimentacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BandejaRetroalimentacionRoutingModule);
    return BandejaRetroalimentacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Consulta de retroalimentaciones</h4>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 0 ? 'active':''\" (click)=\"consultaRetros(0)\">Todos</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 1 ? 'active':''\" (click)=\"consultaRetros(1)\">Nuevos</button>      \r\n    </div><br><br>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Actividad</th>\r\n          <th>Alumno</th>\r\n          <th>Fecha del último envio</th>\r\n          <th>Número de mensajes</th>\r\n          <th>Ir a la actividad</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"retroalimentaciones\">\r\n        <tr *ngFor = \"let retro of retroalimentaciones\">\r\n          <td>{{retro.actividad}}</td>\r\n          <td>{{retro.alumno.nombre}} {{retro.alumno.primer_apellido}} {{retro.alumno.segundo_apellido}}</td>\r\n          <td class=\"text-center\">{{retro.ultimo_mensaje | date: \"dd/MM/yyyy\"}} {{retro.ultimo_mensaje |date:\"shortTime\" }}</td>\r\n          <td class=\"text-center\">{{retro.total_mensajes}}</td>\r\n          <td class=\"text-center\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"nuevoLink(retro.actividad_id, retro.materia_id);\"><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody>\r\n        <tr *ngIf=\"!retroalimentaciones\">\r\n          <td colspan=\"20\" class=\"text-center p-3\">\r\n            <span>No se encontraron retroalimentaciones</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!-- [routerLink]=\"['../editar/'+ciclo.ciclo_id]\" -->"

/***/ }),

/***/ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvYmFuZGVqYS1yZXRyb2FsaW1lbnRhY2lvbi9iYW5kZWphLXJldHJvYWxpbWVudGFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BandejaRetroalimentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaRetroalimentacionComponent", function() { return BandejaRetroalimentacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../retroalimentacion/services/retroalimentacion.service */ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BandejaRetroalimentacionComponent = /** @class */ (function () {
    function BandejaRetroalimentacionComponent(router, route, _usuarioService, _retroalimentacionService) {
        this.router = router;
        this.route = route;
        this._usuarioService = _usuarioService;
        this._retroalimentacionService = _retroalimentacionService;
        this.title = "Consulta retroalimentaciones";
        this.title = this._usuarioService.pushBreadcum(this.title, "", 2);
        this.id_asignatura_grupo = this.route.snapshot.paramMap.get('id');
    }
    BandejaRetroalimentacionComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.consultaRetros(0);
    };
    BandejaRetroalimentacionComponent.prototype.nuevoLink = function (actividad_id, materia_id) {
        this.router.navigate(['docente/actividad/' + actividad_id + '/' + materia_id]);
        localStorage.setItem('identModal', '1');
    };
    BandejaRetroalimentacionComponent.prototype.consultaRetros = function (tipo) {
        var _this = this;
        this.ident = tipo;
        this._retroalimentacionService.consultaRetrosDocente(this.jwt, tipo, this.id_asignatura_grupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.retroalimentaciones = response['mensajes'];
                _this.retroalimentaciones.forEach(function (retros) {
                    var fecha = new Date(retros.ultimo_mensaje * 1000);
                    retros.ultimo_mensaje = fecha;
                });
            }
            else {
                _this.retroalimentaciones = null;
            }
        });
    };
    BandejaRetroalimentacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bandeja-retroalimentacion',
            template: __webpack_require__(/*! ./bandeja-retroalimentacion.component.html */ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.html"),
            styles: [__webpack_require__(/*! ./bandeja-retroalimentacion.component.scss */ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_2__["RetroalimentacionService"]])
    ], BandejaRetroalimentacionComponent);
    return BandejaRetroalimentacionComponent;
}());



/***/ }),

/***/ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BandejaRetroalimentacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaRetroalimentacionModule", function() { return BandejaRetroalimentacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bandeja_retroalimentacion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-retroalimentacion-routing.module */ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion-routing.module.ts");
/* harmony import */ var _bandeja_retroalimentacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bandeja-retroalimentacion.component */ "./src/app/docente/bandeja-retroalimentacion/bandeja-retroalimentacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BandejaRetroalimentacionModule = /** @class */ (function () {
    function BandejaRetroalimentacionModule() {
    }
    BandejaRetroalimentacionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_bandeja_retroalimentacion_component__WEBPACK_IMPORTED_MODULE_3__["BandejaRetroalimentacionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bandeja_retroalimentacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BandejaRetroalimentacionRoutingModule"]
            ]
        })
    ], BandejaRetroalimentacionModule);
    return BandejaRetroalimentacionModule;
}());



/***/ }),

/***/ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts ***!
  \*********************************************************************************/
/*! exports provided: RetroalimentacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroalimentacionService", function() { return RetroalimentacionService; });
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




var RetroalimentacionService = /** @class */ (function () {
    function RetroalimentacionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    RetroalimentacionService.prototype.consultaRetrosAlumno = function (tipo, id_materia, id_asignatura_grupo) {
        var params = '?nuevos=' + tipo;
        params += '&materia_id=' + id_materia;
        return this._httpClient.get(this.url + '/controlEscolar/retroalimentacion/retroalimentacionesAlumno.php' + params);
    };
    RetroalimentacionService.prototype.consultaRetrosDocente = function (jwt, tipo, id_asignatura_grupo) {
        var params = '?jwt=' + jwt;
        params += '&nuevos=' + tipo;
        params += '&id_asignatura_grupo=' + id_asignatura_grupo;
        return this._httpClient.get(this.url + '/controlEscolar/retroalimentacion/retroalimentacionesDocente.php' + params);
    };
    RetroalimentacionService.prototype.cambiaVisto = function (rol, id_materia, id_actividad, visto, cambios) {
        var params = '?rol_id=' + rol;
        params += '&id_materia=' + id_materia;
        params += '&visto=' + visto; //1 visto 0 no visto
        params += '&id_actividad=' + id_actividad;
        params += '&numero_cambios=' + cambios;
        return this._httpClient.get(this.url + '/learning/retroalimentacion/marcaVistoRetro.php' + params);
    };
    RetroalimentacionService.prototype.notificaciones = function (id_materia, id_actividad, jwt) {
        var params = '?id_materia=' + id_materia;
        params += '&id_actividad=' + id_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/notificaciones/retroalimentacionActividad.php' + params);
    };
    RetroalimentacionService.prototype.consulta = function (id_materia, id_actividad) {
        var params = '?id_materia=' + id_materia;
        params += '&id_actividad=' + id_actividad;
        return this._httpClient.get(this.url + '/learning/retroalimentacion/consulta.php' + params);
    };
    RetroalimentacionService.prototype.enviar = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt, retroalimentacion_id, contForm, id_materia, id_actividad) {
        if (retroalimentacion_id === void 0) { retroalimentacion_id = null; }
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('origen', origen);
        // formData.append('jwt', jwt);
        formData.append('id_materia', id_materia);
        formData.append('id_actividad', id_actividad);
        if (texto)
            formData.append('texto', texto);
        else
            formData.append('texto', '');
        if (contForm.get('contenido').value)
            formData.append('archivo', contForm.get('contenido').value);
        if (!retroalimentacion_id) {
            return this._httpClient.post(this.url + 'learning/retroalimentacion/crea.php', formData);
        }
    };
    RetroalimentacionService.prototype.correccionActividad = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        return this._httpClient.post(this.url + 'learning/fechaActividad/corregirActividad.php', formData);
    };
    RetroalimentacionService.prototype.invalidacionActividad = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        return this._httpClient.post(this.url + 'learning/fechaActividad/invalidaActividad.php', formData);
    };
    RetroalimentacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RetroalimentacionService);
    return RetroalimentacionService;
}());



/***/ })

}]);
//# sourceMappingURL=docente-bandeja-retroalimentacion-bandeja-retroalimentacion-module.js.map