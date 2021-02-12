(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-learning-videos-videoconferencia-videos-videoconferencia-module"],{

/***/ "./src/app/learning/videos-videoconferencia/services/videos-videoconferencia.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/learning/videos-videoconferencia/services/videos-videoconferencia.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: VideosVideoconferenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosVideoconferenciaService", function() { return VideosVideoconferenciaService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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




var VideosVideoconferenciaService = /** @class */ (function () {
    function VideosVideoconferenciaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    VideosVideoconferenciaService.prototype.consultaVideoconferencias = function (asignatura_grupo_id) {
        var params = '?asignatura_grupo_id=' + asignatura_grupo_id;
        // params += '&activas='+tipo;
        return this._httpClient.get(this.url + 'learning/videoconferencia/consultaVideosVIdeoconferencias.php' + params);
    };
    VideosVideoconferenciaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], VideosVideoconferenciaService);
    return VideosVideoconferenciaService;
}());



/***/ }),

/***/ "./src/app/learning/videos-videoconferencia/videos-videoconferencia-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/learning/videos-videoconferencia/videos-videoconferencia-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: VideosVideoconferenciaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosVideoconferenciaRoutingModule", function() { return VideosVideoconferenciaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videos_videoconferencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos-videoconferencia.component */ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _videos_videoconferencia_component__WEBPACK_IMPORTED_MODULE_2__["VideosVideoconferenciaComponent"]
    }
];
var VideosVideoconferenciaRoutingModule = /** @class */ (function () {
    function VideosVideoconferenciaRoutingModule() {
    }
    VideosVideoconferenciaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VideosVideoconferenciaRoutingModule);
    return VideosVideoconferenciaRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleFormControlSelect1\">Selecciona una asignatura</label>\r\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"index\" (change)=\"consulta()\">\r\n        <option value=\"\" selected hidden>Selecciona una opción</option>\r\n        <option value=\"{{i}}\" *ngFor=\"let materia of materias; let i = index\">{{materia.asignatura}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <table class=\"table table-bordered table-striped\">\r\n      <tr>\r\n        <th>Nombre</th>\r\n        <th>Descripción</th>\r\n        <th>Url</th>\r\n        <th>Fecha inicio</th>\r\n        <th>Fecha fin</th>\r\n      </tr>\r\n      <tr *ngFor=\"let video of videoconferencias\">\r\n        <td>{{video.nombre}}</td>\r\n        <td>{{video.descripcion}}</td>\r\n        <td><a href=\"{{video.url_descarga}}\" target=\"_blank\">{{video.url_descarga}}</a></td>\r\n        <td>{{video.fecha_inicio | date: \"dd/MM/yyyy\"}}, {{video.fecha_inicio | date: \"shortTime\"}}</td>\r\n        <td>{{video.fecha_fin |date: \"dd/MM/yyyy\"}}, {{video.fecha_fin |date: \"shortTime\"}}</td>\r\n      </tr>\r\n    </table>\r\n    <div *ngIf=\"!videoconferencias && index\" class=\"alert alert-danger text-center\" role=\"alert\">Sin resultados</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL3ZpZGVvcy12aWRlb2NvbmZlcmVuY2lhL3ZpZGVvcy12aWRlb2NvbmZlcmVuY2lhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VideosVideoconferenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosVideoconferenciaComponent", function() { return VideosVideoconferenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_administracion_alumno_materias_alumnos_materias_alumnos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/administracion/alumno/materias-alumnos/materias-alumnos.service */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_videos_videoconferencia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/videos-videoconferencia.service */ "./src/app/learning/videos-videoconferencia/services/videos-videoconferencia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideosVideoconferenciaComponent = /** @class */ (function () {
    function VideosVideoconferenciaComponent(_usuarioService, _videoVideoconferenciaService, _materiasAlumnosService) {
        this._usuarioService = _usuarioService;
        this._videoVideoconferenciaService = _videoVideoconferenciaService;
        this._materiasAlumnosService = _materiasAlumnosService;
        this.index = "";
        this.title = 'Consulta videos videoconferencia';
        this._usuarioService.pushBreadcum(this.title, '', 1);
    }
    VideosVideoconferenciaComponent.prototype.ngOnInit = function () {
        this.idAlumno = this._usuarioService.getIdentity()['alumno'].alumno_id;
        this.consultaMaterias();
    };
    VideosVideoconferenciaComponent.prototype.consulta = function () {
        var _this = this;
        this.videoconferencias = [];
        var asignatura_grupo_id;
        if (this.index) {
            asignatura_grupo_id = this.materias[this.index].asignatura_grupo_id;
        }
        else {
            asignatura_grupo_id = null;
        }
        this._videoVideoconferenciaService.consultaVideoconferencias(asignatura_grupo_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.videoconferencias = response['videoconferencias'];
                _this.videoconferencias.forEach(function (_videoconferencia) {
                    if (_videoconferencia.fecha_inicio)
                        _videoconferencia.fecha_inicio = new Date((_videoconferencia.fecha_inicio) * 1000);
                    if (_videoconferencia.fecha_fin)
                        _videoconferencia.fecha_fin = new Date((_videoconferencia.fecha_fin) * 1000);
                });
                console.log(_this.videoconferencias);
            }
            else {
                _this.videoconferencias = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    VideosVideoconferenciaComponent.prototype.consultaMaterias = function () {
        var _this = this;
        if (this.materias)
            this.materias = null;
        this._materiasAlumnosService.consultaMaterias(this.idAlumno, 1).subscribe(function (response) {
            if (response && response['status']) {
                _this.materias = response['materias'];
                _this.consulta();
            }
        }, function (error) {
            console.log(error);
        });
    };
    VideosVideoconferenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos-videoconferencia',
            template: __webpack_require__(/*! ./videos-videoconferencia.component.html */ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.html"),
            styles: [__webpack_require__(/*! ./videos-videoconferencia.component.scss */ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_videos_videoconferencia_service__WEBPACK_IMPORTED_MODULE_3__["VideosVideoconferenciaService"],
            src_app_administracion_alumno_materias_alumnos_materias_alumnos_service__WEBPACK_IMPORTED_MODULE_1__["MateriasAlumnosService"]])
    ], VideosVideoconferenciaComponent);
    return VideosVideoconferenciaComponent;
}());



/***/ }),

/***/ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/learning/videos-videoconferencia/videos-videoconferencia.module.ts ***!
  \************************************************************************************/
/*! exports provided: VideosVideoconferenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosVideoconferenciaModule", function() { return VideosVideoconferenciaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _videos_videoconferencia_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos-videoconferencia-routing.module */ "./src/app/learning/videos-videoconferencia/videos-videoconferencia-routing.module.ts");
/* harmony import */ var _videos_videoconferencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos-videoconferencia.component */ "./src/app/learning/videos-videoconferencia/videos-videoconferencia.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VideosVideoconferenciaModule = /** @class */ (function () {
    function VideosVideoconferenciaModule() {
    }
    VideosVideoconferenciaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_videos_videoconferencia_component__WEBPACK_IMPORTED_MODULE_3__["VideosVideoconferenciaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _videos_videoconferencia_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideosVideoconferenciaRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], VideosVideoconferenciaModule);
    return VideosVideoconferenciaModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-learning-videos-videoconferencia-videos-videoconferencia-module.js.map