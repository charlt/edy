(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculo-calificacion-calculo-calificacion-module"],{

/***/ "./src/app/administracion/carga-actividades/services/actividad.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/actividad.service.ts ***!
  \********************************************************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
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




var ActividadService = /** @class */ (function () {
    function ActividadService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ActividadService.prototype.vistaArchivo = function (id_actividad, visto, jwt) {
        var formData = new FormData();
        formData.append('id_contenido_actividad', id_actividad);
        formData.append('visto', visto);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/contenidoActividad/modificaContenido.php', formData);
    };
    ActividadService.prototype.consultaActividad = function (id_actividad, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_actividad=' + id_actividad;
        return this._httpClient.get(this.url + 'learning/actividad/consulta.php' + params);
    };
    ActividadService.prototype.consultaTipoActividad = function () {
        return this._httpClient.get(this.url + 'catalogosLE/tipoActividad.php');
    };
    ActividadService.prototype.consultaImportanciaActividad = function () {
        return this._httpClient.get(this.url + 'catalogosLE/importanciaActividad.php');
    };
    ActividadService.prototype.consultaDificultad = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/dificultad.php' + params);
    };
    ActividadService.prototype.consultaResolucion = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/resolucion.php' + params);
    };
    ActividadService.prototype.elimina = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/actividad/elimina.php' + params);
    };
    ActividadService.prototype.consultaContenido = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/contenidoActividad/consulta.php' + params);
    };
    ActividadService.prototype.guardaContenido = function (form, id, jwt, id_modulo) {
        var formData = new FormData();
        if (id) {
            formData.append('id_actividad', id);
        }
        formData.append('jwt', jwt);
        formData.append('archivo', form.get('contenido').value);
        formData.append('id_modulo', id_modulo);
        return this._httpClient.post(this.url + 'learning/contenidoActividad/crea.php', formData);
    };
    ActividadService.prototype.eliminaContenido = function (id, jwt) {
        var params = '?id_contenido_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/contenidoActividad/elimina.php' + params);
    };
    ActividadService.prototype.orden = function (orden_nuevo, id_modulo, id_actividad, jwt) {
        var params = '?orden_nuevo=' + orden_nuevo;
        params += '&id_actividad=' + id_actividad;
        params += '&id_modulo=' + id_modulo;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/actividad/orden.php' + params);
    };
    ActividadService.prototype.modificaActividad = function (form, id_modulo, id_actividad, jwt, f_inicio, f_fin) {
        var formData = new FormData();
        var datos = [{ var: 'tipo_calificacion', control: 'tipoEvaluacion' },
            { var: 'numero_mostrado', control: 'bullet' },
            { var: 'shuffle', control: 'aleatorio' },
            { var: 'num_intentos', control: 'numeroIntentos' },
            { var: 'metodo_resolver_id', control: 'resolucion' },
            { var: 'importancia_actividad_id', control: 'importancia' },
            { var: 'ponderacion', control: 'ponderacion' },
            { var: 'unica', control: 'unica' },
            { var: 'portafolio', control: 'portafolio' }];
        datos.forEach(function (dato) {
            formData.append(dato.var, form.get(dato.control) ? form.get(dato.control).value : 0);
        });
        formData.append('actividad_clave', form.get('claveActividad').value);
        formData.append('dificultad_id', form.get('dificultad') ? form.get('dificultad').value : 0);
        formData.append('instruccion', form.get('instruccion').value);
        formData.append('actividad_nombre', form.get('nombreActividad').value);
        formData.append('tipo_actividad_id', form.get('tipoActividad').value);
        formData.append('fecha_inicio', f_inicio);
        formData.append('fecha_fin', f_fin);
        formData.append('modulo_id', id_modulo);
        formData.append('id_rubrica', form.get('idRubrica').value);
        formData.append('zona_horaria', form.get('zonaHoraria').value);
        if (form.get('totalPreguntas')) {
            formData.append('num_total_preguntas', form.get('totalPreguntas').value == true ? form.get('numeroPreguntas').value : '0');
        }
        else {
            formData.append('num_total_preguntas', '0');
        }
        formData.append('num_preguntas_mostrar', "0");
        formData.append('jwt', jwt);
        var fd = new FormData();
        if (id_actividad == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/actividad/crea.php', formData);
        }
        else {
            formData.append('id_actividad', id_actividad);
            return this._httpClient.post(this.url + 'learning/actividad/edita.php', formData);
        }
    };
    ActividadService.prototype.consultaPreguntas = function (id, jwt, tipo) {
        if (tipo === void 0) { tipo = 0; }
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/learning/actividad/consultaPreguntas.php' + params);
    };
    ActividadService.prototype.sumaPonderacion = function (id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + '/learning/asignatura/ponderacionTotal.php' + params);
    };
    ActividadService.prototype.consultaActividadesSQA = function (id, jwt) {
        var params = '?id_asignatura=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/asignatura/consultaActividadSQA.php' + params);
    };
    ActividadService.prototype.reasignaCalificacionActividad = function (id_actividad, tipo_calificacion) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('tipo_calificacion', tipo_calificacion);
        return this._httpClient.post(this.url + '/learning/administracion/reasignaCalificacionActividad.php', formData);
    };
    ActividadService.prototype.eliminaImagen = function (url) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('url', url);
        return this._httpClient.get(this.url + '/extras/archivo/elimina_ckeditor.php', { params: params });
    };
    ActividadService.prototype.consultaActividadesCompletas = function (id_asignatura) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_asignatura', id_asignatura);
        return this._httpClient.get(this.url + '/controlEscolar/asignatura/consultaActividadesCompletas.php', { params: params });
    };
    ActividadService.prototype.cambiaVisto = function (id_actividad, visto) {
        var params = '?id_actividad=' + id_actividad;
        params += '&visible=' + visto;
        return this._httpClient.get(this.url + '/learning/actividad/editaVisible.php' + params);
    };
    ActividadService.prototype.cambiarModulo = function (id_actividad, orden, id_modulo, id_modulo_nuevo) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('orden', orden);
        formData.append('id_modulo', id_modulo);
        formData.append('id_modulo_nuevo', id_modulo_nuevo);
        return this._httpClient.post(this.url + '/learning/actividad/moverModulo.php', formData);
    };
    ActividadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActividadService);
    return ActividadService;
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



/***/ }),

/***/ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CalculoCalificacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoCalificacionRoutingModule", function() { return CalculoCalificacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculo_calificacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculo-calificacion.component */ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _calculo_calificacion_component__WEBPACK_IMPORTED_MODULE_2__["CalculoCalificacionComponent"] }
];
var CalculoCalificacionRoutingModule = /** @class */ (function () {
    function CalculoCalificacionRoutingModule() {
    }
    CalculoCalificacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalculoCalificacionRoutingModule);
    return CalculoCalificacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h4 >{{title}}</h4>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\" *ngIf=\"paso == 1\">\r\n    <div class=\"col-12 alert alert-danger text-center\"  *ngIf=\"!(actividades && actividades.length)\">\r\n      <h4>Importante</h4>\r\n      <p>Antes de realizar el cálculo de calificaciones, es necesario tener actividades y calificaciones cargadas en esta asignatura del grupo</p>\r\n      <button  (click)=\"paso = 2\" class=\"btn btn-success\">Entiendo y deso continuar de todos modos</button>\r\n    </div>\r\n    <div class=\"col-12 \"  *ngIf=\"actividades && actividades.length\">\r\n      <div class=\"alert alert-warning text-center\">\r\n        <h4>Importante</h4>\r\n        <p>Antes de realizar el cálculo de calificaciones, es necesario establecer una <b>suma total de 100% en las actividades</b></p>\r\n      </div>\r\n      <table class=\"table\">\r\n        <thead >\r\n          <tr>\r\n            <td>\r\n              Nombre de la actividad\r\n            </td>\r\n            <td>\r\n              Ponderación (%)\r\n            </td>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr [ngClass]=\"actividad.tipo_actividad_id == '5'? 'alert-info  font-weight-bold':''\" *ngFor=\"let actividad of actividades\">\r\n            <td >\r\n              {{actividad.actividad_nombre}}\r\n            </td>\r\n            <td>\r\n              <input [(ngModel)]=\"actividad.ponderacion\" (keyup)=\"suma()\" class=\"form-control\" [disabled]=\"actividad.tipo == '1' && idRol == 3\">\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr >\r\n            <td></td>\r\n            <td>\r\n              <b>Suma: {{ponderacionTotal}}</b>\r\n              <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"ponderacionTotal != 100 \"  (click)=\"guardarPonderaciones()\" class=\"btn btn-success float-right\">Guardar</button>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n    \r\n  <div class=\"row\" *ngIf=\"paso == 2\">\r\n    <div class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <p>Selecciona el metodo de cálculo</p>\r\n        </div>\r\n        <div class=\"col-4 p-3\">\r\n          <div class=\"alert  text-center\" [ngClass]=\"tipoCalculo == 1 ? 'alert-warning':'alert-secondary'\" style=\"cursor: pointer;\" (click)=\"tipoCalculo = 1\">\r\n            <h4>Revisión parcial</h4>\r\n            <p>Se hace el cálculo de la calificación para alumnos que hayan completado sus actividades al 100%. Los demás alumnos permanecen sin calificación  </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 p-3\">\r\n          <div class=\"alert  text-center\" [ngClass]=\"tipoCalculo == 2 ? 'alert-warning':'alert-secondary'\" style=\"cursor: pointer;\" (click)=\"tipoCalculo = 2\">\r\n            <h4>Revisión Total</h4>\r\n            <p>Se hace el cálculo de la calificación para <b>todos</b> los alumnos en la asignatura, incluidos los que no han completado sus actividades </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 p-3\" >\r\n          <div class=\"alert  text-center\" [ngClass]=\"tipoCalculo == 3 ? 'alert-danger':'alert-secondary'\" style=\"cursor: pointer;\" (click)=\"tipoCalculo = 3\">\r\n            <h4 *ngIf=\"tipo == 1\">Cierre del grupo</h4>\r\n            <h4 *ngIf=\"tipo ==2\">Cierre de la asignatura</h4>\r\n            <p>Realiza el cálculo completo, se guardan las calificaciones en el historial y se cierra        \r\n            <span *ngIf=\"tipo ==1\">el grupo completo</span>\r\n            <span *ngIf=\"tipo ==2\">la asignatura</span>. <b>Está acción solo puede hacerse una vez</b>\r\n              \r\n            \r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button  [disabled]=\"procesando\" type=\"submit\" class=\"btn btn-success float-right\" (click)=\"realizarCalculo()\">\r\n            <i *ngIf=\"procesando\" class=\"fa fa-spin fa-spinner\"></i>\r\n            Realizar cálculo</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"paso == 3\">\r\n    <div class=\"col-12 text-center\">\r\n      <div class=\"alert alert-danger\">\r\n        <p *ngIf=\"tipo == 1\">Grupo cerrado</p>\r\n        <p *ngIf=\"tipo ==2\">Asignatura cerrada</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2dydXBvL2NhbGN1bG8tY2FsaWZpY2FjaW9uL2NhbGN1bG8tY2FsaWZpY2FjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CalculoCalificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoCalificacionComponent", function() { return CalculoCalificacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/asignatura-grupo.service */ "./src/app/administracion/grupo/service/asignatura-grupo.service.ts");
/* harmony import */ var src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/docente/grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _carga_actividades_services_control_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../carga-actividades/services/control-actividad.service */ "./src/app/administracion/carga-actividades/services/control-actividad.service.ts");
/* harmony import */ var _carga_actividades_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../carga-actividades/services/actividad.service */ "./src/app/administracion/carga-actividades/services/actividad.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CalculoCalificacionComponent = /** @class */ (function () {
    function CalculoCalificacionComponent(route, _asignaturaGrupoService, _grupoService, _controlActividadService, _actividadService, _usuarioService, location) {
        this.route = route;
        this._asignaturaGrupoService = _asignaturaGrupoService;
        this._grupoService = _grupoService;
        this._controlActividadService = _controlActividadService;
        this._actividadService = _actividadService;
        this._usuarioService = _usuarioService;
        this.location = location;
        this.procesando = false;
        this.ponderacionTotal = 0;
        this.paso = 0;
        this.tipo = this.route.snapshot.paramMap.get('id2');
    }
    CalculoCalificacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idRol = this._usuarioService.getIdentity().rol_id;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        if (this.tipo == 1) {
            this.idGrupo = this.route.snapshot.paramMap.get('id1');
            this._grupoService.consulta(this.idGrupo).subscribe(function (response) {
                if (response && response['status']) {
                    _this.grupo = response['grupo'][0];
                    _this.paso = 2;
                    _this.title = 'Cálculo de calificaciones y cambio de estatus en el grupo ' + _this.grupo.grupo;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.tipo == 2) {
            this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id1');
            this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(function (response) {
                if (response && response['status']) {
                    _this.asignaturaGrupo = response['grupo'];
                    _this.title = 'Cálculo de calificaciones y cambio de estatus en la asignatura ' + _this.asignaturaGrupo.asignatura;
                    if (_this.asignaturaGrupo.situacion_asignatura_grupo_id == "4")
                        _this.paso = 3;
                    else
                        _this.consulta_ponderacion();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    CalculoCalificacionComponent.prototype.consulta_ponderacion = function () {
        var _this = this;
        this._asignaturaGrupoService.consultaActividades(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response['status']) {
                _this.ponderacionTotal = parseInt(response['ponderacionTotal']);
                _this.paso = 1;
                _this.actividades = response['actividades'];
                _this.suma();
            }
            else {
                _this.paso = 1;
                _this.actividades = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CalculoCalificacionComponent.prototype.suma = function () {
        this.ponderacionTotal = 0;
        this.actividades.forEach(function (actividad) {
            if (Number(actividad.ponderacion)) {
                this.ponderacionTotal += parseFloat(actividad.ponderacion);
            }
        }.bind(this));
    };
    CalculoCalificacionComponent.prototype.guardarPonderaciones = function () {
        var _this = this;
        this._controlActividadService.guardaPonderaciones(this.asignaturaGrupo.asignatura_id, this.actividades, this.idRol).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.paso = 2;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CalculoCalificacionComponent.prototype.realizarCalculo = function () {
        if (!this.tipoCalculo) {
            alertify.error('Debes seleccionar un tipo de cálculo');
        }
        else {
            alertify.confirm('Confirmar acción', '¿Estás seguro de hacer el cálculo?', function () {
                this.procesando = true;
                if (this.tipo == 1) {
                    this.cerrarGrupo();
                }
                else if (this.tipo == 2) {
                    this.cerrarAsignaturaGrupo();
                }
            }.bind(this), function () {
                console.log('cancelar');
            });
        }
    };
    CalculoCalificacionComponent.prototype.cerrarAsignaturaGrupo = function () {
        var _this = this;
        this._asignaturaGrupoService.cerrarMaterias(this.idAsignaturaGrupo, this.tipoCalculo).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.location.back();
            }
            else {
                alertify.error(response['msg']);
            }
            _this.procesando = false;
        }, function (error) {
            console.log(error);
        });
    };
    CalculoCalificacionComponent.prototype.cerrarGrupo = function () {
        var _this = this;
        this._grupoService.cerrarMaterias(this.idGrupo, this.tipoCalculo).subscribe(function (response) {
            _this.procesando = false;
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.location.back();
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    CalculoCalificacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculo-calificacion',
            template: __webpack_require__(/*! ./calculo-calificacion.component.html */ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.html"),
            styles: [__webpack_require__(/*! ./calculo-calificacion.component.scss */ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_2__["AsignaturaGrupoService"],
            src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_3__["GrupoService"],
            _carga_actividades_services_control_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ControlActividadService"],
            _carga_actividades_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__["ActividadService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], CalculoCalificacionComponent);
    return CalculoCalificacionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CalculoCalificacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoCalificacionModule", function() { return CalculoCalificacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calculo_calificacion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculo-calificacion-routing.module */ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion-routing.module.ts");
/* harmony import */ var _calculo_calificacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculo-calificacion.component */ "./src/app/administracion/grupo/calculo-calificacion/calculo-calificacion.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CalculoCalificacionModule = /** @class */ (function () {
    function CalculoCalificacionModule() {
    }
    CalculoCalificacionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_calculo_calificacion_component__WEBPACK_IMPORTED_MODULE_3__["CalculoCalificacionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calculo_calificacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalculoCalificacionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], CalculoCalificacionModule);
    return CalculoCalificacionModule;
}());



/***/ })

}]);
//# sourceMappingURL=calculo-calificacion-calculo-calificacion-module.js.map