(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videoconferencia-videoconferencia-module"],{

/***/ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/asistencia/asistencia.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead> \r\n          <tr>\r\n            <th>Clave</th>\r\n            <th>Nombre</th>\r\n            <th>Correo</th>\r\n            <th>Fecha de acceso</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let persona of personas\">\r\n          <tr>\r\n            <td>{{persona.clave_alumno}}</td>\r\n            <td>{{persona.primer_apellido}} {{persona.segundo_apellido}} {{persona.nombre}}</td>\r\n            <td>{{persona.email}}</td>\r\n            <td>{{persona.fecha_acceso | date: \"dd/MM/yyyy\"}} {{persona.fecha_acceso | date: \"shortTime\"}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/asistencia/asistencia.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3ZpZGVvY29uZmVyZW5jaWEvYXNpc3RlbmNpYS9hc2lzdGVuY2lhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/asistencia/asistencia.component.ts ***!
  \************************************************************************************/
/*! exports provided: AsistenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaComponent", function() { return AsistenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/docente/video-conferencia/services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsistenciaComponent = /** @class */ (function () {
    function AsistenciaComponent(_usuarioService, _videoconferenciaService, router, route) {
        this._usuarioService = _usuarioService;
        this._videoconferenciaService = _videoconferenciaService;
        this.router = router;
        this.route = route;
        this.id_videoconferencia = this.route.snapshot.paramMap.get('id');
        this.title = "Consulta de asistencia";
        this._usuarioService.pushBreadcum('Videoconferencias', '/admin/videoconferencia', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    AsistenciaComponent.prototype.ngOnInit = function () {
        this.consultaAsistencia();
    };
    AsistenciaComponent.prototype.consultaAsistencia = function () {
        var _this = this;
        this._videoconferenciaService.consultaAsist(this.id_videoconferencia).subscribe(function (response) {
            if (response && response['status']) {
                _this.personas = response['personas'];
                console.log(_this.personas);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asistencia',
            template: __webpack_require__(/*! ./asistencia.component.html */ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.html"),
            styles: [__webpack_require__(/*! ./asistencia.component.scss */ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_3__["VideoConferenciaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AsistenciaComponent);
    return AsistenciaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/videoconferencia/consulta/consulta.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/consulta/consulta.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipo == 1 ? 'active':''\" (click)=\"consultaVideoconf(1);\"\r\n        [disabled]=\"cargaConf\">Pasadas</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipo == 2 ? 'active':''\" (click)=\"consultaVideoconf(2);\"\r\n        [disabled]=\"cargaConf\">Encurso</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipo == 3 ? 'active':''\" (click)=\"consultaVideoconf(3);\"\r\n        [disabled]=\"cargaConf\">Pendientes</button>\r\n    </div>\r\n    <hr>\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" (keyup)=\"busquedaVideocnf($event.target.value)\" placeholder=\"{{'SearchInput' | translate}}\"\r\n        aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>Nombre</th>\r\n            <th>Descripcion</th>\r\n            <th>Fecha inicio</th>\r\n            <th>Fecha fin</th>\r\n            <th *ngIf=\"tipo != 3\">Asistencia</th>\r\n            <th *ngIf=\"tipo == 2\">Ir a conferencia</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let video of videoconferencias | filter:search;\">\r\n            <td>{{video.nombre}}</td>\r\n            <td>{{video.descripcion}}</td>\r\n            <td><span *ngIf=\"video.fecha_inicio\">{{video.fecha_inicio | date: \"dd/MM/yyyy\"}}\r\n                {{video.fecha_inicio | date: \"shortTime\"}}</span></td>\r\n            <td><span *ngIf=\"video.fecha_fin\">{{video.fecha_fin | date: \"dd/MM/yyyy\"}}\r\n                {{video.fecha_fin| date: \"shortTime\"}}</span></td>\r\n            <td *ngIf=\"tipo != 3\" class=\"text-center\"><button class=\"btn btn-primary\"\r\n                [routerLink]=\"['../asistencia/'+ video.videoconferencia_id]\"><i class=\"fa fa-list\"\r\n                  aria-hidden=\"true\"></i></button></td>\r\n            <td *ngIf=\"tipo == 2\" [ngClass]=\"video.estatus == 2 ? 'alert-warning': ''\" class=\"text-center\">\r\n              <button *ngIf=\"video.estatus == 1\" [disabled]=\"bloqueoBoton == true\" class=\"btn btn-success\"\r\n                (click)=\"consultaVideoConferencia(video)\"><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>\r\n              <span *ngIf=\"video.estatus == 2\"><i class=\"fa fa-check\"></i><br> Finalizada por el profesor</span>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"(videoconferencias | filter: search).length === 0 && !cargaConf\">\r\n            <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"cargaConf\">\r\n            <td colspan=\"12\" class=\"text-center\">\r\n              <i class=\"fa fa-spin fa-spinner\" aria-hidden=\"true\"></i>\r\n              <h5>Cargando información.</h5>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <ngb-pagination *ngIf=\"totalItems\" [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\"\r\n          [(page)]=\"page\" [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"consultaVideoconf(tipo)\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/videoconferencia/consulta/consulta.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/consulta/consulta.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3ZpZGVvY29uZmVyZW5jaWEvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/videoconferencia/consulta/consulta.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/consulta/consulta.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/docente/video-conferencia/services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
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




var ConsultaComponent = /** @class */ (function () {
    // previousPage: any;
    function ConsultaComponent(_usuarioService, _conferenciaService) {
        this._usuarioService = _usuarioService;
        this._conferenciaService = _conferenciaService;
        this.bloqueoBoton = false;
        this.previousPage = 1;
        this.itemsPerPage = 50;
        this.page = 1;
        this.title = "Consulta de videoconferencias";
        this._usuarioService.pushBreadcum('Videoconferencias', '/admin/videoconferencia', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.urlLeave = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAssets + '/estudy/';
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.consultaVideoconf(1);
    };
    ConsultaComponent.prototype.consultaVideoconf = function (tipo) {
        var _this = this;
        this.videoconferencias = [];
        if (tipo != this.tipo) {
            this.totalItems = 0;
            this.page = 1;
        }
        this.tipo = tipo;
        this.cargaConf = true;
        var max = 50;
        var min = ((this.page * 50) - 50);
        this._conferenciaService.consultaV(tipo, max, min).subscribe(function (response) {
            if (response && response['status']) {
                _this.videoconferencias = response['Videoconferencias'];
                _this.totalItems = response['total'][0]['total'];
                _this.videoconferencias.forEach(function (videoconferencia) {
                    videoconferencia.fecha_inicio = new Date(videoconferencia.fecha_inicio * 1000);
                    videoconferencia.fecha_fin = new Date(videoconferencia.fecha_fin * 1000);
                });
                _this.cargaConf = false;
            }
            else {
                _this.videoconferencias = [];
                _this.cargaConf = false;
                _this.totalItems = 0;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.busquedaVideocnf = function (busqueda) {
        var _this = this;
        if (busqueda) {
            this.videoconferencias = [];
            this.cargaConf = true;
            var max = 50;
            var min = ((this.page * 50) - 50);
            this._conferenciaService.busquedaVid(max, min, busqueda).subscribe(function (response) {
                if (response && response['status']) {
                    _this.videoconferencias = response['Videoconferencias'];
                    _this.totalItems = response['total'][0]['total'];
                    _this.videoconferencias.forEach(function (videoconferencia) {
                        videoconferencia.fecha_inicio = new Date(videoconferencia.fecha_inicio * 1000);
                        videoconferencia.fecha_fin = new Date(videoconferencia.fecha_fin * 1000);
                    });
                    _this.cargaConf = false;
                }
                else {
                    _this.videoconferencias = [];
                    _this.cargaConf = false;
                    _this.totalItems = 0;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.consultaVideoconf(this.tipo);
        }
    };
    ConsultaComponent.prototype.videoConferencia = function () {
        localStorage.setItem('docente', JSON.stringify(this.conferenciaSelected));
        localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
        localStorage.setItem('passwordZoom', JSON.stringify(this.passwordZoom));
        var newTab = window.open('', '_blank');
        newTab.location.href = 'assets/zoom/';
    };
    ConsultaComponent.prototype.consultaVideoConferencia = function (conferencia) {
        var _this = this;
        this.bloqueoBoton = true;
        this.conferenciaSelected = conferencia;
        if (this.conferenciaSelected['url_meet'] == '' || this.conferenciaSelected['url_meet'] == null
            || this.conferenciaSelected['url_meet'] == undefined) {
            this._conferenciaService.consultaMeet(this.conferenciaSelected.videoconferencia_id).subscribe(function (response) {
                _this.joinurl = response['join_url'];
                if (response['password']) {
                    _this.passwordZoom = response['password'];
                    _this.bloqueoBoton = false;
                }
                else {
                    _this.passwordZoom = '';
                    _this.bloqueoBoton = false;
                }
                _this.videoConferencia();
            }, function (error) {
                _this.bloqueoBoton = false;
                alertify.error('No se puede acceder a la videoconferencia');
                console.log(error);
            });
        }
        else {
            var newTab = window.open('', '_blank');
            newTab.location.href = this.conferenciaSelected['url_meet'];
        }
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/videoconferencia/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/videoconferencia/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_2__["VideoConferenciaService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/videoconferencia/videoconferencia-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/videoconferencia-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: VideoconferenciaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoconferenciaRoutingModule", function() { return VideoconferenciaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videoconferencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoconferencia.component */ "./src/app/administracion/videoconferencia/videoconferencia.component.ts");
/* harmony import */ var _videoconferencia_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../videoconferencia/consulta/consulta.component */ "./src/app/administracion/videoconferencia/consulta/consulta.component.ts");
/* harmony import */ var _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asistencia/asistencia.component */ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _videoconferencia_component__WEBPACK_IMPORTED_MODULE_2__["VideoconferenciaComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _videoconferencia_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'asistencia/:id', component: _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_4__["AsistenciaComponent"] },
        ]
    }
];
var VideoconferenciaRoutingModule = /** @class */ (function () {
    function VideoconferenciaRoutingModule() {
    }
    VideoconferenciaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VideoconferenciaRoutingModule);
    return VideoconferenciaRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/videoconferencia/videoconferencia.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/videoconferencia.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/videoconferencia/videoconferencia.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/videoconferencia.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3ZpZGVvY29uZmVyZW5jaWEvdmlkZW9jb25mZXJlbmNpYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/videoconferencia/videoconferencia.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/videoconferencia.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoconferenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoconferenciaComponent", function() { return VideoconferenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
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





var VideoconferenciaComponent = /** @class */ (function () {
    function VideoconferenciaComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Videoconferencias";
        this._usuarioService.pushBreadcum(this.title, '/admin/videoconferencias', 1);
    }
    VideoconferenciaComponent.prototype.ngOnInit = function () {
    };
    VideoconferenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videoconferencia',
            template: __webpack_require__(/*! ./videoconferencia.component.html */ "./src/app/administracion/videoconferencia/videoconferencia.component.html"),
            styles: [__webpack_require__(/*! ./videoconferencia.component.scss */ "./src/app/administracion/videoconferencia/videoconferencia.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], VideoconferenciaComponent);
    return VideoconferenciaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/videoconferencia/videoconferencia.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/videoconferencia/videoconferencia.module.ts ***!
  \****************************************************************************/
/*! exports provided: VideoconferenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoconferenciaModule", function() { return VideoconferenciaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _videoconferencia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoconferencia-routing.module */ "./src/app/administracion/videoconferencia/videoconferencia-routing.module.ts");
/* harmony import */ var _videoconferencia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videoconferencia.component */ "./src/app/administracion/videoconferencia/videoconferencia.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/videoconferencia/consulta/consulta.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asistencia/asistencia.component */ "./src/app/administracion/videoconferencia/asistencia/asistencia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var VideoconferenciaModule = /** @class */ (function () {
    function VideoconferenciaModule() {
    }
    VideoconferenciaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_videoconferencia_component__WEBPACK_IMPORTED_MODULE_4__["VideoconferenciaComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"], _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_9__["AsistenciaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _videoconferencia_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoconferenciaRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
            ]
        })
    ], VideoconferenciaModule);
    return VideoconferenciaModule;
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
//# sourceMappingURL=videoconferencia-videoconferencia-module.js.map