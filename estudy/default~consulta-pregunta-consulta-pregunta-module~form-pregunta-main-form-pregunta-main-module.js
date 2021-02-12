(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~consulta-pregunta-consulta-pregunta-module~form-pregunta-main-form-pregunta-main-module"],{

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

/***/ "./src/app/administracion/carga-actividades/services/pregunta.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/pregunta.service.ts ***!
  \*******************************************************************************/
/*! exports provided: PreguntaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaService", function() { return PreguntaService; });
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




var PreguntaService = /** @class */ (function () {
    function PreguntaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.preguntaEliminada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PreguntaService.prototype.getPonderacion = function () {
        // console.log(this.preguntaEliminada);
        var ponderacion = localStorage.getItem('ponderacion');
        console.log(ponderacion);
        localStorage.removeItem('ponderación');
        return ponderacion;
    };
    PreguntaService.prototype.consulta = function (idDatosPregunta, jwt) {
        var params = '?id_datos_pregunta=' + idDatosPregunta;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/datosPregunta/consulta.php' + params);
    };
    PreguntaService.prototype.consultaTipoPregunta = function (jwt, idTipoActividad) {
        var params = '?jwt=' + jwt;
        params += '&id_tipo_actividad=' + idTipoActividad;
        return this._httpClient.get(this.url + 'catalogosLE/tipoPregunta.php' + params);
    };
    PreguntaService.prototype.eliminaArchivo = function (jwt, id_pregunta, tipoPregunta) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('id_pregunta', id_pregunta);
        formData.append('id_tipo_pregunta', tipoPregunta);
        return this._httpClient.post(this.url + 'learning/contenidoPregunta/eliminaContenido.php', formData);
    };
    PreguntaService.prototype.consultaContenidoPregunta = function (idDatosPregunta, idTipoPregunta, jwt) {
        var params = '?id_datos_pregunta=' + idDatosPregunta;
        params += '&id_tipo_pregunta=' + idTipoPregunta;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/contenidoPregunta/consulta.php' + params);
    };
    PreguntaService.prototype.consultaDificultad = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/dificultad.php' + params);
    };
    PreguntaService.prototype.elimina = function (id, idActividad) {
        var params = '?id_dato_pregunta=' + id;
        params += '&id_actividad=' + idActividad;
        return this._httpClient.get(this.url + 'learning/datosPregunta/elimina.php' + params);
    };
    PreguntaService.prototype.orden = function (orden_nuevo, id_actividad, id_dato_pregunta, jwt) {
        var params = '?orden_nuevo=' + orden_nuevo;
        params += '&id_dato_pregunta=' + id_dato_pregunta;
        params += '&id_actividad=' + id_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/datosPregunta/orden.php' + params);
    };
    PreguntaService.prototype.modificaPregunta = function (form, id_actividad, dato_pregunta_id, jwt) {
        var formData = new FormData();
        var datos = [{ var: 'id_dificultad', control: 'dificultad' },
            { var: 'aleatorio', control: 'aleatorio' },
            { var: 'ponderacion', control: 'ponderacion' },
            { var: 'retroalimentacion', control: 'retroalimentacion' }
        ];
        datos.forEach(function (dato) {
            formData.append(dato.var, form.get(dato.control) ? form.get(dato.control).value : '0');
        });
        formData.append('orden', form.get('orden').value);
        formData.append('id_tipo_pregunta', form.get('tipoPregunta').value);
        formData.append('id_actividad', id_actividad);
        formData.append('retroalimentacion_docente', '');
        formData.append('jwt', jwt);
        var fd = new FormData();
        if (dato_pregunta_id == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/datosPregunta/crea.php', formData);
        }
        else {
            formData.append('id_dato_pregunta', dato_pregunta_id);
            return this._httpClient.post(this.url + 'learning/datosPregunta/edita.php', formData);
        }
    };
    PreguntaService.prototype.modificaContenidoPregunta = function (form, id_dato_pregunta, id_pregunta, tipoPregunta, jwt) {
        var formData = new FormData();
        console.log(form);
        formData.append('id_datos_pregunta', id_dato_pregunta);
        formData.append('id_tipo_pregunta', tipoPregunta);
        formData.append('pregunta', form.get('instruccion').value);
        formData.append('contenido', form.get('contenido').value);
        formData.append('jwt', jwt);
        if (tipoPregunta == '2') {
            formData.append('tipo', form.get('tipo').value);
        }
        if (tipoPregunta == '5') {
            formData.append('orientacion', form.get('orientacion').value);
        }
        if (tipoPregunta == '6') {
            formData.append('pregunta1', form.get('pregunta1').value);
            formData.append('pregunta2', form.get('pregunta2').value);
            formData.append('pregunta3', form.get('pregunta3').value);
        }
        /*if(tipoPregunta == '7'){
          formData.append('momento',form.get('momento').value);
        }*/
        if (tipoPregunta == '11') {
            formData.append('id_formato', form.get('idFormato').value);
            formData.append('num_archivos', form.get('numArchivos').value);
        }
        var fd = new FormData();
        if (id_pregunta == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/contenidoPregunta/crea.php', formData);
        }
        else {
            formData.append('id_pregunta', id_pregunta);
            return this._httpClient.post(this.url + 'learning/contenidoPregunta/edita.php', formData);
        }
    };
    PreguntaService.prototype.sumaPonderacion = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/datosPregunta/ponderacionTotal.php' + params);
    };
    PreguntaService.prototype.consultaFormatos = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/cat_formato.php' + params);
    };
    PreguntaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PreguntaService);
    return PreguntaService;
}());



/***/ })

}]);
//# sourceMappingURL=default~consulta-pregunta-consulta-pregunta-module~form-pregunta-main-form-pregunta-main-module.js.map