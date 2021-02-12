(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-learning-bandeja-retroalimentaciones-bandeja-retroalimentaciones-module"],{

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



/***/ }),

/***/ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: BandejaRetroalimentacionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaRetroalimentacionesRoutingModule", function() { return BandejaRetroalimentacionesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bandeja_retroalimentaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-retroalimentaciones.component */ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bandeja_retroalimentaciones_component__WEBPACK_IMPORTED_MODULE_2__["BandejaRetroalimentacionesComponent"]
    }
];
var BandejaRetroalimentacionesRoutingModule = /** @class */ (function () {
    function BandejaRetroalimentacionesRoutingModule() {
    }
    BandejaRetroalimentacionesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BandejaRetroalimentacionesRoutingModule);
    return BandejaRetroalimentacionesRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 0 ? 'active':''\" (click)=\"consultaRetros(0)\">Todos</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"ident == 1 ? 'active':''\" (click)=\"consultaRetros(1)\">Nuevos</button>      \r\n    </div><br><br>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Asignatura</th>\r\n          <th>Actividad</th>\r\n          <th>Docente</th>\r\n          <th>Fecha del último envio</th>\r\n          <th>Número de mensajes</th>\r\n          <th>Ir a la actividad</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"retroalimentaciones\">\r\n        <tr *ngFor = \"let retro of retroalimentaciones\">\r\n          <td>{{retro.asignatura}}</td>\r\n          <td>{{retro.actividad}}</td>\r\n          <td>{{retro.docente.nombre}} {{retro.docente.primer_apellido}} {{retro.docente.segundo_apellido}}</td>\r\n          <td class=\"text-center\">{{retro.ultimo_mensaje | date: \"dd/MM/yyyy\"}} {{retro.ultimo_mensaje |date:\"shortTime\" }}</td>\r\n          <td class=\"text-center\">{{retro.total_mensajes}}</td>\r\n          <td class=\"text-center\">\r\n            <button [disabled]=\"cargandoRedireccion\" type=\"button\" class=\"btn btn-primary\" (click)=\"nuevoLink(retro.actividad_id, retro.materia_id);\">\r\n              <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"!retroalimentaciones\">\r\n        <tr >\r\n          <td colspan=\"20\" class=\"text-center p-3\">\r\n            <span>No se encontraron retroalimentaciones</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2JhbmRlamEtcmV0cm9hbGltZW50YWNpb25lcy9iYW5kZWphLXJldHJvYWxpbWVudGFjaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BandejaRetroalimentacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaRetroalimentacionesComponent", function() { return BandejaRetroalimentacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_docente_retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/docente/retroalimentacion/services/retroalimentacion.service */ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts");
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





var BandejaRetroalimentacionesComponent = /** @class */ (function () {
    function BandejaRetroalimentacionesComponent(_usuarioService, _retroalimentacionService, _materiaService, router, route) {
        this._usuarioService = _usuarioService;
        this._retroalimentacionService = _retroalimentacionService;
        this._materiaService = _materiaService;
        this.router = router;
        this.route = route;
        this.cargandoRedireccion = false;
        this.title = 'Consulta retroalimentaciones';
        this._usuarioService.pushBreadcum(this.title, '', 1);
    }
    BandejaRetroalimentacionesComponent.prototype.ngOnInit = function () {
        this.id_materia = this.route.snapshot.params['id'];
        this.consultaRetros(0);
    };
    BandejaRetroalimentacionesComponent.prototype.nuevoLink = function (actividad_id, materia_id) {
        var _this = this;
        this.cargandoRedireccion = true;
        this._materiaService.seleccionaMateria(materia_id, this.jwt).then(function (data) {
            localStorage.setItem('identModal', '1');
            _this.router.navigate(['materia/actividad/' + actividad_id]);
        });
    };
    BandejaRetroalimentacionesComponent.prototype.consultaRetros = function (tipo) {
        var _this = this;
        this.ident = tipo;
        this._retroalimentacionService.consultaRetrosAlumno(tipo, this.id_materia, this.id_asignatura_grupo).subscribe(function (response) {
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
    BandejaRetroalimentacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bandeja-retroalimentaciones',
            template: __webpack_require__(/*! ./bandeja-retroalimentaciones.component.html */ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.html"),
            styles: [__webpack_require__(/*! ./bandeja-retroalimentaciones.component.scss */ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_docente_retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_1__["RetroalimentacionService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__["MateriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BandejaRetroalimentacionesComponent);
    return BandejaRetroalimentacionesComponent;
}());



/***/ }),

/***/ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BandejaRetroalimentacionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandejaRetroalimentacionesModule", function() { return BandejaRetroalimentacionesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bandeja_retroalimentaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bandeja-retroalimentaciones-routing.module */ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones-routing.module.ts");
/* harmony import */ var _bandeja_retroalimentaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bandeja-retroalimentaciones.component */ "./src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BandejaRetroalimentacionesModule = /** @class */ (function () {
    function BandejaRetroalimentacionesModule() {
    }
    BandejaRetroalimentacionesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_bandeja_retroalimentaciones_component__WEBPACK_IMPORTED_MODULE_3__["BandejaRetroalimentacionesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bandeja_retroalimentaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["BandejaRetroalimentacionesRoutingModule"]
            ],
            exports: [_bandeja_retroalimentaciones_component__WEBPACK_IMPORTED_MODULE_3__["BandejaRetroalimentacionesComponent"]]
        })
    ], BandejaRetroalimentacionesModule);
    return BandejaRetroalimentacionesModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-learning-bandeja-retroalimentaciones-bandeja-retroalimentaciones-module.js.map