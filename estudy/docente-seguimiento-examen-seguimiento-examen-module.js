(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-seguimiento-examen-seguimiento-examen-module"],{

/***/ "./src/app/administracion/asignatura/services/asignatura.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/asignatura/services/asignatura.service.ts ***!
  \**************************************************************************/
/*! exports provided: AsignaturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaService", function() { return AsignaturaService; });
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




var AsignaturaService = /** @class */ (function () {
    function AsignaturaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AsignaturaService.prototype.consultaMateriasPlan = function (id) {
        var params = '?id_plan_estudio=' + id;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaAsignatura.php' + params);
    };
    AsignaturaService.prototype.guardaContenido = function (contenido, id_asignatura) {
        var formData = new FormData();
        formData.append('archivo', contenido);
        formData.append('id_asignatura', id_asignatura);
        return this._httpClient.post(this.url + 'admin/asignaturas/editarContenido.php', formData);
    };
    AsignaturaService.prototype.eliminaContenido = function (contenido, id_asignatura) {
        var formData = new FormData();
        formData.append('url_contenido', contenido);
        formData.append('id_asignatura', id_asignatura);
        return this._httpClient.post(this.url + 'admin/asignaturas/eliminaContenido.php', formData);
    };
    AsignaturaService.prototype.consultaEspecificaAsign = function (jwt, id_asignatura) {
        var params = '?id_asignatura=' + id_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consulta.php' + params);
    };
    AsignaturaService.prototype.excel = function (file, jwt) {
        var formData = new FormData();
        formData.append('excel', file);
        formData.append('columna', '7');
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'extras/consultaexcel.php', formData);
    };
    AsignaturaService.prototype.consulta = function (jwt, id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/asignaturas/consulta.php' + params);
    };
    AsignaturaService.prototype.elimina = function (id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/asignaturas/elimina.php' + params);
    };
    AsignaturaService.prototype.consultaModulo = function (id, tipo, jwt) {
        var params = '?id_asignatura=' + id;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaModulos.php' + params);
    };
    AsignaturaService.prototype.consultaOrden = function (id) {
        var params = '?id_plan_estudio=' + id;
        // params += '&tipo='+tipo;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    AsignaturaService.prototype.insertaPlanOrdenAsignatura = function (id_plan_orden, id_asignatura, Asignatura, origen) {
        var formData = new FormData();
        if (id_plan_orden) {
            formData.append('id_plan_orden', id_plan_orden);
        }
        else {
            formData.append('id_plan_orden', null);
        }
        if (id_asignatura)
            formData.append('id_asignatura', id_asignatura);
        if (Asignatura.get('planEstudio').value) {
            formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        }
        else {
            formData.append('plan_estudio_id', null);
        }
        if (Asignatura.get('gradoAsignatura').value) {
            formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);
        }
        else {
            formData.append('orden_jerarquico_id', null);
        }
        formData.append('origen', origen);
        if (origen == 1 || origen == 2) {
            return this._httpClient.post(this.url + 'admin/asignaturas/insertaPlanOrdenAsignatura.php', formData);
        }
        else if (origen == 3) {
            //nuevo componente de asignatura
            return this._httpClient.post(this.url + 'admin/asignaturas/clonarAsignatura.php', formData);
        }
    };
    AsignaturaService.prototype.modificaAsignatura = function (Asignatura, jwt, id_asignatura) {
        var formData = new FormData();
        //formData.append('carrera', planEstudio.get('carreraAsignatura').value);
        formData.append('asignatura_clave', Asignatura.get('claveAsignatura').value);
        formData.append('asignatura', Asignatura.get('nombreAsignatura').value);
        formData.append('creditos', Asignatura.get('creditosAsignatura').value);
        formData.append('tipo_asignatura_id', Asignatura.get('tipoAsignatura').value);
        formData.append('id_asignatura_padre', Asignatura.get('asignaturaPlan').value);
        // formData.append('orden_jerarquico', Asignatura.get('gradoAsignatura').value);
        // formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        // formData.append('orden_jerarquico', '1');
        // console.log(Asignatura.get('gradoAsignatura').value);
        if (Asignatura.get('planEstudio').value) {
            formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        }
        else {
            formData.append('plan_estudio_id', null);
        }
        if (Asignatura.get('gradoAsignatura').value) {
            formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);
        }
        else {
            formData.append('orden_jerarquico_id', null);
        }
        if (Asignatura.get('califMax').value) {
            formData.append('calif_max', Asignatura.get('califMax').value);
        }
        else {
            formData.append('calif_max', null);
        }
        if (Asignatura.get('califMin').value) {
            formData.append('calif_min', Asignatura.get('califMin').value);
        }
        else {
            formData.append('calif_min', null);
        }
        if (!id_asignatura) {
            return this._httpClient.post(this.url + 'admin/asignaturas/crea.php', formData);
        }
        else {
            formData.append('id_asignatura', id_asignatura);
            return this._httpClient.post(this.url + 'admin/asignaturas/edita.php', formData);
        }
    };
    AsignaturaService.prototype.insertaEditor = function (idAsignatura, columna, tex, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignatura);
        formData.append('columna', columna);
        formData.append('tex', tex);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaPresentacion.php', formData);
    };
    AsignaturaService.prototype.imagen = function (idAsignaturaSelected, imgFile, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignaturaSelected);
        formData.append('imagen', imgFile);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaImagen.php', formData);
    };
    AsignaturaService.prototype.imagenPrevia = function (idAsignaturaSelected, imgFile, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignaturaSelected);
        formData.append('imagen', imgFile);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaImagenPrevia.php', formData);
    };
    AsignaturaService.prototype.consultaAsignaturas = function (id_docente) {
        var params = '?id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/docente/consultaAsignaturas.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturasTroncoComun = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/consultaAsignaturasTronco.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturaGrupo = function (id_orden_asignatura) {
        var params = '?id_orden_asignatura=' + id_orden_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consultaGrupos.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturasAdminDummy = function (id_orden_asignatura) {
        var params = '?id_orden_asignatura=' + id_orden_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/materia/consultaAdministradorDummy.php' + params);
    };
    AsignaturaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AsignaturaService);
    return AsignaturaService;
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



/***/ }),

/***/ "./src/app/docente/seguimiento-examen/seguimiento-examen-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/docente/seguimiento-examen/seguimiento-examen-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SeguimientoExamenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoExamenRoutingModule", function() { return SeguimientoExamenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seguimiento_examen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seguimiento-examen.component */ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _seguimiento_examen_component__WEBPACK_IMPORTED_MODULE_2__["SeguimientoExamenComponent"],
    }
];
var SeguimientoExamenRoutingModule = /** @class */ (function () {
    function SeguimientoExamenRoutingModule() {
    }
    SeguimientoExamenRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SeguimientoExamenRoutingModule);
    return SeguimientoExamenRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/docente/seguimiento-examen/seguimiento-examen.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"idRol == 1\">\r\n  <div class=\"col-md-12\">\r\n    <app-consulta-asignatura [nivel]=\"4\" [tipo]=\"'extra-large'\" (sucessEvent)=\"getAsignatura($event)\"></app-consulta-asignatura>\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-3\">\r\n        <label  class=\"control-label\" ><b>5.Selecciona el grupo</b></label>\r\n        <select [(ngModel)]=\"idAsignaturaGrupo\"  class=\"form-control\" id=\"asignatura_id\"  >\r\n          <option hidden value=\"\" selected>Selecciona una opción</option>\r\n          <option  [value]=\"grupo.asignatura_grupo_id\" *ngFor=\"let grupo of grupos\" >{{grupo.nombre_grupo}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <br>\r\n        <button (click)=\"consultaSeguimiento()\" class=\"btn btn-success\"> Buscar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div *ngIf=\"asignaturaGrupo\" class=\"col-12\">\r\n    <h6> {{asignaturaGrupo.carrera}} - grupo {{asignaturaGrupo.grupo}} <span class=\"badge\" [ngClass]=\"{'badge-danger' : asignaturaGrupo.situacion_asignatura_grupo_id == 4, 'badge-warning' : asignaturaGrupo.situacion_asignatura_grupo_id == 3 || asignaturaGrupo.situacion_asignatura_grupo_id == 2,'badge-success' : asignaturaGrupo.situacion_asignatura_grupo_id == 1}\">{{asignaturaGrupo.situacion_asignatura_grupo_descripcion}}</span></h6>\r\n    <h4 class=\"header-estudy\" style=\"width: auto;\">{{asignaturaGrupo.asignatura}}</h4>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <table *ngIf=\"seguimientos\" class=\"table table-striped table-bordered table-sm\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Matrícula del alumno</th>\r\n        <th>Correo</th>\r\n        <th>Celular</th>\r\n        <th>Inicio del examen</th>\r\n        <th>Preguntas</th>\r\n        <th>respuestas</th>\r\n        <th>Ctrl c</th>\r\n        <th>Ctrl v</th>\r\n        <th>Imprimir pantalla</th>\r\n        <th>Click derecho</th>\r\n        <th class=\"alert-success\">Calificación</th>\r\n        <th >Notas</th>\r\n        <th>Deshabilitar examen</th>\r\n      </tr>\r\n      <!--tr *ngIf=\"(seguimientos | filter: search).length === 0\"-->\r\n      <tr *ngIf=\"seguimientos.length == 0\">\r\n        <td colspan=\"12\" class=\"text-center\">Información no encontrada</td>\r\n      </tr>\r\n      <tr *ngFor=\" let seguimiento of seguimientos; let i = index;\" >\r\n        <td  >{{i+1}}</td>\r\n        <td  >{{seguimiento.clave_alumno}}</td>\r\n        <td style=\"font-size: 12px;\" >{{seguimiento.email}}</td>\r\n        <td  >{{seguimiento.celular}}</td>\r\n        <td class=\"text-center\">{{seguimiento.inicio_examen  | date: \"dd/MM/yyyy hh:mm a\"}}</td>\r\n        <td class=\"text-center\">{{seguimiento.total_preguntas}}</td>\r\n        <td class=\"text-center\">{{seguimiento.reactivos_contestados}}</td>\r\n        <td class=\"text-center\">{{seguimiento.control_c}}</td>\r\n        <td class=\"text-center\">{{seguimiento.control_v}}</td>\r\n        <td class=\"text-center\">{{seguimiento.imp_pt}}</td>\r\n        <td class=\"text-center\">{{seguimiento.click_derecho}}</td>\r\n        <td class=\"text-center\" [ngClass]=\"{'alert-danger': seguimiento.estatus_actividad_id == 6}\" >\r\n          <span *ngIf=\"seguimiento.estatus_actividad_id == 6\"><i class=\"fa fa-times\"></i></span>\r\n          <span *ngIf=\"seguimiento.estatus_actividad_id != 6\">{{seguimiento.calificacion}}</span>\r\n        </td>\r\n        <td class=\"text-center align-middle\">\r\n          <a type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/docente/notas/'+seguimiento.materia_id]\" ><i class=\"fa fa-sticky-note-o\"></i></a>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <button *ngIf=\"seguimiento.materia_fecha_actividad_id\" class=\"btn btn-danger\" (click)=\"deshabilita(seguimiento.materia_fecha_actividad_id, seguimiento.persona_id)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/docente/seguimiento-examen/seguimiento-examen.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.cuadro {\n  margin-left: -25px;\n  border: 0px solid #aaa;\n  background: #f1f2f3;\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 0px;\n  height: 110px; }\n\n@media only screen and (max-width: 768px) {\n  .cuadro {\n    margin-left: 0px;\n    border: 0px solid #aaa;\n    background: #f1f2f3;\n    overflow: auto;\n    box-sizing: border-box;\n    padding: 0px;\n    height: 110px; } }\n\n.cuadro::-webkit-scrollbar {\n  -webkit-appearance: none; }\n\n.cuadro::-webkit-scrollbar:vertical {\n  width: 10px; }\n\n.cuadro::-webkit-scrollbar-button:increment, .cuadro::-webkit-scrollbar-button {\n  display: none; }\n\n.cuadro::-webkit-scrollbar:horizontal {\n  height: 10px; }\n\n.cuadro::-webkit-scrollbar-thumb {\n  background-color: #007bff;\n  border-radius: 20px;\n  border: 2px solid #f1f2f3; }\n\n.cuadro::-webkit-scrollbar-track {\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9zZWd1aW1pZW50by1leGFtZW4vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb2NlbnRlL3NlZ3VpbWllbnRvLWV4YW1lbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcc2Nyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUdEO0VBQ0ksV0FBVTtFQUNWLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZ0JBQWU7RUFHZixvREFBZ0QsRUFDbkQ7O0FBRUQ7RUFDSSwwQkExQmtCO0VBMkJsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQS9Ca0IsRUFnQ3JCOztBQUVEO0VBQ0ksZUFuQ2tCLEVBb0NyQjs7QUFDRDtFQUNJLDBCQXRDa0I7RUF1Q2xCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQ3JERDtFQUNJLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLGVBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFFRDtFQUNFO0lBQ0UsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixvQkFBbUI7SUFDbkIsZUFBYTtJQUNiLHVCQUFzQjtJQUN0QixhQUFZO0lBQ1osY0FBYSxFQUNkLEVBQUE7O0FBR0g7RUFDRSx5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxZQUFVLEVBQ1g7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvc2VndWltaWVudG8tZXhhbWVuL3NlZ3VpbWllbnRvLWV4YW1lbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIi5jdWFkcm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2FhYTtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYyZjM7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jdWFkcm8ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjYWFhO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMmYzO1xyXG4gICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB9IFxyXG4gICAgfSAgXHJcblxyXG4gIC5jdWFkcm86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmN1YWRybzo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1YWRybzo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmluY3JlbWVudCwuY3VhZHJvOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9IFxyXG4gIFxyXG4gIC5jdWFkcm86Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY3VhZHJvOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWYyZjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdWFkcm86Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcclxuICB9XHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/docente/seguimiento-examen/seguimiento-examen.component.ts ***!
  \****************************************************************************/
/*! exports provided: SeguimientoExamenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoExamenComponent", function() { return SeguimientoExamenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_seguimiento_examen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/seguimiento-examen.service */ "./src/app/docente/seguimiento-examen/services/seguimiento-examen.service.ts");
/* harmony import */ var src_app_docente_retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/docente/retroalimentacion/services/retroalimentacion.service */ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts");
/* harmony import */ var _administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../administracion/asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeguimientoExamenComponent = /** @class */ (function () {
    function SeguimientoExamenComponent(_usuarioService, _seguimientoExamenService, _retroalimentacionService, _asignaturaService, _grupoService, _route) {
        this._usuarioService = _usuarioService;
        this._seguimientoExamenService = _seguimientoExamenService;
        this._retroalimentacionService = _retroalimentacionService;
        this._asignaturaService = _asignaturaService;
        this._grupoService = _grupoService;
        this._route = _route;
        this.idAsignaturaGrupo = '';
    }
    SeguimientoExamenComponent.prototype.ngOnInit = function () {
        this.idRol = this._usuarioService.getIdentity().rol_id;
        if (this.idRol == '3') {
            this.idAsignaturaGrupo = this._route.snapshot.params['id'];
            this.consultaSeguimiento();
        }
        else if (this.idRol == '1') {
        }
    };
    SeguimientoExamenComponent.prototype.getAsignatura = function (event) {
        var _this = this;
        if (event.idOrdenAsignatura) {
            var idOrdenAsignatura = event.idOrdenAsignatura;
            this._asignaturaService.consultaAsignaturaGrupo(idOrdenAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    _this.grupos = response['grupos'];
                }
                else {
                    _this.grupos = null;
                }
            }, function (error) {
                console.log(error);
            });
        }
        /*if (this.idOrdenAsignatura) {
          this.consultaSeguimiento();
        }*/
    };
    SeguimientoExamenComponent.prototype.consultaSeguimiento = function () {
        var _this = this;
        this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['grupo']) {
                _this.asignaturaGrupo = response['grupo'];
            }
        }, function (error) {
            console.log(error);
        });
        this._seguimientoExamenService.seguimiento(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.seguimientos = response['seguimiento'];
                _this.seguimientos.forEach(function (seguimiento) {
                    if (seguimiento.inicio_examen)
                        seguimiento.inicio_examen = new Date(seguimiento.inicio_examen * 1000);
                });
            }
            else {
                _this.seguimientos = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    SeguimientoExamenComponent.prototype.deshabilita = function (materia_fecha_actividad_id, persona_id) {
        alertify.confirm('', '¿Deseas deshabilitar el examen de este alumno?', function () {
            var _this = this;
            this._retroalimentacionService.invalidacionActividad(materia_fecha_actividad_id, persona_id, '', '', '').subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.consultaSeguimiento();
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    SeguimientoExamenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seguimiento-examen',
            template: __webpack_require__(/*! ./seguimiento-examen.component.html */ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.html"),
            styles: [__webpack_require__(/*! ./seguimiento-examen.component.scss */ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_seguimiento_examen_service__WEBPACK_IMPORTED_MODULE_2__["SeguimientoExamenService"],
            src_app_docente_retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_3__["RetroalimentacionService"],
            _administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_4__["AsignaturaService"],
            _grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_6__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SeguimientoExamenComponent);
    return SeguimientoExamenComponent;
}());



/***/ }),

/***/ "./src/app/docente/seguimiento-examen/seguimiento-examen.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/docente/seguimiento-examen/seguimiento-examen.module.ts ***!
  \*************************************************************************/
/*! exports provided: SeguimientoExamenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoExamenModule", function() { return SeguimientoExamenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _seguimiento_examen_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seguimiento-examen-routing.module */ "./src/app/docente/seguimiento-examen/seguimiento-examen-routing.module.ts");
/* harmony import */ var _seguimiento_examen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seguimiento-examen.component */ "./src/app/docente/seguimiento-examen/seguimiento-examen.component.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SeguimientoExamenModule = /** @class */ (function () {
    function SeguimientoExamenModule() {
    }
    SeguimientoExamenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_seguimiento_examen_component__WEBPACK_IMPORTED_MODULE_3__["SeguimientoExamenComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _seguimiento_examen_routing_module__WEBPACK_IMPORTED_MODULE_2__["SeguimientoExamenRoutingModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__["ConsultaAsignaturaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], SeguimientoExamenModule);
    return SeguimientoExamenModule;
}());



/***/ }),

/***/ "./src/app/docente/seguimiento-examen/services/seguimiento-examen.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/docente/seguimiento-examen/services/seguimiento-examen.service.ts ***!
  \***********************************************************************************/
/*! exports provided: SeguimientoExamenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoExamenService", function() { return SeguimientoExamenService; });
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




var SeguimientoExamenService = /** @class */ (function () {
    function SeguimientoExamenService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    SeguimientoExamenService.prototype.seguimiento = function (id_asignatura_grupo) {
        var params = '?id_asignatura_grupo=' + id_asignatura_grupo;
        return this._httpClient.get(this.url + 'learning/seguimientoActividad/seguimientoExamen.php' + params);
    };
    SeguimientoExamenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SeguimientoExamenService);
    return SeguimientoExamenService;
}());



/***/ })

}]);
//# sourceMappingURL=docente-seguimiento-examen-seguimiento-examen-module.js.map