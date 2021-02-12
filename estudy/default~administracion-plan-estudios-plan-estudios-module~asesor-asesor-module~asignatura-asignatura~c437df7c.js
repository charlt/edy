(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-plan-estudios-plan-estudios-module~asesor-asesor-module~asignatura-asignatura~c437df7c"],{

/***/ "./src/app/docente/grupo/services/grupo.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/docente/grupo/services/grupo.service.ts ***!
  \*********************************************************/
/*! exports provided: GrupoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoService", function() { return GrupoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
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
    function GrupoService(_http, _httpClient, _fechaService) {
        this._http = _http;
        this._httpClient = _httpClient;
        this._fechaService = _fechaService;
        this.changeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    GrupoService.prototype.consulta = function (id) {
        var params = '?id_grupo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/grupo/consulta.php' + params);
    };
    GrupoService.prototype.consultaAsignaturaGrupo = function (id) {
        var params = '?id_asignatura_grupo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consulta.php' + params);
    };
    GrupoService.prototype.totalAlumnos = function (id) {
        var params = '?id_asignatura_grupo=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/totalAlumnos.php' + params);
    };
    GrupoService.prototype.consultaAlumnos = function (id, idAsignatura, tipoBusqueda, ini, fin) {
        var params = '?id_asignatura_grupo=' + id;
        params += '&id_asignatura=' + idAsignatura;
        if (tipoBusqueda == 1) {
            return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consultaAlumnosPendientes.php' + params);
        }
        else if (tipoBusqueda == 2) {
            return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consultaAlumnosMensajes.php' + params);
        }
        else if (tipoBusqueda == 3) {
            return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consultaAlumnosRetroalimentacion.php' + params);
        }
        else if (tipoBusqueda == 4) {
            params += '&ini=' + ini;
            params += '&fin=' + fin;
            return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/consultaAlumnosCompletos.php' + params);
        }
    };
    GrupoService.prototype.busquedaAlumno = function (id_asignatura_grupo, busqueda) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_asignatura_grupo', id_asignatura_grupo).set('busqueda', busqueda);
        return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/busquedaAlumno.php', { params: params });
    };
    GrupoService.prototype.getSelectedAsignaturaGrupo = function () {
        var selectedAsignaturaGrupo = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo'));
        if (selectedAsignaturaGrupo !== undefined) {
            this.selectedAsignaturaGrupo = selectedAsignaturaGrupo;
        }
        else {
            this.selectedAsignaturaGrupo = null;
        }
        return this.selectedAsignaturaGrupo;
    };
    GrupoService.prototype.consultaArchivos = function (materia_id, jwt) {
        var params = '?id_materia=' + materia_id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/materia/consultaArchivos.php' + params);
    };
    GrupoService.prototype.consultaMateria = function (jwt, id) {
        var params = '?id_asignatura_grupo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/materia/consultaDummy.php' + params);
    };
    GrupoService.prototype.consultaMenu = function (jwt, id_asignatura_grupo, id_materia) {
        var params = '?jwt=' + jwt;
        params += '&id_asignatura_grupo=' + id_asignatura_grupo;
        params += '&id_materia=' + id_materia;
        return this._httpClient.get(this.url + 'learning/materia/menu.php' + params);
    };
    GrupoService.prototype.seleccionaMateriaDummy = function (idAsignaturaGrupo, jwt) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.consultaMateria(jwt, idAsignaturaGrupo).subscribe(function (response) {
                if (response && response['status']) {
                    var materia_1 = response['materia'];
                    var arreglo = _this._fechaService.validaVigencia(materia_1.fecha_inicio, materia_1.fecha_fin, 1);
                    materia_1.fecha_inicio = new Date(materia_1.fecha_inicio * 1000);
                    materia_1.fecha_fin = new Date(materia_1.fecha_fin * 1000);
                    materia_1.activa = arreglo[0];
                    materia_1.estado = arreglo[1];
                    localStorage.setItem('selectedMateria', JSON.stringify(response['materia']));
                    localStorage.setItem('materias', JSON.stringify([{}]));
                    var idAsignaturaGrupo_1 = response['materia'].asignatura_grupo_id;
                    var idMateria = response['materia'].materia_id;
                    _this.consultaMenu(jwt, idAsignaturaGrupo_1, idMateria).subscribe(function (response) {
                        if (response && response['status']) {
                            var actividad_1 = [];
                            if (response['modulo']) {
                                response['modulo'].forEach(function (modulo) {
                                    if (modulo.actividades && modulo.actividades.length) {
                                        modulo.actividades.forEach(function (actividades) {
                                            actividad_1.push(actividades.actividad_id);
                                        });
                                    }
                                });
                            }
                            localStorage.setItem('seriacionActividad', JSON.stringify(actividad_1));
                            localStorage.setItem('modulos', JSON.stringify(response['modulo']));
                            resolve(materia_1);
                        }
                    }, function (error) {
                        console.log(error);
                        resolve(null);
                    });
                }
            }, function (error) {
                console.log(error);
                resolve(null);
            });
        });
    };
    GrupoService.prototype.consultaModulos = function (id, nombre_modulo, jwt) {
        var params = '?id_asignatura_grupo=' + id;
        params += '&nombre_modulo=' + nombre_modulo;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/moduloGrupo/registra.php' + params);
    };
    GrupoService.prototype.modificaCalificacion = function (id_actividad, id_materia, calificacion) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('id_materia', id_materia);
        formData.append('calificacion', calificacion);
        return this._httpClient.post(this.url + 'learning/fechaActividad/registrarCalificacionDocente.php', formData);
    };
    GrupoService.prototype.modificaCalificacionFinal = function (id_alumno, calificacion, id_asignatura_grupo) {
        var formData = new FormData();
        formData.append('id_alumno', id_alumno);
        formData.append('calificacion', calificacion);
        formData.append('id_asignatura_grupo', id_asignatura_grupo);
        return this._httpClient.post(this.url + 'controlEscolar/materia/actualizaCalificacion.php', formData);
    };
    GrupoService.prototype.cerrarMaterias = function (idGrupo, tipoCalculo) {
        var formData = new FormData();
        formData.append('id_grupo', idGrupo);
        formData.append('revision', tipoCalculo);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/grupo/calificaMaterias.php', formData);
    };
    GrupoService.prototype.consultaActividades = function (idAsignaturaGrupo) {
        var params = '?id_asignatura_grupo=' + idAsignaturaGrupo;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaActividadesGrupo.php' + params);
    };
    GrupoService.prototype.consultaPrivilegiosDocente = function () {
        return this._httpClient.get(this.url + 'general/privilegios/privilegios_docente.php');
    };
    GrupoService.prototype.guardarPorcentajes = function (form, id_asignatura_grupo, id_modulo, id_actividad) {
        var formData = new FormData();
        formData.append('id_asignatura_grupo', id_asignatura_grupo);
        formData.append('id_modulo', id_modulo);
        formData.append('id_actividad', id_actividad);
        form.forEach(function (item) {
            formData.append('arreglo_actividad_id[]', item.actividad_id);
            formData.append('arreglo_ponderacion[]', item.porcentaje);
        });
        return this._httpClient.post(this.url + 'controlEscolar/materia/calificacionModulo.php', formData);
    };
    GrupoService.prototype.editaVisible = function (visible, id_actividad) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('visible', visible).set('id_actividad', id_actividad);
        return this._httpClient.get(this.url + 'learning/actividad/editaVisible.php', { params: params });
    };
    GrupoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_4__["FechaService"]])
    ], GrupoService);
    return GrupoService;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-plan-estudios-plan-estudios-module~asesor-asesor-module~asignatura-asignatura~c437df7c.js.map