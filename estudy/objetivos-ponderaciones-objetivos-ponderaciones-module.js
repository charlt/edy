(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["objetivos-ponderaciones-objetivos-ponderaciones-module"],{

/***/ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones-routing.module.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ObjetivosPonderacionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivosPonderacionesRoutingModule", function() { return ObjetivosPonderacionesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objetivos_ponderaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objetivos-ponderaciones.component */ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _objetivos_ponderaciones_component__WEBPACK_IMPORTED_MODULE_2__["ObjetivosPonderacionesComponent"]
    }
];
var ObjetivosPonderacionesRoutingModule = /** @class */ (function () {
    function ObjetivosPonderacionesRoutingModule() {
    }
    ObjetivosPonderacionesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ObjetivosPonderacionesRoutingModule);
    return ObjetivosPonderacionesRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<div *ngIf=\"identificador == 1\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <table class=\"table table-bordered\">\r\n        <tr>\r\n          <th>{{'nmbActividad' | translate}}</th>\r\n          <th>{{'ponderacion' | translate}}</th>\r\n          <th>Objetivos de alumno</th>\r\n          <th>Objetivos de docente</th>\r\n          <th [hidden]=\"tipoAdmin == 0\">{{'guardarCambios' | translate}}</th>\r\n        </tr>\r\n        <tr [ngClass]=\"objetivos.grupo_id ? 'alert-warning':''\" *ngFor=\"let objetivos of objetivo\">\r\n          <td>{{objetivos.actividad_nombre}}</td>\r\n          <td>\r\n            <div class=\"form-group\">                               \r\n              <input disabled=\"disabled\" name=\"ponderacion\" [(ngModel)]=\"objetivos.ponderacion\" class=\"form-control\" id=\"ponderacion_{{objetivos.actividad_id}}\" type=\"number\">\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <textarea name=\"objetivoAlumno\" [(ngModel)]=\"objetivos.objetivo_alumno\" rows=\"3\" cols=\"27\" maxlength=\"255\"></textarea>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"formGroup\">\r\n                <textarea name=\"objetivoDocente\" [(ngModel)]=\"objetivos.objetivo_docente\" rows=\"3\" cols=\"27\" maxlength=\"255\"></textarea>\r\n            </div>\r\n          </td>\r\n          <td [hidden]=\"tipoAdmin == 0\" class=\"text-center\"><button class=\"btn btn-success\" (click)=\"guardarDatos(objetivos, objetivos.actividad_id, objetivos.objetivos_actividad_id)\"><i class=\"fa fa-save\"></i></button></td>\r\n        </tr>\r\n      </table>  \r\n    </div>\r\n  </div> \r\n</div>\r\n<div *ngIf=\"identificador == 0\">\r\n  <div class=\"alert alert-danger\">\r\n    <p class=\"text-center\">{{'MsgAsignaturaVacia' | translate}}\r\n      <br>\r\n      <a [routerLink]=\"['/admin/carga/asignatura/'+idAsignatura+'/modulos']\" class=\"btn btn-danger\">Crear actividades</a>\r\n    </p>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvb2JqZXRpdm9zLXBvbmRlcmFjaW9uZXMvb2JqZXRpdm9zLXBvbmRlcmFjaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ObjetivosPonderacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivosPonderacionesComponent", function() { return ObjetivosPonderacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_control_actividad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/control-actividad.service */ "./src/app/administracion/carga-actividades/services/control-actividad.service.ts");
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




var ObjetivosPonderacionesComponent = /** @class */ (function () {
    function ObjetivosPonderacionesComponent(_usuarioService, _actividadService, route, router) {
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this.route = route;
        this.router = router;
    }
    ObjetivosPonderacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idAsignatura = this.route.snapshot.parent.parent.paramMap.get('id');
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.consultaTabla(this.idAsignatura);
        this.changeURL = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (val.url == val.urlAfterRedirects) {
                    _this.idAsignatura = _this.route.snapshot.paramMap.get('id');
                    _this.jwt = _this._usuarioService.getJWT();
                    _this.consultaTabla(_this.idAsignatura);
                }
            }
        });
    };
    ObjetivosPonderacionesComponent.prototype.consultaObjetivos = function () {
        var _this = this;
        this._actividadService.consultaObjetivosActividad(this.jwt, this.idAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                _this.objetivo = response['objetivos'];
                _this.objetivo.forEach(function (_objetivo) {
                    if (!_objetivo.objetivo_alumno)
                        _objetivo.objetivo_alumno = "";
                    if (!_objetivo.objetivo_docente)
                        _objetivo.objetivo_docente = "";
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ObjetivosPonderacionesComponent.prototype.consultaTabla = function (idAsignatura) {
        var _this = this;
        this._actividadService.consultaActividades(idAsignatura).subscribe(function (response) {
            _this.ponderacionTotal = 0;
            if (response && response['status']) {
                console.log(response);
                _this.identificador = 1;
                _this._actividades = response['Actividades'];
                _this.consultaObjetivos();
            }
            else {
                _this.identificador = 0;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ObjetivosPonderacionesComponent.prototype.catalogoPadre = function (_actividad, id) {
        var actividadTmp = _actividad.filter(function (actividad) { return actividad.actividad_id != id; });
        return actividadTmp;
    };
    ObjetivosPonderacionesComponent.prototype.guardarDatos = function (actividad, id_actividad, objetivos_actividad_id) {
        var _this = this;
        if (!objetivos_actividad_id) {
            objetivos_actividad_id = 0;
            console.log(objetivos_actividad_id);
        }
        this._actividadService.guardaObjetivosPonderacion(actividad, this.jwt, id_actividad, objetivos_actividad_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.consultaObjetivos();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ObjetivosPonderacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-objetivos-ponderaciones',
            template: __webpack_require__(/*! ./objetivos-ponderaciones.component.html */ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.html"),
            styles: [__webpack_require__(/*! ./objetivos-ponderaciones.component.scss */ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_control_actividad_service__WEBPACK_IMPORTED_MODULE_2__["ControlActividadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ObjetivosPonderacionesComponent);
    return ObjetivosPonderacionesComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ObjetivosPonderacionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivosPonderacionesModule", function() { return ObjetivosPonderacionesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _objetivos_ponderaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objetivos-ponderaciones-routing.module */ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones-routing.module.ts");
/* harmony import */ var _objetivos_ponderaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objetivos-ponderaciones.component */ "./src/app/administracion/carga-actividades/asignatura/objetivos-ponderaciones/objetivos-ponderaciones.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ObjetivosPonderacionesModule = /** @class */ (function () {
    function ObjetivosPonderacionesModule() {
    }
    ObjetivosPonderacionesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_objetivos_ponderaciones_component__WEBPACK_IMPORTED_MODULE_3__["ObjetivosPonderacionesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _objetivos_ponderaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObjetivosPonderacionesRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], ObjetivosPonderacionesModule);
    return ObjetivosPonderacionesModule;
}());



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=objetivos-ponderaciones-objetivos-ponderaciones-module.js.map