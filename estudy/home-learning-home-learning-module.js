(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-learning-home-learning-module"],{

/***/ "./src/app/administracion/carga-actividades/services/control-actividad.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/control-actividad.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ControlActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlActividadService", function() { return ControlActividadService; });
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




var ControlActividadService = /** @class */ (function () {
    function ControlActividadService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ControlActividadService.prototype.guardaObjetivosPonderacion = function (actividad, jwt, id_actividad, id_objetivo_actividad) {
        console.log(id_objetivo_actividad);
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('objetivo_docente', actividad.objetivo_docente);
        formData.append('objetivo_alumno', actividad.objetivo_alumno);
        formData.append('id_objetivos_actividad', id_objetivo_actividad);
        formData.append('id_actividad', id_actividad);
        return this._httpClient.post(this.url + 'learning/actividad/editaObjetivos.php', formData);
    };
    ControlActividadService.prototype.reasignarCalificacion = function (jwt, id_actividad, tipo_calificacion) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('id_actividad', id_actividad);
        formData.append('tipo_calificacion', tipo_calificacion);
        return this._httpClient.post(this.url + 'learning/administracion/reasignaCalificacionActividad.php', formData);
    };
    ControlActividadService.prototype.consultaActActual = function (jwt) {
        var params = '?jwt=' + jwt;
        // params += '&jwt='+jwt;    
        return this._httpClient.get(this.url + 'learning/alumno/ultimaActividadContestada.php' + params);
        ;
    };
    ControlActividadService.prototype.consultaObjetivosActividad = function (jwt, id_asignatura) {
        var params = '?jwt=' + jwt;
        params += '&id_asignatura=' + id_asignatura;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaObjetivos.php' + params);
    };
    ControlActividadService.prototype.consultaActividades = function (idAsignatura) {
        var params = '?id_asignatura=' + idAsignatura;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaActividades.php' + params);
    };
    ControlActividadService.prototype.consultaActividadDocente = function (idAsignatura, jwt) {
        var params = '?id_asignatura=' + idAsignatura;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaActividadesDocente.php' + params);
    };
    ControlActividadService.prototype.modificaActividad = function (actividad) {
        var formData = new FormData();
        formData.append('id_actividad', actividad.actividad_id);
        if (actividad.actividad_padre_id != "") {
            formData.append('id_actividad_padre', actividad.actividad_padre_id);
        }
        if (actividad.fecha_inicio) {
            formData.append('fecha_inicio', actividad.fecha_inicio);
        }
        if (actividad.fecha_fin) {
            formData.append('fecha_fin', actividad.fecha_fin);
        }
        if (actividad.ponderacion) {
            formData.append('ponderacion', actividad.ponderacion);
        }
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/actividad/editaControl.php', formData);
    };
    ControlActividadService.prototype.guardaPonderaciones = function (id_asignatura, actividades, idRol) {
        var formData = new FormData;
        formData.append('id_asignatura', id_asignatura);
        actividades.forEach(function (actividad) {
            if (actividad.tipo == "2" || idRol == "1") {
                formData.append('ponderacion[]', actividad.ponderacion);
                formData.append('id_actividad[]', actividad.actividad_id);
            }
        });
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/asignatura/guardaPonderaciones.php', formData);
    };
    ControlActividadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ControlActividadService);
    return ControlActividadService;
}());



/***/ }),

/***/ "./src/app/learning/home-learning/home-learning-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/learning/home-learning/home-learning-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: HomeLearningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLearningRoutingModule", function() { return HomeLearningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_learning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-learning.component */ "./src/app/learning/home-learning/home-learning.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '',
        component: _home_learning_component__WEBPACK_IMPORTED_MODULE_2__["HomeLearningComponent"]
    }
];
var HomeLearningRoutingModule = /** @class */ (function () {
    function HomeLearningRoutingModule() {
    }
    HomeLearningRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeLearningRoutingModule);
    return HomeLearningRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/home-learning/home-learning.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/learning/home-learning/home-learning.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"container-fluid\"> \r\n        <div class=\"row\">\r\n            <div class=\"col my-2\" >\r\n                <h4>Bienvenido a tu plataforma {{identity.nombre}}</h4>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"privilegios\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-3 col-lg-6 mt-3\" [ngStyle]=\"{'background-image': 'url('+ urlImg +')', 'background-repeat': 'no-repeat','background-size': '100% ' ,'background-position': 'center'        }\">\r\n                    <!-- <div [ngStyle]=\"{'background-image': 'url('+ urlImg +')'}\"></div> -->\r\n                    <!-- <img class=\"img-fluid\" src=\"{{urlImg}}\"> -->\r\n                    <!-- <img class=\"img-fluid\" src=\"assets/images/richard.jpeg\"> -->\r\n                </div>\r\n                <div *ngFor=\"let privilegio of privilegios.principales; let i = index;\" [ngClass]=\"privilegio.size\">\r\n                    <div [routerLink]=\"[privilegio.url]\" class=\"cursorTarjeta mt-3\">\r\n                        <app-stat [bgClass]=\"privilegio.color\" [icon]=\"privilegio.icon\"  [label]=\"privilegio.label\" [text]=\"privilegio.text\" ></app-stat>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-4\">\r\n                <!--div class=\"col-xl-4\">\r\n                    <h6 class=\"text-center\">Mi perfil</h6>\r\n                </div>\r\n                <div class=\"col-xl-4\">\r\n                    <h6 class=\"text-center\">Académico</h6>\r\n                </div>\r\n                <div class=\"col-xl-4\">\r\n                    <h6 class=\"text-center\">Servicios escolares</h6>\r\n                </div-->\r\n                <div *ngFor=\"let privilegio of privilegios.secundarios; let i = index;\" [ngClass]=\"privilegio.size\">\r\n                    <div [routerLink]=\"[privilegio.url]\" class=\"cursorTarjeta rounded mb-2\" [ngClass]=\"privilegio.color\"><div class=\"p-3 text-white text-truncate\"><i class=\"fa\" [ngClass]=\"privilegio.icon\"></i> {{privilegio.label}}</div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--div class=\"row my-3\">\r\n            <div class=\"col\">\r\n                <br>\r\n                <h4 class=\"text-center\">Mis noticias</h4>\r\n            </div>\r\n        </div-->\r\n        \r\n        <div class=\"row mt-4\" *ngIf=\"idSituacionAlumno == 1 && idSituacionPago != 2\">\r\n            <div class=\"col-lg-4 \">\r\n            <div class=\"card mb-2\" *ngIf=\"notifPendientes && notifPendientes.length\">\r\n                <div class=\"card-header\">\r\n                  Notificaciones de las asignaturas\r\n                </div>\r\n                <div class=\"card-body m-0 p-0\" >\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item _hover\" *ngFor=\"let notif of notifPendientes\" \r\n                            (click)=\"irmateria(notif.materia_id, notif.actividad_id)\">\r\n                            <p class=\"mb-1\"><b>{{notif.notificacion}}</b></p>\r\n                            <p class=\"card-text\"> Termina el {{notif.fecha_fin | date: \"dd/MM/yyyy\"}} {{notif.fecha_fin | date: \"shortTime\"}}</p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"ultimaActividad\">\r\n                <div class=\"alert alert-success\" >\r\n                    <p>Continuar con</p>\r\n                    <h5>{{ultimaActividad.actividad_nombre}}</h5>\r\n                    <p>{{ultimaActividad.asignatura}} </p>\r\n                    <a href=\"javascript:void(0)\" (click)=\"irmateria(ultimaActividad.materia_id,ultimaActividad.actividad_id)\" class=\"pull-right\">Ir a mi actividad</a>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <!-- <div *ngIf=\"videoconferenciasDisponibles && videoconferenciasDisponibles.length\" class=\"col-lg-4\"> -->\r\n                <div class=\"col-lg-4 mb-2\">\r\n                <div class=\"card\" >\r\n                    <div class=\"card-header\">\r\n                        <div class=\"d-flex justify-content-between py-0 my-0\">\r\n                            <p class=\"p-0 m-0\"><i class=\"fa fa-group\"></i> Clases en línea</p>\r\n                            <p class=\"text-success p-0 m-0\" (click)=\"consultaConferenciasActivas()\" style=\"cursor: pointer;\">Refrescar <i class=\"fa fa-refresh\" aria-hidden=\"true\" ></i></p>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"cargandoVideoconferencias\">\r\n                        <ul class=\"list-group list-group-flush\">\r\n                            <li class=\"list-group-item\"><i class=\"fa fa-spin fa-spinner\"></i> Buscando clases</li> \r\n                        </ul>\r\n                    </div>\r\n                    <div *ngIf=\"!cargandoVideoconferencias && videoconferenciasDisponibles && videoconferenciasDisponibles.length\">\r\n                        <ul class=\"list-group list-group-flush\" *ngFor=\"let conf of videoconferenciasDisponibles\">\r\n                            <li class=\"list-group-item\">{{conf.nombre}}\r\n                                <br>\r\n                                <a *ngIf=\"(conf.usuario_zoom_id && (conf.url_meet == null || conf.url_meet == undefined || conf.url_meet == '') && conf.disponible) || \r\n                                    ((conf.url_meet != null && conf.url_meet != undefined && conf.url_meet != '') && conf.disponible)\" \r\n                                    class=\"btn btn-success pull-right text-white mt-2\" (click)=\"consultaVideoConferencia(conf)\">Entrar a clase</a>\r\n                                <b *ngIf=\"((!conf.usuario_zoom_id || !conf.disponible) && (conf.url_meet == null || conf.url_meet == undefined || conf.url_meet == '')) ||\r\n                                ((conf.url_meet != null && conf.url_meet != undefined && conf.url_meet != '') && !conf.disponible)\" class=\"pull-right\">Abre el {{conf.fecha_inicio | date:'dd/MM/yyyy hh:mm a'}}</b>\r\n                            </li> \r\n                        </ul>\r\n                    </div> \r\n                    <div *ngIf=\"!cargandoVideoconferencias && !videoconferenciasDisponibles\">\r\n                        <ul class=\"list-group list-group-flush\">\r\n                            <li class=\"list-group-item\">No tienes clases en línea en este momento</li> \r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--div class=\"col-lg-4\">\r\n                <ngb-carousel>\r\n                    <ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n                        <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h3>{{slider.label}}</h3>\r\n                            <p>{{slider.text}}</p>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n            </div-->\r\n        </div>\r\n\r\n        <!--button [routerLink]=\"['/learning/tickets/nuevo']\" class=\"btn btn-success m-2\" style=\"position: fixed; bottom: 0; right: 0;\"><i class=\"fa fa-ticket fa-2x\"></i></button-->\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalVideo let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Videoconferencia</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body m-3\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n          <div class=\"text-center\">\r\n              <h5><b>Elige como quieres unirte a la videoconferencia: </b></h5>\r\n              <p><b>{{conferenciaSelected.nombre}}</b></p>\r\n              <p class=\"mb-0\">Hora de inicio: {{conferenciaSelected.fecha_inicio | date:'dd/MM/yyyy hh:mm a'}}</p>\r\n              <p class=\"mt-0\">Hora de finalización: {{conferenciaSelected.fecha_fin | date:'dd/MM/yyyy hh:mm a'}}</p>\r\n              <hr>\r\n              <p>Para abrir desde el navegador web da click en el siguiente botón: </p>\r\n              <button class=\"btn btn-primary btn-lg\" (click)=\"videoConferencia(tipoConferencia)\">\r\n                  Abrir web\r\n              </button>\r\n              <div *ngIf=\"tipoConferencia == 0\">\r\n                <hr>\r\n                <p class=\"mt-3\">Para abrir desde la aplicación de zoom da click en el siguiente botón: </p>\r\n                <a [href]=\"joinurl\" target=\"_blank\" class=\"btn btn-primary btn-lg\" (click)=\"insertaAcceso(conferenciaSelected.videoconferencia_id)\">\r\n                    Abrir Zoom\r\n                </a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close()\">Cerrar</button>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/learning/home-learning/home-learning.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/learning/home-learning/home-learning.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuadrado {\n  margin: 10px 2.5PX;\n  border-radius: 25px;\n  padding-bottom: 5PX; }\n\n.icon {\n  font-size: 100px;\n  color: white;\n  padding: 30px; }\n\n.letra {\n  color: white;\n  text-align: center;\n  margin-left: 100px;\n  text-align: center; }\n\n.letra.letras {\n  font-family: sans-serif;\n  font-weight: bold; }\n\n.cursorTarjeta {\n  cursor: pointer; }\n\n.blockTarjeta {\n  cursor: not-allowed; }\n\n._hover:hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm5pbmcvaG9tZS1sZWFybmluZy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxsZWFybmluZ1xcaG9tZS1sZWFybmluZ1xcaG9tZS1sZWFybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ25COztBQUVDO0VBQ0QsaUJBQWU7RUFDZixhQUFZO0VBQ1osY0FBYSxFQUNYOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUN0QixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ2pCOztBQUVGO0VBQ0Esd0JBQXVCO0VBQ3RCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNDLGdCQUFlLEVBQ2Y7O0FBQ0Q7RUFDQyxvQkFBbUIsRUFDbkI7O0FBRUQ7RUFDQyxnQkFBZSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbGVhcm5pbmcvaG9tZS1sZWFybmluZy9ob21lLWxlYXJuaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1YWRyYWRve1xyXG4gICAgbWFyZ2luOiAxMHB4IDIuNVBYO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1UFg7XHJcbiAgIH1cclxuXHJcbiAgICAgLmljb257XHJcbiAgICBmb250LXNpemU6MTAwcHg7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgICB9XHJcblxyXG4gICAgIC5sZXRyYXtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB9XHJcblxyXG4gICAgLmxldHJhLmxldHJhc3tcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcblxyXG4gICAuY3Vyc29yVGFyamV0YXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgfVxyXG4gICAuYmxvY2tUYXJqZXRhe1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgfVxyXG5cclxuICAgLl9ob3Zlcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/learning/home-learning/home-learning.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/learning/home-learning/home-learning.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLearningComponent", function() { return HomeLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_control_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/control-actividad.service */ "./src/app/administracion/carga-actividades/services/control-actividad.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var src_app_docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/docente/video-conferencia/services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_alumno_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alumno.service */ "./src/app/services/alumno.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Privilegios} from "src/app/models/learning/privilegiosLearning";





var HomeLearningComponent = /** @class */ (function () {
    function HomeLearningComponent(_usuarioService, route, _router, _actividadService, _materiaService, _plataformaService, _conferenciaService, modalService, _alumnoService) {
        this._usuarioService = _usuarioService;
        this.route = route;
        this._router = _router;
        this._actividadService = _actividadService;
        this._materiaService = _materiaService;
        this._plataformaService = _plataformaService;
        this._conferenciaService = _conferenciaService;
        this.modalService = modalService;
        this._alumnoService = _alumnoService;
        this.sliders = [];
        this.cargandoVideoconferencias = false;
        this.title = "";
        this._usuarioService.pushBreadcum(this.title, '/learning/home', 1);
        this._usuarioService.removeBreadcum(2);
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets;
        this.urlLeave = _services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets + '/estudy/';
    }
    HomeLearningComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('prevUrl'))
            localStorage.removeItem('prevUrl');
        localStorage.setItem('prevUrl', this._router.url);
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        if (this.identity.url_perfil) {
            this.urlImg = this.url + this.identity.url_perfil;
        }
        else {
            this.urlImg = 'assets/images/learning/usuarios.png';
        }
        this.privilegios = this._alumnoService.getprivilegiosAlumno();
        this.idSituacionAlumno = this._alumnoService.getSituacionAlumno();
        this.idSituacionPago = this._alumnoService.getSituacionPago();
        this._alumnoService.infoPlataformaCargada.subscribe(function (response) {
            _this.privilegios = response['privilegios'];
            _this.idSituacionAlumno = response['idSituacionAlumno'];
            _this.idSituacionPago = response['idSituacionPago'];
        });
        this.consultaActividad();
        this.consultaConferenciasActivas();
        this.consultaNotifAsig();
        this.sliders.push({
            imagePath: 'http://201.149.57.130:8080/plataforma/learning/img/carrusel/banner_promocion.png',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'http://201.149.57.130:8080/plataforma/learning/img/carrusel/app.png?ver=2019',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'http://201.149.57.130:8080/plataforma/learning/img/carrusel/siguenos.png?ver=2019',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
    };
    HomeLearningComponent.prototype.consultaNotifAsig = function () {
        var _this = this;
        this._materiaService.consultaNotif(this.identity.alumno.alumno_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.notifPendientes = response['notificaciones'];
                _this.notifPendientes.forEach(function (notificacion) {
                    notificacion.fecha_fin = new Date(notificacion.fecha_fin * 1000);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeLearningComponent.prototype.onLoggedout = function () {
        this._usuarioService.guardaFechaUltSesion(this.identity.usuario_id).subscribe(function (response) {
            if (response && response['status']) {
            }
        }, function (error) {
            console.log(error);
        });
        this.modalService.dismissAll();
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
    };
    HomeLearningComponent.prototype.consultaActividad = function () {
        var _this = this;
        this._actividadService.consultaActActual(this.jwt).subscribe(function (response) {
            // console.log(response);
            if (response && response['status']) {
                _this.ultimaActividad = response['actividad'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    // private interval;
    HomeLearningComponent.prototype.consultaConferenciasActivas = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.cargandoVideoconferencias = true;
        this._plataformaService.consultaConferenciasActivas().subscribe(function (response) {
            if (response && response['status']) {
                _this.videoconferenciasDisponibles = response['conferencias'];
                var time_1 = new Date().getTime();
                _this.videoconferenciasDisponibles.forEach(function (conferencia) {
                    conferencia['fecha_inicio'] = new Date(conferencia['fecha_inicio'] * 1000);
                    conferencia['fecha_fin'] = new Date(conferencia['fecha_fin'] * 1000);
                    var fecha_inicio = conferencia['fecha_inicio'].getTime();
                    if (time_1 >= fecha_inicio) {
                        conferencia['disponible'] = true;
                    }
                    else {
                        conferencia['disponible'] = false;
                    }
                });
            }
            _this.cargandoVideoconferencias = false;
            // if (id == 0) {
            //   this.interval = setInterval(() => {
            //     this.consultaConferenciasActivas(1);
            //   }, 30000)
            // }
        }, function (error) {
            console.log(error);
        });
    };
    HomeLearningComponent.prototype.irmateria = function (id_materia, id_actividad) {
        var _this = this;
        this._materiaService.seleccionaMaterias(this.identity.persona_id, 3).then(function (data) {
            _this._materiaService.seleccionaMateria(id_materia, _this.jwt).then(function (data) {
                _this._router.navigate(['/materia/actividad/' + id_actividad]);
            });
        });
    };
    // consultaConferencia(id){
    // }
    HomeLearningComponent.prototype.videoConferencia = function () {
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        // console.log(this.conferenciaSelected);
        this._conferenciaService.insertaAcceso(this.jwt, this.conferenciaSelected.videoconferencia_id, this.identity.persona_id).subscribe(function (response) {
        }, function (error) {
            console.log(error);
        });
        if (this.tipoConferencia == 0) {
            localStorage.setItem('docente', JSON.stringify(this.conferenciaSelected));
            localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
            localStorage.setItem('passwordZoom', JSON.stringify(this.passwordZoom));
            var newTab = window.open('', '_blank');
            newTab.location.href = 'assets/zoom/';
        }
        else if (this.tipoConferencia == 1) {
            var newTab = window.open('', '_blank');
            newTab.location.href = this.conferenciaSelected['url_meet'];
        }
        // window.open("http://localhost:4200/assets/zoom/", "_blank");
        // localStorage.setItem('docente', JSON.stringify(conferencia));
        // localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
        //this.insertaAcceso();
        /*this._conferenciaService.videoconferenciaDisponible(this.jwt, this.idMateria).subscribe(response => {
          if (response && response['status']) {
            // console.log(response);
            this.datosConferencia = response['videoconferencia'];
            this.idVideoconferencia = this.datosConferencia['videoconferencia_id'];
            this.docente = this.datosConferencia['docente'];
            this._conferenciaService.consulta(this.jwt, this.docente['persona_id']).subscribe(response => {
              // console.log(response);
              if (response && response['status']) {
                this.datosDocente = response['usuario'];
                localStorage.setItem('docente', JSON.stringify(this.datosDocente));
                localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
                newTab.location.href = 'assets/zoom/';
                this.insertaAcceso();
              }
            }, error => {
              console.log(<any>error);
            });
            this._conferenciaService.insertaAcceso(this.jwt,this.idVideoconferencia,this.identity.persona_id).subscribe(
              response =>{
                
              },error=>{
                console.log(error)
              }
            )
          }
        }, error => {
          console.log(<any>error);
        });*/
    };
    HomeLearningComponent.prototype.insertaAcceso = function (idVideoconferencia) {
        this._conferenciaService.insertaAcceso(this.jwt, idVideoconferencia, this.identity['persona_id']).subscribe(function (response) {
            if (response && response['status']) {
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeLearningComponent.prototype.consultaVideoConferencia = function (conferencia) {
        var _this = this;
        this.conferenciaSelected = conferencia;
        if (this.conferenciaSelected['url_meet'] == '' || this.conferenciaSelected['url_meet'] == null
            || this.conferenciaSelected['url_meet'] == undefined) {
            this.tipoConferencia = 0;
            this._conferenciaService.consultaMeet(this.conferenciaSelected.videoconferencia_id).subscribe(function (response) {
                _this.joinurl = response['join_url'];
                if (response['password']) {
                    _this.passwordZoom = response['password'];
                }
                else {
                    _this.passwordZoom = '';
                }
                _this.modalService.open(_this.modalVideo, { size: "lg" });
            }, function (error) {
                alertify.error('No se puede acceder a la videoconferencia');
                console.log(error);
            });
        }
        else {
            this.tipoConferencia = 1;
            this.modalService.open(this.modalVideo, { size: "lg" });
        }
    };
    HomeLearningComponent.prototype.closeModal = function () {
        this.modalService.dismissAll();
        this._router.navigate(['/learning/home/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("modalVideo"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeLearningComponent.prototype, "modalVideo", void 0);
    HomeLearningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-learning',
            template: __webpack_require__(/*! ./home-learning.component.html */ "./src/app/learning/home-learning/home-learning.component.html"),
            styles: [__webpack_require__(/*! ./home-learning.component.scss */ "./src/app/learning/home-learning/home-learning.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_administracion_carga_actividades_services_control_actividad_service__WEBPACK_IMPORTED_MODULE_5__["ControlActividadService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_6__["MateriaService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_7__["PlataformaService"],
            src_app_docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_8__["VideoConferenciaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            src_app_services_alumno_service__WEBPACK_IMPORTED_MODULE_10__["AlumnoService"]])
    ], HomeLearningComponent);
    return HomeLearningComponent;
}());



/***/ }),

/***/ "./src/app/learning/home-learning/home-learning.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/learning/home-learning/home-learning.module.ts ***!
  \****************************************************************/
/*! exports provided: HomeLearningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLearningModule", function() { return HomeLearningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_learning_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-learning-routing.module */ "./src/app/learning/home-learning/home-learning-routing.module.ts");
/* harmony import */ var _home_learning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-learning.component */ "./src/app/learning/home-learning/home-learning.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeLearningModule = /** @class */ (function () {
    function HomeLearningModule() {
    }
    HomeLearningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_learning_component__WEBPACK_IMPORTED_MODULE_4__["HomeLearningComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_learning_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeLearningRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedPipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["StatModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], HomeLearningModule);
    return HomeLearningModule;
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

/***/ "./src/app/services/plataforma.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/plataforma.service.ts ***!
  \************************************************/
/*! exports provided: PlataformaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaService", function() { return PlataformaService; });
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




var PlataformaService = /** @class */ (function () {
    function PlataformaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.listenTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenEncuesta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PlataformaService.prototype.cambiaAvisoEncuestaEstatus = function (encuesta_id) {
        this.change.emit(encuesta_id);
    };
    PlataformaService.prototype.consultaNomRetro = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaRetrosDocente = function (jwt, id_docente) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjDocente = function (jwt, id_docente, id_materia) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        params += '&id_materia=' + id_materia;
        return this._httpClient.get(this.url + 'learning/notificaciones/onlineDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnos = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/numMensajesAlumno.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnosDetalles = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/mensajeriaAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaConferenciasActivas = function () {
        return this._httpClient.get(this.url + '/learning/notificaciones/consultaConferenciasAlumno.php');
    };
    PlataformaService.prototype.conferenciasActivasDocente = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/consultaConferenciasActivas.php' + params);
    };
    PlataformaService.prototype.verNotificacionBloqueo = function (id, id_rol) {
        var params = '?id_persona=' + id;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + '/general/tickets/consultaBloqueo.php' + params);
    };
    PlataformaService.prototype.consultaTicket = function () {
        return this._httpClient.get(this.url + 'general/tickets/notificacionTicket.php');
    };
    PlataformaService.prototype.consultaNotificaciones = function (idRol) {
        if (idRol == "2" || idRol == "4") {
            return this._httpClient.get(this.url + 'learning/notificaciones/general.php');
        }
        else if (idRol == "3") {
            return this._httpClient.get(this.url + 'controlEscolar/notificaciones/general.php');
        }
    };
    PlataformaService.prototype.consultaJWT = function (matricula, rol) {
        var formData = new FormData();
        formData.append('rol', rol);
        formData.append('clave', matricula);
        return this._httpClient.post(this.url + 'general/auth_clave.php', formData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlataformaService.prototype, "change", void 0);
    PlataformaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlataformaService);
    return PlataformaService;
}());



/***/ })

}]);
//# sourceMappingURL=home-learning-home-learning-module.js.map