(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/administracion/admin-expediente/admin-expediente.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/admin-expediente/admin-expediente.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminExpedienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExpedienteService", function() { return AdminExpedienteService; });
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




var AdminExpedienteService = /** @class */ (function () {
    function AdminExpedienteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AdminExpedienteService.prototype.catalogos = function () {
        return this._httpClient.get(this.url + '/catalogoSG/documento.php');
    };
    AdminExpedienteService.prototype.alerts = function () {
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/pendientes.php');
    };
    AdminExpedienteService.prototype.consulta = function (idTipoBusqueda, idDocumento) {
        var params = '?tipo_busqueda=' + idTipoBusqueda;
        params += '&id_documento=' + idDocumento;
        return this._httpClient.get(this.url + '/controlEscolar/expediente/consultaExpediente.php' + params);
    };
    AdminExpedienteService.prototype.consultaDocumentoEtiquetas = function (id_documento) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_documento', id_documento);
        return this._httpClient.get(this.url + '/controlEscolar/documentos/documentoEtiquetas.php', { params: params });
    };
    AdminExpedienteService.prototype.guardarEtiquetasDocumento = function (etiquetas, id_documento) {
        var formData = new FormData();
        formData.append('id_documento', id_documento);
        etiquetas.forEach(function (etiqueta) {
            formData.append('id_etiquetas[]', etiqueta.id_etiqueta);
        });
        return this._httpClient.post(this.url + 'controlEscolar/documentos/crearEtiquetasDocumento.php', formData);
    };
    AdminExpedienteService.prototype.guardarCarrerasDocumento = function (carreras, id_documento) {
        var formData = new FormData();
        formData.append('id_documento', id_documento);
        carreras.forEach(function (carrera) {
            formData.append('id_carreras[]', carrera.id_carrera);
        });
        return this._httpClient.post(this.url + 'controlEscolar/documentos/crearCarrerasDocumento.php', formData);
    };
    AdminExpedienteService.prototype.consultaDocumentoCarreras = function (id_documento) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_documento', id_documento);
        return this._httpClient.get(this.url + '/controlEscolar/documentos/documentoCarreras.php', { params: params });
    };
    AdminExpedienteService.prototype.eliminarDocumento = function (id_documento) {
        var formData = new FormData();
        formData.append('id_documento', id_documento);
        return this._httpClient.post(this.url + 'controlEscolar/documentos/eliminarDocumento.php', formData);
    };
    AdminExpedienteService.prototype.catalogoEtiquetas = function () {
        return this._httpClient.get(this.url + '/controlEscolar/documentos/catalogoEtiquetas.php');
    };
    AdminExpedienteService.prototype.consultaEtiqueta = function (id_etiqueta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_etiqueta', id_etiqueta);
        return this._httpClient.get(this.url + '/controlEscolar/documentos/consultaEtiqueta.php', { params: params });
    };
    AdminExpedienteService.prototype.modificaEtiqueta = function (form, id_etiqueta) {
        var formData = new FormData();
        if (id_etiqueta)
            formData.append('id_etiqueta', id_etiqueta);
        formData.append('clave_etiqueta', form.clave);
        formData.append('nombre', form.nombre);
        formData.append('descripcion', form.descripcion);
        return this._httpClient.post(this.url + 'controlEscolar/documentos/modificaEtiqueta.php', formData);
    };
    AdminExpedienteService.prototype.eliminarEtiqueta = function (id_etiqueta) {
        var formData = new FormData();
        formData.append('id_etiqueta', id_etiqueta);
        return this._httpClient.post(this.url + 'controlEscolar/documentos/eliminarEtiqueta.php', formData);
    };
    AdminExpedienteService.prototype.modificaDocumento = function (form, id_documento) {
        var formData = new FormData();
        if (id_documento)
            formData.append('id_documento', id_documento);
        formData.append('nombre', form.nombre_documento);
        formData.append('descripcion', form.documento_desc);
        formData.append('obligatorio', form.obligatorio);
        return this._httpClient.post(this.url + 'controlEscolar/documentos/modificaDocumento.php', formData);
    };
    AdminExpedienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminExpedienteService);
    return AdminExpedienteService;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/alumno/materias-alumnos/materias-alumnos.service.ts ***!
  \************************************************************************************/
/*! exports provided: MateriasAlumnosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasAlumnosService", function() { return MateriasAlumnosService; });
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




var MateriasAlumnosService = /** @class */ (function () {
    function MateriasAlumnosService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    MateriasAlumnosService.prototype.cambiaEstatusMaterias = function (id_materia, id_estatus) {
        var params = '?id_estatus=' + id_estatus;
        params += '&id_materia=' + id_materia;
        return this._httpClient.get(this.url + 'learning/asignatura/cambiaEstatusAsignatura.php' + params);
    };
    MateriasAlumnosService.prototype.consultaMaterias = function (id_alumno, tipo) {
        var params = '?id_alumno=' + id_alumno;
        params += '&activas=' + tipo;
        return this._httpClient.get(this.url + 'learning/alumno/consultaMaterias.php' + params);
    };
    MateriasAlumnosService.prototype.reiniciarMateria = function (materia_id) {
        var params = '?id_materia=' + materia_id;
        return this._httpClient.get(this.url + 'controlEscolar/materia/eliminaActividades.php' + params);
    };
    MateriasAlumnosService.prototype.eliminaMateria = function (materia_id, grupo_id) {
        var params = '?materia_id=' + materia_id;
        return this._httpClient.get(this.url + 'controlEscolar/alumno/eliminaMaterias.php' + params);
    };
    MateriasAlumnosService.prototype.consultaGrupo = function (idOrdenAsignatura) {
        var params = '?id_orden_asignatura=' + idOrdenAsignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consultaGrupos.php' + params);
    };
    MateriasAlumnosService.prototype.agregaMateria = function (id_alumno, asignatura_grupo_id) {
        var formData = new FormData();
        formData.append('alumno_id', id_alumno);
        formData.append('asignatura_grupo_id', asignatura_grupo_id);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/alumno/agregaMateria.php', formData);
    };
    MateriasAlumnosService.prototype.agregaMateriaDocente = function (id_docente, asignatura_grupo_id) {
        var formData = new FormData();
        formData.append('id_docente', id_docente);
        formData.append('id_asignatura_grupo', asignatura_grupo_id);
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/agregaDocente.php', formData);
    };
    MateriasAlumnosService.prototype.eliminaAsignaturaDocente = function (id_docente, asignatura_grupo_id) {
        var formData = new FormData();
        formData.append('id_docente', id_docente);
        formData.append('id_asignatura_grupo', asignatura_grupo_id);
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/eliminaDocente.php', formData);
    };
    MateriasAlumnosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MateriasAlumnosService);
    return MateriasAlumnosService;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/services/arrastable.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/arrastable.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ArrastableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrastableService", function() { return ArrastableService; });
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




var ArrastableService = /** @class */ (function () {
    function ArrastableService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ArrastableService.prototype.consultaDragDrop = function (id, jwt, idMateriaFechaActividad) {
        var params = '?id_pregunta=' + id;
        params += '&jwt=' + jwt;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        return this._httpClient.get(this.url + 'learning/reactivoDragDrop/consultaAleatorio.php' + params);
    };
    ArrastableService.prototype.consultaRespuestas = function (id, jwt, idMateriaFechaActividad) {
        var params = '?id_pregunta=' + id;
        params += '&jwt=' + jwt;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        return this._httpClient.get(this.url + 'learning/reactivoDragDrop/consultaPregunta.php' + params);
    };
    ArrastableService.prototype.modificaDragDrop = function (form, id, jwt) {
        var formData = new FormData();
        var items = form.get('items');
        // formData.append('reactivo_desc', form.get('reactivo_desc').value);
        formData.append('id_pregunta', id);
        items.value.forEach(function (item) {
            console.log(item);
            formData.append('reactivo_desc[]', item.reactivo_desc);
        });
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/reactivoDragDrop/crea.php', formData);
    };
    ArrastableService.prototype.modificaRespuestas = function (reactivos, id, idMateriaFechaActividad, jwt) {
        var formData = new FormData();
        // formData.append('reactivo_desc', form.get('reactivo_desc').value);
        formData.append('id_respuesta', id);
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        // reactivos.value.forEach(item => {
        //   console.log(item);
        //   formData.append('id_reactivo[]', item.id_reactivo);
        // });
        reactivos.forEach(function (reactivos) {
            console.log(reactivos.reactivo_id);
            formData.append('id_reactivo[]', reactivos.reactivo_id);
        });
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/respuestaDragDrop/crea.php', formData);
    };
    ArrastableService.prototype.modificaOrden = function (id_respuesta, orden_nuevo, id_pregunta, id_materia_fecha_actividad, jwt) {
        var formData = new FormData();
        formData.append('id_respuesta', id_respuesta);
        formData.append('id_pregunta', id_pregunta);
        formData.append('orden_nuevo', orden_nuevo);
        formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/respuestaDragDrop/orden.php', formData);
    };
    ArrastableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArrastableService);
    return ArrastableService;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/services/multiple.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/multiple.service.ts ***!
  \*******************************************************************************/
/*! exports provided: MultipleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleService", function() { return MultipleService; });
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




var MultipleService = /** @class */ (function () {
    function MultipleService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    MultipleService.prototype.consultaMultiple = function (id_pregunta, jwt, id_materia_fecha_actividad) {
        var params = '?id_pregunta=' + id_pregunta;
        params += '&jwt=' + jwt;
        if (id_materia_fecha_actividad) {
            params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        }
        return this._httpClient.get(this.url + 'learning/reactivoMultiple/consultaPregunta.php' + params);
    };
    MultipleService.prototype.consultaRespuestas = function (id_pregunta, id_materia_fecha_actividad, intentos_restantes, aleatorio) {
        var params = '?id_pregunta=' + id_pregunta;
        params += '&aleatorio=' + aleatorio;
        if (id_materia_fecha_actividad) {
            params += '&intentos_restantes=' + intentos_restantes;
            params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        }
        return this._httpClient.get(this.url + 'learning/reactivoMultiple/consultaRespuestas.php' + params);
    };
    MultipleService.prototype.elimina = function (id, jwt) {
        var params = '?reactivo_id=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/reactivoMultiple/elimina.php' + params);
    };
    MultipleService.prototype.modificaMultiple = function (form, id_pregunta, jwt) {
        var formData = new FormData;
        form.get('items')['controls'].forEach(function (_form) {
            var ponderacion = _form.get('ponderacion').value ? "100" : "0";
            formData.append('ponderacion[]', ponderacion);
            formData.append('reactivo[]', _form.get('respuesta').value);
            formData.append('retroalimentacion[]', _form.get('retroalimentacion').value);
        });
        formData.append('id_pregunta', id_pregunta);
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/reactivoMultiple/crea.php', formData);
    };
    MultipleService.prototype.modificaMultipleImagen = function (form, id_pregunta, jwt) {
        var idReactivo = form.get('idReactivo').value;
        var formData = new FormData();
        var ponderacion = form.get('ponderacion').value ? "100" : "0";
        console.log(form);
        formData.append('ponderacion', ponderacion);
        formData.append('retroalimentacion', form.get('retroalimentacion').value);
        formData.append('imagen', form.get('imagen').value);
        formData.append('id_pregunta', id_pregunta);
        formData.append('jwt', jwt);
        var fd = new FormData();
        if (!idReactivo) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/reactivoMultipleImagen/crea.php', formData);
        }
        else {
            formData.append('id_reactivo', idReactivo);
            return this._httpClient.post(this.url + 'learning/reactivoMultipleImagen/edita.php', formData);
        }
    };
    MultipleService.prototype.guardaRespuesta = function (idReactivo, idPregunta, id_materia_fecha_actividad, jwt) {
        var formData = new FormData();
        formData.append('id_reactivo', idReactivo);
        formData.append('id_pregunta', idPregunta);
        formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/respuestaMultiple/crea.php', formData);
    };
    MultipleService.prototype.eliminaMultiple = function (idPregunta, id_materia_fecha_actividad, jwt) {
        var params = '?id_pregunta=' + idPregunta;
        params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaMultiple/eliminaMultiple.php' + params);
    };
    MultipleService.prototype.eliminaRespuesta = function (idReactivo, id_materia_fecha_actividad, jwt) {
        var params = '?id_reactivo=' + idReactivo;
        params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaMultiple/elimina.php' + params);
    };
    MultipleService.prototype.consultaMateria = function (jwt, id_pregunta) {
        var params = '?jwt=' + jwt;
        params += '&pregunta_id=' + id_pregunta;
        return this._httpClient.get(this.url + 'learning/reactivoMultiple/consultaMateria.php' + params);
    };
    MultipleService.prototype.editaReactivoTexto = function (jwt, data) {
        var ponderacion = data.ponderacion ? "100" : "0";
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('reactivo', data.respuesta);
        formData.append('ponderacion', ponderacion);
        formData.append('retroalimentacion', data.retroalimentacion);
        formData.append('id_reactivo', data.idReactivo);
        return this._httpClient.post(this.url + 'learning/reactivoMultiple/edita.php', formData);
    };
    MultipleService.prototype.reasignaCalificacionPreguntaOM = function (id_pregunta, id_actividad) {
        var formData = new FormData();
        formData.append('id_pregunta', id_pregunta);
        formData.append('id_actividad', id_actividad);
        return this._httpClient.post(this.url + 'learning/administracion/reasignaCalificacionPreguntaOM.php', formData);
    };
    MultipleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MultipleService);
    return MultipleService;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/services/relacion.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/relacion.service.ts ***!
  \*******************************************************************************/
/*! exports provided: RelacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelacionService", function() { return RelacionService; });
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




var RelacionService = /** @class */ (function () {
    function RelacionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    RelacionService.prototype.consultaRelacion = function (id, jwt, idMateriaFechaActividad) {
        if (idMateriaFechaActividad === void 0) { idMateriaFechaActividad = 0; }
        var params = '?id_pregunta=' + id;
        if (idMateriaFechaActividad)
            params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/reactivoRelacion/consultaPregunta.php' + params);
    };
    RelacionService.prototype.consultaRelacionAleatoria = function (id, jwt, idMateriaFechaActividad) {
        var params = '?id_pregunta=' + id;
        if (idMateriaFechaActividad) {
            params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        }
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/reactivoRelacion/consultaAleatorio.php' + params);
    };
    RelacionService.prototype.modificaRelacion = function (form, id, jwt) {
        var formData = new FormData();
        console.log(form);
        var items = form.get('items');
        console.log(items.value);
        formData.append('id_pregunta', id);
        items.value.forEach(function (item) {
            console.log(item);
            formData.append('columna_a_respuesta[]', item.columna_a);
            formData.append('columna_b_respuesta[]', item.columna_b);
        });
        formData.append('ponderacion', '1');
        // formData.append('modulo_id', id_modulo);
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'learning/reactivoRelacion/crea.php', formData);
    };
    RelacionService.prototype.guardarRelacionColumnas = function (form, idMateriaFechaActividad, jwt) {
        var formData = new FormData();
        formData.append('id_reactivo', form.id_rectivo);
        formData.append('id_a_columna', form.id_a_columna);
        formData.append('id_b_columna', form.id_b_columna);
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/respuestaRelacion/crea.php', formData);
    };
    RelacionService.prototype.eliminaRespuestas = function (id_pregunta, idMateriaFechaActividad, jwt) {
        var params = '?id_pregunta=' + id_pregunta;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaRelacion/elimina.php' + params);
    };
    RelacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RelacionService);
    return RelacionService;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/services/zona-imagenes.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/zona-imagenes.service.ts ***!
  \************************************************************************************/
/*! exports provided: ZonaImagenesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonaImagenesService", function() { return ZonaImagenesService; });
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




var ZonaImagenesService = /** @class */ (function () {
    function ZonaImagenesService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ZonaImagenesService.prototype.consultaZonaImagenes = function (id_pregunta, jwt, idMateriaFechaActividad) {
        var params = '?id_pregunta=' + id_pregunta;
        if (idMateriaFechaActividad != 0) {
            params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        }
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/reactivoZonaImagenes/consultaPregunta.php' + params);
    };
    ZonaImagenesService.prototype.modificaZona = function (form, ancho, alto, idPregunta, jwt) {
        var formData = new FormData();
        var items = form.get('items');
        formData.append('imagen_ancho', ancho);
        formData.append('imagen_alto', alto);
        if (form.get('imagen').value) {
            formData.append('imagen', form.get('imagen').value);
        }
        items.value.forEach(function (item) {
            formData.append('reactivo_desc[]', item.input);
            formData.append('ancho[]', item.ancho);
            formData.append('alto[]', item.alto);
            formData.append('posicion_x[]', item.posX);
            formData.append('posicion_y[]', item.posY);
            formData.append('color[]', item.color);
        });
        formData.append('id_pregunta', idPregunta);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/reactivoZonaImagenes/crea.php', formData);
    };
    ZonaImagenesService.prototype.guardaRespuestas = function (form, idMateriaFechaActividad, jwt) {
        var formData = new FormData();
        formData.append('id_reactivo', form.id_reactivo);
        formData.append('posicion_x', form.posicion_x);
        formData.append('posicion_y', form.posicion_y);
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/respuestaZonaImagen/crea.php', formData);
    };
    ZonaImagenesService.prototype.eliminaRespuestas = function (id_pregunta, idMateriaFechaActividad, jwt) {
        var params = '?id_pregunta=' + id_pregunta;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaZonaImagen/elimina.php' + params);
    };
    ZonaImagenesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ZonaImagenesService);
    return ZonaImagenesService;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/service/asignatura-grupo.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/grupo/service/asignatura-grupo.service.ts ***!
  \**************************************************************************/
/*! exports provided: AsignaturaGrupoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaGrupoService", function() { return AsignaturaGrupoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var AsignaturaGrupoService = /** @class */ (function () {
    function AsignaturaGrupoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AsignaturaGrupoService.prototype.cambiaTipoMateria = function (tipo_materia_id, materia_id) {
        var params = '?tipo_materia_id=' + tipo_materia_id;
        params += '&materia_id=' + materia_id;
        return this._httpClient.get(this.url + 'learning/alumno/editaTipoMateriaGrupo.php' + params);
    };
    AsignaturaGrupoService.prototype.consulta = function (id) {
        var params = '?id_asignatura_grupo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consulta.php' + params);
    };
    AsignaturaGrupoService.prototype.actualizaFechas = function (jwt, fechas, id) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('fecha_inicio', fechas.get('fechaInicio').value);
        formData.append('fecha_fin', fechas.get('fechaFin').value);
        formData.append('id_asignatura_grupo', id);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/edita.php', formData);
    };
    AsignaturaGrupoService.prototype.consultaTipoMaterias = function () {
        return this._httpClient.get(this.url + '/catalogosLE/tipoMateria.php');
    };
    AsignaturaGrupoService.prototype.consultaAlumnos = function (jwt, idAsignaturaGrupo) {
        var params = '?jwt=' + jwt;
        params += '&id_asignatura_grupo=' + idAsignaturaGrupo;
        return this._httpClient.get(this.url + '/controlEscolar/asignaturaGrupo/consultaAlumnos.php' + params);
    };
    AsignaturaGrupoService.prototype.consultaReprobados = function (jwt, idAsignaturaGrupo) {
        var params = '?jwt=' + jwt;
        params += '&id_asignatura_grupo=' + idAsignaturaGrupo;
        return this._httpClient.get(this.url + '/controlEscolar/asignaturaGrupo/consultaAlumnos.php' + params);
    };
    AsignaturaGrupoService.prototype.eliminaAlumno = function (jwt, id_persona, idAsignaturaGrupo) {
        var params = '?jwt=' + jwt;
        params += '&id_alumno=' + id_persona;
        params += '&id_asignatura_grupo=' + idAsignaturaGrupo;
        return this._httpClient.get(this.url + '/controlEscolar/asignaturaGrupo/eliminaAlumno.php' + params);
    };
    AsignaturaGrupoService.prototype.insertaAlumno = function (alumno, idAsignaturaGrupo, idTipoMateria) {
        var formData = new FormData();
        ;
        formData.append('id_alumno', alumno.persona_id);
        formData.append('id_asignatura_grupo', idAsignaturaGrupo);
        formData.append('id_tipo_materia', idTipoMateria);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/agregaAlumno.php', formData);
    };
    AsignaturaGrupoService.prototype.consultaActividades = function (idAsignaturaGrupo) {
        var params = '?id_asignatura_grupo=' + idAsignaturaGrupo;
        return this._httpClient.get(this.url + '/controlEscolar/asignaturaGrupo/consultaActividades.php' + params);
    };
    AsignaturaGrupoService.prototype.cerrarMaterias = function (idAsignaturaGrupo, tipoCalculo) {
        var formData = new FormData();
        formData.append('id_asignatura_grupo', idAsignaturaGrupo);
        formData.append('revision', tipoCalculo);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/calificaMaterias.php', formData);
    };
    AsignaturaGrupoService.prototype.guardarReprobados = function (alumnosReprobados, idAsignaturaGrupo) {
        var formData = new FormData();
        formData.append('asignatura_grupo_id', idAsignaturaGrupo);
        formData.append('id_tipo_materia', '2');
        alumnosReprobados.forEach(function (reprobado) {
            if (reprobado.selected) {
                formData.append('alumno_id[]', reprobado.alumno_id);
            }
        }.bind(this));
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/agregaAlumnosMultiple.php', formData);
    };
    AsignaturaGrupoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AsignaturaGrupoService);
    return AsignaturaGrupoService;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/service/grupo.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/grupo/service/grupo.service.ts ***!
  \***************************************************************/
/*! exports provided: GrupoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoService", function() { return GrupoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var GrupoService = /** @class */ (function () {
    function GrupoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    GrupoService.prototype.consultaGrupo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/catalogosCE/grupo.php' + params);
    };
    GrupoService.prototype.consultaAlumnosGrupo = function (id, jwt) {
        var params = '?id_grupo=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/grupo/consultaAlumnosRegulares.php' + params);
    };
    GrupoService.prototype.consultaCiclo = function (jwt) {
        return this._httpClient.get(this.url + '/catalogosCE/ciclo.php');
    };
    GrupoService.prototype.consultaEspecifica = function (id, jwt) {
        var params = '?id_grupo=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/grupo/consulta.php' + params);
    };
    GrupoService.prototype.consultaAsignatura = function (id, jwt) {
        var params = '?id_grupo=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/grupo/consultaAsignaturas.php' + params);
    };
    GrupoService.prototype.consultaDocenteAsignatura = function (id_asignatura_grupo, jwt) {
        var params = '?id_asignatura_grupo=' + id_asignatura_grupo;
        return this._httpClient.get(this.url + '/controlEscolar/asignaturaGrupo/consultaDocente.php' + params);
    };
    GrupoService.prototype.elimina = function (id, jwt) {
        var params = '?id_grupo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/grupo/elimina.php' + params);
    };
    GrupoService.prototype.modificaGrupo = function (grupo, jwt, id_grupo) {
        var formData = new FormData();
        formData.append('grupo', grupo.get('claveGrupo').value);
        formData.append('nombre_grupo', grupo.get('nombreGrupo').value);
        formData.append('descripcion', grupo.get('descripcion').value);
        formData.append('cupo', grupo.get('cupo').value);
        formData.append('id_ciclo', grupo.get('idCiclo').value);
        formData.append('id_plan_orden', grupo.get('plan_orden_id').value);
        formData.append('id_campus', grupo.get('campus').value);
        var fd = new FormData();
        if (id_grupo == null) { // INSERTA UN NUEVO REGISTRO
            grupo.get('alumnos')['controls'].forEach(function (alumno) {
                if (alumno.get('idAlumno').value) {
                    formData.append('alumno_id[]', alumno.get('idAlumno').value);
                }
            });
            grupo.get('asignaturas')['controls'].forEach(function (asignatura) {
                if (asignatura.get('idOrdenAsignatura').value != false) {
                    formData.append('orden_asignatura_id[]', asignatura.get('idOrdenAsignatura').value);
                }
            });
            if (grupo.get('completo').value) {
                return this._httpClient.post(this.url + 'controlEscolar/grupo/creaCompleto.php', formData);
            }
            else {
                return this._httpClient.post(this.url + 'controlEscolar/grupo/crea.php', formData);
            }
        }
        else {
            formData.append('id_grupo', id_grupo);
            formData.append('id_situacion_grupo', '1');
            return this._httpClient.post(this.url + 'controlEscolar/grupo/edita.php', formData);
        }
    };
    GrupoService.prototype.agregaGrupoAsignatura = function (id_orden_asignatura, id_grupo, jwt) {
        var formData = new FormData();
        formData.append('id_grupo', id_grupo);
        formData.append('id_orden_asignatura', id_orden_asignatura);
        return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaAsignatura.php', formData);
    };
    GrupoService.prototype.agregaAsignaturaDocente = function (id_asignatura_grupo, id_docente, jwt) {
        var formData = new FormData();
        formData.append('id_docente', id_docente);
        formData.append('id_asignatura_grupo', id_asignatura_grupo);
        return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/agregaDocente.php', formData);
    };
    GrupoService.prototype.tranfiereGrupo = function (form, id_grupo, tipoForm) {
        var formData = new FormData();
        formData.append('id_ciclo', form.get('ciclo').value);
        formData.append('id_grupo', id_grupo);
        if (form.get('validacionReprobadas').value == 1) {
            formData.append('materia_aceptadas', '99');
        }
        else {
            formData.append('materia_aceptadas', form.get('numMateria').value);
        }
        if (tipoForm == 1) {
            formData.append('nombre_grupo', form.get('nombre').value);
            formData.append('grupo_clave', form.get('clave').value);
        }
        return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaGrupo.php', formData);
    };
    GrupoService.prototype.agregaAlumnoGrupo = function (id_alumno, id_grupo, jwt) {
        var formData = new FormData();
        formData.append('id_grupo', id_grupo);
        formData.append('id_alumno', id_alumno);
        return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaAlumno.php', formData);
    };
    GrupoService.prototype.eliminaGrupoAsignatura = function (id, jwt) {
        var params = '?id_asignatura_grupo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/grupo/eliminaAsignatura.php' + params);
    };
    GrupoService.prototype.eliminaAlumnoGrupo = function (id_alumno, id_grupo, jwt) {
        var params = '?id_alumno=' + id_alumno;
        params += '&id_grupo=' + id_grupo;
        return this._httpClient.get(this.url + 'controlEscolar/grupo/eliminaAlumno.php' + params);
    };
    GrupoService.prototype.consultaGrupoFiltro = function (tipo, filtro) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('tipo', tipo).set('filtro', filtro);
        return this._httpClient.get(this.url + 'controlEscolar/grupo/filtro.php', { params: params });
    };
    GrupoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GrupoService);
    return GrupoService;
}());



/***/ }),

/***/ "./src/app/asesor/services/asesor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/asesor/services/asesor.service.ts ***!
  \***************************************************/
/*! exports provided: AsesorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorService", function() { return AsesorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsesorService = /** @class */ (function () {
    function AsesorService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    AsesorService.prototype.consultaAspirantes = function () {
        return this._httpClient.get(this.url + 'asesor/aspirante/consultaAspirante.php');
    };
    AsesorService.prototype.editaEstatusAspirante = function (id_aspirante, situacion_aspirante_id) {
        var formData = new FormData();
        formData.append('aspirante_id', id_aspirante);
        formData.append('situacion_aspirante_id', situacion_aspirante_id);
        return this._httpClient.post(this.url + 'seguimiento/aspirante/editaEstatus.php', formData);
    };
    AsesorService.prototype.editaCarrera = function (aspirante_id, carrera_id) {
        var params = '?id_aspirante=' + aspirante_id;
        params += '&id_carrera=' + carrera_id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/modificaCarrera.php' + params);
    };
    AsesorService.prototype.eliminaAspirante = function (id) {
        var params = '?aspirante_id=' + id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/elimina.php' + params);
    };
    AsesorService.prototype.consultaAlumnos = function () {
        return this._httpClient.get(this.url + 'asesor/alumno/consultaAlumno.php');
    };
    AsesorService.prototype.consultaPrivilegiosAsesor = function () {
        return this._httpClient.get(this.url + 'general/asesor/consultaPrivilegios.php');
    };
    AsesorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AsesorService);
    return AsesorService;
}());



/***/ }),

/***/ "./src/app/components/avisos/avisos.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/avisos/avisos.service.ts ***!
  \*****************************************************/
/*! exports provided: AvisosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosService", function() { return AvisosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvisosService = /** @class */ (function () {
    function AvisosService(_httpClient) {
        this._httpClient = _httpClient;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
    }
    AvisosService.prototype.cambiaAvisoEstatus = function (aviso_id) {
        this.change.emit(aviso_id);
    };
    AvisosService.prototype.consulta = function (nuevos, idAsignaturaGrupo, idRol) {
        var params = '?nuevos=' + nuevos;
        if (idAsignaturaGrupo)
            params += '&id_asignatura_grupo=' + idAsignaturaGrupo;
        if (idRol == "3") {
            return this._httpClient.get(this.url + '/controlEscolar/docente/consultaAvisos.php' + params);
        }
        else if (idRol == "2" || idRol == "4") {
            return this._httpClient.get(this.url + '/learning/alumno/consultaAvisos.php' + params);
        }
    };
    AvisosService.prototype.marcarAvisos = function (id_aviso, tipo, visto) {
        var formData = new FormData();
        if (tipo == 1) {
            formData.append('id_avisos_grupo', id_aviso);
            formData.append('visto', visto);
            return this._httpClient.post(this.url + 'controlEscolar/avisosDocente/marcarVisto.php', formData);
        }
        else {
            formData.append('id_aviso', id_aviso);
            formData.append('visto', visto);
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/marcarVisto.php', formData);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvisosService.prototype, "change", void 0);
    AvisosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvisosService);
    return AvisosService;
}());



/***/ }),

/***/ "./src/app/components/password/password.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/password/password.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n      <form [formGroup]=\"passForm\" (ngSubmit)=\"enviarPass()\">  \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'passPerfil' | translate}}</label>\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"passPerfil\" placeholder=\"{{'passPerfil' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"pf.passPerfil.invalid && pf.passPerfil.touched\">\r\n              {{'fmIncorrectPass' | translate}}\r\n          </span>                 \r\n        </div>  \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'confirmpassPerfil' | translate}}</label>\r\n          <input (keyup)=\"confirmPass()\" type=\"password\" class=\"form-control\" formControlName=\"confirmpassPerfil\" placeholder=\"{{'confirmpassPerfil' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"pf.confirmpassPerfil.invalid && pf.confirmpassPerfil.touched || pf.confirmpassPerfil.dirty && !estadoPass\">\r\n              {{'incorrectPass' | translate}}\r\n          </span>                 \r\n        </div><br>\r\n        <button type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n      </form> \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/password/password.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/password/password.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/password/password.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/password/password.component.ts ***!
  \***********************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.service */ "./src/app/components/password/password.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(_usuarioService, formBuilder, _passwordService) {
        this._usuarioService = _usuarioService;
        this.formBuilder = formBuilder;
        this._passwordService = _passwordService;
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PasswordComponent.prototype, "pf", {
        get: function () { return this.passForm.controls; },
        enumerable: true,
        configurable: true
    });
    PasswordComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.passForm = this.formBuilder.group({
            passPerfil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmpassPerfil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PasswordComponent.prototype.enviarPass = function () {
        var _this = this;
        if (this.passForm.invalid) {
            Object.keys(this.passForm.controls).forEach(function (controlKey) {
                _this.passForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        var pass1 = this.passForm.get('passPerfil').value;
        var passConfirm = this.passForm.get('confirmpassPerfil').value;
        if (pass1 == passConfirm) {
            this._passwordService.editaPass(this.jwt, this.id_usuario, pass1).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.closeModal.emit({ 'status': 1 });
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error('Las contraseñas no coinciden');
        }
    };
    PasswordComponent.prototype.confirmPass = function () {
        var pass = this.passForm.get('passPerfil').value;
        var confirm = this.passForm.get('confirmpassPerfil').value;
        if (pass == confirm) {
            this.estadoPass = true;
        }
        else {
            this.estadoPass = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PasswordComponent.prototype, "id_usuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PasswordComponent.prototype, "closeModal", void 0);
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/components/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.scss */ "./src/app/components/password/password.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _password_service__WEBPACK_IMPORTED_MODULE_2__["PasswordService"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/password/password.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/password/password.module.ts ***!
  \********************************************************/
/*! exports provided: PasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModule", function() { return PasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.component */ "./src/app/components/password/password.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PasswordModule = /** @class */ (function () {
    function PasswordModule() {
    }
    PasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_password_component__WEBPACK_IMPORTED_MODULE_2__["PasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_password_component__WEBPACK_IMPORTED_MODULE_2__["PasswordComponent"]]
        })
    ], PasswordModule);
    return PasswordModule;
}());



/***/ }),

/***/ "./src/app/components/password/password.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/password/password.service.ts ***!
  \*********************************************************/
/*! exports provided: PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
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




var PasswordService = /** @class */ (function () {
    function PasswordService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PasswordService.prototype.editaPass = function (jwt, id_usuario, pass) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('id_usuario', id_usuario);
        formData.append('contraseña', pass);
        return this._httpClient.post(this.url + 'general/usuario/edita_contrasena.php', formData);
    };
    PasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PasswordService);
    return PasswordService;
}());



/***/ }),

/***/ "./src/app/docente/avisos-docente/services/avisos-docente.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/docente/avisos-docente/services/avisos-docente.service.ts ***!
  \***************************************************************************/
/*! exports provided: AvisosDocenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosDocenteService", function() { return AvisosDocenteService; });
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




var AvisosDocenteService = /** @class */ (function () {
    function AvisosDocenteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AvisosDocenteService.prototype.consultaPrioridad = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/importanciaAviso.php' + params);
    };
    AvisosDocenteService.prototype.consulta = function (jwt, id_asignatura_grupo, id_docente) {
        var params = '?jwt=' + jwt;
        params += '&id_asignatura_grupo=' + id_asignatura_grupo;
        params += '&id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/avisosDocente.php' + params);
    };
    AvisosDocenteService.prototype.modificaAvisos = function (aviso, jwt, id_docente, idAsignaturaGrupo, id_aviso, archivo) {
        var formData = new FormData();
        formData.append('titulo', aviso.get('tituloAviso').value);
        formData.append('mensaje', aviso.get('mensaje').value);
        formData.append('fecha_inicio', aviso.get('fechaInicio').value);
        formData.append('fecha_fin', aviso.get('fechaFin').value);
        formData.append('id_docente', id_docente);
        formData.append('id_asignatura_grupo', idAsignaturaGrupo);
        if (archivo)
            formData.append('contenido', archivo);
        formData.append('id_importancia_aviso', aviso.get('importancia').value);
        formData.append('jwt', jwt);
        var fd = new FormData();
        if (id_aviso == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'controlEscolar/avisosDocente/crea.php', formData);
        }
        else {
            formData.append('id_aviso', id_aviso);
            return this._httpClient.post(this.url + 'controlEscolar/avisosDocente/edita.php', formData);
        }
    };
    AvisosDocenteService.prototype.eliminaAviso = function (jwt, idAviso) {
        var params = '?jwt=' + jwt;
        params += '&id_aviso=' + idAviso;
        return this._httpClient.get(this.url + 'controlEscolar/avisosDocente/elimina.php' + params);
    };
    AvisosDocenteService.prototype.consultaAviso = function (jwt, idAviso) {
        var params = '?jwt=' + jwt;
        params += '&id_avisos=' + idAviso;
        return this._httpClient.get(this.url + 'controlEscolar/avisosDocente/consulta.php' + params);
    };
    AvisosDocenteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvisosDocenteService);
    return AvisosDocenteService;
}());



/***/ }),

/***/ "./src/app/docente/correccion/correccion-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/docente/correccion/correccion-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CorreccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreccionRoutingModule", function() { return CorreccionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _correccion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./correccion.component */ "./src/app/docente/correccion/correccion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _correccion_component__WEBPACK_IMPORTED_MODULE_2__["CorreccionComponent"]
    }
];
var CorreccionRoutingModule = /** @class */ (function () {
    function CorreccionRoutingModule() {
    }
    CorreccionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CorreccionRoutingModule);
    return CorreccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/correccion/correccion.component.html":
/*!**************************************************************!*\
  !*** ./src/app/docente/correccion/correccion.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n  <div class=\"col-12\">\r\n      <label *ngIf=\"idMateriaFechaActividad!=5\"><b>Por favor, envia una retroalimentación explicando el motivo.</b></label>\r\n      <textarea *ngIf=\"tipo==5\" rows=\"3\" class=\"form-control\" id=\"mensaje\" name=\"mensaje\" [(ngModel)]=\"texto\" placeholder=\"Explica el motivo de la corrección\" ></textarea>\r\n      <textarea *ngIf=\"tipo==6\" rows=\"3\" class=\"form-control\" id=\"mensaje\" name=\"mensaje\" [(ngModel)]=\"texto\" placeholder=\"Explica el motivo de la invalidacion\" ></textarea>\r\n  </div>\r\n  <div class=\"col-12\">\r\n      <button *ngIf=\"tipo==5\" class=\"btn btn-success pull-right\" type=\"button\" [disabled]=\"bloquea\" (click)=\"enviar(texto)\">Solicitar corrección</button>\r\n      <button *ngIf=\"tipo==6\" class=\"btn btn-success pull-right\" type=\"button\" (click)=\"enviarIn(texto)\">Solicitar invalidacion</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n      \r\n"

/***/ }),

/***/ "./src/app/docente/correccion/correccion.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/docente/correccion/correccion.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvY29ycmVjY2lvbi9jb3JyZWNjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/docente/correccion/correccion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/docente/correccion/correccion.component.ts ***!
  \************************************************************/
/*! exports provided: CorreccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreccionComponent", function() { return CorreccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../retroalimentacion/services/retroalimentacion.service */ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorreccionComponent = /** @class */ (function () {
    function CorreccionComponent(_usuarioService, _retroService) {
        this._usuarioService = _usuarioService;
        this._retroService = _retroService;
        this.correccionSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.invalidacionSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CorreccionComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        var rol = this._usuarioService.getRol();
        this.idPersona = identity.persona_id;
        this.idRol = rol.rol_id;
    };
    CorreccionComponent.prototype.enviar = function (texto) {
        var _this = this;
        this.bloquea = true;
        if (texto != undefined) {
            if (texto != '') {
                this._retroService.correccionActividad(this.idMateriaFechaActividad, this.idPersona, this.texto, this.idRol, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.bloquea = false;
                        _this.texto = "";
                        alertify.success(response['msg']);
                        _this.correccionSuccess.emit({ 'estatus': 1 });
                    }
                    else {
                        _this.bloquea = false;
                        alertify.error('Error al enviar').dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    CorreccionComponent.prototype.enviarIn = function (texto) {
        var _this = this;
        if (texto != undefined) {
            if (texto != '') {
                this._retroService.invalidacionActividad(this.idMateriaFechaActividad, this.idPersona, this.texto, this.idRol, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.texto = "";
                        alertify.success(response['msg']);
                        _this.invalidacionSuccess.emit({ 'estatus': 1 });
                    }
                    else {
                        alertify.error('Error al enviar').dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CorreccionComponent.prototype, "idMateriaFechaActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CorreccionComponent.prototype, "tipo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CorreccionComponent.prototype, "correccionSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CorreccionComponent.prototype, "invalidacionSuccess", void 0);
    CorreccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-correccion',
            template: __webpack_require__(/*! ./correccion.component.html */ "./src/app/docente/correccion/correccion.component.html"),
            styles: [__webpack_require__(/*! ./correccion.component.scss */ "./src/app/docente/correccion/correccion.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_2__["RetroalimentacionService"]])
    ], CorreccionComponent);
    return CorreccionComponent;
}());



/***/ }),

/***/ "./src/app/docente/correccion/correccion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/docente/correccion/correccion.module.ts ***!
  \*********************************************************/
/*! exports provided: CorreccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreccionModule", function() { return CorreccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _correccion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./correccion-routing.module */ "./src/app/docente/correccion/correccion-routing.module.ts");
/* harmony import */ var _correccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./correccion.component */ "./src/app/docente/correccion/correccion.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CorreccionModule = /** @class */ (function () {
    function CorreccionModule() {
    }
    CorreccionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_correccion_component__WEBPACK_IMPORTED_MODULE_3__["CorreccionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _correccion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorreccionRoutingModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            exports: [_correccion_component__WEBPACK_IMPORTED_MODULE_3__["CorreccionComponent"]]
        })
    ], CorreccionModule);
    return CorreccionModule;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/services/video-conferencia.service.ts ***!
  \*********************************************************************************/
/*! exports provided: VideoConferenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenciaService", function() { return VideoConferenciaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoConferenciaService = /** @class */ (function () {
    function VideoConferenciaService(_httpClient, _http) {
        this._httpClient = _httpClient;
        this._http = _http;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.mostrarUsuarioConferencia = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.salaCerrada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VideoConferenciaService.prototype.elimina = function (jwt, id_videoconferencia) {
        var params = '?jwt=' + jwt;
        params += '&id_videoconferencia=' + id_videoconferencia;
        return this._httpClient.get(this.url + 'learning/videoconferencia/elimina.php' + params);
    };
    VideoConferenciaService.prototype.consulta = function (jwt, id_persona) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            // .set('jwt', jwt)
            .set('id_persona', id_persona);
        return this._httpClient.get(this.url + 'learning/videoconferencia/consultausuario.php', { params: params });
    };
    VideoConferenciaService.prototype.creaMeet = function (id_videoconferencia) {
        var formData = new FormData();
        formData.append('id_videoconferencia', id_videoconferencia);
        return this._httpClient.post(this.url + 'extras/zoom/createMeet.php', formData);
    };
    VideoConferenciaService.prototype.cierraMeet = function (id_videoconferencia) {
        var formData = new FormData();
        formData.append('id_videoconferencia', id_videoconferencia);
        return this._httpClient.post(this.url + 'learning/videoconferencia/terminarVideoconferencia.php', formData);
    };
    VideoConferenciaService.prototype.consultaMeet = function (id_videoconferencia) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            // .set('jwt', jwt)
            .set('id_videoconferencia', id_videoconferencia);
        return this._httpClient.get(this.url + 'extras/zoom/getMeet.php', { params: params });
    };
    VideoConferenciaService.prototype.consultaVideoconferencias = function (jwt, id_asignatura_grupo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt)
            .set('asignatura_grupo_id', id_asignatura_grupo);
        return this._httpClient.get(this.url + 'catalogosLE/videoConferencia.php', { params: params });
    };
    VideoConferenciaService.prototype.creaUsuario = function (jwt, form) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('apikey', form.apiKey);
        formData.append('apisecret', form.apiSecret);
        formData.append('idmeeting', form.idMeeting);
        return this._httpClient.post(this.url + 'learning/videoconferencia/creaUsuario.php', formData);
    };
    VideoConferenciaService.prototype.creaConferencia = function (jwt, form, edicion, id_asignatura_grupo, id_videoconferencia, fecha, tipo_fecha) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('nombre', form.titulo);
        formData.append('descripcion', form.descripcion);
        formData.append('url_meet', form.url ? form.url : '');
        formData.append('zona_horaria', form.zonaHoraria);
        formData.append('asignatura_grupo_id', id_asignatura_grupo);
        formData.append('tipo_fecha', tipo_fecha);
        if (tipo_fecha == 0) {
            formData.append('fecha_inicio', fecha.inicio);
            formData.append('fecha_fin', fecha.fin);
        }
        else if (tipo_fecha == 1) {
            formData.append('arreglo_fechas', JSON.stringify(fecha));
        }
        if (edicion == 0) {
            return this._httpClient.post(this.url + 'learning/videoconferencia/creaConferencia.php', formData);
        }
        else {
            formData.append('id_videoconferencia', id_videoconferencia);
            return this._httpClient.post(this.url + 'learning/videoconferencia/editaConferencia.php', formData);
        }
    };
    VideoConferenciaService.prototype.consultaConferencia = function (jwt, id_videoconferencia) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt)
            .set('id_videoconferencia', id_videoconferencia);
        return this._httpClient.get(this.url + 'learning/videoconferencia/consultaConferencia.php', { params: params });
    };
    VideoConferenciaService.prototype.semaforoConferencia = function (jwt) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt);
        return this._httpClient.get(this.url + 'learning/videoconferencia/semaforosUsuarios.php', { params: params });
    };
    VideoConferenciaService.prototype.insertaAcceso = function (jwt, id_videoconferencia, id_persona) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('id_video_conferencia', id_videoconferencia);
        formData.append('id_persona', id_persona);
        return this._httpClient.post(this.url + 'learning/videoconferencia/insertaAcceso.php', formData);
    };
    VideoConferenciaService.prototype.consultaAsistencia = function (jwt, id_videoconferencia) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt)
            .set('id_videoconferencia', id_videoconferencia);
        return this._httpClient.get(this.url + 'learning/videoconferencia/consultaAsistencia.php', { params: params });
    };
    VideoConferenciaService.prototype.consultaConferenciasMateria = function (jwt, id_materia) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt)
            .set('id_materia', id_materia);
        return this._httpClient.get(this.url + 'learning/notificaciones/consultaConferenciasMateria.php', { params: params });
    };
    VideoConferenciaService.prototype.consultaV = function (tipo, max, min) {
        // var params = '?tipo_consulta='+tipo;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('tipo_consulta', tipo)
            .set('max', max)
            .set('min', min);
        return this._httpClient.get(this.url + '/controlEscolar/videconferencia/consultas.php', { params: params });
    };
    VideoConferenciaService.prototype.busquedaVid = function (max, min, busqueda) {
        // var params = '?tipo_consulta='+tipo;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('busqueda', busqueda)
            .set('max', max)
            .set('min', min);
        return this._httpClient.get(this.url + '/controlEscolar/videconferencia/busquedaVideoconferencia.php', { params: params });
    };
    VideoConferenciaService.prototype.consultaAsist = function (id_videoconferencia) {
        var params = '?id_videoconferencia=' + id_videoconferencia;
        return this._httpClient.get(this.url + '/learning/videoconferencia/consultaAsistencia.php' + params);
    };
    VideoConferenciaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], VideoConferenciaService);
    return VideoConferenciaService;
}());



/***/ }),

/***/ "./src/app/models/admin/privilegiosContenido.ts":
/*!******************************************************!*\
  !*** ./src/app/models/admin/privilegiosContenido.ts ***!
  \******************************************************/
/*! exports provided: privilegiosContenido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privilegiosContenido", function() { return privilegiosContenido; });
var privilegiosContenido = [
    { "id": 1, "opcion": "Carga de contenido", "icono": "fa-book", "url": "modulos" },
    { "id": 2, "opcion": "Contenidos en grupo", "icono": "fa-users", "url": "modulosGrupo" },
    { "id": 3, "opcion": "Fechas y ponderaciones", "icono": "fa-calendar", "url": "control-actividad" },
    { "id": 4, "opcion": "Carga de objetivos ", "icono": "fa-cubes", "url": "objetivos-ponderaciones" },
    { "id": 5, "opcion": "Vista previa", "icono": "fa-eye", "url": "/materia" }
];


/***/ }),

/***/ "./src/app/models/particles.ts":
/*!*************************************!*\
  !*** ./src/app/models/particles.ts ***!
  \*************************************/
/*! exports provided: particles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particles", function() { return particles; });
var particles = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 100
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};


/***/ }),

/***/ "./src/app/models/rol.ts":
/*!*******************************!*\
  !*** ./src/app/models/rol.ts ***!
  \*******************************/
/*! exports provided: Rol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rol", function() { return Rol; });
var Rol = /** @class */ (function () {
    function Rol() {
    }
    return Rol;
}());



/***/ }),

/***/ "./src/app/services/alumno.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/alumno.service.ts ***!
  \********************************************/
/*! exports provided: AlumnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoService", function() { return AlumnoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlumnoService = /** @class */ (function () {
    function AlumnoService(_httpClient) {
        this._httpClient = _httpClient;
        this.infoPlataformaCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    AlumnoService.prototype.consultaPlataforma = function () {
        return this._httpClient.get(this.url + 'general/alumno/consultaPlataforma.php');
    };
    AlumnoService.prototype.getprivilegiosAlumno = function () {
        var privilegiosAlumno = JSON.parse(localStorage.getItem('privilegiosAlumno'));
        if (privilegiosAlumno !== 'null' && privilegiosAlumno !== undefined) {
            this.privilegiosAlumno = privilegiosAlumno;
        }
        else {
            this.privilegiosAlumno = null;
        }
        return this.privilegiosAlumno;
    };
    AlumnoService.prototype.getSituacionAlumno = function () {
        var situacionAlumno = JSON.parse(localStorage.getItem('situacionAlumno'));
        if (situacionAlumno !== 'null' && situacionAlumno !== undefined) {
            this.situacionAlumno = situacionAlumno;
        }
        else {
            this.situacionAlumno = null;
        }
        return this.situacionAlumno;
    };
    AlumnoService.prototype.getSituacionPago = function () {
        var situacionPago = JSON.parse(localStorage.getItem('situacionPago'));
        if (situacionPago !== 'null' && situacionPago !== undefined) {
            this.situacionPago = situacionPago;
        }
        else {
            this.situacionPago = null;
        }
        return this.situacionPago;
    };
    AlumnoService.prototype.seleccionaPlan = function (idSuscripcion) {
        var formData = new FormData();
        formData.append('id_suscripcion', idSuscripcion);
        return this._httpClient.post(this.url + 'pagos/alumno/seleccionaPlan.php', formData);
    };
    AlumnoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlumnoService);
    return AlumnoService;
}());



/***/ }),

/***/ "./src/app/services/docente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/docente.service.ts ***!
  \*********************************************/
/*! exports provided: DocenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteService", function() { return DocenteService; });
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




var DocenteService = /** @class */ (function () {
    function DocenteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    DocenteService.prototype.modificaProfesor = function (form, jwt, id) {
        var formData = new FormData();
        formData.append('cedula_profesional', '');
        formData.append('clave_profesor', form.get('clave').value);
        formData.append('id_persona', id);
        formData.append('jwt', jwt);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/docente/creaSimple.php', formData);
    };
    DocenteService.prototype.consultaDocente = function (id_persona, jwt) {
        var params = '?id_docente=' + id_persona;
        return this._httpClient.get(this.url + '/controlEscolar/docente/consulta.php' + params);
    };
    DocenteService.prototype.consultaTotalDocentes = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/docente/totalDocentes.php' + params);
    };
    DocenteService.prototype.consultaBusqueda = function (jwt, busqueda, min, max, tipoForm) {
        var params = '?jwt=' + jwt;
        params += '&min=' + min;
        params += '&max=' + max;
        params += '&tipo_busqueda=' + tipoForm;
        if (busqueda)
            params += '&busqueda=' + busqueda;
        return this._httpClient.get(this.url + '/controlEscolar/docente/busqueda_docente.php' + params);
    };
    DocenteService.prototype.consultaChat = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/administracion-docente/consultaEstatusChat.php' + params);
    };
    DocenteService.prototype.cambiaChat = function (jwt, estatus) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('estatus', estatus);
        return this._httpClient.post(this.url + 'controlEscolar/administracion-docente/cambiaChat.php', formData);
    };
    DocenteService.prototype.guardaTipoC = function (estatus, id_persona) {
        var formData = new FormData();
        formData.append('estatus', estatus);
        formData.append('id_docente', id_persona);
        return this._httpClient.post(this.url + 'controlEscolar/administracion-docente/cambiaCargaContenido.php', formData);
    };
    DocenteService.prototype.consultaActividades = function (clave, id_asignatura) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('clave_usuario', clave)
            .set('id_asignatura', id_asignatura);
        return this._httpClient.get(this.url + 'controlEscolar/docente/consultaActividades.php', { params: params });
    };
    DocenteService.prototype.clonarActividad = function (id_actividad, id_modulo) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('id_modulo', id_modulo);
        return this._httpClient.post(this.url + 'learning/actividad/clonarActividad.php', formData);
    };
    DocenteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocenteService);
    return DocenteService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map